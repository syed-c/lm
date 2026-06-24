import React from 'react';
import { useRouter, Link } from '../AppRouter.tsx';
import { SourceReferenceBadge } from '../SourceReferenceBadge.tsx';
import { PortraitPlaceholder } from './ProfileViews.tsx';
import { 
  Building2, 
  MapPin, 
  BadgeHelp, 
  CheckCircle2, 
  ShieldCheck, 
  Cpu, 
  FileCheck, 
  Library, 
  Activity, 
  ExternalLink, 
  ChevronRight,
  GraduationCap
} from 'lucide-react';
import { BRAND_CONFIG } from '../../data.ts';

export const EducationView: React.FC = () => {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  // Structured Data Schema for Education
  const educationSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${currentUrl}#webpage`,
        "url": currentUrl,
        "name": `Education & Credentials | ${BRAND_CONFIG.displayName}`,
        "description": "Review the verified educational background, degrees, certifications, and licenses of Dr. Liyan Massaband, D.M.D., M.P.H."
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Doctor of Dental Medicine (D.M.D.)",
        "credentialCategory": "degree",
        "recognizedInstitution": {
          "@type": "EducationalOrganization",
          "name": "Midwestern University"
        }
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Master of Public Health (M.P.H.)",
        "credentialCategory": "degree",
        "recognizedInstitution": {
          "@type": "EducationalOrganization",
          "name": "University of Southern California"
        }
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
            "name": "Education & Credentials",
            "item": { "@id": "/education-and-credentials/" }
          }
        ]
      }
    ]
  };

  return (
    <div className="bg-brand-white text-brand-charcoal animate-reveal leading-relaxed" id="education-credentials-page">
      {/* Schema Injection */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(educationSchema) }}
      />

      {/* Editorial Breadcrumb Header */}
      <div className="bg-brand-white border-b border-brand-stone/30 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs font-mono text-slate-500">
            <Link to="/" className="hover:text-brand-bronze transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-brand-charcoal font-medium">Education & Credentials</span>
          </nav>
        </div>
      </div>

      {/* Hero Section (Dark Academic Editorial) */}
      <section className="bg-[#0b0b0b] text-brand-white py-12 md:py-20 border-b border-brand-stone" id="education-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">
            
            {/* Hero Profile Photo */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm">
                <PortraitPlaceholder description="Dr. Liyan Massaband DMD MPH - Academic Credentials Header" />
              </div>
            </div>

            {/* Hero Statement */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[11px] font-mono font-bold text-brand-bronze uppercase tracking-widest border border-brand-bronze/40 px-3 py-1 rounded-full inline-block">
                Academic and Professional Foundation
              </span>
              
              <div className="space-y-2">
                <h1 className="font-display font-medium text-3xl md:text-5.5xl tracking-tight text-brand-white leading-none">
                  Education & Credentials
                </h1>
                <p className="text-xs font-mono uppercase tracking-widest text-slate-400 font-medium">
                  Verifiable Licensure & Double Degree Frameworks
                </p>
              </div>

              <p className="text-slate-300 text-sm md:text-base leading-relaxed font-sans max-w-2xl">
                Review the certified historical milestones of Dr. Liyan Massaband’s academic training. Fusing systematic physiological sciences, public health preventative coordination, and modern surgical dental technologies, her credentials demonstrate a verified dedication to biological patient wellness.
              </p>

              {/* Institution Icons Highlight */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-brand-stone/30 text-center text-xs text-slate-400 font-mono">
                <div className="space-y-1">
                  <span className="block font-bold text-brand-white text-xs">UArizona</span>
                  <span>Physiological BS</span>
                </div>
                <div className="space-y-1 border-l border-brand-stone/40">
                  <span className="block font-bold text-brand-white text-xs">USC</span>
                  <span>Public Health MPH</span>
                </div>
                <div className="space-y-1 border-l border-brand-stone/40">
                  <span className="block font-bold text-brand-white text-xs">Midwestern</span>
                  <span>Dental Medal DMD</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Core Body */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20" id="education-body-container">
        
        {/* Verification Alert Info Section */}
        <div className="bg-brand-stone/5 border border-brand-stone/50 p-6 rounded-2xl mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6" id="integrity-alert">
          <div className="space-y-1.5 max-w-3xl">
            <h3 className="text-xs font-mono font-bold text-brand-bronze uppercase tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-brand-bronze" /> Academic Records Transparency Policy
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed font-sans">
              Consistent with strict medical ethics, only facts fully corroborated against original directory datasets appear below. Unlisted graduation year timelines, GPA scores, or academic fellowships are labeled "Verification Pending" until client archives are released.
            </p>
          </div>
          <span className="text-[10px] uppercase tracking-wider font-mono bg-brand-charcoal/10 border border-brand-stone text-brand-charcoal px-3 py-1.5 rounded-lg shrink-0 text-center font-bold">
            Provider: 1346588407
          </span>
        </div>

        {/* Academic Timeline Cards Grid */}
        <div className="space-y-10" id="degrees-timeline-grid">
          
          {/* Card 1: Midwestern DMD */}
          <div className="bg-brand-white border border-brand-stone hover:border-brand-bronze rounded-2xl p-6 md:p-8 flex flex-col lg:flex-row justify-between gap-8 relative overflow-hidden transition-all duration-300">
            <div className="absolute top-0 left-0 right-0 h-1 bg-brand-bronze/40" />
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-brand-bronze uppercase bg-brand-bronze/5 px-2.5 py-1 rounded-full border border-brand-bronze/30">Doctoral Degree</span>
                <SourceReferenceBadge sourceIds={['MWU_BIO']} />
              </div>
              
              <div className="space-y-1">
                <h3 className="font-display font-semibold text-xl md:text-2xl text-brand-charcoal tracking-tight">
                  Doctor of Dental Medicine (D.M.D.)
                </h3>
                <p className="text-sm font-semibold text-slate-500 font-sans">
                  Midwestern University — College of Dental Medicine
                </p>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                Professional medical curriculum certifying surgical tooth preservation, biocosmetic porcelain materials, micro-endodontics, laser therapy diagnostics, and safe patient physiological sedation tracking.
              </p>
            </div>

            {/* Checklist Box */}
            <div className="bg-brand-stone/5 p-5 rounded-xl border border-brand-stone min-w-[280px] lg:min-w-[320px] font-mono text-[11px] space-y-3 shrink-0">
              <span className="font-bold text-brand-charcoal uppercase tracking-wider block border-b border-brand-stone pb-1.5">MWU Record Checklist</span>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Degree Status:</span>
                  <span className="text-[#10b981] font-semibold flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5" /> DMD Verified</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Licensure Board:</span>
                  <span className="text-[#10b981] font-semibold flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5" /> CA Active</span>
                </div>
                <div className="flex items-center justify-between border-t border-brand-stone/20 pt-2 text-slate-400">
                  <span>Graduation Year:</span>
                  <span className="italic flex items-center gap-1"><BadgeHelp className="w-3.5 h-3.5 text-amber-500" /> Pending Approval</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span>Academic Honors:</span>
                  <span className="italic flex items-center gap-1"><BadgeHelp className="w-3.5 h-3.5 text-amber-500" /> Pending Record</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: USC MPH */}
          <div className="bg-brand-white border border-brand-stone hover:border-brand-bronze rounded-2xl p-6 md:p-8 flex flex-col lg:flex-row justify-between gap-8 relative overflow-hidden transition-all duration-300">
            <div className="absolute top-0 left-0 right-0 h-1 bg-brand-bronze/40" />
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-brand-bronze uppercase bg-brand-bronze/5 px-2.5 py-1 rounded-full border border-brand-bronze/30">Master's Degree</span>
                <SourceReferenceBadge sourceIds={['USC_BIO']} />
              </div>
              
              <div className="space-y-1">
                <h3 className="font-display font-semibold text-xl md:text-2xl text-brand-charcoal tracking-tight">
                  Master of Public Health (M.P.H.)
                </h3>
                <p className="text-sm font-semibold text-slate-500 font-sans">
                  University of Southern California (USC)
                </p>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                Postgraduate education centered on global health epidemiology, preventive medicine distribution, medical literacy optimization, healthcare communication architectures, and patient agency strategies.
              </p>
            </div>

            {/* Checklist Box */}
            <div className="bg-brand-stone/5 p-5 rounded-xl border border-brand-stone min-w-[280px] lg:min-w-[320px] font-mono text-[11px] space-y-3 shrink-0">
              <span className="font-bold text-brand-charcoal uppercase tracking-wider block border-b border-brand-stone pb-1.5">USC Record Checklist</span>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Degree Status:</span>
                  <span className="text-[#10b981] font-semibold flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5" /> MPH Verified</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Department Track:</span>
                  <span className="font-semibold text-brand-charcoal">Global Health & Leadership</span>
                </div>
                <div className="flex items-center justify-between border-t border-brand-stone/20 pt-2 text-slate-400">
                  <span>Graduation Year:</span>
                  <span className="italic flex items-center gap-1"><BadgeHelp className="w-3.5 h-3.5 text-amber-500" /> Pending Approval</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span>Master's Thesis:</span>
                  <span className="italic flex items-center gap-1"><BadgeHelp className="w-3.5 h-3.5 text-amber-500" /> Pending Record</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Arizona BS */}
          <div className="bg-brand-white border border-brand-stone hover:border-brand-bronze rounded-2xl p-6 md:p-8 flex flex-col lg:flex-row justify-between gap-8 relative overflow-hidden transition-all duration-300">
            <div className="absolute top-0 left-0 right-0 h-1 bg-brand-bronze/40" />
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-brand-bronze uppercase bg-brand-bronze/5 px-2.5 py-1 rounded-full border border-brand-bronze/30">Undergraduate Degree</span>
                <SourceReferenceBadge sourceIds={['UA_BIO']} />
              </div>
              
              <div className="space-y-1">
                <h3 className="font-display font-semibold text-xl md:text-2xl text-brand-charcoal tracking-tight">
                  Bachelor of Science in Physiological Sciences
                </h3>
                <p className="text-sm font-semibold text-slate-500 font-sans">
                  University of Arizona
                </p>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                Comprehensive study analyzing muscular mechanical dynamics, respiratory buffers, metabolic homeostasis, organic biochemistry, and the foundational relationship between cardiac cells and systemic tissues.
              </p>
            </div>

            {/* Checklist Box */}
            <div className="bg-brand-stone/5 p-5 rounded-xl border border-brand-stone min-w-[280px] lg:min-w-[320px] font-mono text-[11px] space-y-3 shrink-0">
              <span className="font-bold text-brand-charcoal uppercase tracking-wider block border-b border-brand-stone pb-1.5">UA Record Checklist</span>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Degree Status:</span>
                  <span className="text-[#10b981] font-semibold flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5" /> BS Verified</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Curricula Target:</span>
                  <span className="font-semibold text-brand-charcoal">Physiological Sciences</span>
                </div>
                <div className="flex items-center justify-between border-t border-brand-stone/20 pt-2 text-slate-400">
                  <span>Graduation Year:</span>
                  <span className="italic flex items-center gap-1"><BadgeHelp className="w-3.5 h-3.5 text-amber-500" /> Pending Approval</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span>Collegiate Minor:</span>
                  <span className="italic flex items-center gap-1"><BadgeHelp className="w-3.5 h-3.5 text-amber-500" /> Pending Record</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Narrative Academic Descriptions */}
        <section className="mt-16 space-y-10" id="educational-disciplines-section">
          
          <div className="border-b border-brand-stone/30 pb-3">
            <h2 className="font-display font-medium text-2xl text-brand-charcoal tracking-tight">
              An Integrated Approach to Dental Medicine
            </h2>
            <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mt-1">Foundational Studies forming her Clinical Philosophy</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-slate-600 font-sans" id="academic-breakdown-details">
            {/* Physiological Sciences */}
            <div className="space-y-3">
              <div className="flex items-center gap-1.5 text-brand-bronze">
                <Cpu className="w-4.5 h-4.5 shrink-0" />
                <h4 className="font-semibold text-brand-charcoal">1. Systemic Physiology</h4>
              </div>
              <p className="text-xs leading-relaxed text-slate-500">
                Coursework analyzed neuromuscular reflexes, bone mineralization kinetics, and cardiac fluid dynamics. Fusing systems physiology with dentistry proves that individual teeth alignments are structurally integrated with cranial biomechanics and chronic biological pathways.
              </p>
            </div>

            {/* Public Health */}
            <div className="space-y-3">
              <div className="flex items-center gap-1.5 text-brand-bronze">
                <Library className="w-4.5 h-4.5 shrink-0" />
                <h4 className="font-semibold text-brand-charcoal">2. Communications & Literacy</h4>
              </div>
              <p className="text-xs leading-relaxed text-slate-500">
                USC's global health program targeted epidemiologic literacy, analyzing how medical systems clarify diagnosis coordinates. Fusing M.P.H. strategies ensures her private-practice communications decrease dental anxiety by optimizing explanations.
              </p>
            </div>

            {/* Dental Surgery */}
            <div className="space-y-3">
              <div className="flex items-center gap-1.5 text-brand-bronze">
                <GraduationCap className="w-4.5 h-4.5 shrink-0" />
                <h4 className="font-semibold text-brand-charcoal">3. Clinical Materials Precision</h4>
              </div>
              <p className="text-xs leading-relaxed text-slate-500">
                Midwestern's curriculum certified advanced CAD restore systems and modern laser diagnosis. This surgical expertise ensures that her mechanical veneers, implant crowns, and restorative procedures preserve sound dentin structures.
              </p>
            </div>
          </div>

        </section>

        {/* SECTION 4: PROFESSIONAL VERIFICATION */}
        <section className="mt-16 space-y-6" id="licensing-board-verification">
          <div className="border-b border-brand-stone/30 pb-3">
            <h2 className="font-display font-medium text-2xl text-brand-charcoal tracking-tight">
              Verifiable Professional Credentials
            </h2>
            <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mt-1">Official Licensing Directory Listings</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-1 text-xs">
            {/* NPI registry */}
            <div className="border border-brand-stone p-4 rounded-xl space-y-1.5">
              <span className="text-[10px] font-mono text-slate-400 block uppercase">NPI registry verified</span>
              <p className="font-bold text-brand-charcoal">National Provider Identifier</p>
              <p className="text-[11px] text-slate-500 font-mono">Code: 1346588407</p>
              <a 
                href="https://npiregistry.cms.hhs.gov/provider-view/1346588407" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-brand-bronze font-mono text-[10px] uppercase font-bold hover:underline flex items-center gap-1.5 pt-1.5"
              >
                View registry <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* California License status */}
            <div className="border border-brand-stone p-4 rounded-xl space-y-1.5">
              <span className="text-[10px] font-mono text-slate-400 block uppercase">Dental Board of California</span>
              <p className="font-bold text-brand-charcoal">DDS/DMD License</p>
              <p className="text-[11px] text-slate-500 font-mono">Status: Active & Registered</p>
              <Link 
                to="/clinical-affiliations/"
                className="text-brand-bronze font-mono text-[10px] uppercase font-bold hover:underline flex items-center gap-1.5 pt-1.5"
              >
                View credentials <ChevronRight className="w-3 h-3" />
              </Link>
            </div>

            {/* practice locations */}
            <div className="border border-brand-stone p-4 rounded-xl space-y-1.5">
              <span className="text-[10px] font-mono text-slate-400 block uppercase">Magnolia Dentistry Burbank</span>
              <p className="font-bold text-brand-charcoal">Associate Dentist</p>
              <p className="text-[11px] text-slate-500 font-mono">Registry: Burbank Practice portal</p>
              <a 
                href="https://www.magnoliadentistry.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-brand-bronze font-mono text-[10px] uppercase font-bold hover:underline flex items-center gap-1.5 pt-1.5"
              >
                View Bio <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Beverley Hills Clinic */}
            <div className="border border-brand-stone p-4 rounded-xl space-y-1.5">
              <span className="text-[10px] font-mono text-[#10b981] block uppercase flex items-center gap-1"><CheckCircle2 className="w-3 h-3 shrink-0" /> ConfiDental Beverly Hills</span>
              <p className="font-bold text-brand-charcoal">Associate Dentist</p>
              <p className="text-[11px] text-slate-500 font-mono">Registry: Beverly Hills Practice</p>
              <a 
                href="https://confidentalbeverlyhills.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-brand-bronze font-mono text-[10px] uppercase font-bold hover:underline flex items-center gap-1.5 pt-1.5"
              >
                View Bio <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 5: CONTINUOUS MEDICAL EDUCATION & REGISTRIES CMS MODULE */}
        <section className="mt-16 bg-brand-stone/10 border border-brand-stone p-6 md:p-8 rounded-2xl space-y-6" id="memberships-cms-section">
          <div className="space-y-1 text-center">
            <span className="text-[10px] font-mono uppercase bg-brand-bronze/10 border border-brand-bronze/30 text-brand-bronze px-2.5 py-1 rounded-full font-bold">
              Verification Required Records Box
            </span>
            <h3 className="font-display font-medium text-lg md:text-xl text-brand-charcoal tracking-tight mt-2.5">
              Continuing Education (CE) & Professional Memberships Tracker
            </h3>
            <p className="text-xs text-slate-500 max-w-xl mx-auto font-sans leading-relaxed">
              Dr. Massaband regularly completes advanced coursework to maintain certification geometries. The database profiles below will list verified course logs (e.g. ADA, CDA, AACD) once her original certificate archives are recorded by her clinical coordinators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono" id="pending-memberships-list">
            <div className="bg-brand-white border border-brand-stone/60 p-4 rounded-xl space-y-2 text-slate-400">
              <span className="block text-slate-500 font-bold uppercase tracking-wider text-[9px]">1. Academy / Registry :</span>
              <span className="block font-semibold text-brand-charcoal/40">American Dental Association (ADA)</span>
              <span className="inline-flex items-center gap-1 text-[9px] text-amber-500 font-semibold bg-amber-500/5 px-2 py-0.5 rounded-full border border-amber-500/30">
                <BadgeHelp className="w-3.5 h-3.5" /> Awaiting Records
              </span>
            </div>

            <div className="bg-brand-white border border-brand-stone/60 p-4 rounded-xl space-y-2 text-slate-400">
              <span className="block text-slate-500 font-bold uppercase tracking-wider text-[9px]">2. Academy / Registry :</span>
              <span className="block font-semibold text-brand-charcoal/40">California Dental Association (CDA)</span>
              <span className="inline-flex items-center gap-1 text-[9px] text-amber-500 font-semibold bg-amber-500/5 px-2 py-0.5 rounded-full border border-amber-500/30">
                <BadgeHelp className="w-3.5 h-3.5" /> Awaiting Records
              </span>
            </div>

            <div className="bg-brand-white border border-brand-stone/60 p-4 rounded-xl space-y-2 text-slate-400">
              <span className="block text-slate-500 font-bold uppercase tracking-wider text-[9px]">3. Academy / Registry :</span>
              <span className="block font-semibold text-brand-charcoal/40">Academy of Cosmetic Dentistry (AACD)</span>
              <span className="inline-flex items-center gap-1 text-[9px] text-amber-500 font-semibold bg-amber-500/5 px-2 py-0.5 rounded-full border border-amber-500/30">
                <BadgeHelp className="w-3.5 h-3.5" /> Awaiting Records
              </span>
            </div>
          </div>
        </section>

        {/* University Brand & Logo Disclaimer Section */}
        <section className="mt-16 bg-[#1a1a1a] border border-brand-charcoal p-5 md:p-6 rounded-xl text-[11px] text-slate-400 font-mono leading-relaxed flex items-start gap-4" id="university-trademark-disclaimer">
          <FileCheck className="w-5 h-5 text-brand-bronze shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold text-slate-200 uppercase">Trademark & Institutional Entity Disclaimer:</span>
            <p className="text-[10px]">
              Academic nomenclature, including the University of Arizona, the University of Southern California (USC), and Midwestern University, is utilized here for historical biographical reference only. These listings corroborate Dr. Massaband’s verified academic past but do not constitute corporate sponsorship, endorsement, or marketing agreements from these respective board offices.
            </p>
          </div>
        </section>

      </div>

      {/* Recommended Related Navigation Links */}
      <section className="bg-brand-charcoal text-slate-300 py-16 border-t border-brand-stone" id="authority-hub-navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-[10px] font-mono text-brand-bronze uppercase tracking-widest block">Authority Index Ecosystem</span>
            <h3 className="font-display font-medium text-2xl text-brand-white">Explore Dr. Liyan Massaband's Profile</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4" id="related-pages-grid">
            <Link to="/dr-liyan-massaband/" className="group p-4 bg-[#151515] hover:bg-[#1a1a1a] border border-brand-stone/20 rounded-xl text-center flex flex-col justify-between h-28 transition-all hover:border-brand-bronze">
              <span className="text-slate-400 text-[10px] font-mono uppercase tracking-wider block">Official Directory</span>
              <span className="text-brand-white font-display text-[13px] font-semibold block mt-2 group-hover:text-brand-bronze transition-colors">Official Profile</span>
              <span className="text-brand-bronze text-[10px] font-mono mt-auto flex items-center justify-center gap-0.5">
                Explore <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>

            <Link to="/her-story/" className="group p-4 bg-[#151515] hover:bg-[#1a1a1a] border border-brand-stone/20 rounded-xl text-center flex flex-col justify-between h-28 transition-all hover:border-brand-bronze">
              <span className="text-slate-400 text-[10px] font-mono uppercase tracking-wider block">Biography</span>
              <span className="text-brand-white font-display text-[13px] font-semibold block mt-2 group-hover:text-brand-bronze transition-colors">Her Story</span>
              <span className="text-brand-bronze text-[10px] font-mono mt-auto flex items-center justify-center gap-0.5">
                Explore <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>

            <Link to="/professional-journey/" className="group p-4 bg-[#151515] hover:bg-[#1a1a1a] border border-brand-stone/20 rounded-xl text-center flex flex-col justify-between h-28 transition-all hover:border-brand-bronze">
              <span className="text-slate-400 text-[10px] font-mono uppercase tracking-wider block">Timeline</span>
              <span className="text-brand-white font-display text-[13px] font-semibold block mt-2 group-hover:text-brand-bronze transition-colors">Journey</span>
              <span className="text-brand-bronze text-[10px] font-mono mt-auto flex items-center justify-center gap-0.5">
                Explore <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>

            <Link to="/philosophy/" className="group p-4 bg-[#151515] hover:bg-[#1a1a1a] border border-brand-stone/20 rounded-xl text-center flex flex-col justify-between h-28 transition-all hover:border-brand-bronze">
              <span className="text-slate-400 text-[10px] font-mono uppercase tracking-wider block">Core Beliefs</span>
              <span className="text-brand-white font-display text-[13px] font-semibold block mt-2 group-hover:text-brand-bronze transition-colors">Philosophy</span>
              <span className="text-brand-bronze text-[10px] font-mono mt-auto flex items-center justify-center gap-0.5">
                Explore <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>

            <Link to="/clinical-affiliations/" className="group p-4 bg-[#151515] hover:bg-[#1a1a1a] border border-brand-stone/20 rounded-xl text-center flex flex-col justify-between h-28 transition-all hover:border-brand-bronze">
              <span className="text-slate-400 text-[10px] font-mono uppercase tracking-wider block">Clinics</span>
              <span className="text-brand-white font-display text-[13px] font-semibold block mt-2 group-hover:text-brand-bronze transition-colors">Affiliations</span>
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
