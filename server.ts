import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';

// Load variables
dotenv.config();

// Resolve paths for ES Modules and CommonJS
const getMetaUrl = () => {
  try {
    return new Function('return import.meta.url')();
  } catch {
    return '';
  }
};

const _filename = typeof __filename !== 'undefined' ? __filename : (getMetaUrl() ? fileURLToPath(getMetaUrl()) : '');
const _dirname = typeof __dirname !== 'undefined' ? __dirname : (_filename ? path.dirname(_filename) : process.cwd());

const PORT = 3000;
const app = express();

app.use(express.json());

// Import CMS Data directly to feed SEO tag injection and sitemaps
import { 
  SEO_ROUTES_META, 
  BRAND_CONFIG, 
  CLINICAL_AFFILIATIONS, 
  ARTICLES, 
  VIDEOS, 
  VERIFIED_SOURCES,
  EDUCATION_TIMELINE
} from './src/data.ts';

// 0. Redirection & Normalization Rules (Technical SEO Core)
app.use((req, res, next) => {
  const host = req.headers.host || '';
  const scheme = req.headers['x-forwarded-proto'] || 'http';
  const url = req.originalUrl || '';

  // Log request to requests.log for auditing
  try {
    fs.appendFileSync(
      path.resolve(_dirname, 'requests.log'),
      `[${new Date().toISOString()}] ${req.method} ${host} ${scheme} ${url}\n`
    );
  } catch (e) {}

  // Force HTTPS in production on canonical domains
  const isProd = _filename.includes('dist') || _filename.endsWith('.cjs');
  const isStagingDomain = host.includes('.run.app') || host.includes('localhost') || host.includes('127.0.0.1');
  const isCanonicalHost = host === 'drliyanmassaband.com' || host === 'www.drliyanmassaband.com';

  if (isProd && isCanonicalHost) {
    // Redirect www to non-www and Http to Https
    if (scheme !== 'https' || host.startsWith('www.')) {
      return res.redirect(301, `https://drliyanmassaband.com${url}`);
    }
  }

  // Trailing slash, lowercase path, and duplicate-homepage normalization (disabled on staging/development domains to prevent preview iframe conflicts)
  if (!isStagingDomain && !url.startsWith('/api/') && !url.startsWith('/@') && !url.startsWith('/node_modules/') && !url.includes('.')) {
    const queryIndex = url.indexOf('?');
    let pathPart = queryIndex === -1 ? url : url.slice(0, queryIndex);
    const queryPart = queryIndex === -1 ? '' : url.slice(queryIndex);
    let dirty = false;

    // Reject uppercase letters in URLs
    if (/[A-Z]/.test(pathPart)) {
      pathPart = pathPart.toLowerCase();
      dirty = true;
    }

    // Force trailing slash
    if (!pathPart.endsWith('/')) {
      pathPart += '/';
      dirty = true;
    }

    // Resolve duplicate homepages
    if (pathPart === '/index.html/') {
      pathPart = '/';
      dirty = true;
    }

    if (dirty) {
      const targetHost = isCanonicalHost ? 'drliyanmassaband.com' : host;
      const isLocal = host.includes('localhost') || host.includes('127.0.0.1');
      const targetScheme = isLocal ? 'http' : 'https';
      return res.redirect(301, `${targetScheme}://${targetHost}${pathPart}${queryPart}`);
    }
  }

  // Set highly secure HTTP response headers
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  
  next();
});

// 1. Dynamic Sitemap Index & Sub-Sitemaps Generation
app.get('/sitemap.xml', (req, res) => {
  const host = req.headers.host || 'drliyanmassaband.com';
  const scheme = req.headers['x-forwarded-proto'] || 'https';
  const domain = `${scheme}://${host}`;

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${domain}/sitemap-pages.xml</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${domain}/sitemap-articles.xml</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${domain}/sitemap-videos.xml</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </sitemap>
</sitemapindex>
`;
  res.header('Content-Type', 'application/xml');
  res.send(xml);
});

// 1b. Pages Sub-Sitemap with Image Schema markup mapping
app.get('/sitemap-pages.xml', (req, res) => {
  const host = req.headers.host || 'drliyanmassaband.com';
  const scheme = req.headers['x-forwarded-proto'] || 'https';
  const domain = `${scheme}://${host}`;

  const staticPaths = Object.keys(SEO_ROUTES_META);
  const date = new Date().toISOString().split('T')[0];

  const sitemapUrls = staticPaths.map(route => {
    const url = `${domain}${route}`.replace(/([^:])\/+/g, '$1/');
    const priority = route === '/' ? '1.0' : route.includes('disclaimer') || route.includes('standards') ? '0.3' : '0.8';

    // Image integration for key pages
    let imageMarkup = '';
    if (route === '/' || route === '/dr-liyan-massaband/') {
      imageMarkup = `
    <image:image>
      <image:loc>https://picsum.photos/seed/drliyan-portrait/800/800</image:loc>
      <image:title>Dr. Liyan Massaband Official Portrait</image:title>
      <image:caption>Dr. Liyan Massaband, D.M.D., M.P.H., dentist and preventive public health advocate.</image:caption>
    </image:image>`;
    }

    return `  <url>
    <loc>${url}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>${imageMarkup}
  </url>`;
  }).join('\n');

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${sitemapUrls}
</urlset>`;

  res.header('Content-Type', 'application/xml');
  res.send(sitemapXml);
});

// 1c. Articles Sub-Sitemap
app.get('/sitemap-articles.xml', (req, res) => {
  const host = req.headers.host || 'drliyanmassaband.com';
  const scheme = req.headers['x-forwarded-proto'] || 'https';
  const domain = `${scheme}://${host}`;

  const sitemapUrls = ARTICLES.map(article => {
    const url = `${domain}/articles/${article.slug}/`.replace(/([^:])\/+/g, '$1/');
    return `  <url>
    <loc>${url}</loc>
    <lastmod>${article.modifiedDate || article.publishDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`;
  }).join('\n');

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${domain}/articles/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
${sitemapUrls}
</urlset>`;

  res.header('Content-Type', 'application/xml');
  res.send(sitemapXml);
});

// 1d. Videos Sub-Sitemap with Google Video XML standards
app.get('/sitemap-videos.xml', (req, res) => {
  const host = req.headers.host || 'drliyanmassaband.com';
  const scheme = req.headers['x-forwarded-proto'] || 'https';
  const domain = `${scheme}://${host}`;

  const sitemapUrls = VIDEOS.map(video => {
    const url = `${domain}/videos/${video.id}/`.replace(/([^:])\/+/g, '$1/');
    const thumb = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;
    
    // Parse length to seconds if text like "05:40"
    let seconds = 300;
    if (video.duration && video.duration.includes(':')) {
      const [m, s] = video.duration.split(':').map(Number);
      seconds = (m * 60) + (s || 0);
    }

    return `  <url>
    <loc>${url}</loc>
    <lastmod>${video.publishDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <video:video>
      <video:thumbnail_loc>${thumb}</video:thumbnail_loc>
      <video:title>${video.title.slice(0, 95)}</video:title>
      <video:description>${video.description.slice(0, 250)}</video:description>
      <video:player_loc>https://www.youtube.com/embed/${video.youtubeId}</video:player_loc>
      <video:duration>${seconds}</video:duration>
      <video:publication_date>${video.publishDate}T00:00:00Z</video:publication_date>
    </video:video>
  </url>`;
  }).join('\n');

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  <url>
    <loc>${domain}/videos/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
${sitemapUrls}
</urlset>`;

  res.header('Content-Type', 'application/xml');
  res.send(sitemapXml);
});

// 2. Dynamic, Domain-Aware Robots.txt (Excludes staging from indexation)
app.get('/robots.txt', (req, res) => {
  const host = req.headers.host || 'drliyanmassaband.com';
  const scheme = req.headers['x-forwarded-proto'] || 'https';
  const domain = `${scheme}://${host}`;

  const isStaging = host.includes('.run.app') || host.includes('localhost') || host.includes('127.0.0.1');

  if (isStaging) {
    // Rigid crawl locks for staging environments
    const robotsStaging = `User-agent: *
Disallow: /

# Prevent crawl leakage in staging environments
Noindex: /
`;
    res.header('Content-Type', 'text/plain');
    return res.send(robotsStaging);
  }

  // Production robots mapping
  const robotsProduction = `User-agent: *
Allow: /

# Disallow private and system directories
Disallow: /admin/
Disallow: /api/
Disallow: /preview/
Disallow: /search/
Disallow: /thank-you/
Disallow: /*?preview=
Disallow: /*?draft=

Sitemap: ${domain}/sitemap.xml
`;
  res.header('Content-Type', 'text/plain');
  res.send(robotsProduction);
});

// 3. Enquiry Router handling (Patient, Media, Speaking, Academic)
app.post('/api/enquiries', (req, res) => {
  const { type, fullName, email, phone, message, dateOfBirth, preferredLocation } = req.body;

  if (!fullName || !email || !type || !message) {
    return res.status(400).json({ error: 'Please supply all mandatory fields: name, email, query type, and note content.' });
  }

  // HIPAA / Privacy warning: block dental chart details, SSN records, or clinical terms
  const sensitiveKeywords = [
    'ssn', 'social security', 'credit card', 'insurance policy number', 
    'medicare', 'medicaid', 'diagnosis code', 'icd-10', 'treatment history',
    'medical license', 'patient records', 'radiograph file'
  ];
  const textToCheck = `${message} ${fullName} ${type}`.toLowerCase();
  if (sensitiveKeywords.some(keyword => textToCheck.includes(keyword))) {
    return res.status(400).json({ 
      error: 'HIPAA Compliance Warning: For patient safety and federal privacy standards, please do not supply private medical identifiers, government insurance policies, diagnostic parameters, or health records via this general public hub.' 
    });
  }

  // Route depending on professional vs patient parameters
  if (type === 'Burbank Appointment' || type === 'Magnolia Dentistry') {
    return res.status(200).json({
      success: true,
      routingDetails: {
        destination: 'Magnolia Dentistry (Burbank Reception)',
        actionUrl: 'https://www.magnoliadentistry.com/contact-us/',
        message: 'Your care inquiry has been matched for Burbank scheduling. To complete active bookings securely, please proceed to the certified Magnolia portal.'
      }
    });
  }

  if (type === 'Beverly Hills Appointment' || type === 'ConfiDental Beverly Hills') {
    return res.status(200).json({
      success: true,
      routingDetails: {
        destination: 'ConfiDental Beverly Hills (Beverly Hills Placement)',
        actionUrl: 'https://confidentalbeverlyhills.com/contact/',
        message: 'Your care inquiry has been matched for Beverly Hills smile designs. For direct secure clinical appointments, please finalize via the official Beverly Hills channel.'
      }
    });
  }

  // Handle general media and speaking engagements standard confirmation
  res.status(200).json({
    success: true,
    routingDetails: {
      destination: 'Dr. Liyan Massaband Brand Relations Office',
      message: 'Thank you for reaching her professional network. Our correspondence desk will review your inquiry against our verified calendar assets within 48 business hours.'
    }
  });
});

// 3b. Newsletter Enrollment infrastructure - deactivated by default
app.post('/api/newsletter', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: 'Please provide both your name and email address to process enrollment.' });
  }
  return res.status(200).json({
    success: false,
    message: 'Newsletter subscription features are currently deactivated by client request to focus solely on direct academic clinical coordination.'
  });
});

// 3c. Client-side browser error logger
app.post('/api/log-client-error', (req, res) => {
  const errorData = req.body;
  try {
    const logMessage = `[${new Date().toISOString()}] CLIENT ERROR: ${JSON.stringify(errorData)}\n`;
    fs.appendFileSync(path.resolve(_dirname, 'requests.log'), logMessage);
    console.error('Captured client error:', errorData);
  } catch (e) {
    console.error('Failed to write client error:', e);
  }
  res.json({ logged: true });
});

// Helper for SEO template replacement, verification tags, analytics and Structured Graph Schema
function injectSeoSolarCore(html: string, currentPath: string, domain: string, host: string): string {
  // Normalize path
  let cleanPath = currentPath;
  if (!cleanPath.endsWith('/')) {
    cleanPath += '/';
  }

  // Fetch or fallback
  let meta = SEO_ROUTES_META[cleanPath];

  // Dynamic checks for structured detail paths
  if (!meta) {
    if (cleanPath.startsWith('/articles/')) {
      const slug = cleanPath.split('/')[2];
      const article = ARTICLES.find(a => a.slug === slug);
      if (article) {
        meta = {
          title: `${article.title} | Insights by Dr. Liyan Massaband`,
          description: article.excerpt,
          canonical: `/articles/${article.slug}/`,
          ogType: 'article',
          ogImage: 'https://picsum.photos/seed/articleblog/1200/630',
          robots: 'index, follow',
          schemaType: 'Article'
        };
      }
    } else if (cleanPath.startsWith('/videos/')) {
      const id = cleanPath.split('/')[2];
      const video = VIDEOS.find(v => v.id === id);
      if (video) {
        meta = {
          title: `${video.title} | Educational Videos`,
          description: video.description,
          canonical: `/videos/${video.id}/`,
          ogType: 'video.other',
          ogImage: `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`,
          robots: 'index, follow',
          schemaType: 'VideoObject'
        };
      }
    }
  }

  // Grand default fallback
  if (!meta) {
    meta = {
      title: 'Dr. Liyan Massaband, D.M.D., M.P.H. | Official Personal Brand Hub',
      description: 'The verified personal and professional profile of Dr. Liyan Massaband, California clinical dentist with unique expertise in general physiology and dental public health systems.',
      canonical: currentPath,
      ogType: 'website',
      ogImage: 'https://picsum.photos/seed/drliyan/1200/630',
      robots: 'index, follow',
      schemaType: 'Person'
    };
  }

  // Enforce staging rules (Staging must remain: noindex, excluded from sitemap, blocked from analytics)
  const isStaging = host.includes('.run.app') || host.includes('localhost') || host.includes('127.0.0.1');
  const robotDirective = isStaging ? 'noindex, nofollow' : (meta.robots || 'index, follow');

  const fullUrl = `${domain}${meta.canonical || currentPath}`.replace(/([^:])\/+/g, '$1/');

  // Construct dynamic JSON-LD Interconnected Graph Schema (Technical SEO Peak)
  const personId = `${domain}/#person`;
  const websiteId = `${domain}/#website`;
  const webpageId = `${fullUrl}#webpage`;

  const personNode = {
    '@type': 'Person',
    '@id': personId,
    'name': BRAND_CONFIG.personName,
    'honorificPrefix': 'Dr.',
    'honorificSuffix': BRAND_CONFIG.credentials,
    'jobTitle': BRAND_CONFIG.profession,
    'description': 'California general dentist with academic degrees in physiological sciences, public health systems, and dental surgery.',
    'url': domain,
    'image': {
      '@type': 'ImageObject',
      '@id': `${domain}/#portrait`,
      'url': 'https://picsum.photos/seed/drliyan-portrait/800/800',
      'caption': 'Dr. Liyan Massaband Portrait'
    },
    'knowsAbout': [
      'Dentistry',
      'Oral Health Education',
      'Preventive Healthcare Systems',
      'Systemic Physiology',
      'Biocompatible Smile Restorations',
      'Dental Fear and Anxiety Mitigation'
    ],
    'alumniOf': [
      {
        '@type': 'EducationalOrganization',
        'name': 'University of Southern California (USC)',
        'url': 'https://www.usc.edu/'
      },
      {
        '@type': 'EducationalOrganization',
        'name': 'Midwestern University',
        'url': 'https://www.midwestern.edu/'
      },
      {
        '@type': 'EducationalOrganization',
        'name': 'University of Arizona',
        'url': 'https://www.arizona.edu/'
      }
    ],
    'affiliation': [
      {
        '@type': 'Dentist',
        '@id': `${domain}/#magnolia-affiliation`,
        'name': 'Magnolia Dentistry',
        'url': 'https://www.magnoliadentistry.com/dr-liyan-massaband/',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': '1005 N Glenoaks Blvd',
          'addressLocality': 'Burbank',
          'addressRegion': 'CA',
          'postalCode': '91502',
          'addressCountry': 'US'
        }
      },
      {
        '@type': 'Dentist',
        '@id': `${domain}/#confidental-affiliation`,
        'name': 'ConfiDental Beverly Hills',
        'url': 'https://confidentalbeverlyhills.com/liyan-massaband-dmd/',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': '462 N Linden Dr Suite 244',
          'addressLocality': 'Beverly Hills',
          'addressRegion': 'CA',
          'postalCode': '90210',
          'addressCountry': 'US'
        }
      }
    ],
    'sameAs': [
      'https://www.instagram.com/drliyanmassaband/',
      'https://www.zocdoc.com/dentist/liyan-massaband-dmd-mph-314420',
      'https://npiregistry.cms.hhs.gov/provider-view/1346588407'
    ]
  };

  const websiteNode = {
    '@type': 'WebSite',
    '@id': websiteId,
    'url': domain,
    'name': 'Dr. Liyan Massaband Official Brand Portal',
    'publisher': { '@id': personId }
  };

  const breadcrumbElements = [
    {
      '@type': 'ListItem',
      'position': 1,
      'name': 'Home',
      'item': domain
    }
  ];

  let positionCount = 2;
  if (cleanPath !== '/') {
    const segments = cleanPath.split('/').filter(Boolean);
    let currentBuildingUrl = domain;
    segments.forEach((seg, index) => {
      currentBuildingUrl += `/${seg}/`;
      let label = seg.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
      if (seg === 'dr-liyan-massaband') label = 'Official Profile';
      if (seg === 'clinical-affiliations') label = 'Clinical Affiliations';
      if (index === segments.length - 1) {
        label = meta.title ? meta.title.split('|')[0].trim() : label;
      }
      breadcrumbElements.push({
        '@type': 'ListItem',
        'position': positionCount++,
        'name': label,
        'item': currentBuildingUrl
      });
    });
  }

  const breadcrumbNode = {
    '@type': 'BreadcrumbList',
    '@id': `${fullUrl}#breadcrumb`,
    'itemListElement': breadcrumbElements
  };

  const webpageNode: any = {
    '@type': meta.schemaType === 'Person' || cleanPath === '/dr-liyan-massaband/' ? 'ProfilePage' : 'WebPage',
    '@id': webpageId,
    'url': fullUrl,
    'name': meta.title,
    'description': meta.description,
    'isPartOf': { '@id': websiteId },
    'breadcrumb': { '@id': `${fullUrl}#breadcrumb` }
  };

  if (webpageNode['@type'] === 'ProfilePage') {
    webpageNode.mainEntity = { '@id': personId };
  }

  const graphArray: any[] = [personNode, websiteNode, webpageNode, breadcrumbNode];

  if (cleanPath.startsWith('/articles/')) {
    const slug = cleanPath.split('/')[2];
    const article = ARTICLES.find(a => a.slug === slug);
    if (article) {
      graphArray.push({
        '@type': 'BlogPosting',
        '@id': `${fullUrl}#article`,
        'isPartOf': { '@id': webpageId },
        'mainEntityOfPage': { '@id': webpageId },
        'headline': article.title,
        'description': article.excerpt,
        'image': 'https://picsum.photos/seed/articlecover/1200/630',
        'datePublished': article.publishDate,
        'dateModified': article.modifiedDate,
        'author': { '@id': personId },
        'publisher': { '@id': personId },
        'reviewedBy': {
          '@type': 'Person',
          'name': article.reviewer
        }
      });
    }
  }

  if (cleanPath.startsWith('/videos/')) {
    const id = cleanPath.split('/')[2];
    const video = VIDEOS.find(v => v.id === id);
    if (video) {
      graphArray.push({
        '@type': 'VideoObject',
        '@id': `${fullUrl}#video`,
        'name': video.title,
        'description': video.description,
        'thumbnailUrl': `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`,
        'uploadDate': video.publishDate,
        'duration': video.duration,
        'contentUrl': `https://www.youtube.com/watch?v=${video.youtubeId}`,
        'embedUrl': `https://www.youtube.com/embed/${video.youtubeId}`,
        'creator': { '@id': personId },
        'about': { '@id': personId }
      });
    }
  }

  const schemaSnippet = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': graphArray
  }, null, 2);

  // Verification codes block
  const searchConsoleVerificationToken = process.env.NEXT_PUBLIC_SEARCH_CONSOLE_VERIFICATION || '';
  const bingVerificationToken = process.env.NEXT_PUBLIC_BING_VERIFICATION || '';
  let verificationSnippet = '';

  if (searchConsoleVerificationToken && !isStaging) {
    verificationSnippet += `<meta name="google-site-verification" content="${searchConsoleVerificationToken}" />\n`;
  }
  if (bingVerificationToken && !isStaging) {
    verificationSnippet += `<meta name="msvalidate.01" content="${bingVerificationToken}" />\n`;
  }

  // Analytics scripts block (Blocked on staging!)
  let analyticsSnippet = '';
  const gaId = process.env.NEXT_PUBLIC_GA_ID || '';
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || '';

  if (!isStaging) {
    if (gaId) {
      analyticsSnippet += `
    <!-- Google Analytics (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=${gaId}"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${gaId}', { 'anonymize_ip': true });
    </script>\n`;
    }
    if (gtmId) {
      analyticsSnippet += `
    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm/js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${gtmId}');</script>\n`;
    }
  }

  // Compile final outputs using replacement matrices
  let modifiedHtml = html;

  // Insert standard meta hooks
  modifiedHtml = modifiedHtml.replace(/<title>[^<]*<\/title>/, `<title>${meta.title}</title>`);
  
  const headersSnippet = `
    <meta name="description" content="${meta.description}" />
    <link rel="canonical" href="${fullUrl}" />
    <meta name="robots" content="${robotDirective}" />
    
    ${verificationSnippet}
    ${analyticsSnippet}

    <!-- Open Graph Parameters -->
    <meta property="og:title" content="${meta.title}" />
    <meta property="og:description" content="${meta.description}" />
    <meta property="og:type" content="${meta.ogType}" />
    <meta property="og:url" content="${fullUrl}" />
    <meta property="og:image" content="${meta.ogImage}" />
    <meta property="og:site_name" content="${BRAND_CONFIG.displayName}" />

    <!-- Twitter Cards -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${meta.title}" />
    <meta name="twitter:description" content="${meta.description}" />
    <meta name="twitter:image" content="${meta.ogImage}" />

    <!-- Highly Indexed Schema-LD Core Structure -->
    <script type="application/ld+json">
      ${schemaSnippet}
    </script>
  `;

  // Place directly before closing head tag
  modifiedHtml = modifiedHtml.replace('</head>', `${headersSnippet}\n</head>`);

  // Insert Google Tag Manager body fallback if required
  if (!isStaging && gtmId) {
    const gtmNoScript = `
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    `;
    modifiedHtml = modifiedHtml.replace('<body>', `<body>\n${gtmNoScript}`);
  }

  return modifiedHtml;
}

// 4. Initialize Core Server logic
async function bootstrap() {
  const isProd = _filename.includes('dist') || _filename.endsWith('.cjs');

  if (!isProd) {
    // Dev Mode - Mount Vite Server
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    
    app.use(vite.middlewares);

    app.all('*', async (req, res, next) => {
      const url = req.originalUrl;
      
      // Skip file request pipelines
      if (url.includes('.') && !url.includes('.html')) {
        return next();
      }

      try {
        let template = fs.readFileSync(path.resolve(_dirname, 'index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);

        const scheme = req.headers['x-forwarded-proto'] || 'http';
        const host = req.headers.host || 'localhost:3000';
        const domain = `${scheme}://${host}`;

        const html = injectSeoSolarCore(template, url, domain, host);
        res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
      } catch (err) {
        vite.ssrFixStacktrace(err as Error);
        next(err);
      }
    });

  } else {
    // Production Mode - Serve Pre-compiled Assets
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath, { index: false }));

    app.all('*', (req, res, next) => {
      const url = req.originalUrl;

      if (url.includes('.') && !url.includes('.html')) {
        return next();
      }

      try {
        const templatePath = path.join(distPath, 'index.html');
        if (!fs.existsSync(templatePath)) {
          return res.status(404).send('Wait, standard dist bundle is currently pending creation. Please execute production compiling.');
        }

        const template = fs.readFileSync(templatePath, 'utf-8');
        const scheme = req.headers['x-forwarded-proto'] || 'https';
        const host = req.headers.host || 'drliyanmassaband.com';
        const domain = `${scheme}://${host}`;

        const html = injectSeoSolarCore(template, url, domain, host);
        res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
      } catch (err) {
        next(err);
      }
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[Dr. Liyan Massaband Core] Server successfully booted and listening on host http://0.0.0.0:${PORT}`);
  });
}

bootstrap();
