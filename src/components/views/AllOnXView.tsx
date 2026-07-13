import React, { useState } from 'react';
import { 
  CheckCircle2, 
  HelpCircle, 
  Info, 
  ChevronRight, 
  ArrowRight, 
  Star, 
  ShieldCheck, 
  Sparkles, 
  FileText, 
  AlertTriangle,
  ClipboardList
} from 'lucide-react';
import { Link } from '../AppRouter.tsx';
import { BRAND_CONFIG } from '../../data.ts';

export const AllOnXView: React.FC = () => {
  const [selectedFaq, setSelectedFaq] = useState<number | null>(null);
  
  // Suitability Questionnaire State
  const [q1, setQ1] = useState<string | null>(null);
  const [q2, setQ2] = useState<string | null>(null);
  const [q3, setQ3] = useState<string | null>(null);
  const [showResult, setShowResult] = useState<boolean>(false);

  const handleResetQuestionnaire = () => {
    setQ1(null);
    setQ2(null);
    setQ3(null);
    setShowResult(false);
  };

  const getQuestionnaireVerdict = () => {
    if (!q1 || !q2 || !q3) return "Please answer all questions to see a general assessment.";
    
    if (q1 === 'yes' && q2 === 'yes' && q3 === 'no') {
      return "Based on your answers, you may be a strong potential candidate for an All-on-X clinical assessment. Patients with extensive tooth loss or failing dentition who do not smoke and have reasonably good health are often ideal for full-arch fixed options.";
    }
    if (q3 === 'yes') {
      return "Active heavy smoking can reduce blood flow and affect surgical osseointegration. While you may still be a candidate, Dr. Massaband will require a focused discussion on pausing tobacco use during the healing phase.";
    }
    return "All-on-X is highly customizable. Even with bone volume concerns or minor medical histories, advanced computer-guided planning can often find suitable bone anchors without extensive grafting. We recommend a clinical evaluation.";
  };

  const comparisonData = [
    {
      feature: "Stability & Chewing Force",
      allOnX: "Fixed permanently. Restores up to 90% of natural bite force. Chewing is completely normal.",
      dentures: "Removable. Restores only 15% to 20% of chewing force. Slides, shifts, and requires adhesives."
    },
    {
      feature: "Bone Structure Preservation",
      allOnX: "Implant posts stimulate the jawbone cells, actively preventing facial bone collapse.",
      dentures: "No root support. Jawbone continuously resorbs and deteriorates over time."
    },
    {
      feature: "Palate & Speech Comfort",
      allOnX: "Slick, open arch structure. The palate is completely exposed. Taste is unaffected; speech is natural.",
      dentures: "Full plastic plate covers the entire upper roof of the mouth. Muffled speech, reduced taste."
    },
    {
      feature: "Hygiene & Cleaning",
      allOnX: "Cleaned inside the mouth by brushing and water-flossing underneath the fixed bridge.",
      dentures: "Must be removed after meals, soaked in chemicals overnight, and physically brushed outside the mouth."
    },
    {
      feature: "Lifespan & Repairs",
      allOnX: "Implants last a lifetime. Custom high-end ceramic restorations can last decades.",
      dentures: "Typically require refitting or relining every 3 to 5 years due to ongoing jawbone shrinkage."
    }
  ];

  const faqs = [
    {
      q: "What does the 'X' mean in All-on-X?",
      a: "The 'X' stands for the variable number of dental implants placed to support the full arch. While some clinics market a strict 'All-on-4' system, Dr. Massaband believes in anatomical honesty. Depending on your individual bone quality, bite force, and facial frame, she may plan 4, 5, or 6 implants ('All-on-5' or 'All-on-6') to distribute pressure safely."
    },
    {
      q: "Will I receive temporary teeth on the same day?",
      a: "For suitable candidates, an immediate biocompatible temporary bridge can be secured to the implants on the same day as extractions and surgery. This allows you to speak, smile, and eat a soft diet during healing. However, these temporary teeth are not permanent and are designed purely to protect the implants as the bone fuses."
    },
    {
      q: "How does All-on-X compare to traditional dentures?",
      a: "Traditional dentures are removable, cover the roof of your mouth, and slide around when chewing. All-on-X is bolted securely to titanium posts. It is completely non-removable by the patient, leaves the palate completely open so you can fully taste food, and restores nearly 90% of your natural chewing function."
    },
    {
      q: "How long is the healing period?",
      a: "The surgical implants require 3 to 6 months of non-loaded healing to fully fuse with the bone (osseointegration). During this time, you will wear your temporary cosmetic bridge and consume soft foods. Once healing is confirmed via 3D imaging, your final high-strength zirconia or ceramic teeth are designed and fitted."
    },
    {
      q: "Is bone grafting always required for All-on-X?",
      a: "One of the major benefits of the All-on-X concept is that posterior implants are tilted at a 45-degree angle. This allows us to utilize the dense bone in the front of your jaw, frequently eliminating the need for complex bone grafts or sinus lifts, even for patients who have experienced historic bone loss."
    }
  ];

  return (
    <div className="bg-brand-white" id="all-on-x-view-root">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F2ECE1] via-brand-white to-brand-white py-20 lg:py-28 border-b border-brand-stone/50">
        
        {/* Subtle, beautiful floating medical engineering dot grid in background */}
        <div className="absolute inset-0 bg-dot-grid opacity-75 pointer-events-none" />
        
        {/* Luxury glowing visual abstract elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-teal-glow pointer-events-none opacity-80" />
        <div className="absolute -bottom-20 -left-10 w-[400px] h-[400px] rounded-full bg-gold-glow pointer-events-none opacity-90" />
        
        {/* Curved absolute background lines */}
        <svg className="absolute left-1/3 top-10 text-brand-plum/10 w-[200px] h-[200px] hidden xl:block pointer-events-none" fill="none" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
        </svg>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-7">
              <span className="text-xs font-mono font-extrabold text-[#916E3B] uppercase tracking-widest border border-brand-plum/40 bg-brand-plum/5 px-3.5 py-1.5 rounded-full inline-block shadow-2xs">
                Full-Arch Implant Dentistry
              </span>
              <h1 className="font-display font-black text-[#0A2621] text-4xl sm:text-5xl lg:text-[56px] tracking-tight leading-[1.08] drop-shadow-3xs">
                All-on-X Full-Arch Restoration
              </h1>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed max-w-xl font-sans font-medium">
                An advanced restorative option for selected patients experiencing extensive tooth loss, failing bridges, severe decay, or uncomfortable loose dentures. By utilizing a customized number of strategically angled implants, we restore a full, fixed, cosmetic arch of replacement teeth.
              </p>
              
              <div className="pt-2 flex flex-wrap gap-4">
                <a
                  href="#all-on-x-questionnaire"
                  className="px-6 py-4 bg-brand-bronze hover:bg-brand-bronze-light text-white font-display text-sm font-extrabold tracking-wide rounded-xl transition-all duration-200 shadow-md"
                >
                  Am I a Candidate?
                </a>
                <Link
                  to="/contact/"
                  className="px-6 py-4 border border-brand-stone hover:border-brand-bronze text-brand-charcoal hover:text-brand-bronze font-display text-sm font-extrabold tracking-wide rounded-xl transition-all duration-200 bg-white"
                >
                  Request a Consultation
                </Link>
              </div>

              {/* Verified Badge */}
              <div className="pt-6 border-t border-brand-stone/60 flex items-center gap-3.5">
                <div className="bg-emerald-50 text-emerald-700 p-2 rounded-lg">
                  <ShieldCheck className="w-5 h-5 shrink-0" />
                </div>
                <div>
                  <p className="text-xs font-bold text-brand-charcoal">
                    Personalized Angled Placement
                  </p>
                  <p className="text-[11px] text-slate-500 font-sans">
                    We do not use cookie-cutter 4-implant templates. Dr. Massaband plans 4 to 6 implants based strictly on digital 3D scans of your biological bone structure.
                  </p>
                </div>
              </div>
            </div>

            {/* Hero Visual Right */}
            <div className="lg:col-span-5">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-brand-stone/60 relative">
                <img 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
                  alt="Dr Liyan Massaband Dental Clinic Burbank and Beverly Hills" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white p-5 bg-brand-charcoal/40 backdrop-blur-sm rounded-xl border border-white/10 space-y-1">
                  <p className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">
                    • COMPREHENSIVE CLINICAL FOCUS
                  </p>
                  <p className="text-xs text-slate-100 font-sans leading-relaxed">
                    \"All-on-X is an exquisite biomechanical design. By tilting the posterior implants, we anchor into deep, dense bone, avoiding the nerves and nasal cavities while delivering maximum stability.\"
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. WHAT IS ALL-ON-X & SCIENCE (Anatomical honesty) */}
      <section className="py-16 md:py-24 bg-white border-b border-brand-stone/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 relative">
              <div className="p-8 bg-brand-stone/10 border border-brand-stone/40 rounded-2xl space-y-4">
                <span className="font-mono text-brand-bronze text-xs font-bold block uppercase tracking-wider">Anatomical Honesty Directive</span>
                <h3 className="font-display font-bold text-brand-charcoal text-xl">
                  Why We Say All-on-\"X\" and Not All-on-4
                </h3>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  Many commercial clinics market \"All-on-4\" as a rigid product. However, human anatomy is diverse. If a patient with thin bone density, high chewing muscles, or a wider facial arch receives only four implants, those fixtures can become structurally overloaded, increasing the risk of bone loss or fracture.
                </p>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  Dr. Massaband utilizes <strong>3D Computerized Guided Surgery</strong> to map out the exact points of maximum bone volume. Based on this digital design, she places the optimal number of implants (typically 4, 5, or 6) to support your full-arch bridge safely. We prioritize your long-term success over commercial slogans.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono font-bold text-brand-bronze uppercase tracking-widest block">
                Treatment Understanding
              </span>
              <h2 className="font-display font-medium text-brand-charcoal text-3xl tracking-tight">
                Temporary vs. Final Implant Teeth
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed font-sans">
                It is absolutely vital for patients to understand that the All-on-X journey is a multi-phase biological process. Your restoration uses two completely different sets of teeth:
              </p>

              <div className="space-y-4 text-xs font-sans text-slate-600">
                <div className="p-4 bg-brand-stone/5 border-l-2 border-brand-bronze rounded-r-xl">
                  <span className="font-mono font-bold text-[10px] text-brand-bronze uppercase block">Phase A: The Immediate Healing Bridge (3-6 Months)</span>
                  <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                    Crafted from lightweight, biocompatible clinical PMMA or composite materials. It is secured to your implants on the day of surgery to provide temporary aesthetics and speech support. However, because it lacks a solid metal or zirconia framework, patients must maintain a soft diet to prevent micro-fractures during active bone fusion.
                  </p>
                </div>

                <div className="p-4 bg-brand-stone/5 border-l-2 border-emerald-600 rounded-r-xl">
                  <span className="font-mono font-bold text-[10px] text-emerald-600 uppercase block">Phase B: The Final Monolithic Zirconia Restoration</span>
                  <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                    Designed and hand-milled after osseointegration is fully completed (3 to 6 months later). This final bridge is reinforced with high-strength computer-designed titanium or zirconia sub-structures, providing maximum fracture resistance, life-like translucency, and a completely natural chewing bite.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. STICKY / INTERACTIVE QUESTIONNAIRE */}
      <section className="py-16 md:py-24 bg-brand-stone/5 border-b border-brand-stone/40 font-sans" id="all-on-x-questionnaire">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          
          <div className="bg-white border border-brand-stone/60 p-6 sm:p-10 rounded-2xl shadow-md space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-brand-stone/30">
              <ClipboardList className="w-6 h-6 text-brand-bronze shrink-0" />
              <div>
                <h3 className="font-display font-medium text-lg text-brand-charcoal">
                  All-on-X Suitability Questionnaire
                </h3>
                <span className="text-[10px] font-mono text-slate-400 block uppercase mt-0.5">
                  General Information Only — Does not determine clinical eligibility
                </span>
              </div>
            </div>

            {!showResult ? (
              <div className="space-y-6">
                
                {/* Question 1 */}
                <div className="space-y-3">
                  <p className="text-xs font-semibold text-brand-charcoal">
                    1. Do you have multiple missing teeth, severe structural damage, or currently wear a removable denture?
                  </p>
                  <div className="flex gap-4">
                    <button 
                      onClick={() => setQ1('yes')}
                      className={`px-4 py-2 text-xs border rounded-lg cursor-pointer ${q1 === 'yes' ? 'bg-brand-bronze text-white border-brand-bronze' : 'bg-white hover:bg-slate-50 border-brand-stone'}`}
                    >
                      Yes
                    </button>
                    <button 
                      onClick={() => setQ1('no')}
                      className={`px-4 py-2 text-xs border rounded-lg cursor-pointer ${q1 === 'no' ? 'bg-brand-bronze text-white border-brand-bronze' : 'bg-white hover:bg-slate-50 border-brand-stone'}`}
                    >
                      No
                    </button>
                  </div>
                </div>

                {/* Question 2 */}
                <div className="space-y-3">
                  <p className="text-xs font-semibold text-brand-charcoal">
                    2. Are you in generally stable health and approved for standard dental surgical work?
                  </p>
                  <div className="flex gap-4">
                    <button 
                      onClick={() => setQ2('yes')}
                      className={`px-4 py-2 text-xs border rounded-lg cursor-pointer ${q2 === 'yes' ? 'bg-brand-bronze text-white border-brand-bronze' : 'bg-white hover:bg-slate-50 border-brand-stone'}`}
                    >
                      Yes
                    </button>
                    <button 
                      onClick={() => setQ2('no')}
                      className={`px-4 py-2 text-xs border rounded-lg cursor-pointer ${q2 === 'no' ? 'bg-brand-bronze text-white border-brand-bronze' : 'bg-white hover:bg-slate-50 border-brand-stone'}`}
                    >
                      No
                    </button>
                  </div>
                </div>

                {/* Question 3 */}
                <div className="space-y-3">
                  <p className="text-xs font-semibold text-brand-charcoal">
                    3. Do you currently smoke tobacco heavily or have uncontrolled diabetic symptoms?
                  </p>
                  <div className="flex gap-4">
                    <button 
                      onClick={() => setQ3('yes')}
                      className={`px-4 py-2 text-xs border rounded-lg cursor-pointer ${q3 === 'yes' ? 'bg-brand-bronze text-white border-brand-bronze' : 'bg-white hover:bg-slate-50 border-brand-stone'}`}
                    >
                      Yes
                    </button>
                    <button 
                      onClick={() => setQ3('no')}
                      className={`px-4 py-2 text-xs border rounded-lg cursor-pointer ${q3 === 'no' ? 'bg-brand-bronze text-white border-brand-bronze' : 'bg-white hover:bg-slate-50 border-brand-stone'}`}
                    >
                      No
                    </button>
                  </div>
                </div>

                <div className="pt-4 border-t border-brand-stone/30 flex justify-end">
                  <button
                    disabled={!q1 || !q2 || !q3}
                    onClick={() => setShowResult(true)}
                    className="px-5 py-3.5 bg-brand-bronze hover:bg-brand-bronze-light text-white font-display text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    View General Assessment
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="p-5 bg-brand-stone/10 border-l-2 border-brand-bronze rounded-r-xl">
                  <span className="font-mono font-bold text-[10px] text-brand-bronze uppercase tracking-wider block mb-1">General Review Assessment</span>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {getQuestionnaireVerdict()}
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    onClick={handleResetQuestionnaire}
                    className="px-4 py-3 border border-brand-stone hover:border-brand-bronze text-brand-charcoal hover:text-brand-bronze rounded-xl transition-all font-semibold text-xs text-center cursor-pointer"
                  >
                    Reset Answers
                  </button>
                  <Link
                    to="/contact/"
                    className="px-4 py-3 bg-brand-bronze hover:bg-brand-bronze-light text-white rounded-xl transition-all font-semibold text-xs text-center flex-1"
                  >
                    Schedule Clinical 3D Scan
                  </Link>
                </div>
              </div>
            )}

            <p className="text-[10px] text-slate-400 italic text-center font-sans">
              Disclaimer: This questionnaire provides general information only and does not determine clinical eligibility. A face-to-face consultation, diagnostic charting, and 3D imaging are required before planning any implant treatment.
            </p>
          </div>

        </div>
      </section>

      {/* 4. COMPARISON TABLE */}
      <section className="py-16 md:py-24 bg-white border-b border-brand-stone/40" id="all-on-x-comparison">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-mono font-bold text-brand-bronze uppercase tracking-widest block">
              Treatment Comparison
            </span>
            <h2 className="font-display font-medium text-brand-charcoal text-3xl md:text-4xl tracking-tight">
              All-on-X vs. Traditional Dentures
            </h2>
            <p className="text-xs md:text-sm text-slate-500 leading-relaxed max-w-2xl mx-auto font-sans">
              Compare the functional, lifestyle, and physiological differences between fixed implant restorations and standard removable dentures.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-brand-stone shadow-sm">
            <table className="w-full text-left border-collapse text-xs md:text-sm font-sans bg-white min-w-[700px]">
              <thead>
                <tr className="bg-brand-stone/10 border-b border-brand-stone">
                  <th className="p-4 font-display font-bold text-brand-charcoal text-xs uppercase tracking-wider w-1/4">Key Structural Feature</th>
                  <th className="p-4 font-display font-bold text-brand-bronze text-xs uppercase tracking-wider w-3/8">All-on-X Fixed Arch</th>
                  <th className="p-4 font-display font-bold text-slate-500 text-xs uppercase tracking-wider w-3/8">Traditional Removable Dentures</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-stone/40">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-brand-stone/5 transition-colors">
                    <td className="p-4 font-bold text-brand-charcoal border-r border-brand-stone/30 bg-brand-stone/5">
                      {row.feature}
                    </td>
                    <td className="p-4 text-slate-700 leading-relaxed">
                      <div className="flex gap-2 items-start">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{row.allOnX}</span>
                      </div>
                    </td>
                    <td className="p-4 text-slate-500 leading-relaxed">
                      <div className="flex gap-2 items-start">
                        <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <span>{row.dentures}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* 5. RISKS & LIMITATIONS */}
      <section className="py-16 bg-brand-stone/10 border-b border-brand-stone/40 font-sans" id="all-on-x-risks">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white border border-brand-stone rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
              <h3 className="font-display font-bold text-brand-charcoal text-lg">
                Medically Responsible Risk Disclosures
              </h3>
            </div>
            
            <p className="text-xs text-slate-500 leading-relaxed">
              Dr. Massaband is committed to absolute clinical transparency. All-on-X is an invasive surgical procedure. It has outstanding success rates, but patients must understand the biological risks and lifetime cleaning requirements:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-600 pt-2">
              <div className="space-y-2">
                <strong className="text-brand-charcoal block">1. Bone Healing (No Smoking)</strong>
                <p className="text-slate-500 text-[11px] leading-relaxed">
                  Smoking restricts vascular micro-capillaries in the gums, doubling the risk of implant failure. Heavy smokers must commit to smoking pauses during surgery and integration.
                </p>
              </div>

              <div className="space-y-2">
                <strong className="text-brand-charcoal block">2. Fixed Restoration Hygiene</strong>
                <p className="text-slate-500 text-[11px] leading-relaxed">
                  Food particles can gather beneath the bridge. Patients must use specialized floss or water jet cleans daily. Neglecting cleaning can lead to peri-implantitis and bone loss.
                </p>
              </div>

              <div className="space-y-2">
                <strong className="text-brand-charcoal block">3. Prosthetic Wear & Tear</strong>
                <p className="text-slate-500 text-[11px] leading-relaxed">
                  While monolithic zirconia is incredibly strong, patient grinding can cause minor wear. Regular biological reviews are necessary to examine bite force dynamics.
                </p>
              </div>

              <div className="space-y-2">
                <strong className="text-brand-charcoal block">4. Surgical Healing Window</strong>
                <p className="text-slate-500 text-[11px] leading-relaxed">
                  In rare circumstances where osseointegration does not successfully take place, the implant must be removed, allowed to heal, and replaced. Suitability is not a guarantee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQs */}
      <section className="py-16 md:py-24 bg-white" id="all-on-x-faqs">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <div className="text-center space-y-4 mb-16">
            <span className="text-xs font-mono font-bold text-brand-bronze uppercase tracking-widest block">
              Patient Knowledge Hub
            </span>
            <h2 className="font-display font-medium text-brand-charcoal text-3xl tracking-tight">
              All-on-X FAQs
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
