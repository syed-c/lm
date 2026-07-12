import React, { useState } from 'react';
import { 
  CheckCircle2, 
  MessageSquare, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  Filter,
  User,
  Heart
} from 'lucide-react';
import { Link } from '../AppRouter.tsx';

interface Story {
  id: string;
  category: 'Single Implant' | 'Multiple Implants' | 'All-on-X' | 'Full-Arch' | 'Implant Dentures' | 'Complex Cases';
  title: string;
  patientInitials: string;
  location: string;
  originalConcern: string;
  diagnosis: string;
  optionsDiscussed: string[];
  selectedPlan: string;
  implantsCount: number;
  temporaryRestoration: string;
  healingPeriod: string;
  finalRestoration: string;
  timeline: string;
  experience: string;
}

export const PatientStoriesView: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { value: 'all', label: 'All Cases' },
    { value: 'Single Implant', label: 'Single Implants' },
    { value: 'Multiple Implants', label: 'Multiple Implants' },
    { value: 'All-on-X', label: 'All-on-X Fixed' },
    { value: 'Implant Dentures', label: 'Supported Dentures' },
    { value: 'Complex Cases', label: 'Complex Revisions' }
  ];

  const stories: Story[] = [
    {
      id: "case-01",
      category: "All-on-X",
      title: "Full-Arch Restoration After Failing Crown & Bridge Work",
      patientInitials: "M. R.",
      location: "Beverly Hills",
      originalConcern: "Continuous pain, loose bridges, missing teeth, and severe chewing limitations. The patient was avoiding solid foods entirely.",
      diagnosis: "Generalized severe periodontitis with localized clinical bone loss, root decay beneath old crowns, and multiple failing dental bridges.",
      optionsDiscussed: [
        "Traditional complete upper & lower removable dentures",
        "Multiple individual implants combined with bone grafting",
        "Upper and Lower All-on-X fixed restorations (selected option)"
      ],
      selectedPlan: "Bi-maxillary All-on-X computer-guided placements (5 implants on the upper arch, 4 implants on the lower arch) supporting immediate fixed temporary bridges.",
      implantsCount: 9,
      temporaryRestoration: "Immediate PMMA fixed cosmetic healing bridges fitted on the day of surgery.",
      healingPeriod: "4.5 months of osseointegration. Soft food diet strictly maintained.",
      finalRestoration: "Milled Monolithic Zirconia fixed bridges custom-stained to replicate natural gingiva and enamel.",
      timeline: "5.5 months total from consultation to final teeth fitting.",
      experience: "\"I had spent ten years dreading my teeth breaking. Dr. Massaband mapped out everything on a 3D model. Getting my temporary teeth on the same day changed my life. I can finally chew apples and steak without fear.\""
    },
    {
      id: "case-02",
      category: "Single Implant",
      title: "Replacing a Fractured Upper Premolar",
      patientInitials: "A. S.",
      location: "Burbank",
      originalConcern: "Fractured right first premolar tooth due to physical sports impact. Visible gap in the smile line.",
      diagnosis: "Oblique root fracture extending 3mm below the bone level, rendering the tooth unrestorable by root canal or crown.",
      optionsDiscussed: [
        "Traditional 3-unit dental bridge (requires grinding down adjacent teeth)",
        "Single-tooth dental implant with immediate temporary placement (selected)"
      ],
      selectedPlan: "Atraumatic extraction, immediate socket preservation bone graft, 3D computer-guided single titanium implant post placement with a customized temporary crown.",
      implantsCount: 1,
      temporaryRestoration: "Custom screw-retained composite temporary crown designed to avoid direct bite load during healing.",
      healingPeriod: "3.5 months.",
      finalRestoration: "Screw-retained custom zirconia crown on a custom titanium abutment.",
      timeline: "4 months total.",
      experience: "\"I was terrified of grinding down my adjacent perfect teeth for a bridge. Dr. Massaband placed the implant with practically no discomfort. The final zirconia tooth is completely indistinguishable from my real teeth.\""
    },
    {
      id: "case-03",
      category: "Multiple Implants",
      title: "Resolving 3 Missing Lower Teeth with an Implant Bridge",
      patientInitials: "G. H.",
      location: "Burbank",
      originalConcern: "Unable to chew on the lower left side due to three missing molar teeth. Premature wearing on the right side teeth.",
      diagnosis: "Localized posterior tooth loss with early alveolar bone resorption and tipping of opposing upper teeth.",
      optionsDiscussed: [
        "Removable partial chrome denture",
        "Two-implant supported 3-unit bridge (selected)"
      ],
      selectedPlan: "Two titanium implant fixtures placed in the lower left molar zones, spanning a 3-unit ceramic bridge.",
      implantsCount: 2,
      temporaryRestoration: "None used during osseointegration as the site was posterior and out of the smile line.",
      healingPeriod: "4 months.",
      finalRestoration: "3-unit high-strength translucent ceramic bridge screw-retained over dual implants.",
      timeline: "4.5 months total.",
      experience: "\"My partial denture was always slipping out at dinners. This implant bridge feels like my natural teeth grew back. Chewing is perfectly symmetric now.\""
    },
    {
      id: "case-04",
      category: "Implant Dentures",
      title: "Securing Loose Lower Dentures with Snapped Overdentures",
      patientInitials: "J. K.",
      location: "Beverly Hills",
      originalConcern: "Traditional lower denture continuously floating, causing deep gum sores and difficulty speaking clearly.",
      diagnosis: "Severe ridge resorption of the mandibular arch, providing insufficient mechanical friction to retain a traditional denture.",
      optionsDiscussed: [
        "Lower All-on-X fixed prosthesis",
        "Two-implant locator retained lower snap-on overdenture (selected due to budget preference)"
      ],
      selectedPlan: "Placement of two dental implants in the lower canine areas, fitted with custom locator retention snaps to secure the existing denture.",
      implantsCount: 2,
      temporaryRestoration: "Existing lower denture modified with soft relining tissue conditioning material to wear during healing.",
      healingPeriod: "3 months.",
      finalRestoration: "Modified lower overdenture containing embedded nylon locator snaps.",
      timeline: "3.5 months total.",
      experience: "\"I couldn't afford fixed teeth, but this snap option was extremely reasonable. My lower plate snaps in with a satisfying click. It does not slide anymore!\""
    },
    {
      id: "case-05",
      category: "Complex Cases",
      title: "Revision of Failing Older Implant and Sinus Grafting",
      patientInitials: "E. B.",
      location: "Beverly Hills",
      originalConcern: "Older, loose implant in the upper right molar zone with chronic sinus congestion and gum bleeding.",
      diagnosis: "Peri-implantitis with severe bone loss exposing the implant threads. Minimal residual native sinus floor height.",
      optionsDiscussed: [
        "Removal of the implant and long-term bridge",
        "Exploratory removal, localized cleaning, sinus lift graft, and delayed implant replacement (selected)"
      ],
      selectedPlan: "Atraumatic surgical removal of the failing fixture, advanced debridement of infected tissue, lateral sinus lift bone graft, and delayed replacement placement after 6 months.",
      implantsCount: 1,
      temporaryRestoration: "Cosmetic removable Essix retainer to protect the site.",
      healingPeriod: "6 months for bone graft consolidation, followed by 3.5 months for the new implant integration.",
      finalRestoration: "Custom monolithic zirconia crown over a premium gold-toned abutment for warm gingival aesthetics.",
      timeline: "10 months total.",
      experience: "\"Other dentists told me I couldn't get another implant because of sinus bone loss. Dr. Massaband performed the sinus lift and safely replaced the tooth. The bleeding is gone, and the new tooth is completely solid.\""
    }
  ];

  const filteredStories = selectedCategory === 'all' 
    ? stories 
    : stories.filter(s => s.category === selectedCategory);

  return (
    <div className="bg-brand-white" id="patient-stories-view-root">
      
      {/* 1. EDITORIAL HEADER */}
      <section className="bg-gradient-to-b from-brand-stone/20 via-brand-white to-brand-white py-16 md:py-24 border-b border-brand-stone/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-mono font-bold text-brand-bronze uppercase tracking-widest border border-brand-bronze/30 bg-brand-bronze/5 px-3 py-1 rounded-full inline-block">
            Clinical Transparency & E-E-A-T
          </span>
          <h1 className="font-display font-medium text-brand-charcoal text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] max-w-4xl mx-auto">
            Implant Patient Case Stories
          </h1>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto font-sans">
            Explore detailed histories of dental implant patients treated under the guidance of Dr. Liyan Massaband. Every case outlines the initial biological diagnosis, treatment planning options, and healing metrics.
          </p>
          
          <div className="pt-2 flex items-center justify-center gap-2 text-[11px] text-slate-500 bg-brand-stone/10 border border-brand-stone max-w-xl mx-auto p-3.5 rounded-xl font-sans">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Note: These are anonymized clinical profiles. Individual treatment plans are customized based on comprehensive diagnostic scans.</span>
          </div>
        </div>
      </section>

      {/* 2. STORY CATEGORY FILTERS */}
      <section className="py-6 border-b border-brand-stone/40 bg-white sticky top-[60px] md:top-[70px] z-20 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <div className="flex gap-2 font-mono text-xs font-bold uppercase tracking-wider">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`px-4 py-2 rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    selectedCategory === cat.value 
                      ? 'bg-brand-bronze text-white shadow-xs' 
                      : 'bg-brand-stone/15 text-slate-600 hover:bg-brand-stone/30'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. STORIES FEED GRID */}
      <section className="py-16 bg-brand-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {filteredStories.length === 0 ? (
            <div className="text-center py-20 border border-dashed border-brand-stone rounded-2xl">
              <p className="text-sm text-slate-400">No cases found matching this selection.</p>
            </div>
          ) : (
            filteredStories.map((story) => (
              <div 
                key={story.id} 
                className="bg-white border border-brand-stone rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow duration-300 grid grid-cols-1 lg:grid-cols-12 gap-0"
              >
                
                {/* Left Profile details block (3 cols) */}
                <div className="lg:col-span-4 bg-brand-stone/5 p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-brand-stone flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold text-brand-bronze uppercase tracking-widest border border-brand-bronze/20 bg-brand-bronze/5 px-2.5 py-1 rounded-full">
                        {story.category}
                      </span>
                      <span className="text-[11px] font-mono text-slate-400">
                        Case Reference {story.id}
                      </span>
                    </div>

                    <h2 className="font-display font-bold text-brand-charcoal text-xl leading-snug">
                      {story.title}
                    </h2>

                    <div className="space-y-2 text-xs text-slate-500 font-sans pt-3">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-brand-bronze shrink-0" />
                        <span>Patient Initials: <strong>{story.patientInitials}</strong></span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-brand-bronze shrink-0" />
                        <span>Clinical Timeline: <strong>{story.timeline}</strong></span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-bronze shrink-0" />
                        <span>Implants Utilized: <strong>{story.implantsCount} post{story.implantsCount > 1 ? 's' : ''}</strong></span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-brand-stone/30 mt-6">
                    <p className="text-[10px] font-mono text-slate-400 block uppercase tracking-wider mb-1">
                      TREATING LOCATION
                    </p>
                    <span className="text-xs font-semibold text-brand-charcoal">
                      Dr. Massaband • {story.location} Office
                    </span>
                  </div>
                </div>

                {/* Right clinical narrative block (8 cols) */}
                <div className="lg:col-span-8 p-6 sm:p-8 space-y-6">
                  
                  {/* Complaint & Diagnosis */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <strong className="text-[10px] font-mono font-bold text-brand-bronze block uppercase tracking-wider">
                        01. Original Patient Complaint
                      </strong>
                      <p className="text-xs text-slate-600 leading-relaxed font-sans">
                        {story.originalConcern}
                      </p>
                    </div>
                    <div className="space-y-1.5">
                      <strong className="text-[10px] font-mono font-bold text-brand-bronze block uppercase tracking-wider">
                        02. Clinical Diagnosis
                      </strong>
                      <p className="text-xs text-slate-600 leading-relaxed font-sans">
                        {story.diagnosis}
                      </p>
                    </div>
                  </div>

                  {/* Options & Plan */}
                  <div className="p-4 bg-brand-stone/10 rounded-xl space-y-3">
                    <strong className="text-[10px] font-mono font-bold text-brand-bronze block uppercase tracking-wider">
                      03. Custom Treatment Planning Decisions
                    </strong>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
                      <div>
                        <span className="text-slate-400 font-bold block mb-1">Options Audited:</span>
                        <ul className="list-disc pl-4 space-y-1 text-slate-500">
                          {story.optionsDiscussed.map((opt, i) => (
                            <li key={i}>{opt}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <span className="text-brand-charcoal font-bold block mb-1">Selected Clinical Protocol:</span>
                        <p className="text-slate-600 leading-normal">
                          {story.selectedPlan}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* RESTORATION DETAILS */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-sans border-t border-brand-stone/30 pt-4">
                    <div>
                      <strong className="text-slate-400 block font-mono text-[10px] uppercase">TEMPORARY RESTORATION</strong>
                      <p className="text-slate-600 font-medium mt-1 leading-normal">
                        {story.temporaryRestoration}
                      </p>
                    </div>
                    <div>
                      <strong className="text-slate-400 block font-mono text-[10px] uppercase">HEALING / INTEGRATION</strong>
                      <p className="text-slate-600 font-medium mt-1 leading-normal">
                        {story.healingPeriod}
                      </p>
                    </div>
                    <div>
                      <strong className="text-slate-400 block font-mono text-[10px] uppercase">FINAL RESTORATION</strong>
                      <p className="text-slate-600 font-medium mt-1 leading-normal">
                        {story.finalRestoration}
                      </p>
                    </div>
                  </div>

                  {/* Pullquote/Experience */}
                  <div className="border-t border-brand-stone/30 pt-4 flex gap-3">
                    <MessageSquare className="w-5 h-5 text-brand-bronze shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[9px] font-mono text-slate-400 block uppercase">PATIENT FEEDBACK DIALOGUE</span>
                      <p className="text-xs text-slate-600 italic font-sans mt-0.5">
                        {story.experience}
                      </p>
                    </div>
                  </div>

                </div>

              </div>
            ))
          )}

          {/* 4. RESULTS LIMITATIONS */}
          <div className="bg-brand-stone/10 border border-brand-stone p-6 rounded-2xl max-w-3xl mx-auto space-y-3 font-sans">
            <h4 className="font-display font-bold text-xs text-brand-charcoal flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-bronze" />
              Medically Responsible Clinical Statement
            </h4>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Dr. Liyan Massaband maintains strict alignment with ethical advertising standards. Before-and-after results or patient stories shown represent successful individual outcomes of selected clinical treatments. These histories do not constitute a promise or guarantee of identical results. Healing processes, bone densities, and aesthetic contours vary due to individual biological limits.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};
