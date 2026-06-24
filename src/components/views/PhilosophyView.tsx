import React from 'react';
import { useRouter, Link } from '../AppRouter.tsx';
import { SourceReferenceBadge } from '../SourceReferenceBadge.tsx';
import { PortraitPlaceholder } from './ProfileViews.tsx';
import { 
  HeartHandshake, 
  Sparkles, 
  Activity, 
  MapPin, 
  ShieldAlert, 
  CheckCircle2, 
  HelpCircle, 
  Cpu, 
  MessageSquareCode, 
  Award,
  Video,
  ChevronRight,
  Accessibility
} from 'lucide-react';
import { BRAND_CONFIG } from '../../data.ts';

export const PhilosophyView: React.FC = () => {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  // Structured Data Schema for Medical Philosophy
  const philosophySchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${currentUrl}#webpage`,
        "url": currentUrl,
        "name": `Professional Philosophy | ${BRAND_CONFIG.displayName}`,
        "description": "Read Dr. Liyan Massaband’s core clinical beliefs, focusing on biological integration, natural aesthetics, diagnostic transparency, and anxiety management."
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
            "name": "Professional Philosophy",
            "item": { "@id": "/philosophy/" }
          }
        ]
      }
    ]
  };

  return (
    <div className="bg-brand-white text-brand-charcoal animate-reveal leading-relaxed" id="philosophy-page">
      {/* Schema Injection */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(philosophySchema) }}
      />

      {/* Editorial Breadcrumb Header */}
      <div className="bg-brand-white border-b border-brand-stone/30 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs font-mono text-slate-500">
            <Link to="/" className="hover:text-brand-bronze transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-brand-charcoal font-medium">Philosophy</span>
          </nav>
        </div>
      </div>

      {/* Hero Section (Warm Neutral/Light Editorial) */}
      <section className="bg-brand-stone/5 py-12 md:py-20 border-b border-brand-stone" id="philosophy-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Narrative Title */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono font-bold text-brand-bronze uppercase tracking-widest block">
                Professional Philosophy & Clinical Perspective
              </span>
              <h1 className="font-display font-medium text-brand-charcoal text-3xl md:text-5xl tracking-tight leading-tight">
                A Professional Philosophy Centred on Listening, Clarity and Individuality
              </h1>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl font-sans">
                A medical approach anchored in anatomical preservation, diagnostic transparency, and individualized care. Discover why Dr. Massaband places communication at the center of clinical restoration.
              </p>
            </div>

            {/* Right Hero Image Column */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="w-full max-w-sm">
                <PortraitPlaceholder description="Dr. Liyan Massaband - Professional Philosophy Portrait" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Narrative Section Body */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20" id="philosophy-narrative-container">
        
        {/* Core Narrative Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* LEFT COLUMN: Narrative Sections */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* SECTION 1: LISTENING BEFORE PLANNING */}
            <section className="space-y-4" id="section-listening">
              <div className="flex items-center gap-1.5 text-brand-bronze">
                <HeartHandshake className="w-5 h-5" />
                <h3 className="font-display font-semibold text-lg text-brand-charcoal">1. Listening Before Planning</h3>
              </div>
              <p className="text-slate-600 text-sm md:text-base">
                An objective diagnosis is only the beginning of care. Dr. Massaband holds that every clinical assessment should initiate with extensive dialogue. Automated, hasty plans often overlook the patient's lifestyle, comfort tolerances, and genuine dental history. Listening preserves patient peace of mind and builds stable collaborative outcomes.
              </p>
            </section>

            {/* SECTION 2: HEALTH, FUNCTION AND APPEARANCE */}
            <section className="space-y-4" id="section-systemic">
              <div className="flex items-center gap-1.5 text-brand-bronze">
                <Award className="w-5 h-5" />
                <h3 className="font-display font-semibold text-lg text-brand-charcoal">2. Health, Function and Appearance</h3>
              </div>
              <p className="text-slate-600 text-sm md:text-base">
                Oral health represents the primary indicator of chronic metabolic, neurological, and cardiovascular alignment. Periodontal tissue inflammation, salivary imbalances, and neuromuscular tooth wear are often symptoms of systemic conditions. Aligning cosmetics with biology ensures that porcelain crowns or fillings stabilize bite force vector symmetries, preserving cellular tissues.
              </p>
            </section>

            {/* SECTION 3: NATURAL-LOOKING OUTCOMES */}
            <section className="space-y-4" id="section-natural-aesthetics">
              <div className="flex items-center gap-1.5 text-brand-bronze">
                <Sparkles className="w-5 h-5" />
                <h3 className="font-display font-semibold text-lg text-brand-charcoal">3. Natural-Looking Outcomes</h3>
              </div>
              <p className="text-slate-600 text-sm md:text-base">
                Ideal dental restorations respect the anatomical markers already present in the patient's biology. Rather than crafting generic, bleached, or overly symmetrical alignments, she studies facial bone landmarks, the interpupillary line, lip mobility, and phonetic speech requirements to design unique dentin structures.
              </p>
            </section>

            {/* SECTION 4: CLEAR COMMUNICATION */}
            <section className="space-y-4" id="section-clear-communication">
              <div className="flex items-center gap-1.5 text-brand-bronze">
                <MessageSquareCode className="w-5 h-5" />
                <h3 className="font-display font-semibold text-lg text-brand-charcoal">4. Clear Communication</h3>
              </div>
              <p className="text-slate-600 text-sm md:text-base">
                Patients deserve absolute transparency. Dr. Massaband translates complex dental diagnoses, material choices, and timeline risks into plain, visual language. Clarifying options beforehand ensures patients have the agency to map treatments confidently.
              </p>
            </section>

            {/* SECTION 5: PATIENT COMFORT AND DENTAL ANXIETY */}
            <section className="space-y-4" id="section-anxiety">
              <div className="flex items-center gap-1.5 text-brand-bronze">
                <Accessibility className="w-5 h-5" />
                <h3 className="font-display font-semibold text-lg text-brand-charcoal">5. Patient Comfort and Dental Phobia Management</h3>
              </div>
              <p className="text-slate-600 text-sm md:text-base">
                Dental phobia is a common barrier to regular preventive care. Dr. Massaband uses slow mechanical pacing, comforting distraction techniques, and open communication to help anxious patients feel safe and in control.
              </p>

              {/* Patient Comfort YouTube Short Embed */}
              <div className="border border-brand-stone rounded-2xl overflow-hidden bg-[#0A0A0A] aspect-9/16 max-w-xs mx-auto md:mx-0 shadow-md relative group my-6 overflow-hidden flex items-center justify-center p-2" id="shorts-video-player">
                <iframe 
                  className="w-full h-full rounded-xl"
                  src="https://www.youtube.com/embed/MLlNGQlBmVI" 
                  title="Dr. Liyan Massaband Shorts Video - Patient Dental Anxiety Mitigation"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                />
              </div>
            </section>

            {/* SECTION 6: TECHNOLOGY WITH CLINICAL JUDGEMENT */}
            <section className="space-y-4" id="section-technology">
              <div className="flex items-center gap-1.5 text-brand-bronze">
                <Cpu className="w-5 h-5" />
                <h3 className="font-display font-semibold text-lg text-brand-charcoal">6. Technology with Clinical Judgement</h3>
              </div>
              <p className="text-slate-600 text-sm md:text-base">
                Contemporary innovations like intraoral scanners, CAD/CAM mills, and AI smile models are valuable diagnostic aids. However, they are not replacements for clinical judgement. As analyzed in her recent Instagram commentary on AI Smile models, algorithms lack the biological understanding key to long-term dental longevity. Tech serves to visualize, but clinical hands-on experience secures stable alignments.
              </p>
              
              <div className="bg-brand-stone/10 p-5 rounded-xl border border-brand-stone text-xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-brand-bronze uppercase tracking-wider font-bold">Featured Social Analysis</span>
                  <a href="https://www.instagram.com/reel/DSAwfPPgdmF/" target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-charcoal hover:text-brand-bronze font-mono flex items-center gap-1">
                    Watch Reel <ChevronRight className="w-3 h-3" />
                  </a>
                </div>
                <p className="text-slate-500 font-sans leading-relaxed">
                  "In our biometric analyses, AI systems simulate aesthetic shapes quickly, but cannot calculate crown material density, micro-endodontic tissue margins, or root canal longevity. Technology must work under biological guidelines."
                </p>
              </div>
            </section>

            {/* SECTION 7: EDUCATION BEYOND THE PRACTICE */}
            <section className="space-y-4" id="section-education-outreach">
              <div className="flex items-center gap-1.5 text-brand-bronze">
                <Video className="w-5 h-5" />
                <h3 className="font-display font-semibold text-lg text-brand-charcoal">7. Education Beyond the Practice</h3>
              </div>
              <p className="text-slate-600 text-sm md:text-base">
                Oral hygiene education should not be confined to clinical walls. Dr. Massaband produces open-access educational videos to address common dental myths, preventative techniques, and treatment features, helping viewers take ownership of their health at home.
              </p>
            </section>

            {/* SECTION 8: ETHICAL EXPECTATIONS & LEGAL DIAGNOSTIC DISCLAIMER */}
            <section className="border border-brand-stone p-6 rounded-2xl bg-brand-stone/10 space-y-4" id="section-ethical-disclaimer">
              <div className="flex items-center gap-2 text-brand-bronze">
                <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0" />
                <h4 className="font-mono text-[11px] uppercase tracking-wider font-bold text-amber-800">Ethical Framework & Legal Diagnostic Disclaimer</h4>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed font-sans">
                The clinical explanations displayed on this website represent Dr. Liyan Massaband's general professional perspectives and do not constitute personal diagnostic assessments, treatment plans, or commercial promises. Biological outcomes vary. Definitive dental planning requires in-person diagnostic imaging and periodontal analysis conducted by licensed clinicians inside sterilizable physical practice structures.
              </p>
            </section>

          </div>

          {/* RIGHT COLUMN: Accents Panel "Professional Principles" accordion */}
          <div className="lg:col-span-4 space-y-6" id="philosophy-accordion-column">
            
            <div className="bg-brand-white border border-brand-stone rounded-2xl p-5 space-y-5 shadow-xs" id="principles-accent-card">
              <div className="border-b border-brand-stone pb-3">
                <span className="text-[10px] font-mono text-brand-bronze uppercase tracking-widest block font-bold">Clinical Metrics</span>
                <h4 className="font-display font-semibold text-brand-charcoal text-base">Professional Principles</h4>
              </div>

              {/* Items List */}
              <div className="space-y-4 text-xs font-sans">
                {/* 1 */}
                <div className="space-y-1">
                  <p className="font-semibold text-brand-charcoal flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#10b981]" /> Listen First
                  </p>
                  <p className="text-slate-500 pl-5 leading-normal">
                    Establishing dialogue before suggesting dental interventions.
                  </p>
                </div>

                {/* 2 */}
                <div className="space-y-1 border-t border-brand-stone/30 pt-3">
                  <p className="font-semibold text-brand-charcoal flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#10b981]" /> Explain Clearly
                  </p>
                  <p className="text-slate-500 pl-5 leading-normal">
                    Using simple terminology to ensure patient ownership over materials and structures.
                  </p>
                </div>

                {/* 3 */}
                <div className="space-y-1 border-t border-brand-stone/30 pt-3">
                  <p className="font-semibold text-brand-charcoal flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#10b981]" /> Respect Individuality
                  </p>
                  <p className="text-slate-500 pl-5 leading-normal">
                    Evaluating unique facial symmetries rather than uniform templates.
                  </p>
                </div>

                {/* 4 */}
                <div className="space-y-1 border-t border-brand-stone/30 pt-3">
                  <p className="font-semibold text-brand-charcoal flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#10b981]" /> Consider Systemic Health
                  </p>
                  <p className="text-slate-500 pl-5 leading-normal">
                    Connecting oral dynamics with cardiac homeostasis and overall wellness patterns.
                  </p>
                </div>

                {/* 5 */}
                <div className="space-y-1 border-t border-brand-stone/30 pt-3">
                  <p className="font-semibold text-brand-charcoal flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#10b981]" /> Use Tech Wisely
                  </p>
                  <p className="text-slate-500 pl-5 leading-normal">
                    Relying on diagnostics scanners as supportive aids, never replacing clinical training.
                  </p>
                </div>

                {/* 6 */}
                <div className="space-y-1 border-t border-brand-stone/30 pt-3">
                  <p className="font-semibold text-brand-charcoal flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#10b981]" /> Ethical Expectations
                  </p>
                  <p className="text-slate-500 pl-5 leading-normal">
                    Avoiding commercial sales, discounts, or guarantees in favor of bio-conservative treatments.
                  </p>
                </div>
              </div>

              {/* Bottom badge info */}
              <div className="bg-brand-stone/10 p-3 rounded-lg border border-brand-stone/30 text-[10px] font-mono text-slate-500 leading-normal">
                <span className="block font-bold uppercase text-[9px] text-slate-400">Governance alignment</span>
                All clinical philosophies align with the ADA Code of Ethics.
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Recommended Related Navigation Links */}
      <section className="bg-brand-charcoal text-slate-300 py-16 border-t border-brand-stone" id="authority-hub-navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-[10px] font-mono text-brand-bronze uppercase tracking-widest block">Authority Index Ecosystem</span>
            <h3 className="font-display font-medium text-2xl text-brand-white">Explore Dr. Liyan Massaband's Profile</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4" id="related-pages-grid">
            <Link to="/dr-liyan-massaband/" className="group p-4 bg-[#151515] hover:bg-[#1a1a1a] border border-brand-stone/20 rounded-xl text-center flex flex-col justify-between h-28 transition-all hover:border-brand-bronze">
              <span className="text-slate-400 text-[10px] font-mono uppercase tracking-wider block">Official Directory</span>
              <span className="text-brand-white font-display text-[13px] font-semibold block mt-2 group-hover:text-brand-bronze transition-colors">Official Profile</span>
              <span className="text-brand-bronze text-[10px] font-mono mt-auto flex items-center justify-center gap-0.5">
                Explore <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>

            <Link to="/her-story/" className="group p-4 bg-[#151515] hover:bg-[#1a1a1a] border border-brand-stone/20 rounded-xl text-center flex flex-col justify-between h-28 transition-all hover:border-brand-bronze">
              <span className="text-slate-400 text-[10px] font-mono uppercase tracking-wider block">Biography</span>
              <span className="text-brand-white font-display text-[13px] font-semibold block mt-2 group-hover:text-brand-bronze transition-colors">Her Story</span>
              <span className="text-brand-bronze text-[10px] font-mono mt-auto flex items-center justify-center gap-0.5">
                Explore <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>

            <Link to="/education-and-credentials/" className="group p-4 bg-[#151515] hover:bg-[#1a1a1a] border border-brand-stone/20 rounded-xl text-center flex flex-col justify-between h-28 transition-all hover:border-brand-bronze">
              <span className="text-slate-400 text-[10px] font-mono uppercase tracking-wider block">Academia</span>
              <span className="text-brand-white font-display text-[13px] font-semibold block mt-2 group-hover:text-brand-bronze transition-colors">Education & Certs</span>
              <span className="text-brand-bronze text-[10px] font-mono mt-auto flex items-center justify-center gap-0.5">
                Explore <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>

            <Link to="/professional-journey/" className="group p-4 bg-[#151515] hover:bg-[#1a1a1a] border border-brand-stone/20 rounded-xl text-center flex flex-col justify-between h-28 transition-all hover:border-brand-bronze">
              <span className="text-slate-400 text-[10px] font-mono uppercase tracking-wider block">Timeline</span>
              <span className="text-brand-white font-display text-[13px] font-semibold block mt-2 group-hover:text-brand-bronze transition-colors">Journey</span>
              <span className="text-brand-bronze text-[10px] font-mono mt-auto flex items-center justify-center gap-0.5">
                Explore <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>

            <Link to="/clinical-affiliations/" className="group p-4 bg-[#151515] hover:bg-[#1a1a1a] border border-brand-stone/20 rounded-xl text-center flex flex-col justify-between h-28 transition-all hover:border-brand-bronze">
              <span className="text-slate-400 text-[10px] font-mono uppercase tracking-wider block">Clinics</span>
              <span className="text-brand-white font-display text-[13px] font-semibold block mt-2 group-hover:text-brand-bronze transition-colors">Affiliations</span>
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
