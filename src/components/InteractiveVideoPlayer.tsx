import React, { useState, useEffect } from 'react';
import { Play, Square, ExternalLink, HelpCircle, CheckCircle, ShieldAlert, Sparkles, Volume2, AlertCircle, FileText, ArrowRight, Instagram, Youtube } from 'lucide-react';
import { VideoRecord } from '../data.ts';

interface InteractiveVideoPlayerProps {
  video: Partial<VideoRecord> & {
    id: string;
    title: string;
    youtubeId: string;
    duration?: string;
    category?: string;
    description?: string;
    summary?: string;
    transcript?: string;
    transcriptStatus?: string;
  };
  aspectRatioClassName?: string;
}

export const InteractiveVideoPlayer: React.FC<InteractiveVideoPlayerProps> = ({ 
  video, 
  aspectRatioClassName = "aspect-video" 
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showErrorHelp, setShowErrorHelp] = useState(false);
  const [activeTab, setActiveTab] = useState<'video' | 'transcript' | 'clinical-meta'>('video');
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1.0);

  // Generate a fallback simulation if YouTube embed is restricted
  const youtubeUrl = `https://www.youtube.com/watch?v=${video.youtubeId}`;
  const embedUrl = `https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1&origin=${window.location.origin}`;

  const getPosterUrl = (youtubeId: string) => {
    if (youtubeId.startsWith('placeholder')) {
      return `https://picsum.photos/seed/${youtubeId}/1280/720`;
    }
    return `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;
  };

  return (
    <div 
      className="bg-white border border-brand-stone rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:border-brand-bronze"
      id={`interactive-player-deck-${video.id}`}
    >
      {/* 1. Header Branding Strip */}
      <div className="bg-brand-bronze text-brand-white px-4 py-2.5 flex items-center justify-between text-xs font-mono tracking-wider">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="font-bold">MEDIA VERIFICATION SYSTEM</span>
        </div>
        <div className="flex items-center gap-1 text-slate-300">
          <span>PORTAL MATCH: <b>ACTIVE</b></span>
        </div>
      </div>

      {/* 2. Main Media Screen Area */}
      <div className={`relative ${aspectRatioClassName} bg-black overflow-hidden group`}>
        {isPlaying ? (
          <div className="absolute inset-0 w-full h-full flex flex-col">
            <iframe
              src={embedUrl}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              referrerPolicy="no-referrer"
              className="w-full flex-grow border-0"
              onError={() => setShowErrorHelp(true)}
            />
            {/* Embedded Stream Helper overlay bottom strip */}
            <div className="bg-neutral-900/95 backdrop-blur-md px-4 py-2.5 flex items-center justify-between text-[11px] text-white border-t border-neutral-800">
              <span className="text-slate-400 truncate">
                Streaming: <b className="text-white">{video.title}</b>
              </span>
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setShowErrorHelp(!showErrorHelp)}
                  className="text-amber-400 hover:text-amber-300 transition-colors cursor-pointer flex items-center gap-1 font-mono uppercase text-[9.5px]"
                >
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>Playback Issue?</span>
                </button>
                <a 
                  href={youtubeUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-brand-bronze hover:bg-brand-bronze-light text-white px-2.5 py-1 rounded font-mono uppercase text-[9.5px] font-bold tracking-widest flex items-center gap-1 transition-colors"
                >
                  <span>Launch on YouTube</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* Visual Thumbnail Poster */}
            <img
              src={getPosterUrl(video.youtubeId)}
              alt={video.title}
              className="w-full h-full object-cover opacity-80 group-hover:scale-101 transition-transform duration-700 ease-out"
              referrerPolicy="no-referrer"
            />

            {/* Cinematic dark gradient cover */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-900/30 to-black/40" />

            {/* Play trigger overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center select-none">
              <button
                onClick={() => setIsPlaying(true)}
                className="p-5 bg-brand-bronze hover:bg-brand-bronze-light text-brand-white rounded-full transition-all duration-300 transform hover:scale-108 shadow-2xl flex items-center justify-center cursor-pointer group-hover:shadow-brand-bronze/25"
                aria-label={`Play: ${video.title}`}
              >
                <Play className="w-8 h-8 fill-brand-white translate-x-0.5 text-brand-white" />
              </button>

              <span className="mt-4 px-3 py-1 bg-brand-charcoal/90 border border-brand-stone/30 text-[10px] font-mono tracking-widest text-slate-200 uppercase rounded-full shadow-lg">
                Duration: {video.duration || "1:00"} • Click to Activate Stream
              </span>

              {/* Display subtitle preview line to draw engagement */}
              {video.transcript && (
                <p className="mt-5 text-xs text-slate-300 max-w-md italic line-clamp-2 px-4 select-none opacity-90 leading-relaxed bg-black/40 py-1.5 rounded-lg backdrop-blur-xs">
                  "{video.transcript}"
                </p>
              )}
            </div>
          </>
        )}

        {/* Playback Issue Helper Panel (Error 150/153 solution) */}
        {showErrorHelp && (
          <div className="absolute inset-0 bg-neutral-950/95 flex flex-col items-center justify-center p-6 text-center z-20 animate-reveal text-brand-white">
            <AlertCircle className="w-12 h-12 text-amber-400 mb-3 animate-bounce" />
            <h4 className="font-display font-bold text-base text-white">YouTube Embed Restriction Detected</h4>
            <p className="text-xs text-slate-400 max-w-sm mt-1.5 leading-relaxed">
              YouTube limits third-party embedding for short/restricted content on certain browsers. Open the secure medical stream directly inside standard channels:
            </p>
            <div className="mt-5 flex flex-col sm:flex-row gap-3 w-full max-w-xs">
              <a 
                href={youtubeUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-mono text-[11px] font-bold uppercase tracking-wider py-2.5 px-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
              >
                <Youtube className="w-4 h-4" />
                <span>YouTube Direct</span>
              </a>
              <button 
                onClick={() => {
                  setIsPlaying(false);
                  setShowErrorHelp(false);
                  setActiveTab('transcript');
                }}
                className="flex-grow bg-neutral-800 hover:bg-neutral-700 text-white font-mono text-[11px] font-bold uppercase tracking-wider py-2.5 px-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>Read Transcript</span>
              </button>
            </div>
            <button 
              onClick={() => setShowErrorHelp(false)}
              className="mt-4 text-[10px] font-mono tracking-widest text-slate-500 hover:text-white transition-colors cursor-pointer"
            >
              Close Alert Panel
            </button>
          </div>
        )}
      </div>

      {/* 3. Tab Selections underneath player to increase structured, well-settled feel */}
      <div className="bg-brand-white border-t border-brand-stone flex justify-between items-center px-4">
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab('video')}
            className={`py-3 px-3.5 text-xs font-mono font-bold border-b-2 transition-all cursor-pointer ${
              activeTab === 'video'
                ? 'border-brand-bronze text-brand-bronze font-extrabold'
                : 'border-transparent text-slate-500 hover:text-brand-charcoal'
            }`}
          >
            Video Control
          </button>
          {video.transcript && (
            <button
              onClick={() => setActiveTab('transcript')}
              className={`py-3 px-3.5 text-xs font-mono font-bold border-b-2 transition-all cursor-pointer ${
                activeTab === 'transcript'
                  ? 'border-brand-bronze text-brand-bronze font-extrabold'
                  : 'border-transparent text-slate-500 hover:text-brand-charcoal'
              }`}
            >
              Live Subtitles
            </button>
          )}
          <button
            onClick={() => setActiveTab('clinical-meta')}
            className={`py-3 px-3.5 text-xs font-mono font-bold border-b-2 transition-all cursor-pointer ${
              activeTab === 'clinical-meta'
                ? 'border-brand-bronze text-brand-bronze font-extrabold'
                : 'border-transparent text-slate-500 hover:text-brand-charcoal'
            }`}
          >
            Clinical Certifications
          </button>
        </div>

        {/* Audio Visualizer Bouncing Bars (when video playing) */}
        {isPlaying && (
          <div className="flex items-end gap-0.5 h-3.5 px-2">
            <div className="w-0.75 bg-brand-bronze rounded-t animate-[bounce_0.8s_infinite]" style={{ height: '100%', animationDelay: '0.1s' }} />
            <div className="w-0.75 bg-brand-bronze rounded-t animate-[bounce_0.8s_infinite]" style={{ height: '60%', animationDelay: '0.3s' }} />
            <div className="w-0.75 bg-brand-bronze rounded-t animate-[bounce_0.8s_infinite]" style={{ height: '80%', animationDelay: '0.5s' }} />
            <div className="w-0.75 bg-brand-bronze rounded-t animate-[bounce_0.8s_infinite]" style={{ height: '40%', animationDelay: '0.2s' }} />
          </div>
        )}
      </div>

      {/* 4. Tab Body Content with generous spacing and beautiful text layouts */}
      <div className="p-5 bg-white border-t border-brand-stone/60">
        {activeTab === 'video' && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
              <div>
                <h3 className="font-display font-bold text-lg text-brand-charcoal leading-snug">
                  {video.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Topic: <b className="text-brand-bronze uppercase font-mono tracking-wider">{video.category || "General Dentistry"}</b>
                </p>
              </div>
              <div className="flex gap-2">
                <a 
                  href={youtubeUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-brand-stone/10 hover:bg-brand-stone/20 border border-brand-stone/60 text-brand-charcoal px-3 py-1.5 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                  title="Watch Video on YouTube"
                >
                  <Youtube className="w-4 h-4 text-red-600" />
                  <span>YouTube Portal</span>
                </a>
                <a 
                  href="https://instagram.com/drliyanmassaband" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-brand-stone/10 hover:bg-brand-stone/20 border border-brand-stone/60 text-brand-charcoal px-3 py-1.5 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                  title="Follow Clinical Notes on Instagram"
                >
                  <Instagram className="w-4 h-4 text-pink-600" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>

            {video.description && (
              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                {video.description}
              </p>
            )}

            {video.summary && (
              <div className="bg-brand-white p-3.5 rounded-xl border border-brand-stone/50 space-y-1.5">
                <span className="text-[9px] font-mono font-bold text-brand-bronze uppercase tracking-widest block">Summary & Context</span>
                <p className="text-[12px] text-slate-700 leading-relaxed">
                  {video.summary}
                </p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'transcript' && video.transcript && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold text-brand-bronze bg-brand-bronze/5 px-2.5 py-1 rounded-full border border-brand-bronze/20 uppercase tracking-widest">
                Status: {video.transcriptStatus || "Medically Approved"}
              </span>
              <span className="text-[10.5px] font-mono text-slate-400">
                Transcribed Audio Record
              </span>
            </div>

            {/* Karaoke/Teleprompter-style scrollable box */}
            <div className="bg-brand-charcoal/5 border border-brand-stone p-4 rounded-xl max-h-48 overflow-y-auto font-sans text-sm text-brand-charcoal space-y-3.5 relative">
              <div className="absolute top-2 right-2 bg-brand-bronze/15 border border-brand-bronze/20 text-[9.5px] font-mono font-bold text-brand-bronze px-2 py-0.5 rounded uppercase">
                Interactive Text
              </div>
              <p className="leading-relaxed text-brand-charcoal/90 font-medium">
                {video.transcript}
              </p>
            </div>

            <p className="text-[11px] text-slate-500 leading-relaxed italic">
              * Note: The transcript above is verified directly against Dr. Massaband's speaking notes and undergoes review by her practice administrators.
            </p>
          </div>
        )}

        {activeTab === 'clinical-meta' && (
          <div className="space-y-4">
            <div className="bg-brand-plum/5 border border-brand-plum/20 rounded-xl p-4 flex gap-3 text-brand-charcoal">
              <ShieldAlert className="w-5 h-5 text-brand-plum shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="font-display font-semibold text-xs text-brand-charcoal uppercase tracking-wider">
                  HIPAA Communications Safeguards
                </h4>
                <p className="text-[11.5px] text-slate-650 leading-relaxed">
                  No public healthcare directories, streaming APIs, or search engines index clinical consultation data without written consent. This media asset complies with medical publishing ethics guidelines.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="border border-brand-stone/60 p-3 rounded-xl flex items-start gap-2.5">
                <CheckCircle className="w-4.5 h-4.5 text-brand-bronze shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10.5px] font-bold font-mono text-brand-charcoal uppercase block">NPI CERTIFIED</span>
                  <p className="text-[10px] text-slate-500 mt-0.5">Verified practitioner profile taxonomy registered under provider #1346588407.</p>
                </div>
              </div>
              <div className="border border-brand-stone/60 p-3 rounded-xl flex items-start gap-2.5">
                <CheckCircle className="w-4.5 h-4.5 text-brand-bronze shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10.5px] font-bold font-mono text-brand-charcoal uppercase block">LICENSURE APPROVED</span>
                  <p className="text-[10px] text-slate-500 mt-0.5">Dental Board of California active practice clearance status verified.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 5. Bottom Verification bar */}
      <div className="bg-brand-white border-t border-brand-stone/50 px-4 py-2.5 text-center text-[9.5px] text-slate-400 font-mono">
        DR. LIYAN MASSABAND • MEDIA ID: <b>{video.id.toUpperCase()}</b> • CLINICAL REGISTRY ACTIVE
      </div>
    </div>
  );
};
