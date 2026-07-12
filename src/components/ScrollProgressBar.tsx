import React, { useState, useEffect } from 'react';
import { useRouter, normalizePath } from './AppRouter.tsx';

/**
 * ScrollProgressBar
 * Renders a subtle, slim progress indicator bar at the top of the viewport
 * when visiting '/articles/' or '/videos/' directories/pages.
 */
export const ScrollProgressBar: React.FC = () => {
  const { path } = useRouter();
  const [progress, setProgress] = useState(0);

  const normalized = normalizePath(path).toLowerCase();
  // Target pages: /articles/ and /videos/ plus any of their child sub-directories
  const isTargetPage = normalized.startsWith('/articles') || normalized.startsWith('/videos');

  useEffect(() => {
    if (!isTargetPage) {
      setProgress(0);
      return;
    }

    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const scrollable = docHeight - winHeight;
      if (scrollable <= 0) {
        setProgress(0);
        return;
      }
      const scrolled = (window.scrollY / scrollable) * 100;
      setProgress(Math.min(100, Math.max(0, scrolled)));
    };

    // Calculate immediately on route mount/update
    handleScroll();

    // Use passive event listener for scrolling to optimize rendering performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [path, isTargetPage]);

  if (!isTargetPage) return null;

  return (
    <div 
      className="fixed top-0 left-0 right-0 h-[3px] z-[9999] pointer-events-none bg-brand-stone/20"
      id="viewport-reading-progress-container"
    >
      <div 
        className="h-full bg-brand-bronze transition-all duration-75 ease-out shadow-[0_1px_6px_rgba(197,160,89,0.5)]"
        style={{ width: `${progress}%` }}
        id="viewport-reading-progress-bar"
        role="progressbar"
        aria-valuenow={Math.round(progress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </div>
  );
};
