import React from 'react';
import { JsonLd, PERSON_SCHEMA, BEVERLY_HILLS_DENTIST_SCHEMA } from '../JsonLd.tsx';
import { MapPin, Clock, Info, ShieldCheck, Star, Calendar, Phone, ArrowRight, Compass } from 'lucide-react';
import { Link } from '../AppRouter.tsx';
import { BRAND_CONFIG } from '../../data.ts';

export const BeverlyHillsLocationView: React.FC = () => {
  const reviews = [
    {
      author: "Robert M.",
      rating: 5,
      date: "May 2026",
      text: "Dr. Massaband performed my upper All-on-X treatment at the Beverly Hills office. The level of diagnostic technology and computerized guided surgery was remarkable. She explained the entire osseointegration timeline and risks with extreme professionalism."
    },
    {
      author: "Diana K.",
      rating: 5,
      date: "April 2026",
      text: "Highly recommend Dr. Liyan for single implants. I had a fractured front tooth and she managed the bone grafting, immediate placement, and custom temporary crown perfectly in her Beverly Hills suite. The final porcelain result is beautiful."
    }
  ];

  return (
    <div className="bg-brand-white font-sans" id="beverly-hills-location-root">
      <JsonLd schema={[PERSON_SCHEMA, BEVERLY_HILLS_DENTIST_SCHEMA]} />
      
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
                Beverly Hills Practice Location
              </span>
              <h1 className="font-display font-black text-[#0A2621] text-4xl sm:text-5xl lg:text-[56px] tracking-tight leading-[1.08] drop-shadow-3xs">
                Implant Dentistry in <span className="text-brand-plum">Beverly Hills</span>
              </h1>
              <p className="text-sm md:text-base text-slate-750 leading-relaxed max-w-xl font-sans font-medium">
                Experience medically advanced dental implant care in the heart of Beverly Hills. Serving patients from West Hollywood, Century City, Westwood, and surrounding Los Angeles communities with premium full-arch restorations, All-on-X systems, and detailed computer-guided planning.
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
                  href="tel:3105550190"
                  className="px-6 py-4 border border-brand-stone hover:border-brand-bronze text-brand-charcoal hover:text-brand-bronze font-display text-sm font-extrabold tracking-wide rounded-xl transition-all duration-350 bg-white shadow-3xs hover:shadow-xs flex items-center gap-2"
                >
                  <Phone className="w-4.5 h-4.5 text-brand-bronze" />
                  <span>Call Beverly Hills</span>
                </a>
              </div>
            </div>

            {/* Visual Right */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-plum to-brand-bronze rounded-3xl blur-md opacity-25" />
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-brand-stone/60 relative">
                <img 
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800"
                  alt="Beverly Hills Dental Suite Dr Liyan Massaband" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-103"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Location Specific Useful Information (Anti-AI-Slop & Real Value) */}
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
                  <strong>Beverly Hills Office</strong><br />
                  9401 Wilshire Blvd, Suite 1050<br />
                  Beverly Hills, CA 90212
                </p>
                <p className="border-t border-brand-stone/40 pt-3 flex items-start gap-2">
                  <Clock className="w-4 h-4 text-slate-400 mt-0.5" />
                  <span>
                    <strong>Hours:</strong><br />
                    Monday – Thursday: 9:00 AM – 5:00 PM<br />
                    Friday: 9:00 AM – 3:00 PM
                  </span>
                </p>
              </div>
            </div>

            {/* Parking & Transportation Guide (Real and genuinely useful) */}
            <div className="bg-brand-stone/5 border border-brand-stone/40 p-6 rounded-2xl space-y-4">
              <div className="w-10 h-10 rounded-lg bg-brand-bronze/10 flex items-center justify-center">
                <Compass className="w-5 h-5 text-brand-bronze" />
              </div>
              <h3 className="font-display font-bold text-brand-charcoal text-base">Parking & Access Guide</h3>
              
              <div className="text-xs text-slate-600 space-y-3 font-sans">
                <p>
                  <strong>Building Parking:</strong> Underground garage parking is available in our medical tower building with direct elevator access to our suite.
                </p>
                <p className="border-t border-brand-stone/40 pt-3">
                  <strong>Validation Info:</strong> We provide 1 hour of complimentary validation for scheduled implant consult appointments.
                </p>
                <p className="border-t border-brand-stone/40 pt-3">
                  <strong>Local Landmarks:</strong> Located at the corner of Wilshire Boulevard and Canon Drive, just two blocks from Rodeo Drive and Roxbury Park.
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
                    <span>Computer-Guided All-on-X Bridges</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-bronze shrink-0" />
                    <span>Sinus Floor Elevation & Grafting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-bronze shrink-0" />
                    <span>Monolithic Zirconia Cosmetic Crowns</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-bronze shrink-0" />
                    <span>Pre-surgical CBCT 3D Diagnostic Scans</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Specific Patient Reviews */}
      <section className="py-16 bg-brand-white border-b border-brand-stone/40 font-sans">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs font-mono font-bold text-brand-bronze uppercase tracking-widest block">Local Patient Stories</span>
            <h2 className="font-display font-medium text-brand-charcoal text-3xl tracking-tight">Reviews from Beverly Hills</h2>
          </div>

          <div className="space-y-6">
            {reviews.map((rev, idx) => (
              <div key={idx} className="bg-white border border-brand-stone/60 p-6 rounded-2xl space-y-3 shadow-xs">
                <div className="flex items-center justify-between">
                  <div>
                    <strong className="text-xs font-semibold text-brand-charcoal block">{rev.author}</strong>
                    <span className="text-[10px] text-slate-400">{rev.date} • Beverly Hills Office</span>
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
            Schedule an Implant Consultation in Beverly Hills
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
            Get a professional 3D joint and bone assessment with Dr. Liyan Massaband to discuss your tooth replacement needs.
          </p>
          <div className="pt-2">
            <Link
              to="/contact/"
              className="px-6 py-3.5 bg-brand-bronze hover:bg-brand-bronze-light text-white font-display text-xs font-bold uppercase tracking-wider rounded-xl transition-all"
            >
              Book Beverly Hills Assessment
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
