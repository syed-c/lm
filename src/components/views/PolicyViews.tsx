import React from 'react';
import { useRouter, Link } from '../AppRouter.tsx';
import { BRAND_CONFIG, SEO_ROUTES_META, ARTICLES, VIDEOS } from '../../data.ts';
import { 
  ShieldCheck, 
  Eye, 
  Map, 
  BookOpen, 
  RefreshCcw, 
  Sliders, 
  Globe,  
  FileText 
} from 'lucide-react';

// Common header wrapper to keep legal views visually unified
const PolicyHeader: React.FC<{ title: string; desc: string }> = ({ title, desc }) => {
  return (
    <div className="border-b border-brand-stone/45 pb-6 mb-8 space-y-3 font-sans">
      <span className="text-xs font-mono font-bold text-brand-bronze uppercase tracking-widest block">Legal & Compliance Terminal</span>
      <h1 className="font-display font-medium text-brand-charcoal text-2xl md:text-4xl tracking-tight leading-tight">
        {title}
      </h1>
      <p className="text-sm text-slate-500 max-w-4xl leading-relaxed">
        {desc}
      </p>
    </div>
  );
};

// 1. FULL MEDICAL DISCLAIMER VIEW (/medical-disclaimer/)
export const MedicalDisclaimerView: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16" id="medical-disclaimer-page">
      <PolicyHeader 
        title="Medical Information & Educational Disclaimer" 
        desc="Important clinical disclosure regarding the educational materials, biochemical reviews, and public health articles shared on this platform." 
      />

      <div className="prose text-slate-600 text-sm md:text-base space-y-6 leading-relaxed font-sans">
        <p className="font-semibold text-brand-charcoal">
          Please read this clinical disclosure carefully before consuming articles, watching educational videos, or utilizing the correspondence channels provided on this personal hub.
        </p>

        <section className="space-y-3">
          <h3 className="font-display font-semibold text-brand-charcoal text-[17px] border-l-2 border-brand-bronze pl-3">1. No Professional Medical Advice</h3>
          <p>
            All information and copy logs hosted on {BRAND_CONFIG.displayName}—including articles, biochemical charts, physiological timeline milestones, speaking downloads, and public video references—are engineered for informational, public health, and general educational dialogue only.
          </p>
          <p>
            None of this content represents active diagnostic plans, therapeutic treatment recommendations, orthodontic outlines, or dental surgical operations. It must never act as a replacement for specialized clinical diagnostics, periodontal checkups, or emergency dental treatments.
          </p>
        </section>

        <section className="space-y-3">
          <h3 className="font-display font-semibold text-brand-charcoal text-[17px] border-l-2 border-brand-bronze pl-3">2. No Dentist-Patient Relationship</h3>
          <p>
            Reviewing, clicking, or corresponding with {BRAND_CONFIG.personName} via this personal profile does not create a diagnostic dentists' relationship. Submitting queries to our general brand relations correspondence terminal does not establish HIPAA-protected health record pipelines or construct a therapeutic patient-provider contract.
          </p>
        </section>

        <section className="space-y-3">
          <h3 className="font-display font-semibold text-brand-charcoal text-[17px] border-l-2 border-brand-bronze pl-3">3. Clinical Redirection and Appointments</h3>
          <p>
            For individual diagnostic evaluations, teeth treatments, cosmetic dental plans, composite veneer designs, or clinical checkups, users must seek direct clinical care. Dr. Liyan Massaband maintains active clinical associations at:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong>Burbank Office:</strong> Magnolia Dentistry — 
              <a href="https://www.magnoliadentistry.com/" target="_blank" rel="noopener noreferrer" className="text-brand-bronze hover:underline ml-1">Visit Magnolia Dentistry Website</a>
            </li>
            <li>
              <strong>Beverly Hills Office:</strong> ConfiDental Beverly Hills — 
              <a href="https://confidentalbeverlyhills.com/" target="_blank" rel="noopener noreferrer" className="text-brand-bronze hover:underline ml-1">Visit ConfiDental Beverly Hills Website</a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

// 2. PRIVACY POLICY VIEW (/privacy-policy/)
export const PrivacyPolicyView: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16" id="privacy-policy-page">
      <PolicyHeader 
        title="Privacy Policy & Information Security" 
        desc={`How data, communication logs, and correspondence are handled on ${BRAND_CONFIG.displayName}.`} 
      />

      <div className="prose text-slate-600 text-sm space-y-6 leading-relaxed font-sans">
        <p>
          At this personal platform, protecting your secure digital footprints and communications remains our absolute compliance benchmark. 
        </p>

        <section className="space-y-2">
          <h3 className="font-display font-semibold text-brand-charcoal text-[16px]">1. HIPAA Compliance & Patient Data Restriction</h3>
          <p>
            Because this platform represents Dr. Liyan Massaband's public-relations identity and educational portfolio—rather than an active medical clinic—we do not collect, maintain, or catalog protected health information (PHI) as defined under the Health Insurance Portability and Accountability Act (HIPAA).
          </p>
          <p className="font-semibold text-brand-plum">
            We actively warn users: Please do not submit dental charts, clinical histories, medication files, or health identifiers via our contact forms. 
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="font-display font-semibold text-brand-charcoal text-[16px]">2. Correspondence Inquiries Data</h3>
          <p>
            If you submit inquiries via the digital correspondence terminal, we capture your legal name, email, telephone number, inquiry type, and message content. This information is processed securely for speaking panels, PR scheduling, or forwarding appointment requests to her respective Burbank or Beverly Hills practices.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="font-display font-semibold text-brand-charcoal text-[16px]">3. Analytics & Cookie Tracking</h3>
          <p>
            We use temporary, lightweight, sandboxed client-side cookies solely to retain system configurations (such as layout states representing mobile vs desktop viewport structures) and track non-personally identifiable browser patterns. We do not sell user data.
          </p>
        </section>
      </div>
    </div>
  );
};

// 3. ACCESSIBILITY STATEMENT (/accessibility/)
export const AccessibilityView: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16" id="accessibility-statement-page">
      <PolicyHeader 
        title="Web Accessibility Policy (WCAG 2.1 AA)" 
        desc="Our firm dedication to maintaining an open, readable, and highly accessible digital experience for all visitors." 
      />

      <div className="prose text-slate-600 text-sm space-y-6 leading-relaxed font-sans">
        <p>
          {BRAND_CONFIG.personName} believes that public health literacy and medical authority resources should remain completely open and readable, regardless of technological capabilities or physical challenges.
        </p>

        <section className="space-y-2">
          <h3 className="font-display font-semibold text-brand-charcoal text-[16px]">Core Standards & Benchmarks</h3>
          <p>
            During construction of this digital platform, we designed and audited our interface against the World Wide Web Consortium (W3C) **Web Content Accessibility Guidelines (WCAG) 2.1 Level AA** specifications:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li><strong>High-Contrast Color Tokens:</strong> Contrast ratios for all body typography meet or exceed the WCAG AA minimum 4.5:1 ratio. Text overlays are guarded by heavy charcoal backings.</li>
            <li><strong>Keyboard Accessibility:</strong> Dynamic elements, popups, timeline dots, form select fields, and menu dropdown triggers are keyboard addressable with highlighted ring outline vectors.</li>
            <li><strong>Optimized Semantics:</strong> All photo nodes, timeline illustrations, and video triggers incorporate readable ARIA tags and alternative descriptive copy text.</li>
            <li><strong>Responsive Adaptation:</strong> Layout parameters remain fully functional down to 320px width systems without structural text clipping or layout shifts.</li>
          </ul>
        </section>

        <section className="space-y-2 bg-brand-stone/10 p-4 rounded-xl">
          <h3 className="font-display font-semibold text-brand-charcoal text-[14px]">Feedback & Support</h3>
          <p className="text-xs">
            If you encounter difficulty interacting with any area of this professional authority website, please submit an issue or coordinate assistance via: <span className="font-mono">{BRAND_CONFIG.contactEmail}</span>.
          </p>
        </section>
      </div>
    </div>
  );
};

// 4. EDITORIAL STANDARDS & CORRECTIONS POLICY (/editorial-standards/)
export const EditorialStandardsView: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16" id="editorial-standards-page">
      <PolicyHeader 
        title="Editorial Standards & Fact-Verification Policy" 
        desc="How our digital platform manages factual statements, clinical credentials, professional references, and corrections procedures." 
      />

      <div className="prose text-slate-600 text-sm space-y-6 leading-relaxed font-sans">
        <p>
          To maintain the utmost integrity as a personal professional brand, this platform operates under a strict verification framework, protecting readers, clinic patient circles, and AI crawling bots from misleading biological claims or fabricated reviews.
        </p>

        <section className="space-y-2">
          <h3 className="font-display font-semibold text-brand-charcoal text-[16px]">1. Factual Citation Model</h3>
          <p>
            Every biographical claim, educational degree, board registration, and on-camera commentary mapped across this platform must link back to a verified, client-approved primary organization. Direct links to state licensing regulators, clinical portals, and federal databases are provided via our custom source overlays.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="font-display font-semibold text-brand-charcoal text-[16px]">2. No Articulated testimonials or Artificial Press Logos</h3>
          <p>
            We strictly enforce reputation safety rules. We do not display fabricated five-star ratings, artificial patient testimonials, or paid positive media badges. If external patient awards are shown, they must derive from verified platforms such as Zocdoc or local registration councils.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="font-display font-semibold text-brand-charcoal text-[16px]">3. Medical Review Procedures</h3>
          <p>
            Any informative article published in our insights section is compiled by Dr. Liyan Massaband, and must list the designated medical compliance reviewer, date of entry, and exact citation references before public authorization.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="font-display font-semibold text-brand-charcoal text-[16px]">4. Corrections Procedures</h3>
          <p>
            If a typographical oversight or clinical verification discrepancy is identified, we commit to modifying the record within 24 business hours. Submissions for compliance checks must be routed directly to: <span className="font-mono">{BRAND_CONFIG.contactEmail}</span>.
          </p>
        </section>
      </div>
    </div>
  );
};

// 4b. MEDICAL CONTENT REVIEW POLICY VIEW (/medical-review-policy/)
export const MedicalReviewPolicyView: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16" id="medical-review-policy-page">
      <PolicyHeader 
        title="Medical Content Review & Verification Policy" 
        desc="How our digital publication conducts editorial research, clinical validations, and compliance vetting on all anatomical health resources." 
      />

      <div className="prose text-slate-650 text-sm md:text-base space-y-6 leading-relaxed font-sans text-slate-600">
        <p className="font-semibold text-brand-charcoal">
          Our commitment to readers, practicing clinicians, and public health entities is that all articles and educational summaries hosted on this authority platform are held to rigorous fact-verification guidelines.
        </p>

        <section className="space-y-3">
          <h3 className="font-display font-semibold text-brand-charcoal text-[17px] border-l-2 border-brand-bronze pl-3">1. Primary Source Mandate</h3>
          <p>
            Every informative article discussing biochemical pathways, tooth-systemic health connections, and dental biomaterial sciences must draw solely from recognized, high-grade peer-reviewed journals, federal healthcare directories (like the NPI Registry and CDC), or state dental licensing councils. We strictly prohibit clinical declarations supported solely by promotional treatments, coupon offers, or manufacturer-sponsored blogs.
          </p>
        </section>

        <section className="space-y-3">
          <h3 className="font-display font-semibold text-brand-charcoal text-[17px] border-l-2 border-brand-bronze pl-3">2. Structured Peer Vetting Process</h3>
          <p>
            Prior to digital deployment, each piece of content passes through our peer review framework:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li><strong>Initial Draft & Bibliography Compiles:</strong> Written by Dr. Liyan Massaband, integrating her dual training in Physiological Sciences (B.S.) and Public Health (M.P.H.).</li>
            <li><strong>Peer Vetting Panel:</strong> Subjected to an editorial vetting board or designated cosmetic compliance reviewer who audits citation mappings and checks for clinical exaggeration.</li>
            <li><strong>Factual Seal Certification:</strong> Once certified, the entry is tagged with its reviewer and modified timestamp to ensure absolute reader visibility.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h3 className="font-display font-semibold text-brand-charcoal text-[17px] border-l-2 border-brand-bronze pl-3">3. Strict Avoidance of Fear-Based Materials</h3>
          <p>
            In alignment with public health advocacy, we avoid sensationalism, fear-based headlines (e.g., claiming mercury toxicity from simple amalgam fillings to scare clients into expensive procedures), or promise-based sales copy claiming a "miracle smile cure in an hour." Materials are curated solely for baseline consumer education.
          </p>
        </section>
      </div>
    </div>
  );
};

// 4c. CORRECTIONS POLICY VIEW (/corrections-policy/)
export const CorrectionsPolicyView: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16" id="corrections-policy-page">
      <PolicyHeader 
        title="Corrections & Fact-Alignment Policy" 
        desc="Our open, transparent guidelines for resolving typographical mistakes, bibliographic updates, and editorial corrections." 
      />

      <div className="prose text-slate-650 text-sm md:text-base space-y-6 leading-relaxed font-sans text-slate-600">
        <p className="font-semibold text-brand-charcoal">
          Factual accuracy is the absolute threshold of trust. Despite continuous peer reviews, minor oversights or updated scientific developments may arise. We welcome reports and maintain a strict correction protocol.
        </p>

        <section className="space-y-3">
          <h3 className="font-display font-semibold text-brand-charcoal text-[17px] border-l-2 border-brand-bronze pl-3">1. Submitting Correction Reports</h3>
          <p>
            If a practicing clinician, public health authority, or patient identifies an active discrepancy in our articles, biography timelines, or video transcript notations, they may submit an audit notice to: <span className="font-mono text-brand-bronze font-bold">{BRAND_CONFIG.contactEmail}</span>.
          </p>
          <p>
            Please enclose the specific page URL, the affected text phrase, the suggested replacement, and a link to the primary verifying documentation.
          </p>
        </section>

        <section className="space-y-3">
          <h3 className="font-display font-semibold text-brand-charcoal text-[17px] border-l-2 border-brand-bronze pl-3">2. Evaluation & Verification Timeline</h3>
          <p>
            Upon receipt of a verification report, our editorial board will investigate the underlying documentation within **24 business hours**. If the claim is verified, we apply adjustments immediately and log the modification timestamp visible on the page.
          </p>
        </section>

        <section className="space-y-3">
          <h3 className="font-display font-semibold text-brand-charcoal text-[17px] border-l-2 border-brand-bronze pl-3">3. Typographical vs. Substantive Corrections</h3>
          <p>
            Typographical improvements (like correcting spellings or formatting) are applied silently. Clear substantive modifications—such as correcting a citation fact, replacing a numerical metric, or adding a context disclaimer—are tagged with an editorial correction note at the bottom of the article to maximize public health clarity.
          </p>
        </section>
      </div>
    </div>
  );
};

// 5. HTML SITEMAP VIEW (/sitemap/)
export const SitemapView: React.FC = () => {
  const staticRoutes = Object.keys(SEO_ROUTES_META);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16" id="xml-sitemap-index">
      <PolicyHeader 
        title="Website Sitemap" 
        desc="Comprehensive semantic link directory mapping all crawlable views, active surgical essays, and video indexes." 
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
        {/* Core static links */}
        <div className="space-y-3 bg-brand-white border border-brand-stone p-6 rounded-2xl">
          <h3 className="font-display font-bold text-brand-charcoal text-[15px] border-b border-brand-stone/30 pb-2 flex items-center gap-1.5">
            <Globe className="w-4 h-4 text-brand-bronze" /> Core Brand Links
          </h3>
          <nav className="flex flex-col gap-2 text-sm text-slate-600">
            {staticRoutes.map(route => {
              const meta = SEO_ROUTES_META[route];
              return (
                <Link 
                  key={route} 
                  to={route} 
                  className="hover:text-brand-bronze transition-colors flex items-center gap-1.5 py-1 border-b border-brand-stone/10"
                >
                  <span className="font-mono text-slate-400 text-[11px]">{route === '/' ? '/home' : route}</span>
                  <span className="text-[12.5px] font-semibold text-brand-charcoal/80">— {meta?.title.split('|')[0]}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Dynamic Items links */}
        <div className="space-y-6">
          
          <div className="space-y-3 bg-brand-white border border-brand-stone p-6 rounded-2xl">
            <h3 className="font-display font-bold text-brand-charcoal text-[15px] border-b border-brand-stone/30 pb-2 flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-brand-bronze" /> Clinical Publications ({ARTICLES.length})
            </h3>
            <nav className="flex flex-col gap-2 text-sm text-slate-600">
              {ARTICLES.map(a => (
                <Link 
                  key={a.id} 
                  to={`/articles/${a.slug}/`} 
                  className="hover:text-brand-bronze transition-colors flex items-center justify-between font-medium py-1 border-b border-brand-stone/10"
                >
                  <span className="truncate max-w-[200px] text-brand-charcoal/80 font-semibold">{a.title}</span>
                  <span className="font-mono text-[10px] text-slate-400">/articles/{a.slug}</span>
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-3 bg-brand-white border border-brand-stone p-6 rounded-2xl">
            <h3 className="font-display font-bold text-brand-charcoal text-[15px] border-b border-brand-stone/30 pb-2 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-brand-bronze" /> Educational Videos ({VIDEOS.length})
            </h3>
            <nav className="flex flex-col gap-2 text-sm text-slate-600">
              {VIDEOS.map(v => (
                <Link 
                  key={v.id} 
                  to={`/videos/${v.id}/`} 
                  className="hover:text-brand-bronze transition-colors flex items-center justify-between font-medium py-1 border-b border-brand-stone/10"
                >
                  <span className="truncate max-w-[200px] text-brand-charcoal/80 font-semibold">{v.title}</span>
                  <span className="font-mono text-[10px] text-slate-400">/videos/{v.id}</span>
                </Link>
              ))}
            </nav>
          </div>

        </div>
      </div>
    </div>
  );
};
