import React, { useState } from 'react';
import { 
  ShieldCheck, 
  ChevronRight, 
  ArrowRight, 
  CheckCircle2, 
  HelpCircle, 
  AlertTriangle, 
  Activity, 
  FileText, 
  Layers, 
  Cpu, 
  Heart,
  DollarSign
} from 'lucide-react';
import { Link } from '../AppRouter.tsx';
import { BRAND_CONFIG } from '../../data.ts';

export const DentalImplantsView: React.FC = () => {
  const [activeDiagramPart, setActiveDiagramPart] = useState<'fixture' | 'abutment' | 'crown'>('fixture');
  const [selectedFaq, setSelectedFaq] = useState<number | null>(null);

  const diagramParts = {
    fixture: {
      title: "1. Implant Fixture (The Root)",
      description: "A small screw-like post made of medical-grade titanium or zirconia. It is surgically inserted into the jawbone, where it acts as a bio-compatible replacement for the missing tooth root.",
      details: "Through a natural chemical-biological process called osseointegration, bone cells fuse directly to the titanium surface over 3 to 6 months, creating a rock-solid, permanent anchor for the teeth."
    },
    abutment: {
      title: "2. The Abutment (The Connector)",
      description: "A customized connector collar that screws into the healed implant fixture. It emerges slightly above the gum line to provide a stable seat for the final tooth restoration.",
      details: "Abutments are customized specifically to match the unique margin of your natural gum line, preventing bacterial infiltration and ensuring an elegant, natural-looking tooth exit profile."
    },
    crown: {
      title: "3. Prosthetic Crown or Bridge (The Smile)",
      description: "The highly customized hand-crafted porcelain, zirconia, or PMMA replacement tooth that is secured to the abutment, restoring full chewing force and natural aesthetics.",
      details: "Each ceramic crown is engineered using multi-layered translucency to refract light exactly like natural enamel. Our materials are completely metal-free, premium, and biocompatible."
    }
  };

  const faqs = [
    {
      q: "Am I suitable for dental implants?",
      a: "Most healthy adults are excellent candidates for implants. Suitability depends on jawbone density, active gum health, smoking status, and systemic conditions like controlled diabetes. During your consultation, Dr. Massaband uses 3D CBCT scans to verify your bone volume before making any clinical recommendations."
    },
    {
      q: "How long does dental implant treatment take?",
      a: "The entire process typically spans 3 to 6 months. This includes the initial assessment, digital placement, a healing phase (osseointegration) of 3-4 months, and final restoration fitting. If bone grafting or extractions are required, additional healing time is integrated to guarantee long-term stability."
    },
    {
      q: "Is the implant procedure uncomfortable?",
      a: "Most patients are surprised by how comfortable the procedure is. It is performed under precise local anesthesia, making the placement virtually painless. Post-treatment discomfort is typically mild and easily managed with standard over-the-counter pain relievers for 2 to 3 days."
    },
    {
      q: "How long do dental implants last?",
      a: "With proper clinical placement and excellent home maintenance, the titanium implant fixture can last a lifetime. The ceramic crown on top may experience normal wear and tear over 15 to 25 years and can be easily restored or replaced if necessary."
    }
  ];

  return (
    <div className="bg-brand-white" id="dental-implants-view-root">
      
      {/* 1. HERO SECTION (Editorial personal brand overlay) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-stone/20 via-brand-white to-brand-white py-20 lg:py-28 border-b border-brand-stone/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono font-bold text-brand-bronze uppercase tracking-widest border border-brand-bronze/30 bg-brand-bronze/5 px-3 py-1 rounded-full inline-block">
                Advanced Oral Restorations
              </span>
              <h1 className="font-display font-medium text-brand-charcoal text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1]">
                Dental Implants in Beverly Hills & Burbank
              </h1>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-xl font-sans">
                Restore your natural chewing force, speech clarity, and structural smile confidence. Under the guidance of {BRAND_CONFIG.personName}, each dental implant case receives personalized biological planning, ultra-precise 3D digital guides, and medically elite materials.
              </p>
              
              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  to="/contact/"
                  className="px-6 py-3.5 bg-brand-bronze hover:bg-brand-bronze-light text-white font-display text-sm font-semibold tracking-wide rounded-xl transition-all duration-200 shadow-md"
                >
                  Request an Implant Consultation
                </Link>
                <Link
                  to="/all-on-x/"
                  className="px-6 py-3.5 border border-brand-stone hover:border-brand-bronze text-brand-charcoal hover:text-brand-bronze font-display text-sm font-semibold tracking-wide rounded-xl transition-all duration-200 bg-white"
                >
                  Explore All-on-X Treatment
                </Link>
              </div>

              {/* Verified Badge */}
              <div className="pt-6 border-t border-brand-stone/60 flex items-center gap-3.5">
                <div className="bg-emerald-50 text-emerald-700 p-2 rounded-lg">
                  <ShieldCheck className="w-5 h-5 shrink-0" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-brand-charcoal">
                    1,000+ Dental Implants Placed
                  </p>
                  <p className="text-[11px] text-slate-500 font-sans">
                    Clinical experience backed by certified public records, state licensure, and advanced multi-disciplinary training.
                  </p>
                </div>
              </div>
            </div>

            {/* Hero Right Visual Column */}
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-brand-stone/60 relative">
                <img 
                  src="https://images.unsplash.com/photo-1579684389782-64d84b5e905d?auto=format&fit=crop&q=80&w=800"
                  alt="Dr. Liyan Massaband Dental Implant Planning Session" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white p-4 bg-brand-charcoal/40 backdrop-blur-sm rounded-xl border border-white/10">
                  <p className="text-xs font-mono tracking-wider text-emerald-400 font-bold uppercase mb-1">
                    • CLINICAL BIOLOGY FIRST
                  </p>
                  <p className="text-xs text-slate-100 font-sans leading-relaxed">
                    \"An implant is not simply a tooth replacement. It is a biological integration with the living jaw structure. Every design parameter must coordinate with your unique bite dynamics.\"
                  </p>
                  <p className="text-[10px] font-bold text-brand-bronze mt-2 block tracking-wider uppercase">
                    — {BRAND_CONFIG.personName}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. THE DIAGRAM (Interactive Implant Anatomy Explorer) */}
      <section className="py-16 md:py-24 bg-white border-b border-brand-stone/40" id="implant-anatomy-explorer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-mono font-bold text-brand-bronze uppercase tracking-widest block">
              Patient Education & Biomechanics
            </span>
            <h2 className="font-display font-medium text-brand-charcoal text-3xl md:text-4xl tracking-tight">
              Anatomy of a Modern Dental Implant
            </h2>
            <p className="text-xs md:text-sm text-slate-500 leading-relaxed max-w-2xl mx-auto font-sans">
              A dental implant is composed of three precise components working in perfect synergy. Click each section to explore its anatomical function and clinical role.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Diagram Left */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center bg-brand-stone/10 rounded-2xl p-8 border border-brand-stone/40 min-h-[420px]">
              
              <div className="relative w-full max-w-[280px] h-[340px] flex flex-col justify-between py-4 select-none">
                {/* Crown Representation */}
                <button 
                  onClick={() => setActiveDiagramPart('crown')}
                  className={`w-full group cursor-pointer transition-all duration-300 ${activeDiagramPart === 'crown' ? 'scale-105' : 'opacity-70 hover:opacity-100'}`}
                >
                  <div className="h-20 bg-emerald-100 border-2 border-emerald-500 rounded-xl flex items-center justify-center font-display font-bold text-emerald-900 shadow-md">
                    Crown / Bridge
                  </div>
                  <div className="w-full text-center text-[10px] font-mono mt-1 text-slate-500">
                    Prosthetic Level
                  </div>
                </button>

                {/* Abutment Connector Representation */}
                <button 
                  onClick={() => setActiveDiagramPart('abutment')}
                  className={`w-3/4 mx-auto group cursor-pointer transition-all duration-300 ${activeDiagramPart === 'abutment' ? 'scale-105' : 'opacity-70 hover:opacity-100'}`}
                >
                  <div className="h-14 bg-amber-100 border-2 border-amber-500 rounded-lg flex items-center justify-center font-display font-bold text-amber-900 shadow-sm">
                    Custom Abutment
                  </div>
                  <div className="w-full text-center text-[10px] font-mono mt-1 text-slate-500">
                    Trans-gingival Connector
                  </div>
                </button>

                {/* Fixture Root Representation */}
                <button 
                  onClick={() => setActiveDiagramPart('fixture')}
                  className={`w-2/3 mx-auto group cursor-pointer transition-all duration-300 ${activeDiagramPart === 'fixture' ? 'scale-105' : 'opacity-70 hover:opacity-100'}`}
                >
                  <div className="h-28 bg-blue-100 border-2 border-blue-500 rounded-lg flex flex-col items-center justify-center font-display font-bold text-blue-900 shadow-md relative overflow-hidden">
                    {/* Thread stripes */}
                    <div className="absolute inset-y-0 w-full flex flex-col justify-around opacity-20 pointer-events-none">
                      <div className="h-0.5 bg-blue-900" />
                      <div className="h-0.5 bg-blue-900" />
                      <div className="h-0.5 bg-blue-900" />
                      <div className="h-0.5 bg-blue-900" />
                    </div>
                    <span>Titanium Post</span>
                  </div>
                  <div className="w-full text-center text-[10px] font-mono mt-1 text-slate-500">
                    Osseointegrated Fixture
                  </div>
                </button>
              </div>

            </div>

            {/* Content Explainer Right */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Tab Toggles */}
              <div className="flex flex-wrap gap-2.5 border-b border-brand-stone/30 pb-4">
                <button
                  onClick={() => setActiveDiagramPart('fixture')}
                  className={`px-4 py-2 rounded-lg font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                    activeDiagramPart === 'fixture' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-brand-stone/10 text-slate-600 hover:bg-brand-stone/20'
                  }`}
                >
                  Implant Post
                </button>
                <button
                  onClick={() => setActiveDiagramPart('abutment')}
                  className={`px-4 py-2 rounded-lg font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                    activeDiagramPart === 'abutment' 
                      ? 'bg-amber-600 text-white' 
                      : 'bg-brand-stone/10 text-slate-600 hover:bg-brand-stone/20'
                  }`}
                >
                  Abutment
                </button>
                <button
                  onClick={() => setActiveDiagramPart('crown')}
                  className={`px-4 py-2 rounded-lg font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                    activeDiagramPart === 'crown' 
                      ? 'bg-emerald-600 text-white' 
                      : 'bg-brand-stone/10 text-slate-600 hover:bg-brand-stone/20'
                  }`}
                >
                  Crown / Smile
                </button>
              </div>

              {/* Explainer card */}
              <div className="p-6 bg-brand-white border border-brand-stone/60 rounded-2xl shadow-xs space-y-4 min-h-[220px] flex flex-col justify-center">
                <h3 className="font-display font-bold text-xl text-brand-charcoal">
                  {diagramParts[activeDiagramPart].title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-sans">
                  {diagramParts[activeDiagramPart].description}
                </p>
                <p className="text-xs text-slate-500 bg-brand-stone/5 p-3 rounded-lg border-l-2 border-brand-bronze leading-relaxed font-sans">
                  {diagramParts[activeDiagramPart].details}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="border border-brand-stone/40 p-4 rounded-xl flex gap-3">
                  <Cpu className="w-5 h-5 text-brand-bronze shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs text-brand-charcoal font-semibold block">Zirconia & Titanium Options</strong>
                    <p className="text-[11px] text-slate-500 leading-normal font-sans">
                      Dr. Massaband utilizes top-tier Swiss-engineered implant systems. Choose from standard medical titanium or high-esthetic metal-free ceramic zirconia.
                    </p>
                  </div>
                </div>
                <div className="border border-brand-stone/40 p-4 rounded-xl flex gap-3">
                  <Layers className="w-5 h-5 text-brand-bronze shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs text-brand-charcoal font-semibold block">Bone-Conserving Design</strong>
                    <p className="text-[11px] text-slate-500 leading-normal font-sans">
                      By replacing the natural root, the implant post stimulates local bone tissue, preventing the bone resorption and facial collapse associated with tooth loss.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 3. IMPLANT TREATMENT OPTIONS (Single, Multiple, supported, etc.) */}
      <section className="py-16 md:py-24 bg-brand-ivory/20 border-b border-brand-stone/40" id="implant-treatment-options">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-mono font-bold text-brand-bronze uppercase tracking-widest block">
              Tailored Implant Strategies
            </span>
            <h2 className="font-display font-medium text-brand-charcoal text-3xl md:text-4xl tracking-tight">
              Personalized Treatment Modalities
            </h2>
            <p className="text-xs md:text-sm text-slate-500 leading-relaxed max-w-2xl mx-auto font-sans">
              Every missing tooth, failing root, or loose denture represents a unique biological challenge. Dr. Massaband customizes your treatment protocol using advanced diagnostic imaging.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Treatment Card 1 */}
            <div className="bg-white border border-brand-stone/60 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-brand-stone/10 flex items-center justify-center font-display font-bold text-brand-bronze">
                  01
                </div>
                <h3 className="font-display font-bold text-lg text-brand-charcoal">
                  Single Dental Implants
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-sans">
                  Replaces one missing tooth from root to crown without modifying or damaging adjacent healthy teeth. This is the gold standard alternative to traditional dental bridges.
                </p>
              </div>
              <div className="pt-6 border-t border-brand-stone/30 mt-6 flex justify-between items-center">
                <span className="text-[10px] font-mono text-brand-bronze font-bold uppercase tracking-wider">Independent anchor</span>
                <Link to="/contact/" className="text-xs font-semibold text-brand-bronze hover:text-brand-bronze-light flex items-center gap-1">
                  <span>Explore</span> <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Treatment Card 2 */}
            <div className="bg-white border border-brand-stone/60 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-brand-stone/10 flex items-center justify-center font-display font-bold text-brand-bronze">
                  02
                </div>
                <h3 className="font-display font-bold text-lg text-brand-charcoal">
                  Multiple Dental Implants
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-sans">
                  Ideal for resolving several missing teeth in sequence. Multiple posts can support customized multi-unit implant bridges, eliminating the need for partial dentures.
                </p>
              </div>
              <div className="pt-6 border-t border-brand-stone/30 mt-6 flex justify-between items-center">
                <span className="text-[10px] font-mono text-brand-bronze font-bold uppercase tracking-wider">Implant-supported bridges</span>
                <Link to="/contact/" className="text-xs font-semibold text-brand-bronze hover:text-brand-bronze-light flex items-center gap-1">
                  <span>Explore</span> <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Treatment Card 3 */}
            <div className="bg-white border border-brand-stone/60 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-brand-stone/10 flex items-center justify-center font-display font-bold text-brand-bronze">
                  03
                </div>
                <h3 className="font-display font-bold text-lg text-brand-charcoal">
                  All-on-X Dental Implants
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-sans">
                  A revolutionary full-arch solution. A strategically planned number of implants (typically 4 to 6) support a full, fixed, cosmetic arch of replacement teeth.
                </p>
              </div>
              <div className="pt-6 border-t border-brand-stone/30 mt-6 flex justify-between items-center">
                <span className="text-[10px] font-mono text-brand-bronze font-bold uppercase tracking-wider">Full-mouth fixed teeth</span>
                <Link to="/all-on-x/" className="text-xs font-semibold text-brand-bronze hover:text-brand-bronze-light flex items-center gap-1">
                  <span>Explore All-on-X</span> <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Treatment Card 4 */}
            <div className="bg-white border border-brand-stone/60 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-brand-stone/10 flex items-center justify-center font-display font-bold text-brand-bronze">
                  04
                </div>
                <h3 className="font-display font-bold text-lg text-brand-charcoal">
                  Implant-Supported Dentures
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-sans">
                  Combines the relative affordability of a removable denture with the absolute stability of dental implants. Posts physically snap-on to retain the denture firmly.
                </p>
              </div>
              <div className="pt-6 border-t border-brand-stone/30 mt-6 flex justify-between items-center">
                <span className="text-[10px] font-mono text-brand-bronze font-bold uppercase tracking-wider">No slips, no adhesives</span>
                <Link to="/contact/" className="text-xs font-semibold text-brand-bronze hover:text-brand-bronze-light flex items-center gap-1">
                  <span>Explore</span> <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Treatment Card 5 */}
            <div className="bg-white border border-brand-stone/60 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-brand-stone/10 flex items-center justify-center font-display font-bold text-brand-bronze">
                  05
                </div>
                <h3 className="font-display font-bold text-lg text-brand-charcoal">
                  Bone Grafting & Sinus Lifts
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-sans">
                  Essential for patients with localized bone deficiencies. Dr. Massaband executes guided bone regeneration (GBR) to rebuild healthy foundation tissue before placement.
                </p>
              </div>
              <div className="pt-6 border-t border-brand-stone/30 mt-6 flex justify-between items-center">
                <span className="text-[10px] font-mono text-brand-bronze font-bold uppercase tracking-wider">Guided Regeneration</span>
                <Link to="/contact/" className="text-xs font-semibold text-brand-bronze hover:text-brand-bronze-light flex items-center gap-1">
                  <span>Explore</span> <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Treatment Card 6 */}
            <div className="bg-white border border-brand-stone/60 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-brand-stone/10 flex items-center justify-center font-display font-bold text-brand-bronze">
                  06
                </div>
                <h3 className="font-display font-bold text-lg text-brand-charcoal">
                  Implant Revision & Assessment
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-sans">
                  Specialized evaluation of older implant work, loose crowns, pain, or complications. Dr. Massaband provides clinical diagnostic clarity and corrective treatment routes.
                </p>
              </div>
              <div className="pt-6 border-t border-brand-stone/30 mt-6 flex justify-between items-center">
                <span className="text-[10px] font-mono text-brand-bronze font-bold uppercase tracking-wider">Corrective evaluation</span>
                <Link to="/contact/" className="text-xs font-semibold text-brand-bronze hover:text-brand-bronze-light flex items-center gap-1">
                  <span>Request Assessment</span> <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. WHO IS A CANDIDATE / SUITABILITY GRID */}
      <section className="py-16 md:py-24 bg-white border-b border-brand-stone/40" id="implant-suitability">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono font-bold text-brand-bronze uppercase tracking-widest block">
                Clinical Eligibility
              </span>
              <h2 className="font-display font-medium text-brand-charcoal text-3xl md:text-4xl tracking-tight leading-snug">
                Am I Suitable for Dental Implants?
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed font-sans">
                While modern implantology is highly successful, eligibility is determined on an individual biological basis. During your consultation, we perform a complete oral and general health audit to ensure implant placement is medically safe and predictable.
              </p>
              
              <div className="space-y-3 pt-2">
                <div className="flex gap-3 text-sm font-sans text-slate-600">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-brand-charcoal">Sufficient Bone Volume:</strong>
                    <p className="text-xs text-slate-500 leading-normal">Healthy bone density is required to secure the titanium post. If volume is missing, bone grafting is planned.</p>
                  </div>
                </div>

                <div className="flex gap-3 text-sm font-sans text-slate-600">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-brand-charcoal">Healthy Gum Tissue:</strong>
                    <p className="text-xs text-slate-500 leading-normal">Active periodontal disease must be treated and resolved before any surgical implant placements.</p>
                  </div>
                </div>

                <div className="flex gap-3 text-sm font-sans text-slate-600">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-brand-charcoal">Systemic Health Management:</strong>
                    <p className="text-xs text-slate-500 leading-normal">Conditions like diabetes must be well-controlled. Bleeding disorders or immune system medications will be audited.</p>
                  </div>
                </div>

                <div className="flex gap-3 text-sm font-sans text-slate-600">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-brand-charcoal">Non-Smoker or Commitment to Pause:</strong>
                    <p className="text-xs text-slate-500 leading-normal">Smoking reduces local vascular blood flow and slows bone healing. We guide you on proper recovery steps.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-brand-stone/10 border border-brand-stone/40 p-6 sm:p-8 rounded-2xl space-y-6">
              <div className="flex items-start gap-3.5">
                <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display font-bold text-brand-charcoal text-base">
                    Understanding Surgical Limitations & Risks
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-sans mt-1">
                    Like any clinical surgical procedure, dental implant therapy carries potential risks and healing limitations that every patient should honestly understand before proceeding:
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-xs font-sans text-slate-600">
                <div className="p-3.5 bg-white rounded-xl border border-brand-stone/40">
                  <span className="font-mono font-bold text-[10px] text-brand-bronze block uppercase">01. Bone Integration Healing (3-6 Months)</span>
                  <p className="text-[11px] text-slate-500 mt-1 leading-normal">
                    Implants require a strict non-loaded healing window. Attempting to place final solid teeth too quickly can cause micro-movement, disrupting the bone cells and causing implant failure.
                  </p>
                </div>

                <div className="p-3.5 bg-white rounded-xl border border-brand-stone/40">
                  <span className="font-mono font-bold text-[10px] text-brand-bronze block uppercase">02. Peri-Implantitis Risk (Maintenance Required)</span>
                  <p className="text-[11px] text-slate-500 mt-1 leading-normal">
                    Dental implants cannot get decay, but they can still get gum infections (peri-implantitis) if plaque accumulates. Long-term compliance with professional cleanings is absolutely mandatory.
                  </p>
                </div>

                <div className="p-3.5 bg-white rounded-xl border border-brand-stone/40">
                  <span className="font-mono font-bold text-[10px] text-brand-bronze block uppercase">03. Biological Anatomy Variations</span>
                  <p className="text-[11px] text-slate-500 mt-1 leading-normal">
                    In rare cases, systemic immune factors or localized healing variations may prevent proper osseointegration. If a fixture does not integrate, it is removed, allowed to heal, and can often be replaced.
                  </p>
                </div>
              </div>

              <p className="text-[11px] text-slate-400 italic text-center font-sans">
                * Experience does not replace individual clinical assessment, and outcomes vary between patients.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 5. DENTAL IMPLANT COST FACTORS (Responsible, transparent explainer) */}
      <section className="py-16 md:py-24 bg-brand-stone/5 border-b border-brand-stone/40" id="implant-cost-factors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-mono font-bold text-brand-bronze uppercase tracking-widest block">
              Financial Transparency
            </span>
            <h2 className="font-display font-medium text-brand-charcoal text-3xl md:text-4xl tracking-tight">
              Understanding Dental Implant Costs
            </h2>
            <p className="text-xs md:text-sm text-slate-500 leading-relaxed max-w-2xl mx-auto font-sans">
              We do not publish misleading, fixed-rate \"one size fits all\" price tags. Your implant investment is a direct reflection of clinical complexity, material choices, and surgical health needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Cost Explainer Left */}
            <div className="lg:col-span-7 bg-white border border-brand-stone/60 p-6 sm:p-8 rounded-2xl flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <h3 className="font-display font-bold text-lg text-brand-charcoal">
                  Key Variables Determining Your Treatment Investment
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-sans">
                  Dr. Massaband believes in detailed financial breakdowns. During your diagnostic consultation, a treatment coordinator provides a transparent fee proposal covering:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
                <div className="space-y-1">
                  <strong className="text-brand-charcoal block">1. Diagnostic Scans & Guides</strong>
                  <p className="text-slate-500 text-[11px] leading-normal">Precision CBCT 3D digital imaging, diagnostic virtual setups, and surgical placement guides.</p>
                </div>
                <div className="space-y-1">
                  <strong className="text-brand-charcoal block">2. Surgical Extractions</strong>
                  <p className="text-slate-500 text-[11px] leading-normal">Safely removing damaged or failing natural teeth with root preservation protocols.</p>
                </div>
                <div className="space-y-1">
                  <strong className="text-brand-charcoal block">3. Guided Bone Grafting</strong>
                  <p className="text-slate-500 text-[11px] leading-normal">Rebuilding local structural bone volume using premium bio-compatible membranes.</p>
                </div>
                <div className="space-y-1">
                  <strong className="text-brand-charcoal block">4. Material Grade Selection</strong>
                  <p className="text-slate-500 text-[11px] leading-normal">Premium multi-layered zirconia, monolithic ceramics, or titanium implant fixture selections.</p>
                </div>
                <div className="space-y-1">
                  <strong className="text-brand-charcoal block">5. Temporary Restorations</strong>
                  <p className="text-slate-500 text-[11px] leading-normal">Cosmetic temporary teeth are custom-crafted to protect the tissue during the 3-6 month healing window.</p>
                </div>
                <div className="space-y-1">
                  <strong className="text-brand-charcoal block">6. Anesthesia & Sedation</strong>
                  <p className="text-slate-500 text-[11px] leading-normal">Local customized block anesthesia or coordinated deep twilight sedation for patient comfort.</p>
                </div>
              </div>

              <div className="pt-4 border-t border-brand-stone/40 flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-brand-bronze shrink-0" />
                <span className="text-[10px] font-mono text-slate-400">INSURANCE COORDINATION: We assist in submitting pre-determinations to maximize your dental PPO benefits.</span>
              </div>
            </div>

            {/* Quick Consultation CTA Card Right */}
            <div className="lg:col-span-5 bg-brand-charcoal text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-brand-charcoal">
              <div className="space-y-4">
                <span className="text-[9px] font-mono font-bold text-brand-bronze uppercase tracking-widest block">
                  Next Step To A New Smile
                </span>
                <h3 className="font-display font-medium text-2xl tracking-tight text-white leading-snug">
                  Schedule Your Digital Implant Assessment
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  The only way to receive an accurate, clinical, and honest cost estimate is through a face-to-face assessment. Dr. Massaband will examine your bone density and design a treatment plan customized for your budget and goals.
                </p>
                
                <ul className="space-y-2 text-xs font-sans text-slate-200 pt-2">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-bronze shrink-0" />
                    <span>Detailed 3D Joint and Bone Check</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-bronze shrink-0" />
                    <span>Discussion of Swiss or German implants</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-bronze shrink-0" />
                    <span>Transparent fee breakdown & financing</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8 space-y-3">
                <Link
                  to="/contact/"
                  className="w-full text-center block px-5 py-3.5 bg-brand-bronze hover:bg-brand-bronze-light text-white font-display text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-200"
                >
                  Book Assessment
                </Link>
                <p className="text-[10px] text-slate-400 text-center font-sans">
                  No pressure. We outline options, risks, and alternatives.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. FAQs */}
      <section className="py-16 md:py-24 bg-white" id="implant-faqs">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <div className="text-center space-y-4 mb-16">
            <span className="text-xs font-mono font-bold text-brand-bronze uppercase tracking-widest block">
              Patient Knowledge Hub
            </span>
            <h2 className="font-display font-medium text-brand-charcoal text-3xl tracking-tight">
              Implant Consultation FAQs
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="border border-brand-stone rounded-xl overflow-hidden transition-all duration-200 bg-brand-white/20 hover:bg-brand-white/40"
              >
                <button
                  onClick={() => setSelectedFaq(selectedFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left cursor-pointer select-none"
                >
                  <span className="font-display font-bold text-brand-charcoal text-sm pr-4">
                    {faq.q}
                  </span>
                  <HelpCircle className={`w-5 h-5 text-brand-bronze shrink-0 transition-transform duration-200 ${selectedFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {selectedFaq === idx && (
                  <div className="px-5 pb-5 pt-1 text-xs text-slate-600 leading-relaxed font-sans border-t border-brand-stone/30">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};
