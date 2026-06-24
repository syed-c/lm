import React from 'react';
import { Link } from '../AppRouter.tsx';
import { PR_ITEMS, BRAND_CONFIG } from '../../data.ts';
import { 
  Building2, 
  ShieldCheck, 
  Globe, 
  Calendar, 
  ExternalLink,
  ChevronRight,
  FileCheck2,
  Award,
  Users
} from 'lucide-react';

export const ProfessionalMentionsView: React.FC = () => {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  // Structured Data Schema for Professional Mentions
  const mentionsSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${currentUrl}#webpage`,
        "url": currentUrl,
        "name": `Professional Mentions & External References | ${BRAND_CONFIG.displayName}`,
        "description": "View verified public provider records, clinic-owned biographies, and healthcare directory validations for Dr. Liyan Massaband.",
        "publisher": {
          "@type": "Person",
          "name": BRAND_CONFIG.personName
        }
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
            "name": "Professional Mentions",
            "item": { "@id": "/professional-mentions/" }
          }
        ]
      }
    ]
  };

  // Group PR Items by category
  const profiles = PR_ITEMS.filter(item => item.contentType === 'Professional Profile');
  const industryMentions = PR_ITEMS.filter(item => item.contentType === 'Industry Mention');
  const clinicalBios = PR_ITEMS.filter(item => item.slug.includes('biography'));

  return (
    <div className="bg-brand-white text-brand-charcoal animate-reveal leading-relaxed leading-relaxed" id="mentions-page">
      {/* Schema Injection */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mentionsSchema) }}
      />

      {/* Editorial Breadcrumb */}
      <div className="bg-brand-white border-b border-brand-stone/30 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs font-mono text-slate-500">
            <Link to="/" className="hover:text-brand-bronze transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/media/" className="hover:text-brand-bronze transition-colors">Media Centre</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-brand-charcoal font-medium">Mentions</span>
          </nav>
        </div>
      </div>

      {/* Hero Header */}
      <section className="bg-brand-stone/5 py-12 md:py-16 border-b border-brand-stone/40" id="mentions-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono font-bold text-brand-bronze uppercase tracking-widest block">
              Registry Indexes & Verifications
            </span>
            <h1 className="font-display font-medium text-brand-charcoal text-3xl md:text-5xl tracking-tight leading-tight">
              Professional Mentions and External References
            </h1>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed font-sans">
              To preserve brand transparency and clinical trust, this directory catalogues verified healthcare registries, governmental practitioner indexes, and clinic-owned profiles associated with Dr. Liyan Massaband.
            </p>
          </div>
        </div>
      </section>

      {/* Main List Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20" id="mentions-grid-container">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Main Feed Column */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* Section 1: Professional Registries & Records */}
            <section className="space-y-6" id="healthcare-registries-section">
              <div className="border-b border-brand-stone pb-3">
                <h2 className="font-display font-medium text-2xl text-brand-charcoal flex items-center gap-2">
                  <FileCheck2 className="w-6 h-6 text-brand-bronze" /> Healthcare Professional Profiles & Public Records
                </h2>
                <p className="text-xs text-slate-500 mt-1 font-sans">
                  Verified federal, state, and private practitioner verification databases.
                </p>
              </div>

              <div className="space-y-6 font-sans">
                {profiles.map((record) => (
                  <div key={record.id} className="bg-brand-white border border-brand-stone p-6 rounded-2xl space-y-4 shadow-xs" id={`mention-card-${record.id}`}>
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-brand-stone/30 pb-3">
                      <span className="text-[10px] font-mono font-bold text-brand-bronze uppercase tracking-wider bg-brand-bronze/5 px-2.5 py-0.5 rounded-full border border-brand-bronze/20">
                        {record.contentType}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Last Checked: {record.lastChecked}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-display font-semibold text-lg text-brand-charcoal leading-snug">
                        {record.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {record.summary}
                      </p>
                    </div>

                    <div className="bg-brand-stone/10 p-3.5 rounded-xl border border-brand-stone/30 space-y-2 text-xs">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-500 font-mono">
                        <div>
                          <strong>Registry Master:</strong> {record.publisher}
                        </div>
                        <div>
                          <strong>Verification Integrity:</strong> <span className="text-emerald-700 font-semibold">✓ {record.sourceVerified ? "Verified Factual" : "Under Review"}</span>
                        </div>
                        <div>
                          <strong>Anchor Citation:</strong> <span className="italic">"{record.backlinkAnchor}"</span>
                        </div>
                        <div>
                          <strong>Logo Status:</strong> {record.logoRightsStatus === 'text_only' ? 'Editorial Text Designation (No Logo)' : 'Authorized Use'}
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 flex items-center justify-between">
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Platform type: {record.mediaLabel}</span>
                      <a 
                        href={record.publicationURL}
                        target="_blank" 
                        rel="nofollow noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-brand-bronze hover:text-brand-charcoal transition-colors decoration-brand-bronze"
                      >
                        <span>View Original Registry</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 2: Clinic-Owned Biographies */}
            <section className="space-y-6" id="clinical-biographies-section">
              <div className="border-b border-brand-stone pb-3">
                <h2 className="font-display font-medium text-2xl text-brand-charcoal flex items-center gap-2">
                  <Building2 className="w-6 h-6 text-brand-bronze" /> Official Clinic-Owned Biographies
                </h2>
                <p className="text-xs text-slate-500 mt-1 font-sans">
                  Portals mapping her day-to-day patient operations in Burbank and Beverly Hills.
                </p>
              </div>

              <div className="space-y-6 lg:space-y-8 font-sans">
                {clinicalBios.map((record) => (
                  <div key={record.id} className="bg-brand-white border border-brand-stone p-6 rounded-2xl space-y-4 shadow-xs" id={`mention-card-${record.id}`}>
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-brand-stone/30 pb-3">
                      <span className="text-[10px] font-mono font-bold text-brand-bronze uppercase tracking-wider bg-brand-bronze/5 px-2.5 py-0.5 rounded-full border border-brand-bronze/20">
                        Clinic-Owned Content
                      </span>
                      <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Last Checked: {record.lastChecked}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-display font-semibold text-lg text-brand-charcoal leading-snug">
                        {record.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {record.summary}
                      </p>
                    </div>

                    <div className="bg-brand-stone/10 p-3.5 rounded-xl border border-brand-stone/30 space-y-2 text-xs">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-500 font-mono">
                        <div>
                          <strong>Affiliated Clinic:</strong> {record.publisher}
                        </div>
                        <div>
                          <strong>Verification:</strong> <span className="text-emerald-700 font-semibold">✓ Active Clinician Profile</span>
                        </div>
                        <div>
                          <strong>Crawlability:</strong> <span className="font-semibold text-slate-700">Index, Follow (Natural)</span>
                        </div>
                        <div>
                          <strong>Client Approval:</strong> <span className="text-emerald-700 font-semibold">✓ Approved</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 flex items-center justify-between">
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Platform type: {record.mediaLabel}</span>
                      <a 
                        href={record.publicationURL}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-brand-bronze hover:text-brand-charcoal transition-colors decoration-brand-bronze"
                      >
                        <span>View Practitioner Biography</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3: Industry Mentions */}
            <section className="space-y-6" id="industry-mentions-section">
              <div className="border-b border-brand-stone pb-3">
                <h2 className="font-display font-medium text-2xl text-brand-charcoal flex items-center gap-2">
                  <Award className="w-6 h-6 text-brand-bronze" /> Industry Mentions & Software Citations
                </h2>
                <p className="text-xs text-slate-500 mt-1 font-sans">
                  Third-party dental software audit metrics and professional platform reviews.
                </p>
              </div>

              <div className="space-y-6 font-sans">
                {industryMentions.map((record) => (
                  <div key={record.id} className="bg-brand-white border border-brand-stone p-6 rounded-2xl space-y-4 shadow-xs" id={`mention-card-${record.id}`}>
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-brand-stone/30 pb-3">
                      <span className="text-[10px] font-mono font-bold text-brand-bronze uppercase tracking-wider bg-brand-bronze/5 px-2.5 py-0.5 rounded-full border border-brand-bronze/20">
                        {record.contentType}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Last Checked: {record.lastChecked}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-display font-semibold text-lg text-brand-charcoal leading-snug">
                        {record.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {record.summary}
                      </p>
                    </div>

                    <div className="bg-brand-stone/10 p-3.5 rounded-xl border border-brand-stone/30 p-3 text-xs">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-500 font-mono">
                        <div>
                          <strong>Industry Publisher:</strong> {record.publisher}
                        </div>
                        <div>
                          <strong>Category Alignment:</strong> {record.contentType}
                        </div>
                        <div>
                          <strong>Link attributes:</strong> rel="nofollow noopener" (Compliant)
                        </div>
                        <div>
                          <strong>Transparency label:</strong> Shared Media Feed
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 flex items-center justify-between">
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Platform type: {record.mediaLabel}</span>
                      <a 
                        href={record.publicationURL}
                        target="_blank" 
                        rel="nofollow noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-brand-bronze hover:text-brand-charcoal transition-colors decoration-brand-bronze"
                      >
                        <span>View Audit Mentions</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Right Accents Info Column */}
          <div className="lg:col-span-4 space-y-6" id="mentions-faq-column">
            
            <div className="bg-brand-charcoal text-brand-white border border-brand-stone/20 p-6 rounded-2xl space-y-4">
              <span className="text-[10px] font-mono text-brand-bronze uppercase tracking-widest font-bold block">Verification Policy</span>
              <h4 className="font-display font-semibold text-[17px] leading-tight text-brand-white">Zero Fake PR Commitments</h4>
              <p className="text-slate-300 text-xs font-sans leading-relaxed">
                We strictly separate clinic-owned websites, official social channels, and public directory registration profiles from independent, earned editorial media columns.
              </p>
              <div className="bg-brand-stone/10 p-3 rounded-lg text-[10px] font-mono text-slate-400 leading-relaxed">
                Dr. Massaband's brand platform operates under strict ethical guidelines in compliance with ADA and local dental licensing expectations, avoiding exaggeration.
              </div>
            </div>

            <div className="bg-brand-white border border-brand-stone p-6 rounded-2xl space-y-4">
              <h4 className="font-display font-semibold text-brand-charcoal text-[15px] flex items-center gap-2 border-b border-brand-stone/30 pb-2.5">
                <Globe className="w-5 h-5 text-brand-bronze" /> Ecosystem References
              </h4>
              <p className="text-xs text-slate-500 font-sans leading-relaxed">
                Additional public nodes mapping the health advocacy footprint of {BRAND_CONFIG.personName}:
              </p>
              
              <div className="space-y-3.5 text-xs text-brand-charcoal font-semibold font-sans">
                <a href={BRAND_CONFIG.contactEmail} className="flex items-center justify-between hover:text-brand-bronze p-1 border-b border-brand-stone/20">
                  <span>Official Registrar Records</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 font-bold" />
                </a>
                <a href="https://www.youtube.com/watch?v=-6nZKwfkXzc" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between hover:text-brand-bronze p-1 border-b border-brand-stone/20">
                  <span>Educational Broadcasting Index</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 font-bold" />
                </a>
                <a href="https://www.instagram.com/drliyanmassaband/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between hover:text-brand-bronze p-1 border-b border-brand-stone/20">
                  <span>Social Education Archives</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Media Centre Footer Hub navigation */}
      <section className="bg-brand-charcoal text-slate-300 py-16 border-t border-brand-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-[10px] font-mono text-brand-bronze uppercase tracking-widest block font-bold">Authority Index Ecosystem</span>
            <h3 className="font-display font-medium text-2xl text-brand-white">Return to the PR & Public Assets Centre</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto" id="mentions-related-pages-grid">
            <Link to="/media/" className="group p-4 bg-[#151515] hover:bg-[#1a1a1a] border border-brand-stone/20 rounded-xl text-center flex flex-col justify-between h-24 transition-all hover:border-brand-bronze">
              <span className="text-slate-400 text-[9px] font-mono uppercase tracking-wider block">Media Center</span>
              <span className="text-brand-white font-display text-sm font-semibold block mt-1 group-hover:text-brand-bronze transition-colors">Media & Public Presence</span>
            </Link>

            <Link to="/press-kit/" className="group p-4 bg-[#151515] hover:bg-[#1a1a1a] border border-brand-stone/20 rounded-xl text-center flex flex-col justify-between h-24 transition-all hover:border-brand-bronze">
              <span className="text-slate-400 text-[9px] font-mono uppercase tracking-wider block">Approved Assets</span>
              <span className="text-brand-white font-display text-sm font-semibold block mt-1 group-hover:text-brand-bronze transition-colors">Press Kit & Bios</span>
            </Link>

            <Link to="/speaking/" className="group p-4 bg-[#151515] hover:bg-[#1a1a1a] border border-brand-stone/20 rounded-xl text-center flex flex-col justify-between h-24 transition-all hover:border-brand-bronze">
              <span className="text-slate-400 text-[9px] font-mono uppercase tracking-wider block">Booking</span>
              <span className="text-brand-white font-display text-sm font-semibold block mt-1 group-hover:text-brand-bronze transition-colors">Speaking & Podcasts</span>
            </Link>

            <Link to="/videos/" className="group p-4 bg-[#151515] hover:bg-[#1a1a1a] border border-brand-stone/20 rounded-xl text-center flex flex-col justify-between h-24 transition-all hover:border-brand-bronze">
              <span className="text-slate-400 text-[9px] font-mono uppercase tracking-wider block">Education</span>
              <span className="text-brand-white font-display text-sm font-semibold block mt-1 group-hover:text-brand-bronze transition-colors">Videos & Broadcasts</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

// 6. PATIENT TRUST & CLINICAL ETHICS ROUTING PORTAL (/patient-trust/)
export const PatientTrustView: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 font-sans" id="patient-trust-page">
      
      {/* Editorial Trust Intro */}
      <div className="max-w-3xl mb-12 space-y-4">
        <span className="text-xs font-mono font-bold text-brand-bronze uppercase tracking-widest block">Clinical Integrity Index</span>
        <h1 className="font-display font-medium text-brand-charcoal text-3xl md:text-5xl tracking-tight">
          How Dr. Massaband Builds Patient Trust
        </h1>
        <p className="text-sm text-slate-500 leading-relaxed max-w-2xl">
          Maintaining patient safety, clinical transparency, and strict adherence to healthcare state and federal licensing guidelines.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
        
        {/* Core Pillars */}
        <div className="lg:col-span-8 space-y-10">
          
          <div className="space-y-4">
            <h2 className="font-display font-semibold text-brand-charcoal text-xl border-b border-brand-stone pb-2">
              The Four Cornerstones of Patient-Brand Separation
            </h2>
            <p className="text-xs text-slate-500 leading-relaxed">
              Dr. Massaband insists on separating her public educational commentaries from direct commercial treatments. Here is how we verify that integrity:
            </p>

            <div className="space-y-6">
              <div className="bg-brand-white border border-brand-stone p-6 rounded-2xl space-y-2">
                <span className="text-[10px] font-mono text-brand-bronze uppercase tracking-wider font-bold block">PILLAR 1</span>
                <h3 className="font-display font-semibold text-brand-charcoal text-[15px]">Strict Non-Commercial Content</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  We never pitch discount coupons, buy-one-get-one aesthetic bonding vouchers, or generic "refer-a-friend" campaigns. Our materials are strictly educational, designed to empower patients with baseline biological facts to coordinate independently with their personal dentists.
                </p>
              </div>

              <div className="bg-brand-white border border-brand-stone p-6 rounded-2xl space-y-2">
                <span className="text-[10px] font-mono text-brand-bronze uppercase tracking-wider font-bold block">PILLAR 2</span>
                <h3 className="font-display font-semibold text-brand-charcoal text-[15px]">Direct Clinical Separation</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Dr. Massaband operates strictly as an associate dentist within her respective practices. There is no direct "Dr. Liyan private clinic" owned or hosted here. Booking procedures, charting histories, HIPAA folders, and payment structures belong solely to those separate, state-audited clinical offices.
                </p>
              </div>

              <div className="bg-brand-white border border-brand-stone p-6 rounded-2xl space-y-2">
                <span className="text-[10px] font-mono text-brand-bronze uppercase tracking-wider font-bold block">PILLAR 3</span>
                <h3 className="font-display font-semibold text-brand-charcoal text-[15px]">Validated Scientific Rigor</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Every health advice statement is tied directly to secondary verified sources. We do not support unsubstantiated, non-peer-reviewed claims regarding biological holistic alignments unless they are supported by dental scientific literature.
                </p>
              </div>

              <div className="bg-brand-white border border-brand-stone p-6 rounded-2xl space-y-2">
                <span className="text-[10px] font-mono text-brand-bronze uppercase tracking-wider font-bold block">PILLAR 4</span>
                <h3 className="font-display font-semibold text-brand-charcoal text-[15px]">Active State & Federal Registries</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Her credential mapping is directly verifiable via the CMS NPI database and Zocdoc patient feedback logs, demonstrating active status and clean licensing coordinates in CA.
                </p>
              </div>
            </div>
          </div>

          {/* Patient Rights section */}
          <div className="space-y-4">
            <h2 className="font-display font-semibold text-brand-charcoal text-xl border-b border-brand-stone pb-2 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-brand-bronze" /> HIPAA & Accessibility Mandates
            </h2>
            <p className="text-xs text-slate-500 leading-relaxed">
              We proactively secure digital safety for all online users and prospective patients:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-xs text-slate-650 leading-relaxed">
              <li><strong>Zero EHR Transmission on This Server:</strong> Because this is an educational branding hub, we do not host or query Electronic Health Records (EHR) of any patient. Forms do not collect patient SSN, medical histories, or treatment notes.</li>
              <li><strong>WCAG 2.1 AA Compliant:</strong> Fully audited high-contrast text ratios, direct keyboard nav controls, and descriptive alt texts allowing visually impaired students and patients to access her dental public health publications safely.</li>
            </ul>
          </div>

        </div>

        {/* Right Directory Card */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-brand-white border border-brand-stone p-6 rounded-2xl space-y-4">
            <h3 className="font-display font-semibold text-brand-charcoal text-base">Verified External Profiles</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Confirm Dr. Massaband's public health standing and practicing license with verified federal databases:
            </p>

            <div className="space-y-3">
              <a
                href="https://npiregistry.cms.hhs.gov/provider-view/1346588407"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-left p-3 border border-brand-stone hover:bg-neutral-50 rounded-xl block transition-all group"
              >
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-brand-charcoal">CMS Federal NPI Registry</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-brand-bronze" />
                </div>
                <span className="text-[10px] text-slate-400 block mt-1">Provider ID: 1346588407 — General Dentist Taxonomy</span>
              </a>

              <a
                href="https://www.zocdoc.com/dentist/liyan-massaband-dmd-mph-314420"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-left p-3 border border-brand-stone hover:bg-neutral-50 rounded-xl block transition-all group"
              >
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-brand-charcoal">Zocdoc Patient Directory</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-brand-bronze" />
                </div>
                <span className="text-[10px] text-slate-400 block mt-1">Direct patient check-ins, office coordination logs & verified feedback</span>
              </a>
            </div>

            <div className="pt-2">
              <Link
                to="/official-profiles/"
                className="w-full text-center py-2.5 bg-brand-charcoal hover:bg-brand-bronze text-brand-white rounded-lg block font-semibold text-xs transition-colors"
              >
                View Full Authority Directory
              </Link>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

// 7. VERIFIED OFFICIAL PROFILES HUB (/official-profiles/)
export const OfficialProfilesView: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 font-sans" id="official-profiles-page">
      
      <div className="max-w-3xl mb-12 space-y-4">
        <span className="text-xs font-mono font-bold text-brand-bronze uppercase tracking-widest block font-bold">Verifiable Healthcare Directory</span>
        <h1 className="font-display font-medium text-brand-charcoal text-3xl md:text-5xl tracking-tight">
          Official Web Directories & Verified Presences
        </h1>
        <p className="text-sm text-slate-500 leading-relaxed max-w-2xl font-sans">
          To ensure patients and journalists access genuine credentials, review our compiled list of verified state, federal, and practice-specific directories for Dr. Liyan Massaband.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 font-sans">
        {PR_ITEMS.map((item) => (
          <div key={item.id} className="bg-brand-white border border-brand-stone p-6 rounded-2xl space-y-4 flex flex-col justify-between" id={`profile-card-${item.slug}`}>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-brand-bronze bg-brand-bronze/5 px-2.5 py-0.5 rounded-full border border-brand-bronze/30 uppercase tracking-wider font-bold">
                  {item.contentType}
                </span>
                <span className="text-[10px] text-slate-400 font-mono">
                  Checked: {item.lastChecked}
                </span>
              </div>
              <h3 className="font-display font-semibold text-brand-charcoal text-base leading-tight">
                {item.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                {item.summary}
              </p>
            </div>

            <div className="pt-4 border-t border-brand-stone/20 flex justify-between items-center">
              <div className="text-xs text-slate-400 font-mono">
                <span>Domain: {item.publisherDomain}</span>
              </div>
              
              <a 
                href={item.publicationURL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono font-bold text-brand-bronze hover:text-brand-bronze-light flex items-center gap-1"
              >
                <span>Verify Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Trust Notice */}
      <div className="bg-brand-white border border-brand-stone/40 rounded-2xl p-6 text-xs text-slate-500 max-w-4xl leading-relaxed mx-auto font-mono text-center">
        <span>SECURITY NOTICE: All external profiles here are continuously audited by Dr. Massaband's public relations team. If any third-party registry displays incorrect details, please alert us at: </span>
        <span className="text-brand-bronze font-bold">{BRAND_CONFIG.contactEmail}</span>
      </div>

    </div>
  );
};
