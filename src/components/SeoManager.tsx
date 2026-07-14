import React, { useState, useEffect } from 'react';
import { useRouter, normalizePath } from './AppRouter.tsx';
import { SEO_ROUTES_META } from '../data.ts';
import { Settings, Shield, Eye, FileText, CheckCircle2, AlertCircle, Copy, Check, Globe } from 'lucide-react';

export const SeoManager: React.FC = () => {
  const { path } = useRouter();

  useEffect(() => {
    const normPath = normalizePath(path).toLowerCase();
    
    // Find matching route meta configuration
    const matchedRoute = Object.keys(SEO_ROUTES_META).find(
      route => normalizePath(route).toLowerCase() === normPath
    );

    // Fallback meta if route not specifically defined (e.g., dynamic routes like /articles/some-slug)
    let meta = matchedRoute ? SEO_ROUTES_META[matchedRoute] : null;

    if (!meta) {
      if (path.startsWith('/articles/')) {
        meta = {
          title: "Clinical Insight | Dr. Liyan Massaband, D.M.D., M.P.H.",
          description: "Read the latest clinical article published by Dr. Liyan Massaband. Grounded in biological dental implants and public health advocacy.",
          canonical: path,
          ogType: "article",
          ogImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
          robots: "index, follow",
          schemaType: "Article"
        };
      } else if (path.startsWith('/videos/')) {
        meta = {
          title: "Patient Video Lecture | Dr. Liyan Massaband",
          description: "Watch patient guide videos and verified biological dental surgical lectures curated by Dr. Liyan Massaband.",
          canonical: path,
          ogType: "video.other",
          ogImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
          robots: "index, follow",
          schemaType: "VideoObject"
        };
      } else {
        // Fallback default
        meta = SEO_ROUTES_META['/'];
      }
    }

    if (meta) {
      // Update DOM elements dynamically
      document.title = meta.title;

      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', meta.description);

      let metaRobots = document.querySelector('meta[name="robots"]');
      if (!metaRobots) {
        metaRobots = document.createElement('meta');
        metaRobots.setAttribute('name', 'robots');
        document.head.appendChild(metaRobots);
      }
      metaRobots.setAttribute('content', meta.robots || "index, follow");

      // Open Graph Tags
      let ogTitle = document.querySelector('meta[property="og:title"]');
      if (!ogTitle) {
        ogTitle = document.createElement('meta');
        ogTitle.setAttribute('property', 'og:title');
        document.head.appendChild(ogTitle);
      }
      ogTitle.setAttribute('content', meta.title);

      let ogDesc = document.querySelector('meta[property="og:description"]');
      if (!ogDesc) {
        ogDesc = document.createElement('meta');
        ogDesc.setAttribute('property', 'og:description');
        document.head.appendChild(ogDesc);
      }
      ogDesc.setAttribute('content', meta.description);

      let ogImg = document.querySelector('meta[property="og:image"]');
      if (!ogImg) {
        ogImg = document.createElement('meta');
        ogImg.setAttribute('property', 'og:image');
        document.head.appendChild(ogImg);
      }
      ogImg.setAttribute('content', meta.ogImage || "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800");

      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', `https://drliyanmassaband.com${meta.canonical || path}`);
    }
  }, [path]);

  return null;
};

export const SeoAuditorWidget: React.FC = () => {
  const { path } = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [editMode, setEditMode] = useState(false);
  
  // Local state for interactive editing of current page SEO
  const [customTitle, setCustomTitle] = useState('');
  const [customDesc, setCustomDesc] = useState('');

  const normPath = normalizePath(path).toLowerCase();
  const matchedRoute = Object.keys(SEO_ROUTES_META).find(
    route => normalizePath(route).toLowerCase() === normPath
  );
  
  const originalMeta = matchedRoute ? SEO_ROUTES_META[matchedRoute] : {
    title: "Dr. Liyan Massaband | Official Personal Authority Hub",
    description: "Explore the official professional profile of Dr. Liyan Massaband.",
    canonical: path,
    ogType: "website",
    ogImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
    robots: "index, follow",
    schemaType: "WebPage"
  };

  // Sync state with current path
  useEffect(() => {
    setCustomTitle(originalMeta.title);
    setCustomDesc(originalMeta.description);
    setEditMode(false);
  }, [path, matchedRoute]);

  // Apply visual changes live to document headers
  const handleApplyChanges = () => {
    document.title = customTitle;
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', customDesc);
    }
    
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', customTitle);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', customDesc);

    setEditMode(false);
  };

  const copySchema = () => {
    const microdata = {
      "@context": "https://schema.org",
      "@type": originalMeta.schemaType || "WebPage",
      "name": customTitle,
      "description": customDesc,
      "url": `https://drliyanmassaband.com${path}`
    };
    const text = JSON.stringify(microdata, null, 2);
    if (typeof navigator !== 'undefined' && navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        })
        .catch(err => {
          console.warn('Clipboard copy failed: ', err);
          try {
            const textArea = document.createElement("textarea");
            textArea.value = text;
            textArea.style.position = "fixed";
            textArea.style.left = "-999999px";
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          } catch (e) {
            console.error('Fallback copy failed', e);
          }
        });
    } else {
      try {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (e) {
        console.error('Fallback copy failed', e);
      }
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans" id="seo-auditor-root">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-brand-bronze text-white px-4 py-3 rounded-full shadow-lg hover:bg-brand-bronze-light transition-all cursor-pointer font-medium text-xs tracking-wider uppercase border border-white/20"
        title="Open SEO Configurator"
        id="seo-trigger-btn"
      >
        <Settings className={`w-4 h-4 ${isOpen ? 'animate-spin' : ''}`} />
        <span>SEO Audit</span>
      </button>

      {/* Floating Panel Container */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 md:w-96 bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden animate-reveal p-5 space-y-4 text-left text-slate-800" id="seo-auditor-panel">
          
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <span className="p-1.5 bg-blue-50 text-brand-bronze rounded-lg">
                <Globe className="w-4 h-4" />
              </span>
              <div>
                <h3 className="font-bold text-sm text-slate-900 leading-none">SEO & Meta Configurator</h3>
                <span className="text-[10px] text-slate-400 font-mono tracking-wide">REAL-TIME SEARCH SIMULATION</span>
              </div>
            </div>
            <span className="text-[10px] bg-emerald-50 text-emerald-700 font-mono font-bold px-2 py-0.5 rounded-full border border-emerald-100 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> LIVE
            </span>
          </div>

          {/* Directory Details */}
          <div className="bg-slate-50 border border-slate-100 p-3 rounded-xl space-y-1.5 text-xs">
            <div className="flex justify-between">
              <span className="text-slate-400 font-medium">Virtual Canonical Path:</span>
              <span className="font-mono text-brand-bronze font-bold">{path}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400 font-medium">Indexing Directives:</span>
              <span className="font-mono text-slate-600 bg-slate-200/60 px-1.5 rounded">{originalMeta.robots || 'index, follow'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400 font-medium">Structured Schema Graph:</span>
              <span className="font-mono text-slate-600 bg-slate-200/60 px-1.5 rounded">{originalMeta.schemaType || 'WebPage'}</span>
            </div>
          </div>

          {/* Interactive Playground Fields */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <h4 className="text-xs font-mono font-bold text-slate-400 uppercase">Configuration Fields</h4>
              <button 
                onClick={() => {
                  if (editMode) {
                    handleApplyChanges();
                  } else {
                    setEditMode(true);
                  }
                }}
                className="text-[11px] font-bold text-brand-bronze hover:underline cursor-pointer"
              >
                {editMode ? 'Apply Meta Updates' : 'Edit Tags Live'}
              </button>
            </div>

            {editMode ? (
              <div className="space-y-2.5">
                <div>
                  <label className="block text-[10px] font-mono text-slate-400 font-bold uppercase mb-1">Document Title Tag</label>
                  <input 
                    type="text" 
                    value={customTitle} 
                    onChange={(e) => setCustomTitle(e.target.value)} 
                    className="w-full px-2.5 py-1.5 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-bronze bg-white"
                  />
                  <div className="flex justify-between text-[9px] text-slate-400 mt-0.5">
                    <span>Target length: 50-60 chars</span>
                    <span className={customTitle.length > 60 ? 'text-rose-500' : 'text-slate-500'}>{customTitle.length} chars</span>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-slate-400 font-bold uppercase mb-1">Meta Description</label>
                  <textarea 
                    value={customDesc} 
                    onChange={(e) => setCustomDesc(e.target.value)} 
                    rows={2}
                    className="w-full px-2.5 py-1.5 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-bronze bg-white"
                  />
                  <div className="flex justify-between text-[9px] text-slate-400 mt-0.5">
                    <span>Target length: 150-160 chars</span>
                    <span className={customDesc.length > 160 ? 'text-rose-500' : 'text-slate-500'}>{customDesc.length} chars</span>
                  </div>
                </div>
              </div>
            ) : (
              /* Google Search Engine Preview Card */
              <div className="border border-slate-100 p-3.5 bg-white rounded-xl shadow-xs space-y-1.5">
                <span className="text-[10px] text-slate-400 font-mono tracking-tight block">Google SERP Snippet Preview</span>
                <div className="space-y-0.5">
                  <div className="text-[11px] text-slate-500 truncate flex items-center gap-1">
                    <span>https://drliyanmassaband.com</span>
                    <span className="text-[9px] text-slate-400">➔ {path.replace(/\//g, ' › ')}</span>
                  </div>
                  <h4 className="text-[14px] text-blue-800 font-medium hover:underline leading-tight font-sans truncate">
                    {customTitle}
                  </h4>
                  <p className="text-[11.5px] text-slate-650 leading-relaxed line-clamp-2">
                    {customDesc}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Quick actions bar */}
          <div className="flex items-center gap-2 border-t border-slate-150 pt-3">
            <button
              onClick={copySchema}
              className="flex-1 flex items-center justify-center gap-1 bg-slate-50 border border-slate-250 hover:bg-slate-100 text-slate-700 py-2 rounded-lg text-[11px] font-semibold transition-all cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Copied Graph</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy LD+JSON</span>
                </>
              )}
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="px-3 bg-brand-bronze text-white hover:bg-brand-bronze-light py-2 rounded-lg text-[11px] font-semibold cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
