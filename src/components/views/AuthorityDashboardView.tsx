import React, { useState } from 'react';
import { 
  TrendingUp, 
  ShieldCheck, 
  Link as LinkIcon, 
  Video, 
  Bookmark, 
  FolderLock, 
  Radio, 
  Award, 
  AlertTriangle, 
  CheckCircle, 
  Calendar, 
  Plus, 
  Mail, 
  Sliders, 
  BookOpen, 
  Trash2, 
  Download, 
  Search, 
  Check, 
  FileText, 
  UserPlus, 
  ExternalLink,
  ChevronRight,
  Filter,
  CheckCircle2,
  CalendarDays,
  FileCheck2,
  Lock,
  ArrowUpRight,
  HelpCircle,
  Clock,
  RefreshCw,
  AlertCircle
} from 'lucide-react';
import { BRAND_CONFIG, EXTERNAL_PROFILES, CLINICAL_AFFILIATIONS } from '../../data.ts';

// ----------------------------------------------------------------------
// DATA TYPES FOR CORE DASHBOARD
// ----------------------------------------------------------------------
interface Opportunity {
  id: string;
  name: string;
  website: string;
  opportunityType: string;
  freeOrPaid: 'Free' | 'Paid' | 'Membership-Based' | 'Sponsored' | 'Earned' | 'Contra/Exchange' | 'Unknown';
  estimatedCost: number;
  topicalRelevance: number; // 0-10
  geographicRelevance: number; // 0-10
  audience: string;
  qualityScore: number; // calculated
  riskScore: number; // calculated
  targetPage: string;
  suggestedAnchor: string;
  contactPerson: string;
  contactMethod: string;
  submissionURL: string;
  requirements: string;
  linkAttribute: 'dofollow' | 'nofollow' | 'sponsored' | 'ugc' | 'unknown';
  status: 'Researching' | 'Approved' | 'Ready for Outreach' | 'Sent' | 'In Conversation' | 'Accepted' | 'Published' | 'Declined' | 'Rejected';
  notes: string;
}

interface BacklinkRecord {
  id: string;
  referringDomain: string;
  sourceURL: string;
  destinationURL: string;
  anchorText: string;
  linkAttribute: 'follow' | 'nofollow' | 'sponsored' | 'ugc';
  firstSeen: string;
  lastChecked: string;
  earnedPaidOwnedShared: 'Earned' | 'Paid' | 'Owned' | 'Shared';
  campaign: string;
  activeStatus: 'Active' | 'Lost' | 'Redirected' | 'No-indexed';
  referralTraffic: number;
  notes: string;
}

interface PRPlacement {
  id: string;
  title: string;
  publisher: string;
  url: string;
  placementType: 'Expert Commentary' | 'Editorial Contributor' | 'Interview' | 'Podcast Episode' | 'Alumni Career Spotlight' | 'Press Release' | 'Event/Speaking';
  publicationDate: string;
  earnedOrPaid: 'Earned' | 'Paid';
  sponsoredDisclosure: boolean;
  linkDestination: string;
  backlinkAttribute: string;
  mediaAsset: string;
  clientApproval: boolean;
  rightsStatus: 'DR_LIYAN_OWNED' | 'PUBLISHER_EXCLUSIVE' | 'CO_OWNED_SHARED' | 'PUBLIC_REUSE';
  status: 'Published' | 'Awaiting Syndication' | 'Scheduled';
}

interface OutreachContact {
  id: string;
  name: string;
  role: string;
  organisation: string;
  email: string;
  website: string;
  topicInterest: string;
  recentWork: string;
  consentNotes: string;
  lastContacted: string;
  status: 'Interested' | 'Emailed' | 'Replied' | 'No Contact' | 'Suppressed';
}

interface OutreachCampaign {
  id: string;
  name: string;
  campaignType: string;
  pitchAngle: string;
  destinationPage: string;
  assets: string[];
  contacts: number;
  startDate: string;
  followUpDate: string;
  results: string;
  cost: number;
  status: 'Researching' | 'Approved' | 'Ready for Outreach' | 'Sent' | 'Follow-Up Due' | 'In Conversation' | 'Accepted' | 'Published' | 'Declined' | 'No Response' | 'Archived';
}

// ----------------------------------------------------------------------
// SEED DATA
// ----------------------------------------------------------------------
const INITIAL_OPPORTUNITIES: Opportunity[] = [
  {
    id: "opp-1",
    name: "ADA News & Dr. Alumni Highlights",
    website: "https://www.ada.org/",
    opportunityType: "Professional Association Link",
    freeOrPaid: "Earned",
    estimatedCost: 0,
    topicalRelevance: 10,
    geographicRelevance: 7,
    audience: "Dentists nationwide, dental educators",
    qualityScore: 94,
    riskScore: 5,
    targetPage: "/dr-liyan-massaband/",
    suggestedAnchor: "Dr. Liyan Massaband",
    contactPerson: "Jane Doe (Staff Editor)",
    contactMethod: "ada-news-submissions@ada.org",
    submissionURL: "https://www.ada.org/pulp-submissions",
    requirements: "Requires verified ADA membership number and factual academic milestones submission.",
    linkAttribute: "nofollow",
    status: "Researching",
    notes: "Pitch her journey from public health (MPH) to private practice dentistry. Excellent authority reference."
  },
  {
    id: "opp-2",
    name: "Midwestern University Alumni Spotlight",
    website: "https://www.midwestern.edu/",
    opportunityType: "University or Alumni Link",
    freeOrPaid: "Earned",
    estimatedCost: 0,
    topicalRelevance: 10,
    geographicRelevance: 6,
    audience: "Alumni, students, dental profession",
    qualityScore: 92,
    riskScore: 2,
    targetPage: "/education-and-credentials/",
    suggestedAnchor: "Midwestern University Dental Alumna",
    contactPerson: "Alumni Affairs Board",
    contactMethod: "alumni@midwestern.edu",
    submissionURL: "https://www.midwestern.edu/alumni/submit",
    requirements: "Alumnus record lookup, brief narrative on combining clinical surgery with preventive medicine.",
    linkAttribute: "dofollow",
    status: "Approved",
    notes: "Factual story angle on physiological sciences to DMD progression. Excellent high-authority domain link."
  },
  {
    id: "opp-3",
    name: "Dental Health Literacy Podcast",
    website: "https://www.dhltalks.org",
    opportunityType: "Podcast Appearance",
    freeOrPaid: "Earned",
    estimatedCost: 0,
    topicalRelevance: 9,
    geographicRelevance: 6,
    audience: "Healthcare patients, doctors, health communicators",
    qualityScore: 82,
    riskScore: 8,
    targetPage: "/speaking/",
    suggestedAnchor: "Dr. Liyan Massaband speaking topics",
    contactPerson: "Marc Sterling (Podcast Host)",
    contactMethod: "marc@dhltalks.org",
    submissionURL: "https://www.dhltalks.org/pitch",
    requirements: "Need PDF press kit linked, speaking summary, and video sample.",
    linkAttribute: "dofollow",
    status: "Ready for Outreach",
    notes: "Audio episode focus: 'Breaking dental anxiety and evaluating social media claims responsibly.'"
  },
  {
    id: "opp-4",
    name: "Burbank Local Business Guide",
    website: "https://burbankguide.local",
    opportunityType: "Local Business Citation",
    freeOrPaid: "Free",
    estimatedCost: 0,
    topicalRelevance: 5,
    geographicRelevance: 10,
    audience: "Burbank community members",
    qualityScore: 61,
    riskScore: 12,
    targetPage: "/clinical-affiliations/",
    suggestedAnchor: "Magnolia Dentistry provider Dr Liyan",
    contactPerson: "Directory Moderator",
    contactMethod: "business@burbank.ca.gov",
    submissionURL: "https://burbankguide.local/submit",
    requirements: "Must display professional address aligned with Burbank clinic facts. Do not build custom NAP for personal site.",
    linkAttribute: "nofollow",
    status: "Sent",
    notes: "Burbank citation to reference her clinic affiliation safely, pointing to the personal brand biography."
  },
  {
    id: "opp-5",
    name: "Global Laser Dentistry Journal (Sponsored Page)",
    website: "https://www.laserlaserdentistryspam.xyz",
    opportunityType: "Paid Sponsored Placement",
    freeOrPaid: "Paid",
    estimatedCost: 750,
    topicalRelevance: 8,
    geographicRelevance: 2,
    audience: "Mainly foreign scraping sites, random users",
    qualityScore: 35,
    riskScore: 68,
    targetPage: "/",
    suggestedAnchor: "best cosmetic dentist LA",
    contactPerson: "Outreach Bot",
    contactMethod: "advertise@spammybot.com",
    submissionURL: "https://spammybot.com/buy-now",
    requirements: "Demands $750 for dofollow placement, accepts casino link neighbors, zero editorial review.",
    linkAttribute: "dofollow",
    status: "Rejected",
    notes: "CRITICAL REJECT: This is a manipulative paid placement with high-risk neighbors and no-disclosure requirement. Expose as a warning."
  }
];

const INITIAL_BACKLINKS: BacklinkRecord[] = [
  {
    id: "br-1",
    referringDomain: "usc.edu",
    sourceURL: "https://mph.usc.edu/news/alumni-advocate-liyan-massaband/",
    destinationURL: "https://drliyanmassaband.com/dr-liyan-massaband/",
    anchorText: "Dr. Liyan Massaband, MPH",
    linkAttribute: "follow",
    firstSeen: "2026-03-12",
    lastChecked: "2026-06-20",
    earnedPaidOwnedShared: "Earned",
    campaign: "Alumni Spotlight Campaign",
    activeStatus: "Active",
    referralTraffic: 245,
    notes: "Verified USC Public Health school profile discussing preventive health. Highly trustable."
  },
  {
    id: "br-2",
    referringDomain: "arizona.edu",
    sourceURL: "https://science.arizona.edu/news/physiological-sciences-alumni-achievements",
    destinationURL: "https://drliyanmassaband.com/education-and-credentials/",
    anchorText: "Dr. Liyan Massaband",
    linkAttribute: "follow",
    firstSeen: "2026-04-01",
    lastChecked: "2026-06-20",
    earnedPaidOwnedShared: "Earned",
    campaign: "Alumni Spotlight Campaign",
    activeStatus: "Active",
    referralTraffic: 130,
    notes: "Linked profile referencing her undergraduate physiological sciences research work."
  },
  {
    id: "br-3",
    referringDomain: "magnoliadentistry.com",
    sourceURL: "https://www.magnoliadentistry.com/dr-liyan-massaband/",
    destinationURL: "https://drliyanmassaband.com/",
    anchorText: "Dr. Liyan's Educational Resources & Biography",
    linkAttribute: "nofollow",
    firstSeen: "2026-01-15",
    lastChecked: "2026-06-22",
    earnedPaidOwnedShared: "Owned",
    campaign: "Clinic Integration",
    activeStatus: "Active",
    referralTraffic: 480,
    notes: "Cross-promotion reference in the Burbank Magnolia team biography. Follows safe clinic-brand separation rules."
  },
  {
    id: "br-4",
    referringDomain: "trusteddentistrymag.com",
    sourceURL: "https://www.trusteddentistrymag.com/practitioners/anxiety-mitigation/",
    destinationURL: "https://drliyanmassaband.com/articles/dental-anxiety-guide/",
    anchorText: "preventive communication model",
    linkAttribute: "follow",
    firstSeen: "2026-05-02",
    lastChecked: "2026-06-19",
    earnedPaidOwnedShared: "Earned",
    campaign: "Dental Publication Pitching",
    activeStatus: "Active",
    referralTraffic: 85,
    notes: "Editorial link quote in a discussion of dental fear. High topical relevance."
  },
  {
    id: "br-5",
    referringDomain: "beverlyhillschronicle.fake",
    sourceURL: "https://beverlyhillschronicle.fake/lifestyle/wellness-dentists-2026",
    destinationURL: "https://drliyanmassaband.com/press-kit/",
    anchorText: "biography of Dr. Liyan Massaband",
    linkAttribute: "follow",
    firstSeen: "2026-05-10",
    lastChecked: "2026-06-22",
    earnedPaidOwnedShared: "Earned",
    campaign: "Local PR Launch",
    activeStatus: "Lost",
    referralTraffic: 0,
    notes: "LOST: Publisher transitioned to new content management system and purged temporary health catalogs. Contact editor for reclamation."
  }
];

const INITIAL_PLACEMENTS: PRPlacement[] = [
  {
    id: "prp-1",
    title: "Bridging Primary Care & Dentistry: A Dentist's Academic Angle",
    publisher: "California Dental Association (CDA) Journal",
    url: "https://www.cda.org/journal/member-news",
    placementType: "Editorial Contributor",
    publicationDate: "2026-05-18",
    earnedOrPaid: "Earned",
    sponsoredDisclosure: false,
    linkDestination: "/dr-liyan-massaband/",
    backlinkAttribute: "dofollow",
    mediaAsset: "Official Clinical Portrait",
    clientApproval: true,
    rightsStatus: "DR_LIYAN_OWNED",
    status: "Published"
  },
  {
    id: "prp-2",
    title: "Preventing Dental Avoidance Through Patient Communication",
    publisher: "The Health Communications Podcast",
    url: "https://www.healthcommspod.com/episodes/dr-liyan-massaband-dmd",
    placementType: "Podcast Episode",
    publicationDate: "2026-06-10",
    earnedOrPaid: "Earned",
    sponsoredDisclosure: false,
    linkDestination: "/speaking/",
    backlinkAttribute: "nofollow (Show Notes)",
    mediaAsset: "Digital Press Kit & Audio Bio",
    clientApproval: true,
    rightsStatus: "CO_OWNED_SHARED",
    status: "Published"
  },
  {
    id: "prp-3",
    title: "Dr. Liyan Massaband, DMD, MPH Launches Dedicated Patient Education Portal",
    publisher: "Healthcare DailyNewswire",
    url: "https://www.healthcaredailynewswire.com/pr/massaband-clinical-brand-portal/",
    placementType: "Press Release",
    publicationDate: "2026-07-01",
    earnedOrPaid: "Paid",
    sponsoredDisclosure: true,
    linkDestination: "/",
    backlinkAttribute: "nofollow (Brand Branded Link)",
    mediaAsset: "Launch Logo and Portrait",
    clientApproval: true,
    rightsStatus: "DR_LIYAN_OWNED",
    status: "Scheduled"
  }
];

const INITIAL_CONTACTS: OutreachContact[] = [
  {
    id: "cont-1",
    name: "Dr. Sharon Vance",
    role: "Editor-in-Chief",
    organisation: "Women Dentists Worldwide Digest",
    email: "sharon.vance@wdwdigest.org",
    website: "https://www.wdwdigest.org",
    topicInterest: "Women leadership, clinical work-life synergy, dental education",
    recentWork: "Women practitioners utilizing short-form visual tools responsibly.",
    consentNotes: "Subscribed via professional ADA clinical panel invitation",
    lastContacted: "2026-06-11",
    status: "Interested"
  },
  {
    id: "cont-2",
    name: "Michael Chen",
    role: "Resource Director",
    organisation: "USC Public Health Association Network",
    email: "mchen@uscpha.org",
    website: "https://www.uscpha.org",
    topicInterest: "Social determinants of health, system epidemiology, dentist contributions",
    recentWork: "Public health training within clinical dental offices.",
    consentNotes: "Confirmed alumnus registration verification",
    lastContacted: "2026-06-15",
    status: "Replied"
  },
  {
    id: "cont-3",
    name: "Elena Rostova",
    role: "Booking Producer",
    organisation: "The Mindful Body Podcast",
    email: "elena@mindfulbodypodcast.com",
    website: "https://www.mindfulbodypodcast.com",
    topicInterest: "Somatic therapy, medical appointment anxiety, patient trust",
    recentWork: "Recent episode: 'Why 45% of patients delay care due to sensory dentist triggers.'",
    consentNotes: "Met at CA Community Health Summit",
    lastContacted: "2026-05-30",
    status: "Emailed"
  }
];

const INITIAL_CAMPAIGNS: OutreachCampaign[] = [
  {
    id: "camp-1",
    name: "University Alumni spotlight Outreach",
    campaignType: "University/Alumni Pitch",
    pitchAngle: "From Public Health to DMD: Dr. Liyan Massaband Path to Dual-Impact Care",
    destinationPage: "/education-and-credentials/",
    assets: ["Alumni verified academic transcripts", "Approved MPH bio", "High-res portrait of Dr. Liyan"],
    contacts: 5,
    startDate: "2026-06-01",
    followUpDate: "2026-06-14",
    results: "Secured USC profile features and Arizona achievements link.",
    cost: 0,
    status: "Published"
  },
  {
    id: "camp-2",
    name: "Dental Anxiety & Communications Podcast campaign",
    campaignType: "Podcast Guest Pitching",
    pitchAngle: "Shattering Sensory Dental Fear with Health Literacy & Transparency",
    destinationPage: "/speaking/",
    assets: ["Media Press Kit PDF", "Educational video links", "Speaking topics overview"],
    contacts: 12,
    startDate: "2026-06-15",
    followUpDate: "2026-06-29",
    results: "1 booking accepted, 2 in active negotiations.",
    cost: 0,
    status: "In Conversation"
  },
  {
    id: "camp-3",
    name: "Professional Profile Consolidation & Corrections",
    campaignType: "Free Citation Corrections",
    pitchAngle: "Direct information audit and credential verification check",
    destinationPage: "/official-profiles/",
    assets: ["NPI Federal Registration lookup link", "California licensures", "Consistent short biography"],
    contacts: 15,
    startDate: "2026-06-10",
    followUpDate: "2026-06-24",
    results: "Corrected credentials on Healthgrades, WebMD and Zocdoc.",
    cost: 0,
    status: "Ready for Outreach"
  }
];

// ----------------------------------------------------------------------
// APPROVED STORY ANGLES LIST
// ----------------------------------------------------------------------
const STORY_ANGLES = [
  {
    id: "angle-1",
    title: "Angle 1: From Public Health to Dentistry",
    focus: "How Dr. Liyan's public health (MPH) systems perspective shapes preventive patient conversations and clinical epidemiology.",
    pitch: "Dr. Massaband integrates clinical dental surgery with structured epidemiology, transforming routine hygiene checkups into comprehensive systemic risk reviews."
  },
  {
    id: "angle-2",
    title: "Angle 2: Responsible Aesthetic Expectations",
    focus: "Advocating for natural-looking cosmetic parameters, preserving individual physiology, and refusing destructive trends.",
    pitch: "In Burbank and Beverly Hills, she champions 'invisible aesthetic interventions' that emulate natural enamel structures rather than opaque artificial smiles."
  },
  {
    id: "angle-3",
    title: "Angle 3: Dental Anxiety & Emotional Trust",
    focus: "Leveraging sensory-friendly communication, visual transparency, and trauma-informed pacing.",
    pitch: "Demystifying dental fear through cognitive-behavioral patient empowerment and highly structured treatment visualization aids."
  },
  {
    id: "angle-4",
    title: "Angle 4: Patients Evaluating AI Smile Visualizations",
    focus: "What artificial simulations can successfully communicate vs. the hard biological limitations of bone, gums, and joint structures.",
    pitch: "Helping patients critically evaluate simulated outcomes as motivational diagrams rather than clinical promises."
  },
  {
    id: "angle-5",
    title: "Angle 5: Short-Form Educational Video Dynamics",
    focus: "Using public social videos responsibly to demystify dentistry without replacing personal diagnostic procedures.",
    pitch: "Analyzing how healthcare experts must balance engaging, digestible social content with absolute clinical compliance rules."
  },
  {
    id: "angle-6",
    title: "Angle 6: Health, Function & Appearance Integration",
    focus: "Why cosmetic smile design is inseparable from physical chewing mechanics, joint positioning, and biological airway health.",
    pitch: "Shattering the artificial divide between cosmetic treatments and functional physiological rehabilitation."
  },
  {
    id: "angle-7",
    title: "Angle 7: Women Leadership in Dentistry & Public Policy",
    focus: "Pioneering multi-jurisdictional private practice models and public policy advocacy.",
    pitch: "Navigating professional careers across multiple elite metropolitan regions while reinforcing academic standards."
  },
  {
    id: "angle-8",
    title: "Angle 8: Dual Practice Journey: Burbank Meets Beverly Hills",
    focus: "Factual professional growth balancing suburban community care with global cosmetic consultation.",
    pitch: "An educational overview of how community needs influence clinical environments between the San Fernando Valley and west LA."
  }
];

// ----------------------------------------------------------------------
// 12-MONTH PR CALENDAR
// ----------------------------------------------------------------------
const PR_CALENDAR = [
  { m: "Month 1", focus: "Official Web Portal & Digital Press Kit Launch", channels: "PR Distribution, Alumni bulletins", angle: "Dual Practice Launch" },
  { m: "Month 2", focus: "Standardizing Health Literacy in Oral Medicine", channels: "Public health blogs, dental newsletters", angle: "From Public Health to Dentistry" },
  { m: "Month 3", focus: "Mitigating Sensory Trigger Fears for Anxious Patients", channels: "Local podcasts, healthcare journals", angle: "Dental Anxiety & Trust" },
  { m: "Month 4", focus: "The Science of Natural Enamel Mimicry in Aesthetic Restorations", channels: "Cosmetic dental columns, dental webinars", angle: "Responsible Aesthetic Expectations" },
  { m: "Month 5", focus: "Demystifying AI Visualizations vs. Biology", channels: "Tech healthcare outlets, guest columns", angle: "Patients & AI Smile Design" },
  { m: "Month 6", focus: "Women in Dental Surgery Leadership", channels: "Alumni bulletins, community webinars", angle: "Women Leadership in Dentistry" },
  { m: "Month 7", focus: "Preventive Systems for Interdisciplinary Airway Health", channels: "Orthodontic & wellness podcasts", angle: "Health, Function & Appearance" },
  { m: "Month 8", focus: "Deciphering Social Media Dental Myths Responsibly", channels: "Short-form video assets, dental school reviews", angle: "Short-Form Educational Video" },
  { m: "Month 9", focus: "Launch of Public Dental Health Literacy Survey Resource", channels: "Earned journalist pitches, research page", angle: "Primary Survey Publication" },
  { m: "Month 10", focus: "Targeted Dental and Healthcare Podcast Guest Series", channels: "Top tier audio features, show notes links", angle: "Aesthetic Expectations" },
  { m: "Month 11", focus: "Local Beverly Hills & Burbank Business Associations Synergy", channels: "Local chambers of commerce, health talks", angle: "Burbank Meets Beverly Hills" },
  { m: "Month 12", focus: "Annual Review: Patient Education Milestones Summaries", channels: "Personal Media Centre, YouTube insights", angle: "Factual reflection" }
];

// ----------------------------------------------------------------------
// VIEW COMPONENT MAIN COHORT
// ----------------------------------------------------------------------
export const AuthorityDashboardView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'referring' | 'profiler' | 'outreach' | 'pr-calendar' | 'compliance'>('referring');
  
  // Scoring Engine States
  const [scRelevance, setScRelevance] = useState<number>(8);
  const [scAudience, setScAudience] = useState<number>(7);
  const [scTraffic, setScTraffic] = useState<number>(6);
  const [scRisk, setScRisk] = useState<number>(2);
  const [scEditorial, setScEditorial] = useState<number>(8);

  // Risk Calculator States
  const [riskSellsBacklinks, setRiskSellsBacklinks] = useState<boolean>(false);
  const [riskMixedIndustries, setRiskMixedIndustries] = useState<boolean>(false);
  const [riskAIContent, setRiskAIContent] = useState<boolean>(false);
  const [riskNoDisclosure, setRiskNoDisclosure] = useState<boolean>(false);
  const [riskDeindexed, setRiskDeindexed] = useState<boolean>(false);
  const [riskLowEditorial, setRiskLowEditorial] = useState<boolean>(false);

  // Interactive opportunities/contacts/campaigns list state
  const [opportunities, setOpportunities] = useState<Opportunity[]>(INITIAL_OPPORTUNITIES);
  const [backlinks, setBacklinks] = useState<BacklinkRecord[]>(INITIAL_BACKLINKS);
  const [prPlacements, setPrPlacements] = useState<PRPlacement[]>(INITIAL_PLACEMENTS);
  const [contacts, setContacts] = useState<OutreachContact[]>(INITIAL_CONTACTS);
  const [campaigns, setCampaigns] = useState<OutreachCampaign[]>(INITIAL_CAMPAIGNS);

  // New Opportunity Form State
  const [showAddOpp, setShowAddOpp] = useState<boolean>(false);
  const [newOppName, setNewOppName] = useState('');
  const [newOppWeb, setNewOppWeb] = useState('');
  const [newOppType, setNewOppType] = useState('Professional Profile Link');
  const [newOppCost, setNewOppCost] = useState<number>(0);
  const [newOppTarget, setNewOppTarget] = useState('/dr-liyan-massaband/');
  const [newOppStatus, setNewOppStatus] = useState<'Researching' | 'Approved' | 'Ready for Outreach'>('Researching');

  // New Contact Form State
  const [showAddContact, setShowAddContact] = useState<boolean>(false);
  const [newCtName, setNewCtName] = useState('');
  const [newCtRole, setNewCtRole] = useState('');
  const [newCtOrg, setNewCtOrg] = useState('');
  const [newCtEmail, setNewCtEmail] = useState('');

  // Search/Filter states
  const [oppFilter, setOppFilter] = useState<string>('All');
  const [linkSearch, setLinkSearch] = useState<string>('');

  // ----------------------------------------------------------------------
  // SCORING LOGIC
  // ----------------------------------------------------------------------
  const calculateDynamicScore = (rel: number, aud: number, traf: number, r: number, edit: number): number => {
    // Weighted formula: Relevance (30%), Editorial (20%), Audience (20%), Traffic (20%), Inverse Risk (10%)
    const inverseRiskScore = 10 - r;
    const rawSum = (rel * 3) + (edit * 2) + (aud * 2) + (traf * 2) + (inverseRiskScore * 1);
    return Math.round((rawSum / 10) * 10);
  };

  const dynamicQualityScore = calculateDynamicScore(scRelevance, scAudience, scTraffic, scRisk, scEditorial);

  const getScoreRating = (score: number) => {
    if (score >= 90) return { label: 'Priority Authority Opportunity', color: 'text-emerald-600 bg-emerald-50 border-emerald-200' };
    if (score >= 75) return { label: 'Strong Opportunity', color: 'text-teal-600 bg-teal-50 border-teal-200' };
    if (score >= 60) return { label: 'Useful Niche Opportunity', color: 'text-amber-600 bg-amber-50 border-amber-200' };
    if (score >= 40) return { label: 'Low Priority or Conditional', color: 'text-orange-600 bg-orange-50 border-orange-200' };
    return { label: 'Reject or Monitor Only (Danger)', color: 'text-rose-600 bg-rose-50 border-rose-200' };
  };

  const calculateRiskIndex = (): { score: number; level: 'Low' | 'Moderate' | 'High' | 'Reject'; color: string } => {
    let pts = 0;
    if (riskSellsBacklinks) pts += 30;
    if (riskMixedIndustries) pts += 20;
    if (riskAIContent) pts += 15;
    if (riskNoDisclosure) pts += 15;
    if (riskDeindexed) pts += 40;
    if (riskLowEditorial) pts += 20;

    const finalScore = Math.min(pts, 100);
    if (finalScore >= 50) return { score: finalScore, level: 'Reject', color: 'text-rose-600 bg-rose-50 border-rose-200 hover:bg-rose-100' };
    if (finalScore >= 35) return { score: finalScore, level: 'High', color: 'text-orange-600 bg-orange-50 border-orange-200 hover:bg-orange-100' };
    if (finalScore >= 20) return { score: finalScore, level: 'Moderate', color: 'text-amber-600 bg-amber-50 border-amber-200 hover:bg-amber-100' };
    return { score: finalScore, level: 'Low', color: 'text-emerald-600 bg-emerald-50 border-emerald-200 hover:bg-emerald-100' };
  };

  const dangerIndex = calculateRiskIndex();

  // ----------------------------------------------------------------------
  // ACTION HANDLERS
  // ----------------------------------------------------------------------
  const handleAddOpportunitySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newOppName || !newOppWeb) return;

    const calculatedScore = calculateDynamicScore(6, 6, 5, 1, 7); // Default mock scores
    const newRecord: Opportunity = {
      id: `opp-${Date.now()}`,
      name: newOppName,
      website: newOppWeb,
      opportunityType: newOppType,
      freeOrPaid: newOppCost > 0 ? 'Paid' : 'Free',
      estimatedCost: Number(newOppCost),
      topicalRelevance: 7,
      geographicRelevance: 5,
      audience: "General Dental Interests",
      qualityScore: calculatedScore,
      riskScore: 5,
      targetPage: newOppTarget,
      suggestedAnchor: BRAND_CONFIG.personName,
      contactPerson: "Admissions/Editor",
      contactMethod: "Email or portal",
      submissionURL: newOppWeb,
      requirements: "Factual representation of qualifications",
      linkAttribute: newOppCost > 0 ? 'sponsored' : 'dofollow',
      status: newOppStatus,
      notes: "Newly identified backlink node requiring review."
    };

    setOpportunities([newRecord, ...opportunities]);
    setNewOppName('');
    setNewOppWeb('');
    setNewOppCost(0);
    setShowAddOpp(false);
  };

  const handleAddContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCtName || !newCtEmail) return;

    const newCt: OutreachContact = {
      id: `cont-${Date.now()}`,
      name: newCtName,
      role: newCtRole || 'Representative',
      organisation: newCtOrg || 'Niche Publication',
      email: newCtEmail,
      website: 'https://' + (newCtOrg ? newCtOrg.toLowerCase().replace(/\s/g, '') + '.com' : 'unknown.com'),
      topicInterest: "Oral Medicine & Patient Education",
      recentWork: "Clinical public education protocols",
      consentNotes: "Added manually to PR Outreach Database system",
      lastContacted: "Never",
      status: "No Contact"
    };

    setContacts([newCt, ...contacts]);
    setNewCtName('');
    setNewCtRole('');
    setNewCtOrg('');
    setNewCtEmail('');
    setShowAddContact(false);
  };

  const getCampaignStatusClass = (status: string) => {
    switch (status) {
      case 'Published': return 'bg-emerald-100 text-emerald-800 border-emerald-300';
      case 'In Conversation': return 'bg-teal-100 text-teal-800 border-teal-300';
      case 'Ready for Outreach': return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'Follow-Up Due': return 'bg-amber-100 text-amber-800 border-amber-300';
      default: return 'bg-slate-100 text-slate-700 border-slate-300';
    }
  };

  return (
    <div className="w-full bg-brand-white min-h-screen py-10" id="authority-dashboard-viewport">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* UPPER TITLE DECK */}
        <div className="border-b border-brand-stone/40 pb-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-brand-bronze">
                <ShieldCheck className="w-5 h-5" />
                <span className="text-xs font-mono font-bold tracking-widest uppercase">Verified Administrative Portal</span>
              </div>
              <h1 className="font-display font-medium text-3xl md:text-4xl text-brand-charcoal tracking-tight">
                Off-Page Authority & Digital PR Console
              </h1>
              <p className="text-sm text-slate-500 max-w-3xl">
                Integrated link monitoring, outreach management, opportunity classification, risk checking, and story amplification systems for <strong className="text-brand-charcoal">{BRAND_CONFIG.displayName}</strong>.
              </p>
            </div>
            
            {/* Download System Metadata Blueprint Button (Safe, compliant action) */}
            <button 
              onClick={() => {
                const doc = {
                  author: BRAND_CONFIG.personName,
                  credentials: BRAND_CONFIG.credentials,
                  complianceRules: {
                    magnoliaTarget: "Burbank commercial queries under clinical-affiliations",
                    confidentalTarget: "Beverly Hills commercial queries under clinical-affiliations",
                    personalTarget: "Academic biography, press materials, educational videos only",
                    anchorTextPreferred: ["Dr. Liyan Massaband", "Dr. Liyan Massaband, D.M.D., M.P.H.", "official website of Dr. Liyan Massaband"]
                  },
                  opportunities: opportunities,
                  contacts: contacts,
                  campaigns: campaigns
                };
                const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(doc, null, 2));
                const downloadAnchor = document.createElement('a');
                downloadAnchor.setAttribute("href", dataStr);
                downloadAnchor.setAttribute("download", `dr_liyan_offpage_blueprint.json`);
                document.body.appendChild(downloadAnchor);
                downloadAnchor.click();
                downloadAnchor.remove();
              }}
              className="inline-flex items-center gap-2 bg-brand-charcoal hover:bg-brand-bronze text-brand-white px-4 py-2.5 rounded-lg text-xs font-mono font-bold transition-all shadow-xs shrink-0 cursor-pointer"
            >
              <Download className="w-4 h-4" /> Export PR Plan Schema
            </button>
          </div>

          {/* CLASSIFICATION ALERT: Guarding Clinical Isolation */}
          <div className="bg-brand-stone/20 border border-brand-stone/45 p-4 rounded-xl flex items-start gap-3 text-xs text-brand-charcoal">
            <AlertCircle className="w-5 h-5 text-brand-bronze shrink-0 mt-0.5" />
            <div className="space-y-1 leading-relaxed">
              <strong className="font-bold block text-brand-charcoal uppercase tracking-wider text-[11px] font-mono">Clinic Separation & Placement Guardrail</strong>
              <p>
                To protect <strong className="text-brand-bronze">Magnolia Dentistry (Burbank)</strong> and <strong className="text-brand-bronze">ConfiDental Beverly Hills (Beverly Hills)</strong>, you are strictly forbidden from directing local commercial treatment backlinks to this personal-brand portal. All local treatment rankings belong exclusively to the clinical practice domains. This portal ranks for personal credentials, health literacy, and dental-industry media authority only.
              </p>
            </div>
          </div>
        </div>

        {/* METRICS TOPPING DECK (Technical SEO Metrics) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4" id="seo-pr-live-metrics">
          <div className="bg-brand-white border border-brand-stone p-5 rounded-xl space-y-2">
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-xs font-mono font-bold uppercase tracking-wider">Referring Domains</span>
              <TrendingUp className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-display font-medium text-brand-charcoal">142</span>
              <span className="text-xs font-mono font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">+12 MoM</span>
            </div>
            <p className="text-[11px] text-slate-500 font-mono">Follow/Nofollow ratio: 68% follow</p>
          </div>

          <div className="bg-brand-white border border-brand-stone p-5 rounded-xl space-y-2">
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-xs font-mono font-bold uppercase tracking-wider">Active PR Placements</span>
              <Award className="w-4 h-4 text-brand-bronze" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-display font-medium text-brand-charcoal">18</span>
              <span className="text-xs font-mono font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">+3 Live</span>
            </div>
            <p className="text-[11px] text-slate-500 font-mono">10 Podcasts, 8 Guest articles/Interviews</p>
          </div>

          <div className="bg-brand-white border border-brand-stone p-5 rounded-xl space-y-2">
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-xs font-mono font-bold uppercase tracking-wider">Identified Prospects</span>
              <Sliders className="w-4 h-4 text-blue-500" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-display font-medium text-brand-charcoal">{opportunities.length}</span>
              <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">Scored</span>
            </div>
            <p className="text-[11px] text-slate-500 font-mono">Quality category averages: 78/100</p>
          </div>

          <div className="bg-brand-white border border-brand-stone p-5 rounded-xl space-y-2">
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-xs font-mono font-bold uppercase tracking-wider">Outreach Speed</span>
              <Clock className="w-4 h-4 text-teal-500" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-display font-medium text-brand-charcoal">24%</span>
              <span className="text-xs font-mono font-bold text-teal-600 bg-teal-50 px-1.5 py-0.5 rounded">Conversion</span>
            </div>
            <p className="text-[11px] text-slate-500 font-mono">Response rate on customized pitches</p>
          </div>
        </div>

        {/* TAB SWITCH SELECTOR */}
        <div className="flex flex-wrap border-b border-brand-stone/40" role="tablist" aria-label="Administrative Tabs">
          <button
            onClick={() => setActiveTab('referring')}
            className={`px-5 py-3 text-xs font-mono font-bold uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
              activeTab === 'referring' 
                ? 'border-brand-bronze text-brand-charcoal' 
                : 'border-transparent text-slate-400 hover:text-brand-charcoal'
            }`}
            role="tab"
            aria-selected={activeTab === 'referring'}
          >
            1. Link Registry & Monitoring
          </button>
          <button
            onClick={() => setActiveTab('profiler')}
            className={`px-5 py-3 text-xs font-mono font-bold uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
              activeTab === 'profiler' 
                ? 'border-brand-bronze text-brand-charcoal' 
                : 'border-transparent text-slate-400 hover:text-brand-charcoal'
            }`}
            role="tab"
            aria-selected={activeTab === 'profiler'}
          >
            2. Opportunity Scorer & Risk Analyser
          </button>
          <button
            onClick={() => setActiveTab('outreach')}
            className={`px-5 py-3 text-xs font-mono font-bold uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
              activeTab === 'outreach' 
                ? 'border-brand-bronze text-brand-charcoal' 
                : 'border-transparent text-slate-400 hover:text-brand-charcoal'
            }`}
            role="tab"
            aria-selected={activeTab === 'outreach'}
          >
            3. Campaign & Contact Database
          </button>
          <button
            onClick={() => setActiveTab('pr-calendar')}
            className={`px-5 py-3 text-xs font-mono font-bold uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
              activeTab === 'pr-calendar' 
                ? 'border-brand-bronze text-brand-charcoal' 
                : 'border-transparent text-slate-400 hover:text-brand-charcoal'
            }`}
            role="tab"
            aria-selected={activeTab === 'pr-calendar'}
          >
            4. Story Angles & 12-Month Calendar
          </button>
          <button
            onClick={() => setActiveTab('compliance')}
            className={`px-5 py-3 text-xs font-mono font-bold uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
              activeTab === 'compliance' 
                ? 'border-brand-bronze text-brand-charcoal' 
                : 'border-transparent text-slate-400 hover:text-brand-charcoal'
            }`}
            role="tab"
            aria-selected={activeTab === 'compliance'}
          >
            5. Safe Clinic Integration Guardrails
          </button>
        </div>

        {/* ----------------------------------------------------------------------
            TAB 1: REFERRING LINK REGISTRY & MONITORING
            ---------------------------------------------------------------------- */}
        {activeTab === 'referring' && (
          <div className="space-y-8 animate-reveal" id="pane-link-registry">
            
            {/* Header info card */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              <div className="lg:col-span-2 bg-brand-stone/10 border border-brand-stone/35 p-6 rounded-2xl space-y-4">
                <h3 className="font-display font-medium text-lg text-brand-charcoal">
                  Authority Backlink Registry
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Real-time monitoring directory tracking indexability, anchor distributions, and page paths. Branded anchor texts are heavily prioritized to build genuine machine-learning trust and direct entity corroboration in search engine knowledge graphs.
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-1">
                  <div className="relative max-w-xs w-full">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      placeholder="Filter by domain or anchor..."
                      value={linkSearch}
                      onChange={(e) => setLinkSearch(e.target.value)}
                      className="w-full pl-9 pr-3 py-1.5 border border-brand-stone rounded-lg text-xs font-sans placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-brand-bronze"
                    />
                  </div>
                  
                  {/* Anchor distribution quick-check summary (Technical SEO metric) */}
                  <div className="text-[11px] font-mono text-slate-500 bg-brand-white border border-brand-stone px-3 py-1.5 rounded-lg">
                    Branded anchors: <strong className="text-brand-charcoal">62%</strong> (Safe distribution)
                  </div>
                </div>
              </div>

              {/* SIMULATION OF ANCHOR DISTRIBUTION (Interactive widget) */}
              <div className="bg-brand-white border border-brand-stone p-6 rounded-2xl space-y-3">
                <h4 className="text-xs font-mono font-bold text-brand-charcoal uppercase tracking-wider">
                  Anchor Profile Optimization
                </h4>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between text-[11px] font-mono text-slate-500 mb-1">
                      <span>BRANDED (Massaband, Liyan, Dr....)</span>
                      <strong className="text-brand-charcoal">60%</strong>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-brand-bronze h-2 rounded-full" style={{ width: '60%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[11px] font-mono text-slate-500 mb-1">
                      <span>DESCRIPTIVE (biography, profile...)</span>
                      <strong className="text-brand-charcoal">25%</strong>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-brand-charcoal h-2 rounded-full" style={{ width: '25%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[11px] font-mono text-slate-500 mb-1">
                      <span>URL (drliyanmassaband.com)</span>
                      <strong className="text-brand-charcoal">10%</strong>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-slate-400 h-2 rounded-full" style={{ width: '10%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[11px] font-mono text-slate-500 mb-1">
                      <span>GENERIC (learn more, visit)</span>
                      <strong className="text-brand-charcoal">5%</strong>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-slate-300 h-2 rounded-full" style={{ width: '5%' }} />
                    </div>
                  </div>
                </div>
                <p className="text-[10px] text-slate-400 leading-relaxed font-sans mt-2">
                  *Avoid commercial anchors like "best Burbank dentist". Focus purely on branding nodes to prevent keyword stuffing.
                </p>
              </div>

            </div>

            {/* BACKLINKS DATATABLE */}
            <div className="bg-brand-white border border-brand-stone rounded-2xl overflow-hidden shadow-xs">
              <div className="px-6 py-4 border-b border-brand-stone flex justify-between items-center bg-brand-stone/10">
                <span className="text-xs font-mono font-bold text-brand-charcoal uppercase tracking-wider">Live Backlink Ledger</span>
                <span className="text-xs font-sans text-slate-500">{backlinks.length} Backlink records tracked</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-brand-stone/30 border-b border-brand-stone/60 font-mono text-slate-400">
                      <th className="p-4 uppercase tracking-wider">Referring Domain & URL</th>
                      <th className="p-4 uppercase tracking-wider">Source Context & Path</th>
                      <th className="p-4 uppercase tracking-wider">Anchor Text</th>
                      <th className="p-4 uppercase tracking-wider">Destination Page</th>
                      <th className="p-4 uppercase tracking-wider">Attribute</th>
                      <th className="p-4 uppercase tracking-wider font-bold">Status</th>
                      <th className="p-4 uppercase tracking-wider text-right">Traffic</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-brand-stone/40 text-slate-600 font-sans">
                    {backlinks
                      .filter(b => 
                        b.referringDomain.toLowerCase().includes(linkSearch.toLowerCase()) || 
                        b.anchorText.toLowerCase().includes(linkSearch.toLowerCase())
                      )
                      .map((b) => (
                        <tr key={b.id} className="hover:bg-brand-stone/10 transition-all">
                          <td className="p-4 font-semibold text-brand-charcoal">
                            <div className="flex flex-col">
                              <span>{b.referringDomain}</span>
                              <a href={b.sourceURL} target="_blank" rel="noopener noreferrer" className="text-[10px] text-brand-bronze font-mono hover:underline flex items-center gap-0.5 mt-0.5">
                                Visit Source <ExternalLink className="w-2.5 h-2.5" />
                              </a>
                            </div>
                          </td>
                          <td className="p-4 text-slate-500 max-w-xs truncate">{b.notes}</td>
                          <td className="p-4 font-mono text-[11px] text-brand-charcoal bg-slate-50/70 border border-slate-100">{b.anchorText}</td>
                          <td className="p-4 text-slate-500 font-mono text-[11px]">{b.destinationURL.replace('https://drliyanmassaband.com', '')}</td>
                          <td className="p-4">
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-slate-100 text-slate-500">
                              {b.linkAttribute}
                            </span>
                          </td>
                          <td className="p-4">
                            <span className={`px-2 py-0.5 rounded-sm text-[10px] uppercase font-bold font-mono tracking-wider ${
                              b.activeStatus === 'Active' ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                            }`}>
                              {b.activeStatus}
                            </span>
                          </td>
                          <td className="p-4 text-right font-mono text-brand-charcoal font-semibold">{b.referralTraffic} hits</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* LINK LOSS RECOVERY & RECLAMATION WORKFLOW */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-brand-stone/10 p-6 rounded-2xl border border-brand-stone/35">
              <div className="space-y-4">
                <h4 className="font-display font-medium text-base text-brand-charcoal">
                  Unlinked Mention Reclamation Workflow
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  When independent media platforms, patient review aggregates, or medical networks quote Dr. Liyan Massaband or mention her professional credentials (including common typos or full name formulations like <strong className="text-brand-charcoal">"Liyan Moghadam Massaband"</strong>) without linking, follow this verified outreach sequence.
                </p>
                <ol className="text-xs text-slate-600 space-y-2.5 list-decimal pl-4">
                  <li><strong>Corroborate Context:</strong> Verify there are no promotional guarantees or medical treatment ranking attempts that could degrade clinical boundaries.</li>
                  <li><strong>Target Selection:</strong> Determine the best educational resource destination page (preferably `/dr-liyan-massaband/` or her Press Kit rather than a commercial home view).</li>
                  <li><strong>Draft Polite Outreach:</strong> Inform the editor that their readers will benefit from an official biography link for credential lookup transparency.</li>
                  <li><strong>Do Not Push Anchors:</strong> Avoid demanding exact-match keywords. Highly prioritize plain brand layouts.</li>
                </ol>
              </div>

              {/* MEDIA RECLAMATION DRAFT (Interactive tool) */}
              <div className="bg-brand-white border border-brand-stone p-5 rounded-xl space-y-3">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-brand-bronze">Outreach Copywriter Tool</span>
                <h5 className="text-xs font-semibold text-brand-charcoal">Polite Reclamation Template Pitch</h5>
                <div className="bg-slate-50 border border-slate-200 p-3.5 rounded text-[11.5px] font-mono text-slate-500 whitespace-pre-wrap leading-relaxed select-all cursor-pointer">
{`Subject: Editorial Reference Update Request - Dr. Liyan Massaband, D.M.D., M.P.H.

Dear [Editor Name],

Thank you for referencing Dr. Massaband's expertise in your recent publication on dental anxiety protocols.

To help your readers easily lookup her credentials or find additional preventive resources, would you consider updating the text to link directly to her official educational portal? 

Biographical link: https://drliyanmassaband.com/dr-liyan-massaband/

Thank you for maintaining high editorial standards.

Best regards,

[PR Facilitator]`}
                </div>
                <div className="text-[10px] text-slate-400 text-center italic">
                  *Click snippet block to highlight text for copy operations.
                </div>
              </div>
            </div>

          </div>
        )}

        {/* ----------------------------------------------------------------------
            TAB 2: OPPORTUNITY PROFILER & RISK EVALUATOR
            ---------------------------------------------------------------------- */}
        {activeTab === 'profiler' && (
          <div className="space-y-8 animate-reveal" id="pane-profiler-scorer">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* PRIMARY INTERACTIVE QUALITY SCORING MATRIX */}
              <div className="bg-brand-white border border-brand-stone p-6 rounded-2xl space-y-5">
                <div className="flex items-center gap-2 border-b border-brand-stone/40 pb-3">
                  <Sliders className="text-brand-bronze w-5 h-5" />
                  <h3 className="font-display font-medium text-base text-brand-charcoal">
                    Opportunity Quality Scoring Engine (0-100)
                  </h3>
                </div>
                <p className="text-xs text-slate-500">
                  Custom matrix modeling that calculates a priority index based on actual dental-relevance weightings rather than generic Third-Party Domain Authority metrics.
                </p>

                {/* SLIDERS GANG */}
                <div className="space-y-4 pt-2">
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-mono font-bold text-brand-charcoal">
                      <span>Topical & Dental Relevance (30% weight)</span>
                      <span>{scRelevance} / 10</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={scRelevance}
                      onChange={(e) => setScRelevance(Number(e.target.value))}
                      className="w-full accent-brand-bronze"
                    />
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-mono font-bold text-brand-charcoal">
                      <span>Editorial & Peer Review Quality (20% weight)</span>
                      <span>{scEditorial} / 10</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={scEditorial}
                      onChange={(e) => setScEditorial(Number(e.target.value))}
                      className="w-full accent-brand-bronze"
                    />
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-mono font-bold text-brand-charcoal">
                      <span>Healthcare/Public-Health Authority (20% weight)</span>
                      <span>{scAudience} / 10</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={scAudience}
                      onChange={(e) => setScAudience(Number(e.target.value))}
                      className="w-full accent-brand-bronze"
                    />
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-mono font-bold text-brand-charcoal">
                      <span>Estimated Organic Traffic & Readership (20% weight)</span>
                      <span>{scTraffic} / 10</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={scTraffic}
                      onChange={(e) => setScTraffic(Number(e.target.value))}
                      className="w-full accent-brand-bronze"
                    />
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-mono font-bold text-brand-charcoal">
                      <span>Inverse Quality Risk Factor (10% weight)</span>
                      <span>{scRisk} / 10</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="10"
                      value={scRisk}
                      onChange={(e) => setScRisk(Number(e.target.value))}
                      className="w-full accent-brand-bronze"
                    />
                  </div>
                </div>

                {/* SCORING OUTPUT VIEW */}
                <div className="bg-brand-stone/20 border border-brand-stone/45 p-5 rounded-xl flex flex-col items-center justify-center text-center space-y-2 mt-4">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400">Determined Quality Score</span>
                  <div className="text-4xl font-display font-semibold text-brand-charcoal">
                    {dynamicQualityScore} <span className="text-sm text-slate-400">/ 100</span>
                  </div>
                  <div className={`text-xs border px-3 py-1 rounded-full font-mono font-bold uppercase ${getScoreRating(dynamicQualityScore).color}`}>
                    {getScoreRating(dynamicQualityScore).label}
                  </div>
                </div>

              </div>

              {/* DETAILED WHITE-HAT LINK RISK CALCULATOR */}
              <div className="bg-brand-white border border-brand-stone p-6 rounded-2xl space-y-5">
                <div className="flex items-center gap-2 border-b border-brand-stone/40 pb-3" id="risk-score-eval">
                  <AlertTriangle className="text-brand-bronze w-5 h-5" />
                  <h3 className="font-display font-medium text-base text-brand-charcoal">
                    Outreach Backlink Risk Calculator
                  </h3>
                </div>
                <p className="text-xs text-slate-500">
                  Select key risk parameters to evaluate if an outreach opportunity is compliance-safe. Automated spam systems and manipulative tactics must be rejected.
                </p>

                {/* TARGET CHECKBOXES */}
                <div className="space-y-3.5 pt-2">
                  <label className="flex items-start gap-2.5 text-xs text-slate-600 select-none cursor-pointer">
                    <input
                      type="checkbox"
                      checked={riskSellsBacklinks}
                      onChange={(e) => setRiskSellsBacklinks(e.target.checked)}
                      className="mt-0.5 rounded text-brand-bronze focus:ring-brand-bronze"
                    />
                    <div className="space-y-0.5">
                      <strong className="text-brand-charcoal font-semibold">Openly sells backlinks (Dofollow Placement)</strong>
                      <p className="text-[11px] text-slate-400">Demands money for links without sponsored disclosures.</p>
                    </div>
                  </label>

                  <label className="flex items-start gap-2.5 text-xs text-slate-600 select-none cursor-pointer">
                    <input
                      type="checkbox"
                      checked={riskMixedIndustries}
                      onChange={(e) => setRiskMixedIndustries(e.target.checked)}
                      className="mt-0.5 rounded text-brand-bronze focus:ring-brand-bronze"
                    />
                    <div className="space-y-0.5">
                      <strong className="text-brand-charcoal font-semibold">Mixed Industry Profile (Casino / Adult Neighbors)</strong>
                      <p className="text-[11px] text-slate-400">Web neighbors are high-risk categories violating healthcare standards.</p>
                    </div>
                  </label>

                  <label className="flex items-start gap-2.5 text-xs text-slate-600 select-none cursor-pointer">
                    <input
                      type="checkbox"
                      checked={riskAIContent}
                      onChange={(e) => setRiskAIContent(e.target.checked)}
                      className="mt-0.5 rounded text-brand-bronze focus:ring-brand-bronze"
                    />
                    <div className="space-y-0.5">
                      <strong className="text-brand-charcoal font-semibold">Massive AI-spun / Low-Quality Content</strong>
                      <p className="text-[11px] text-slate-400">Devoid of unique review processes or direct regulatory standards.</p>
                    </div>
                  </label>

                  <label className="flex items-start gap-2.5 text-xs text-slate-600 select-none cursor-pointer">
                    <input
                      type="checkbox"
                      checked={riskNoDisclosure}
                      onChange={(e) => setRiskNoDisclosure(e.target.checked)}
                      className="mt-0.5 rounded text-brand-bronze focus:ring-brand-bronze"
                    />
                    <div className="space-y-0.5">
                      <strong className="text-brand-charcoal font-semibold">Unclear Sponsored Disclosures</strong>
                      <p className="text-[11px] text-slate-400">Violates Federal Trade Commission mandates on transparency.</p>
                    </div>
                  </label>

                  <label className="flex items-start gap-2.5 text-xs text-slate-600 select-none cursor-pointer">
                    <input
                      type="checkbox"
                      checked={riskDeindexed}
                      onChange={(e) => setRiskDeindexed(e.target.checked)}
                      className="mt-0.5 rounded text-brand-bronze focus:ring-brand-bronze"
                    />
                    <div className="space-y-0.5">
                      <strong className="text-brand-charcoal font-semibold">Deindexed or Manual Penalty Warning on site</strong>
                      <p className="text-[11px] text-slate-400">Site has been flagged / purged from standard search queries.</p>
                    </div>
                  </label>

                  <label className="flex items-start gap-2.5 text-xs text-slate-600 select-none cursor-pointer">
                    <input
                      type="checkbox"
                      checked={riskLowEditorial}
                      onChange={(e) => setRiskLowEditorial(e.target.checked)}
                      className="mt-0.5 rounded text-brand-bronze focus:ring-brand-bronze"
                    />
                    <div className="space-y-0.5">
                      <strong className="text-brand-charcoal font-semibold">Low Editorial Resistance (Accepts any submit)</strong>
                      <p className="text-[11px] text-slate-400">Zero entry oversight, zero validation, essentially a directory farm.</p>
                    </div>
                  </label>
                </div>

                {/* RISK EVALUATION OUTPUT */}
                <div className={`p-4 rounded-xl border flex items-center justify-between transition-all ${dangerIndex.color}`}>
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 leading-none">Risk Level Index</span>
                    <strong className="text-sm font-semibold block">{dangerIndex.level} Risk Profile ({dangerIndex.score} pts)</strong>
                  </div>
                  <div className="text-xs font-mono font-bold">
                    {dangerIndex.level === 'Reject' || dangerIndex.level === 'High' ? (
                      <span className="text-rose-600">⚠️ MANUAL DISCOVERY REJECTED</span>
                    ) : (
                      <span className="text-emerald-600">✅ SAFE OUTREACH ENROLLMENT</span>
                    )}
                  </div>
                </div>

              </div>

            </div>

            {/* INTERACTIVE OPPORTUNITIES EXPLORER */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="space-y-1">
                  <h3 className="font-display font-medium text-lg text-brand-charcoal">
                    Opp. Prospect Database & Classification
                  </h3>
                  <p className="text-xs text-slate-500">
                    All prospects must be classified across her designated campaign groups.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  {/* Category filters */}
                  <span className="text-xs font-mono text-slate-400 mr-2 flex items-center gap-1">
                    <Filter className="w-3.5 h-3.5" /> Type:
                  </span>
                  {['All', 'University or Alumni Link', 'Professional Association Link', 'Podcast Appearance', 'Rejected'].map((cat) => (
                    <button
                      key={cat}
                      className={`px-3 py-1 text-[11px] font-mono border rounded-full transition-all cursor-pointer ${
                        oppFilter === cat 
                          ? 'bg-brand-charcoal border-brand-charcoal text-brand-white font-bold' 
                          : 'bg-brand-white border-brand-stone text-slate-500 hover:text-brand-charcoal'
                      }`}
                      onClick={() => setOppFilter(cat)}
                    >
                      {cat}
                    </button>
                  ))}
                  
                  {/* Trigger additions modal */}
                  <button
                    onClick={() => setShowAddOpp(!showAddOpp)}
                    className="ml-2 inline-flex items-center gap-1.5 bg-brand-bronze text-brand-white text-xs px-3 py-1.5 rounded-lg font-bold hover:bg-brand-charcoal transition-all cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" /> Add Prospect
                  </button>
                </div>
              </div>

              {/* NEW PROSPECT DRAWER FORM */}
              {showAddOpp && (
                <form onSubmit={handleAddOpportunitySubmit} className="bg-brand-stone/10 border border-brand-stone p-5 rounded-2xl grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  <div className="space-y-1">
                    <label className="font-semibold text-brand-charcoal font-mono uppercase text-[10px]">Prospect Platform Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Arizona Science Alumni Digest"
                      value={newOppName}
                      onChange={(e) => setNewOppName(e.target.value)}
                      className="w-full bg-brand-white border border-brand-stone p-2 rounded-lg"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-semibold text-brand-charcoal font-mono uppercase text-[10px]">Website/Submission URL</label>
                    <input
                      type="url"
                      required
                      placeholder="e.g. https://science.arizona.edu/submit"
                      value={newOppWeb}
                      onChange={(e) => setNewOppWeb(e.target.value)}
                      className="w-full bg-brand-white border border-brand-stone p-2 rounded-lg"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-semibold text-brand-charcoal font-mono uppercase text-[10px]">Classification Category</label>
                    <select
                      value={newOppType}
                      onChange={(e) => setNewOppType(e.target.value)}
                      className="w-full bg-brand-white border border-brand-stone p-2 rounded-lg shrink-0"
                    >
                      <option>University or Alumni Link</option>
                      <option>Professional Association Link</option>
                      <option>Dental Industry Directory Link</option>
                      <option>Podcast Appearance</option>
                      <option>Media Feature</option>
                      <option>Paid Sponsored Placement</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="font-semibold text-brand-charcoal font-mono uppercase text-[10px]">Target Destination Page on Dr Liyan site</label>
                    <select
                      value={newOppTarget}
                      onChange={(e) => setNewOppTarget(e.target.value)}
                      className="w-full bg-brand-white border border-brand-stone p-2 rounded-lg shrink-0"
                    >
                      <option value="/dr-liyan-massaband/">Official Biography Profile (/dr-liyan-massaband/)</option>
                      <option value="/education-and-credentials/">Education & Credentials</option>
                      <option value="/press-kit/">Media Press Kit</option>
                      <option value="/speaking/">Speaking Interests</option>
                      <option value="/">Home Dashboard</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="font-semibold text-brand-charcoal font-mono uppercase text-[10px]">Cost Estimates (Write 0 if free)</label>
                    <input
                      type="number"
                      value={newOppCost}
                      onChange={(e) => setNewOppCost(Number(e.target.value))}
                      className="w-full bg-brand-white border border-brand-stone p-2 rounded-lg"
                    />
                  </div>
                  <div className="flex items-end gap-2.5">
                    <button type="submit" className="bg-brand-charcoal text-brand-white px-4 py-2 rounded-lg font-bold hover:bg-brand-bronze transition-all w-full cursor-pointer">
                      Save Prospect Node
                    </button>
                    <button type="button" onClick={() => setShowAddOpp(false)} className="border border-brand-stone font-bold px-4 py-2 hover:bg-brand-white rounded-lg transition-all cursor-pointer">
                      Cancel
                    </button>
                  </div>
                </form>
              )}

              {/* LIST DISPLAY */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" id="quality-scorers-visual-grid">
                {opportunities
                  .filter(o => {
                    if (oppFilter === 'All') return true;
                    if (oppFilter === 'Rejected') return o.status === 'Rejected' || o.qualityScore < 40;
                    return o.opportunityType === oppFilter;
                  })
                  .map((o) => (
                    <div key={o.id} className="bg-brand-white border border-brand-stone p-5 rounded-2xl relative flex flex-col justify-between space-y-4 hover:border-brand-bronze hover:shadow-xs transition-all">
                      
                      {/* Category and cost info */}
                      <div className="space-y-2">
                        <div className="flex items-start justify-between gap-1">
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 bg-brand-stone/30 px-2 py-0.5 rounded-full">{o.opportunityType}</span>
                          <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase ${o.estimatedCost > 0 ? 'bg-amber-50 text-amber-600 font-bold' : 'bg-emerald-50 text-emerald-600'}`}>
                            {o.estimatedCost > 0 ? `$${o.estimatedCost} Paid` : 'Free'}
                          </span>
                        </div>
                        
                        <h4 className="font-display font-medium text-brand-charcoal text-sm leading-tight">{o.name}</h4>
                        <a href={o.website} target="_blank" rel="noopener noreferrer" className="text-[10px] text-brand-bronze font-mono hover:underline flex items-center gap-0.5 truncate max-w-[200px]">
                          {o.website} <ExternalLink className="w-2.5 h-2.5" />
                        </a>
                      </div>

                      {/* Middle description notes */}
                      <div className="space-y-1.5 py-1 text-[11px] leading-relaxed text-slate-500 border-t border-brand-stone/40">
                        <p><strong>Anchor:</strong> "{o.suggestedAnchor}"</p>
                        <p><strong>To:</strong> <span className="font-mono text-slate-600">{o.targetPage}</span></p>
                        <p className="italic font-sans text-slate-400">"{o.notes}"</p>
                      </div>

                      {/* Calculated Quality score block */}
                      <div className="flex items-center justify-between border-t border-brand-stone/40 pt-3">
                        <div className="flex items-baseline gap-1">
                          <span className="text-xs font-mono text-slate-400">Score:</span>
                          <strong className="font-display font-semibold text-brand-charcoal text-base">{o.qualityScore}</strong>
                        </div>
                        
                        {/* Status change actions */}
                        <div className="flex items-center gap-1.5">
                          <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-mono font-bold ${
                            o.status === 'Rejected' ? 'bg-rose-100 text-rose-800' :
                            o.status === 'Sent' ? 'bg-blue-100 text-blue-800' : 'bg-slate-100 text-slate-600'
                          }`}>
                            {o.status}
                          </span>
                          
                          <button
                            onClick={() => {
                              setOpportunities(opportunities.filter(x => x.id !== o.id));
                            }}
                            className="text-slate-300 hover:text-rose-600 p-1 rounded transition-color cursor-pointer"
                            title="Purge opportunity record"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                    </div>
                  ))}
              </div>

            </div>

          </div>
        )}

        {/* ----------------------------------------------------------------------
            TAB 3: OUTREACH CAMPAIGNS & CONTACT DATABASE
            ---------------------------------------------------------------------- */}
        {activeTab === 'outreach' && (
          <div className="space-y-8 animate-reveal" id="pane-contacts-database">
            
            {/* Split layout: Campaigns on left, media directory contacts on right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* CAMPAIGN MODULE TRACKER */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center justify-between pb-3 border-b border-brand-stone/40">
                  <div className="space-y-0.5">
                    <h3 className="font-display font-medium text-lg text-brand-charcoal">Active Outreach Campaigns</h3>
                    <p className="text-xs text-slate-500">Track pitch segments, targets, and live status progress.</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {campaigns.map((c) => (
                    <div key={c.id} className="bg-brand-white border border-brand-stone p-5 rounded-2xl space-y-4 hover:border-brand-bronze transition-all">
                      <div className="flex items-start justify-between gap-2.5">
                        <div className="space-y-1">
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2.5 py-0.5 rounded-full">{c.campaignType}</span>
                          <h4 className="font-display font-medium text-brand-charcoal text-base">{c.name}</h4>
                        </div>
                        <span className={`px-2.5 py-0.5 border rounded-sm text-[10px] uppercase font-mono font-bold ${getCampaignStatusClass(c.status)}`}>
                          {c.status}
                        </span>
                      </div>

                      {/* Pitch details */}
                      <div className="text-xs space-y-2 text-slate-600 bg-brand-stone/10 p-3.5 rounded-xl border border-brand-stone/30">
                        <p className="leading-relaxed"><strong>Story Pitch Angle:</strong> "{c.pitchAngle}"</p>
                        <p className="text-[11px] text-slate-500"><strong>Primary Assets Linked:</strong> {c.assets.join(', ')}</p>
                      </div>

                      {/* bottom campaign telemetry */}
                      <div className="flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-500 border-t border-brand-stone/40 pt-3">
                        <div className="flex items-center gap-3">
                          <span>Contacts Enrolled: <strong>{c.contacts}</strong></span>
                          <span>|</span>
                          <span>Target: <span className="font-mono text-brand-charcoal bg-slate-50 border border-slate-200 px-1.5 rounded">{c.destinationPage}</span></span>
                        </div>
                        <div className="text-slate-400">
                          Started: <strong>{c.startDate}</strong>
                        </div>
                      </div>

                    </div>
                  ))}
                </div>
              </div>

              {/* OUTREACH MEDIA DIRECTORY CONTACTS */}
              <div className="lg:col-span-5 space-y-6 bg-brand-stone/10 p-6 rounded-2xl border border-brand-stone/35">
                <div className="flex items-center justify-between pb-3 border-b border-brand-stone/40">
                  <div className="space-y-0.5">
                    <h3 className="font-display font-medium text-base text-brand-charcoal">Secure Media Contact Database</h3>
                    <p className="text-xs text-slate-500 font-sans">Authorized directory for custom outreach.</p>
                  </div>
                  <button
                    onClick={() => setShowAddContact(!showAddContact)}
                    className="inline-flex items-center gap-1 bg-brand-charcoal text-brand-white text-xs px-2.5 py-1.5 rounded-lg font-bold hover:bg-brand-bronze transition-all cursor-pointer"
                  >
                    <UserPlus className="w-3.5 h-3.5" /> Add Editor
                  </button>
                </div>

                {/* ADD CONTACT DRAWER FORM */}
                {showAddContact && (
                  <form onSubmit={handleAddContactSubmit} className="bg-brand-white border border-brand-stone p-4 rounded-xl space-y-3 text-xs">
                    <div className="space-y-1">
                      <label className="font-semibold text-brand-charcoal font-mono uppercase text-[10px]">Contact Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Dr. Sharon Vance"
                        value={newCtName}
                        onChange={(e) => setNewCtName(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 p-2 rounded-lg"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="font-semibold text-brand-charcoal font-mono uppercase text-[10px]">Role / Job Title</label>
                      <input
                        type="text"
                        placeholder="e.g. Booking Producer"
                        value={newCtRole}
                        onChange={(e) => setNewCtRole(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 p-2 rounded-lg"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="font-semibold text-brand-charcoal font-mono uppercase text-[10px]">Publication Organization</label>
                      <input
                        type="text"
                        placeholder="e.g. Health Literacy Network"
                        value={newCtOrg}
                        onChange={(e) => setNewCtOrg(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 p-2 rounded-lg"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="font-semibold text-brand-charcoal font-mono uppercase text-[10px]">Professional Email</label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. sharon@publication.org"
                        value={newCtEmail}
                        onChange={(e) => setNewCtEmail(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 p-2 rounded-lg"
                      />
                    </div>
                    <div className="flex gap-2 pt-1">
                      <button type="submit" className="bg-brand-bronze text-brand-white px-3 py-1.5 rounded-lg font-bold w-full cursor-pointer">Save Contact</button>
                      <button type="button" onClick={() => setShowAddContact(false)} className="border border-slate-300 font-bold px-3 py-1.5 rounded-lg w-full cursor-pointer">Cancel</button>
                    </div>
                  </form>
                )}

                {/* CONTACTS CARDS */}
                <div className="space-y-3" id="outreach-contact-list-container">
                  {contacts.map((ct) => (
                    <div key={ct.id} className="bg-brand-white border border-brand-stone p-4 rounded-xl space-y-3 hover:shadow-xs transition-all relative">
                      <div className="flex items-start justify-between gap-1">
                        <div className="space-y-0.5">
                          <h4 className="font-display font-medium text-brand-charcoal text-sm leading-none">{ct.name}</h4>
                          <span className="text-[11px] text-slate-400 block">{ct.role} &mdash; <strong className="text-slate-500 font-semibold">{ct.organisation}</strong></span>
                        </div>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase ${
                          ct.status === 'Interested' ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'
                        }`}>
                          {ct.status}
                        </span>
                      </div>

                      {/* Interest alignment detail */}
                      <div className="text-[10.5px] leading-relaxed text-slate-500 border-t border-brand-stone/40 pt-2 space-y-1">
                        <p><strong>Niche focus:</strong> {ct.topicInterest}</p>
                        <p className="font-mono text-[9px] text-brand-bronze">Email: {ct.email}</p>
                      </div>

                      {/* delete contact action */}
                      <button
                        onClick={() => setContacts(contacts.filter(x => x.id !== ct.id))}
                        className="absolute right-3 bottom-2 text-slate-300 hover:text-rose-600 p-1 rounded cursor-pointer"
                        title="Delete contact entry"
                      >
                        <Trash2 className="w-3" />
                      </button>

                    </div>
                  ))}
                </div>

                {/* REGULATORY DATA DISCLOSURE BLOCK */}
                <div className="bg-brand-white border border-brand-stone p-4 rounded-xl text-[11px] text-slate-400 leading-relaxed space-y-2">
                  <span className="font-mono font-bold text-[10px] text-brand-charcoal uppercase block">🛡️ Professional Data Protection Shield</span>
                  <p>
                    All contact records adhere to medical compliance rules. Do not scrape or expose private details. Only engage practitioners who display verified interest in patient communications or systemic health literacy.
                  </p>
                </div>

              </div>

            </div>

          </div>
        )}

        {/* ----------------------------------------------------------------------
            TAB 4: STORY ANGLES & 12-MONTH PR CALENDAR
            ---------------------------------------------------------------------- */}
        {activeTab === 'pr-calendar' && (
          <div className="space-y-8 animate-reveal" id="pane-story-angles">
            
            {/* SECTION 1: STORY ANGLE BRIEF LIBRARY */}
            <div className="space-y-4">
              <div className="space-y-1">
                <h3 className="font-display font-medium text-lg text-brand-charcoal">Approved Digital PR Story Angle Library</h3>
                <p className="text-xs text-slate-500">Factual story structures verified by medical and credential compliance audits. Promotional spin must be heavily restricted.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" id="approved-briefs-storycaps">
                {STORY_ANGLES.map((angle) => (
                  <div key={angle.id} className="bg-brand-white border border-brand-stone p-5 rounded-xl space-y-3 flex flex-col justify-between hover:border-brand-bronze transition-all">
                    <div className="space-y-2">
                      <span className="text-[9px] font-mono font-bold text-brand-bronze uppercase bg-brand-stone/30 px-2 py-0.5 rounded-full">{angle.id.toUpperCase()}</span>
                      <h4 className="font-display font-medium text-brand-charcoal text-sm leading-tight">{angle.title.replace('Angle:', '')}</h4>
                      <p className="text-[11.5px] leading-relaxed text-slate-500 font-sans">{angle.focus}</p>
                    </div>
                    <div className="bg-slate-50 p-2.5 rounded border border-slate-100 text-[10.5px] font-mono text-slate-500 leading-normal mt-2 italic">
                      "{angle.pitch}"
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SECTION 2: 12-MONTH DURATION SCHEDULER */}
            <div className="space-y-4" id="calendar-durations">
              <div className="space-y-1">
                <h3 className="font-display font-medium text-lg text-brand-charcoal">12-Month PR Implementation Blueprint</h3>
                <p className="text-xs text-slate-500">Monthly campaign topics and communications channels optimized for authority and machine confidence.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {PR_CALENDAR.map((cal, index) => (
                  <div key={index} className="bg-brand-white border border-brand-stone rounded-xl overflow-hidden flex flex-col hover:border-brand-bronze transition-all">
                    
                    {/* Month header badge */}
                    <div className="bg-brand-charcoal text-brand-white text-xs font-mono font-bold px-4 py-2 uppercase flex items-center justify-between">
                      <span>{cal.m}</span>
                      <CalendarDays className="w-3.5 h-3.5 text-brand-bronze" />
                    </div>

                    <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                      <div className="space-y-1.5">
                        <strong className="text-xs font-bold font-sans text-brand-charcoal leading-tight block">{cal.focus}</strong>
                        <p className="text-[11px] text-slate-500 leading-relaxed"><span className="font-semibold">Channels:</span> {cal.channels}</p>
                      </div>

                      <div className="text-[10px] font-mono bg-brand-stone/30 px-2.5 py-1 rounded text-brand-bronze text-center uppercase tracking-wider">
                        {cal.angle}
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* ----------------------------------------------------------------------
            TAB 5: SAFE CLINIC INTEGRATION GUARDRAILS & FIRST 90-DAY PLAN
            ---------------------------------------------------------------------- */}
        {activeTab === 'compliance' && (
          <div className="space-y-8 animate-reveal" id="pane-compliance-guardrails">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* PRIMARY SAFETY COMPLIANCE REPORT */}
              <div className="bg-brand-white border border-brand-stone p-6 rounded-2xl space-y-5">
                <div className="flex items-center gap-2 border-b border-brand-stone/40 pb-3">
                  <FolderLock className="text-brand-bronze w-5 h-5" />
                  <h3 className="font-display font-medium text-lg text-brand-charcoal">
                    Authority Safety & Clinical Guarantees
                  </h3>
                </div>
                
                <div className="space-y-4 text-xs">
                  <div className="space-y-2">
                    <strong className="text-brand-charcoal font-bold uppercase tracking-wider font-mono text-[11px] block">⚠️ Prohibited Claims & Tactics (Do Not Use)</strong>
                    <ul className="space-y-2 text-slate-500 leading-relaxed list-disc pl-4">
                      <li>Never offer direct <strong className="text-brand-charcoal">guarantees on cosmetic smile treatments</strong> or medical outcome assurances.</li>
                      <li>Never pitch <strong className="text-brand-charcoal">highly technical implant parameters</strong> or biological claims without secondary peer-reviewed references.</li>
                      <li>Never participate in <strong className="text-brand-charcoal">automated directoriesblasts or Link farms</strong> merely for quantity.</li>
                      <li>Never publish fake reviews or fabricate testimonials. PracticeDilly reviews must remain strictly classified as existing factual external references.</li>
                    </ul>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-brand-stone/40">
                    <strong className="text-brand-charcoal font-bold uppercase tracking-wider font-mono text-[11px] block">📉 Actions That Could Harm Clinic SEO</strong>
                    <ul className="space-y-2 text-slate-500 leading-relaxed list-disc pl-4">
                      <li>Do not construct a separate Name-Address-Phone (NAP) footprint for this personal portal using the clinic addresses. This creates local citation conflict and triggers duplicate penalties.</li>
                      <li>Do not rank this brand portal for local Burbank/Beverly Hills treatment terms (e.g. "dental crowns Beverly Hills"). Leave cosmetic/restorative dental searches to Magnolia and ConfiDental.</li>
                    </ul>
                  </div>
                </div>

              </div>

              {/* FIRST 90-DAY DETAILED EXECUTION PLAN (Interactive list) */}
              <div className="bg-brand-white border border-brand-stone p-6 rounded-2xl space-y-5">
                <div className="flex items-center gap-2 border-b border-brand-stone/40 pb-3" id="plan90">
                  <FileCheck2 className="text-brand-bronze w-5 h-5" />
                  <h3 className="font-display font-medium text-lg text-brand-charcoal">
                    First 90-Day Execution Progress
                  </h3>
                </div>
                <p className="text-xs text-slate-500">Check off finished deliverables as her outreach campaigns progress.</p>

                {/* PLANS ACCORDION GRID */}
                <div className="space-y-3.5 text-xs">
                  
                  {/* DAYS 1-30 */}
                  <div className="border border-brand-stone p-3.5 rounded-xl space-y-2">
                    <span className="font-bold text-brand-bronze font-mono uppercase tracking-widest text-[10px]">Days 1–30: Profile Audits & Portal Setup</span>
                    <label className="flex items-center gap-2 text-slate-600 select-none cursor-pointer">
                      <input type="checkbox" defaultChecked className="rounded text-brand-bronze focus:ring-brand-bronze" />
                      <span>Audit current profile consistencies on Zocdoc, Healthgrades and the NPI Registry.</span>
                    </label>
                    <label className="flex items-center gap-2 text-slate-600 select-none cursor-pointer">
                      <input type="checkbox" defaultChecked className="rounded text-brand-bronze focus:ring-brand-bronze" />
                      <span>Configure dynamic sitemap indexing schemas and trailing-slash 301 rules on the node server.</span>
                    </label>
                    <label className="flex items-center gap-2 text-slate-600 select-none cursor-pointer">
                      <input type="checkbox" className="rounded text-brand-bronze focus:ring-brand-bronze" />
                      <span>Build direct outreach media kit PDF download and linkable patient literacy checklist.</span>
                    </label>
                  </div>

                  {/* DAYS 31-60 */}
                  <div className="border border-brand-stone p-3.5 rounded-xl space-y-2">
                    <span className="font-bold text-brand-bronze font-mono uppercase tracking-widest text-[10px]">Days 31–60: Podcast Pitting & Journalist Source Responses</span>
                    <label className="flex items-center gap-2 text-slate-600 select-none cursor-pointer">
                      <input type="checkbox" className="rounded text-brand-bronze focus:ring-brand-bronze" />
                      <span>Enroll and pitch her academic story to Midwestern and USC alumni associations.</span>
                    </label>
                    <label className="flex items-center gap-2 text-slate-600 select-none cursor-pointer">
                      <input type="checkbox" className="rounded text-brand-bronze focus:ring-brand-bronze" />
                      <span>Respond weekly to verified journalist questions on health literacy and dental anxiety topics.</span>
                    </label>
                    <label className="flex items-center gap-2 text-slate-600 select-none cursor-pointer">
                      <input type="checkbox" className="rounded text-brand-bronze focus:ring-brand-bronze" />
                      <span>Politely contact editors of unlinked media mentions to add official biographical links.</span>
                    </label>
                  </div>

                  {/* DAYS 61-90 */}
                  <div className="border border-brand-stone p-3.5 rounded-xl space-y-2">
                    <span className="font-bold text-brand-bronze font-mono uppercase tracking-widest text-[10px]">Days 61–90: Story Amplifications & Local Synergy</span>
                    <label className="flex items-center gap-2 text-slate-600 select-none cursor-pointer">
                      <input type="checkbox" className="rounded text-brand-bronze focus:ring-brand-bronze" />
                      <span>Review and amplify secured podcast placements via YouTube Community and official summaries.</span>
                    </label>
                    <label className="flex items-center gap-2 text-slate-600 select-none cursor-pointer">
                      <input type="checkbox" className="rounded text-brand-bronze focus:ring-brand-bronze" />
                      <span>Evaluate Burbank and Beverly Hills local chamber of commerce directories for membership value.</span>
                    </label>
                  </div>

                </div>

              </div>

            </div>

            {/* CONFIRMATION CHECKLISTS & DISALLOWED CLAIMS DIRECTORY */}
            <div className="bg-brand-stone/10 border border-brand-stone p-6 rounded-2xl text-xs space-y-4">
              <h4 className="font-display font-medium text-base text-brand-charcoal">
                Direct Client Approval Report & Safeguards Checklist
              </h4>
              <p className="text-slate-500">
                To guarantee absolute regulatory compliance, her PR agents and coordinators must obtain written or verbal confirmation from <strong className="text-brand-charcoal">Dr. Liyan Massaband</strong> before completing any of the following outreach tasks:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                
                <div className="space-y-2 bg-brand-white p-4 rounded-xl border border-brand-stone/50">
                  <strong className="text-brand-bronze font-mono uppercase text-[10px] block">1. Client Confirmations Required</strong>
                  <ul className="space-y-1.5 text-slate-500 list-disc pl-4 text-[11px]">
                    <li>All paid sponsorships or PR placements containing cost profiles.</li>
                    <li>The final narrative design for personal "Women in Dentistry" outreach campaigns.</li>
                    <li>Release of any anonymized patient surveys or public anxiety studies.</li>
                    <li>Any membership representations with new business directories.</li>
                  </ul>
                </div>

                <div className="space-y-2 bg-brand-white p-4 rounded-xl border border-brand-stone/50">
                  <strong className="text-brand-bronze font-mono uppercase text-[10px] block">2. Prohibited Backlink Activities</strong>
                  <ul className="space-y-1.5 text-slate-500 list-disc pl-4 text-[11px]">
                    <li>Constructing reciprocal link exchanges (link-for-link systems).</li>
                    <li>Buying exact-match paid dofollow keywords.</li>
                    <li>Creating fake clinic awards or fabricated rankings.</li>
                    <li>Submitting identical biographies to lowest-level scraping networks.</li>
                  </ul>
                </div>

                <div className="space-y-2 bg-brand-white p-4 rounded-xl border border-brand-stone/50">
                  <strong className="text-brand-bronze font-mono uppercase text-[10px] block">3. Permitted Narrative Groundings</strong>
                  <ul className="space-y-1.5 text-slate-500 list-disc pl-4 text-[11px]">
                    <li>Active licensures verified in federal NPI provider databases.</li>
                    <li>Academic degrees (D.M.D. Midwestern, M.P.H. USC, physiological science Arizona).</li>
                    <li>Documented clinical positions at Magnolia Dentistry and ConfiDental Beverly Hills.</li>
                    <li>Direct patient-education transcripts reviewable publicly.</li>
                  </ul>
                </div>

              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
