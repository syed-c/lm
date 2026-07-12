import React, { useState, useEffect } from 'react';
import { useRouter, Link, normalizePath } from './AppRouter.tsx';
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
    { to: '/dr-liyan-massaband/', label: 'Meet Dr. Liyan' },
    { to: '/her-story/', label: 'Her Story & Background' },
    { to: '/education-and-credentials/', label: 'Education & Credentials' },
    { to: '/philosophy/', label: 'Clinical Philosophy' },
    { to: '/experience-1000-implants/', label: '1,000+ Implants Experience' },
  ];

  const implantLinks = [
    { to: '/dental-implants/', label: 'Dental Implants' },
    { to: '/all-on-x/', label: 'All-on-X Treatment' },
    { to: '/patient-stories/', label: 'Patient Stories' },
    { to: '/implant-education/', label: 'Implant Education Hub' },
  ];

  const locationLinks = [
    { to: '/locations/beverly-hills/', label: 'Beverly Hills Suite' },
    { to: '/locations/burbank/', label: 'Burbank Magnolia Park' },
    { to: '/clinical-affiliations/', label: 'Clinical Affiliations' },
  ];

  const mediaLinks = [
    { to: '/media/', label: 'Media Center' },
    { to: '/press-kit/', label: 'Press Kit' },
    { to: '/speaking/', label: 'Speaking Engagement' },
  ];

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  const isActive = (p: string) => {
    const normPath = normalizePath(path).toLowerCase();
    const normP = normalizePath(p).toLowerCase();
    return normPath === normP || (normP !== '/' && normPath.startsWith(normP + '/'));
  };

  const isDropdownActive = (links: { to: string }[]) => {
    const normPath = normalizePath(path).toLowerCase();
    return links.some(lnk => {
      const normLnk = normalizePath(lnk.to).toLowerCase();
      return normLnk !== '/' && (normPath === normLnk || normPath.startsWith(normLnk + '/'));
    });
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
        <nav className="hidden lg:flex items-center gap-1">
          {/* HOME LINK */}
          <Link
            to="/"
            className={`px-2.5 py-2 text-[12.5px] font-medium transition-colors rounded-lg hover:bg-brand-bronze/5 ${
              isActive('/') ? 'text-brand-bronze font-semibold' : 'text-slate-700 hover:text-brand-bronze'
            }`}
          >
            Home
          </Link>

          {/* MEET DR. LIYAN Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('profile')}
              onMouseEnter={() => setActiveDropdown('profile')}
              className={`inline-flex items-center gap-1.5 px-2.5 py-2 text-[12.5px] font-medium transition-colors cursor-pointer rounded-lg hover:bg-brand-bronze/5 ${
                isDropdownActive(profileLinks) ? 'text-brand-bronze font-semibold' : 'text-slate-700 hover:text-brand-bronze'
              }`}
              aria-expanded={activeDropdown === 'profile'}
              id="desktop-nav-profile"
            >
              <span>Meet Dr. Liyan</span>
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
                    className={`block px-3 py-2 text-[12.5px] rounded-lg transition-colors ${
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

          {/* DENTAL IMPLANTS Direct Link */}
          <Link
            to="/dental-implants/"
            className={`px-2.5 py-2 text-[12.5px] font-medium rounded-lg transition-colors hover:bg-brand-bronze/5 ${
              isActive('/dental-implants/') ? 'text-brand-bronze font-semibold bg-brand-bronze/5' : 'text-slate-700 hover:text-brand-bronze'
            }`}
          >
            Dental Implants
          </Link>

          {/* ALL-ON-X Direct Link */}
          <Link
            to="/all-on-x/"
            className={`px-2.5 py-2 text-[12.5px] font-medium rounded-lg transition-colors hover:bg-brand-bronze/5 ${
              isActive('/all-on-x/') ? 'text-brand-bronze font-semibold bg-brand-bronze/5' : 'text-slate-700 hover:text-brand-bronze'
            }`}
          >
            All-on-X
          </Link>

          {/* PATIENT STORIES Direct Link */}
          <Link
            to="/patient-stories/"
            className={`px-2.5 py-2 text-[12.5px] font-medium rounded-lg transition-colors hover:bg-brand-bronze/5 ${
              isActive('/patient-stories/') ? 'text-brand-bronze font-semibold bg-brand-bronze/5' : 'text-slate-700 hover:text-brand-bronze'
            }`}
          >
            Patient Stories
          </Link>

          {/* IMPLANT EDUCATION Direct Link */}
          <Link
            to="/implant-education/"
            className={`px-2.5 py-2 text-[12.5px] font-medium rounded-lg transition-colors hover:bg-brand-bronze/5 ${
              isActive('/implant-education/') ? 'text-brand-bronze font-semibold bg-brand-bronze/5' : 'text-slate-700 hover:text-brand-bronze'
            }`}
          >
            Implant Education
          </Link>

          {/* LOCATIONS Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('locations')}
              onMouseEnter={() => setActiveDropdown('locations')}
              className={`inline-flex items-center gap-1.5 px-2.5 py-2 text-[12.5px] font-medium transition-colors cursor-pointer rounded-lg hover:bg-brand-bronze/5 ${
                isDropdownActive(locationLinks) ? 'text-brand-bronze font-semibold' : 'text-slate-700 hover:text-brand-bronze'
              }`}
              id="desktop-nav-locations"
            >
              <span>Locations</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'locations' ? 'rotate-180' : ''}`} />
            </button>
            {activeDropdown === 'locations' && (
              <div 
                className="absolute right-0 mt-1.5 w-60 bg-white border border-brand-stone shadow-lg rounded-xl p-2.5 space-y-1 z-50 animate-reveal"
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {locationLinks.map(link => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`block px-3 py-2 text-[12.5px] rounded-lg transition-colors ${
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
              className={`inline-flex items-center gap-1.5 px-2.5 py-2 text-[12.5px] font-medium transition-colors cursor-pointer rounded-lg hover:bg-brand-bronze/5 ${
                isDropdownActive(mediaLinks) ? 'text-brand-bronze font-semibold' : 'text-slate-700 hover:text-brand-bronze'
              }`}
              id="desktop-nav-media"
            >
              <span>Media</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'media' ? 'rotate-180' : ''}`} />
            </button>
            {activeDropdown === 'media' && (
              <div 
                className="absolute right-0 mt-1.5 w-60 bg-white border border-brand-stone shadow-lg rounded-xl p-2.5 space-y-1 z-50 animate-reveal"
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {mediaLinks.map(link => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`block px-3 py-2 text-[12.5px] rounded-lg transition-colors ${
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

          {/* CONTACT Directly */}
          <Link
            to="/contact/"
            className={`px-2.5 py-2 text-[12.5px] font-medium rounded-lg transition-colors hover:bg-brand-bronze/5 ${
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
              <p className="text-[10px] font-mono font-bold tracking-widest text-slate-500 uppercase mb-2">Meet Dr. Liyan</p>
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

            {/* IMPLANT DENTISTRY */}
            <div>
              <p className="text-[10px] font-mono font-bold tracking-widest text-slate-500 uppercase mb-2">Implant Services</p>
              <div className="grid grid-cols-1 gap-2 border-l border-brand-stone/40 pl-3">
                {implantLinks.map(link => (
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

            {/* LOCATIONS */}
            <div>
              <p className="text-[10px] font-mono font-bold tracking-widest text-slate-500 uppercase mb-2">Practice Locations</p>
              <div className="grid grid-cols-1 gap-2 border-l border-brand-stone/40 pl-3">
                {locationLinks.map(link => (
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
              <p className="text-[10px] font-mono font-bold tracking-widest text-slate-500 uppercase mb-2">Media & PR</p>
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
