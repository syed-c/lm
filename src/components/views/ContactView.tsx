import React from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Compass, MessageSquare, Calendar } from 'lucide-react';
import { BRAND_CONFIG } from '../../data.ts';
import { EnquiryForm } from '../EnquiryForm.tsx';
import { Link } from '../AppRouter.tsx';

export const ContactView: React.FC = () => {
  return (
    <div className="bg-brand-white font-sans" id="contact-view-canvas">
      
      {/* 1. Header Hero Banner */}
      <section className="bg-gradient-to-b from-brand-stone/30 via-brand-white to-brand-white py-16 md:py-20 border-b border-brand-stone/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-mono font-bold text-brand-bronze uppercase tracking-widest border border-brand-bronze/30 bg-brand-bronze/5 px-3 py-1 rounded-full inline-block">
            Inquiries & Scheduling
          </span>
          <h1 className="font-display font-medium text-brand-charcoal text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-none">
            Contact Dr. Liyan Massaband
          </h1>
          <p className="text-sm md:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Discuss tooth replacement, guided surgery, or All-on-X clinical evaluations. Select your nearest custom-equipped practice location or submit professional inquiries.
          </p>
        </div>
      </section>

      {/* 2. Dual Location Detail Blocks */}
      <section className="py-12 bg-white border-b border-brand-stone/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Beverly Hills Clinic Coordinates */}
            <div className="bg-brand-stone/5 border border-brand-stone/50 rounded-2xl p-6 sm:p-8 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-brand-bronze uppercase tracking-widest bg-brand-bronze/5 border border-brand-bronze/20 px-3 py-1 rounded-full">
                    Beverly Hills Suite
                  </span>
                  <MapPin className="w-5 h-5 text-brand-bronze" />
                </div>
                
                <h3 className="font-display font-bold text-brand-charcoal text-xl">ConfiDental Beverly Hills</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-sans">
                  Our flagship West Los Angeles dental suite specializes in detailed computer-guided digital diagnostics, bone building grafts, and immediate full-arch All-on-X surgical placements.
                </p>

                <div className="space-y-3.5 pt-4 border-t border-brand-stone/30 text-xs text-slate-600 font-sans">
                  <p className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                    <span>
                      <strong>Address:</strong><br />
                      9401 Wilshire Blvd, Suite 1050<br />
                      Beverly Hills, CA 90212
                    </span>
                  </p>

                  <p className="flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                    <span>
                      <strong>Hours:</strong><br />
                      Monday – Thursday: 9:00 AM – 5:00 PM<br />
                      Friday: 9:00 AM – 3:00 PM
                    </span>
                  </p>

                  <p className="flex items-start gap-2.5">
                    <Compass className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                    <span>
                      <strong>Directions & Parking:</strong><br />
                      Located at Wilshire and Canon Dr. Underground tower garage parking validation provided for registered implant consult appointments.
                    </span>
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-brand-stone/30 flex flex-wrap gap-3">
                <a
                  href="tel:3105550190"
                  className="flex-1 min-w-[140px] text-center py-3 bg-white border border-brand-stone hover:border-brand-bronze text-brand-charcoal hover:text-brand-bronze text-xs font-semibold rounded-xl transition-all flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-4 h-4 text-brand-bronze" />
                  <span>Call (310) 555-0190</span>
                </a>
                <Link
                  to="/locations/beverly-hills/"
                  className="flex-1 min-w-[140px] text-center py-3 bg-brand-bronze hover:bg-brand-bronze-light text-white text-xs font-semibold rounded-xl transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Explore Suite</span>
                </Link>
              </div>
            </div>

            {/* Burbank Clinic Coordinates */}
            <div className="bg-brand-stone/5 border border-brand-stone/50 rounded-2xl p-6 sm:p-8 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-brand-bronze uppercase tracking-widest bg-brand-bronze/5 border border-brand-bronze/20 px-3 py-1 rounded-full">
                    Burbank Office
                  </span>
                  <MapPin className="w-5 h-5 text-brand-bronze" />
                </div>
                
                <h3 className="font-display font-bold text-brand-charcoal text-xl">Magnolia Dentistry</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-sans">
                  Bringing advanced biological tooth replacement, preventative dental medicine, and custom zirconia dental implants to Burbank, Glendale, and San Fernando Valley residents.
                </p>

                <div className="space-y-3.5 pt-4 border-t border-brand-stone/30 text-xs text-slate-600 font-sans">
                  <p className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                    <span>
                      <strong>Address:</strong><br />
                      1923 W Magnolia Blvd<br />
                      Burbank, CA 91506
                    </span>
                  </p>

                  <p className="flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                    <span>
                      <strong>Hours:</strong><br />
                      Tuesday – Friday: 8:30 AM – 5:30 PM<br />
                      Saturday: By Appointment Only
                    </span>
                  </p>

                  <p className="flex items-start gap-2.5">
                    <Compass className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                    <span>
                      <strong>Directions & Parking:</strong><br />
                      In beautiful Magnolia Park. Dedicated complimentary clinic parking lot available directly behind the building off the alley.
                    </span>
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-brand-stone/30 flex flex-wrap gap-3">
                <a
                  href="tel:8185550144"
                  className="flex-1 min-w-[140px] text-center py-3 bg-white border border-brand-stone hover:border-brand-bronze text-brand-charcoal hover:text-brand-bronze text-xs font-semibold rounded-xl transition-all flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-4 h-4 text-brand-bronze" />
                  <span>Call (818) 555-0144</span>
                </a>
                <Link
                  to="/locations/burbank/"
                  className="flex-1 min-w-[140px] text-center py-3 bg-brand-bronze hover:bg-brand-bronze-light text-white text-xs font-semibold rounded-xl transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Explore Suite</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Embedded Correspondence Terminal / Booking Form */}
      <section className="py-16 bg-white border-b border-brand-stone/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center space-y-3 mb-10">
            <span className="text-xs font-mono font-bold text-brand-bronze uppercase tracking-widest block">Digital Ingestion</span>
            <h2 className="font-display font-medium text-brand-charcoal text-2xl md:text-3xl tracking-tight">
              Clinical & Media Terminal
            </h2>
            <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
              Select your inquiry category below to safely route messages directly to clinic administrative staff or PR coordinators.
            </p>
          </div>

          <EnquiryForm />
        </div>
      </section>

      {/* 4. Professional Media & Academic Coordinates (Direct Emails) */}
      <section className="py-16 bg-brand-stone/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="border border-brand-stone bg-white rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-3.5 pb-4 border-b border-brand-stone">
              <ShieldCheck className="w-6 h-6 text-brand-bronze shrink-0" />
              <div>
                <h3 className="font-display font-medium text-lg text-brand-charcoal">Official Credentials & Direct Channels</h3>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">Corporate & Administrative Hub</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-slate-600">
              <div className="space-y-1 p-4 bg-brand-stone/10 rounded-xl">
                <span className="text-slate-400 font-mono text-[9px] uppercase tracking-wider block">Clinical Inquiries</span>
                <strong className="text-brand-charcoal block">Patient Care Mailbox</strong>
                <a href={`mailto:${BRAND_CONFIG.contactEmail}`} className="text-brand-bronze hover:underline font-semibold font-mono block mt-2 text-[11px]">
                  {BRAND_CONFIG.contactEmail}
                </a>
              </div>

              <div className="space-y-1 p-4 bg-brand-stone/10 rounded-xl">
                <span className="text-slate-400 font-mono text-[9px] uppercase tracking-wider block">Press & PR Relations</span>
                <strong className="text-brand-charcoal block">Media Relations Coordinator</strong>
                <a href={`mailto:${BRAND_CONFIG.mediaEmail}`} className="text-brand-bronze hover:underline font-semibold font-mono block mt-2 text-[11px]">
                  {BRAND_CONFIG.mediaEmail}
                </a>
              </div>

              <div className="space-y-1 p-4 bg-brand-stone/10 rounded-xl">
                <span className="text-slate-400 font-mono text-[9px] uppercase tracking-wider block">Keynotes & Podcasting</span>
                <strong className="text-brand-charcoal block">Speaking Coordinate Office</strong>
                <a href={`mailto:${BRAND_CONFIG.speakingEmail}`} className="text-brand-bronze hover:underline font-semibold font-mono block mt-2 text-[11px]">
                  {BRAND_CONFIG.speakingEmail}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
