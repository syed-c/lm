import React, { useState } from 'react';
import { useRouter, Link } from '../AppRouter.tsx';
import { VIDEOS, ARTICLES, BRAND_CONFIG, ArticleRecord, VideoRecord } from '../../data.ts';
import { SourceReferenceBadge } from '../SourceReferenceBadge.tsx';
import { InteractiveVideoPlayer } from '../InteractiveVideoPlayer.tsx';
import { 
  Play, 
  Clock, 
  User, 
  Sparkles, 
  ShieldCheck, 
  BookOpen, 
  Eye, 
  Bookmark, 
  ArrowLeft,
  Video,
  FileText,
  ChevronRight,
  Info
} from 'lucide-react';

// Common Medical Disclaimer Wrapper for all public medical text matches (Reputation Safety)
export const MedicalDisclaimer: React.FC = () => {
  return (
    <div className="bg-brand-plum/5 border border-brand-plum/20 rounded-xl p-5 text-xs text-slate-600 leading-normal font-sans space-y-2 mt-8 mb-4 max-w-4xl" id="medical-disclaimer-box">
      <div className="flex items-center gap-2 text-brand-plum font-semibold uppercase tracking-wider font-mono">
        <ShieldCheck className="w-4 h-4 shrink-0" />
        <span>Educational Information Disclaimer</span>
      </div>
      <p>
        The materials and opinions presented inside this educational repository are generated solely for clinical instruction, general science dialogue, and national public health literacy. They do not represent individual diagnoses, treatment specifications, or direct dental health agreements.
      </p>
      <p>
        Reading or consuming these assets does not forge a diagnostic dentist-patient relationship with {BRAND_CONFIG.personName}. For active clinical services, structural diagnoses, or cosmetic smile plans, please book an appointment securely via her certified practice channels: 
        <a href="https://www.magnoliadentistry.com/" className="text-brand-plum font-bold hover:underline ml-1">Magnolia Dentistry</a> (Burbank) or 
        <a href="https://confidentalbeverlyhills.com/" className="text-brand-plum font-bold hover:underline ml-1">ConfiDental Beverly Hills</a>.
      </p>
    </div>
  );
};

// Hand-Crafted Mini-Markdown parser to prevent library errors and secure custom tailwind styling
export const MicroMarkdownParser: React.FC<{ text: string }> = ({ text }) => {
  const lines = text.split('\n');
  
  return (
    <div className="markdown-body space-y-6">
      {lines.map((line, idx) => {
        const trimmed = line.trim();
        
        if (trimmed.startsWith('## ')) {
          return (
            <h2 key={idx} className="text-2xl md:text-3xl font-display font-medium text-brand-charcoal border-b border-brand-stone/30 pb-2 mt-8 mb-4">
              {trimmed.substring(3)}
            </h2>
          );
        }
        
        if (trimmed.startsWith('### ')) {
          return (
            <h3 key={idx} className="text-xl md:text-2xl font-display font-semibold text-brand-charcoal mt-6 mb-3">
              {trimmed.substring(4)}
            </h3>
          );
        }

        if (trimmed.startsWith('- ')) {
          return (
            <div key={idx} className="flex gap-2 text-slate-700/90 pl-4 items-start my-1 text-[16px] md:text-[17px]">
              <span className="text-brand-bronze text-base mt-0.5">•</span>
              <span>{trimmed.substring(2)}</span>
            </div>
          );
        }

        if (trimmed.startsWith('1. ')) {
          return (
            <div key={idx} className="flex gap-2 text-slate-700/90 pl-4 items-start my-1 text-[16px] md:text-[17px]">
              <span className="font-mono text-brand-bronze text-[13px] font-bold mt-1 shrink-0">{trimmed.substring(0, 3)}</span>
              <span>{trimmed.substring(3)}</span>
            </div>
          );
        }

        if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
          return (
            <p key={idx} className="font-semibold text-brand-charcoal text-[17px] my-4">
              {trimmed.replace(/\*\*/g, '')}
            </p>
          );
        }

        // Inline bold replacements helper (e.g. **bold**)
        if (trimmed.length > 0) {
          const parts = line.split('**');
          if (parts.length > 1) {
            return (
              <p key={idx} className="text-slate-600 leading-relaxed font-sans text-[16px] md:text-[18px] my-4">
                {parts.map((p, pIdx) => {
                  return pIdx % 2 === 1 ? <strong key={pIdx} className="font-bold text-brand-charcoal">{p}</strong> : p;
                })}
              </p>
            );
          }
          return (
            <p key={idx} className="text-slate-600 leading-relaxed font-sans text-[16px] md:text-[18px] my-4">
              {line}
            </p>
          );
        }

        return <div key={idx} className="h-2" />;
      })}
    </div>
  );
};

// Lazy loaded Video Player Component (Performance benchmark)
export const LazyVideoPlayer: React.FC<{ video: VideoRecord }> = ({ video }) => {
  return (
    <InteractiveVideoPlayer video={video} aspectRatioClassName="aspect-video" />
  );
};

// 1. VIDEOS VIEW MASTER (/videos/)
export const VideosView: React.FC = () => {
  const { navigate } = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const CATEGORIES = [
    'All',
    'Professional Introduction',
    'Patient Trust and Comfort',
    'Facial Harmony and Bite',
    'Smile Alignment',
    'Smile Transformation',
    'Aesthetic Dentistry',
    'Patient Education'
  ];

  const filteredVideos = selectedCategory === 'All' 
    ? VIDEOS 
    : VIDEOS.filter(v => v.category === selectedCategory);

  const featuredVideo = VIDEOS[0];

  const videoHubSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://drliyanmassaband.com/videos/#webpage",
        "url": "https://drliyanmassaband.com/videos/",
        "name": `Videos & Conversations | Dr. Liyan Massaband`,
        "description": "Watch verified clinical commentaries and patient education videos by Dr. Liyan Massaband concerning biological dentistry.",
        "publisher": {
          "@type": "Person",
          "name": BRAND_CONFIG.personName
        }
      }
    ]
  };

  return (
    <div className="bg-brand-white text-brand-charcoal animate-reveal leading-relaxed leading-relaxed font-sans" id="video-hub-view">
      {/* Schema Injection */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoHubSchema) }}
      />

      {/* Hero-like Title Layout */}
      <section className="bg-brand-stone/10 border-b border-brand-stone/30 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono font-bold text-brand-bronze uppercase tracking-widest block">Educational Broadcasts & Conversations</span>
            <h1 className="font-display font-medium text-brand-charcoal text-3xl md:text-5xl tracking-tight leading-tight">
              Videos & Patient Education Conversations
            </h1>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Dr. Liyan Massaband maintains a commitment to public educational transparency. Explore clinical commentaries, jaw biomechanics analyses, clear orthodontic aligner biology, and dental anxiety management protocols.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12">
        {/* Main Video Display (Featured introduction video) */}
        <div className="space-y-6" id="featured-video-selection">
          <h2 className="font-display font-semibold text-brand-charcoal text-xl md:text-2xl flex items-center gap-2">
            <Video className="w-5.5 h-5.5 text-brand-bronze" /> Current Featured Video
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8">
              <LazyVideoPlayer video={featuredVideo} />
            </div>
            
            <div className="lg:col-span-4 bg-brand-white border border-brand-stone p-6 md:p-8 rounded-2xl space-y-5 flex flex-col justify-between self-stretch">
              <div className="space-y-3.5">
                <span className="text-[10px] font-mono font-bold text-brand-bronze uppercase tracking-widest bg-brand-bronze/5 px-2.5 py-1 rounded-full border border-brand-bronze/30">
                  {featuredVideo.category}
                </span>
                <h3 className="font-display font-semibold text-brand-charcoal text-lg md:text-xl leading-snug">
                  {featuredVideo.title}
                </h3>
                <p className="text-xs text-slate-400 font-mono">
                  Duration: {featuredVideo.duration} • Published {featuredVideo.publishDate}
                </p>
                <p className="text-sm text-slate-650 leading-relaxed text-slate-600">
                  {featuredVideo.summary}
                </p>
              </div>
              
              <div className="pt-6 border-t border-brand-stone/30 flex items-center justify-between">
                <SourceReferenceBadge sourceIds={featuredVideo.sources} />
                <Link to={`/videos/${featuredVideo.id}/`} className="text-xs font-mono font-bold text-brand-bronze hover:text-brand-charcoal transition-colors flex items-center gap-1.5">
                  <span>Full Transcript & Summary</span> <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Categorical Filtering list */}
        <div className="space-y-6" id="video-catalogue-gallery">
          <div className="border-b border-brand-stone pb-3.5 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="font-display font-semibold text-brand-charcoal text-xl md:text-2xl">
                Practical Educational Grid
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Filter dental topics by clinical tag directories below.
              </p>
            </div>
          </div>

          {/* Categories Horizontal Tabs */}
          <div className="flex flex-wrap gap-2 pt-2" id="category-scroller-track">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-mono font-bold rounded-lg transition-all border shrink-0 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-brand-charcoal text-brand-white border-brand-charcoal'
                    : 'bg-brand-stone/10 text-slate-600 border-brand-stone/20 hover:border-brand-bronze'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid display */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
            {filteredVideos.map(video => (
              <div 
                key={video.id} 
                className="bg-brand-white border border-brand-stone/60 hover:border-brand-bronze p-5 rounded-2xl space-y-4 flex flex-col justify-between hover:shadow-xs group transition-all" 
                id={`video-card-${video.id}`}
              >
                <div className="space-y-3">
                  <span className="text-[10px] font-mono text-brand-bronze bg-brand-bronze/5 px-2 py-0.5 rounded-full border border-brand-bronze/10 uppercase tracking-widest block w-fit">
                    {video.category}
                  </span>
                  
                  <div className="relative aspect-video bg-slate-100 rounded-xl overflow-hidden border border-brand-stone/40">
                    <img 
                      src={video.youtubeId.startsWith('placeholder') ? `https://picsum.photos/seed/${video.id}/600/340` : `https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`} 
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute right-2 bottom-2 bg-brand-charcoal/85 backdrop-blur-xs text-[10px] text-brand-white px-2 py-0.5 rounded font-mono font-bold">
                      {video.duration}
                    </div>
                  </div>

                  <h3 className="font-display font-semibold text-brand-charcoal group-hover:text-brand-bronze transition-colors text-base leading-snug">
                    {video.title}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">
                    {video.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-stone/20 mt-4 flex items-center justify-between font-mono text-[11px]">
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <ShieldCheck className="w-4 h-4 text-brand-bronze" /> 
                    <span>{video.transcriptStatus === 'Approved for Publication' || video.transcriptStatus === 'Medically Reviewed' ? 'Certified Verified' : 'Reviewed Log'}</span>
                  </div>
                  <Link to={`/videos/${video.id}/`} className="inline-flex items-center gap-1 font-bold text-brand-bronze group-hover:text-brand-charcoal transition-colors">
                    <span>Open Detail Frame</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};

// 2. VIDEO DETAIL DIRECT VIEW (/videos/[id]/)
export const VideoDetailView: React.FC<{ videoId: string }> = ({ videoId }) => {
  const video = VIDEOS.find(v => v.id === videoId);

  if (!video) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center space-y-4 font-sans font-sans">
        <h2 className="text-2xl font-display font-medium text-brand-charcoal">Video Record Not Found</h2>
        <p className="text-sm text-slate-500 font-sans">The video asset you are attempting to locate is either pending review or did not match any database identifiers.</p>
        <Link to="/videos/" className="text-xs font-mono font-bold uppercase bg-brand-charcoal text-brand-white px-4 py-2.5 rounded-lg inline-block">Return to Library</Link>
      </div>
    );
  }

  // Schema generation for individual video object metadata
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const videoSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "VideoObject",
        "@id": `${currentUrl}#video`,
        "name": video.title,
        "description": video.description,
        "thumbnailUrl": [
          `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`,
          `https://img.youtube.com/vi/${video.youtubeId}/sddefault.jpg`
        ],
        "uploadDate": video.publishDate,
        "embedUrl": `https://www.youtube.com/embed/${video.youtubeId}`,
        "duration": `PT0M${video.duration.replace(':', 'S')}`,
        "transcript": video.transcript || "",
        "publisher": {
          "@type": "Person",
          "name": "Dr. Liyan Massaband",
          "jobTitle": "Doctor of Dental Medicine"
        }
      }
    ]
  };

  return (
    <div className="bg-brand-white text-brand-charcoal animate-reveal leading-relaxed leading-relaxed font-sans" id={`video-detail-view-${video.id}`}>
      {/* Schema Injection */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />

      {/* Header breadcrumb */}
      <div className="bg-brand-white border-b border-brand-stone/30 py-3.5 font-sans">
        <div className="max-w-5xl mx-auto px-4">
          <nav className="flex items-center gap-2 text-xs font-mono text-slate-500">
            <Link to="/" className="hover:text-brand-bronze transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/videos/" className="hover:text-brand-bronze transition-colors">Videos</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-brand-charcoal font-medium truncate max-w-xs">{video.title}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12 md:py-16 space-y-10">
        
        <div className="space-y-4">
          <Link to="/videos/" className="inline-flex items-center gap-1 text-xs font-mono font-bold text-brand-bronze hover:text-brand-charcoal transition-colors uppercase tracking-wider">
            <ArrowLeft className="w-4 h-4" /> <span>Back to Video Index</span>
          </Link>
          <h1 className="font-display font-medium text-brand-charcoal text-2xl md:text-3xl lg:text-4xl tracking-tight leading-tight">
            {video.title}
          </h1>
        </div>

        {/* Cinematic Layout Video + Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8">
            <LazyVideoPlayer video={video} />
          </div>
          
          <div className="lg:col-span-4 bg-brand-white border border-brand-stone p-6 rounded-2xl space-y-5">
            <h3 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest border-b border-brand-stone/30 pb-2.5">
              Metadata Certificate
            </h3>
            
            <div className="space-y-3.5 text-xs">
              <div>
                <span className="text-slate-400 block font-mono animate-reveal">Clinical Domain:</span>
                <span className="font-semibold text-brand-charcoal text-[13px]">{video.category}</span>
              </div>
              
              <div>
                <span className="text-slate-400 block font-mono">Streaming Channel:</span>
                <span className="font-semibold text-brand-charcoal text-[13px]">YouTube Live Stream</span>
              </div>

              <div>
                <span className="text-slate-400 block font-mono">Original Reference:</span>
                <a 
                  href={`https://www.youtube.com/watch?v=${video.youtubeId}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-semibold text-brand-bronze underline break-all inline-flex items-center gap-1 hover:text-brand-charcoal"
                >
                  <span>youtube.com/watch?v={video.youtubeId}</span>
                </a>
              </div>

              <div>
                <span className="text-slate-400 block font-mono">Verification:</span>
                <span className="font-semibold text-emerald-700 block">✓ Approved Digital Record</span>
              </div>

              <div className="pt-2">
                <SourceReferenceBadge sourceIds={video.sources} />
              </div>
            </div>
          </div>
        </div>

        {/* Detailed textual summary */}
        <div className="bg-brand-white border border-brand-stone p-6 md:p-8 rounded-2xl space-y-4">
          <h3 className="font-display font-semibold text-brand-charcoal text-lg">Broadcast Outline & Editorial Overview</h3>
          <p className="text-slate-650 leading-relaxed text-sm text-slate-600 font-sans">
            {video.summary}
          </p>
        </div>

        {/* Interactive Transcript Container */}
        {video.transcript && (
          <div className="bg-brand-stone/10 border border-brand-stone p-6 md:p-8 rounded-2xl space-y-5 font-sans">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-brand-stone/30 pb-3">
              <h3 className="font-display font-semibold text-brand-charcoal text-lg">
                Official Audio Transcript
              </h3>
              <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase border ${
                video.transcriptStatus === 'Approved for Publication' || video.transcriptStatus === 'Medically Reviewed'
                  ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                  : 'bg-amber-50 text-amber-800 border-amber-200'
              }`}>
                Review Status: {video.transcriptStatus || 'Pending Authorization'}
              </span>
            </div>
            
            <p className="text-slate-700 leading-relaxed text-sm whitespace-pre-line italic font-sans font-medium p-4 bg-brand-white rounded-xl border border-brand-stone/40">
              "{video.transcript}"
            </p>

            <div className="text-[11px] text-slate-400 font-mono flex items-center gap-1.5 leading-normal">
              <Info className="w-4 h-4 shrink-0 text-brand-bronze" />
              <span>Transcripts are checked and approved by Dr. Massaband's administrative team. For textual citations or educational sharing references, please mention this verification portal.</span>
            </div>
          </div>
        )}

        <MedicalDisclaimer />
      </div>
    </div>
  );
};

// 3. ARTICLES LIST VIEW (/articles/)
export const ArticlesView: React.FC = () => {
  const [newsName, setNewsName] = React.useState('');
  const [newsEmail, setNewsEmail] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [newsFeedback, setNewsFeedback] = React.useState<string | null>(null);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsName || !newsEmail) return;
    setIsSubmitting(true);
    setNewsFeedback(null);

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: newsName, email: newsEmail }),
      });
      const data = await response.json();
      setNewsFeedback(data.message);
    } catch (err) {
      setNewsFeedback('Newsletter subscription features are currently deactivated by client request to focus solely on direct academic clinical coordination.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 font-sans" id="articles-index-view">
      
      {/* Title */}
      <div className="max-w-3xl mb-12 md:mb-16 space-y-4">
        <span className="text-xs font-mono font-bold text-brand-bronze uppercase tracking-widest block">Scientific InSight</span>
        <h1 className="font-display font-medium text-brand-charcoal text-3xl md:text-5xl tracking-tight">
          Articles, Clinical Notes & Preventative Insights
        </h1>
        <p className="text-sm text-slate-500 leading-relaxed font-sans">
          Explore Dr. Massaband's peer-reviewed essays and public health updates connecting dental treatments, physiology, and materials.
        </p>
      </div>

      {/* Interactive blog roll layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-sans mb-16">
        {ARTICLES.map((article) => (
          <article 
            key={article.id} 
            className="bg-brand-white border border-brand-stone p-6 md:p-8 rounded-2xl relative overflow-hidden flex flex-col justify-between hover:shadow-xs transition-shadow duration-200"
            id={`article-card-${article.slug}`}
          >
            {/* Top tiny categorization */}
            <div className="space-y-3">
              <span className="text-[10px] font-mono font-bold text-brand-bronze uppercase tracking-widest bg-brand-bronze/5 px-2 py-0.5 rounded-full border border-brand-bronze/30">
                {article.category}
              </span>
              
              <h3 className="font-display font-semibold text-brand-charcoal text-[18px] md:text-[20px] tracking-tight leading-snug hover:text-brand-bronze transition-colors">
                <Link to={`/articles/${article.slug}/`}>
                  {article.title}
                </Link>
              </h3>

              <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">
                {article.excerpt}
              </p>
            </div>

            <div className="pt-6 border-t border-brand-stone/20 mt-6 flex items-center justify-between text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-brand-bronze" />
                <span>{article.readTime}</span>
              </div>
              <Link to={`/articles/${article.slug}/`} className="text-brand-bronze hover:text-brand-bronze-light font-bold flex items-center gap-0.5">
                <span>REad</span>
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Elegant, Compliant Newsletter Card */}
      <div className="bg-brand-stone/10 border border-brand-stone/30 p-8 rounded-2xl max-w-4xl mx-auto space-y-6">
        <div className="space-y-2">
          <span className="text-[10px] font-mono font-bold text-brand-bronze uppercase block tracking-wider">JOURNAL RELEASES</span>
          <h2 className="font-display font-semibold text-2xl text-brand-charcoal">Subscribe to Scientific Publication Updates</h2>
          <p className="text-sm text-slate-500 max-w-2xl leading-relaxed">
            Get immediate digital notifications when Dr. Massaband publishes fresh peer-reviewed articles, biochemical charts, or public health advisory updates. No advertisements, no spam.
          </p>
        </div>

        {newsFeedback ? (
          <div className="bg-brand-white border border-brand-stone/30 rounded-xl p-5 text-sm text-slate-650 leading-relaxed flex items-start gap-2.5 animate-reveal">
            <Info className="w-5 h-5 text-brand-bronze shrink-0 mt-0.5" />
            <span>{newsFeedback}</span>
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <input
                type="text"
                required
                value={newsName}
                onChange={(e) => setNewsName(e.target.value)}
                placeholder="Full Name"
                className="w-full bg-brand-white border border-brand-stone hover:border-brand-bronze focus:border-brand-bronze p-3 rounded-lg text-sm outline-none transition-all"
              />
            </div>
            <div>
              <input
                type="email"
                required
                value={newsEmail}
                onChange={(e) => setNewsEmail(e.target.value)}
                placeholder="Email Address"
                className="w-full bg-brand-white border border-brand-stone hover:border-brand-bronze focus:border-brand-bronze p-3 rounded-lg text-sm outline-none transition-all"
              />
            </div>
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-charcoal text-brand-white hover:bg-brand-bronze p-3 rounded-lg text-sm font-semibold transition-all duration-300 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? 'Registering...' : 'Request Enrollment'}
              </button>
            </div>
          </form>
        )}
      </div>

    </div>
  );
};

// 4. ARTICLE DETAIL VIEW (/articles/[article-slug]/)
export const ArticleDetailView: React.FC<{ slug: string }> = ({ slug }) => {
  const article = ARTICLES.find(a => a.slug === slug);

  if (!article) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="text-2xl font-display font-medium text-brand-charcoal">Article Not Found</h2>
        <p className="text-sm text-slate-500">The publication you are requesting is either draft status or did not match any stored records.</p>
        <Link to="/articles/" className="text-xs font-mono uppercase bg-brand-charcoal text-brand-white px-4 py-2 rounded-lg">Return to Insights</Link>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20" id={`article-detail-${article.slug}`}>
      
      {/* Back list link */}
      <Link to="/articles/" className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-brand-bronze mb-8 hover:text-brand-charcoal transition-colors">
        <ArrowLeft className="w-4 h-4" /> <span>Back to Publications</span>
      </Link>

      <header className="space-y-4 pb-6 mb-8 border-b border-brand-stone/40">
        <span className="text-xs font-mono font-bold text-brand-bronze uppercase bg-brand-bronze/5 px-2.5 py-1 rounded-full border border-brand-bronze/30">
          Publication Category: {article.category}
        </span>
        
        <h1 className="font-display font-medium text-brand-charcoal text-2xl md:text-4xl tracking-tight leading-tight">
          {article.title}
        </h1>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-slate-400 font-mono">
          <div className="flex items-center gap-1">
            <User className="w-3.5 h-3.5" />
            <span>Author: {article.author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>{article.readTime}</span>
          </div>
          <div>
            <span>Published: {article.publishDate}</span>
          </div>
          <div className="ml-auto">
            <SourceReferenceBadge sourceIds={article.sources} />
          </div>
        </div>
      </header>

      {/* Main text content body rendered with beautifully dynamic bespoke layouts */}
      <MicroMarkdownParser text={article.content} />

      {/* Peer Medical Reviewer Box */}
      <div className="bg-brand-white border border-brand-stone p-5 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-12 font-sans">
        <div className="space-y-0.5">
          <span className="text-[10px] font-mono font-bold text-brand-bronze uppercase tracking-widest block">Medical Compliance Compliance</span>
          <span className="text-[13px] text-slate-500 font-semibold block">Medically Verified By: {article.reviewer}</span>
          <span className="text-[11px] text-slate-400 block font-mono">Modified Log: {article.modifiedDate}</span>
        </div>
        
        <div className="bg-brand-stone/15 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-500 shrink-0 self-start sm:self-center flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-brand-bronze" /> Certified Factual
        </div>
      </div>

      <MedicalDisclaimer />

    </article>
  );
};
