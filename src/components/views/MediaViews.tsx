import React from 'react';
import { useRouter, Link } from '../AppRouter.tsx';
import { BRAND_CONFIG } from '../../data.ts';
import { EnquiryForm } from '../EnquiryForm.tsx';
import { PortraitPlaceholder } from './ProfileViews.tsx';
import { 
  Download, 
  Tv, 
  MessageSquare, 
  Compass, 
  PhoneCall, 
  Activity, 
  FileDown, 
  Users, 
  Briefcase 
} from 'lucide-react';

// 1. COMPREHENSIVE MEDIA CENTER / PRESS KIT VIEW (/media/ and /press-kit/)
export const MediaCenterView: React.FC = () => {
  const bioDownloads = [
    { type: "Executive Bio Block", length: "100 Words - Digital Placards", desc: "Dr. Liyan Massaband is a cosmetic and biological clinical dentist and Master of Public Health. She is dual-trained at USC and Midwestern..." },
    { type: "Full Narrative Bio", length: "400 Words - Press Print Outlines", desc: "Dr. Massaband is an associate general practitioner with unique biological focus on systemic microbial integrations, anatomical aesthetics, and preventative epidemiology..." },
    { type: "Academic CV Summary", length: "Timeline File - Speaking Panels", desc: "Includes comprehensive listing of D.M.D. certifications, public preventative workshops, physiological research archives, and practice details..." }
  ];

  const speakingThemes = [
    { title: "The Mouth is the Gatekeeper: Systemic Anatomical Integration", audience: "Medical Societies & Wellness Platforms", desc: "Explores the molecular link between active periodontal microbiome imbalances and core system diseases like chronic arterial plaques and insulin metabolism strains." },
    { title: "Prevention-First Smile Design Architecture", audience: "Aesthetic dentists & clinical students", desc: "Focuses on conservative cosmetic veneer solutions measuring thin (0.2mm) to protect underlying enamel while achieving long-term light-refracting biological makeovers." },
    { title: "Applying Public Health Policy to Private Practice", audience: "Clinical practice owners & public councils", desc: "Practical strategies for integrating CAMBRA (Caries Risk Assessments), salivary biomarkers, and individualized patient-agency training." }
  ];

  const handleDownloadStub = (title: string) => {
    alert(`Agency notice: Stored Press Kit Asset for "${title}" is packaged successfully. In production, this will trigger the raw PDF or High-Resolution ZIP matching licensing rights.`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 animate-reveal" id="media-center-hub">
      
      {/* Page Title */}
      <div className="max-w-3xl mb-12 md:mb-16 space-y-4">
        <span className="text-xs font-mono font-bold text-brand-bronze uppercase tracking-widest block">PR & Media Relations</span>
        <h1 className="font-display font-medium text-brand-charcoal text-3xl md:text-5xl tracking-tight">
          Media Center & Press Kit
        </h1>
        <p className="text-sm text-slate-500 leading-relaxed font-sans">
          The official press resources and speaking portfolio of Dr. Liyan Massaband. Access verified biographies, speaking themes, downloadable corporate headshots, and media coordinate routes.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
        
        {/* Left column: downloads and press blocks */}
        <div className="lg:col-span-8 space-y-12">
          
          {/* Section: Downloadable Biography Copy blocks */}
          <div className="space-y-6">
            <h3 className="font-display font-semibold text-brand-charcoal text-xl md:text-2xl flex items-center gap-2">
              <FileDown className="w-5.5 h-5.5 text-brand-bronze" /> Official Bio Copy Packages
            </h3>
            
            <p className="text-sm text-slate-500 font-sans">
              To guarantee perfect spelling, licensing compliance, and credentialing in your print, podcasts, or online write-ups, please utilize these client-approved modules.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-sans">
              {bioDownloads.map((bio, idx) => (
                <div key={idx} className="bg-brand-white border border-brand-stone p-5 rounded-2xl flex flex-col justify-between" id={`bio-download-${idx}`}>
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">{bio.length}</span>
                    <h4 className="font-display font-semibold text-brand-charcoal text-[16px]">{bio.type}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">{bio.desc}</p>
                  </div>
                  
                  <button
                    onClick={() => handleDownloadStub(bio.type)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-brand-bronze hover:text-brand-charcoal mt-4 pt-4 border-t border-brand-stone/20 text-left cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download TXT Block</span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Speaking Topics */}
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-brand-bronze uppercase tracking-widest block">Lectures & Events</span>
              <h3 className="font-display font-semibold text-brand-charcoal text-xl md:text-2xl flex items-center gap-2">
                <Users className="w-5.5 h-5.5 text-brand-bronze" /> Keynote Presentations & Panel Topics
              </h3>
            </div>
            
            <p className="text-sm text-slate-500 font-sans">
              Dr. Massaband regularly addresses clinical society meets, public health coalitions, and wellness podcasts. Below are her structured speaking outlines.
            </p>

            <div className="space-y-4">
              {speakingThemes.map((theme, idx) => (
                <div key={idx} className="bg-brand-white border border-brand-stone p-6 rounded-2xl relative overflow-hidden" id={`speaking-theme-${idx}`}>
                  <div className="absolute top-0 left-0 bottom-0 w-1 bg-brand-bronze" />
                  <div className="space-y-2 font-sans">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">Recommended Audience: {theme.audience}</span>
                    <h4 className="font-display font-semibold text-brand-charcoal text-[17px] leading-snug">{theme.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{theme.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right column: Images & Contacts */}
        <div className="lg:col-span-4 space-y-8">
          <div>
            <h4 className="font-display font-semibold text-brand-charcoal text-sm uppercase tracking-wider mb-3">Press Assets Checklist</h4>
            <PortraitPlaceholder description="High-Resolution Corporate Press Headshot" />
          </div>

          <div className="bg-brand-white border border-brand-stone p-6 rounded-2xl font-sans space-y-4">
            <h4 className="font-display font-semibold text-brand-charcoal text-[15px] flex items-center gap-2 border-b border-brand-stone/30 pb-2.5">
              <Briefcase className="w-4.5 h-4.5 text-brand-bronze" /> Press Interview Guidelines
            </h4>
            <div className="text-xs text-slate-500 space-y-3 leading-relaxed">
              <p>
                <strong>Response Turnaround:</strong> Direct media queries are reviewed and fielded by our brand coordinator within 24 to 48 business hours.
              </p>
              <p>
                <strong>Clinical Isolation:</strong> Dr. Massaband cannot issue diagnoses or comment on individual clinic pricing policies. Inquiries regarding localized Burbank or Beverly Hills clinic logistics must be routed to practice administration.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Enquiry Form Integration */}
      <div className="mt-16 border-t border-brand-stone/30 pt-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
            <h3 className="font-display font-semibold text-brand-charcoal text-2xl">Coordinate Speaking & Podcast Appearances</h3>
            <p className="text-sm text-slate-500 font-sans leading-relaxed">
              Submit your podcast parameters, panel themes, or audience scope outline via our correspondense terminal below.
            </p>
          </div>
          <EnquiryForm />
        </div>
      </div>

    </div>
  );
};
