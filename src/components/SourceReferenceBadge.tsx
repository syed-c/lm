import React, { useState } from 'react';
import { ShieldCheck, ArrowUpRight, X, Sparkles } from 'lucide-react';
import { VERIFIED_SOURCES } from '../data.ts';

interface SourceReferenceBadgeProps {
  sourceIds: string[];
  align?: 'left' | 'right';
}

export const SourceReferenceBadge: React.FC<SourceReferenceBadgeProps> = ({ sourceIds = [], align = 'left' }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!sourceIds || !Array.isArray(sourceIds) || sourceIds.length === 0) return null;

  // Filter existing sources
  const activeSources = sourceIds
    .map(id => VERIFIED_SOURCES[id])
    .filter(Boolean);

  if (activeSources.length === 0) return null;

  return (
    <div className={`relative inline-block ${align === 'right' ? 'text-right' : 'text-left'}`}>
      {/* Trigger Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        className="inline-flex items-center gap-1.5 px-2 py-1 text-xs font-mono font-medium text-brand-bronze bg-brand-bronze/5 hover:bg-brand-bronze/10 border border-brand-bronze/30 rounded-full transition-all duration-200 cursor-pointer"
        title="View fact verification credentials"
        id={`src-badge-${sourceIds.join('-')}`}
      >
        <ShieldCheck className="w-3.5 h-3.5" />
        <span>Source Verified ({activeSources.length})</span>
      </button>

      {/* Popover Display */}
      {isOpen && (
        <>
          {/* Backdrop hook for click-away */}
          <div 
            className="fixed inset-0 z-40 bg-black/10 backdrop-blur-xs md:hidden"
            onClick={() => setIsOpen(false)}
          />
          
          <div 
            className={`absolute z-50 mt-2 w-80 p-4 bg-brand-white border border-brand-stone shadow-xl rounded-xl text-left text-xs text-brand-charcoal animate-reveal ${
              align === 'right' ? 'right-0' : 'left-0'
            }`}
          >
            <div className="flex items-center justify-between pb-2 mb-3 border-b border-brand-stone/40">
              <span className="font-display font-medium text-brand-charcoal text-[13px] flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-brand-bronze" />
                Verified Entity References
              </span>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-brand-stone/30 rounded-full transition-colors cursor-pointer"
              >
                <X className="w-3.5 h-3.5 text-brand-charcoal/60" />
              </button>
            </div>

            <div className="space-y-3.5">
              {activeSources.map((src, idx) => (
                <div key={src.id} className={`${idx > 0 ? 'pt-3 border-t border-brand-stone/20' : ''}`}>
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-sans font-semibold text-brand-charcoal block leading-tight">
                      {src.title}
                    </span>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-0.5 text-brand-bronze hover:text-brand-bronze-light transition-colors shrink-0"
                    >
                      <span>Link</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                  
                  <p className="text-[11px] text-slate-600 mt-1.5 leading-relaxed">
                    <span className="font-mono text-[10px] text-brand-bronze block font-medium uppercase tracking-wider mb-0.5">Verified Fact:</span>
                    {src.factSupported}
                  </p>

                  <div className="flex items-center justify-between mt-2 pt-1 border-t border-brand-stone/10 text-[9px] font-mono text-slate-400">
                    <div>
                      <span className="block text-slate-500 uppercase tracking-tight">Audit State:</span>
                      <span className="font-medium text-brand-charcoal/80">Approved</span>
                    </div>
                    <div className="text-right">
                      <span className="block text-slate-500 uppercase tracking-tight">Verification Date:</span>
                      <span className="font-medium text-brand-charcoal/80">{src.dateChecked}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-3.5 pt-2.5 border-t border-brand-stone/30 bg-brand-stone/10 p-2 rounded-lg text-[10px] text-slate-500 leading-normal flex items-start gap-1.5">
              <ShieldCheck className="w-4 h-4 text-brand-bronze shrink-0 mt-0.5" />
              <span>
                These clinical certifications are corroborated against state registers and institutional directories.
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
