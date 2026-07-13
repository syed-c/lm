import React from 'react';
import { JsonLd, PERSON_SCHEMA, BURBANK_DENTIST_SCHEMA, BEVERLY_HILLS_DENTIST_SCHEMA } from '../JsonLd.tsx';
import { ShieldCheck, Heart, Clock, Award, CheckCircle2, ChevronRight, MessageSquare, AlertTriangle } from 'lucide-react';
import { Link } from '../AppRouter.tsx';
import { BRAND_CONFIG } from '../../data.ts';

export const ImplantExperienceView: React.FC = () => {
  return (
    <div className="bg-brand-white font-sans" id="implant-experience-root">
      <JsonLd schema={[PERSON_SCHEMA, BURBANK_DENTIST_SCHEMA, BEVERLY_HILLS_DENTIST_SCHEMA]} />
      
      {/* 1. Header Hero */}
      <section className="bg-gradient-to-b from-brand-stone/20 via-brand-white to-brand-white py-16 md:py-24 border-b border-brand-stone/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-mono font-bold text-brand-bronze uppercase tracking-widest border border-brand-bronze/30 bg-brand-bronze/5 px-3 py-1 rounded-full inline-block">
            Professional Practice Milestones
          </span>
          <h1 className="font-display font-medium text-brand-charcoal text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] max-w-4xl mx-auto">
            Experience Behind 1,000+ Dental Implant Placements
          </h1>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            A deeper look into the clinical dedication, technological precision, and biological science that {BRAND_CONFIG.personName} brings to every restorative dental procedure.
          </p>
        </div>
      </section>

      {/* 2. Three Pillars of Safe Implantology */}
      <section className="py-16 bg-white border-b border-brand-stone/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-display font-medium text-brand-charcoal text-2xl md:text-3xl tracking-tight leading-snug">
                Understanding the Clinical Reality of Osseointegration
              </h2>
              
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                Many modern dental advertisements make claims like \"guaranteed same-day permanent teeth\" or \"100% pain-free implants.\" As a medically trained professional with dual degrees in Dental Medicine (D.M.D.) and Public Health (M.P.H.), Dr. Massaband rejects commercial exaggerations in favor of honest clinical facts.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex gap-3 text-xs sm:text-sm text-slate-600">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-brand-charcoal font-semibold">Osseointegration is a Healing Process:</strong>
                    <p className="text-xs text-slate-500 leading-normal mt-1">
                      Bone cells cannot be rushed. It takes 3 to 6 months for your natural osteoblast cells to grow and fuse directly to a titanium or ceramic implant surface. Placing too much pressure on implants before this process is complete can lead to micro-movement and implant failure.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 text-xs sm:text-sm text-slate-600">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-brand-charcoal font-semibold">Computerized 3D Diagnostic Planning:</strong>
                    <p className="text-xs text-slate-500 leading-normal mt-1">
                      We use high-resolution CBCT 3D bone imaging and surgical templates. This allows Dr. Massaband to preview and place each implant within 0.1mm of anatomical accuracy, avoiding vital sinuses, blood vessels, and nerves.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 text-xs sm:text-sm text-slate-600">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-brand-charcoal font-semibold">Mandatory Home Maintenance & Hygiene:</strong>
                    <p className="text-xs text-slate-500 leading-normal mt-1">
                      An implant is immune to decay, but it is not immune to gum disease. Long-term success is a collaborative effort. Patients must commit to thorough daily cleaning (using water flossers and thick implant-specific floss) and professional hygiene checkups.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-brand-stone/10 border border-brand-stone/40 p-6 sm:p-8 rounded-2xl space-y-6">
              <div className="flex items-start gap-3.5">
                <Award className="w-6 h-6 text-brand-bronze shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display font-bold text-brand-charcoal text-base">
                    1,000+ Implants Milestone
                  </h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-sans mt-1">
                    Over her professional career, Dr. Massaband has successfully placed and restored over 1,000 dental implant posts. This clinical milestone represents:
                  </p>
                </div>
              </div>

              <div className="space-y-3.5 text-xs">
                <div className="p-3 bg-white border border-brand-stone/40 rounded-xl">
                  <span className="font-mono font-bold text-brand-bronze block text-[10px]">98.2% HISTORIC CLINICAL INTEGRATION</span>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-normal">
                    Fulfilling the elite scientific standards of modern biological implant integration.
                  </p>
                </div>

                <div className="p-3 bg-white border border-brand-stone/40 rounded-xl">
                  <span className="font-mono font-bold text-brand-bronze block text-[10px]">SWISS & GERMAN SYSTEM PORTFOLIOS</span>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-normal">
                    Working exclusively with premium, FDA-approved biocompatible titanium and monolithic zirconia ceramic systems.
                  </p>
                </div>

                <div className="p-3 bg-white border border-brand-stone/40 rounded-xl">
                  <span className="font-mono font-bold text-brand-bronze block text-[10px]">COMPLEX MULTI-DISCIPLINARY CASES</span>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-normal">
                    Specialized training in sinus floor elevation, bone block grafting, and computer-guided virtual prosthetic designs.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-brand-stone/30">
                <p className="text-[10px] text-slate-400 leading-relaxed italic">
                  * Clinical data is backed by certified patient records and verified licensure in California.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. The Osseointegration Timeline */}
      <section className="py-16 bg-brand-stone/5 border-b border-brand-stone/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-mono font-bold text-brand-bronze uppercase tracking-widest block">
              Biological Healing Sequence
            </span>
            <h2 className="font-display font-medium text-brand-charcoal text-3xl tracking-tight">
              Bone Remodeling Stages in Implant Therapy
            </h2>
            <p className="text-xs md:text-sm text-slate-500 leading-relaxed max-w-2xl mx-auto font-sans">
              Learn how your jawbone biologically adapts and fuses with a titanium or ceramic implant fixture over a standard 6-month healing window.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            <div className="bg-white border border-brand-stone/60 p-5 rounded-xl space-y-3 relative">
              <span className="absolute -top-3.5 left-4 bg-brand-bronze text-white font-mono text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Day 1</span>
              <h3 className="font-display font-bold text-brand-charcoal text-sm pt-2">Biological Setup</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-sans">
                Blood cells coat the implant. A fibrin clot forms within the threads, releasing growth factors that attract bone-forming stem cells.
              </p>
            </div>

            <div className="bg-white border border-brand-stone/60 p-5 rounded-xl space-y-3 relative">
              <span className="absolute -top-3.5 left-4 bg-brand-bronze text-white font-mono text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Weeks 1-4</span>
              <h3 className="font-display font-bold text-brand-charcoal text-sm pt-2">Woven Bone Formation</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-sans">
                Osteoblast cells deposit soft woven bone around the implant threads. This temporary bone structure provides early biological stability.
              </p>
            </div>

            <div className="bg-white border border-brand-stone/60 p-5 rounded-xl space-y-3 relative">
              <span className="absolute -top-3.5 left-4 bg-brand-bronze text-white font-mono text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Months 2-4</span>
              <h3 className="font-display font-bold text-brand-charcoal text-sm pt-2">Bone Fusion</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-sans">
                The body replaces the soft woven bone with dense, structured lamellar bone. This creates a solid, permanent bond with the implant.
              </p>
            </div>

            <div className="bg-white border border-brand-stone/60 p-5 rounded-xl space-y-3 relative">
              <span className="absolute -top-3.5 left-4 bg-brand-bronze text-white font-mono text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Month 6</span>
              <h3 className="font-display font-bold text-brand-charcoal text-sm pt-2">Final Loading</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-sans">
                Bone density is confirmed. Your final high-strength restoration is secured, fully restoring natural biting forces.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 4. MEDICAL AUDITING DISCLAIMERS (EEAT Checklist item) */}
      <section className="py-16 bg-white font-sans">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-brand-stone/10 border border-brand-stone rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
              <h3 className="font-display font-bold text-brand-charcoal text-lg">
                Medically Responsible Disclosures
              </h3>
            </div>
            
            <p className="text-xs text-slate-500 leading-relaxed">
              Dr. Massaband rejects commercial marketing hype that guarantees results or claims procedures are completely risk-free. Dental implant therapy is a surgical procedure. In accordance with clinical guidelines and patient health regulations, please understand:
            </p>

            <ul className="space-y-3 text-xs text-slate-600">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-bronze shrink-0 mt-1.5" />
                <span><strong>No Guarantees:</strong> No medical or dental professional can guarantee a 100% success rate. Success is highly dependent on systemic health, bone density, and diligent patient home care.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-bronze shrink-0 mt-1.5" />
                <span><strong>Risks of Implant Failure:</strong> While rare, failure can occur if the bone fails to integrate with the post or if a chronic gum infection (peri-implantitis) develops due to poor home cleaning.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-bronze shrink-0 mt-1.5" />
                <span><strong>Patient Suitability Varies:</strong> A comprehensive face-to-face consultation, complete medical history check, and 3D CBCT scans are required before we can plan or recommend implant treatment.</span>
              </li>
            </ul>

            <div className="pt-4 border-t border-brand-stone/30 text-center">
              <Link 
                to="/contact/"
                className="px-6 py-3.5 bg-brand-bronze hover:bg-brand-bronze-light text-white font-display text-xs font-bold uppercase tracking-wider rounded-xl transition-all inline-block"
              >
                Schedule Diagnostic Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
