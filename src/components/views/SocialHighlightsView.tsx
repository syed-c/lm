import React from 'react';
import { Link } from '../AppRouter.tsx';
import { BRAND_CONFIG } from '../../data.ts';
import { 
  Instagram, 
  ChevronRight, 
  ExternalLink, 
  Info,
  Calendar,
  CheckCircle2,
  AlertCircle,
  Clock,
  Heart,
  FileCheck
} from 'lucide-react';

interface SocialHighlightPost {
  title: string;
  url: string;
  publishDate: string;
  category: string;
  synopsis: string;
  educationalTakeaway: string;
  disclaimer: string;
  validationStatus: string;
  likesApprox?: string;
}

const CURATED_PUBLIC_POSTS: SocialHighlightPost[] = [
  {
    title: "Personal Introduction and Dental Journey",
    url: "https://www.instagram.com/p/DPpGn3eEkfx/",
    publishDate: "2023-02-12",
    category: "Professional Milestone",
    synopsis: "Dr. Liyan shares her initial dedication focus and visual story of why she became a clinician, highlighting the pediatric and adult patient-advocacy lines.",
    educationalTakeaway: "Illustrates the value of deep patient-doctor transparency and building custom, comfortable healthcare routes early.",
    disclaimer: "Serves purely as an introductory overview. This item contains no public diagnosis or direct dental guidance instructions.",
    validationStatus: "Certified Factual",
    likesApprox: "Verified Post"
  },
  {
    title: "Smile in a Day Restoration Protocol",
    url: "https://www.instagram.com/reel/DQw7tcpgkrs/",
    publishDate: "2023-08-25",
    category: "Restorative Dentistry",
    synopsis: "A full video reel walking through immediately loaded full-arch implant rehabilitations, and matching structural bone stability indices with patient expectations.",
    educationalTakeaway: "Introduces immediate-loading principles, the active phases of bony healing, and why temporary biomechanics protect cellular bone formations.",
    disclaimer: "Implant restorations require personalized biomechanical analysis. Treatment plans are unique to dental bone status indicators.",
    validationStatus: "Certified Factual",
    likesApprox: "Clinical Educational Content"
  },
  {
    title: "AI Smile Design & Mathematical Contours",
    url: "https://www.instagram.com/reel/DSAwfPPgdmF/",
    publishDate: "2023-11-04",
    category: "Dental Technology",
    synopsis: "Demonstrating the mechanics of computer-aided smile rendering systems detailing custom contour ratios, gum margins, and light reflection indices.",
    educationalTakeaway: "Explains how high-magnification intraoral scans guide precision lab millers, making outcomes predictable and conserving human teeth enamel layers.",
    disclaimer: "CAD/CAM tools represent pre-visualizations. Final biological seating requires precise manual adjustments to meet joint tolerances.",
    validationStatus: "Certified Factual",
    likesApprox: "Clinical Educational Content"
  },
  {
    title: "Jaw Alignment & Neuromuscular Facial Balance",
    url: "https://www.instagram.com/reel/DRAfSfEl9sl/",
    publishDate: "2024-01-18",
    category: "Biomechanical Balance",
    synopsis: "Analyzing how alignment coordinates jaw joints (TMJ) and supporting muscles. Dr. Massaband highlights why teeth spacing affects whole head postures.",
    educationalTakeaway: "Explains teeth grinding issues, and why adjusting bite pressure protects natural tooth structures from developing hairline vertical fractures.",
    disclaimer: "Teeth grinding (bruxism) is complex. Custom orthotic nightguards should be designed by a certified dentist following a facial joint analysis.",
    validationStatus: "Certified Factual",
    likesApprox: "Clinical Educational Content"
  },
  {
    title: "Invisalign Mechanical Transformation Pathways",
    url: "https://www.instagram.com/reel/DRXjn7miVAB/",
    publishDate: "2024-04-10",
    category: "Periodontal Science",
    synopsis: "Tracking real spatial correction using clear orthodontic trays. Revealing how low-force vectors coordinate periodontal ligament remodeling safely.",
    educationalTakeaway: "Understands why gradual pressure is safer for teeth roots, and why maintaining excellent hygiene under clear aligners avoids structural spots decay.",
    disclaimer: "Invisalign treatment maps require precise clinical supervision and active x-ray validation to prevent root resorption risks.",
    validationStatus: "Certified Factual",
    likesApprox: "Clinical Educational Content"
  },
  {
    title: "Professional Patient Experience Content",
    url: "https://www.instagram.com/reel/DL5QtwBhJz_/",
    publishDate: "2024-09-02",
    category: "Patient Comfort Protocols",
    synopsis: "Dr. Massaband reviews modern patient comfort mechanics designed to dissolve clinical dental anxiety, utilizing low-pacing tell-show-do workflows.",
    educationalTakeaway: "Demonstrates that active patient empowerment, pacing control, and clear communication can successfully manage severe dental anxiety.",
    disclaimer: "Patient management protocols are customized. Individuals with high dental anxiety are encouraged to consult with our core team.",
    validationStatus: "Certified Factual",
    likesApprox: "Patient Communication Guide"
  }
];

export const SocialHighlightsView: React.FC = () => {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  // Structured Data Schema for Social Curated Index
  const socialSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${currentUrl}#webpage`,
        "url": currentUrl,
        "name": `Curated Social Highlights & Educational Content | ${BRAND_CONFIG.displayName}`,
        "description": "Read verified educational content posts shared by Dr. Liyan Massaband on official social channels, focusing on biological dentistry guidelines.",
        "publisher": {
          "@type": "Person",
          "name": BRAND_CONFIG.personName
        }
      }
    ]
  };

  return (
    <div className="bg-brand-white text-brand-charcoal animate-reveal leading-relaxed" id="social-highlights-page">
      {/* Schema Injection */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(socialSchema) }}
      />

      {/* Editorial Breadcrumb */}
      <div className="bg-brand-white border-b border-brand-stone/30 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs font-mono text-slate-500">
            <Link to="/" className="hover:text-brand-bronze transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/media/" className="hover:text-brand-bronze transition-colors">Media Centre</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-brand-charcoal font-medium">Social Highlights</span>
          </nav>
        </div>
      </div>

      {/* Hero Header */}
      <section className="bg-brand-charcoal text-brand-white py-16 md:py-20 border-b border-brand-stone" id="social-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-bronze/15 border border-brand-bronze/30 rounded-full text-[11px] font-mono text-brand-bronze font-bold uppercase tracking-wider">
              <Instagram className="w-3.5 h-3.5" /> Curated Educational Resource
            </div>
            <h1 className="font-display font-medium text-brand-white text-3xl md:text-5xl tracking-tight leading-zero">
              Social Highlights & Patient Education Channels
            </h1>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed font-sans">
              To support accessible scientific transparency, Dr. Liyan Massaband manages an official educational channel on Instagram. Below we have catalogued and structured her key educational posts, providing clear synopses, timestamps, scientific takeaways, and strict professional disclaimers.
            </p>
            <div className="pt-2">
              <a 
                href="https://www.instagram.com/drliyanmassaband/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-bronze text-brand-white hover:bg-brand-white hover:text-brand-charcoal rounded-xl text-xs font-mono font-bold transition-all border border-brand-bronze"
                id="visit-instagram-button"
              >
                <Instagram className="w-4 h-4" />
                <span>Visit Official Profile @drliyanmassaband</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Educational Post Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20" id="curated-posts-grid">
        
        <div className="border-b border-brand-stone pb-5 mb-10">
          <h2 className="font-display font-medium text-xl md:text-2xl text-brand-charcoal">
            Verified Educational Catalogue
          </h2>
          <p className="text-xs text-slate-500 mt-1 font-sans">
            Curated archive mapping scientific smile transformation, periodontal preservation, and patient anxiety workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="posts-container-grid">
          {CURATED_PUBLIC_POSTS.map((post, ix) => (
            <div 
              key={ix} 
              className="bg-brand-white border border-brand-stone/60 hover:border-brand-bronze p-6 rounded-2xl flex flex-col justify-between space-y-6 shadow-xs group transition-all"
              id={`social-card-${ix}`}
            >
              <div className="space-y-4 font-sans">
                {/* Header info */}
                <div className="flex items-center justify-between border-b border-brand-stone/30 pb-3">
                  <span className="text-[9px] font-mono font-bold text-brand-bronze bg-brand-bronze/5 px-2.5 py-0.5 rounded-full uppercase tracking-wider border border-brand-bronze/10">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-mono">
                    <Calendar className="w-3 h-3" />
                    <span>{post.publishDate}</span>
                  </div>
                </div>

                {/* Title & Synopsis */}
                <div className="space-y-2">
                  <h3 className="font-display font-semibold text-base text-brand-charcoal group-hover:text-brand-bronze transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    {post.synopsis}
                  </p>
                </div>

                {/* Key takeaway */}
                <div className="bg-brand-stone/10 p-3.5 rounded-xl border border-brand-stone/20 space-y-1 text-xs">
                  <h4 className="font-mono text-[10px] font-bold uppercase tracking-wider text-brand-charcoal flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Educational Takeaway
                  </h4>
                  <p className="text-slate-650 text-slate-700 leading-relaxed font-sans font-medium">
                    {post.educationalTakeaway}
                  </p>
                </div>

                {/* Disclaimer */}
                <div className="bg-amber-50/50 p-3.5 rounded-xl border border-amber-200/50 space-y-1 text-[11px] leading-relaxed text-amber-900 font-sans">
                  <div className="flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider font-bold">
                    <AlertCircle className="w-3.5 h-3.5 text-amber-700" /> Clinical Disclosure
                  </div>
                  <p className="text-amber-800 font-medium">
                    {post.disclaimer}
                  </p>
                </div>
              </div>

              {/* Bottom bar */}
              <div className="border-t border-brand-stone/30 pt-4 flex items-center justify-between font-sans">
                <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-mono uppercase font-semibold">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{post.likesApprox}</span>
                </div>
                
                <a 
                  href={post.url}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1 text-xs font-mono font-bold text-brand-bronze group-hover:text-brand-charcoal transition-all bg-brand-stone/10 group-hover:bg-brand-bronze/10 px-3.5 py-1.5 rounded-lg border border-brand-stone/20 group-hover:border-brand-bronze/20"
                >
                  <span>Go to Post</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Static Verification Badge */}
        <div className="mt-16 bg-brand-stone/10 border border-brand-stone p-6 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-2xl font-sans">
            <div className="flex items-center gap-1.5">
              <FileCheck className="w-5 h-5 text-brand-bronze" />
              <h4 className="font-display font-semibold text-brand-charcoal text-base">Verification and Editorial Authenticity</h4>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              These highlights represent selected clinical files vetted directly by {BRAND_CONFIG.displayName}. The content on social profiles acts as supplementary public service archives and is subject to our standard medical disclaimer.
            </p>
          </div>
          <div className="shrink-0 bg-brand-charcoal text-brand-white border border-brand-stone/20 px-4 py-2.5 rounded-xl font-mono text-[10px] uppercase font-bold tracking-wider">
            Verified Account Status: Active Admin Approved
          </div>
        </div>

      </section>

      {/* Nav Hub footer */}
      <section className="bg-brand-ivory text-slate-700 py-16 border-t border-brand-stone" id="social-footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-[10px] font-mono text-brand-bronze uppercase tracking-widest block">Educational Media Core Network</span>
            <h3 className="font-display font-medium text-2xl text-brand-charcoal">Read Confirmed Digital Outposts</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto" id="social-other-pages-grid">
            <Link to="/media/" className="group p-4 bg-white hover:bg-brand-white border border-brand-stone rounded-xl text-center flex flex-col justify-between h-24 transition-all hover:border-brand-bronze hover:shadow-xs">
              <span className="text-slate-500 text-[9px] font-mono uppercase tracking-wider block">Media Hub</span>
              <span className="text-brand-charcoal font-display text-sm group-hover:text-brand-bronze transition-colors block font-semibold mt-1">Media Center Landing</span>
            </Link>

            <Link to="/professional-mentions/" className="group p-4 bg-white hover:bg-brand-white border border-brand-stone rounded-xl text-center flex flex-col justify-between h-24 transition-all hover:border-brand-bronze hover:shadow-xs">
              <span className="text-slate-500 text-[9px] font-mono uppercase tracking-wider block">External Directory Metrics</span>
              <span className="text-brand-charcoal font-display text-sm group-hover:text-brand-bronze transition-colors block font-semibold mt-1">Professional Mentions</span>
            </Link>

            <Link to="/videos/" className="group p-4 bg-white hover:bg-brand-white border border-brand-stone rounded-xl text-center flex flex-col justify-between h-24 transition-all hover:border-brand-bronze hover:shadow-xs">
              <span className="text-slate-500 text-[9px] font-mono uppercase tracking-wider block">Streaming</span>
              <span className="text-brand-charcoal font-display text-sm group-hover:text-brand-bronze transition-colors block font-semibold mt-1">Videos & Conversations</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
