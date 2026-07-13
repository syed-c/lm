import React, { useState } from 'react';
import { useRouter, Link } from '../AppRouter.tsx';
import { 
  Award, 
  MapPin, 
  Star, 
  GraduationCap, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowUpRight, 
  Copy, 
  Check, 
  Heart, 
  BookOpen, 
  Clock, 
  Calendar, 
  MessageSquare, 
  ChevronRight,
  Info
} from 'lucide-react';
import { BRAND_CONFIG } from '../../data.ts';

export const HomeView: React.FC = () => {
  const { path } = useRouter();
  
  // Interactive Before/After slider mock state (Using two beautiful descriptive text blocks to explain the clinical biological change)
  const [activeCase, setActiveCase] = useState<'case1' | 'case2' | 'case3'>('case1');

  const cases = {
    case1: {
      title: "Case study: Full Arch Restoration (All-on-X)",
      before: "Failing old crowns, advanced gum infection, and severe localized bone loss. Patient could not chew solid food and hid their smile.",
      after: "Upper 5 implants and Lower 4 implants placed under digital guided surgery, supporting monolithic zirconia custom-milled arches.",
      timeline: "5.5 months total healing and restoration window",
      location: "Beverly Hills Suite",
    },
    case2: {
      title: "Case study: Single Anterior Aesthetic Replacement",
      before: "Fractured front central incisor due to physical impact. Oblique root fracture made tooth unrestorable.",
      after: "Atraumatic extraction, socket preservation graft, computer-guided titanium implant fixture, custom zirconia abutment and crown.",
      timeline: "4 months total",
      location: "Burbank Magnolia Suite",
    },
    case3: {
      title: "Case study: Posterior Lower Segment Bridge",
      before: "Three missing lower left molars causing asymmetric chewing, joint pain, and tipping of opposing teeth.",
      after: "Two premium titanium implant fixtures placed to anchor a continuous 3-unit high-strength translucent ceramic bridge.",
      timeline: "4.5 months",
      location: "Burbank Magnolia Suite",
    }
  };

  return (
    <div className="bg-brand-white" id="home-view-root">
      
      {/* 1. HERO SECTION (Editorial personal brand layout with custom background shapes and abstract golden dental mesh) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F2ECE1] via-brand-white to-brand-white py-20 lg:py-32 border-b border-brand-stone/50">
        
        {/* Glowing visual abstract elements and luxury dot grid in background */}
        <div className="absolute inset-0 bg-dot-grid opacity-75 pointer-events-none" />
        
        {/* Real-world high-end aesthetic backdrop details (abstract absolute shapes) */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-teal-glow pointer-events-none opacity-80" />
        <div className="absolute -bottom-20 -left-10 w-[400px] h-[400px] rounded-full bg-gold-glow pointer-events-none opacity-90" />
        
        {/* Subtle decorative curved luxury layout line */}
        <svg className="absolute right-0 top-1/2 -translate-y-1/2 text-brand-plum/10 w-[300px] h-[600px] hidden xl:block pointer-events-none" fill="none" viewBox="0 0 100 200">
          <path d="M100,0 C50,50 50,150 100,200" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
          <circle cx="60" cy="100" r="4" fill="currentColor" />
        </svg>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content column */}
            <div className="lg:col-span-7 space-y-7 lg:pr-6">
              
              {/* Premium credential badges */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="text-xs font-mono font-extrabold text-[#916E3B] uppercase tracking-widest border border-brand-plum/40 bg-brand-plum/5 px-3.5 py-1.5 rounded-full shadow-2xs">
                  Dr. Liyan Massaband, D.M.D., M.P.H.
                </span>
                <span className="text-[11px] font-mono font-extrabold text-emerald-800 bg-emerald-50/90 border border-emerald-200 px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-2xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 animate-pulse" /> 1,000+ Dental Implants Placed
                </span>
              </div>
 
              {/* Main Authority Headline with Ultra-Bold fonts */}
              <h1 className="font-display font-black text-[#0A2621] text-4xl sm:text-5xl lg:text-[64px] tracking-tight leading-[1.05] drop-shadow-3xs">
                Premium Dental Implant & <span className="text-brand-plum">Full-Mouth</span> Restoration
              </h1>
 
              {/* Patient Positioning Pitch */}
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-sans max-w-xl font-medium">
                Reclaim your smile's natural beauty, solid biting force, and speaking confidence. As an elite dual-trained cosmetic and implant surgeon with premier practice affiliations in <strong className="text-brand-bronze">Beverly Hills</strong> and <strong className="text-brand-plum">Burbank</strong>, {BRAND_CONFIG.personName} customizes every full-arch restoration, All-on-X, and single-tooth replacement using state-of-the-art 3D biological mapping.
              </p>

              {/* PRACTICE ALIGNMENT COHERENCE RIBBON (User-requested Dentist Websites Integration) */}
              <div className="bg-white/90 border border-brand-stone/80 backdrop-blur-md p-4 rounded-xl shadow-xs space-y-2.5 max-w-xl">
                <span className="text-[9.5px] font-mono font-extrabold text-[#916E3B] tracking-widest block">
                  • AFFILIATE CLINICAL PARTNERS
                </span>
                <div className="grid grid-cols-2 gap-4 items-center">
                  <a 
                    href="https://confidentalbeverlyhills.com/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group border-r border-brand-stone/60 pr-2 block"
                  >
                    <p className="text-xs font-bold text-[#0F2D26] group-hover:text-brand-plum transition-colors">
                      ConfiDental Beverly Hills
                    </p>
                    <p className="text-[10px] text-slate-500 font-sans group-hover:underline">
                      confidentalbeverlyhills.com →
                    </p>
                  </a>
                  <a 
                    href="https://www.magnoliadentistry.com/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group block"
                  >
                    <p className="text-xs font-bold text-[#0F2D26] group-hover:text-brand-plum transition-colors">
                      Magnolia Dentistry Burbank
                    </p>
                    <p className="text-[10px] text-slate-500 font-sans group-hover:underline">
                      magnoliadentistry.com →
                    </p>
                  </a>
                </div>
              </div>
 
              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-4 font-sans">
                <Link
                  to="/contact/"
                  className="px-6 py-4 bg-brand-bronze hover:bg-brand-bronze-light text-white text-sm font-extrabold tracking-wide rounded-xl transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 transform hover:-translate-y-0.5"
                >
                  <Calendar className="w-4.5 h-4.5 text-white" />
                  <span>Request an Implant Assessment</span>
                </Link>
                <Link
                  to="/dental-implants/"
                  className="px-6 py-4 border border-brand-stone hover:border-brand-bronze text-brand-charcoal hover:text-brand-bronze text-sm font-extrabold tracking-wide rounded-xl transition-all duration-300 bg-white shadow-3xs hover:shadow-2xs transform hover:-translate-y-0.5"
                >
                  Explore Dental Implants Guide
                </Link>
              </div>
 
              {/* Trust signals block */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-brand-stone/60">
                <div className="flex gap-3 p-3 rounded-xl hover:bg-white/50 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-brand-bronze/5 border border-brand-bronze/20 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5 text-brand-bronze" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-brand-charcoal">Medically Driven Approach</h3>
                    <p className="text-[11px] text-slate-650 font-sans leading-normal">
                      Combining clinical dental surgery (D.M.D.) with public health standards (M.P.H.) for maximum safety.
                    </p>
                  </div>
                </div>
 
                <div className="flex gap-3 p-3 rounded-xl hover:bg-white/50 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-brand-bronze/5 border border-brand-bronze/20 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-5 h-5 text-brand-bronze" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-brand-charcoal">Digital Computerized Planning</h3>
                    <p className="text-[11px] text-slate-650 font-sans leading-normal">
                      We use pre-surgical 3D CBCT scans to ensure implant fixtures align with your unique bone architecture.
                    </p>
                  </div>
                </div>
              </div>
 
            </div>
 
            {/* Right Column Visual Portal */}
            <div className="lg:col-span-5 relative font-sans">
              
              {/* Decorative golden ring behind the image to elevate attractability */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-plum to-brand-bronze rounded-3xl blur-md opacity-25 group-hover:opacity-40 transition-opacity duration-500" />
              
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-brand-stone/60 relative group">
                <img 
                  src="https://images.unsplash.com/photo-1579684389782-64d84b5e905d?auto=format&fit=crop&q=80&w=850"
                  alt="Dr Liyan Massaband Dental Implant Specialist" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/90 via-brand-charcoal/20 to-transparent" />
                
                {/* Micro badge indicator */}
                <div className="absolute bottom-6 left-6 right-6 p-5 bg-brand-charcoal/60 backdrop-blur-md rounded-xl border border-white/10 space-y-1">
                  <div className="flex items-center gap-1.5 text-emerald-400">
                    <ShieldCheck className="w-4 h-4 animate-pulse" />
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider">Verified Professional Authority</span>
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    "Every dental implant is a biological fusion with your living body. We design each anchor to ensure natural integration and lasting biomechanical stability."
                  </p>
                  <span className="text-[9px] font-mono text-brand-bronze uppercase tracking-widest block font-bold pt-1.5 border-t border-white/10">— {BRAND_CONFIG.displayName}</span>
                </div>
              </div>
            </div>
 
          </div>
        </div>
      </section>

      {/* 2. PATIENT CONCERNS SECTION (Empathy and Biology focus with elegant card details) */}
      <section className="py-16 md:py-24 bg-white border-b border-brand-stone/40 font-sans relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-stone/10 rounded-full blur-2xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-mono font-bold text-brand-bronze uppercase tracking-widest block">
              Restoring Comfort and Function
            </span>
            <h2 className="font-display font-medium text-brand-charcoal text-3xl md:text-4xl tracking-tight">
              Are Missing or Failing Teeth Affecting Your Daily Life?
            </h2>
            <p className="text-xs md:text-sm text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Living with compromised teeth or traditional loose dentures can lead to structural jaw deterioration, dietary limitations, and lost confidence. Implant dentistry offers a reliable biological solution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="border border-brand-stone/60 p-7 rounded-2xl bg-brand-stone/10 space-y-3 hover-lift transition-all duration-350 shadow-3xs relative group">
              <div className="absolute top-0 left-6 w-12 h-1 bg-brand-bronze/40 rounded-b-full transition-all group-hover:bg-brand-bronze group-hover:w-20" />
              <span className="text-xs font-mono text-brand-bronze font-bold uppercase block tracking-wider">01. Bone Loss Prevention</span>
              <p className="text-brand-charcoal font-display font-bold text-lg">Continuous Jawbone Deterioration</p>
              <p className="text-xs text-slate-600 leading-relaxed">
                When a natural tooth is lost, the surrounding bone minerals resorb. Titanium implant posts act as artificial roots, stimulating the bone and preventing facial bone collapse.
              </p>
            </div>

            <div className="border border-brand-stone/60 p-7 rounded-2xl bg-brand-stone/10 space-y-3 hover-lift transition-all duration-350 shadow-3xs relative group">
              <div className="absolute top-0 left-6 w-12 h-1 bg-brand-bronze/40 rounded-b-full transition-all group-hover:bg-brand-bronze group-hover:w-20" />
              <span className="text-xs font-mono text-brand-bronze font-bold uppercase block tracking-wider">02. Restoring Chewing force</span>
              <p className="text-brand-charcoal font-display font-bold text-lg">Dietary and Speech Restrictions</p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Traditional dentures restore only 15% to 20% of original chewing force. Fixed dental implants restore up to 90% of natural biting force, allowing you to eat a healthy diet.
              </p>
            </div>

            <div className="border border-brand-stone/60 p-7 rounded-2xl bg-brand-stone/10 space-y-3 hover-lift transition-all duration-350 shadow-3xs relative group">
              <div className="absolute top-0 left-6 w-12 h-1 bg-brand-bronze/40 rounded-b-full transition-all group-hover:bg-brand-bronze group-hover:w-20" />
              <span className="text-xs font-mono text-brand-bronze font-bold uppercase block tracking-wider">03. Permanent Stability</span>
              <p className="text-brand-charcoal font-display font-bold text-lg">Denture Slipping & Social Anxiety</p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Loose dentures can slide around, making speaking and laughing uncomfortable. Implants lock teeth firmly in place, eliminating the need for messy adhesives or pastes.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 3. IMPLANT SPECIALTIES GRID (Deeper look at treatments with premium cards) */}
      <section className="py-16 md:py-24 bg-brand-stone/5 border-b border-brand-stone/40 font-sans relative overflow-hidden" id="implant-treatment-sectors">
        <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-mono font-bold text-brand-bronze uppercase tracking-widest block">
              Advanced Clinical Modalities
            </span>
            <h2 className="font-display font-medium text-brand-charcoal text-3xl md:text-4xl tracking-tight">
              Comprehensive Implant Dentistry Specialties
            </h2>
            <p className="text-xs md:text-sm text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Dr. Massaband provides targeted, highly precise surgical solutions tailored to your unique biological bone quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Specialty 1 */}
            <div className="bg-white border border-brand-stone/50 p-6 rounded-2xl hover-lift transition-all duration-300 flex flex-col justify-between shadow-xs">
              <div className="space-y-3">
                <span className="font-mono text-[10px] text-brand-bronze font-bold block uppercase tracking-wider">SINGLE TOOTH LOSS</span>
                <h3 className="font-display font-bold text-brand-charcoal text-lg">Single Dental Implants</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Replaces a missing tooth from root to crown without modifying neighboring teeth. This is the gold standard alternative to traditional dental bridges.
                </p>
              </div>
              <div className="pt-6 border-t border-brand-stone/40 mt-6 flex justify-between items-center text-xs font-semibold">
                <span className="text-[10px] text-slate-400 font-mono font-bold">Independent anchor</span>
                <Link to="/dental-implants/" className="text-brand-bronze hover:text-brand-bronze-light flex items-center gap-1 group">
                  <span className="border-b border-transparent group-hover:border-brand-bronze transition-all">Explore</span> <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Specialty 2 */}
            <div className="bg-white border border-brand-stone/50 p-6 rounded-2xl hover-lift transition-all duration-300 flex flex-col justify-between shadow-xs">
              <div className="space-y-3">
                <span className="font-mono text-[10px] text-brand-bronze font-bold block uppercase tracking-wider">MULTIPLE MISSING TEETH</span>
                <h3 className="font-display font-bold text-brand-charcoal text-lg">Multiple Dental Implants</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Ideal for resolving several missing teeth in sequence. Multiple posts support custom ceramic implant bridges, avoiding partial dentures.
                </p>
              </div>
              <div className="pt-6 border-t border-brand-stone/40 mt-6 flex justify-between items-center text-xs font-semibold">
                <span className="text-[10px] text-slate-400 font-mono font-bold">Custom ceramic bridges</span>
                <Link to="/dental-implants/" className="text-brand-bronze hover:text-brand-bronze-light flex items-center gap-1 group">
                  <span className="border-b border-transparent group-hover:border-brand-bronze transition-all">Explore</span> <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Specialty 3 */}
            <div className="bg-white border border-brand-stone/50 p-6 rounded-2xl hover-lift transition-all duration-300 flex flex-col justify-between shadow-xs">
              <div className="space-y-3">
                <span className="font-mono text-[10px] text-brand-bronze font-bold block uppercase tracking-wider">FULL-ARCH FIXED TEETH</span>
                <h3 className="font-display font-bold text-brand-charcoal text-lg">All-on-X Implants</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  A revolutionary full-arch solution. A strategically planned number of implants (typically 4 to 6) support a full, fixed, cosmetic arch of replacement teeth.
                </p>
              </div>
              <div className="pt-6 border-t border-brand-stone/40 mt-6 flex justify-between items-center text-xs font-semibold">
                <span className="text-[10px] text-slate-400 font-mono font-bold">Computer-guided arches</span>
                <Link to="/all-on-x/" className="text-brand-bronze hover:text-brand-bronze-light flex items-center gap-1 group">
                  <span className="border-b border-transparent group-hover:border-brand-bronze transition-all">Explore All-on-X</span> <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Specialty 4 */}
            <div className="bg-white border border-brand-stone/50 p-6 rounded-2xl hover-lift transition-all duration-300 flex flex-col justify-between shadow-xs">
              <div className="space-y-3">
                <span className="font-mono text-[10px] text-brand-bronze font-bold block uppercase tracking-wider">STABILIZING OVERDENTURES</span>
                <h3 className="font-display font-bold text-brand-charcoal text-lg">Implant-Supported Dentures</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Combines the relative affordability of a denture with the stability of implants. Posts physically snap-on to secure the denture in place.
                </p>
              </div>
              <div className="pt-6 border-t border-brand-stone/40 mt-6 flex justify-between items-center text-xs font-semibold">
                <span className="text-[10px] text-slate-400 font-mono font-bold">No slips or adhesives</span>
                <Link to="/dental-implants/" className="text-brand-bronze hover:text-brand-bronze-light flex items-center gap-1 group">
                  <span className="border-b border-transparent group-hover:border-brand-bronze transition-all">Explore</span> <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Specialty 5 */}
            <div className="bg-white border border-brand-stone/50 p-6 rounded-2xl hover-lift transition-all duration-300 flex flex-col justify-between shadow-xs">
              <div className="space-y-3">
                <span className="font-mono text-[10px] text-brand-bronze font-bold block uppercase tracking-wider">BONE REBUILDING</span>
                <h3 className="font-display font-bold text-brand-charcoal text-lg">Grafting & Sinus Lifts</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Essential for patients with localized bone deficiencies. Dr. Massaband performs guided tissue regeneration to create a stable implant foundation.
                </p>
              </div>
              <div className="pt-6 border-t border-brand-stone/40 mt-6 flex justify-between items-center text-xs font-semibold">
                <span className="text-[10px] text-slate-400 font-mono font-bold">Guided Regeneration</span>
                <Link to="/dental-implants/" className="text-brand-bronze hover:text-brand-bronze-light flex items-center gap-1 group">
                  <span className="border-b border-transparent group-hover:border-brand-bronze transition-all">Explore</span> <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Specialty 6 */}
            <div className="bg-white border border-brand-stone/50 p-6 rounded-2xl hover-lift transition-all duration-300 flex flex-col justify-between shadow-xs">
              <div className="space-y-3">
                <span className="font-mono text-[10px] text-brand-bronze font-bold block uppercase tracking-wider">CORRECTIVE CARE</span>
                <h3 className="font-display font-bold text-brand-charcoal text-lg">Implant Revision & Assessment</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Evaluations for older implant complications, loose fixtures, pain, or bleeding. We provide clear, diagnostic assessments and correction plans.
                </p>
              </div>
              <div className="pt-6 border-t border-brand-stone/40 mt-6 flex justify-between items-center text-xs font-semibold">
                <span className="text-[10px] text-slate-400 font-mono font-bold">Specialist assessment</span>
                <Link to="/contact/" className="text-brand-bronze hover:text-brand-bronze-light flex items-center gap-1 group">
                  <span className="border-b border-transparent group-hover:border-brand-bronze transition-all">Request Assessment</span> <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. INTERACTIVE CASE SPOTLIGHT (E-E-A-T Case Stories component) */}
      <section className="py-16 md:py-24 bg-white border-b border-brand-stone/40 font-sans" id="home-case-stories">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          
          <div className="text-center space-y-4 mb-12">
            <span className="text-xs font-mono font-bold text-brand-bronze uppercase tracking-widest block">Clinical Case Showcase</span>
            <h2 className="font-display font-medium text-brand-charcoal text-3xl tracking-tight">Biological Restorative History</h2>
            <p className="text-xs text-slate-500 max-w-xl mx-auto">
              Select a case study to explore the patient's initial biological concerns, customized implant plan, and final restoration details.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch border border-brand-stone rounded-2xl overflow-hidden shadow-xs">
            
            {/* Interactive Tab Selectors Left (4 cols) */}
            <div className="lg:col-span-4 bg-brand-stone/5 p-6 border-b lg:border-b-0 lg:border-r border-brand-stone flex flex-col justify-between">
              <div className="space-y-3 font-mono text-[11px] font-bold uppercase tracking-wider">
                <button
                  onClick={() => setActiveCase('case1')}
                  className={`w-full text-left p-3.5 rounded-lg border transition-all cursor-pointer ${activeCase === 'case1' ? 'bg-brand-bronze text-white border-brand-bronze' : 'bg-white border-brand-stone/40 hover:bg-brand-stone/10 text-slate-600'}`}
                >
                  Full Arch (All-on-X)
                </button>
                <button
                  onClick={() => setActiveCase('case2')}
                  className={`w-full text-left p-3.5 rounded-lg border transition-all cursor-pointer ${activeCase === 'case2' ? 'bg-brand-bronze text-white border-brand-bronze' : 'bg-white border-brand-stone/40 hover:bg-brand-stone/10 text-slate-600'}`}
                >
                  Single Aesthetic Tooth
                </button>
                <button
                  onClick={() => setActiveCase('case3')}
                  className={`w-full text-left p-3.5 rounded-lg border transition-all cursor-pointer ${activeCase === 'case3' ? 'bg-brand-bronze text-white border-brand-bronze' : 'bg-white border-brand-stone/40 hover:bg-brand-stone/10 text-slate-600'}`}
                >
                  Lower Molars Bridge
                </button>
              </div>

              <div className="pt-6 border-t border-brand-stone/30 mt-6 text-xs">
                <Link to="/patient-stories/" className="text-brand-bronze hover:text-brand-bronze-light font-semibold flex items-center gap-1 justify-center">
                  <span>View All Case Stories</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Narrative Case Display Right (8 cols) */}
            <div className="lg:col-span-8 p-6 sm:p-8 space-y-6 bg-white flex flex-col justify-center">
              <div className="space-y-2">
                <span className="text-[10px] font-mono font-bold text-brand-bronze uppercase tracking-widest block">• {cases[activeCase].location}</span>
                <h3 className="font-display font-bold text-brand-charcoal text-xl">{cases[activeCase].title}</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
                <div className="space-y-1.5 p-4 bg-red-50/20 border-l-2 border-red-400 rounded-r-lg">
                  <span className="font-bold text-red-800 uppercase text-[10px] block">INITIAL STATUS / CONCERNS</span>
                  <p className="text-slate-600 leading-relaxed font-sans">{cases[activeCase].before}</p>
                </div>
                <div className="space-y-1.5 p-4 bg-emerald-50/20 border-l-2 border-emerald-500 rounded-r-lg">
                  <span className="font-bold text-emerald-800 uppercase text-[10px] block">FINAL BIOLOGICAL RESTORATION</span>
                  <p className="text-slate-600 leading-relaxed font-sans">{cases[activeCase].after}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-brand-stone/30 flex justify-between items-center text-xs">
                <span className="text-slate-400 font-medium">Timeline: <strong>{cases[activeCase].timeline}</strong></span>
                <span className="text-brand-bronze font-mono font-bold text-[10px] uppercase">Dr. Massaband Coordinated</span>
              </div>
            </div>

          </div>

          <p className="text-[10px] text-slate-400 italic text-center mt-4 font-sans">
            * Disclaimer: Individual treatment plans are custom designed based on comprehensive 3D scanning and bone biology. Success cannot be guaranteed.
          </p>

        </div>
      </section>

      {/* 5. SPLIT LOCATION SELECTOR SECTION (Beverly Hills vs Burbank) */}
      <section className="py-16 md:py-24 bg-brand-stone/5 border-b border-brand-stone/40 font-sans" id="home-locations-split">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-mono font-bold text-brand-bronze uppercase tracking-widest block">Convenient Southern California Access</span>
            <h2 className="font-display font-medium text-brand-charcoal text-3xl md:text-4xl tracking-tight">Practice Locations & Clinical Hours</h2>
            <p className="text-xs md:text-sm text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Dr. Massaband provides expert dental implant care across two highly equipped clinics, serving patients from Beverly Hills, Burbank, Glendale, Studio City, West Hollywood, and nearby Southern California communities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Beverly Hills Clinic Card */}
            <div className="bg-white border border-brand-stone rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow duration-300 flex flex-col justify-between">
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-brand-bronze uppercase tracking-widest border border-brand-bronze/20 bg-brand-bronze/5 px-3 py-1 rounded-full">
                    Medical District Suite
                  </span>
                  <MapPin className="w-5 h-5 text-brand-bronze" />
                </div>

                <h3 className="font-display font-bold text-brand-charcoal text-xl">Beverly Hills Office</h3>
                
                <p className="text-xs text-slate-500 leading-relaxed">
                  Located in the prestigious Wilshire medical tower. Highly specialized in full-mouth All-on-X computer-guided operations, sinus lifting, and aesthetic ceramic crowns.
                </p>

                <div className="pt-4 border-t border-brand-stone/40 space-y-3 text-xs text-slate-600">
                  <p>
                    <strong>Address:</strong> 9401 Wilshire Blvd, Suite 1050, Beverly Hills, CA 90212
                  </p>
                  <p>
                    <strong>Hours:</strong> Mon – Thu: 9:00 AM – 5:00 PM | Fri: 9:00 AM – 3:00 PM
                  </p>
                  <p className="bg-brand-stone/10 p-2.5 rounded-lg text-[11px] leading-normal">
                    <strong>Parking:</strong> Underground tower validation provided for implant consults. Just blocks from Rodeo Drive.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-brand-stone/5 border-t border-brand-stone/40 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/locations/beverly-hills/"
                  className="flex-1 text-center py-3 border border-brand-stone hover:border-brand-bronze text-brand-charcoal hover:text-brand-bronze text-xs font-semibold rounded-xl transition-all"
                >
                  Explore Location Details
                </Link>
                <Link
                  to="/contact/"
                  className="flex-1 text-center py-3 bg-brand-bronze hover:bg-brand-bronze-light text-white text-xs font-semibold rounded-xl transition-all"
                >
                  Book Beverly Hills Suite
                </Link>
              </div>
            </div>

            {/* Burbank Clinic Card */}
            <div className="bg-white border border-brand-stone rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow duration-300 flex flex-col justify-between">
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-brand-bronze uppercase tracking-widest border border-brand-bronze/20 bg-brand-bronze/5 px-3 py-1 rounded-full">
                    Magnolia Dentistry Affiliation
                  </span>
                  <MapPin className="w-5 h-5 text-brand-bronze" />
                </div>

                <h3 className="font-display font-bold text-brand-charcoal text-xl">Burbank Office</h3>
                
                <p className="text-xs text-slate-500 leading-relaxed">
                  Serving the San Fernando Valley with state-of-the-art guided dental implantology, immediate tooth extractions, bone grafting, and dental implant prostheses.
                </p>

                <div className="pt-4 border-t border-brand-stone/40 space-y-3 text-xs text-slate-600">
                  <p>
                    <strong>Address:</strong> 1923 W Magnolia Blvd, Burbank, CA 91506
                  </p>
                  <p>
                    <strong>Hours:</strong> Tue – Fri: 8:30 AM – 5:30 PM | Saturday: By Appointment
                  </p>
                  <p className="bg-brand-stone/10 p-2.5 rounded-lg text-[11px] leading-normal">
                    <strong>Parking:</strong> Dedicated free parking spaces directly behind building. Easily accessible street parking.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-brand-stone/5 border-t border-brand-stone/40 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/locations/burbank/"
                  className="flex-1 text-center py-3 border border-brand-stone hover:border-brand-bronze text-brand-charcoal hover:text-brand-bronze text-xs font-semibold rounded-xl transition-all"
                >
                  Explore Location Details
                </Link>
                <Link
                  to="/contact/"
                  className="flex-1 text-center py-3 bg-brand-bronze hover:bg-brand-bronze-light text-white text-xs font-semibold rounded-xl transition-all"
                >
                  Book Burbank Suite
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. TRUST & EEAT CERTIFICATE LOG (Medical safety checklist) */}
      <section className="py-16 bg-white border-b border-brand-stone/40 font-sans" id="home-eeat-shields">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="border border-brand-stone rounded-2xl p-6 sm:p-8 space-y-6 bg-brand-stone/10 shadow-xs">
            <div className="flex items-center gap-3.5 pb-4 border-b border-brand-stone">
              <ShieldCheck className="w-6 h-6 text-brand-bronze shrink-0" />
              <div>
                <h3 className="font-display font-medium text-lg text-brand-charcoal">E-E-A-T Medical Authority Verification</h3>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">Professional Standing Log</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-slate-600">
              <div className="space-y-1.5">
                <strong className="text-brand-charcoal block">Active California State Licensure</strong>
                <p className="text-slate-500 text-[11px] leading-relaxed">
                  Dr. Liyan Massaband is fully registered and licensed to practice surgical dentistry in the State of California. Her credentials are fully auditable through the Dental Board of California.
                </p>
              </div>
              <div className="space-y-1.5">
                <strong className="text-brand-charcoal block">Double Degrees (Clinical & Science)</strong>
                <p className="text-slate-500 text-[11px] leading-relaxed">
                  Earning her Doctor of Dental Medicine (D.M.D.) alongside a Master of Public Health (M.P.H.) ensures that her clinical approaches meet the absolute highest standards of sterilization and surgical safety.
                </p>
              </div>
              <div className="space-y-1.5">
                <strong className="text-brand-charcoal block">Medical Review & Policy Alignment</strong>
                <p className="text-slate-500 text-[11px] leading-relaxed">
                  All educational content on this website is compiled from clinical guidelines, peer-reviewed journals, and Swiss implant engineering specifications, adhering to deep medical review standards.
                </p>
              </div>
              <div className="space-y-1.5">
                <strong className="text-brand-charcoal block">Patient Consultation Requirements</strong>
                <p className="text-slate-500 text-[11px] leading-relaxed">
                  We reject aggressive marketing and false urgency. Suitability for single implants or All-on-X is determined solely on a biological basis following detailed digital 3D scans.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. RESPONSIBLE DENTAL FAQ & CLINICAL RISK DISCLOSURES */}
      <section className="py-16 md:py-24 bg-white" id="home-faq">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <div className="text-center space-y-3 mb-16">
            <span className="text-xs font-mono font-bold text-brand-bronze uppercase tracking-widest block">Patient Knowledge Hub</span>
            <h2 className="font-display font-medium text-brand-charcoal text-3xl tracking-tight">Responsible Implant FAQs</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-brand-stone/5 border border-brand-stone/40 p-5 rounded-xl space-y-2">
              <h4 className="font-display font-bold text-brand-charcoal text-sm">Am I guaranteed to be a candidate for dental implants?</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-sans">
                No. Suitability depends on several physiological variables, including remaining bone density, periodontal gum health, systemic diseases like uncontrolled diabetes, and lifestyle factors like heavy smoking. Dr. Massaband requires a physical consultation and CBCT 3D scan to safely determine candidate eligibility.
              </p>
            </div>

            <div className="bg-brand-stone/5 border border-brand-stone/40 p-5 rounded-xl space-y-2">
              <h4 className="font-display font-bold text-brand-charcoal text-sm">How long do dental implants last?</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-sans">
                With appropriate clinical placement and diligent home care, the titanium implant fixture is designed to osseointegrate and can last a lifetime. The cosmetic ceramic or zirconia crown placed on top is subject to standard clinical wear and tear and can be restored or replaced if necessary after 15 to 25 years.
              </p>
            </div>

            <div className="bg-brand-stone/5 border border-brand-stone/40 p-5 rounded-xl space-y-2">
              <h4 className="font-display font-bold text-brand-charcoal text-sm">What are the primary risks associated with dental implant surgery?</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-sans">
                As with any surgical procedure, risks include localized infection, nerve sensitivity, sinus penetration (for upper posterior sites), and failure of the implant post to fuse with the bone (occurring in less than 2-3% of clinical cases). Dr. Massaband explains all risks, surgical limitations, and non-implant alternatives (such as partial bridges or dentures) during your visit.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
