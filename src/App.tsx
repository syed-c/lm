/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { AppRouter, RouteView, useRouter, Link } from './components/AppRouter.tsx';
import { SiteHeader } from './components/SiteHeader.tsx';
import { SiteFooter } from './components/SiteFooter.tsx';
import { FloatingContactWidget } from './components/FloatingContactWidget.tsx';

// View Imports
import { HomeView } from './components/views/HomeView.tsx';
import { FocusView } from './components/views/ProfileViews.tsx';
import { OfficialProfileView } from './components/views/OfficialProfileView.tsx';
import { HerStoryView } from './components/views/HerStoryView.tsx';
import { EducationView } from './components/views/EducationView.tsx';
import { JourneyView } from './components/views/JourneyView.tsx';
import { PhilosophyView } from './components/views/PhilosophyView.tsx';
import { 
  VideosView, 
  VideoDetailView, 
  ArticlesView, 
  ArticleDetailView 
} from './components/views/PublicWorkViews.tsx';
import { 
  ClinicalAffiliationsView,
  MagnoliaDentistryView,
  ConfiDentalBeverlyHillsView 
} from './components/views/ClinicalAffiliationsView.tsx';
import { 
  PatientTrustView, 
  OfficialProfilesView 
} from './components/views/ProfessionalMentionsView.tsx';
import { MediaCenterView } from './components/views/MediaViews.tsx';
import { 
  MedicalDisclaimerView, 
  PrivacyPolicyView, 
  AccessibilityView, 
  EditorialStandardsView, 
  SitemapView,
  MedicalReviewPolicyView,
  CorrectionsPolicyView
} from './components/views/PolicyViews.tsx';
import { AuthorityDashboardView } from './components/views/AuthorityDashboardView.tsx';
import { BrandGovernanceViews } from './components/views/BrandGovernanceViews.tsx';
import { FactSheetView } from './components/views/FactSheetView.tsx';

// Dynamic Param Matcher Helper component
const AppContent: React.FC = () => {
  const { path } = useRouter();

  // 1. Dynamic Article Route Resolver: matches /articles/slug/
  if (path.startsWith('/articles/') && path !== '/articles/' && path !== '/articles') {
    // Extract slug cleanly (e.g. /articles/some-slug/ -> some-slug)
    const cleanedPath = path.endsWith('/') ? path.slice(0, -1) : path;
    const parts = cleanedPath.split('/');
    const slug = parts[2]; // [' ', 'articles', 'some-slug']
    
    return (
      <main className="min-h-screen pt-4 pb-20 bg-brand-white" id="main-content-area">
        <ArticleDetailView slug={slug} />
      </main>
    );
  }

  // 2. Dynamic Video Route Resolver: matches /videos/id/
  if (path.startsWith('/videos/') && path !== '/videos/' && path !== '/videos') {
    const cleanedPath = path.endsWith('/') ? path.slice(0, -1) : path;
    const parts = cleanedPath.split('/');
    const id = parts[2];
    
    return (
      <main className="min-h-screen pt-4 pb-20 bg-brand-white" id="main-content-area">
        <VideoDetailView videoId={id} />
      </main>
    );
  }

  // Standard Static Router Matches using modular child view wrappers
  return (
    <main className="min-h-screen bg-brand-white" id="main-content-area">
      {/* Home View */}
      <RouteView routePath="/">
        <HomeView />
      </RouteView>

      {/* Profile Views */}
      <RouteView routePath="/dr-liyan-massaband/">
        <OfficialProfileView />
      </RouteView>
      <RouteView routePath="/her-story/">
        <HerStoryView />
      </RouteView>
      <RouteView routePath="/education-and-credentials/">
        <EducationView />
      </RouteView>
      <RouteView routePath="/professional-journey/">
        <JourneyView />
      </RouteView>
      <RouteView routePath="/philosophy/">
        <PhilosophyView />
      </RouteView>
      <RouteView routePath="/professional-focus/">
        <FocusView />
      </RouteView>

      {/* Public Work Index views */}
      <RouteView routePath="/videos/">
        <VideosView />
      </RouteView>
      <RouteView routePath="/articles/">
        <ArticlesView />
      </RouteView>

      {/* Clinical Affiliations */}
      <RouteView routePath="/clinical-affiliations/">
        <ClinicalAffiliationsView />
      </RouteView>
      <RouteView routePath="/clinical-affiliations/magnolia-dentistry/">
        <MagnoliaDentistryView />
      </RouteView>
      <RouteView routePath="/clinical-affiliations/confidental-beverly-hills/">
        <ConfiDentalBeverlyHillsView />
      </RouteView>
      <RouteView routePath="/patient-trust/">
        <PatientTrustView />
      </RouteView>
      <RouteView routePath="/official-profiles/">
        <OfficialProfilesView />
      </RouteView>
      <RouteView routePath="/medical-review-policy/">
        <MedicalReviewPolicyView />
      </RouteView>
      <RouteView routePath="/corrections-policy/">
        <CorrectionsPolicyView />
      </RouteView>

      {/* Media, Press Kit, Speaking, and Contact (All leverage structured MediaCenter views) */}
      <RouteView routePath="/media/">
        <MediaCenterView />
      </RouteView>
      <RouteView routePath="/press-kit/">
        <MediaCenterView />
      </RouteView>
      <RouteView routePath="/speaking/">
        <MediaCenterView />
      </RouteView>
      <RouteView routePath="/contact/">
        <MediaCenterView />
      </RouteView>

      {/* Policy and Regulatory Shells */}
      <RouteView routePath="/medical-disclaimer/">
        <MedicalDisclaimerView />
      </RouteView>
      <RouteView routePath="/privacy-policy/">
        <PrivacyPolicyView />
      </RouteView>
      <RouteView routePath="/accessibility/">
        <AccessibilityView />
      </RouteView>
      <RouteView routePath="/editorial-standards/">
        <EditorialStandardsView />
      </RouteView>
      <RouteView routePath="/sitemap/">
        <SitemapView />
      </RouteView>
      
      {/* Off-page Digital PR and authority scoring matrix console */}
      <RouteView routePath="/authority-dashboard/">
        <AuthorityDashboardView />
      </RouteView>
      
      {/* Brand Governance, Visual Asset and Reputation Control system */}
      <RouteView routePath="/brand-governance/">
        <BrandGovernanceViews />
      </RouteView>
      
      {/* Human and AI readable Fact Sheet */}
      <RouteView routePath="/fact-sheet/">
        <FactSheetView />
      </RouteView>
      
      {/* 404 Fallback routing card */}
      <Fallback404Route />
    </main>
  );
};

// Elegant, indexable and helpful 404 handler (Compliance checklist item)
const Fallback404Route: React.FC = () => {
  const { path } = useRouter();
  
  const knownRoutes = [
    '/', '/dr-liyan-massaband/', '/her-story/', '/education-and-credentials/',
    '/professional-journey/', '/philosophy/', '/professional-focus/', '/videos/',
    '/articles/', '/clinical-affiliations/', '/clinical-affiliations/magnolia-dentistry/',
    '/clinical-affiliations/confidental-beverly-hills/', '/patient-trust/', '/official-profiles/',
    '/medical-review-policy/', '/corrections-policy/',
    '/media/', '/press-kit/', '/speaking/',
    '/contact/', '/medical-disclaimer/', '/privacy-policy/', '/accessibility/',
    '/editorial-standards/', '/sitemap/', '/authority-dashboard/', '/brand-governance/', '/fact-sheet/'
  ];

  // Skip if we find dynamic patterns
  if (path.startsWith('/articles/') || path.startsWith('/videos/')) {
    return null;
  }

  const isMatched = knownRoutes.includes(path || '/');

  if (isMatched) return null;

  return (
    <div className="max-w-4xl mx-auto text-center py-20 px-4 space-y-8 font-sans" id="fallback-404-canvas">
      <div className="space-y-4">
        <span className="text-brand-bronze text-xs font-mono font-bold uppercase tracking-widest border border-brand-bronze/35 px-3 py-1 rounded-full inline-block">
          404 Routing Misdirection
        </span>
        
        <h1 className="font-display font-medium text-3xl md:text-5xl text-brand-charcoal">
          Verification Pending
        </h1>
        
        <p className="text-slate-500 text-sm max-w-md mx-auto leading-relaxed">
          The legal path or clinical reference index you attempted to access is not registered. Please search starting from clean static directories.
        </p>
      </div>

      {/* Structured authority directories links */}
      <div className="max-w-xl mx-auto bg-brand-stone/10 border border-brand-stone/30 p-6 rounded-2xl space-y-4 text-left">
        <p className="text-xs font-mono font-bold text-brand-bronze uppercase tracking-wider text-center border-b border-brand-stone/30 pb-3">
          Discover Core Authority Nodes
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
          <Link to="/dr-liyan-massaband/" className="p-3 bg-brand-white border border-brand-stone hover:border-brand-bronze hover:text-brand-bronze rounded-xl transition-all font-semibold flex items-center justify-between">
            <span>Official Profile</span>
            <span className="text-[10px] text-slate-400 font-mono">→</span>
          </Link>
          <Link to="/clinical-affiliations/" className="p-3 bg-brand-white border border-brand-stone hover:border-brand-bronze hover:text-brand-bronze rounded-xl transition-all font-semibold flex items-center justify-between">
            <span>Clinical Affiliations</span>
            <span className="text-[10px] text-slate-400 font-mono">→</span>
          </Link>
          <Link to="/videos/" className="p-3 bg-brand-white border border-brand-stone hover:border-brand-bronze hover:text-brand-bronze rounded-xl transition-all font-semibold flex items-center justify-between">
            <span>Video Library</span>
            <span className="text-[10px] text-slate-400 font-mono">→</span>
          </Link>
          <Link to="/articles/" className="p-3 bg-brand-white border border-brand-stone hover:border-brand-bronze hover:text-brand-bronze rounded-xl transition-all font-semibold flex items-center justify-between">
            <span>Articles & Insights</span>
            <span className="text-[10px] text-slate-400 font-mono">→</span>
          </Link>
          <Link to="/media/" className="p-3 bg-brand-white border border-brand-stone hover:border-brand-bronze hover:text-brand-bronze rounded-xl transition-all font-semibold flex items-center justify-between">
            <span>Media Centre</span>
            <span className="text-[10px] text-slate-400 font-mono">→</span>
          </Link>
          <Link to="/sitemap/" className="p-3 bg-brand-white border border-brand-stone hover:border-brand-bronze hover:text-brand-bronze rounded-xl transition-all font-semibold flex items-center justify-between">
            <span>Browse HTML Sitemap</span>
            <span className="text-[10px] text-slate-400 font-mono">→</span>
          </Link>
        </div>
      </div>

      <div className="pt-2 flex justify-center gap-4 text-xs font-semibold">
        <Link to="/" className="px-5 py-2.5 bg-brand-charcoal hover:bg-brand-bronze text-brand-white rounded-lg transition-all shadow-xs">
          Return to Hub Portal
        </Link>
        <Link to="/contact/" className="px-5 py-2.5 border border-brand-stone hover:border-brand-bronze text-brand-charcoal rounded-lg transition-all">
          Contact Router
        </Link>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <AppRouter>
      <div className="min-h-screen flex flex-col bg-brand-white text-brand-charcoal font-sans" id="applet-global-shell">
        {/* Core Header */}
        <SiteHeader />
        
        {/* Main Routed Core Content Pages */}
        <AppContent />
        
        {/* Core Footer */}
        <SiteFooter />
        
        {/* Floating Patient Appointment / Care Routing Widget */}
        <FloatingContactWidget />
      </div>
    </AppRouter>
  );
}
