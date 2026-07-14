import React, { useState } from 'react';
import { Link } from '../AppRouter.tsx';
import { 
  FileCode, 
  Terminal, 
  Download, 
  ExternalLink, 
  Check, 
  Copy, 
  BookOpen, 
  FileText, 
  Globe, 
  Settings, 
  Flame 
} from 'lucide-react';
import { BRAND_CONFIG, ARTICLES, VIDEOS, SEO_ROUTES_META } from '../../data.ts';

export const XmlSitemapView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'index' | 'pages' | 'articles' | 'videos'>('index');
  const [copied, setCopied] = useState(false);

  // XML Content Generators for preview (replicating exactly what the backend server generates)
  const getDomain = () => {
    if (typeof window !== 'undefined') {
      return `${window.location.protocol}//${window.location.host}`;
    }
    return 'https://drliyanmassaband.com';
  };

  const domain = getDomain();
  const currentDate = new Date().toISOString().split('T')[0];

  const indexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${domain}/sitemap-pages.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${domain}/sitemap-articles.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${domain}/sitemap-videos.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
</sitemapindex>`;

  const pagesXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${Object.keys(SEO_ROUTES_META).map(route => {
  const priority = route === '/' ? '1.0' : route.includes('disclaimer') || route.includes('standards') ? '0.3' : '0.8';
  let imageMarkup = '';
  if (route === '/' || route === '/dr-liyan-massaband/') {
    imageMarkup = `\n    <image:image>
      <image:loc>https://picsum.photos/seed/drliyan-portrait/800/800</image:loc>
      <image:title>Dr. Liyan Massaband Official Portrait</image:title>
      <image:caption>Dr. Liyan Massaband, D.M.D., M.P.H., dentist and preventive public health advocate.</image:caption>
    </image:image>`;
  }
  return `  <url>
    <loc>${domain}${route}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>${imageMarkup}
  </url>`;
}).join('\n')}
</urlset>`;

  const articlesXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${domain}/articles/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
${ARTICLES.map(article => {
  return `  <url>
    <loc>${domain}/articles/${article.slug}/</loc>
    <lastmod>${article.modifiedDate || article.publishDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`;
}).join('\n')}
</urlset>`;

  const videosXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  <url>
    <loc>${domain}/videos/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
${VIDEOS.map(video => {
  let seconds = 300;
  if (video.duration && video.duration.includes(':')) {
    const [m, s] = video.duration.split(':').map(Number);
    seconds = (m * 60) + (s || 0);
  }
  return `  <url>
    <loc>${domain}/videos/${video.id}/</loc>
    <lastmod>${video.publishDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <video:video>
      <video:thumbnail_loc>https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg</video:thumbnail_loc>
      <video:title>${video.title.substring(0, 95)}</video:title>
      <video:description>${video.description.substring(0, 250)}</video:description>
      <video:player_loc>https://www.youtube.com/embed/${video.youtubeId}</video:player_loc>
      <video:duration>${seconds}</video:duration>
      <video:publication_date>${video.publishDate}T00:00:00Z</video:publication_date>
    </video:video>
  </url>`;
}).join('\n')}
</urlset>`;

  const activeXml = 
    activeTab === 'index' ? indexXml :
    activeTab === 'pages' ? pagesXml :
    activeTab === 'articles' ? articlesXml :
    videosXml;

  const activeFileName = 
    activeTab === 'index' ? 'sitemap.xml' :
    activeTab === 'pages' ? 'sitemap-pages.xml' :
    activeTab === 'articles' ? 'sitemap-articles.xml' :
    'sitemap-videos.xml';

  const handleCopy = () => {
    navigator.clipboard.writeText(activeXml);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([activeXml], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = activeFileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 font-sans" id="sitemap-xml-inspector">
      
      {/* Page Header */}
      <div className="border-b border-brand-stone/45 pb-6 mb-8 space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono font-bold text-brand-bronze uppercase tracking-widest border border-brand-bronze/30 px-3 py-1 rounded-full bg-brand-bronze/5">
            Technical SEO Compliance Terminal
          </span>
          <span className="text-xs font-mono font-bold text-teal-600 uppercase tracking-widest border border-teal-500/30 px-3 py-1 rounded-full bg-teal-500/5">
            Active Real-time Feed
          </span>
        </div>
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <h1 className="font-display font-medium text-brand-charcoal text-3xl md:text-4xl tracking-tight leading-tight">
              Dynamic XML Sitemap Index
            </h1>
            <p className="text-sm text-slate-500 max-w-2xl leading-relaxed">
              Verify, inspect, and download the active Google-vetted sitemap feeds compiled for search indexation bot crawlers. Contains advanced schema layouts for medical articles and clinical multimedia records.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <a 
              href="/sitemap.xml" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-brand-charcoal text-white hover:bg-brand-bronze rounded-xl text-xs font-semibold shadow-xs transition-colors cursor-pointer"
            >
              <span>View Live XML Feed</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            
            <Link 
              to="/sitemap/" 
              className="inline-flex items-center gap-1.5 px-4 py-2.5 border border-brand-stone hover:border-brand-bronze text-brand-charcoal hover:text-brand-bronze rounded-xl text-xs font-semibold transition-colors"
            >
              <span>View HTML Directory</span>
              <Globe className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        
        <div className="bg-brand-stone/10 border border-brand-stone p-5 rounded-2xl space-y-2">
          <div className="flex items-center gap-2 text-brand-bronze">
            <Globe className="w-4 h-4" />
            <h3 className="font-display font-bold text-xs uppercase tracking-wider text-brand-charcoal">Static Core Pages</h3>
          </div>
          <p className="text-2xl font-display font-semibold text-brand-charcoal">
            {Object.keys(SEO_ROUTES_META).length} URLs
          </p>
          <p className="text-xs text-slate-500">
            Fully indexed core routes with strict canonical anchors, high-res medical portraits, and metadata declarations.
          </p>
        </div>

        <div className="bg-brand-stone/10 border border-brand-stone p-5 rounded-2xl space-y-2">
          <div className="flex items-center gap-2 text-brand-bronze">
            <FileText className="w-4 h-4" />
            <h3 className="font-display font-bold text-xs uppercase tracking-wider text-brand-charcoal">Clinical Publications</h3>
          </div>
          <p className="text-2xl font-display font-semibold text-brand-charcoal">
            {ARTICLES.length} Essays
          </p>
          <p className="text-xs text-slate-500">
            Medical reviewer certified articles with active timestamps and direct links for scientific citation crawler extraction.
          </p>
        </div>

        <div className="bg-brand-stone/10 border border-brand-stone p-5 rounded-2xl space-y-2">
          <div className="flex items-center gap-2 text-brand-bronze">
            <BookOpen className="w-4 h-4" />
            <h3 className="font-display font-bold text-xs uppercase tracking-wider text-brand-charcoal">Multimedia Video Nodes</h3>
          </div>
          <p className="text-2xl font-display font-semibold text-brand-charcoal">
            {VIDEOS.length} Videos
          </p>
          <p className="text-xs text-slate-500">
            Google Video Schema markup including direct player embedding, transcript excerpts, and HD thumbnail anchors.
          </p>
        </div>

      </div>

      {/* Main XML Explorer Panel */}
      <div className="border border-brand-stone rounded-2xl overflow-hidden bg-brand-charcoal text-slate-300 shadow-lg">
        
        {/* Terminal Header Tabs */}
        <div className="bg-slate-900 border-b border-brand-charcoal px-4 py-3 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5 mr-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
            </div>
            <Terminal className="w-4 h-4 text-brand-bronze" />
            <span className="font-mono text-[11px] text-slate-400 font-bold uppercase tracking-wider">
              XML Schema Inspector: {activeFileName}
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono">
            <button 
              onClick={handleCopy}
              className="px-3 py-1.5 bg-brand-charcoal/80 hover:bg-brand-bronze hover:text-white rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Copy XML content to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-green-400" />
                  <span className="text-green-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Code</span>
                </>
              )}
            </button>

            <button 
              onClick={handleDownload}
              className="px-3 py-1.5 bg-brand-charcoal/80 hover:bg-brand-bronze hover:text-white rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Download physical XML sitemap"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </button>
          </div>
        </div>

        {/* View Selection Tabs */}
        <div className="bg-[#1A1D21] px-4 py-2 flex flex-wrap border-b border-brand-charcoal/50 text-[11px] font-mono">
          <button
            onClick={() => setActiveTab('index')}
            className={`px-4 py-2 border-b-2 font-bold transition-all uppercase tracking-wider cursor-pointer ${
              activeTab === 'index' 
                ? 'border-brand-bronze text-white bg-brand-charcoal/30' 
                : 'border-transparent text-slate-500 hover:text-slate-300'
            }`}
          >
            Sitemap Index
          </button>
          
          <button
            onClick={() => setActiveTab('pages')}
            className={`px-4 py-2 border-b-2 font-bold transition-all uppercase tracking-wider cursor-pointer ${
              activeTab === 'pages' 
                ? 'border-brand-bronze text-white bg-brand-charcoal/30' 
                : 'border-transparent text-slate-500 hover:text-slate-300'
            }`}
          >
            Core Pages ({Object.keys(SEO_ROUTES_META).length})
          </button>

          <button
            onClick={() => setActiveTab('articles')}
            className={`px-4 py-2 border-b-2 font-bold transition-all uppercase tracking-wider cursor-pointer ${
              activeTab === 'articles' 
                ? 'border-brand-bronze text-white bg-brand-charcoal/30' 
                : 'border-transparent text-slate-500 hover:text-slate-300'
            }`}
          >
            Articles ({ARTICLES.length})
          </button>

          <button
            onClick={() => setActiveTab('videos')}
            className={`px-4 py-2 border-b-2 font-bold transition-all uppercase tracking-wider cursor-pointer ${
              activeTab === 'videos' 
                ? 'border-brand-bronze text-white bg-brand-charcoal/30' 
                : 'border-transparent text-slate-500 hover:text-slate-300'
            }`}
          >
            Video Schema ({VIDEOS.length})
          </button>
        </div>

        {/* Code Content View */}
        <div className="p-5 font-mono text-[11px] sm:text-xs overflow-x-auto max-h-[480px] bg-brand-charcoal">
          <pre className="text-green-400 select-all leading-relaxed">
            {activeXml}
          </pre>
        </div>

      </div>

      {/* SEO Compliance Explainer Checklist */}
      <div className="mt-12 bg-brand-stone/10 border border-brand-stone p-6 rounded-2xl space-y-6">
        <div className="space-y-1.5">
          <h3 className="font-display font-medium text-brand-charcoal text-lg">
            Google Indexation & Search Bot Optimization
          </h3>
          <p className="text-xs text-slate-500">
            Our platform deploys a state-of-the-art hybrid XML indexing framework ensuring zero duplication and immediate content discovery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-600">
          <div className="space-y-2">
            <h4 className="font-bold text-brand-charcoal font-display">Sitemap Division & Limits</h4>
            <p className="leading-relaxed">
              Splitting the sitemap into hierarchical feeds prevents single-file bloat. In our architecture, the primary index file <span className="font-mono text-xs bg-brand-stone/40 px-1 py-0.5 rounded text-brand-bronze font-bold">/sitemap.xml</span> points directly to modular indices, facilitating faster parsing cycles.
            </p>
          </div>
          
          <div className="space-y-2">
            <h4 className="font-bold text-brand-charcoal font-display">Metadata & Image Schema Injector</h4>
            <p className="leading-relaxed">
              We feed direct Image tags (such as high-res dentist portrait vectors) into Google Image crawl structures. This boosts clinical brand authority in traditional Google Image and Local Map listings.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-brand-charcoal font-display">Google Video schema markup</h4>
            <p className="leading-relaxed">
              Our clinical and educational media segments undergo rich video schema extraction, detailing YouTube embed location parameters, explicit video publication dates, and precise run duration tags. This targets video rich snippets.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-brand-charcoal font-display">Automatic Header Verification</h4>
            <p className="leading-relaxed">
              The platform dynamically checks for active Search Console tokens and Google Analytics scripts, enabling zero-touch verification across both traditional and custom regional domain overlays.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};
