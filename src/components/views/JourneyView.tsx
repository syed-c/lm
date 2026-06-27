import React, { useState } from 'react';
import { useRouter, Link } from '../AppRouter.tsx';
import { SourceReferenceBadge } from '../SourceReferenceBadge.tsx';
import { PortraitPlaceholder } from './ProfileViews.tsx';
import { 
  Compass, 
  Settings2, 
  MapPin, 
  Building2, 
  HelpCircle, 
  ShieldCheck, 
  Activity, 
  GraduationCap, 
  HeartHandshake, 
  Video, 
  ChevronRight,
  Sparkles,
  CalendarDays
} from 'lucide-react';
import { BRAND_CONFIG, CAREER_TIMELINE } from '../../data.ts';

// Definition for our Career Stage items
interface CareerStage {
  id: string;
  stageTitle: string;
  category: 'academia' | 'clinical' | 'outreach' | 'platform';
  location: string;
  yearPrecision: string;
  fullDatePrecision: string;
  narrativeDescription: string;
  sourceId: string;
  verificationAudit: 'fully_corroborated' | 'record_pending' | 'draft_framework';
}

export const JourneyView: React.FC = () => {
  const [displayPrecision, setDisplayPrecision] = useState<'year' | 'full'>('year');
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  // Structured Data Schema for Timeline List
  const journeySchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${currentUrl}#webpage`,
        "url": currentUrl,
        "name": `Professional Journey | ${BRAND_CONFIG.displayName}`,
        "description": "Examine Dr. Liyan Massaband’s career progression and milestones, from physiological sciences to clinical dentistry."
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
            "name": "Professional Journey",
            "item": { "@id": "/professional-journey/" }
          }
        ]
      }
    ]
  };

  // Structured Career milestones based on permitted facts (8 total)
  const careerStages: CareerStage[] = [
    {
      id: "stage-1",
      stageTitle: "Scientific Foundation (Physiological Sciences)",
      category: "academia",
      location: "University of Arizona",
      yearPrecision: "Biographical Record",
      fullDatePrecision: "Unpublished - Awaiting Client Signoff",
      narrativeDescription: "Completed a Bachelor of Science studying human neuromuscular reflexes, metabolic cardiovascular loops, biochemistry, and cellular organ biomechanics, establishing a biological focus on natural aesthetics.",
      sourceId: "UA_BIO",
      verificationAudit: "fully_corroborated"
    },
    {
      id: "stage-2",
      stageTitle: "Public Health Leadership (M.P.H.)",
      category: "academia",
      location: "University of Southern California (USC)",
      yearPrecision: "Biographical Record",
      fullDatePrecision: "Unpublished - Awaiting Client Signoff",
      narrativeDescription: "Conducted post-graduate coursework centered on epidemiology, health literacy obstacles, preventative advocacy, and medical communications to translate scientific findings into clear health perspectives.",
      sourceId: "USC_BIO",
      verificationAudit: "fully_corroborated"
    },
    {
      id: "stage-3",
      stageTitle: "Dental Surgery Doctoral Training (D.M.D.)",
      category: "academia",
      location: "Midwestern University College of Dental Medicine",
      yearPrecision: "Biographical Record",
      fullDatePrecision: "Unpublished - Awaiting Client Signoff",
      narrativeDescription: "Graduated with a Doctor of Dental Medicine, training in micro-invasive restorations, surgical tissue preservation, computer-aided cosmetic design (CAD/CAM veneers), and advanced physiological sedation.",
      sourceId: "MWU_BIO",
      verificationAudit: "fully_corroborated"
    },
    {
      id: "stage-4",
      stageTitle: "California Licensure & Clinical Inception",
      category: "clinical",
      location: "California Dental Board Registry",
      yearPrecision: "Registry Record",
      fullDatePrecision: "Active Licensed Status",
      narrativeDescription: "Successfully registered and verified with the Dental Board of California. Commenced active licensed dental practice, honing a patient-centered approach centered on diagnostic transparency.",
      sourceId: "NPI_REG",
      verificationAudit: "fully_corroborated"
    },
    {
      id: "stage-5",
      stageTitle: "Burbank Clinical Practice Affiliation",
      category: "clinical",
      location: "Magnolia Dentistry (Burbank, CA)",
      yearPrecision: "Active Affiliation",
      fullDatePrecision: "Active Affiliate Status",
      narrativeDescription: "Joined Magnolia Dentistry as an associate dentist, delivering comprehensive family preventative treatments, diagnostic sharing, and periodontal therapies to the San Fernando Valley community.",
      sourceId: "MAGNOLIA_BIO",
      verificationAudit: "fully_corroborated"
    },
    {
      id: "stage-6",
      stageTitle: "Beverly Hills Clinical Practice Affiliation",
      category: "clinical",
      location: "ConfiDental Beverly Hills (Beverly Hills, CA)",
      yearPrecision: "Active Affiliation",
      fullDatePrecision: "Active Affiliate Status",
      narrativeDescription: "Established clinical association with ConfiDental Beverly Hills, performing advanced cosmetic veneers, biomechanical crowns, high-fidelity restorations, and customized systemic treatment patterns.",
      sourceId: "CONFIDENTAL_BIO",
      verificationAudit: "fully_corroborated"
    },
    {
      id: "stage-7",
      stageTitle: "Public Dental Health Video Outreach",
      category: "outreach",
      location: "Digital Media Platforms (YouTube & Instagram)",
      yearPrecision: "Active Outreach",
      fullDatePrecision: "Ongoing Public Distribution",
      narrativeDescription: "Began scripting and producing open-access educational videos targeting dental phobia, biomaterial properties, and oral systemic links, ensuring actionable patient education beyond surgery walls.",
      sourceId: "INSTA_BIO",
      verificationAudit: "fully_corroborated"
    },
    {
      id: "stage-8",
      stageTitle: "Personal Authority Platform Inception",
      category: "platform",
      location: "Official Brand Platform Launch",
      yearPrecision: "2026",
      fullDatePrecision: "June 2026 Launch",
      narrativeDescription: "Designed and launched her official personal authority brand website, establishing a source-verified central library for health journalists, clinical collaborators, and research directories.",
      sourceId: "NPI_REG",
      verificationAudit: "draft_framework"
    }
  ];

  // Filtering Logic
  const filteredStages = careerStages.filter(stage => {
    if (filterCategory === 'all') return true;
    return stage.category === filterCategory;
  });

  return (
    <div className="bg-brand-white text-brand-charcoal animate-reveal leading-relaxed" id="journey-timeline-page">
      {/* Schema Injection */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(journeySchema) }}
      />

      {/* Editorial Breadcrumb Header */}
      <div className="bg-brand-white border-b border-brand-stone/30 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs font-mono text-slate-500">
            <Link to="/" className="hover:text-brand-bronze transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-brand-charcoal font-medium">Professional Journey</span>
          </nav>
        </div>
      </div>

      {/* Hero Section (Alternate Soft Gray Editorial) */}
      <section className="bg-brand-stone/5 py-12 md:py-20 border-b border-brand-stone" id="journey-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Narrative Title */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono font-bold text-brand-bronze uppercase tracking-widest block">
                Professional Journey
              </span>
              <h1 className="font-display font-medium text-brand-charcoal text-3xl md:text-5xl tracking-tight leading-tight">
                A Professional Journey Across Science, Public Health and Dentistry
              </h1>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl font-sans">
                Follow Dr. Liyan Massaband’s career progression. Guided by systematic biological science, she has advanced from physiological studies and public advocacy to high-precision surgical dental medicine.
              </p>
            </div>

            {/* Right Hero Image Column */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="w-full max-w-sm">
                <PortraitPlaceholder description="Dr. Liyan Massaband - Professional Journey Portrait" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Core Body */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16" id="journey-body-container">
        
        {/* Timeline Control Module (Sandbox Panel) */}
        <div className="bg-brand-white border border-brand-stone rounded-2xl p-5 md:p-6 mb-12 shadow-sm space-y-5" id="timeline-interactive-admin-panel">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-brand-stone/40 pb-4">
            <div className="space-y-0.5">
              <span className="text-[10px] font-mono tracking-wider font-bold text-brand-bronze uppercase flex items-center gap-1.5">
                <Settings2 className="w-4 h-4 text-brand-bronze" /> Interactive Timeline Parameters
              </span>
              <p className="text-xs text-slate-500 font-sans">Toggle timeline dates and view modes according to verified client records.</p>
            </div>
            
            {/* Precision Selector toggle */}
            <div className="flex bg-brand-stone/25 p-1 rounded-lg border border-brand-stone/50 text-xs font-mono shrink-0">
              <button 
                onClick={() => setDisplayPrecision('year')}
                className={`px-3 py-1.5 rounded-md cursor-pointer transition-colors ${displayPrecision === 'year' ? 'bg-brand-charcoal text-brand-white font-semibold' : 'text-slate-600 hover:text-brand-charcoal'}`}
              >
                Year Precision
              </button>
              <button 
                onClick={() => setDisplayPrecision('full')}
                className={`px-3 py-1.5 rounded-md cursor-pointer transition-colors ${displayPrecision === 'full' ? 'bg-brand-charcoal text-brand-white font-semibold' : 'text-slate-600 hover:text-brand-charcoal'}`}
              >
                Date Audit logs
              </button>
            </div>
          </div>

          {/* Categories Selector */}
          <div className="flex flex-wrap gap-2 text-xs font-mono" id="category-filters-container">
            <span className="text-slate-500 my-auto mr-1.5 uppercase font-medium text-[10px]">Filter Stage:</span>
            {[
              { id: 'all', label: 'All Stages (8)' },
              { id: 'academia', label: 'Academia (3)' },
              { id: 'clinical', label: 'Clinical Practices (3)' },
              { id: 'outreach', label: 'Patient Education (1)' },
              { id: 'platform', label: 'Personal Platform (1)' },
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setFilterCategory(cat.id)}
                className={`px-3 py-1.5 rounded-full border cursor-pointer transition-all ${
                  filterCategory === cat.id 
                    ? 'bg-brand-bronze/10 text-brand-bronze border-brand-bronze/40 font-semibold' 
                    : 'bg-brand-white text-slate-600 border-brand-stone hover:border-brand-bronze'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Structural Left-Aligned Timeline Stages */}
        <div className="relative border-l border-brand-stone/60 pl-6 sm:pl-8 ml-3 space-y-12 py-4" id="chronological-timeline-stages">
          
          {filteredStages.map((stage, idx) => (
            <div 
              key={stage.id} 
              className="relative group space-y-3.5" 
              id={stage.id}
            >
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full bg-brand-white border-2 border-brand-bronze flex items-center justify-center transition-all group-hover:scale-125 z-10">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-bronze" />
              </div>

              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-brand-stone/30 pb-2">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-mono font-bold text-slate-400 flex items-center gap-1.5">
                    <CalendarDays className="w-3.5 h-3.5 text-brand-bronze" />
                    {displayPrecision === 'year' ? stage.yearPrecision : stage.fullDatePrecision}
                  </span>
                  <h3 className="font-display font-semibold text-[17px] md:text-[19px] text-brand-charcoal tracking-tight group-hover:text-brand-bronze transition-colors leading-tight">
                    {stage.stageTitle}
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  <SourceReferenceBadge sourceIds={[stage.sourceId]} />
                </div>
              </div>

              {/* Body Metadata block */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 text-xs font-sans">
                <div className="md:col-span-3 space-y-1.5 shrink-0 bg-brand-stone/10 p-3 rounded-lg border border-brand-stone/30 font-mono text-[10px]">
                  <div>
                    <span className="block text-slate-400 uppercase tracking-tight">Location:</span>
                    <span className="font-semibold text-brand-charcoal">{stage.location}</span>
                  </div>
                  <div className="pt-2 border-t border-brand-stone/20">
                    <span className="block text-slate-400 uppercase tracking-tight">Category:</span>
                    <span className="font-semibold text-brand-charcoal capitalize">{stage.category}</span>
                  </div>
                </div>

                <div className="md:col-span-9 text-slate-600 leading-relaxed text-sm">
                  <p>{stage.narrativeDescription}</p>
                </div>
              </div>

            </div>
          ))}

          {filteredStages.length === 0 && (
            <div className="text-center py-12 space-y-2 border border-dashed border-brand-stone rounded-2xl bg-brand-stone/5 font-sans">
              <p className="font-semibold text-brand-charcoal">No Stages Match Filters</p>
              <p className="text-xs text-slate-500">Adjust the category parameters above to inspect details.</p>
            </div>
          )}

        </div>

        {/* Sources Transparency Audit Section */}
        <section className="bg-brand-stone/10 border border-brand-stone p-6 md:p-8 rounded-2xl space-y-6 mt-16" id="transparency-audit">
          <div className="space-y-2">
            <h3 className="font-display font-semibold text-lg text-brand-charcoal flex items-center gap-1.5">
              <ShieldCheck className="w-5 h-5 text-brand-bronze" /> Verification and Registry References
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Dr. Liyan Massaband’s historical milestones are cross-referenced directly against collegiate registrars, state dental board licensing directories, and practice registries. Click on any 
              <span className="text-brand-bronze font-mono font-medium mx-1 border border-brand-bronze/35 bg-brand-bronze/5 px-1.5 py-0.5 rounded-full text-[10px]">Source Verified</span> 
              badge within the timeline to see active credentials, verification logs, auditing dates, and direct links to public directories.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 pt-1.5 text-xs text-slate-600">
            <p className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-slate-400" /> Burbank Clinic Registry Checked</p>
            <p className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-slate-400" /> Beverly Hills Clinic Registry Checked</p>
            <p className="flex items-center gap-1.5"><Building2 className="w-3.5 h-3.5 text-slate-400" /> CA Dental Board Licensure Active</p>
          </div>
        </section>

      </div>

      {/* Recommended Related Navigation Links */}
      <section className="bg-brand-ivory text-slate-700 py-16 border-t border-brand-stone" id="authority-hub-navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-[10px] font-mono text-brand-bronze uppercase tracking-widest block">Authority Index Ecosystem</span>
            <h3 className="font-display font-medium text-2xl text-brand-charcoal">Explore Dr. Liyan Massaband's Profile</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4" id="related-pages-grid">
            <Link to="/dr-liyan-massaband/" className="group p-4 bg-white hover:bg-brand-white border border-brand-stone rounded-xl text-center flex flex-col justify-between h-28 transition-all hover:border-brand-bronze hover:shadow-xs">
              <span className="text-slate-500 text-[10px] font-mono uppercase tracking-wider block">Official Directory</span>
              <span className="text-brand-charcoal font-display text-[13px] font-semibold block mt-2 group-hover:text-brand-bronze transition-colors">Official Profile</span>
              <span className="text-brand-bronze text-[10px] font-mono mt-auto flex items-center justify-center gap-0.5">
                Explore <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>

            <Link to="/her-story/" className="group p-4 bg-white hover:bg-brand-white border border-brand-stone rounded-xl text-center flex flex-col justify-between h-28 transition-all hover:border-brand-bronze hover:shadow-xs">
              <span className="text-slate-500 text-[10px] font-mono uppercase tracking-wider block">Biography</span>
              <span className="text-brand-charcoal font-display text-[13px] font-semibold block mt-2 group-hover:text-brand-bronze transition-colors">Her Story</span>
              <span className="text-brand-bronze text-[10px] font-mono mt-auto flex items-center justify-center gap-0.5">
                Explore <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>

            <Link to="/education-and-credentials/" className="group p-4 bg-white hover:bg-brand-white border border-brand-stone rounded-xl text-center flex flex-col justify-between h-28 transition-all hover:border-brand-bronze hover:shadow-xs">
              <span className="text-slate-500 text-[10px] font-mono uppercase tracking-wider block">Academia</span>
              <span className="text-brand-charcoal font-display text-[13px] font-semibold block mt-2 group-hover:text-brand-bronze transition-colors">Education & Certs</span>
              <span className="text-brand-bronze text-[10px] font-mono mt-auto flex items-center justify-center gap-0.5">
                Explore <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>

            <Link to="/philosophy/" className="group p-4 bg-white hover:bg-brand-white border border-brand-stone rounded-xl text-center flex flex-col justify-between h-28 transition-all hover:border-brand-bronze hover:shadow-xs">
              <span className="text-slate-500 text-[10px] font-mono uppercase tracking-wider block">Core Beliefs</span>
              <span className="text-brand-charcoal font-display text-[13px] font-semibold block mt-2 group-hover:text-brand-bronze transition-colors">Philosophy</span>
              <span className="text-brand-bronze text-[10px] font-mono mt-auto flex items-center justify-center gap-0.5">
                Explore <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>

            <Link to="/clinical-affiliations/" className="group p-4 bg-white hover:bg-brand-white border border-brand-stone rounded-xl text-center flex flex-col justify-between h-28 transition-all hover:border-brand-bronze hover:shadow-xs">
              <span className="text-slate-500 text-[10px] font-mono uppercase tracking-wider block">Clinics</span>
              <span className="text-brand-charcoal font-display text-[13px] font-semibold block mt-2 group-hover:text-brand-bronze transition-colors">Affiliations</span>
              <span className="text-brand-bronze text-[10px] font-mono mt-auto flex items-center justify-center gap-0.5">
                Explore <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
