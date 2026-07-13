import React from 'react';
import { CLINICAL_AFFILIATIONS, BRAND_CONFIG } from '../../data.ts';
import { SourceReferenceBadge } from '../SourceReferenceBadge.tsx';
import { PortraitPlaceholder } from './ProfileViews.tsx';
import { Link } from '../AppRouter.tsx';
import { Building2, ArrowUpRight, Activity, Calendar, ShieldAlert, ArrowLeft } from 'lucide-react';

export const ClinicalAffiliationsView: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 animate-reveal" id="clinical-affiliations-view">
      
      {/* Title */}
      <div className="max-w-3xl mb-12 md:mb-16 space-y-4">
        <span className="text-xs font-mono font-bold text-brand-bronze uppercase tracking-widest block">Practice Foundations</span>
        <h1 className="font-display font-medium text-brand-charcoal text-3xl md:text-5xl tracking-tight">
          Clinical Affiliations & Patient Portals
        </h1>
        <p className="text-sm text-slate-500 leading-relaxed font-sans">
          Dr. Liyan Massaband collaborates with two leading California dental structures. Treatment parameters, commercial bookings, and localized pricing exist exclusively on each respective practice portal.
        </p>
      </div>

      {/* Redirection Legal Banner (SEO Protection) */}
      <div className="bg-brand-ivory border border-brand-stone p-5 md:p-6 rounded-2xl mb-12 max-w-5xl text-slate-600 font-sans flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xs">
        <div className="space-y-1.5 max-w-2xl">
          <span className="text-xs font-mono font-bold text-brand-bronze uppercase tracking-wider block flex items-center gap-1.5">
            <ShieldAlert className="w-4 h-4" /> Separation of Commercial entities
          </span>
          <p className="text-xs text-slate-500 leading-relaxed">
            This authority platform does not collect dental diagnostics, treat patients, or compete against localized clinic search queries. Patient appointments and booking integrations are securely routed to the respective clinics below.
          </p>
        </div>
        
        <div className="bg-brand-bronze/5 px-3.5 py-2.5 rounded-lg text-xs font-mono text-center shrink-0 border border-brand-stone/40">
          <span className="text-brand-charcoal block font-bold">NPI COMPLIANCE</span>
          <span className="text-brand-bronze font-bold">LICENSE ACTIVE</span>
        </div>
      </div>

      {/* Grid of Clinicial Affiliation Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12" id="practices-list-grid">
        {CLINICAL_AFFILIATIONS.map((aff) => (
          <div 
            key={aff.id} 
            className="bg-brand-white border border-brand-stone hover:border-brand-bronze rounded-2xl p-6 md:p-8 relative overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-xs group"
            id={`practice-card-${aff.id}`}
          >
            {/* Top Border Glow Accent */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-brand-bronze/30 group-hover:bg-brand-bronze transition-colors duration-300" />
            
            <div className="space-y-4">
              {/* Beautiful Clinic Header Image representing the office */}
              <div className="aspect-[16/9] w-full rounded-xl overflow-hidden border border-brand-stone relative">
                <img 
                  src={aff.id === 'magnolia' 
                    ? 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800' 
                    : 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800'} 
                  alt={`${aff.name} Clinical Office Suite`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
              </div>

              <div className="flex justify-between items-start pt-2">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-brand-bronze">
                    <Building2 className="w-5 h-5 shrink-0" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider">{aff.location}</span>
                  </div>
                  <h3 className="font-display font-semibold text-brand-charcoal text-[20px] md:text-[22px] tracking-tight mt-1.5">
                    {aff.name}
                  </h3>
                  <p className="text-xs font-semibold text-slate-400 font-mono italic">
                    {aff.position}
                  </p>
                </div>

                <SourceReferenceBadge sourceIds={aff.id === 'magnolia' ? ['magnolia-bio'] : ['confidental-bio']} />
              </div>

              <p className="text-sm text-slate-500 leading-relaxed font-sans pt-3 border-t border-brand-stone/15">
                {aff.description}
              </p>

              {/* Highlights List */}
              <div className="space-y-2 pt-3 font-sans">
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block">Primary Restorations:</span>
                {aff.highlights.map((hlt, hIdx) => (
                  <div key={hIdx} className="flex gap-2 text-xs text-slate-600 font-medium items-center">
                    <span className="text-brand-bronze font-bold text-sm leading-none">•</span>
                    <span>{hlt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Link Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-6 border-t border-brand-stone/20 mt-8 font-sans text-xs">
              <a
                href={aff.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 border border-brand-stone bg-brand-stone/15 hover:border-brand-bronze text-brand-charcoal rounded-lg font-semibold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Explore Practice Website</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={aff.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 bg-brand-bronze hover:bg-brand-bronze-light text-brand-white rounded-lg font-semibold transition-colors flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Clinical Care</span>
              </a>
            </div>

          </div>
        ))}
      </div>

      {/* Double Portrait snap */}
      <div className="mt-16 pt-16 border-t border-brand-stone/20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <PortraitPlaceholder description="Beverly Hills Practice - Smile Design Studio Snapshot" landscape />
          <PortraitPlaceholder description="Burbank Practice - Digital Operatory Setup" landscape />
        </div>
      </div>

    </div>
  );
};

// 2. STANDALONE MAGNOLIA DENTISTRY AFFILIATION VIEW (/clinical-affiliations/magnolia-dentistry/)
export const MagnoliaDentistryView: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 animate-reveal" id="magnolia-dentistry-page">
      
      {/* Return link */}
      <div className="mb-8">
        <Link to="/clinical-affiliations/" className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-brand-bronze hover:text-brand-charcoal transition-colors">
          <ArrowLeft className="w-4 h-4" /> <span>Back to Affiliations</span>
        </Link>
      </div>

      {/* SEO Protection Badge & Legal Warning */}
      <div className="bg-brand-plum/5 border border-brand-plum/20 rounded-2xl p-5 mb-10 max-w-4xl text-brand-plum font-sans flex items-start gap-3.5">
        <ShieldAlert className="w-5 h-5 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider block">SEO Cannibalisation Control & Clinic Isolation Shield:</span>
          <p className="text-xs text-brand-plum/90 leading-relaxed">
            This workspace acts exclusively as Dr. Liyan Massaband's public-relations authority card. It does not advertise local Burbank treatment vouchers, host pricing lists, or compete with Magnolia Dentistry for local search queries such as "dentist in Burbank" or "teeth cleaning Burbank". All patient consultations, official charts, and scheduling pipelines exist directly on the clinic's certified domain.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Main description section */}
        <div className="lg:col-span-8 space-y-10">
          
          <div className="space-y-4 font-sans">
            <span className="text-xs font-mono font-bold text-brand-bronze uppercase tracking-widest block">Burbank Practice Affiliation</span>
            <h1 className="font-display font-medium text-brand-charcoal text-3xl md:text-5xl tracking-tight leading-tight">
              Dr. Liyan Massaband at Magnolia Dentistry
            </h1>
            <p className="text-slate-650 leading-relaxed text-sm md:text-base text-slate-600 font-sans">
              At Magnolia Dentistry in Burbank, Dr. Liyan Massaband serves as an associate general and cosmetic practitioner. The clinic is renowned for its family-focused, welcoming atmosphere, where advanced restorative diagnostics are paired with custom biological care.
            </p>
          </div>

          {/* Clinical Scope & Core Services */}
          <div className="space-y-5">
            <h2 className="font-display font-semibold text-brand-charcoal text-xl border-b border-brand-stone pb-2.5">
              Clinical Procedures & Practice Focus
            </h2>
            <p className="text-sm text-slate-500 font-sans leading-relaxed">
              Dr. Massaband coordinates a complete slate of family and restorative dental operations, emphasizing modern materials and patient-first pacing:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans">
              <div className="bg-brand-white border border-brand-stone p-5 rounded-2xl space-y-2">
                <h3 className="font-display font-semibold text-brand-charcoal text-sm">Pediatric & Family Prevention</h3>
                <p className="text-xs text-slate-500 leading-relaxed">Optimizing early salivary pH levels, sealant applications, and structural dentition guiding for children.</p>
              </div>
              <div className="bg-brand-white border border-brand-stone p-5 rounded-2xl space-y-2">
                <h3 className="font-display font-semibold text-brand-charcoal text-sm">General Restorative Systems</h3>
                <p className="text-xs text-slate-500 leading-relaxed">Composite white fillings, inlays/onlays, and conservative micro-ceramic crowns preserving sound enamel.</p>
              </div>
              <div className="bg-brand-white border border-brand-stone p-5 rounded-2xl space-y-2">
                <h3 className="font-display font-semibold text-brand-charcoal text-sm">Advanced Oral Diagnostics</h3>
                <p className="text-xs text-slate-500 leading-relaxed">Detailed caries calculations (CAMBRA), mineral balances, and periodontal microbiological audits.</p>
              </div>
              <div className="bg-brand-white border border-brand-stone p-5 rounded-2xl space-y-2">
                <h3 className="font-display font-semibold text-brand-charcoal text-sm">Patient-Paced Comfort Plans</h3>
                <p className="text-xs text-slate-500 leading-relaxed">Mitigating dental phobias using gradual mechanical steps, transparent tell-show-do protocols, and active control triggers.</p>
              </div>
            </div>
          </div>

          {/* State of the art equipment */}
          <div className="space-y-4 font-sans">
            <h2 className="font-display font-semibold text-brand-charcoal text-xl border-b border-brand-stone pb-2.5 flex items-center gap-2">
              <Activity className="w-5 h-5 text-brand-bronze" /> Diagnostic Integration & Modern Technology
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed">
              Magnolia Dentistry integrates state-of-the-art diagnostic instruments to provide patients with absolute visibility and treatment clarity:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-xs text-slate-600 leading-relaxed">
              <li><strong>Digital Radiography & Intraoral Scanning:</strong> Reduces radiation emissions while generating instantaneous, clear 3D representations of active skeletal and tooth contours.</li>
              <li><strong>Advanced Dental Laser Therapeutics:</strong> Minimally invasive laser operations for optimized soft-tissue health management with zero heat friction.</li>
              <li><strong>Micro-Endodontic Instruments:</strong> High-precision flexible rotary files and thermal sealants ensuring comfortable, predictable root canal results.</li>
            </ul>
          </div>

        </div>

        {/* Right column: schedule, routing, booking */}
        <div className="lg:col-span-4 space-y-8 font-sans">
          
          {/* Clinic Directory Identity Card */}
          <div className="bg-brand-white border border-brand-stone p-6 rounded-2xl space-y-4">
            <h3 className="font-display font-semibold text-brand-charcoal text-[17px] border-b border-brand-stone/30 pb-2 flex items-center gap-1.5">
              <Building2 className="w-5 h-5 text-brand-bronze" /> Location Coordinates
            </h3>
            
            <div className="space-y-3.5 text-xs text-slate-500 leading-relaxed">
              <div>
                <strong className="block text-brand-charcoal">Practice Location:</strong>
                <span>1005 N Glenoaks Blvd, Burbank, CA 91502</span>
              </div>
              
              <div>
                <strong className="block text-brand-charcoal">Dr. Massaband's General Roster:</strong>
                <span className="block">Collaborating selectively on scheduled weekly sessions. Call reception directly to align her calendar parameters.</span>
              </div>

              <div>
                <strong className="block text-brand-charcoal">Clinic Operating Hours:</strong>
                <span className="block font-mono">Monday — Friday: 9:00 AM — 5:00 PM</span>
                <span className="block font-mono">Saturday — Sunday: Closed</span>
              </div>
            </div>
          </div>

          {/* Core Booking Redirection Portal */}
          <div className="bg-brand-charcoal text-brand-white p-6 rounded-2xl space-y-4">
            <span className="text-[10px] font-mono text-brand-bronze uppercase block tracking-wider font-bold">APPROVED BOOKING CHANNEL</span>
            <h4 className="font-display font-semibold text-base leading-tight">Secure Certified Patient Appointments</h4>
            <p className="text-slate-300 text-xs leading-relaxed">
              Ready to secure care at the Burbank location? Submit details via our selection-based router or click below to launch the verified Magnolia Dentistry scheduler.
            </p>
            
            <div className="space-y-3 pt-2">
              <a
                href="https://www.magnoliadentistry.com/contact-us/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3 bg-brand-bronze hover:bg-brand-bronze-light text-brand-white rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-1.5 text-xs shadow-xs cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Go to Magnolia Booking Portal</span>
              </a>
              <Link
                to="/contact/"
                className="w-full text-center py-3 border border-brand-stone hover:bg-neutral-800 text-slate-350 rounded-lg font-semibold transition-all duration-200 block text-xs"
              >
                Use Patient Enquiry Router
              </Link>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

// 3. STANDALONE CONFIDENTAL BEVERLY HILLS AFFILIATION VIEW (/clinical-affiliations/confidental-beverly-hills/)
export const ConfiDentalBeverlyHillsView: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 animate-reveal" id="confidental-beverly-hills-page">
      
      {/* Return link */}
      <div className="mb-8">
        <Link to="/clinical-affiliations/" className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-brand-bronze hover:text-brand-charcoal transition-colors">
          <ArrowLeft className="w-4 h-4" /> <span>Back to Affiliations</span>
        </Link>
      </div>

      {/* SEO Protection Badge & Legal Warning */}
      <div className="bg-brand-plum/5 border border-brand-plum/20 rounded-2xl p-5 mb-10 max-w-4xl text-brand-plum font-sans flex items-start gap-3.5">
        <ShieldAlert className="w-5 h-5 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider block">SEO Cannibalisation Control & Clinic Isolation Shield:</span>
          <p className="text-xs text-brand-plum/90 leading-relaxed">
            This workspace acts exclusively as Dr. Liyan Massaband's public-relations authority card. It does not advertise local Beverly Hills treatment vouchers, host cosmetic pricing lists, or compete with ConfiDental Beverly Hills for local search queries such as "cosmetic dentist Beverly Hills" or "dental veneers Beverly Hills". All patient consultations, official charts, and scheduling pipelines exist directly on the clinic's certified domain.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Main description section */}
        <div className="lg:col-span-8 space-y-10">
          
          <div className="space-y-4 font-sans">
            <span className="text-xs font-mono font-bold text-brand-bronze uppercase tracking-widest block">Beverly Hills Smile Design collaboration</span>
            <h1 className="font-display font-medium text-brand-charcoal text-3xl md:text-5xl tracking-tight leading-tight">
              Dr. Liyan Massaband at ConfiDental Beverly Hills
            </h1>
            <p className="text-slate-650 leading-relaxed text-sm md:text-base text-slate-600 font-sans">
              At ConfiDental in Beverly Hills, Dr. Liyan Massaband serves as the Lead Clinical Practitioner. This elite boutique smile-design studio is celebrated for its state-of-the-art reconstructive and cosmetic smile makeovers, combining physiological joint dynamics with advanced biological aesthetics.
            </p>
          </div>

          {/* Clinical Scope & Core Services */}
          <div className="space-y-5">
            <h2 className="font-display font-semibold text-brand-charcoal text-xl border-b border-brand-stone pb-2.5">
              Elite Cosmetic & Biological Smile Reconstruction
            </h2>
            <p className="text-sm text-slate-500 font-sans leading-relaxed">
              Dr. Massaband utilizes micro-invasive restoration technologies to hand-craft biological adjustments representing her patient's natural facial symmetry:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans">
              <div className="bg-brand-white border border-brand-stone p-5 rounded-2xl space-y-2">
                <h3 className="font-display font-semibold text-brand-charcoal text-sm">Ultra-Thin Porcelain Veneers</h3>
                <p className="text-xs text-slate-500 leading-relaxed">Designing masterwork glass-ceramics (0.2mm to 0.3mm) mimicking the natural refraction, hue, and micro-textures of enamel.</p>
              </div>
              <div className="bg-brand-white border border-brand-stone p-5 rounded-2xl space-y-2">
                <h3 className="font-display font-semibold text-brand-charcoal text-sm">TMJ & Neuromuscular Joint Alignment</h3>
                <p className="text-xs text-slate-500 leading-relaxed">Balancing teeth bites with muscle dynamics and jaw joints to prevent premature wear and chronic facial strains.</p>
              </div>
              <div className="bg-brand-white border border-brand-stone p-5 rounded-2xl space-y-2">
                <h3 className="font-display font-semibold text-brand-charcoal text-sm">Implant Restorations & Immediate Reconstruction</h3>
                <p className="text-xs text-slate-500 leading-relaxed">High-performance full arch loading (Smile in a Day) prioritizing deep anatomical osseointegration and biocompatibility.</p>
              </div>
              <div className="bg-brand-white border border-brand-stone p-5 rounded-2xl space-y-2">
                <h3 className="font-display font-semibold text-brand-charcoal text-sm">Biological SMILE Aesthetics</h3>
                <p className="text-xs text-slate-500 leading-relaxed">Integrating interpupillary lines, gingival frames, and phonetic vocal dynamics for stable operational harmony.</p>
              </div>
            </div>
          </div>

          {/* Technology focus */}
          <div className="space-y-4 font-sans">
            <h2 className="font-display font-semibold text-brand-charcoal text-xl border-b border-brand-stone pb-2.5 flex items-center gap-2">
              <Activity className="w-5 h-5 text-brand-bronze" /> Biometric Biomaterials & Advanced Dental Science
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed">
              ConfiDental Beverly Hills utilizes next-generation materials and tools to execute reconstructive smile procedures:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-xs text-slate-600 leading-relaxed">
              <li><strong>3D Digital CAD/CAM Mapping:</strong> Custom milling and virtual rendering of crowns and veneers for perfect clinical fitment.</li>
              <li><strong>Feldspathic Glass-Ceramic Laminates:</strong> Elite materials that maintain natural glass translucencies rather than flat, synthetic whites.</li>
              <li><strong>Intraoral Diagnostic Photography:</strong> Full facial and diagnostic photography setups used to map dental trajectories against skeletal axes.</li>
            </ul>
          </div>

        </div>

        {/* Right column: schedule, routing, booking */}
        <div className="lg:col-span-4 space-y-8 font-sans">
          
          {/* Clinic Directory Identity Card */}
          <div className="bg-brand-white border border-brand-stone p-6 rounded-2xl space-y-4">
            <h3 className="font-display font-semibold text-brand-charcoal text-[17px] border-b border-brand-stone/30 pb-2 flex items-center gap-1.5">
              <Building2 className="w-5 h-5 text-brand-bronze" /> Location Coordinates
            </h3>
            
            <div className="space-y-3.5 text-xs text-slate-500 leading-relaxed">
              <div>
                <strong className="block text-brand-charcoal">Studio Location:</strong>
                <span>462 N Linden Dr Suite 244, Beverly Hills, CA 90210</span>
              </div>
              
              <div>
                <strong className="block text-brand-charcoal">Dr. Massaband's Active Roster:</strong>
                <span className="block">Lead clinical cosmetic designer coordinates private diagnostic and procedural blocks. Contact administration for current week availability.</span>
              </div>

              <div>
                <strong className="block text-brand-charcoal">Clinic Operating Hours:</strong>
                <span className="block font-mono">Monday — Friday: 9:00 AM — 5:00 PM</span>
                <span className="block font-mono">Saturday — Sunday: Closed</span>
              </div>
            </div>
          </div>

          {/* Core Booking Redirection Portal */}
          <div className="bg-brand-charcoal text-brand-white p-6 rounded-2xl space-y-4">
            <span className="text-[10px] font-mono text-brand-bronze uppercase block tracking-wider font-bold">APPROVED BOOKING CHANNEL</span>
            <h4 className="font-display font-semibold text-base leading-tight">Secure Certified Smile Consultations</h4>
            <p className="text-slate-300 text-xs leading-relaxed">
              Ready to seek advanced cosmetic smile treatments? Submit details via our selection-based router or click below to launch the verified ConfiDental Beverly Hills scheduler.
            </p>
            
            <div className="space-y-3 pt-2">
              <a
                href="https://confidentalbeverlyhills.com/contact/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3 bg-brand-bronze hover:bg-brand-bronze-light text-brand-white rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-1.5 text-xs shadow-xs cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Go to ConfiDental Booking Portal</span>
              </a>
              <Link
                to="/contact/"
                className="w-full text-center py-3 border border-brand-stone hover:bg-neutral-800 text-slate-350 rounded-lg font-semibold transition-all duration-200 block text-xs"
              >
                Use Patient Enquiry Router
              </Link>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

