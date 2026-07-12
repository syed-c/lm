import React from 'react';
import { useRouter, Link } from './AppRouter.tsx';
import { ShieldCheck, Heart, ArrowUp, ArrowRight, Instagram, Linkedin, FileText, CheckCircle2 } from 'lucide-react';
import { BRAND_CONFIG, CLINICAL_AFFILIATIONS, EXTERNAL_PROFILES } from '../data.ts';

export const SiteFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    try {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (e) {
      try {
        window.scrollTo(0, 0);
      } catch (err) {
        console.warn('Scroll interaction restricted:', err);
      }
    }
  };

  return (
    <footer className="bg-brand-ivory border-t border-brand-stone text-brand-charcoal py-16 md:py-20 relative overflow-hidden" id="site-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Upper Column Brand Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-12 mb-12 border-b border-brand-stone/60">
          
          {/* Logo & Platform Manifest */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex flex-col">
              <span className="font-display font-bold text-brand-bronze text-xl md:text-2xl leading-none">
                {BRAND_CONFIG.personName}
              </span>
              <span className="text-slate-600 text-[11px] font-mono tracking-widest leading-none uppercase mt-2">
                {BRAND_CONFIG.credentials}
              </span>
            </div>
            
            <p className="text-[13.5px] text-slate-700 leading-relaxed font-sans max-w-sm">
              The official biography, professional profile, and educational directory of Dr. Liyan Massaband, D.M.D., M.P.H. Standardizing clinical dental precision with epidemiology.
            </p>

            <div className="flex items-center gap-2 pt-2 text-[11px] font-mono text-slate-600">
              <span className="inline-block w-2 h-2 rounded-full bg-brand-bronze animate-pulse" />
              <span>NPI Provider Registry ID Verified</span>
            </div>
          </div>

          {/* Quick link columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            
            {/* PROFILE Group */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono font-bold text-brand-bronze uppercase tracking-wider">
                Profile Directory
              </h4>
              <nav className="flex flex-col gap-2 text-[13px] text-slate-700" aria-label="Footer Profile">
                <Link to="/dr-liyan-massaband/" className="hover:text-brand-bronze transition-colors">Official Profile</Link>
                <Link to="/her-story/" className="hover:text-brand-bronze transition-colors">Her Story</Link>
                <Link to="/education-and-credentials/" className="hover:text-brand-bronze transition-colors">Credentials</Link>
                <Link to="/professional-journey/" className="hover:text-brand-bronze transition-colors">Career Timeline</Link>
                <Link to="/fact-sheet/" className="hover:text-brand-bronze transition-colors flex items-center gap-1.5">
                  <span>Verification & Fact Sheet</span>
                  <span className="text-[9px] bg-brand-stone/50 text-brand-bronze px-1 rounded uppercase font-semibold">MEDIA</span>
                </Link>
              </nav>
            </div>

            {/* PUBLIC WORK Group */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono font-bold text-brand-bronze uppercase tracking-wider">
                Public Work
              </h4>
              <nav className="flex flex-col gap-2 text-[13px] text-slate-700" aria-label="Footer Public Work">
                <Link to="/videos/" className="hover:text-brand-bronze transition-colors">Video Library</Link>
                <Link to="/articles/" className="hover:text-brand-bronze transition-colors">Insights & Articles</Link>
                <Link to="/professional-focus/" className="hover:text-brand-bronze transition-colors">Expert Focus</Link>
                <Link to="/philosophy/" className="hover:text-brand-bronze transition-colors">Core Philosophy</Link>
              </nav>
            </div>

            {/* CLINICAL AFFILIATIONS Group */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono font-bold text-brand-bronze uppercase tracking-wider">
                Clinical Portals
              </h4>
              <nav className="flex flex-col gap-2 text-[13px] text-slate-700" aria-label="Footer Clinic Affiliations">
                <Link to="/clinical-affiliations/" className="hover:text-brand-bronze transition-colors">Affiliation Summary</Link>
                <a href={CLINICAL_AFFILIATIONS[0].url} target="_blank" rel="noopener noreferrer" className="hover:text-brand-bronze transition-colors">{BRAND_CONFIG.magnoliaName}</a>
                <a href={CLINICAL_AFFILIATIONS[1].url} target="_blank" rel="noopener noreferrer" className="hover:text-brand-bronze transition-colors">{BRAND_CONFIG.confidentalName}</a>
                <Link to="/official-profiles/" className="hover:text-brand-bronze transition-colors">Healthcare Registers</Link>
              </nav>
            </div>

            {/* POLICY & DATA SECURITY */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono font-bold text-brand-bronze uppercase tracking-wider">
                Information & Policy
              </h4>
              <nav className="flex flex-col gap-2 text-[13px] text-slate-700" aria-label="Footer Policy Links">
                <Link to="/editorial-standards/" className="hover:text-brand-bronze transition-colors">Editorial Standards</Link>
                <Link to="/medical-disclaimer/" className="hover:text-brand-bronze transition-colors">Medical Disclaimer</Link>
                <Link to="/accessibility/" className="hover:text-brand-bronze transition-colors">Accessibility Policy</Link>
                <Link to="/privacy-policy/" className="hover:text-brand-bronze transition-colors">Privacy Policy</Link>
              </nav>
            </div>

          </div>
        </div>

        {/* Lower Sub-Footer Legal & Accessibility blocks */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-[12px] text-slate-600 font-mono">
          
          {/* Trademark & License Verification */}
          <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left">
            <span>
              &copy; {currentYear} {BRAND_CONFIG.personName}, D.M.D., M.P.H. All rights reserved.
            </span>
            <span className="text-[11px] text-slate-500 block">
              Direct Treatment bookings belong exclusively to clinic corporate structures. This platform serves public representation.
            </span>
          </div>

          {/* Core regulatory compliance badges */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="inline-flex items-center gap-1 text-[11px] text-slate-600">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-bronze" /> HIPAA Compliant
            </span>
            <span className="text-brand-stone">|</span>
            <span className="inline-flex items-center gap-1 text-[11px] text-slate-600">
              WCAG 2.1 AA Compliant
            </span>
            <span className="text-brand-stone">|</span>
            {/* Scroll back up anchor */}
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-slate-600 hover:text-white hover:bg-brand-bronze hover:border-brand-bronze transition-all uppercase font-bold text-[10px] bg-white border border-brand-stone px-2.5 py-1 rounded-lg cursor-pointer shadow-xs"
            >
              <span>TOP</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};
