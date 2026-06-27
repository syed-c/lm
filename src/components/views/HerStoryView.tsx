import React, { useState } from 'react';
import { useRouter, Link } from '../AppRouter.tsx';
import { SourceReferenceBadge } from '../SourceReferenceBadge.tsx';
import { PortraitPlaceholder } from './ProfileViews.tsx';
import { 
  ChevronRight, 
  HelpCircle, 
  ShieldCheck, 
  Clock, 
  Compass, 
  HeartHandshake, 
  AlertCircle, 
  Lock, 
  Eye, 
  Activity, 
  GraduationCap, 
  Video, 
  Instagram,
  FileQuestion,
  Sparkles
} from 'lucide-react';
import { BRAND_CONFIG } from '../../data.ts';

// CMS Interview Sandbox Interface
interface InterviewQuestion {
  id: string;
  question: string;
  answerText: string;
  dateRecorded: string;
  source: string;
  clientApproved: boolean;
  publishStatus: 'published' | 'draft' | 'pending_approval';
}

export const HerStoryView: React.FC = () => {
  const [selectedQuestionId, setSelectedQuestionId] = useState<string | null>(null);

  // Factual structured data for Her Story (SEO schema)
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const storySchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${currentUrl}#webpage`,
        "url": currentUrl,
        "name": `Her Story | ${BRAND_CONFIG.displayName}`,
        "description": "Explore Dr. Liyan Massaband’s professional story, outlining her physiological studies, public health leadership, dental medicine degree, and clinical practice."
      },
      {
        "@type": "Person",
        "name": BRAND_CONFIG.personName,
        "jobTitle": "Dentist",
        "affiliation": [
          { "@type": "Dentist", "name": BRAND_CONFIG.magnoliaName },
          { "@type": "Dentist", "name": BRAND_CONFIG.confidentalName }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${currentUrl}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": { "@id": "/" }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Her Story",
            "item": { "@id": "/her-story/" }
          }
        ]
      }
    ]
  };

  // 11 Client Interview Fields (CMS block style, togglable, with approval statuses)
  const interviewQuestions: InterviewQuestion[] = [
    {
      id: "q1",
      question: "What first interested you in health and science?",
      answerText: "In biological circles, I was always drawn to systems physiology—analyzing how separate biological controls (neurological transmission, respiratory buffers, and circulatory biomechanics) coordinate homeostasis. This led directly into a systematic view of healthcare.",
      dateRecorded: "2026-06-22",
      source: "Draft Bio-Acoustic Questionnaire",
      clientApproved: false,
      publishStatus: "pending_approval"
    },
    {
      id: "q2",
      question: "Why did you study physiological sciences?",
      answerText: "Studying Physiological Sciences at the University of Arizona allowed me to understand human systems anatomy at a cellular and cardiac level before specifying clinical applications. It proved that oral health metrics align directly with total wellness.",
      dateRecorded: "2026-06-22",
      source: "Draft Bio-Acoustic Questionnaire",
      clientApproved: false,
      publishStatus: "pending_approval"
    },
    {
      id: "q3",
      question: "What led you to pursue public health?",
      answerText: "I recognized that single clinical treatments only repair past complications. To understand preventative models, global health disparities, and healthcare leadership architectures, I completed my M.P.H. at USC—learning to look beyond single localized appointments.",
      dateRecorded: "2026-06-22",
      source: "Draft Bio-Acoustic Questionnaire",
      clientApproved: false,
      publishStatus: "pending_approval"
    },
    {
      id: "q4",
      question: "How does your M.P.H. influence the way you communicate?",
      answerText: "Public health requires absolute simplicity and accessibility. It taught me to dismantle dense clinical jargon into clear, reassuring visual metrics, ensuring patients have complete agency and understanding of their teeth alignments.",
      dateRecorded: "2026-06-22",
      source: "Draft Bio-Acoustic Questionnaire",
      clientApproved: false,
      publishStatus: "pending_approval"
    },
    {
      id: "q5",
      question: "What led you into dental medicine?",
      answerText: "Dental medicine integrates high-fidelity physical design, biological material sciences, and patient hand-to-hand communication. It is the only medical field where public preventative health can be directly translated into tangible, structural restorations.",
      dateRecorded: "2026-06-22",
      source: "Draft Bio-Acoustic Questionnaire",
      clientApproved: false,
      publishStatus: "pending_approval"
    },
    {
      id: "q6",
      question: "What does patient trust mean to you?",
      answerText: "Patient trust is built entirely through clinical diagnostic transparency, gentle mechanical pacing, and active listening. It means prioritizing user well-being, comfort, and clinical pacing over commercial business metrics.",
      dateRecorded: "2026-06-22",
      source: "Draft Bio-Acoustic Questionnaire",
      clientApproved: false,
      publishStatus: "pending_approval"
    },
    {
      id: "q7",
      question: "How do you define natural-looking dental results?",
      answerText: "Natural aesthetics are not artificially symmetrical or bleached. We respect patients' physical facial features, interpupillary alignment, phonetic movements, and natural translucent light refraction to reconstruct realistic dentin structures.",
      dateRecorded: "2026-06-22",
      source: "Draft Bio-Acoustic Questionnaire",
      clientApproved: false,
      publishStatus: "pending_approval"
    },
    {
      id: "q8",
      question: "What do you want patients to understand before making treatment decisions?",
      answerText: "I want patients to fully grasp their primary diagnostic variables, likely timelines, realistic limitations, biological risks, and preventative alternatives before scheduling any invasive restorative procedures.",
      dateRecorded: "2026-06-22",
      source: "Draft Bio-Acoustic Questionnaire",
      clientApproved: false,
      publishStatus: "pending_approval"
    },
    {
      id: "q9",
      question: "Why do you create educational video content?",
      answerText: "Traditional clinical settings are highly intimidating. Recording open-access educational videos on dental anxiety and biological dental preservation allows me to alleviate structural phobias and empower users at home.",
      dateRecorded: "2026-06-22",
      source: "Draft Bio-Acoustic Questionnaire",
      clientApproved: false,
      publishStatus: "pending_approval"
    },
    {
      id: "q10",
      question: "What professional topics would you like to discuss publicly?",
      answerText: "I hope to lecture on the oral-systemic connection—specifically the microbiological interactions between periodontal tissue health and systemic metabolic control, as well as biocompatible conservation models in cosmetics.",
      dateRecorded: "2026-06-22",
      source: "Draft Bio-Acoustic Questionnaire",
      clientApproved: false,
      publishStatus: "pending_approval"
    },
    {
      id: "q11",
      question: "What do you hope this personal website communicates about you?",
      answerText: "I hope this authority platform establishes a highly transparent, verifiable, and educational identity for research systems and collaborators, clarifying the separation between active clinical practices and my public research hub.",
      dateRecorded: "2026-06-22",
      source: "Draft Bio-Acoustic Questionnaire",
      clientApproved: false,
      publishStatus: "pending_approval"
    }
  ];

  return (
    <div className="bg-brand-white text-brand-charcoal animate-reveal leading-relaxed" id="her-story-page">
      {/* Schema Injection */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(storySchema) }}
      />

      {/* Editorial Breadcrumb Header */}
      <div className="bg-brand-white border-b border-brand-stone/30 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs font-mono text-slate-500">
            <Link to="/" className="hover:text-brand-bronze transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-brand-charcoal font-medium">Her Story</span>
          </nav>
        </div>
      </div>

      {/* Hero Section (Warm Neutral/Light Editorial) */}
      <section className="bg-brand-stone/5 py-12 md:py-20 border-b border-brand-stone" id="story-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Narrative Title */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono font-bold text-brand-bronze uppercase tracking-widest block">
                Her Story
              </span>
              <h1 className="font-display font-medium text-brand-charcoal text-3xl md:text-5xl tracking-tight leading-tight">
                The Story Behind Dr. Liyan Massaband’s Professional Journey
              </h1>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl font-sans">
                A professional path shaped by curiosity about health, people and the relationship between science and confidence. Learn how biological sciences and public health models constructed her perspective on modern dental medicine.
              </p>
            </div>

            {/* Right Hero Image Column */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="w-full max-w-sm">
                <PortraitPlaceholder description="Dr. Liyan Massaband - Warm Reflected Studio Portrait" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Narrative Section Body */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20" id="story-narrative-container">
        <div className="space-y-16">
          
          {/* SECTION 1: THE BEGINNING OF THE PROFESSIONAL PATH */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start" id="physiological-sciences-section">
            <div className="md:col-span-4">
              <span className="font-display font-black text-brand-bronze/20 text-5xl block md:text-6xl leading-none">01</span>
              <h3 className="font-display font-semibold text-lg text-brand-charcoal mt-2 tracking-tight">
                A Foundation in Physiological Sciences
              </h3>
            </div>
            <div className="md:col-span-8 text-slate-600 space-y-4 text-sm md:text-base">
              <p>
                Dr. Liyan Massaband's academic path commenced at the <strong>University of Arizona</strong>, where she studied Physiological Sciences. Far from being a standard general biology major, physiological sciences analyze the active metabolic controls, biomechanics, and integrated cellular homeostatic systems of the human body.
              </p>
              <p>
                This scientific background provided her with a structured understanding of systemic biology. She studied how cardiovascular buffers, peripheral neuromuscular responses, and cellular inflammatory cascades manage homeostasis, leaving her with the firm perspective that oral cavities function as direct gates of overall health.
              </p>
            </div>
          </section>

          {/* SECTION 2: PUBLIC HEALTH PERSPECTIVE */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start" id="public-health-section">
            <div className="md:col-span-4">
              <span className="font-display font-black text-brand-bronze/20 text-5xl block md:text-6xl leading-none">02</span>
              <h3 className="font-display font-semibold text-lg text-brand-charcoal mt-2 tracking-tight">
                Looking Beyond a Single Appointment
              </h3>
            </div>
            <div className="md:col-span-8 text-slate-600 space-y-4 text-sm md:text-base">
              <p>
                Advocating for personal and structural wellness led Dr. Massaband to pursue a <strong>Master of Public Health (M.P.H.)</strong> at the <strong>University of Southern California (USC)</strong>, specializing in global health and leadership. 
              </p>
              <p>
                Her coursework examined the epidemiology of chronic pathology, health literacy barriers, and preventive policies. Public health models shifted her focus beyond single localized treatments, encouraging an active, community-wide preventative perspective centering on:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-slate-700 bg-brand-stone/10 p-4 rounded-xl border border-brand-stone/30">
                <li className="flex items-center gap-1.5"><ChevronRight className="w-3.5 h-3.5 text-brand-bronze shrink-0" /> Preventive Literacy</li>
                <li className="flex items-center gap-1.5"><ChevronRight className="w-3.5 h-3.5 text-brand-bronze shrink-0" /> Access & Advocacy</li>
                <li className="flex items-center gap-1.5"><ChevronRight className="w-3.5 h-3.5 text-brand-bronze shrink-0" /> Communication Design</li>
                <li className="flex items-center gap-1.5"><ChevronRight className="w-3.5 h-3.5 text-brand-bronze shrink-0" /> Long-Term Patient Hygiene Agency</li>
              </ul>
            </div>
          </section>

          {/* SECTION 3: DENTAL MEDICINE */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start" id="dental-medicine-section">
            <div className="md:col-span-4">
              <span className="font-display font-black text-brand-bronze/20 text-5xl block md:text-6xl leading-none">03</span>
              <h3 className="font-display font-semibold text-lg text-brand-charcoal mt-2 tracking-tight">
                Moving from Public Health into Dental Medicine
              </h3>
            </div>
            <div className="md:col-span-8 text-slate-600 space-y-4 text-sm md:text-base">
              <p>
                To translate preventative public policies into daily clinical interventions, Dr. Massaband finalized her medical training at the <strong>Midwestern University College of Dental Medicine</strong>, securing her <strong>Doctor of Dental Medicine (D.M.D.)</strong>.
              </p>
              <p>
                Her doctoral studies focused deeply on contemporary restoration methods, dental surgery, laser therapy, and advanced computer-aided design (CAD/CAM restorations). Fusing public health communication guidelines with clinical dental medicine prepares her to support patients facing high dental anxiety.
              </p>
            </div>
          </section>

          {/* SECTION 4: BUILDING A PROFESSIONAL IDENTITY */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start" id="professional-approach-section">
            <div className="md:col-span-4">
              <span className="font-display font-black text-brand-bronze/20 text-5xl block md:text-6xl leading-none">04</span>
              <h3 className="font-display font-semibold text-lg text-brand-charcoal mt-2 tracking-tight">
                Developing a Professional Approach of Her Own
              </h3>
            </div>
            <div className="md:col-span-8 text-slate-600 space-y-4 text-sm md:text-base">
              <p>
                Throughout her years in active practice, Dr. Massaband has synthesized these three stages into a balanced methodology. Her clinical designs prioritize physiological preservation—avoiding unnecessary sound enamel destruction while restoring highly natural tooth geometries. 
              </p>
              <p>
                She holds that patient trust cannot be automated. Sustainable dental care requires careful explanation, active diagnostic sharing, and ensuring patient comfort in every session.
              </p>
            </div>
          </section>

          {/* SECTION 5: TWO CLINICAL AFFILIATIONS */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start" id="two-affiliations-section">
            <div className="md:col-span-4">
              <span className="font-display font-black text-brand-bronze/20 text-5xl block md:text-6xl leading-none">05</span>
              <h3 className="font-display font-semibold text-lg text-brand-charcoal mt-2 tracking-tight">
                Working Across Burbank and Beverly Hills
              </h3>
            </div>
            <div className="md:col-span-8 text-slate-600 space-y-4 text-sm md:text-base">
              <p>
                Currently, Dr. Liyan Massaband is affiliated with two independent clinical locations in California:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="border border-brand-stone p-4 rounded-xl">
                  <h4 className="font-semibold text-brand-charcoal text-[15px]">Magnolia Dentistry</h4>
                  <p className="text-xs text-slate-500 font-mono mt-0.5">Burbank, California</p>
                  <p className="text-xs text-slate-600 leading-relaxed mt-2">Integrating broad family dental prevention programs and health literacy paths.</p>
                </div>
                <div className="border border-brand-stone p-4 rounded-xl">
                  <h4 className="font-semibold text-brand-charcoal text-[15px]">ConfiDental Beverly Hills</h4>
                  <p className="text-xs text-slate-500 font-mono mt-0.5">Beverly Hills, California</p>
                  <p className="text-xs text-slate-600 leading-relaxed mt-2">Crafting premium biological cosmetics and conservative veneer restorations.</p>
                </div>
              </div>
              <p className="text-xs text-slate-400 pt-1">
                To explore practice structures, maps, or billing policies, visit the coordinated 
                <Link to="/clinical-affiliations/" className="text-brand-bronze hover:underline ml-1 font-semibold">Clinical Affiliations Page</Link>.
              </p>
            </div>
          </section>

          {/* SECTION 6: PUBLIC EDUCATION AND VIDEO */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start" id="video-outreach-section">
            <div className="md:col-span-4">
              <span className="font-display font-black text-brand-bronze/20 text-5xl block md:text-6xl leading-none">06</span>
              <h3 className="font-display font-semibold text-lg text-brand-charcoal mt-2 tracking-tight">
                Sharing Dental Information Beyond the Practice
              </h3>
            </div>
            <div className="md:col-span-8 text-slate-600 space-y-4 text-sm md:text-base">
              <p>
                Empowering patients goes beyond the physically constrained clean zones of private offices. Dr. Massaband uses digital social commentary and videos to create accessible dental dialogue.
              </p>
              <p>
                Her short instructional videos detail dental anxiety mitigation, restorative material characteristics, and oral hygiene strategies, demystifying dental procedures and decreasing active phobias.
              </p>
              <div className="flex gap-4 pt-2 text-xs font-mono">
                <a href="https://www.instagram.com/drliyanmassaband/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-brand-bronze hover:text-brand-charcoal font-bold">
                  <Instagram className="w-4 h-4" /> Instagram Profile
                </a>
                <Link to="/videos/" className="flex items-center gap-1.5 text-brand-bronze hover:text-brand-charcoal font-bold">
                  <Video className="w-4 h-4" /> Watch Video Library
                </Link>
              </div>
            </div>
          </section>

          {/* SECTION 7: THE NEXT CHAPTER */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start" id="next-chapter-section">
            <div className="md:col-span-4">
              <span className="font-display font-black text-brand-bronze/20 text-5xl block md:text-6xl leading-none">07</span>
              <h3 className="font-display font-semibold text-lg text-brand-charcoal mt-2 tracking-tight">
                Building a Public Professional Platform
              </h3>
            </div>
            <div className="md:col-span-8 text-slate-600 space-y-4 text-sm md:text-base">
              <p>
                This personal website acts as the central authoritative repository detailing Dr. Liyan Massaband's professional identity. Structured as an education-first portal, it compiles her academic timeline, verified references (Zocdoc and NPI Registry), and narrative milestones.
              </p>
              <p>
                In the near future, the platform will curate professional collaborations, podcast interviews, public speaking event calendars, and health columns, continuing her lifelong commitment to healthcare advocacy and education.
              </p>
            </div>
          </section>

        </div>
      </div>

      {/* CMS BLOCK SECTION: APPROVED FIRST-PERSON PERSPECTIVE (CMS Interview Playground) */}
      <section className="bg-brand-stone/10 border-t border-b border-brand-stone py-16" id="cms-interview-sandbox-block">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="space-y-3 text-center">
            <span className="text-[10px] uppercase tracking-widest font-mono font-bold text-brand-bronze bg-brand-bronze/10 border border-brand-bronze/35 px-3 py-1 rounded-full inline-block">
              Approved First-Person Perspective • CMS Sandbox
            </span>
            <h2 className="font-display font-medium text-2xl md:text-3xl text-brand-charcoal tracking-tight">
              Clinical Questionnaire & CMS Interview Logs
            </h2>
            <p className="text-xs text-slate-500 leading-relaxed font-sans max-w-lg mx-auto">
              Draft answers are stored inside our CMS schema. Select a question below to preview the drafted response. 
              <span className="text-brand-bronze block font-semibold mt-1 flex items-center justify-center gap-1">
                <Lock className="w-3.5 h-3.5" /> Client Confirmation & Board Sign-off Pending
              </span>
            </p>
          </div>

          {/* Visual Interactive CMS Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            
            {/* Questions Lists */}
            <div className="md:col-span-5 space-y-2 max-h-[460px] overflow-y-auto pr-2 border-r border-brand-stone/30" id="cms-questions-scroller">
              {interviewQuestions.map((iq) => (
                <button
                  key={iq.id}
                  onClick={() => setSelectedQuestionId(iq.id === selectedQuestionId ? null : iq.id)}
                  className={`w-full text-left p-3 rounded-lg text-xs transition-all border flex items-center justify-between gap-2.5 cursor-pointer hover:bg-white ${
                    selectedQuestionId === iq.id 
                      ? 'bg-brand-charcoal text-brand-white border-brand-charcoal' 
                      : 'bg-brand-white text-slate-700 border-brand-stone hover:border-brand-bronze'
                  }`}
                >
                  <span className="font-medium line-clamp-1">{iq.question}</span>
                  <HelpCircle className="w-3.5 h-3.5 shrink-0 text-brand-bronze" />
                </button>
              ))}
            </div>

            {/* Answer Display Panel */}
            <div className="md:col-span-7 bg-brand-white p-5 rounded-xl border border-brand-stone h-full min-h-[290px] flex flex-col justify-between">
              {selectedQuestionId ? (
                (() => {
                  const currentQ = interviewQuestions.find(q => q.id === selectedQuestionId);
                  if (!currentQ) return null;
                  return (
                    <div className="space-y-4 animate-reveal">
                      <div className="flex items-center justify-between border-b border-brand-stone/20 pb-3">
                        <span className="text-[10px] font-mono text-slate-400 block uppercase">Selected Question {currentQ.id}</span>
                        <div className="flex items-center gap-1 text-[10px] font-mono text-brand-bronze bg-brand-bronze/10 px-2 py-0.5 rounded-full border border-brand-bronze/25">
                          <AlertCircle className="w-3 h-3" />
                          <span>Status: Verification Required</span>
                        </div>
                      </div>

                      <h4 className="font-display font-bold text-sm text-brand-charcoal">
                        {currentQ.question}
                      </h4>

                      <blockquote className="border-l-4 border-brand-bronze/35 pl-3 text-slate-600 text-xs italic leading-relaxed bg-brand-stone/5 p-3 rounded-r-lg font-sans">
                        "{currentQ.answerText}"
                      </blockquote>

                      <div className="pt-4 border-t border-brand-stone/25 text-[9px] font-mono text-slate-400 grid grid-cols-2 gap-2">
                        <div>
                          <span className="block text-slate-500">Record Date:</span>
                          <span className="font-medium text-brand-charcoal">{currentQ.dateRecorded}</span>
                        </div>
                        <div>
                          <span className="block text-slate-500">Source Database:</span>
                          <span className="font-medium text-brand-charcoal">{currentQ.source}</span>
                        </div>
                      </div>
                    </div>
                  );
                })()
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center p-8 space-y-3 my-auto">
                  <div className="bg-brand-stone p-4 rounded-full text-slate-400">
                    <FileQuestion className="w-8 h-8" />
                  </div>
                  <div className="space-y-1">
                    <span className="font-display font-semibold text-xs text-brand-charcoal block">CMS Preview Workspace</span>
                    <p className="text-[11px] text-slate-500 max-w-sm">
                      Select a questionnaire field on the left bar to preview Dr. Liyan Massaband's draft answers before official board approval and publication.
                    </p>
                  </div>
                </div>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* Recommended Related Navigation Links */}
      <section className="bg-brand-ivory text-slate-700 py-16 border-t border-brand-stone" id="authority-hub-navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-[10px] font-mono text-brand-bronze uppercase tracking-widest block">Authority Index Ecosystem</span>
            <h3 className="font-display font-medium text-2xl text-brand-charcoal">Explore Dr. Liyan Massaband's Profile</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4" id="related-pages-grid">
            <Link to="/dr-liyan-massaband/" className="group p-4 bg-white hover:bg-brand-white border border-brand-stone rounded-xl text-center flex flex-col justify-between h-28 transition-all hover:border-brand-bronze hover:shadow-xs">
              <span className="text-slate-500 text-[10px] font-mono uppercase tracking-wider block">Official Directory</span>
              <span className="text-brand-charcoal font-display text-[13px] font-semibold block mt-2 group-hover:text-brand-bronze transition-colors">Official Profile</span>
              <span className="text-brand-bronze text-[10px] font-mono mt-auto flex items-center justify-center gap-0.5">
                Explore <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>

            <Link to="/education-and-credentials/" className="group p-4 bg-white hover:bg-brand-white border border-brand-stone rounded-xl text-center flex flex-col justify-between h-28 transition-all hover:border-brand-bronze hover:shadow-xs">
              <span className="text-slate-500 text-[10px] font-mono uppercase tracking-wider block">Academia</span>
              <span className="text-brand-charcoal font-display text-[13px] font-semibold block mt-2 group-hover:text-brand-bronze transition-colors">Education & Certs</span>
              <span className="text-brand-bronze text-[10px] font-mono mt-auto flex items-center justify-center gap-0.5">
                Explore <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>

            <Link to="/professional-journey/" className="group p-4 bg-white hover:bg-brand-white border border-brand-stone rounded-xl text-center flex flex-col justify-between h-28 transition-all hover:border-brand-bronze hover:shadow-xs">
              <span className="text-slate-500 text-[10px] font-mono uppercase tracking-wider block">Timeline</span>
              <span className="text-brand-charcoal font-display text-[13px] font-semibold block mt-2 group-hover:text-brand-bronze transition-colors">Journey</span>
              <span className="text-brand-bronze text-[10px] font-mono mt-auto flex items-center justify-center gap-0.5">
                Explore <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>

            <Link to="/philosophy/" className="group p-4 bg-white hover:bg-brand-white border border-brand-stone rounded-xl text-center flex flex-col justify-between h-28 transition-all hover:border-brand-bronze hover:shadow-xs">
              <span className="text-slate-500 text-[10px] font-mono uppercase tracking-wider block">Core Beliefs</span>
              <span className="text-brand-charcoal font-display text-[13px] font-semibold block mt-2 group-hover:text-brand-bronze transition-colors">Philosophy</span>
              <span className="text-brand-bronze text-[10px] font-mono mt-auto flex items-center justify-center gap-0.5">
                Explore <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>

            <Link to="/videos/" className="group p-4 bg-white hover:bg-brand-white border border-brand-stone rounded-xl text-center flex flex-col justify-between h-28 transition-all hover:border-brand-bronze hover:shadow-xs">
              <span className="text-slate-500 text-[10px] font-mono uppercase tracking-wider block">Videos list</span>
              <span className="text-brand-charcoal font-display text-[13px] font-semibold block mt-2 group-hover:text-brand-bronze transition-colors">Watch Library</span>
              <span className="text-brand-bronze text-[10px] font-mono mt-auto flex items-center justify-center gap-0.5">
                Explore <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
