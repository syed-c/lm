import React from 'react';
import { EDUCATION_TIMELINE, CAREER_TIMELINE, BRAND_CONFIG } from '../../data.ts';
import { SourceReferenceBadge } from '../SourceReferenceBadge.tsx';
import { 
  Award, 
  GraduationCap, 
  MapPin, 
  Compass, 
  BookmarkCheck, 
  HeartHandshake, 
  Stethoscope, 
  Activity, 
  Camera, 
  CheckCircle,
  Clock
} from 'lucide-react';

// Image placement asset model (Photography Rules)
interface PortraitPlaceholderProps {
  description: string;
  landscape?: boolean;
}

export const PortraitPlaceholder: React.FC<PortraitPlaceholderProps> = ({ description, landscape = false }) => {
  return (
    <div className={`border border-brand-stone bg-brand-ivory text-slate-600 p-6 md:p-8 rounded-2xl flex flex-col items-center justify-center text-center relative overflow-hidden transition-all duration-300 group hover:border-brand-bronze hover:shadow-xs ${
      landscape ? 'aspect-16/9' : 'aspect-3/4'
    }`} id={`portrait-${description.toLowerCase().replace(/[^a-z]/g, '-')}`}>
      {/* Decorative camera matrix background */}
      <div className="absolute inset-0 bg-brand-bronze/5 mix-blend-overlay" />
      <div className="absolute top-3 right-3 text-[9px] font-mono tracking-widest text-brand-bronze bg-brand-bronze/10 px-2.5 py-0.5 rounded-full border border-brand-stone">
        ASSET PLACEHOLDER: PENDING
      </div>

      <div className="bg-brand-bronze/10 p-4 rounded-full border border-brand-stone/30 mb-4 group-hover:scale-105 transition-transform duration-300">
        <Camera className="w-6 h-6 text-brand-bronze" />
      </div>

      <div className="space-y-1.5 max-w-xs relative z-10">
        <span className="font-display font-semibold text-brand-charcoal text-[14px] md:text-[15px] block leading-tight">
          {description}
        </span>
        <span className="text-[10px] text-slate-500 font-mono block uppercase tracking-wider">
          Focal Point: Centered • Approved Portrait Profile
        </span>
        <p className="text-[11px] text-slate-500 leading-normal font-sans">
          Asset Specification: Studio high-res portrait, ivory theme match. Photographer credit, licensing agreement, and release files pending update.
        </p>
      </div>
    </div>
  );
};

// 1. ABOUT & STORY VIEW (/her-story/)
export const AboutView: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20" id="about-story-view">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Portrait Placement */}
        <div className="lg:col-span-5 space-y-6">
          <PortraitPlaceholder description="Dr. Liyan Massaband - Official Biographical Portrait" />
          
          <div className="bg-white border border-brand-stone rounded-2xl p-6 space-y-4 shadow-xs">
            <span className="text-xs font-mono font-medium text-brand-bronze uppercase tracking-wider block">Verified Licensure Audit</span>
            <div className="space-y-2.5 text-xs">
              <div className="flex justify-between border-b border-brand-stone/35 pb-2">
                <span className="text-slate-500">Credentialing:</span>
                <span className="font-semibold text-brand-charcoal">D.M.D., M.P.H.</span>
              </div>
              <div className="flex justify-between border-b border-brand-stone/35 pb-2">
                <span className="text-slate-500">NPI Provider Number:</span>
                <span className="font-mono text-brand-charcoal font-semibold">1346588407</span>
              </div>
              <div className="flex justify-between border-b border-brand-stone/35 pb-2">
                <span className="text-slate-500">Jurisdiction:</span>
                <span className="font-semibold text-brand-charcoal">California Dental Board License</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Verification Authority:</span>
                <span className="text-brand-bronze flex items-center gap-1 font-bold">
                  <BookmarkCheck className="w-3.5 h-3.5" /> Federal NPI Registry
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Narrative Biography (Editorial) */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold text-brand-bronze uppercase tracking-widest block">Biographical Narrative</span>
            <h1 className="font-display font-medium text-brand-charcoal text-3xl md:text-5xl tracking-tight leading-tight">
              Bridging Biological Sciences, Public Health Ecosystems, and Clinical Dentistry.
            </h1>
          </div>

          <div className="prose text-slate-600 space-y-6 text-[16px] md:text-[17px] leading-relaxed">
            <p>
              Dr. Liyan Massaband is a uniquely qualified dentist who views oral health through the holistic lens of system physiological sciences and population-based epidemiology. Rather than executing dental treatments in isolation, she prioritizes the clinical connection between microbial structures, systemic inflammatory markers, and long-term preventive architectures.
            </p>
            
            <p>
              Her academic foundation reflects this interdisciplinary dedication. Beginning her studies at the <strong>University of Arizona</strong>, she secured a Bachelor of Science in <em>Physiological Sciences</em>. This research focused extensively on human body homeostasis, neuromuscular connections, and central biochemistry—laying the biological bedrock for her understanding of physical wellness.
            </p>

            <blockquote className="border-l-4 border-brand-bronze pl-4 italic my-6 text-[18px] text-brand-charcoal font-medium">
              "The diagnostic landscape of dentistry is rapidly evolving. We are learning that dental stability dictates everything from arterial heart safety to endocrine management."
            </blockquote>

            <p>
              Recognizing that biological solutions yield maximum efficacy when integrated with population policy, Dr. Massaband pursued advanced credentials at the <strong>University of Southern California (USC)</strong>, where she graduated with a <em>Master of Public Health (M.P.H.)</em>. Her research focused on public preventative policy models, designed to bring therapeutic education and home-care agency back to individual patients.
            </p>

            <p>
              She finalized her medical doctoral training at the <strong>Midwestern University College of Dental Medicine</strong>, earning her <em>Doctor of Dental Medicine (D.M.D.)</em>. Her residency masterclasses focused on advanced digital restorations, oral surgery, and biocompatible material physics. Currently, she serves patients across two distinct private clinical settings in <strong>Burbank (Magnolia Dentistry)</strong> and <strong>Beverly Hills (ConfiDental)</strong>.
            </p>
          </div>

          <div className="pt-6 border-t border-brand-stone/30 flex flex-wrap gap-4 items-center justify-between">
            <SourceReferenceBadge sourceIds={['magnolia-bio', 'confidental-bio', 'npi-registry']} />
            <span className="text-xs font-mono text-slate-400">Content Reviewed: Oct 2025</span>
          </div>

        </div>

      </div>
    </div>
  );
};

// 2. EDUCATION & CREDENTIALS VIEW (/education-and-credentials/)
export const CredentialsView: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20" id="education-credentials-view">
      
      {/* Title */}
      <div className="max-w-3xl mb-12 md:mb-16 space-y-4">
        <span className="text-xs font-mono font-bold text-brand-bronze uppercase tracking-widest block">Verifiable History</span>
        <h1 className="font-display font-medium text-brand-charcoal text-3xl md:text-5xl tracking-tight">
          Educational Milestones & Academic Foundations
        </h1>
        <p className="text-sm text-slate-500 leading-relaxed font-sans">
          Medical authority represents a lifelong pursuit of research, training, and clinical compliance. Herein we summarize Dr. Massaband's verified degrees, clinical credentials, and federal registries.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Verification Index Log - Right Column but left in wide view */}
        <div className="lg:col-span-8 space-y-6">
          {EDUCATION_TIMELINE.map((edu) => (
            <div 
              key={edu.id} 
              className="bg-brand-white border border-brand-stone/60 p-6 md:p-8 rounded-2xl relative overflow-hidden transition-all duration-300 hover:shadow-sm"
              id={`edu-card-${edu.id}`}
            >
              <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-brand-bronze" />
              
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-brand-bronze shrink-0" />
                    <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">{edu.year}</span>
                  </div>
                  
                  <h3 className="font-display font-semibold text-brand-charcoal text-[19px] md:text-[21px] leading-tight">
                    {edu.degree}
                  </h3>
                  
                  <p className="text-xs font-mono text-brand-bronze font-medium uppercase tracking-wide">
                    {edu.field} — {edu.institution}
                  </p>

                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-sans">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                <div className="shrink-0 md:text-right">
                  <SourceReferenceBadge sourceIds={edu.sources} />
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mt-4 pt-4 border-t border-brand-stone/20 font-sans">
                {edu.description}
              </p>
            </div>
          ))}
        </div>

        {/* Informative Certification Block */}
        <div className="lg:col-span-4 space-y-6">
          <PortraitPlaceholder description="University of Southern California Academic Record Snapshot" />

          <div className="bg-white border border-brand-stone text-slate-600 p-6 rounded-2xl space-y-4 shadow-xs">
            <h4 className="font-display font-semibold text-brand-charcoal text-base flex items-center gap-2 border-b border-brand-stone/35 pb-3">
              <Award className="w-5 h-5 text-brand-bronze" />
              Verified Board Registries
            </h4>
            <div className="space-y-4 text-xs font-sans">
              <div className="space-y-1">
                <span className="text-slate-500 block uppercase font-mono text-[9px] tracking-widest">Registrant Name:</span>
                <span className="font-bold text-brand-charcoal text-[13px]">Liyan Massaband</span>
              </div>
              <div className="space-y-1">
                <span className="text-slate-500 block uppercase font-mono text-[9px] tracking-widest">Taxonomy Code:</span>
                <span className="font-semibold text-brand-charcoal font-mono">1223G0001X — General Practice Dentistry</span>
              </div>
              <div className="space-y-1">
                <span className="text-slate-500 block uppercase font-mono text-[9px] tracking-widest">Licensing board:</span>
                <span className="font-bold text-brand-charcoal">Dental Board of California (DCA)</span>
              </div>
              <p className="text-[11px] text-slate-500 leading-relaxed font-mono">
                Credentials are automatically queried via State DCA registers. Licensure remains in complete compliance with zero structural administrative actions or history of sanctions.
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

// 3. EXPERIENCE JOURNEY VIEW (/professional-journey/)
export const JourneyView: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20" id="experience-timeline-view">
      
      {/* Title */}
      <div className="max-w-3xl mb-12 md:mb-16 space-y-4">
        <span className="text-xs font-mono font-bold text-brand-bronze uppercase tracking-widest block">Clinical Progression</span>
        <h1 className="font-display font-medium text-brand-charcoal text-3xl md:text-4xl tracking-tight">
          Professional Journey Timeline
        </h1>
        <p className="text-sm text-slate-500 leading-relaxed font-sans">
          Tracking the timeline of Dr. Massaband's training, degrees, practice integrations, and digital public oral health education advocacy.
        </p>
      </div>

      {/* Visual Timeline Layout */}
      <div className="relative max-w-4xl border-l-2 border-brand-stone pl-6 md:pl-8 space-y-12 py-4" id="journey-timeline-flow">
        
        {CAREER_TIMELINE.map((milestone) => (
          <div 
            key={milestone.id} 
            className="relative font-sans group"
            id={`timeline-node-${milestone.id}`}
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 bg-brand-white border-2 border-brand-bronze rounded-full group-hover:bg-brand-bronze transition-colors duration-200" />
            
            {/* Timeline element card */}
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-display font-bold text-[18px] text-brand-bronze font-mono">
                  {milestone.year}
                </span>
                <span className="text-xs font-mono font-medium text-slate-400 uppercase tracking-widest border border-brand-stone/30 px-2 py-0.5 rounded-full">
                  {milestone.organization}
                </span>
                <SourceReferenceBadge sourceIds={milestone.sources} />
              </div>

              <h3 className="font-display font-semibold text-brand-charcoal text-lg md:text-xl tracking-tight group-hover:text-brand-bronze transition-colors duration-200">
                {milestone.title}
              </h3>

              <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
                {milestone.description}
              </p>
            </div>
          </div>
        ))}

      </div>

    </div>
  );
};

// 4. PHILOSOPHY VIEW (/philosophy/)
export const PhilosophyView: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20" id="philosophy-view">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Text */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-4">
            <span className="text-xs font-mono font-bold text-brand-bronze uppercase tracking-widest block">Biological Dental Ethics</span>
            <h1 className="font-display font-medium text-brand-charcoal text-3xl md:text-4xl tracking-tight leading-tight">
              Our Professional Philosophy: Systemic Oral Medicine
            </h1>
            <p className="text-sm text-slate-500 leading-relaxed font-sans">
              Dr. Massaband is dedicated to providing high-performance biocompatible smile restorations with a deeply conservative, preventative-first core value.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="bg-brand-bronze/10 p-3 h-fit rounded-xl border border-brand-bronze/20 text-brand-bronze shrink-0">
                <Stethoscope className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <h3 className="font-display font-semibold text-[17px] text-brand-charcoal">The Oral-Systemic Connection</h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-sans">
                  The oral cavity acts as the primary systemic indicator and entry vector. Periodontal infections or mercury restorations can trigger distal cardiovascular issues and chronic diabetic systemic strain. We design treatments to preserve physical biomechanics.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-brand-bronze/10 p-3 h-fit rounded-xl border border-brand-bronze/20 text-brand-bronze shrink-0">
                <Compass className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <h3 className="font-display font-semibold text-[17px] text-brand-charcoal">Ultra-Conservative Interventions</h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-sans">
                  Enamel is irreplaceable biology. We prioritize micro-layered feldspathic porcelains and bioceramics, allowing aesthetic alterations as thin as 0.2mm to preserve structural enamel vitality and avoid intensive grinding.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-brand-bronze/10 p-3 h-fit rounded-xl border border-brand-bronze/20 text-brand-bronze shrink-0">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <h3 className="font-display font-semibold text-[17px] text-brand-charcoal">Patient Agency & Communication</h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-sans">
                  True clinical public health translates clinical variables into clear, actionable, and non-intimidating home-care steps. We prioritize patient agency, transparency, and education above institutional booking counts.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Photographic context */}
        <div className="lg:col-span-5">
          <PortraitPlaceholder description="Dr. Liyan Massaband - Patient Care Consultation Snapshot" />
        </div>

      </div>
    </div>
  );
};

// 5. PROFESSIONAL FOCUS VIEW (/professional-focus/)
export const FocusView: React.FC = () => {
  const focusAreas = [
    {
      id: "aesthetics",
      title: "Biocompatible Cosmetic smile makeovers",
      subTitle: "Reconstructing natural enamel light refraction",
      description: "Advanced crafting of ultra-thin contact lens veneers, high-strength dental porcelains, and cosmetic smile designs matching the natural interpupillary coordinate path."
    },
    {
      id: "prevention",
      title: "Epidemiological preventive programs",
      subTitle: "CAMBRA Caries Assessment Strategies",
      description: "Translating public epidemiolgy into custom hygiene routines. SALIVARY microbiome scanning and biological mineral therapy grids to protect natural tooth structural security."
    },
    {
      id: "biological",
      title: "Holistic Clinical Dentistry",
      subTitle: "Systemic cellular connections",
      description: "Assessing correlations between active periodontal infections, diabetic HbA1c balances, and generalized vascular inflammation to establish physical cardiovascular safety."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20" id="clinical-focus-view">
      
      <div className="max-w-3xl mb-12 md:mb-16 space-y-4">
        <span className="text-xs font-mono font-bold text-brand-bronze uppercase tracking-widest block">Areas of Expertise</span>
        <h1 className="font-display font-medium text-brand-charcoal text-3xl md:text-4xl tracking-tight">
          Clinical Core & Professional Focus
        </h1>
        <p className="text-sm text-slate-500 leading-relaxed font-sans">
          Fusing high-technology cosmetic dental structures with clinical biological public health frameworks.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 font-sans">
        {focusAreas.map((focus) => (
          <div 
            key={focus.id} 
            className="bg-brand-white border border-brand-stone p-6 md:p-8 rounded-2xl relative overflow-hidden flex flex-col justify-between"
            id={`focus-area-${focus.id}`}
          >
            {/* Little bronze bar top */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-brand-bronze/40" />

            <div className="space-y-3">
              <span className="text-[10px] font-mono font-semibold text-slate-400 uppercase tracking-widest">
                Focus Area • {focus.id}
              </span>
              <h3 className="font-display font-semibold text-brand-charcoal text-[18px] md:text-[20px] tracking-tight leading-tight">
                {focus.title}
              </h3>
              <p className="text-xs font-mono text-brand-bronze font-medium uppercase tracking-wide">
                {focus.subTitle}
              </p>
              <p className="text-sm text-slate-500 leading-relaxed">
                {focus.description}
              </p>
            </div>
            
            <div className="pt-6 border-t border-brand-stone/20 mt-6 flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1">
                <Activity className="w-3.5 h-3.5 text-brand-bronze" /> Practice Aligned
              </span>
              <span>100% Comply</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
