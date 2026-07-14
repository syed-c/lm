import React from 'react';
import { JsonLd, PERSON_SCHEMA, BURBANK_DENTIST_SCHEMA } from '../JsonLd.tsx';
import { MapPin, Clock, Info, ShieldCheck, Star, Calendar, Phone, ArrowRight, Compass } from 'lucide-react';
import { Link } from '../AppRouter.tsx';
import { BRAND_CONFIG } from '../../data.ts';

export const BurbankLocationView: React.FC = () => {
  const reviews = [
    {
      author: "Sandra L.",
      rating: 5,
      date: "June 2026",
      text: "I was extremely anxious about replacing my two lower missing molars. Dr. Massaband placed two implants at her Burbank suite. Her explanation of bone healing was so reassuring. The clinical care is top-tier and the space is so warm."
    },
    {
      author: "Thomas P.",
      rating: 5,
      date: "May 2026",
      text: "The best dental experience I have ever had. Dr. Massaband placed a dental implant to replace my broken premolar. She uses computerized planning so you see exactly where the titanium anchor is going before they start. Unbelievable precision."
    }
  ];

  return (
    <div className="bg-brand-white font-sans" id="burbank-location-root">
      <JsonLd schema={[PERSON_SCHEMA, BURBANK_DENTIST_SCHEMA]} />
      
      {/* 1. Header Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F2ECE1] via-brand-white to-brand-white py-16 md:py-24 border-b border-brand-stone/50">
        <div className="absolute inset-0 bg-dot-grid opacity-75 pointer-events-none" />
        
        {/* Glowing visual abstract elements */}
        <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full bg-teal-glow pointer-events-none opacity-80" />
        <div className="absolute -bottom-20 -left-10 w-[350px] h-[350px] rounded-full bg-gold-glow pointer-events-none opacity-90" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-7">
              <span className="text-xs font-mono font-extrabold text-[#916E3B] uppercase tracking-widest border border-brand-plum/40 bg-brand-plum/5 px-3.5 py-1.5 rounded-full inline-block shadow-2xs">
                Burbank Practice Location
              </span>
              <h1 className="font-display font-black text-[#0A2621] text-4xl sm:text-5xl lg:text-[56px] tracking-tight leading-[1.08] drop-shadow-3xs">
                Implant Dentistry in <span className="text-brand-plum">Burbank</span>
              </h1>
              <p className="text-sm md:text-base text-slate-750 leading-relaxed max-w-xl font-sans font-medium">
                Affiliated with Magnolia Dentistry, our Burbank clinic brings elite dental implant care to Glendale, Studio City, Toluca Lake, Sherman Oaks, and surrounding San Fernando Valley communities. Utilizing modern biological concepts to restore solid teeth and smile comfort.
              </p>
              
              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  to="/contact/"
                  className="px-6 py-4 bg-brand-bronze hover:bg-brand-bronze-light text-white font-display text-sm font-extrabold tracking-wide rounded-xl transition-all duration-350 shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2"
                >
                  <Calendar className="w-4.5 h-4.5 text-white" />
                  <span>Request Appointment</span>
                </Link>
                <a
                  href="tel:8185550144"
                  className="px-6 py-4 border border-brand-stone hover:border-brand-bronze text-brand-charcoal hover:text-brand-bronze font-display text-sm font-extrabold tracking-wide rounded-xl transition-all duration-350 bg-white shadow-3xs hover:shadow-xs flex items-center gap-2"
                >
                  <Phone className="w-4.5 h-4.5 text-brand-bronze" />
                  <span>Call Burbank</span>
                </a>
              </div>
            </div>

            {/* Visual Right */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-plum to-brand-bronze rounded-3xl blur-md opacity-25" />
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-brand-stone/60 relative">
                <img 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
                  alt="Burbank Magnolia Dentistry Practice Suite" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-103"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Location Specific Information */}
      <section className="py-16 bg-white border-b border-brand-stone/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Address & Hours */}
            <div className="bg-brand-stone/5 border border-brand-stone/40 p-6 rounded-2xl space-y-4">
              <div className="w-10 h-10 rounded-lg bg-brand-bronze/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-brand-bronze" />
              </div>
              <h3 className="font-display font-bold text-brand-charcoal text-base">Practice Location Details</h3>
              
              <div className="text-xs text-slate-600 space-y-3 font-sans">
                <p>
                  <strong>Burbank Office (Magnolia Dentistry)</strong><br />
                  1923 W Magnolia Blvd<br />
                  Burbank, CA 91506
                </p>
                <p className="border-t border-brand-stone/40 pt-3 flex items-start gap-2">
                  <Clock className="w-4 h-4 text-slate-400 mt-0.5" />
                  <span>
                    <strong>Hours:</strong><br />
                    Tuesday – Friday: 8:30 AM – 5:30 PM<br />
                    Saturday: By Appointment Only
                  </span>
                </p>
              </div>
            </div>

            {/* Parking & Directions */}
            <div className="bg-brand-stone/5 border border-brand-stone/40 p-6 rounded-2xl space-y-4">
              <div className="w-10 h-10 rounded-lg bg-brand-bronze/10 flex items-center justify-center">
                <Compass className="w-5 h-5 text-brand-bronze" />
              </div>
              <h3 className="font-display font-bold text-brand-charcoal text-base">Parking & Access Guide</h3>
              
              <div className="text-xs text-slate-600 space-y-3 font-sans">
                <p>
                  <strong>Complimentary Parking:</strong> Free dedicated client parking is available directly behind our building off the alley.
                </p>
                <p className="border-t border-brand-stone/40 pt-3">
                  <strong>Street Parking:</strong> Ample, unrestricted free street parking is also available directly along Magnolia Boulevard.
                </p>
                <p className="border-t border-brand-stone/40 pt-3">
                  <strong>Local Landmarks:</strong> Situated in beautiful Magnolia Park, surrounded by local boutiques, Burbank Town Center, and Walt Disney Studios.
                </p>
              </div>
            </div>

            {/* Offered Implant Treatments */}
            <div className="bg-brand-stone/5 border border-brand-stone/40 p-6 rounded-2xl space-y-4">
              <div className="w-10 h-10 rounded-lg bg-brand-bronze/10 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-brand-bronze" />
              </div>
              <h3 className="font-display font-bold text-brand-charcoal text-base">Implant Specialties Available</h3>
              
              <div className="text-xs text-slate-600 space-y-3 font-sans">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-bronze shrink-0" />
                    <span>Single tooth computer-guided implants</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-bronze shrink-0" />
                    <span>Socket preservation & local bone grafts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-bronze shrink-0" />
                    <span>Snap-on implant supported dentures</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-bronze shrink-0" />
                    <span>Advanced digital 3D intraoral mapping</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2B. LOCAL CLINICAL GALLERY & TECHNOLOGY SHOWCASE (Magnolia Dentistry Burbank) */}
      <section className="py-16 bg-brand-stone/5 border-b border-brand-stone/40" id="burbank-clinic-gallery">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-xs font-mono font-bold text-brand-bronze uppercase tracking-widest block">Burbank Clinical Environment</span>
            <h2 className="font-display font-medium text-brand-charcoal text-2xl md:text-3xl tracking-tight">Warm Architectural Suites & Precise Guided Systems</h2>
            <p className="text-xs text-slate-500 max-w-xl">
              Explore the comfortable environment and state-of-the-art restorative technologies designed to maximize safety, comfort, and natural results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="border border-brand-stone rounded-2xl overflow-hidden bg-white shadow-3xs group flex flex-col justify-between">
              <div>
                <div className="aspect-[4/3] w-full overflow-hidden border-b border-brand-stone/30 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600" 
                    alt="Burbank Magnolia Dentistry Treatment Suite" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />
                </div>
                <div className="p-6 space-y-2">
                  <span className="text-[10px] font-mono font-bold text-brand-bronze uppercase tracking-wider block">CLINICAL OPERATING ROOM</span>
                  <h4 className="font-display font-bold text-brand-charcoal text-base">Comfortable Treatment Suites</h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    Modern restorative suite detailed with digital intraoral diagnostic photography, medical-grade sterilizers, and relaxing ergonomic chairs.
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-brand-stone rounded-2xl overflow-hidden bg-white shadow-3xs group flex flex-col justify-between">
              <div>
                <div className="aspect-[4/3] w-full overflow-hidden border-b border-brand-stone/30 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1579684389782-64d84b5e905d?auto=format&fit=crop&q=80&w=600" 
                    alt="Computerized biological planning" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />
                </div>
                <div className="p-6 space-y-2">
                  <span className="text-[10px] font-mono font-bold text-brand-bronze uppercase tracking-wider block">GUIDED PLAN DETAILS</span>
                  <h4 className="font-display font-bold text-brand-charcoal text-base">Clinician Surgical Guidance</h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    Dr. Massaband utilizes high-magnification surgical equipment and computer-modeled drill guides to ensure sub-millimeter clinical accuracy.
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-brand-stone rounded-2xl overflow-hidden bg-white shadow-3xs group flex flex-col justify-between">
              <div>
                <div className="aspect-[4/3] w-full overflow-hidden border-b border-brand-stone/30 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600" 
                    alt="Comfortable Burbank Consultation suite" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />
                </div>
                <div className="p-6 space-y-2">
                  <span className="text-[10px] font-mono font-bold text-brand-bronze uppercase tracking-wider block">RELAXED ENVIRONMENT</span>
                  <h4 className="font-display font-bold text-brand-charcoal text-base">High-Comfort Intake Lounges</h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    Warm, beautiful wood-toned architectural suites designed to relieve clinical dental stress and facilitate comfortable therapeutic consultation.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Burbank Reviews */}
      <section className="py-16 bg-brand-white border-b border-brand-stone/40 font-sans">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs font-mono font-bold text-brand-bronze uppercase tracking-widest block">Local Patient Stories</span>
            <h2 className="font-display font-medium text-brand-charcoal text-3xl tracking-tight">Reviews from Burbank</h2>
          </div>

          <div className="space-y-6">
            {reviews.map((rev, idx) => (
              <div key={idx} className="bg-white border border-brand-stone/60 p-6 rounded-2xl space-y-3 shadow-xs">
                <div className="flex items-center justify-between">
                  <div>
                    <strong className="text-xs font-semibold text-brand-charcoal block">{rev.author}</strong>
                    <span className="text-[10px] text-slate-400">{rev.date} • Burbank Office</span>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-brand-bronze text-brand-bronze" />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed italic">
                  \"{rev.text}\"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Contact redirection */}
      <section className="py-16 bg-white font-sans">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <h2 className="font-display font-medium text-brand-charcoal text-2xl md:text-3xl tracking-tight">
            Schedule an Implant Consultation in Burbank
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
            Discuss your tooth replacement options with Dr. Massaband in our beautiful Magnolia Park Burbank office.
          </p>
          <div className="pt-2">
            <Link
              to="/contact/"
              className="px-6 py-3.5 bg-brand-bronze hover:bg-brand-bronze-light text-white font-display text-xs font-bold uppercase tracking-wider rounded-xl transition-all"
            >
              Book Burbank Assessment
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
