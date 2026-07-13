import React from 'react';
import { useRouter, Link } from '../AppRouter.tsx';
import { SourceReferenceBadge } from '../SourceReferenceBadge.tsx';
import { PortraitPlaceholder } from './ProfileViews.tsx';
import { TrustVerificationShield } from '../TrustVerificationShield.tsx';
import { 
  Award, 
  MapPin, 
  Compass, 
  BookmarkCheck, 
  Stethoscope, 
  Activity, 
  ShieldCheck, 
  Video, 
  Clock, 
  Mail, 
  FileText, 
  ExternalLink,
  ChevronRight,
  UserCheck
} from 'lucide-react';
import { BRAND_CONFIG, VERIFIED_SOURCES, VIDEOS } from '../../data.ts';
import { InteractiveVideoPlayer } from '../InteractiveVideoPlayer.tsx';

export const OfficialProfileView: React.FC = () => {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  // Structured Data Schema for Person / ProfilePage / WebPage / Breadcrumbs
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": `${currentUrl}#profilePage`,
        "url": currentUrl,
        "name": `${BRAND_CONFIG.displayName} | Official Profile`,
        "description": "Read the official professional profile of Dr. Liyan Massaband, including her education, credentials, public health background, 1,000+ dental implant clinical records, and dual Burbank and Beverly Hills locations."
      },
      {
        "@type": "Person",
        "@id": `${currentUrl}#person`,
        "name": BRAND_CONFIG.personName,
        "givenName": "Liyan",
        "familyName": "Massaband",
        "additionalName": "Dr. Liyan Massaband, D.M.D., M.P.H.",
        "honorificPrefix": "Dr.",
        "honorificSuffix": "D.M.D., M.P.H.",
        "jobTitle": "Dentist & Oral Implant Specialist",
        "image": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
        "description": "Dr. Liyan Massaband, D.M.D., M.P.H., is an elite general, cosmetic, and oral implant dentist in California with dual offices in Beverly Hills and Burbank. Combining physiological science degrees from the University of Arizona, a Master of Public Health from USC, and a Doctorate of Dental Medicine from Midwestern, she has placed over 1,000+ dental implants successfully.",
        "url": currentUrl,
        "alumniOf": [
          {
            "@type": "EducationalOrganization",
            "name": "Midwestern University College of Dental Medicine",
            "location": {
              "@type": "PostalAddress",
              "addressLocality": "Glendale",
              "addressRegion": "AZ"
            }
          },
          {
            "@type": "EducationalOrganization",
            "name": "University of Southern California (USC)",
            "location": {
              "@type": "PostalAddress",
              "addressLocality": "Los Angeles",
              "addressRegion": "CA"
            }
          },
          {
            "@type": "EducationalOrganization",
            "name": "University of Arizona",
            "location": {
              "@type": "PostalAddress",
              "addressLocality": "Tucson",
              "addressRegion": "AZ"
            }
          }
        ],
        "affiliation": [
          {
            "@type": "Dentist",
            "name": BRAND_CONFIG.magnoliaName,
            "telephone": "818-555-0144",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "1923 W Magnolia Blvd",
              "addressLocality": "Burbank",
              "addressRegion": "CA",
              "postalCode": "91506",
              "addressCountry": "US"
            }
          },
          {
            "@type": "Dentist",
            "name": BRAND_CONFIG.confidentalName,
            "telephone": "310-555-0190",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "9401 Wilshire Blvd, Suite 1050",
              "addressLocality": "Beverly Hills",
              "addressRegion": "CA",
              "postalCode": "90212",
              "addressCountry": "US"
            }
          }
        ],
        "sameAs": [
          "https://www.instagram.com/drliyanmassaband/",
          "https://www.zocdoc.com/dentist/liyan-massaband-dmd-mph-314420",
          "https://npiregistry.cms.hhs.gov/provider-view/1346588407"
        ],
        "knowsAbout": [
          "dental implants",
          "All-on-X full arch restoration",
          "aesthetic dentistry",
          "implant dentistry",
          "smile design",
          "bone grafting",
          "public health and dentistry"
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${currentUrl}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": { "@id": "/" }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Official Profile",
            "item": { "@id": "/dr-liyan-massaband/" }
          }
        ]
      }
    ]
  };

  return (
    <div className="bg-brand-white text-brand-charcoal animate-reveal" id="official-profile-page">
      {/* Schema Injection */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Editorial Breadcrumb Header */}
      <div className="bg-brand-white border-b border-brand-stone/30 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs font-mono text-slate-500">
            <Link to="/" className="hover:text-brand-bronze transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-brand-charcoal font-medium">Official Profile</span>
          </nav>
        </div>
      </div>

      {/* Hero Section (Glowing Dark Clinical Theme) */}
      <section className="bg-[#051C18] text-brand-white py-16 md:py-24 border-b border-brand-stone/10 relative overflow-hidden" id="profile-hero">
        {/* Ambient dot grid overlay */}
        <div className="absolute inset-0 bg-dot-grid opacity-15 pointer-events-none" />
        
        {/* Organic glowing background elements */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-teal-glow opacity-40 pointer-events-none rounded-full blur-[90px]" />
        <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-gold-glow opacity-30 pointer-events-none rounded-full blur-[90px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">
            
            {/* Hero Profile Photo */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm rounded-2xl overflow-hidden border border-brand-stone/20 p-2 bg-white/5 backdrop-blur-md shadow-2xl">
                <PortraitPlaceholder description="Dr. Liyan Massaband DMD MPH - Official Profile Headshot" />
              </div>
            </div>

            {/* Hero Statement */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[11px] font-mono font-bold text-brand-plum uppercase tracking-widest border border-brand-plum/40 px-3 py-1 bg-brand-plum/10 rounded-full inline-block">
                Official Professional Profile
              </span>
              
              <div className="space-y-2">
                <h1 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight text-white leading-tight">
                  Dr. Liyan Massaband <span className="text-[#EAD8C3] text-2xl md:text-4xl block md:inline-block font-sans font-light ml-0 md:ml-2">D.M.D., M.P.H.</span>
                </h1>
                <p className="text-xs font-mono uppercase tracking-widest text-brand-stone font-medium">
                  Dentist • D.M.D. • M.P.H. • Burbank • Beverly Hills
                </p>
              </div>

              <p className="text-slate-300 text-base md:text-lg leading-relaxed font-sans max-w-2xl">
                Dr. Liyan Massaband is a California dentist with an academic foundation in physiological sciences, public health and dental medicine. She is professionally associated with Magnolia Dentistry in Burbank and ConfiDental Beverly Hills.
              </p>

              {/* Primary Profile Actions */}
              <div className="flex flex-wrap gap-3.5 pt-2">
                <Link 
                  to="/her-story/" 
                  className="px-6 py-3.5 bg-brand-plum text-white font-display text-[13px] font-bold tracking-wide rounded-lg hover:bg-white hover:text-brand-charcoal transition-all duration-200 shadow-md shadow-brand-plum/10"
                >
                  Explore Her Story
                </Link>
                <Link 
                  to="/education-and-credentials/" 
                  className="px-6 py-3.5 border border-brand-stone/35 bg-white/5 hover:border-brand-plum hover:bg-white/10 text-brand-stone hover:text-white font-display text-[13px] font-bold tracking-wide rounded-lg transition-colors duration-200"
                >
                  View Education & Credentials
                </Link>
                <Link 
                  to="/contact/" 
                  className="px-6 py-3.5 text-slate-400 hover:text-white font-display text-[13px] font-bold tracking-wide rounded-lg transition-colors duration-200"
                >
                  Media Enquiries
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20" id="profile-main-body">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* LEFT: Core Narrative Column */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* SECTION 1: PROFILE SUMMARY */}
            <section className="space-y-6" id="about-section">
              <h2 className="font-display font-medium text-2xl md:text-3xl text-brand-charcoal tracking-tight border-b border-brand-stone/30 pb-3">
                About Dr. Liyan Massaband
              </h2>
              
              <div className="prose text-slate-600 space-y-5 text-[15px] md:text-[16px] leading-relaxed font-sans">
                <p>
                  Dr. Liyan Massaband, D.M.D., M.P.H., is a California-licensed dentist whose professional career merges physiological science, public health leadership, and advanced clinical dental medicine. Based in Southern California, she serves as an associate dentist across two prime clinical offices: Magnolia Dentistry in Burbank and ConfiDental Beverly Hills. This dual-affiliation allows her to balance a diverse patient base, ranging from comprehensive family preventative care in the San Fernando Valley to high-precision restorative and aesthetic tooth reconstructions in Beverly Hills.
                </p>
                <p>
                  Dr. Massaband's multi-disciplinary focus is directly informed by her extensive academic trajectory. She initially earned a Bachelor of Science in Physiological Sciences from the University of Arizona. This foundational program studied the intricate homeostasis of human organ systems, neuromuscular pathways, and cellular biochemistry. To understand how individual clinical dental procedures scale to benefit entire communities, she subsequently completed a Master of Public Health (M.P.H.) at the University of Southern California (USC), placing her curricular emphasis on global health and leadership. This degree focused heavily on health promotion, preventive epidemiology, and healthcare communication, which still shapes her clinical perspective on dental anxiety and patient motivation.
                </p>
                <p>
                  To finalize her clinical training, Dr. Massaband attended Midwestern University, graduating with her Doctor of Dental Medicine (D.M.D.). At Midwestern, she mastered modern dental technologies, biocompatible materials, and cosmetic smile designs. Today, this unique combination of a biological science background, public health communications expertise, and precise dental medicine training allows her to deliver highly customized oral treatments. She is guided by the philosophy that oral hygiene represents a primary indicator and gatekeeper of systemic body wellness.
                </p>
                <p>
                  Beyond practicing in private clinics, Dr. Massaband is a passionate advocate for public dental education. She regularly creates and publishes open-access educational videos and social media commentary. Her public platforms, including her verified Instagram profile and educational YouTube channel, serve as direct extensions of her clinical philosophy: translating complex dental research and diagnostic options into simple, actionable steps that decrease clinical anxiety. This personal brand website acts as the verified, central first-party resource detailing her education, verified references, clinical perspectives, and official press kit for professional events, healthcare directories, and future journal contributions.
                </p>
              </div>
            </section>

            {/* SECTION 2: ACADEMIC FOUNDATION */}
            <section className="bg-brand-stone/10 border border-brand-stone p-6 md:p-8 rounded-2xl space-y-6" id="academic-foundation-summary-section">
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-brand-bronze uppercase tracking-wider block">Coordinated Education Overview</span>
                <h3 className="font-display font-semibold text-xl text-brand-charcoal tracking-tight">
                  An Academic Foundation Across Science, Public Health and Dentistry
                </h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed font-sans">
                Dr. Massaband's development builds through three distinct academic landmarks. Fusing physiological science (Arizona) with community-wide preventative structures (USC) and clinical surgery (Midwestern) ensures that her assessments consider the holistic physical wellness of every patient she diagnoses.
              </p>
              <div className="pt-2">
                <Link 
                  to="/education-and-credentials/" 
                  className="inline-flex items-center gap-1 text-xs font-mono font-bold text-brand-bronze hover:text-brand-charcoal transition-colors"
                >
                  <span>Explore Education & Credentials</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </section>

            {/* SECTION 3: PROFESSIONAL AFFILIATIONS */}
            <section className="space-y-6" id="affiliations-section">
              <h2 className="font-display font-medium text-2xl md:text-3xl text-brand-charcoal tracking-tight border-b border-brand-stone/30 pb-3">
                Professional Affiliations
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed">
                By maintaining active affiliations across two complementary environments, Dr. Massaband implements her biological clinical designs. Links lead to corresponding clinic biography portals:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-1">
                {/* Magnolia Burbank */}
                <div className="border border-brand-stone p-6 rounded-2xl space-y-4 hover:border-brand-bronze transition-colors flex flex-col justify-between" id="magnolia-burbank-card">
                  <div className="space-y-2">
                    <span className="text-xs font-mono text-slate-400 block">Burbank Practice Affiliation</span>
                    <h3 className="font-display font-semibold text-lg text-brand-charcoal leading-tight">Magnolia Dentistry</h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-sans">
                      Providing detailed, family-centric preventative dentistry, digital diagnostics, and comprehensive restoration pathways in the Burbank community.
                    </p>
                  </div>
                  <div className="pt-2">
                    <a 
                      href="https://www.magnoliadentistry.com/dr-liyan-massaband/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-bronze hover:text-brand-charcoal transition-colors"
                    >
                      <span>Visit Magnolia Dentistry Bio</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Confidental Beverly Hills */}
                <div className="border border-brand-stone p-6 rounded-2xl space-y-4 hover:border-brand-bronze transition-colors flex flex-col justify-between" id="confidental-bh-card">
                  <div className="space-y-2">
                    <span className="text-xs font-mono text-slate-400 block">Beverly Hills Practice Affiliation</span>
                    <h3 className="font-display font-semibold text-lg text-brand-charcoal leading-tight">ConfiDental Beverly Hills</h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-sans">
                      Focusing on premium biological cosmetics, custom porcelain dental veneers, reconstructive smile design, and advanced physiological tracking.
                    </p>
                  </div>
                  <div className="pt-2">
                    <a 
                      href="https://confidentalbeverlyhills.com/liyan-massaband-dmd/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-bronze hover:text-brand-charcoal transition-colors"
                    >
                      <span>Visit ConfiDental Beverly Hills Bio</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 4: PROFESSIONAL PERSPECTIVE */}
            <section className="space-y-6" id="perspective-section">
              <h2 className="font-display font-medium text-2xl md:text-3xl text-brand-charcoal tracking-tight border-b border-brand-stone/30 pb-3">
                A Perspective Centred on Health, Communication and Individuality
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed font-sans">
                Dr. Massaband prioritizes anatomical integrity and conservative interventions over fast, invasive modifications. She holds that patient treatment is collaborative, relying on complete diagnostic transparency, active listing, and tailored clinical planning to reconstruct beautiful, stable systems matching patients' physiological symmetries.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 bg-brand-stone/5 border border-brand-stone/40 rounded-xl">
                  <Stethoscope className="w-5 h-5 text-brand-bronze shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-mono font-bold tracking-tight text-brand-charcoal">Individuality First</h4>
                    <p className="text-xs text-slate-500 mt-1">Listening and adjusting geometries according to original facial architecture.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-brand-stone/5 border border-brand-stone/40 rounded-xl">
                  <Compass className="w-5 h-5 text-brand-bronze shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-mono font-bold tracking-tight text-brand-charcoal">Systemic Alignment</h4>
                    <p className="text-xs text-slate-500 mt-1">Interpreting periodontal outcomes and saliva chemistry as gateways to cardiac health.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 5: PUBLIC EDUCATION */}
            <section className="space-y-6" id="public-education-section">
              <h2 className="font-display font-medium text-2xl md:text-3xl text-brand-charcoal tracking-tight border-b border-brand-stone/30 pb-3">
                Videos and Public Dental Education
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed">
                As a public health advocate, Dr. Massaband prioritizes open educational engagement. Below is her primary featured professional introduction and clinical interview.
              </p>

              {/* Video Player Display */}
              <div className="max-w-3xl" id="featured-video-module">
                {(() => {
                  const featuredVid = VIDEOS.find(v => v.youtubeId === "-6nZKwfkXzc") || VIDEOS[0];
                  return <InteractiveVideoPlayer video={featuredVid} aspectRatioClassName="aspect-video" />;
                })()}
              </div>

              <div className="flex justify-between items-center bg-brand-stone/10 p-4 rounded-xl border border-brand-stone">
                <div className="space-y-0.5">
                  <span className="text-xs font-semibold text-brand-charcoal">Public Video Archives</span>
                  <p className="text-[11px] text-slate-500">Browse more patient commentary on anxiety, aesthetics, and systemic dentistry.</p>
                </div>
                <Link 
                  to="/videos/" 
                  className="px-4 py-2 bg-brand-charcoal text-brand-white text-xs font-semibold rounded-lg hover:bg-brand-bronze transition-colors flex items-center gap-1"
                >
                  <Video className="w-3.5 h-3.5" /> Watch Videos
                </Link>
              </div>
            </section>

            {/* SECTION 6: VERIFIED EXTERNAL REFERENCES */}
            <section className="space-y-6" id="external-references-section">
              <h2 className="font-display font-medium text-2xl md:text-3xl text-brand-charcoal tracking-tight border-b border-brand-stone/30 pb-3">
                Professional Profiles and Public References
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed">
                Authority requires verifiable documentation. We maintain open references to established profiles and clinical directories:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a 
                  href="https://www.zocdoc.com/dentist/liyan-massaband-dmd-mph-314420" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 border border-brand-stone hover:border-brand-bronze rounded-xl transition-all group hover:bg-slate-50/50"
                  id="zocdoc-verified-ref"
                >
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-brand-charcoal group-hover:text-brand-bronze block">Zocdoc Profile</span>
                    <span className="text-[11px] text-slate-400 font-mono">Type: Established Clinical Directory</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-brand-bronze" />
                </a>

                <a 
                  href="https://npiregistry.cms.hhs.gov/provider-view/1346588407" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 border border-brand-stone hover:border-brand-bronze rounded-xl transition-all group hover:bg-slate-50/50"
                  id="npi-verified-ref"
                >
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-brand-charcoal group-hover:text-brand-bronze block">Federal NPI Registry Record</span>
                    <span className="text-[11px] text-slate-400 font-mono">Type: Government Identity Verification</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-brand-bronze" />
                </a>

                <a 
                  href="https://www.instagram.com/drliyanmassaband/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 border border-brand-stone hover:border-brand-bronze rounded-xl transition-all group hover:bg-slate-50/50"
                  id="instagram-verified-ref"
                >
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-brand-charcoal group-hover:text-brand-bronze block">Official Instagram Profile</span>
                    <span className="text-[11px] text-slate-400 font-mono">Type: Official Platform Communication</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-brand-bronze" />
                </a>

                <a 
                  href="https://www.practicedilly.com/dental-software/reviews" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 border border-brand-stone hover:border-brand-bronze rounded-xl transition-all group hover:bg-slate-50/50"
                  id="practicedilly-verified-ref"
                >
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-brand-charcoal group-hover:text-brand-bronze block">PracticeDilly Profile</span>
                    <span className="text-[11px] text-slate-400 font-mono">Type: Independent Professional Reference</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-brand-bronze" />
                </a>
              </div>
            </section>

            {/* SECTION 7: MEDIA CONTACT */}
            <section className="bg-brand-ivory text-slate-700 border border-brand-stone/40 p-6 md:p-8 rounded-2xl space-y-6" id="media-engagement-section">
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-brand-bronze uppercase block tracking-wider font-bold">Independent Collaborative Services</span>
                <h3 className="font-display font-semibold text-lg md:text-xl text-brand-charcoal">
                  Media, Interviews and Professional Enquiries
                </h3>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-sans">
                Dr. Liyan Massaband is available to collaborate with health journalists, podcast hosts, health alumni boards, and event organizers seeking factual perspectives on dental epidemiology and biological aesthetics.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono">
                <Link to="/press-kit/" className="text-brand-charcoal hover:text-brand-bronze transition-colors flex items-center gap-1 bg-white hover:bg-brand-white px-3.5 py-2.5 rounded-lg border border-brand-stone shadow-xs">
                  <FileText className="w-4 h-4 text-brand-bronze" /> Download Press Kit
                </Link>
                <Link to="/contact/" className="text-brand-charcoal hover:text-brand-bronze transition-colors flex items-center gap-1 bg-white hover:bg-brand-white px-3.5 py-2.5 rounded-lg border border-brand-stone shadow-xs">
                  <Mail className="w-4 h-4 text-brand-bronze" /> Submit Media Inquiry
                </Link>
              </div>
            </section>

          </div>

          {/* RIGHT: DESKTOP STICKY PROFILE PANEL (Normal container on mobile) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6" id="profile-sticky-panel-container">
            <div className="bg-brand-white border border-brand-stone rounded-2xl p-6 space-y-6 shadow-sm" id="profile-sticky-sidebar">
              <PortraitPlaceholder description="Dr. Liyan Massaband DMD MPH - Sticky Sidebar Profile" />
              
              <div className="text-center pb-4 border-b border-brand-stone/30 space-y-1">
                <h3 className="font-display font-bold text-brand-charcoal text-[18px]">
                  Dr. Liyan Massaband
                </h3>
                <p className="text-[11px] font-mono font-medium text-brand-bronze uppercase tracking-widest">
                  Dentist • D.M.D. • M.P.H.
                </p>
                <p className="text-xs text-slate-500 font-sans mt-1">
                  California Dental Board Licentiate
                </p>
              </div>

              {/* Verified details panel */}
              <div className="space-y-4 text-xs">
                <div className="space-y-1">
                  <span className="text-slate-400 block uppercase font-mono text-[9px] tracking-wider">Clinical Affiliations:</span>
                  <div className="space-y-1 font-semibold text-brand-charcoal">
                    <p className="flex items-center gap-1.5 hover:text-brand-bronze transition-colors">
                      <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" /> Magnolia Dentistry (Burbank)
                    </p>
                    <p className="flex items-center gap-1.5 hover:text-brand-bronze transition-colors">
                      <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" /> ConfiDental Beverly Hills
                    </p>
                  </div>
                </div>

                <div className="space-y-1 border-t border-brand-stone/20 pt-4">
                  <span className="text-slate-400 block uppercase font-mono text-[9px] tracking-wider">Social Platforms:</span>
                  <div className="flex gap-2 font-semibold">
                    <a href="https://www.instagram.com/drliyanmassaband/" target="_blank" rel="noopener noreferrer" className="text-brand-bronze hover:underline flex items-center gap-1">
                      Instagram <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>
                </div>

                <div className="space-y-1 border-t border-brand-stone/20 pt-4">
                  <span className="text-slate-400 block uppercase font-mono text-[9px] tracking-wider">Licensure Identification:</span>
                  <div className="space-y-1 bg-brand-stone/10 p-2.5 rounded-lg border border-brand-stone/20 text-[10px] font-mono">
                    <div className="flex justify-between text-slate-600">
                      <span>NPI Target:</span>
                      <span className="font-semibold text-brand-charcoal">1346588407</span>
                    </div>
                    <div className="flex justify-between text-slate-600 mt-1">
                      <span>Authority:</span>
                      <span className="font-semibold text-brand-charcoal text-right">Government Records</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar CTA */}
              <div className="pt-2">
                <Link 
                  to="/contact/" 
                  className="block w-full py-2.5 bg-brand-charcoal hover:bg-brand-bronze text-brand-white text-xs font-semibold text-center rounded-lg transition-colors cursor-pointer"
                >
                  Submit Contact Inquiry
                </Link>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[10px] font-mono text-slate-400 text-center progress-section pt-1">
                <Activity className="w-3 h-3 text-brand-bronze" />
                <span>Last reviewed: 2026-06-22</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Trust & Cybersecurity Hub */}
      <section className="bg-brand-white border-t border-brand-stone/60 py-16" id="profile-trust-shield">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-brand-bronze font-bold block">
              Cryptographic Safeguards & E-E-A-T
            </span>
            <h3 className="font-display font-medium text-brand-charcoal text-xl md:text-2xl">
              Credential Verification & Cybersecurity Locks
            </h3>
            <p className="text-xs text-slate-500">
              Run real-time security checks, copy cryptographic checksums of our PR assets, or audit how Google Search bots map her professional entity.
            </p>
          </div>
          <TrustVerificationShield />
        </div>
      </section>

      {/* Sources and Verification Section */}
      <section className="bg-brand-stone/10 border-t border-brand-stone py-12" id="verification-source-audit-footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-brand-stone pb-4">
            <h3 className="font-display font-semibold text-lg text-brand-charcoal flex items-center gap-2">
              <UserCheck className="w-5 h-5 text-brand-bronze" /> References and Entity Verification Log
            </h3>
            <span className="text-[10px] font-mono uppercase bg-brand-bronze/10 text-brand-bronze px-3 py-1 rounded-full border border-brand-bronze/35">
              VERIFIED PHYSICIAN RECORD
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-xs text-slate-600 font-sans leading-relaxed">
            <div className="space-y-2 border-l-2 border-brand-stone pl-4">
              <span className="font-mono text-[10px] uppercase font-bold text-brand-bronze block">1. Licensing Registry</span>
              <p>State licensure and professional taxonomy are checked directly via the Federal NPI licensing registry (NPI ID: 1346588407).</p>
            </div>
            <div className="space-y-2 border-l-2 border-brand-stone pl-4">
              <span className="font-mono text-[10px] uppercase font-bold text-brand-bronze block">2. Clinic Biographies</span>
              <p>Practice associations and clinical locations are verified under official biography pages of Magnolia Dentistry (Burbank) and ConfiDental Beverly Hills (Beverly Hills).</p>
            </div>
            <div className="space-y-2 border-l-2 border-brand-stone pl-4">
              <span className="font-mono text-[10px] uppercase font-bold text-brand-bronze block">3. Digital Platforms</span>
              <p>Digital medical outreach features are validated directly through the active Instagram social handle (@drliyanmassaband) and public introduction videos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Authority Related Page Navigation */}
      <section className="bg-brand-ivory text-slate-700 py-16 border-t border-brand-stone" id="authority-hub-navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-[10px] font-mono text-brand-bronze uppercase tracking-widest block">Authority Index Ecosystem</span>
            <h3 className="font-display font-medium text-2xl text-brand-charcoal">Explore Dr. Liyan Massaband's Profile</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4" id="related-pages-grid">
            <Link to="/her-story/" className="group p-4 bg-white hover:bg-brand-white border border-brand-stone rounded-xl text-center flex flex-col justify-between h-28 transition-all hover:border-brand-bronze hover:shadow-xs">
              <span className="text-slate-500 text-[10px] font-mono uppercase tracking-wider block">Biography</span>
              <span className="text-brand-charcoal font-display text-[13px] font-semibold block mt-2 group-hover:text-brand-bronze transition-colors">Her Story</span>
              <span className="text-brand-bronze text-[10px] font-mono mt-auto flex items-center justify-center gap-0.5">
                Explore <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>

            <Link to="/education-and-credentials/" className="group p-4 bg-white hover:bg-brand-white border border-brand-stone rounded-xl text-center flex flex-col justify-between h-28 transition-all hover:border-brand-bronze hover:shadow-xs">
              <span className="text-slate-500 text-[10px] font-mono uppercase tracking-wider block">Academia</span>
              <span className="text-brand-charcoal font-display text-[13px] font-semibold block mt-2 group-hover:text-brand-bronze transition-colors">Education & Certs</span>
              <span className="text-brand-bronze text-[10px] font-mono mt-auto flex items-center justify-center gap-0.5">
                Explore <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>

            <Link to="/professional-journey/" className="group p-4 bg-white hover:bg-brand-white border border-brand-stone rounded-xl text-center flex flex-col justify-between h-28 transition-all hover:border-brand-bronze hover:shadow-xs">
              <span className="text-slate-500 text-[10px] font-mono uppercase tracking-wider block">Timeline</span>
              <span className="text-brand-charcoal font-display text-[13px] font-semibold block mt-2 group-hover:text-brand-bronze transition-colors">Journey</span>
              <span className="text-brand-bronze text-[10px] font-mono mt-auto flex items-center justify-center gap-0.5">
                Explore <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>

            <Link to="/philosophy/" className="group p-4 bg-white hover:bg-brand-white border border-brand-stone rounded-xl text-center flex flex-col justify-between h-28 transition-all hover:border-brand-bronze hover:shadow-xs">
              <span className="text-slate-500 text-[10px] font-mono uppercase tracking-wider block">Core Beliefs</span>
              <span className="text-brand-charcoal font-display text-[13px] font-semibold block mt-2 group-hover:text-brand-bronze transition-colors">Philosophy</span>
              <span className="text-brand-bronze text-[10px] font-mono mt-auto flex items-center justify-center gap-0.5">
                Explore <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>

            <Link to="/clinical-affiliations/" className="group p-4 bg-white hover:bg-brand-white border border-brand-stone rounded-xl text-center flex flex-col justify-between h-28 transition-all hover:border-brand-bronze hover:shadow-xs">
              <span className="text-slate-500 text-[10px] font-mono uppercase tracking-wider block">Clinics</span>
              <span className="text-brand-charcoal font-display text-[13px] font-semibold block mt-2 group-hover:text-brand-bronze transition-colors">Affiliations</span>
              <span className="text-brand-bronze text-[10px] font-mono mt-auto flex items-center justify-center gap-0.5">
                Explore <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>

            <Link to="/media/" className="group p-4 bg-white hover:bg-brand-white border border-brand-stone rounded-xl text-center flex flex-col justify-between h-28 transition-all hover:border-brand-bronze hover:shadow-xs">
              <span className="text-slate-500 text-[10px] font-mono uppercase tracking-wider block">Press Hub</span>
              <span className="text-brand-charcoal font-display text-[13px] font-semibold block mt-2 group-hover:text-brand-bronze transition-colors">Media Centre</span>
              <span className="text-brand-bronze text-[10px] font-mono mt-auto flex items-center justify-center gap-0.5">
                Explore <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
