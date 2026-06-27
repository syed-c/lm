import React, { useState, useEffect } from 'react';
import { useRouter, Link } from './AppRouter.tsx';
import { Menu, X, ChevronDown, Sparkles, Phone, Video, Calendar, ShieldCheck } from 'lucide-react';
import { BRAND_CONFIG } from '../data.ts';

export const SiteHeader: React.FC = () => {
  const { path } = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Close menus on path transition
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [path]);

  // Track scroll position to add micro-contrast/elevation
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const profileLinks = [
    { to: '/dr-liyan-massaband/', label: 'Official Profile' },
    { to: '/her-story/', label: 'Her Story & Background' },
    { to: '/education-and-credentials/', label: 'Education & Credentials' },
    { to: '/professional-journey/', label: 'Professional Journey' },
    { to: '/philosophy/', label: 'Professional Philosophy' },
  ];

  const publicWorkLinks = [
    { to: '/videos/', label: 'Videos & Case Studies' },
    { to: '/articles/', label: 'Articles & Oral Insights' },
    { to: '/professional-focus/', label: 'Core Medical Focus' },
  ];

  const mediaLinks = [
    { to: '/media/', label: 'Media & Press Hub' },
    { to: '/press-kit/', label: 'Press Kit Assets' },
    { to: '/speaking/', label: 'Keynote & Speaking' },
  ];

  const affiliationLinks = [
    { to: '/clinical-affiliations/', label: 'Clinical practices summary' },
    { to: 'https://www.magnoliadentistry.com/', label: 'Magnolia Dentistry (Burbank)' },
    { to: 'https://confidentalbeverlyhills.com/', label: 'ConfiDental Beverly Hills' },
    { to: '/official-profiles/', label: 'External Directory Links' },
  ];

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  const isActive = (p: string) => (path === p) || (p !== '/' && path.startsWith(p));

  const isDropdownActive = (links: { to: string }[]) => {
    return links.some(lnk => lnk.to !== '/' && path.startsWith(lnk.to));
  };

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 w-full ${
        scrolled 
          ? 'bg-brand-white/95 border-b border-brand-stone shadow-sm py-3 backdrop-blur-md' 
          : 'bg-brand-white border-b border-brand-stone/40 py-4'
      }`}
      id="site-nav-header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Home Link */}
        <Link 
          to="/" 
          className="flex flex-col select-none group"
          aria-label="Dr Liyan Massaband Official Home"
        >
          <div className="flex items-center gap-1.5">
            <span className="font-display font-semibold text-brand-charcoal text-lg tracking-tight group-hover:text-brand-bronze transition-colors duration-200">
              {BRAND_CONFIG.personName}
            </span>
            <span className="text-brand-bronze text-[11px] font-mono tracking-wider font-semibold border border-brand-bronze/20 bg-brand-bronze/5 px-1.5 py-0.2 rounded-full">
              D.M.D., M.P.H.
            </span>
          </div>
          <span className="text-[10px] font-mono font-medium text-slate-500 uppercase tracking-widest leading-none mt-0.5">
            Official Professional Authority Hub
          </span>
        </Link>

        {/* Desktop Interface */}
        <nav className="hidden lg:flex items-center gap-1.5">
          {/* PROFILE Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('profile')}
              onMouseEnter={() => setActiveDropdown('profile')}
              className={`inline-flex items-center gap-1.5 px-3 py-2 text-[13px] font-medium transition-colors cursor-pointer rounded-lg hover:bg-brand-bronze/5 ${
                isDropdownActive(profileLinks) ? 'text-brand-bronze font-semibold' : 'text-slate-700 hover:text-brand-bronze'
              }`}
              aria-expanded={activeDropdown === 'profile'}
              id="desktop-nav-profile"
            >
              <span>Profile</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'profile' ? 'rotate-180' : ''}`} />
            </button>
            {activeDropdown === 'profile' && (
              <div 
                className="absolute left-0 mt-1.5 w-60 bg-white border border-brand-stone shadow-lg rounded-xl p-2.5 space-y-1 z-50 animate-reveal"
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {profileLinks.map(link => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`block px-3 py-2 text-[13px] rounded-lg transition-colors ${
                      isActive(link.to) 
                        ? 'bg-brand-bronze/10 text-brand-bronze font-medium' 
                        : 'text-slate-700 hover:bg-brand-bronze/5 hover:text-brand-bronze'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* PUBLIC WORK Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('public-work')}
              onMouseEnter={() => setActiveDropdown('public-work')}
              className={`inline-flex items-center gap-1.5 px-3 py-2 text-[13px] font-medium transition-colors cursor-pointer rounded-lg hover:bg-brand-bronze/5 ${
                isDropdownActive(publicWorkLinks) ? 'text-brand-bronze font-semibold' : 'text-slate-700 hover:text-brand-bronze'
              }`}
              id="desktop-nav-work"
            >
              <span>Public Work</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'public-work' ? 'rotate-180' : ''}`} />
            </button>
            {activeDropdown === 'public-work' && (
              <div 
                className="absolute left-0 mt-1.5 w-60 bg-white border border-brand-stone shadow-lg rounded-xl p-2.5 space-y-1 z-50 animate-reveal"
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {publicWorkLinks.map(link => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`block px-3 py-2 text-[13px] rounded-lg transition-colors ${
                      isActive(link.to) 
                        ? 'bg-brand-bronze/10 text-brand-bronze font-medium' 
                        : 'text-slate-700 hover:bg-brand-bronze/5 hover:text-brand-bronze'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* MEDIA Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('media')}
              onMouseEnter={() => setActiveDropdown('media')}
              className={`inline-flex items-center gap-1.5 px-3 py-2 text-[13px] font-medium transition-colors cursor-pointer rounded-lg hover:bg-brand-bronze/5 ${
                isDropdownActive(mediaLinks) ? 'text-brand-bronze font-semibold' : 'text-slate-700 hover:text-brand-bronze'
              }`}
              id="desktop-nav-media"
            >
              <span>Media Center</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'media' ? 'rotate-180' : ''}`} />
            </button>
            {activeDropdown === 'media' && (
              <div 
                className="absolute left-0 mt-1.5 w-60 bg-white border border-brand-stone shadow-lg rounded-xl p-2.5 space-y-1 z-50 animate-reveal"
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {mediaLinks.map(link => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`block px-3 py-2 text-[13px] rounded-lg transition-colors ${
                      isActive(link.to) 
                        ? 'bg-brand-bronze/10 text-brand-bronze font-medium' 
                        : 'text-slate-700 hover:bg-brand-bronze/5 hover:text-brand-bronze'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* AFFILIATIONS Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('affiliations')}
              onMouseEnter={() => setActiveDropdown('affiliations')}
              className={`inline-flex items-center gap-1.5 px-3 py-2 text-[13px] font-medium transition-colors cursor-pointer rounded-lg hover:bg-brand-bronze/5 ${
                isDropdownActive(affiliationLinks) ? 'text-brand-bronze font-semibold' : 'text-slate-700 hover:text-brand-bronze'
              }`}
              id="desktop-nav-affiliations"
            >
              <span>Affiliations</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'affiliations' ? 'rotate-180' : ''}`} />
            </button>
            {activeDropdown === 'affiliations' && (
              <div 
                className="absolute right-0 mt-1.5 w-64 bg-white border border-brand-stone shadow-lg rounded-xl p-2.5 space-y-1 z-50 animate-reveal"
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {affiliationLinks.map(link => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`block px-3 py-2 text-[13px] rounded-lg transition-colors ${
                      isActive(link.to) 
                        ? 'bg-brand-bronze/10 text-brand-bronze font-medium' 
                        : 'text-slate-700 hover:bg-brand-bronze/5 hover:text-brand-bronze'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* CONTACT Directly (No dropdown nested) */}
          <Link
            to="/contact/"
            className={`px-3 py-2 text-[13px] font-medium rounded-lg transition-colors ${
              isActive('/contact/') ? 'text-brand-bronze font-semibold bg-brand-bronze/5' : 'text-slate-700 hover:bg-brand-bronze/5 hover:text-brand-bronze'
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Global Action CTA Button */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/contact/"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-brand-bronze hover:bg-brand-bronze-light text-white font-display text-[12.5px] font-semibold tracking-wide rounded-lg transition-colors duration-200 shadow-sm"
            id="desktop-header-media-enquiry-action"
          >
            <Calendar className="w-4 h-4 text-white" />
            <span>Media Enquiries</span>
          </Link>
        </div>

        {/* Mobile triggers */}
        <div className="lg:hidden flex items-center gap-3">
          <Link
            to="/contact/"
            className="p-2 bg-brand-bronze hover:bg-brand-bronze-light rounded-lg text-white transition-colors cursor-pointer"
            aria-label="Enquire professional paths"
          >
            <Calendar className="w-4.5 h-4.5" />
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 bg-white text-slate-700 hover:bg-slate-50 border border-brand-stone rounded-lg hover:text-brand-bronze transition-colors cursor-pointer"
            aria-label="Toggle structural menu drawer"
            id="mobile-drawer-trigger"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Drawer (grouped sections as requested) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-brand-white border-t border-brand-stone py-5 px-4 max-h-[85vh] overflow-y-auto shadow-2xl animate-reveal" id="mobile-nav-drawer">
          <div className="space-y-6">
            {/* PROFILE SECTION */}
            <div>
              <p className="text-[10px] font-mono font-bold tracking-widest text-slate-500 uppercase mb-2">Profile Background</p>
              <div className="grid grid-cols-1 gap-2 border-l border-brand-stone/40 pl-3">
                {profileLinks.map(link => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`block py-1 text-sm ${isActive(link.to) ? 'text-brand-bronze font-medium' : 'text-slate-700'}`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* PUBLIC WORK SECTION */}
            <div>
              <p className="text-[10px] font-mono font-bold tracking-widest text-slate-500 uppercase mb-2">Public Work</p>
              <div className="grid grid-cols-1 gap-2 border-l border-brand-stone/40 pl-3">
                {publicWorkLinks.map(link => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`block py-1 text-sm ${isActive(link.to) ? 'text-brand-bronze font-medium' : 'text-slate-700'}`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* MEDIA */}
            <div>
              <p className="text-[10px] font-mono font-bold tracking-widest text-slate-500 uppercase mb-2">Media Opportunities</p>
              <div className="grid grid-cols-1 gap-2 border-l border-brand-stone/40 pl-3">
                {mediaLinks.map(link => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`block py-1 text-sm ${isActive(link.to) ? 'text-brand-bronze font-medium' : 'text-slate-700'}`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* AFFILIATIONS */}
            <div>
              <p className="text-[10px] font-mono font-bold tracking-widest text-slate-500 uppercase mb-2">Clinical affiliations</p>
              <div className="grid grid-cols-1 gap-2 border-l border-brand-stone/40 pl-3">
                {affiliationLinks.map(link => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`block py-1 text-sm ${isActive(link.to) ? 'text-brand-bronze font-medium' : 'text-slate-700'}`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* DIRECT REALLOCATION CONTACT LINK */}
            <div className="pt-2 border-t border-brand-stone flex flex-col gap-3">
              <Link
                to="/contact/"
                className={`py-2 text-sm text-center font-medium ${isActive('/contact/') ? 'text-brand-bronze font-bold' : 'text-slate-700'}`}
              >
                Direct Connection & General Inquiries
              </Link>
              
              <div className="bg-brand-bronze/5 p-3 rounded-lg flex items-center justify-between text-xs text-slate-600">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-brand-bronze" /> Verified Credentials
                </span>
                <span className="font-mono text-brand-bronze">NPI Verified</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
