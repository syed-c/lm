import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  Filter, 
  Clock, 
  User, 
  Calendar, 
  ArrowRight, 
  FileText, 
  ShieldCheck, 
  ArrowUpRight 
} from 'lucide-react';
import { Link } from '../AppRouter.tsx';
import { BRAND_CONFIG } from '../../data.ts';

interface Article {
  id: string;
  title: string;
  slug: string;
  category: 'Basics' | 'All-on-X' | 'Full-Mouth' | 'Risks & Healing' | 'Costs & Decisions';
  readTime: string;
  excerpt: string;
  content: string;
  publishDate: string;
  modifiedDate: string;
}

export const ImplantEducationView: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const categories = [
    { value: 'all', label: 'All Subjects' },
    { value: 'Basics', label: 'Implant Basics' },
    { value: 'All-on-X', label: 'All-on-X Guides' },
    { value: 'Full-Mouth', label: 'Full-Mouth Care' },
    { value: 'Risks & Healing', label: 'Risks & Recovery' },
    { value: 'Costs & Decisions', label: 'Costs & Decisions' }
  ];

  const articles: Article[] = [
    {
      id: "edu-01",
      title: "How Dental Implants Work: The Biological Process of Osseointegration",
      slug: "how-dental-implants-work",
      category: "Basics",
      readTime: "6 min read",
      excerpt: "Explore the fascinating bio-chemical process where living bone cells fuse directly to medical-grade titanium posts to restore natural tooth function.",
      publishDate: "2026-03-12",
      modifiedDate: "2026-06-01",
      content: `## The Molecular Science of Osseointegration

Osseointegration, a term originally coined by Swedish researcher Dr. Per-Ingvar Brånemark, is the structural and functional connection between living bone tissue and the surface of a load-bearing artificial implant.

When an implant post is surgically guided into the jawbone, a sequence of biological cascades begins:

1. **Hematoma Formation:** Instantly, blood proteins coat the titanium oxide surface, forming a fibrin matrix.
2. **Cellular Migration:** Over the first 48 hours, osteoprogenitor cells (bone-forming cells) travel to the implant surface.
3. **Woven Bone Deposition:** Between week 1 and week 4, unstable woven bone forms around the threads.
4. **Bone Remodeling:** Over 3 to 6 months, this temporary woven bone is replaced by dense, highly organized lamellar bone. This creates a permanent, solid structural bond.

### Why Material Biocompatibility Matters

Dr. Massaband utilizes top-tier, Swiss-manufactured titanium and metal-free zirconia systems. Titanium is highly compatible because of its stable oxide surface layer, which prevents chemical corrosion in living tissues. This biological integration is the reason implants do not suffer from decay, though they still require clean gum fibers to avoid infections.`
    },
    {
      id: "edu-02",
      title: "All-on-X vs. Traditional Dentures: A Complete Structural Analysis",
      slug: "all-on-x-versus-dentures",
      category: "All-on-X",
      readTime: "8 min read",
      excerpt: "A detailed comparison analyzing chewing force distribution, jawbone density preservation, and speech comfort differences.",
      publishDate: "2026-04-18",
      modifiedDate: "2026-06-15",
      content: `## Biomechanics of Full-Arch Tooth Replacements

For patients with extensive tooth damage or historic loss, choosing between traditional removable dentures and All-on-X fixed implants is a major decision.

### Chewing Dynamics and Joint Forces

Traditional dentures rest loosely over the gums. This means chewing forces are pressed directly into soft tissue and nerves, causing friction and sores. This limits your bite force to only 15% to 20% of your original strength.

In contrast, All-on-X utilizes a customized number of angled implants to anchor the teeth directly into your jawbone. This transfers bite forces down into the bone structures, fully restoring up to 90% of your original chewing force.

### The Problem of Jawbone Shrinkage

When a tooth root is missing, the body resorbs the surrounding bone minerals. Traditional dentures do not replace roots, so the jawbone shrinks continuously over time. This changes your facial proportions and causes the dentures to slip.

By placing titanium implants, the bone receives mechanical stimulation. This prevents bone loss and maintains your facial volume, speech comfort, and lip support for decades.`
    },
    {
      id: "edu-03",
      title: "Temporary vs. Final Teeth in Full-Arch Restoration",
      slug: "temporary-versus-final-implant-teeth",
      category: "Full-Mouth",
      readTime: "5 min read",
      excerpt: "Learn why your surgical healing teeth must be lightweight and why rushing your final monolithic zirconia restorations can cause implant complications.",
      publishDate: "2026-05-10",
      modifiedDate: "2026-05-10",
      content: `## The Phases of Implant Occlusal Loading

One of the most common misconceptions is that permanent, final teeth are fitted on the day of surgery. Responsible clinical dentistry requires two separate phases:

### Phase 1: The Temporary PMMA Bridge

During the first 3 to 6 months after surgery, your implants are undergoing active bone fusion. During this healing window, they are highly sensitive to micro-movements.

To protect them, Dr. Massaband fits a lightweight, cosmetic temporary bridge. This temporary bridge is designed to keep you smiling and speaking comfortably, but patients must stick to soft foods to prevent micro-movements that could disrupt bone healing.

### Phase 2: The Final Monolithic Zirconia Bridge

Once 3D scans confirm your implants are fully integrated, we create your final restoration. This bridge is milled from monolithic zirconia or reinforced with a solid titanium bar. This final material is completely fracture-resistant, designed to align with your natural bite forces, and fully customized to match your face structure.`
    },
    {
      id: "edu-04",
      title: "When and Why Bone Grafting May Be Needed",
      slug: "when-bone-grafting-is-required",
      category: "Risks & Healing",
      readTime: "7 min read",
      excerpt: "Demystifying socket preservation, guided bone regeneration, and sinus lifts to help you understand how we build a strong implant foundation.",
      publishDate: "2026-05-22",
      modifiedDate: "2026-05-22",
      content: `## Rebuilding Your Jaw's Structural Foundation

A successful dental implant requires at least 1.5mm to 2mm of healthy bone tissue surrounding the entire titanium post. When a tooth has been missing for years, the bone volume frequently shrinks below this safety margin.

### Bone Grafting Techniques

1. **Socket Preservation:** Placing biocompatible bone minerals into the socket immediately after tooth extraction to prevent bone collapse.
2. **Guided Bone Regeneration (GBR):** Rebuilding bone height or width using mineral grafts covered by a protective collagen membrane.
3. **Sinus Lift:** Rebuilding bone thickness in the upper back molar area by gently lifting the sinus floor membrane and adding bone graft material.

By utilizing tilted posterior implants, All-on-X can frequently avoid complex bone grafts, but localized grafting is often still necessary to protect your implants and ensure long-term stability.`
    },
    {
      id: "edu-05",
      title: "Lifetime Implant Care: Preventing Peri-Implantitis",
      slug: "preventing-peri-implantitis",
      category: "Risks & Healing",
      readTime: "6 min read",
      excerpt: "Dental implants cannot get decay, but they can still get gum infections. Read our guide to protecting your dental investment.",
      publishDate: "2026-06-05",
      modifiedDate: "2026-06-05",
      content: `## Protecting Your Implant Investment

While a titanium implant post is immune to cavities, the surrounding gum and bone tissue are still vulnerable to bacterial plaque.

### What is Peri-Implantitis?

Peri-implantitis is an inflammatory condition that affects the gum tissue and bone surrounding an active implant. If plaque is left to accumulate around the connector collar, bacteria will migrate beneath the gum line, causing localized bone loss.

### Crucial Home Maintenance Guidelines

- **Water Flossing:** Use a water flosser daily on a medium setting to clear food particles from beneath your implant bridge.
- **Specialized Implant Floss:** Clean around the implant posts daily using thick, spongy floss.
- **Regular Clinical Hygiene Reviews:** Visit your dentist twice a year for specialized clinical cleanings using non-metal ultrasonic tips to preserve the smooth titanium surfaces.`
    }
  ];

  const filteredArticles = articles.filter(art => {
    const matchesCategory = selectedCategory === 'all' || art.category === selectedCategory;
    const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          art.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-brand-white" id="implant-education-root">
      
      {/* Editorial Header */}
      <section className="bg-gradient-to-b from-brand-stone/20 via-brand-white to-brand-white py-16 md:py-24 border-b border-brand-stone/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-mono font-bold text-brand-bronze uppercase tracking-widest border border-brand-bronze/30 bg-brand-bronze/5 px-3 py-1 rounded-full inline-block">
            Dr. Liyan Massaband • Authoritative Patient Education
          </span>
          <h1 className="font-display font-medium text-brand-charcoal text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-none">
            Dental Implant Education Hub
          </h1>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto font-sans">
            Honest, medically verified, and easy-to-understand guides explaining the science of modern dental implants, full-arch restorations, and surgical healing.
          </p>

          {/* Search Box */}
          <div className="max-w-md mx-auto pt-4 relative font-sans">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Search className="w-4 h-4 text-slate-400" />
            </div>
            <input 
              type="text" 
              placeholder="Search implant topics, bone grafting, recovery..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-brand-stone hover:border-brand-bronze focus:border-brand-bronze focus:outline-none pl-10 pr-4 py-3 text-xs rounded-xl transition-all shadow-xs text-brand-charcoal"
            />
          </div>
        </div>
      </section>

      {/* Category Chips Selector */}
      <section className="py-5 border-b border-brand-stone/40 bg-white sticky top-[60px] md:top-[70px] z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none font-mono text-xs font-bold uppercase tracking-wider">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => {
                  setSelectedCategory(cat.value);
                  setSelectedArticle(null); // return to lists
                }}
                className={`px-4 py-2 rounded-lg transition-all whitespace-nowrap cursor-pointer ${
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
      </section>

      {/* Main Content Layout */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {!selectedArticle ? (
            /* LISTS INDEX VIEW */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.length === 0 ? (
                <div className="col-span-full text-center py-20 border border-dashed border-brand-stone rounded-2xl font-sans text-sm text-slate-400">
                  No educational guides found matching your search. Try searching for "bone" or "osseointegration".
                </div>
              ) : (
                filteredArticles.map((art) => (
                  <article 
                    key={art.id} 
                    className="bg-white border border-brand-stone/60 hover:border-brand-bronze rounded-2xl p-6 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-mono font-bold text-brand-bronze uppercase tracking-widest bg-brand-bronze/5 px-2.5 py-0.5 rounded-full border border-brand-bronze/20">
                          {art.category}
                        </span>
                        <div className="flex items-center gap-1 text-[10px] text-slate-400 font-sans">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{art.readTime}</span>
                        </div>
                      </div>

                      <h3 className="font-display font-bold text-lg text-brand-charcoal hover:text-brand-bronze transition-colors duration-200">
                        <button 
                          onClick={() => setSelectedArticle(art)}
                          className="text-left font-display font-bold cursor-pointer hover:underline"
                        >
                          {art.title}
                        </button>
                      </h3>

                      <p className="text-xs text-slate-500 leading-relaxed font-sans">
                        {art.excerpt}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-brand-stone/40 mt-6 flex items-center justify-between">
                      <span className="text-[10px] text-slate-400 font-sans">
                        Published: {art.publishDate}
                      </span>
                      <button 
                        onClick={() => setSelectedArticle(art)}
                        className="text-xs font-semibold text-brand-bronze hover:text-brand-bronze-light flex items-center gap-1 cursor-pointer font-sans"
                      >
                        <span>Read Full Guide</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </article>
                ))
              )}
            </div>
          ) : (
            /* ARTICLE DETAILS VIEW */
            <div className="max-w-3xl mx-auto space-y-8 font-sans">
              
              {/* Back Button */}
              <button 
                onClick={() => setSelectedArticle(null)}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-bronze hover:text-brand-bronze-light cursor-pointer font-mono uppercase tracking-wider"
              >
                ← Back to Educational Index
              </button>

              <div className="space-y-4">
                <span className="text-xs font-mono font-bold text-brand-bronze uppercase tracking-widest border border-brand-bronze/30 bg-brand-bronze/5 px-2.5 py-1 rounded-full inline-block">
                  {selectedArticle.category}
                </span>
                
                <h2 className="font-display font-medium text-brand-charcoal text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight">
                  {selectedArticle.title}
                </h2>

                {/* Author Card Block */}
                <div className="flex items-center gap-3.5 pt-4 border-y border-brand-stone/40 py-4 text-xs text-slate-500">
                  <div className="w-10 h-10 rounded-full bg-brand-bronze/10 flex items-center justify-center font-display font-bold text-brand-bronze shrink-0 border border-brand-bronze/20">
                    LM
                  </div>
                  <div>
                    <p className="font-semibold text-brand-charcoal">
                      Author: {BRAND_CONFIG.personName}, {BRAND_CONFIG.credentials}
                    </p>
                    <p className="text-[11px] text-slate-400 leading-normal">
                      Implant Dentist • Burbank & Beverly Hills Practice Affiliations • Verified State Licensure
                    </p>
                  </div>
                </div>
              </div>

              {/* Rendered Body Markdown-style */}
              <div className="prose prose-slate max-w-none text-sm text-slate-600 leading-relaxed space-y-6">
                {selectedArticle.content.split('\n\n').map((para, i) => {
                  if (para.startsWith('## ')) {
                    return <h3 key={i} className="font-display font-medium text-xl text-brand-charcoal pt-4">{para.replace('## ', '')}</h3>;
                  }
                  if (para.startsWith('### ')) {
                    return <h4 key={i} className="font-display font-bold text-base text-brand-charcoal pt-2">{para.replace('### ', '')}</h4>;
                  }
                  if (para.startsWith('- ') || para.startsWith('* ')) {
                    return (
                      <ul key={i} className="list-disc pl-5 space-y-1.5">
                        {para.split('\n').map((li, liIdx) => (
                          <li key={liIdx}>{li.replace(/[-*]\s+/, '')}</li>
                        ))}
                      </ul>
                    );
                  }
                  if (para.match(/^\d+\.\s+/)) {
                    return (
                      <ol key={i} className="list-decimal pl-5 space-y-1.5">
                        {para.split('\n').map((li, liIdx) => (
                          <li key={liIdx}>{li.replace(/^\d+\.\s+/, '')}</li>
                        ))}
                      </ol>
                    );
                  }
                  return <p key={i}>{para}</p>;
                })}
              </div>

              {/* Verified Badge / Medical Disclaimer */}
              <div className="bg-brand-stone/10 border border-brand-stone p-5 rounded-2xl space-y-3 pt-6">
                <h4 className="font-display font-bold text-xs text-brand-charcoal flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-brand-bronze" />
                  Medical Publishing & E-E-A-T Policy
                </h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  This educational content is authored and reviewed personally by {BRAND_CONFIG.personName}, {BRAND_CONFIG.credentials}. It has been compiled in accordance with clinical dental surgical guidelines. The materials are provided for general patient educational purposes only and do not replace a face-to-face consultation, diagnostic CBCT scanning, or direct clinical treatment.
                </p>
              </div>

              <div className="pt-8 border-t border-brand-stone flex justify-between items-center">
                <span className="text-[11px] text-slate-400 font-mono">
                  Updated: {selectedArticle.modifiedDate}
                </span>
                <Link 
                  to="/contact/"
                  className="px-5 py-3 bg-brand-bronze hover:bg-brand-bronze-light text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all"
                >
                  Request Implant consultation
                </Link>
              </div>

            </div>
          )}

        </div>
      </section>

    </div>
  );
};
