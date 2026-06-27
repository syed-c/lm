import React, { createContext, useContext, useState, useEffect } from 'react';

// Simple Navigation Core Context
interface RouterContextType {
  path: string;
  navigate: (toPath: string) => void;
}

const RouterContext = createContext<RouterContextType>({
  path: '/',
  navigate: () => {},
});

export const useRouter = () => useContext(RouterContext);

export const AppRouter: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [path, setPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      setPath(window.location.pathname || '/');
      try {
        window.scrollTo(0, 0);
      } catch (e) {
        console.warn('Scroll interaction restricted:', e);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (toPath: string) => {
    if (window.location.pathname === toPath) return;
    
    window.history.pushState(null, '', toPath);
    setPath(toPath);
    try {
      window.scrollTo(0, 0);
    } catch (e) {
      console.warn('Scroll interaction restricted:', e);
    }
  };

  return (
    <RouterContext.Provider value={{ path, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  children: React.ReactNode;
}

export const Link: React.FC<LinkProps> = ({ to, children, className, onClick, ...props }) => {
  const { navigate } = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);
    
    // Allow standard behavior for middle click or modifier keys (cmd/ctrl)
    if (
      !e.defaultPrevented &&
      e.button === 0 && // Left click only
      (!e.metaKey && !e.ctrlKey && !e.altKey && !e.shiftKey)
    ) {
      e.preventDefault();
      navigate(to);
    }
  };

  const isExternal = to.startsWith('http://') || to.startsWith('https://');

  if (isExternal) {
    return (
      <a 
        href={to} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={className}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <a 
      href={to} 
      onClick={handleClick} 
      className={className}
      {...props}
    >
      {children}
    </a>
  );
};

export const normalizePath = (p: string): string => {
  let clean = p.trim();
  if (clean !== '/' && clean.endsWith('/')) {
    clean = clean.slice(0, -1);
  }
  return clean || '/';
};

// Layout container to trigger standard motion fades on route changing
export const RouteView: React.FC<{ routePath: string; exact?: boolean; children: React.ReactNode }> = ({ 
  routePath, 
  exact = true, 
  children 
}) => {
  const { path } = useRouter();

  let match = false;
  if (exact) {
    match = normalizePath(path).toLowerCase() === normalizePath(routePath).toLowerCase();
  } else {
    const normPath = normalizePath(path).toLowerCase();
    const normRoute = normalizePath(routePath).toLowerCase();
    match = normPath === normRoute || normPath.startsWith(normRoute + '/');
  }

  if (!match) return null;

  return (
    <div
      className="w-full animate-reveal"
      id={`route-view-${routePath.replace(/\//g, '-')}`}
    >
      {children}
    </div>
  );
};
