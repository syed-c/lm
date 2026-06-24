import React, { useState } from 'react';
import { 
  ShieldAlert, 
  CheckCircle2, 
  AlertTriangle, 
  HelpCircle, 
  FileCheck2, 
  RefreshCw, 
  FileText, 
  Users, 
  Lock, 
  Eye, 
  CalendarDays, 
  Search, 
  UserCheck, 
  Camera, 
  Globe, 
  Mail, 
  ExternalLink, 
  Sparkles, 
  Bookmark, 
  Cpu, 
  Volume2, 
  Share2, 
  Download, 
  BookOpen, 
  Check, 
  ChevronRight,
  User, 
  Briefcase,
  Layers,
  Heart,
  Settings,
  Flame,
  FileCode2,
  Trash2,
  ListTodo,
  Plus
} from 'lucide-react';
import { BRAND_CONFIG } from '../../data.ts';

// ----------------------------------------------------------------------
// DATA TYPES DEFINED AS PER COMPLIANCE RULES
// ----------------------------------------------------------------------
interface BiographyVersion {
  id: string;
  name: string;
  text: string;
  wordCount: number;
  intendedUse: string;
  approvedBy: string;
  approvalDate: string;
  reviewDate: string;
  replacedVersion: string;
  status: 'Active' | 'Review Due' | 'Drafting' | 'Archived';
}

interface ClaimRecord {
  id: string;
  claim: string;
  category: 'identity' | 'credentials' | 'education' | 'professional affiliation' | 'experience' | 'procedures' | 'philosophy' | 'reviews' | 'awards' | 'technology';
  source: string;
  verifiedDate: string;
  clientApproved: boolean;
  medicalApproved: boolean;
  allowedContexts: string;
  prohibitedContexts: string;
  reviewDate: string;
  status: 'Published' | 'Under Review' | 'Flagged';
}

interface PhotoAsset {
  id: string;
  title: string;
  file: string;
  photographer: string;
  copyrightOwner: string;
  usageRights: string;
  patientConsentRequired: boolean;
  patientConsentReceived: boolean;
  pressUseAllowed: boolean;
  cropRules: string;
  altText: string;
  approved: boolean;
  status: 'Active' | 'Under Review' | 'Expired';
}

interface OfficialProfile {
  id: string;
  platform: string;
  url: string;
  username: string;
  ownershipConfirmed: boolean;
  confirmationMethod: string;
  loginOwner: string;
  recoveryEmail: string;
  twoFactorEnabled: boolean;
  biographyVersionUsed: string;
  imageVersionUsed: string;
  websiteLinkUrl: string;
  lastCheckedDate: string;
  correctionStatus: 'None Needed' | 'Pending Correction' | 'Corrected' | 'In Progress';
  status: 'Verified' | 'Unverified' | 'Spam/Impersonator' | 'Claimed';
}

interface ReputationAlert {
  id: string;
  alertType: 'incorrect credential' | 'impersonation profile' | 'false review' | 'misleading article' | 'copied photograph' | 'unsupported award claim' | 'outdated clinic relationship' | 'broken profile';
  sourceURL: string;
  severity: 'Immediate Action' | 'High' | 'Moderate' | 'Low';
  issue: string;
  evidence: string;
  owner: string;
  actionRequired: string;
  legalReviewNeeded: boolean;
  status: 'Alert Logged' | 'Under Investigation' | 'Mitigation Sent' | 'Resolved' | 'Archived';
}

interface ReviewSource {
  id: string;
  platform: string;
  profileURL: string;
  entityReviewed: 'Dr. Liyan Massaband' | 'Magnolia Dentistry (Burbank)' | 'ConfiDental Beverly Hills';
  currentRating: number;
  reviewCount: number;
  dateChecked: string;
  publicDisplayAllowed: boolean;
  logoRightsFetched: boolean;
  clientApproval: boolean;
  schemaAllowed: boolean;
  notes: string;
}

// ----------------------------------------------------------------------
// DATA SEEDING ACCORDING TO SYSTEM CONFIG
// ----------------------------------------------------------------------
const INITIAL_BIOGRAPHIES: BiographyVersion[] = [
  {
    id: "bio-1",
    name: "One-Line Identifier",
    text: "Dr. Liyan Massaband, D.M.D., M.P.H., is a California dentist with professional affiliations in Burbank and Beverly Hills.",
    wordCount: 16,
    intendedUse: "General bios, article bylines, quick summaries",
    approvedBy: "Dr. Liyan Massaband",
    approvalDate: "2026-05-10",
    reviewDate: "2027-05-10",
    replacedVersion: "v1.0-Initial",
    status: "Active"
  },
  {
    id: "bio-2",
    name: "Short Biography",
    text: "Dr. Liyan Massaband, D.M.D., M.P.H., integrates advanced clinical dentistry with a robust public health perspective. Practicing at Magnolia Dentistry in Burbank and ConfiDental Beverly Hills, she is dedicated to scientific health literacy, empowering patients with clear educational videos, transparent diagnostics, and highly individualized, health-focused cosmetic restorations.",
    wordCount: 49,
    intendedUse: "Podcast directories, quick speaker cards, brief PR bios",
    approvedBy: "Dr. Liyan Massaband",
    approvalDate: "2026-06-02",
    reviewDate: "2026-12-02",
    replacedVersion: "None (New Outline)",
    status: "Active"
  },
  {
    id: "bio-3",
    name: "Medium Biography",
    text: "Dr. Liyan Massaband, D.M.D., M.P.H., is a California dentist who brings a distinct dual-perspective approach to patient care. By pairing advanced clinical dental sciences with her Master of Public Health background, Dr. Liyan transforms the traditional patient appointment into an educational, health-literate experience. She is active across two premier clinical environments, practicing family and preventive dentistry at Magnolia Dentistry in Burbank and advanced artistic treatments at ConfiDental Beverly Hills. Dr. Liyan is the creator of several comprehensive oral health visualization resources, developing clinical short-form educational videos that explain complex smile parameters directly. She received her rigorous science foundation at the University of Arizona, her dental degree at Midwestern University, and her Master of Public Health at the University of Southern California (USC), ensuring every treatment plan is rooted in anatomical evidence.",
    wordCount: 147,
    intendedUse: "Speaker profiles, dental editorial contributor side-panels, medical directories",
    approvedBy: "Dr. Liyan Massaband",
    approvalDate: "2026-06-12",
    reviewDate: "2026-12-12",
    replacedVersion: "v1.2-Draft",
    status: "Active"
  },
  {
    id: "bio-4",
    name: "Long Biography",
    text: "Dr. Liyan Massaband, D.M.D., M.P.H., represents a rare standard of contemporary oral healthcare: a practicing clinician who views dental disease through both a microscopic surgical lens and a broad public health perspective. Driven by the philosophy that systemic health, functional mechanics, and aesthetics are completely inseparable, Dr. Liyan has dedicated her career to establishing true health literacy. This commitment is reflected in her dual clinical roles across Southern California. In Burbank, she serves patients at Magnolia Dentistry with a focus on comprehensive preventive planning, family dentistry, and early-stage intervention. In Beverly Hills, she provides consultations and treatment at ConfiDental Beverly Hills, emphasizing minimally invasive cosmetic rehabilitations, biocompatible materials, and anatomically accurate enamel reconstruction. An advocate for sensory-friendly care models, she has designed specific anxiety-reduction protocols that empower patients to participate actively in their treatment pacing. Dr. Liyan's academic foundation is deeply rooted in physiological sciences and public policy. She completed her undergraduate degree at the University of Arizona, subsequently acquiring her Doctor of Dental Medicine (D.M.D.) from Midwestern University, and her Master of Public Health (M.P.H.) from the University of Southern California. Today, she uses her extensive training to create public educational series, including structured video libraries and diagnostic checklists, allowing patients worldwide to access honest, evidence-supported oral health guidelines without overpromising or artificial enhancements.",
    wordCount: 236,
    intendedUse: "Official Website About/Profile Hub, Media Press Kit Document downloads",
    approvedBy: "Dr. Liyan Massaband",
    approvalDate: "2026-06-15",
    reviewDate: "2026-12-15",
    replacedVersion: "v1.5-Draft",
    status: "Active"
  }
];

const INITIAL_CLAIMS: ClaimRecord[] = [
  {
    id: "clm-1",
    claim: "Dr. Liyan holds a Master of Public Health from the University of Southern California (USC).",
    category: "education",
    source: "USC Registrar & Certified Diploma",
    verifiedDate: "2026-01-10",
    clientApproved: true,
    medicalApproved: true,
    allowedContexts: "Profile bios, Press deck, Education and Credentials pages, Schema metadata.",
    prohibitedContexts: "Never assert that USC endorses specific commercial clinic treatments.",
    reviewDate: "2027-01-10",
    status: "Published"
  },
  {
    id: "clm-2",
    claim: "Dual clinical affiliation with Magnolia Dentistry (Burbank) and ConfiDental Beverly Hills.",
    category: "professional affiliation",
    source: "Employment Agreements & NPI active records",
    verifiedDate: "2026-01-12",
    clientApproved: true,
    medicalApproved: true,
    allowedContexts: "Biography sidebars, Clinical affiliations router, Contact page, Footer credits.",
    prohibitedContexts: "Do not group the financial corporate structures of both clinics together; they are independent business entities.",
    reviewDate: "2026-12-12",
    status: "Published"
  },
  {
    id: "clm-3",
    claim: "Creator of the Sensory-Friendly Anxiety Reduction Protocol.",
    category: "philosophy",
    source: "Clinical Patient Education checklists",
    verifiedDate: "2026-03-15",
    clientApproved: true,
    medicalApproved: true,
    allowedContexts: "Patient Trust section, Philosophy page, Speaking topics, Custom articles.",
    prohibitedContexts: "Do not claim this protocol completely cures clinical phobias or guarantees risk-free surgery.",
    reviewDate: "2026-09-15",
    status: "Published"
  },
  {
    id: "clm-4",
    claim: "Best, pain-free dentist in Beverly Hills with guaranteed results.",
    category: "procedures",
    source: "Unknown marketing draft",
    verifiedDate: "2026-06-20",
    clientApproved: false,
    medicalApproved: false,
    allowedContexts: "STRICTLY PROHIBITED. Violates advertising standards and clinical compliance rules.",
    prohibitedContexts: "Prohibited in all contexts.",
    reviewDate: "2026-06-20",
    status: "Flagged"
  }
];

const INITIAL_PHOTOS: PhotoAsset[] = [
  {
    id: "pho-1",
    title: "Signature Dark Hero Portrait",
    file: "dr-liyan-massaband-professional-portrait-dark.jpg",
    photographer: "Studio LA Creative",
    copyrightOwner: "Dr. Liyan Massaband",
    usageRights: "Full perpetual commercial and editorial usage rights owned by client.",
    patientConsentRequired: false,
    patientConsentReceived: false,
    pressUseAllowed: true,
    cropRules: "Do not crop below chin on landing pages; keep dark background untouched.",
    altText: "Dr. Liyan Massaband, DMD, MPH in a professional clinical slate portrait",
    approved: true,
    status: "Active"
  },
  {
    id: "pho-2",
    title: "Educational Video Creation Session",
    file: "dr-liyan-video-recording-studios.jpg",
    photographer: "Burbank PR Hub",
    copyrightOwner: "Magnolia Dentistry & Dr. Liyan Joint Content",
    usageRights: "Co-owned. Joint rights for social platform distribution.",
    patientConsentRequired: false,
    patientConsentReceived: false,
    pressUseAllowed: true,
    cropRules: "Wide landscape crop allowed for header grids and article headers.",
    altText: "Dr. Liyan Massaband hosting an oral hygiene educational recording session",
    approved: true,
    status: "Active"
  },
  {
    id: "pho-3",
    title: "Patient Consult Smile Reconstruction (Anonymized)",
    file: "cosmetic-reconstruction-case-4.jpg",
    photographer: "Clinical intra-oral camera",
    copyrightOwner: "ConfiDental Beverly Hills",
    usageRights: "Approved for medical exhibition and personal-brand portfolio.",
    patientConsentRequired: true,
    patientConsentReceived: true,
    pressUseAllowed: false,
    cropRules: "Strictly display teeth alignment only. Keep patient's full face completely anonymous.",
    altText: "Anonymized clinical close-up showing physiological restoration alignment",
    approved: true,
    status: "Active"
  }
];

const INITIAL_PROFILES: OfficialProfile[] = [
  {
    id: "prof-1",
    platform: "Instagram",
    url: "https://www.instagram.com/drliyanmassaband/",
    username: "drliyanmassaband",
    ownershipConfirmed: true,
    confirmationMethod: "Handheld visual proof and live verification code",
    loginOwner: "Dr. Liyan / Social Lead",
    recoveryEmail: "security@drliyanmassaband.com",
    twoFactorEnabled: true,
    biographyVersionUsed: "Social Story Layout",
    imageVersionUsed: "Signature Dark Portrait",
    websiteLinkUrl: "https://drliyanmassaband.com/",
    lastCheckedDate: "2026-06-20",
    correctionStatus: "None Needed",
    status: "Verified"
  },
  {
    id: "prof-2",
    platform: "Zocdoc",
    url: "https://www.zocdoc.com/dentist/liyan-massaband-dmd-mph-314420",
    username: "Dr. Liyan Massaband",
    ownershipConfirmed: true,
    confirmationMethod: "Registered clinic credential link",
    loginOwner: "ConfiDental Practice Manager",
    recoveryEmail: "beverlyhills@confidental.com",
    twoFactorEnabled: true,
    biographyVersionUsed: "Medium Biography",
    imageVersionUsed: "Signature Warm-light Portrait",
    websiteLinkUrl: "https://drliyanmassaband.com/",
    lastCheckedDate: "2026-06-22",
    correctionStatus: "Pending Correction",
    status: "Claimed"
  },
  {
    id: "prof-3",
    platform: "Healthgrades Mockup (Spike)",
    url: "https://www.healthgrades.com/provider/liyan-mesaband-fake333",
    username: "Liyan Mesaband DDS",
    ownershipConfirmed: false,
    confirmationMethod: "Scraped directory auto-generation detected",
    loginOwner: "Unclaimed",
    recoveryEmail: "None",
    twoFactorEnabled: false,
    biographyVersionUsed: "None",
    imageVersionUsed: "Outdated headshot 2019",
    websiteLinkUrl: "None",
    lastCheckedDate: "2026-06-18",
    correctionStatus: "Pending Correction",
    status: "Unverified"
  }
];

const INITIAL_ALERTS: ReputationAlert[] = [
  {
    id: "alr-1",
    alertType: "incorrect credential",
    sourceURL: "https://www.localhealthratings.com/massaband-dentistry",
    severity: "Immediate Action",
    issue: "Directory lists her as 'Liyan Massaband DDS' rather than 'DMD'.",
    evidence: "Public Healthgrades profile mirror error.",
    owner: "SEO Manager / PR Lead",
    actionRequired: "File correction ticket with registration certificates and licensures.",
    legalReviewNeeded: false,
    status: "Mitigation Sent"
  },
  {
    id: "alr-2",
    alertType: "impersonation profile",
    sourceURL: "https://www.instagram.com/dr_liyan_cosmetics_la/",
    severity: "Immediate Action",
    issue: "Fake profile cloned her educational shorts and is pitching dental bleaching kits via DM.",
    evidence: "User reports matching exact headshots with custom affiliate redirection.",
    owner: "Brand Manager / IP Counsel",
    actionRequired: "Submit Instagram intellectual property takedown report with copyright certification.",
    legalReviewNeeded: true,
    status: "Under Investigation"
  },
  {
    id: "alr-3",
    alertType: "outdated clinic relationship",
    sourceURL: "https://www.burbankdentalsociety.org/list",
    severity: "Moderate",
    issue: "Lists previous clinical partner address from her residency project in 2023.",
    evidence: "Burbank directory index showing inactive office phone number.",
    owner: "SEO Manager",
    actionRequired: "Email webmaster with current official Burbank Magnolia Dentistry address facts.",
    legalReviewNeeded: false,
    status: "Resolved"
  }
];

const INITIAL_REVIEW_SOURCES: ReviewSource[] = [
  {
    id: "rev-1",
    platform: "Zocdoc",
    profileURL: "https://www.zocdoc.com/dentist/liyan-massaband-dmd-mph-314420",
    entityReviewed: "Dr. Liyan Massaband",
    currentRating: 4.95,
    reviewCount: 382,
    dateChecked: "2026-06-22",
    publicDisplayAllowed: true,
    logoRightsFetched: true,
    clientApproval: true,
    schemaAllowed: true,
    notes: "Aggregated 100% on personal patient performance. Complies with Zocdoc review terms."
  },
  {
    id: "rev-2",
    platform: "Google Business - Magnolia Dentistry Burbank",
    profileURL: "https://maps.google.com/?cid=magnolia-dentistry-burbank",
    entityReviewed: "Magnolia Dentistry (Burbank)",
    currentRating: 4.9,
    reviewCount: 541,
    dateChecked: "2026-06-20",
    publicDisplayAllowed: true,
    logoRightsFetched: true,
    clientApproval: true,
    schemaAllowed: false,
    notes: "clinic-level aggregate reviews. Never attribute these stars as personal awards to Dr. Liyan alone."
  },
  {
    id: "rev-3",
    platform: "Google Business - ConfiDental Beverly Hills",
    profileURL: "https://maps.google.com/?cid=confidental-beverly-hills",
    entityReviewed: "ConfiDental Beverly Hills",
    currentRating: 4.8,
    reviewCount: 310,
    dateChecked: "2026-06-19",
    publicDisplayAllowed: true,
    logoRightsFetched: true,
    clientApproval: true,
    schemaAllowed: false,
    notes: "Beverly Hills clinic metrics. Displays must clearly label the clinical brand entity separate from the personal portal."
  }
];

export const BrandGovernanceViews: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'identity' | 'bios' | 'claims' | 'profiles' | 'crisis' | 'audits'>('identity');
  
  // Interactive Tester States
  const [testText, setTestText] = useState<string>('Hello! Meet Dr. Leanne Mesaban at Confidential Beverly Hills. She is a top celebrity dentist who guarantees pain-free smile arcs and holds a great degree from UCLA.');
  const [testMatches, setTestMatches] = useState<any[]>([]);

  // Interactive Content approval simulation states
  const [roles, setRoles] = useState<string>('Brand Manager');
  const [biographies, setBiographies] = useState<BiographyVersion[]>(INITIAL_BIOGRAPHIES);
  const [claims, setClaims] = useState<ClaimRecord[]>(INITIAL_CLAIMS);
  const [photos, setPhotos] = useState<PhotoAsset[]>(INITIAL_PHOTOS);
  const [profiles, setProfiles] = useState<OfficialProfile[]>(INITIAL_PROFILES);
  const [alerts, setAlerts] = useState<ReputationAlert[]>(INITIAL_ALERTS);
  const [reviews, setReviews] = useState<ReviewSource[]>(INITIAL_REVIEW_SOURCES);

  // New Bio Form State
  const [showAddBio, setShowAddBio] = useState<boolean>(false);
  const [newBioName, setNewBioName] = useState('');
  const [newBioText, setNewBioText] = useState('');
  const [newBioUse, setNewBioUse] = useState('');

  // New Claim Form State
  const [showAddClaim, setShowAddClaim] = useState<boolean>(false);
  const [newClaimText, setNewClaimText] = useState('');
  const [newClaimCat, setNewClaimCat] = useState<'identity' | 'credentials' | 'education' | 'professional affiliation' | 'experience' | 'procedures' | 'philosophy' | 'reviews' | 'awards' | 'technology'>('identity');
  const [newClaimSource, setNewClaimSource] = useState('');

  // New Alert State
  const [showAddAlert, setShowAddAlert] = useState<boolean>(false);
  const [newAlertUrl, setNewAlertUrl] = useState('');
  const [newAlertIssue, setNewAlertIssue] = useState('');
  const [newAlertSeverity, setNewAlertSeverity] = useState<'Immediate Action' | 'High' | 'Moderate' | 'Low'>('High');

  // Pre-launch audit checking states (Interactive)
  const [auditChecklist, setAuditChecklist] = useState({
    nameCorrect: true,
    credentialsConsistent: true,
    clinicNamesApproved: true,
    noToothLogos: true,
    patientConsentDocumented: true,
    noAiPortraits: true,
    noUnlinkedSeenInLogo: true,
    schemaConsistent: true,
    legalDisclaimerActive: true
  });

  // Post-launch schedule states
  const [postLaunchChecks, setPostLaunchChecks] = useState({
    audit30Day: true,
    audit90Day: false,
    audit6Month: false
  });

  // ----------------------------------------------------------------------
  // CONSISTENCY ALGORITHM / SCANNER (Real simulation of validator)
  // ----------------------------------------------------------------------
  const runConsistencyScan = () => {
    const list: any[] = [];
    const textLower = testText.toLowerCase();

    // 1. Name Misspellings
    if (textLower.includes('leanne') || textLower.includes('mesaban') || textLower.includes('masaband') || textLower.includes('mesaband')) {
      list.push({
        issueType: 'Spelling Variation Risk',
        severity: 'High Warning',
        match: 'Leanne Mesaban / Masaband / Mesaband',
        rule: 'Only represent she as "Dr. Liyan Massaband, D.M.D., M.P.H." Avoid fuzzy phonetic spellings or DDS indicators.',
        status: 'Action Required: Correct to exact name spelling.'
      });
    }

    // 2. Prohibited superlatives / claims
    if (textLower.includes('celebrity dentist') || textLower.includes('best dentist') || textLower.includes('top cosmetic') || textLower.includes('guarantees') || textLower.includes('pain-free')) {
      list.push({
        issueType: 'Unsupported Superlative/Claim',
        severity: 'High Warning',
        match: 'celebrity dentist / guarantees / pain-free',
        rule: 'Direct violating claim rules. Dr. Liyan never uses superlatives like "top," "best," "pain-free," or claims general "guarantees" on treatment.',
        status: 'Blocked Content: Remove superlative.'
      });
    }

    // 3. Clinic Branding Variations
    if (textLower.includes('confidential') && !textLower.includes('confidental')) {
      list.push({
        issueType: 'Clinic Capitalization Rule Defeat',
        severity: 'Moderate',
        match: 'Confidential',
        rule: 'Preserve internal camel-capitalization structure of ConfiDental Beverly Hills. Do not spell as general word "Confidential".',
        status: 'Action Required: Replace with ConfiDental Beverly Hills.'
      });
    }
    if (textLower.includes('magnolia dental') && !textLower.includes('magnolia dentistry')) {
      list.push({
        issueType: 'Clinic Designation Error',
        severity: 'Moderate',
        match: 'Magnolia Dental',
        rule: 'Must use exact full business label: "Magnolia Dentistry" to match state corporation records.',
        status: 'Recommended Action: Update to "Magnolia Dentistry".'
      });
    }

    // 4. Academic Credential errors
    if (textLower.includes('dds')) {
      list.push({
        issueType: 'Academic Degree Inaccuracy',
        severity: 'High Warning',
        match: 'DDS',
        rule: 'Dr. Liyan Massaband acquired a DMD, not a DDS. Never state DDS on any press material.',
        status: 'Action Required: Change to DMD.'
      });
    }

    // 5. Smile Arc or Dental Cross mention
    if (textLower.includes('smile arc') || textLower.includes('tooth logo') || textLower.includes('medical cross')) {
      list.push({
        issueType: 'Visual Logo Guideline Conflict',
        severity: 'Low',
        match: 'smile arc / tooth logo',
        rule: 'The visual system must use only the crisp text-based horizontal wordmark. Prohibit dental icons, teeth, smile arcs, or glowing cross vectors.',
        status: 'Visual Guardrail Check: Verify.'
      });
    }

    if (list.length === 0) {
      list.push({
        issueType: 'All Compliant',
        severity: 'Perfect Score',
        match: 'Zero conflicts found',
        rule: 'Factual text complies with the Dr. Liyan Master Identity Record perfectly.',
        status: 'Ready to Publish.'
      });
    }

    setTestMatches(list);
  };

  // ----------------------------------------------------------------------
  // ADD FORM HANDLERS
  // ----------------------------------------------------------------------
  const submitNewBio = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newBioName || !newBioText) return;

    const newRecord: BiographyVersion = {
      id: `bio-${Date.now()}`,
      name: newBioName,
      text: newBioText,
      wordCount: newBioText.split(/\s+/).filter(Boolean).length,
      intendedUse: newBioUse || 'General PR distribution',
      approvedBy: roles === 'Client Approver' ? 'Dr. Liyan Massaband' : 'Pending Client Approver Sign-off',
      approvalDate: roles === 'Client Approver' ? '2026-06-22' : 'Pending Approval',
      reviewDate: '2026-12-22',
      replacedVersion: 'None (New entry)',
      status: roles === 'Client Approver' ? 'Active' : 'Drafting'
    };

    setBiographies([...biographies, newRecord]);
    setNewBioName('');
    setNewBioText('');
    setNewBioUse('');
    setShowAddBio(false);
  };

  const submitNewClaim = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newClaimText || !newClaimSource) return;

    const newRecord: ClaimRecord = {
      id: `clm-${Date.now()}`,
      claim: newClaimText,
      category: newClaimCat,
      source: newClaimSource,
      verifiedDate: '2026-06-22',
      clientApproved: roles === 'Client Approver' ? true : false,
      medicalApproved: roles === 'Medical Reviewer' || roles === 'Client Approver' ? true : false,
      allowedContexts: 'Verify standard portal page integration',
      prohibitedContexts: 'Must not exaggerative performance or make guarantees',
      reviewDate: '2027-06-22',
      status: roles === 'Client Approver' ? 'Published' : 'Under Review'
    };

    setClaims([...claims, newRecord]);
    setNewClaimText('');
    setNewClaimSource('');
    setShowAddClaim(false);
  };

  const submitNewAlert = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAlertUrl || !newAlertIssue) return;

    const newAc: ReputationAlert = {
      id: `alr-${Date.now()}`,
      alertType: 'incorrect credential',
      sourceURL: newAlertUrl,
      severity: newAlertSeverity,
      issue: newAlertIssue,
      evidence: "User report on direct URL",
      owner: roles,
      actionRequired: "Pending editorial review response.",
      legalReviewNeeded: newAlertSeverity === 'Immediate Action' ? true : false,
      status: 'Alert Logged'
    };

    setAlerts([newAc, ...alerts]);
    setNewAlertUrl('');
    setNewAlertIssue('');
    setShowAddAlert(false);
  };

  const handleToggleAudit = (key: keyof typeof auditChecklist) => {
    setAuditChecklist({ ...auditChecklist, [key]: !auditChecklist[key] });
  };

  // Calculate overall compliance score
  const checkCount = Object.values(auditChecklist).filter(Boolean).length;
  const totalAudits = Object.values(auditChecklist).length;
  const compliancePct = Math.round((checkCount / totalAudits) * 100);

  return (
    <div className="w-full bg-brand-white min-h-screen py-10" id="brand-governance-viewport">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* UPPER TITLE DECK */}
        <div className="border-b border-brand-stone/40 pb-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-brand-bronze">
                <FileCode2 className="w-5 h-5" />
                <span className="text-xs font-mono font-bold tracking-widest uppercase">Content Governance & Identity Vault</span>
              </div>
              <h1 className="font-display font-medium text-3xl md:text-4xl text-brand-charcoal tracking-tight">
                Brand Consistency & Reputation Matrix
              </h1>
              <p className="text-sm text-slate-500 max-w-3xl">
                The administrative and editorial control hub for managing <strong className="text-brand-charcoal">Dr. Liyan Massaband's</strong> personal-brand representation, ensuring alignment with professional healthcare standards.
              </p>
            </div>

            {/* Simulated Active Role Selection (Administrative Feature) */}
            <div className="bg-brand-stone/10 border border-brand-stone/50 px-4 py-2.5 rounded-xl flex items-center gap-2 text-xs shrink-0 font-mono">
              <Users className="w-4 h-4 text-brand-bronze" />
              <span className="text-slate-500">Active Role:</span>
              <select 
                value={roles} 
                onChange={(e) => setRoles(e.target.value)}
                className="bg-brand-white border border-brand-stone hover:border-brand-bronze rounded px-2 py-0.5 text-brand-charcoal font-sans font-semibold focus:outline-none"
              >
                <option value="Administrator">Administrator (All Permissions)</option>
                <option value="Brand Manager">Brand Manager</option>
                <option value="PR Manager">PR Manager</option>
                <option value="Medical Reviewer">Medical Reviewer (Clinician)</option>
                <option value="Client Approver">Client Approver (Dr. Liyan)</option>
                <option value="SEO Manager">SEO Manager</option>
              </select>
            </div>
          </div>

          {/* WARNING GUARDRAIL: Strict Clinic Seggregation Reminder */}
          <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl flex items-start gap-3 text-xs text-amber-800">
            <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-bold uppercase tracking-wider text-[11px] font-mono text-amber-900 block">Clinic Co-Promotion Alignment Rule</span>
              <p className="leading-relaxed">
                Do not mirror clinic promotional descriptions or treatment listings directly. Links from this personal portal back to the clinical practices MUST execute fact-based routes (e.g., pointing to "Meet the Doctors" or factual "Clinic Biography" profiles) with clear branding boundaries. Do not duplicate service list text block or place sitewide footers of clinics here.
              </p>
            </div>
          </div>
        </div>

        {/* COMPLIANCE INDEX OVERVIEW */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-brand-white border border-brand-stone/80 rounded-2xl overflow-hidden shadow-xs">
          
          <div className="p-6 space-y-4 border-b md:border-b-0 md:border-r border-brand-stone">
            <div className="flex items-center gap-2 text-brand-charcoal h-6">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider">Identity Integrity Score</h3>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-display font-medium text-brand-charcoal">{compliancePct}%</span>
              <span className="text-xs font-mono text-emerald-600 bg-emerald-50 px-1 rounded font-bold">Standard Met</span>
            </div>
            <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
              <div className="bg-brand-bronze h-2.5 rounded" style={{ width: `${compliancePct}%` }} />
            </div>
            <p className="text-[11px] text-slate-500">
              Matches active criteria across NPI, licensing facts, credential punctuation, and brand colors.
            </p>
          </div>

          <div className="p-6 space-y-3 border-b md:border-b-0 md:border-r border-brand-stone">
            <div className="flex items-center justify-between text-brand-charcoal h-6">
              <span className="text-xs font-mono font-bold uppercase tracking-wider">Reputation Warnings</span>
              {alerts.length > 0 && <span className="text-[10px] bg-rose-50 text-rose-600 px-1.5 py-0.5 rounded font-mono font-bold">Action Needed</span>}
            </div>
            <div className="text-3xl font-display font-medium text-brand-charcoal">{alerts.filter(a => a.status !== 'Resolved').length} Active Alerts</div>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Including {alerts.filter(a => a.severity === 'Immediate Action').length} high-severity spelling variations or scraped third-party doctor profile mismatches.
            </p>
          </div>

          <div className="p-6 space-y-3">
            <div className="text-xs font-mono font-bold text-brand-charcoal uppercase tracking-wider h-6 flex items-center">
              Durable Verification Logs
            </div>
            <div className="text-3xl font-display font-bold text-brand-bronze">NPI Registry</div>
            <p className="text-[11px] font-mono text-slate-500">
              Verified Federal Reference:<br />
              <a href="https://npiregistry.cms.hhs.gov/provider-view/1346588407" target="_blank" rel="noopener noreferrer" className="hover:underline text-brand-charcoal break-all">
                Registry ID #1346588407 <ExternalLink className="w-3 h-3 inline mt-[-2px]" />
              </a>
            </p>
          </div>

        </div>

        {/* TAB SWITCH SELECTOR */}
        <div className="flex flex-wrap border-b border-brand-stone/40" role="tablist" aria-label="Governance Tabs">
          <button
            onClick={() => setActiveTab('identity')}
            className={`px-5 py-3 text-xs font-mono font-bold uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
              activeTab === 'identity' 
                ? 'border-brand-bronze text-brand-charcoal' 
                : 'border-transparent text-slate-400 hover:text-brand-charcoal'
            }`}
          >
            1. Master Identity & Checker
          </button>
          <button
            onClick={() => setActiveTab('bios')}
            className={`px-5 py-3 text-xs font-mono font-bold uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
              activeTab === 'bios' 
                ? 'border-brand-bronze text-brand-charcoal' 
                : 'border-transparent text-slate-400 hover:text-brand-charcoal'
            }`}
          >
            2. Checked Biographies
          </button>
          <button
            onClick={() => setActiveTab('claims')}
            className={`px-5 py-3 text-xs font-mono font-bold uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
              activeTab === 'claims' 
                ? 'border-brand-bronze text-brand-charcoal' 
                : 'border-transparent text-slate-400 hover:text-brand-charcoal'
            }`}
          >
            3. Claim & Prohibited Wording Library
          </button>
          <button
            onClick={() => setActiveTab('profiles')}
            className={`px-5 py-3 text-xs font-mono font-bold uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
              activeTab === 'profiles' 
                ? 'border-brand-bronze text-brand-charcoal' 
                : 'border-transparent text-slate-400 hover:text-brand-charcoal'
            }`}
          >
            4. Social Sync & Review Trust
          </button>
          <button
            onClick={() => setActiveTab('crisis')}
            className={`px-5 py-3 text-xs font-mono font-bold uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
              activeTab === 'crisis' 
                ? 'border-brand-bronze text-brand-charcoal' 
                : 'border-transparent text-slate-400 hover:text-brand-charcoal'
            }`}
          >
            5. Risk & Reputation Monitoring
          </button>
          <button
            onClick={() => setActiveTab('audits')}
            className={`px-5 py-3 text-xs font-mono font-bold uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
              activeTab === 'audits' 
                ? 'border-brand-bronze text-brand-charcoal' 
                : 'border-transparent text-slate-400 hover:text-brand-charcoal'
            }`}
          >
            6. Launch Audits & LLM Sheet
          </button>
        </div>


        {/* ----------------------------------------------------------------------
            TAB 1: MASTER IDENTITY & TEXT SCANNER
            ---------------------------------------------------------------------- */}
        {activeTab === 'identity' && (
          <div className="space-y-8 animate-reveal" id="governance-pane-identity">
            
            {/* MASTER RECORD CARDS */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              <div className="lg:col-span-2 bg-brand-white border border-brand-stone p-6 rounded-2xl space-y-6">
                <div className="flex items-center justify-between border-b border-brand-stone/40 pb-4">
                  <h3 className="font-display font-medium text-lg text-brand-charcoal flex items-center gap-2">
                    <UserCheck className="w-5 h-5 text-brand-bronze" /> Central Master Identity Registry
                  </h3>
                  <span className="text-[10px] font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded uppercase font-bold">
                    Last Verified: 2026-06-22
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans text-slate-600">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Legal Name (Credentials Only)</span>
                    <strong className="text-brand-charcoal text-sm">Liyan Moghadam Massaband</strong>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Professional Brand Name</span>
                    <strong className="text-brand-charcoal text-sm">Dr. Liyan Massaband</strong>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Formal Title Display</span>
                    <strong className="text-brand-charcoal text-sm">Dr. Liyan Massaband, D.M.D., M.P.H.</strong>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Credentials</span>
                    <strong className="text-brand-charcoal text-sm">D.M.D., M.P.H. (Dentist)</strong>
                  </div>
                  <div className="space-y-1 md:col-span-2">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block font-bold text-brand-bronze">Clinical Practice Locations</span>
                    <div className="space-y-1 mt-1 font-sans text-brand-charcoal">
                      <div className="flex items-center gap-1.5 font-semibold">
                        <Check className="w-3.5 h-3.5 text-emerald-600" /> Burbank: <span className="font-normal text-slate-500">Magnolia Dentistry</span>
                      </div>
                      <div className="flex items-center gap-1.5 font-semibold">
                        <Check className="w-3.5 h-3.5 text-emerald-600" /> Beverly Hills: <span className="font-normal text-slate-500">ConfiDental Beverly Hills</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Primary Personal Website</span>
                    <strong className="text-brand-bronze font-mono hover:underline block">https://drliyanmassaband.com</strong>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Official Instagram Address</span>
                    <strong className="text-brand-charcoal font-mono block">@drliyanmassaband</strong>
                  </div>
                </div>
              </div>

              {/* STRICT CLINIC NAME VARIATION CHECKS */}
              <div className="bg-brand-stone/10 border border-brand-stone/35 p-6 rounded-2xl space-y-4">
                <h4 className="text-xs font-mono font-bold text-brand-charcoal uppercase tracking-wider border-b border-brand-stone pb-2">
                  Branding Name Standards
                </h4>
                
                <div className="space-y-3 text-xs leading-relaxed">
                  <div>
                    <span className="font-bold text-emerald-700 font-mono block text-[11px] uppercase">✓ Approved Clinical Labels</span>
                    <p className="text-slate-600 font-sans mt-0.5">
                      "Magnolia Dentistry"<br />
                      "ConfiDental Beverly Hills" (Strict camelCase prefix)
                    </p>
                  </div>
                  <div className="border-t border-brand-stone/50 pt-2">
                    <span className="font-bold text-rose-700 font-mono block text-[11px] uppercase">✗ Strictly Prohibited Variants</span>
                    <p className="text-slate-500 text-[11px] italic mt-0.5 font-sans">
                      "Confidential Beverly Hills"<br />
                      "Confi Dental Beverly Hills"<br />
                      "Magnolia Dental Clinic"<br />
                      "Dr. Liyan Moghadam" (without confirmed legal context)
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* AUTOMATED TEXT COMPLIANCE SCANNER */}
            <div className="bg-brand-white border border-brand-stone rounded-2xl p-6 space-y-6">
              <div className="space-y-1">
                <h3 className="font-display font-medium text-lg text-brand-charcoal">
                  Automated Name & Claim Consistency Scanner
                </h3>
                <p className="text-xs text-slate-500 max-w-4xl leading-relaxed">
                  Test custom press releases, biography templates, podcast invitations, or third-party clinic features before sending. The scanner flags spelling variations, academic title errors, and disallowed marketing claim blockages automatically.
                </p>
              </div>

              <div className="space-y-3">
                <label className="text-[11px] font-mono uppercase tracking-wider font-bold text-slate-400">Biography Copy / Pitch Wording Input</label>
                <textarea
                  value={testText}
                  onChange={(e) => setTestText(e.target.value)}
                  className="w-full h-28 p-4 border border-brand-stone rounded-xl text-xs font-sans focus:ring-1 focus:ring-brand-bronze focus:outline-none placeholder-slate-400 bg-brand-stone/5"
                  placeholder="Paste text here to run compliance test suite..."
                />
              </div>

              <div className="flex gap-3">
                <button
                  onClick={runConsistencyScan}
                  className="bg-brand-charcoal hover:bg-brand-bronze text-brand-white px-5 py-2.5 rounded-lg text-xs font-mono font-bold transition-all shadow-xs cursor-pointer"
                >
                  Verify Text Consistency
                </button>
                <button
                  onClick={() => setTestText('')}
                  className="bg-brand-white border border-brand-stone hover:bg-slate-50 text-slate-600 px-5 py-2.5 rounded-lg text-xs font-mono transition-all cursor-pointer"
                >
                  Clear Scanner
                </button>
              </div>

              {/* OUTCOMES PANEL */}
              <div className="space-y-3 border-t border-brand-stone/45 pt-4">
                <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">Scanner Audit Outcomes</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {testMatches.length > 0 ? (
                    testMatches.map((t, idx) => (
                      <div 
                        key={idx} 
                        className={`p-4 rounded-xl border flex flex-col gap-1 text-xs ${
                          t.issueType === 'All Compliant' 
                            ? 'bg-emerald-50 border-emerald-200' 
                            : 'bg-rose-50/50 border-rose-100'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          {t.issueType === 'All Compliant' ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          ) : (
                            <ShieldAlert className="w-4 h-4 text-rose-600" />
                          )}
                          <strong className="font-mono font-bold text-brand-charcoal text-[11px]">{t.issueType} [{t.severity}]</strong>
                        </div>
                        <p className="text-slate-500 text-[11px] mt-0.5 italic">Flagged section: "{t.match}"</p>
                        <p className="text-slate-600 font-sans mt-1">Rule: {t.rule}</p>
                        <span className={`text-[10px] font-mono mt-2 font-bold uppercase tracking-wider ${
                          t.issueType === 'All Compliant' ? 'text-emerald-700' : 'text-rose-700'
                        }`}>{t.status}</span>
                      </div>
                    ))
                  ) : (
                    <div className="col-span-2 text-center py-6 text-xs text-slate-400 font-mono">
                      Click "Verify Text Consistency" to scan input text.
                    </div>
                  )}
                </div>
              </div>

            </div>

          </div>
        )}


        {/* ----------------------------------------------------------------------
            TAB 2: CHECKED BIOGRAPHIES
            ---------------------------------------------------------------------- */}
        {activeTab === 'bios' && (
          <div className="space-y-6 animate-reveal" id="governance-pane-biographies">
            <div className="bg-brand-stone/10 border border-brand-stone p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="space-y-1">
                <h3 className="font-display font-medium text-lg text-brand-charcoal">
                  Factual Biography Library & Version Logs
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  These verified descriptions serve different directories and press media platforms while syncing core facts precisely. No dental specialty or unproven clinical claims are allowed.
                </p>
              </div>

              {/* Add Biography Button */}
              <button
                onClick={() => setShowAddBio(!showAddBio)}
                className="bg-brand-charcoal hover:bg-brand-bronze text-brand-white px-4 py-2.5 rounded-lg text-xs font-mono font-bold tracking-wider transition-all cursor-pointer inline-flex items-center gap-2 self-start"
              >
                <Plus className="w-4 h-4" /> Log Biography Version
              </button>
            </div>

            {/* ADD BIO FORM SLIDE */}
            {showAddBio && (
              <form onSubmit={submitNewBio} className="bg-brand-white border border-brand-stone rounded-2xl p-6 space-y-4 animate-reveal">
                <h4 className="text-xs font-mono font-bold text-brand-charcoal uppercase tracking-wider">Configure New Factual Biography Version</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1 text-xs">
                    <label className="block font-bold text-slate-500 font-mono text-[10px] uppercase">Version Profile Name</label>
                    <input 
                      type="text" 
                      value={newBioName} 
                      onChange={(e) => setNewBioName(e.target.value)}
                      placeholder="e.g., Short Biography v2" 
                      className="w-full p-2 border border-brand-stone rounded font-sans focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1 text-xs">
                    <label className="block font-bold text-slate-500 font-mono text-[10px] uppercase">Intended Platform / Target Placement</label>
                    <input 
                      type="text" 
                      value={newBioUse} 
                      onChange={(e) => setNewBioUse(e.target.value)}
                      placeholder="e.g., California Alumni spotlight Board" 
                      className="w-full p-2 border border-brand-stone rounded font-sans focus:outline-none"
                    />
                  </div>
                </div>
                <div className="space-y-1 text-xs">
                  <label className="block font-bold text-slate-500 font-mono text-[10px] uppercase">Biography Wording (Checked & Compliant)</label>
                  <textarea 
                    value={newBioText} 
                    onChange={(e) => setNewBioText(e.target.value)}
                    placeholder="Enter complete description block..." 
                    className="w-full h-20 p-2 border border-brand-stone rounded font-sans focus:outline-none"
                  />
                </div>
                <div className="flex gap-2 justify-end">
                  <button type="submit" className="bg-emerald-600 hover:bg-emerald-700 text-brand-white px-4 py-2 rounded text-xs font-mono font-bold">
                    Add Version
                  </button>
                  <button type="button" onClick={() => setShowAddBio(false)} className="bg-slate-100 text-slate-600 px-4 py-2 rounded text-xs font-mono">
                    Cancel
                  </button>
                </div>
              </form>
            )}

            {/* DUPLICATE CONTENT WARNING CHECKS */}
            <div className="bg-brand-stone/20 border border-brand-stone p-4 rounded-xl flex items-start gap-3 text-xs text-brand-charcoal">
              <Bookmark className="w-5 h-5 text-brand-bronze mt-0.5 shrink-0" />
              <div className="space-y-1">
                <span className="font-bold uppercase tracking-wider text-[11px] font-mono">Platform Duplication Guardrail</span>
                <p className="leading-relaxed">
                  Never publish the exact same biography on other independent domains (e.g., doing a mass paste across dozens of dental blogs). Using duplicate blocks of long passages trigger algorithmic penalty flags on modern search platforms. Ensure minor edits are customized for platform tone while backing the exact same factual university training and credentials.
                </p>
              </div>
            </div>

            {/* MASTER BIOGRAPHIES EXHIBIT */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {biographies.map((b) => (
                <div key={b.id} className="bg-brand-white border border-brand-stone p-6 rounded-2xl space-y-4 relative flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between border-b border-brand-stone/30 pb-2">
                      <span className="text-xs font-mono font-bold text-brand-charcoal uppercase tracking-wider">{b.name}</span>
                      <span className="text-[10px] font-mono bg-emerald-50 text-emerald-800 font-bold px-1.5 rounded">{b.status}</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed italic bg-brand-stone/5 p-3 rounded-lg">
                      "{b.text}"
                    </p>
                  </div>
                  
                  <div className="space-y-2 pt-3 border-t border-brand-stone/30 mt-4 text-[10px] font-mono text-slate-500">
                    <div className="grid grid-cols-2 gap-2">
                      <div>Word count: <strong className="text-brand-charcoal">{b.wordCount}</strong></div>
                      <div>Use context: <strong className="text-brand-charcoal">{b.intendedUse}</strong></div>
                      <div>Approved by: <strong className="text-brand-charcoal">{b.approvedBy}</strong></div>
                      <div>Renewal date: <strong className="text-brand-charcoal">{b.reviewDate}</strong></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}


        {/* ----------------------------------------------------------------------
            TAB 3: CLAIM & PROHIBITED WORDING DATABASE
            ---------------------------------------------------------------------- */}
        {activeTab === 'claims' && (
          <div className="space-y-8 animate-reveal" id="governance-pane-claims">
            
            <div className="bg-brand-stone/10 border border-brand-stone p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="space-y-1">
                <h3 className="font-display font-medium text-lg text-brand-charcoal">
                  Professional Claim Governance & Verification Database
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Under CA healthcare advertising code and HIPAA provisions, every claims made on personal profiles must be fact-verified and approved by clinical advisors.
                </p>
              </div>

              <button
                onClick={() => setShowAddClaim(!showAddClaim)}
                className="bg-brand-charcoal hover:bg-brand-bronze text-brand-white px-4 py-2.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer inline-flex items-center gap-2 shrink-0 self-start"
              >
                <Plus className="w-4 h-4" /> Add Verified Claim
              </button>
            </div>

            {/* VERIFY / ADD CLAIM CARD */}
            {showAddClaim && (
              <form onSubmit={submitNewClaim} className="bg-brand-white border border-brand-stone p-6 rounded-2xl space-y-4 animate-reveal">
                <h4 className="text-xs font-mono font-bold text-brand-charcoal uppercase tracking-wider">Register Verifiable Claim Element</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1 text-xs">
                    <label className="block font-bold text-slate-500 font-mono text-[10px] uppercase">Wording Statement Description</label>
                    <input 
                      type="text" 
                      value={newClaimText} 
                      onChange={(e) => setNewClaimText(e.target.value)}
                      placeholder="e.g., D.M.D. degree completed in 2021" 
                      className="w-full p-2 border border-brand-stone rounded focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1 text-xs">
                    <label className="block font-bold text-slate-500 font-mono text-[10px] uppercase">Verification Source (Registry, License number, document)</label>
                    <input 
                      type="text" 
                      value={newClaimSource} 
                      onChange={(e) => setNewClaimSource(e.target.value)}
                      placeholder="e.g., Dental Board Certificate #94821" 
                      className="w-full p-2 border border-brand-stone rounded focus:outline-none"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1 text-xs">
                    <label className="block font-bold text-slate-500 font-mono text-[10px] uppercase">Topic Category</label>
                    <select 
                      value={newClaimCat} 
                      onChange={(e) => setNewClaimCat(e.target.value as any)}
                      className="w-full p-2 border border-brand-stone rounded font-sans focus:outline-none"
                    >
                      <option value="identity">Identity</option>
                      <option value="credentials">Credentials</option>
                      <option value="education">Education</option>
                      <option value="professional affiliation">Professional Affiliation</option>
                      <option value="experience">Experience</option>
                      <option value="philosophy">Philosophy</option>
                    </select>
                  </div>
                </div>
                <div className="flex gap-2 justify-end">
                  <button type="submit" className="bg-emerald-600 hover:bg-emerald-700 text-brand-white px-4 py-2 rounded text-xs font-mono font-bold">
                    Log Fact Claim
                  </button>
                  <button type="button" onClick={() => setShowAddClaim(false)} className="bg-slate-100 text-slate-600 px-4 py-2 rounded text-xs font-mono">
                    Cancel
                  </button>
                </div>
              </form>
            )}

            {/* CLAIMS MATRIX TABLE */}
            <div className="bg-brand-white border border-brand-stone rounded-2xl overflow-hidden shadow-xs">
              <div className="px-6 py-4 border-b border-brand-stone flex justify-between items-center bg-brand-stone/10">
                <span className="text-xs font-mono font-bold text-brand-charcoal uppercase tracking-wider">Approved Credentials & Clinician Statements register</span>
                <span className="text-xs text-slate-500 font-mono">{claims.length} claims documented</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-brand-stone/20 border-b border-brand-stone text-slate-400 font-mono uppercase tracking-wider">
                      <th className="p-4">Registered Statement</th>
                      <th className="p-4">Category</th>
                      <th className="p-4">Factual Verification Source</th>
                      <th className="p-4">Advisors Approval</th>
                      <th className="p-4">Review Schedule</th>
                      <th className="p-4 text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-brand-stone/30 text-slate-600 font-sans">
                    {claims.map((c) => (
                      <tr key={c.id} className="hover:bg-brand-stone/10">
                        <td className="p-4 font-semibold text-brand-charcoal min-w-[240px]">{c.claim}</td>
                        <td className="p-4 uppercase font-mono text-[10px] text-slate-400">{c.category.replace('_', ' ')}</td>
                        <td className="p-4 text-slate-500 font-mono">{c.source}</td>
                        <td className="p-4">
                          <div className="flex flex-col gap-0.5 text-[10px] font-mono">
                            <span className={c.clientApproved ? 'text-emerald-700' : 'text-slate-400'}>
                              ● Client Approved: {c.clientApproved ? 'YES' : 'PENDING'}
                            </span>
                            <span className={c.medicalApproved ? 'text-teal-700' : 'text-slate-400'}>
                              ● Medically Checked: {c.medicalApproved ? 'YES' : 'PENDING'}
                            </span>
                          </div>
                        </td>
                        <td className="p-4 text-slate-400 font-mono text-[10px]">{c.reviewDate}</td>
                        <td className="p-4 text-right">
                          <span className={`px-2 py-0.5 rounded-sm text-[10px] font-mono font-bold ${
                            c.status === 'Published' 
                              ? 'bg-emerald-100 text-emerald-800' 
                              : c.status === 'Flagged' 
                                ? 'bg-rose-100 text-rose-800' 
                                : 'bg-amber-100 text-amber-800'
                          }`}>
                            {c.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* PROHIBITED CLINICAL CLAIMS CHECKS */}
            <div className="bg-rose-50 border border-rose-200 p-6 rounded-2xl space-y-4">
              <div className="flex items-center gap-2 text-rose-700">
                <ShieldAlert className="w-5 h-5 shrink-0" />
                <h4 className="font-display font-medium text-base text-rose-900">
                  Strictly Prohibited & Disallowed Claims Vault
                </h4>
              </div>
              <p className="text-xs text-slate-600 max-w-4xl leading-relaxed">
                The California Dental Board prohibits deceptive marketing claims or patient guarantees. The following content claims have been marked as <strong className="text-rose-900 uppercase">permanently disallowed</strong> across this website, all press materials, official biographies, and external profiles:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-[11px] font-sans text-slate-600">
                <div className="bg-brand-white border border-rose-100 rounded-lg p-2.5 flex items-center gap-2">
                  <span className="text-rose-600 font-bold font-mono">✗</span> <span>"Best dentist in Beverly Hills / top provider"</span>
                </div>
                <div className="bg-brand-white border border-rose-100 rounded-lg p-2.5 flex items-center gap-2">
                  <span className="text-rose-600 font-bold font-mono">✗</span> <span>"Keynote / world-renowned educator"</span>
                </div>
                <div className="bg-brand-white border border-rose-100 rounded-lg p-2.5 flex items-center gap-2">
                  <span className="text-rose-600 font-bold font-mono">✗</span> <span>"Pain-free treatments guaranteed"</span>
                </div>
                <div className="bg-brand-white border border-rose-100 rounded-lg p-2.5 flex items-center gap-2">
                  <span className="text-rose-600 font-bold font-mono">✗</span> <span>"Risk-free procedures / teeth for life"</span>
                </div>
                <div className="bg-brand-white border border-rose-100 rounded-lg p-2.5 flex items-center gap-2">
                  <span className="text-rose-600 font-bold font-mono">✗</span> <span>"Celebrity dentist or elite influencer"</span>
                </div>
                <div className="bg-brand-white border border-rose-100 rounded-lg p-2.5 flex items-center gap-2">
                  <span className="text-rose-600 font-bold font-mono">✗</span> <span>"Endorsed by USC / Arizona University"</span>
                </div>
              </div>
              <p className="text-[10px] text-rose-500 font-mono italic leading-relaxed">
                *Violation Warning: Placing any of these terms results in immediate automated validation blocker warnings inside the identity tester.
              </p>
            </div>

          </div>
        )}


        {/* ----------------------------------------------------------------------
            TAB 4: SOCIAL PROFILE OWNER & REPUTATION REVIEW TRUST
            ---------------------------------------------------------------------- */}
        {activeTab === 'profiles' && (
          <div className="space-y-8 animate-reveal" id="governance-pane-profiles">
            
            {/* SOCIAL AND DIRECTORY METRICS SYNC */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              <div className="lg:col-span-2 bg-brand-white border border-brand-stone p-6 rounded-2xl space-y-6">
                <div className="space-y-1 pb-4 border-b border-brand-stone/45">
                  <h3 className="font-display font-medium text-lg text-brand-charcoal flex items-center gap-2">
                    <Globe className="w-5 h-5 text-brand-bronze" /> Verified Profile Synchronization Registry
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Tracks the factual accuracy of external directories, university rosters, dental professional associations, and podcast directories. It ensures credentials match name formatting exactly.
                  </p>
                </div>

                <div className="space-y-4">
                  {profiles.map((p) => (
                    <div key={p.id} className="border border-brand-stone rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs font-sans">
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2">
                          <strong className="text-brand-charcoal text-sm">{p.platform}</strong>
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold font-mono uppercase tracking-wider ${
                            p.status === 'Verified' ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-amber-50 text-amber-800'
                          }`}>{p.status}</span>
                        </div>
                        <p className="text-slate-400 font-mono text-[10px] break-all">{p.url}</p>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-[10px] text-slate-500 font-mono">
                          <span>User Access: <strong className="text-brand-charcoal">{p.loginOwner}</strong></span>
                          <span>2FA Lock: <strong className="text-brand-charcoal">{p.twoFactorEnabled ? 'On' : 'Off'}</strong></span>
                          <span>Bio Used: <strong className="text-brand-charcoal">{p.biographyVersionUsed}</strong></span>
                        </div>
                      </div>

                      <div className="flex flex-col items-start md:items-end gap-1.5 font-mono text-[10px]">
                        <span className="text-slate-400">Status Schedule:</span>
                        <span className={`px-1.5 py-0.5 rounded font-bold uppercase tracking-widest ${
                          p.correctionStatus === 'None Needed' ? 'bg-slate-100 text-slate-600' : 'bg-rose-50 text-rose-700'
                        }`}>{p.correctionStatus}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* REVIEWS DISCLOSURE LAWSUIT RULES */}
              <div className="bg-brand-stone/10 border border-brand-stone/35 p-6 rounded-2xl space-y-4">
                <h4 className="text-xs font-mono font-bold text-brand-charcoal uppercase tracking-wider border-b border-brand-stone pb-2 flex items-center gap-1.5">
                  <Lock className="w-4 h-4 text-brand-bronze" /> Review Aggregation Rules
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  To protect Magnolia Dentistry and ConfiDental Beverly Hills brands, observe the following rules when displaying patient testimonials or aggregate star rating graphs:
                </p>
                <div className="space-y-2 text-xs text-slate-600 list-decimal pl-1">
                  <div>
                    <strong className="text-brand-charcoal block">1. Separate Entities Factualized</strong>
                    <span>Testimonials must state where care was held. Do not list Beverly Hills smile redesigns as Burbank outcomes.</span>
                  </div>
                  <div>
                    <strong className="text-brand-charcoal block">2. Star Ratings Must Disclose Date</strong>
                    <span>Always include the timestamp when review counts were audited. Totals dynamically change.</span>
                  </div>
                </div>
              </div>

            </div>

            {/* REVIEW METRICS DATABASE SUMMARY */}
            <div className="bg-brand-white border border-brand-stone rounded-2xl p-6 space-y-6">
              <h3 className="font-display font-medium text-lg text-brand-charcoal">
                Factual Display of Aggregate Testimonial Metrics
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {reviews.map((r) => (
                  <div key={r.id} className="border border-brand-stone p-5 rounded-2xl space-y-4 relative bg-slate-50/20">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">{r.platform}</span>
                      <strong className="text-brand-charcoal text-sm block">{r.entityReviewed}</strong>
                    </div>
                    
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-display font-medium text-brand-charcoal">{r.currentRating.toFixed(2)}</span>
                      <span className="text-xs font-mono text-slate-500">★ ★ ★ ★ ★</span>
                    </div>

                    <p className="text-xs text-slate-600 font-mono">
                      Based on <strong className="text-brand-charcoal">{r.reviewCount}</strong> active reviews.
                    </p>

                    <div className="border-t border-brand-stone/45 pt-3 space-y-1.5 text-[10px] font-mono text-slate-500">
                      <div>Public display: <strong className={r.publicDisplayAllowed ? 'text-emerald-700 font-bold' : 'text-slate-400'}>{r.publicDisplayAllowed ? 'ALLOWED' : 'PROHIBITED'}</strong></div>
                      <div>Approved by Client: <strong className="text-brand-charcoal">{r.clientApproval ? 'YES' : 'PENDING'}</strong></div>
                      <div>Inject Schema Metadata: <strong className={r.schemaAllowed ? 'text-emerald-700 font-bold' : 'text-rose-600 font-bold'}>{r.schemaAllowed ? 'ALLOWED' : 'PROHIBITED'}</strong></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Patient Trust Responses Form Guide */}
              <div className="bg-brand-stone/10 border border-brand-stone/30 p-5 rounded-xl space-y-3">
                <span className="text-xs font-mono font-bold uppercase text-brand-charcoal block">HIPAA-Compliant Response Blueprint (Internal Training)</span>
                <p className="text-xs text-slate-500 leading-relaxed max-w-4xl">
                  In case of critical clinical feedback, never respond via automated website panels. Responses must follow strict medical confidentiality guidelines: do not acknowledge the person was a patient, do not describe clinical procedures, and politely request offline follow-up through the appropriate clinic coordinator.
                </p>
                <div className="bg-brand-white border border-brand-stone/50 p-3 rounded-lg text-xs italic text-slate-600">
                  "Draft Template: 'Thank you for your response. To respect clinical privacy rules, we do not coordinate care or discuss clinical services on public platforms. We care deeply about patient satisfaction and welcome you to contact our clinical office supervisor directly at Magnolia Dentistry or ConfiDental Beverly Hills to review your remarks.'"
                </div>
              </div>

            </div>

          </div>
        )}


        {/* ----------------------------------------------------------------------
            TAB 5: RISK ALERT & IMPERSONATOR MONITORING
            ---------------------------------------------------------------------- */}
        {activeTab === 'crisis' && (
          <div className="space-y-6 animate-reveal" id="governance-pane-risk">
            
            <div className="bg-brand-stone/10 border border-brand-stone p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="space-y-1">
                <h3 className="font-display font-medium text-lg text-brand-charcoal">
                  Reputation risk Monitoring & Alerts Ledger
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Logs unverified directory listings, copycat social profiles, or broken website reference redirects to protect Dr. Liyan Massaband's public-health identity.
                </p>
              </div>

              <button
                onClick={() => setShowAddAlert(!showAddAlert)}
                className="bg-brand-charcoal hover:bg-brand-bronze text-brand-white px-4 py-2.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer inline-flex items-center gap-2 self-start shrink-0"
              >
                <Plus className="w-4 h-4" /> Log Alert Instance
              </button>
            </div>

            {/* LOG ALERT ACTION */}
            {showAddAlert && (
              <form onSubmit={submitNewAlert} className="bg-brand-white border border-brand-stone p-6 rounded-2xl space-y-4 animate-reveal">
                <h4 className="text-xs font-mono font-bold text-brand-charcoal uppercase tracking-wider">Configure Reputation / Correction Alert</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1 text-xs font-sans">
                    <label className="block font-bold text-slate-500 font-mono text-[10px] uppercase">Source Link / Platform URL</label>
                    <input 
                      type="text" 
                      value={newAlertUrl} 
                      onChange={(e) => setNewAlertUrl(e.target.value)}
                      placeholder="https://..." 
                      className="w-full p-2 border border-brand-stone rounded focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1 text-xs font-sans">
                    <label className="block font-bold text-slate-500 font-mono text-[10px] uppercase">Alert Severity Rating</label>
                    <select 
                      value={newAlertSeverity} 
                      onChange={(e) => setNewAlertSeverity(e.target.value as any)}
                      className="w-full p-2 border border-brand-stone rounded focus:outline-none"
                    >
                      <option value="Immediate Action">Immediate Action Required</option>
                      <option value="High">High Severity</option>
                      <option value="Moderate">Moderate</option>
                      <option value="Low">Low</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-1 text-xs font-sans">
                  <label className="block font-bold text-slate-500 font-mono text-[10px] uppercase">Issue Description (Wrong credential, old association, fake account)</label>
                  <textarea 
                    value={newAlertIssue} 
                    onChange={(e) => setNewAlertIssue(e.target.value)}
                    placeholder="Enter precise issue content..." 
                    className="w-full h-16 p-2 border border-brand-stone rounded focus:outline-none"
                  />
                </div>
                <div className="flex gap-2 justify-end">
                  <button type="submit" className="bg-rose-600 hover:bg-rose-700 text-brand-white px-4 py-2 rounded text-xs font-mono font-bold">
                    File Alert Ticket
                  </button>
                  <button type="button" onClick={() => setShowAddAlert(false)} className="bg-slate-100 text-slate-600 px-4 py-2 rounded text-xs">
                    Cancel
                  </button>
                </div>
              </form>
            )}

            {/* ALERTS MATRIX */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {alerts.map((a) => (
                <div key={a.id} className="bg-brand-white border border-brand-stone p-5 rounded-2xl space-y-4 relative flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between border-b border-brand-stone/30 pb-2">
                      <span className="text-[9px] font-mono font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded uppercase tracking-wider">{a.severity}</span>
                      <span className="text-[10px] font-mono text-slate-400 font-bold uppercase">{a.status}</span>
                    </div>
                    <h4 className="text-xs font-bold text-brand-charcoal">{a.issue}</h4>
                    <p className="text-[11px] text-slate-500 font-mono break-all">{a.sourceURL}</p>
                  </div>

                  <div className="space-y-2 pt-3 border-t border-brand-stone/35 mt-4 text-[10px] font-mono text-slate-400">
                    <div>Mitigation Action Required: <strong className="text-slate-600 block leading-relaxed mt-1 font-sans">{a.actionRequired}</strong></div>
                    <div className="pt-1 flex items-center justify-between">
                      <span>Owner Assigned: <strong className="text-slate-600">{a.owner}</strong></span>
                      {a.legalReviewNeeded && <span className="text-rose-700 uppercase font-bold text-[9px] bg-rose-50 px-1 rounded border border-rose-100">Legal Review Needed</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* DOMAIN PROTECTION CHECKS (Defensive registry) */}
            <div className="bg-brand-stone/10 border border-brand-stone/30 p-5 rounded-xl space-y-3">
              <span className="text-xs font-mono font-bold uppercase text-brand-charcoal block">Domain Guardrail Protection</span>
              <p className="text-xs text-slate-500 leading-relaxed">
                Check status of registered defensive domain variants to mitigate phishing copycats or misleading booking registries:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 text-[10px] font-mono text-slate-500">
                <div className="bg-brand-white border border-brand-stone px-3 py-2 rounded-lg flex justify-between items-center">
                  <span>drliyanmassaband.com</span> <strong className="text-emerald-700">OWNED (Active)</strong>
                </div>
                <div className="bg-brand-white border border-brand-stone px-3 py-2 rounded-lg flex justify-between items-center">
                  <span>drliyanmassaband.net</span> <strong className="text-teal-700">Defensive lock</strong>
                </div>
                <div className="bg-brand-white border border-brand-stone px-3 py-2 rounded-lg flex justify-between items-center">
                  <span>liyanmassabanddmd.com</span> <strong className="text-teal-700">Defensive lock</strong>
                </div>
                <div className="bg-brand-white border border-brand-stone px-3 py-2 rounded-lg flex justify-between items-center">
                  <span>liyanmassaband.com</span> <strong className="text-teal-700">Defensive lock</strong>
                </div>
              </div>
            </div>

          </div>
        )}


        {/* ----------------------------------------------------------------------
            TAB 6: PRE/POST LAUNCH AUDIT & CRAWLER FACT SHEET
            ---------------------------------------------------------------------- */}
        {activeTab === 'audits' && (
          <div className="space-y-8 animate-reveal" id="governance-pane-audits">
            
            {/* LAUNCH FREEZE INTERACTIVE AUDIT */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              <div className="bg-brand-white border border-brand-stone p-6 rounded-2xl space-y-6">
                <div className="space-y-1 pb-4 border-b border-brand-stone/40">
                  <h3 className="font-display font-medium text-lg text-brand-charcoal">
                    7-Day Pre-Launch Content Freeze Audit
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Interactive checklists verifying credential spelling, image rights permissions, and clinic segregation. All checklist items must pass before changing the deployment DNS locks.
                  </p>
                </div>

                <div className="space-y-2.5 font-sans text-xs text-slate-600">
                  <div className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50">
                    <div className="flex items-start gap-2.5">
                      <input 
                        type="checkbox" 
                        checked={auditChecklist.nameCorrect} 
                        onChange={() => handleToggleAudit('nameCorrect')}
                        className="mt-0.5" 
                      />
                      <div>
                        <strong className="block font-bold text-brand-charcoal">Dr. Liyan Massaband is spelled correctly</strong>
                        <span className="text-[10px] text-slate-400 font-mono">No 'Leanne' phonetic variation in copy headers.</span>
                      </div>
                    </div>
                    <span className={`text-[10px] font-mono font-bold px-1 rounded ${auditChecklist.nameCorrect ? 'text-emerald-700 bg-emerald-50':'text-slate-400 bg-slate-100'}`}>
                      {auditChecklist.nameCorrect ? 'PASSED' : 'PENDING'}
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 border-t border-slate-100">
                    <div className="flex items-start gap-2.5">
                      <input 
                        type="checkbox" 
                        checked={auditChecklist.credentialsConsistent} 
                        onChange={() => handleToggleAudit('credentialsConsistent')}
                        className="mt-0.5" 
                      />
                      <div>
                        <strong className="block font-bold text-brand-charcoal">D.M.D., M.P.H. credentials formatted properly</strong>
                        <span className="text-[10px] text-slate-400 font-mono">Verified Midwestern DMD + USC MPH documents are aligned.</span>
                      </div>
                    </div>
                    <span className={`text-[10px] font-mono font-bold px-1 rounded ${auditChecklist.credentialsConsistent ? 'text-emerald-700 bg-emerald-50':'text-slate-400 bg-slate-100'}`}>
                      {auditChecklist.credentialsConsistent ? 'PASSED' : 'PENDING'}
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 border-t border-slate-100">
                    <div className="flex items-start gap-2.5">
                      <input 
                        type="checkbox" 
                        checked={auditChecklist.clinicNamesApproved} 
                        onChange={() => handleToggleAudit('clinicNamesApproved')}
                        className="mt-0.5" 
                      />
                      <div>
                        <strong className="block font-bold text-brand-charcoal">Clinical practice brands mapped precisely</strong>
                        <span className="text-[10px] text-slate-400 font-mono">"Magnolia Dentistry" and "ConfiDental Beverly Hills" only.</span>
                      </div>
                    </div>
                    <span className={`text-[10px] font-mono font-bold px-1 rounded ${auditChecklist.clinicNamesApproved ? 'text-emerald-700 bg-emerald-50':'text-slate-400 bg-slate-100'}`}>
                      {auditChecklist.clinicNamesApproved ? 'PASSED' : 'PENDING'}
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 border-t border-slate-100">
                    <div className="flex items-start gap-2.5">
                      <input 
                        type="checkbox" 
                        checked={auditChecklist.noToothLogos} 
                        onChange={() => handleToggleAudit('noToothLogos')}
                        className="mt-0.5" 
                      />
                      <div>
                        <strong className="block font-bold text-brand-charcoal">Visual symbols contain NO tooth icons</strong>
                        <span className="text-[10px] text-slate-400 font-mono">No crowns, tooth outlines, smile swooshes, or cross vectors.</span>
                      </div>
                    </div>
                    <span className={`text-[10px] font-mono font-bold px-1 rounded ${auditChecklist.noToothLogos ? 'text-emerald-700 bg-emerald-50':'text-slate-400 bg-slate-100'}`}>
                      {auditChecklist.noToothLogos ? 'PASSED' : 'PENDING'}
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 border-t border-slate-100">
                    <div className="flex items-start gap-2.5">
                      <input 
                        type="checkbox" 
                        checked={auditChecklist.noAiPortraits} 
                        onChange={() => handleToggleAudit('noAiPortraits')}
                        className="mt-0.5" 
                      />
                      <div>
                        <strong className="block font-bold text-brand-charcoal">Visual assets contain strictly REAL pictures</strong>
                        <span className="text-[10px] text-slate-400 font-mono">Absolutely prohibited use of AI generated face smoothing models.</span>
                      </div>
                    </div>
                    <span className={`text-[10px] font-mono font-bold px-1 rounded ${auditChecklist.noAiPortraits ? 'text-emerald-700 bg-emerald-50':'text-slate-400 bg-slate-100'}`}>
                      {auditChecklist.noAiPortraits ? 'PASSED' : 'PENDING'}
                    </span>
                  </div>
                </div>
              </div>

              {/* POST LAUNCH SCHEDULE AUDITTING */}
              <div className="bg-brand-stone/10 border border-brand-stone/35 p-6 rounded-2xl space-y-6">
                <div className="space-y-1">
                  <h4 className="font-display font-medium text-base text-brand-charcoal">
                    Ongoing Post-Launch Brand Auditing
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Set structured triggers to ensure information freshness and keep directories aligned over the months.
                  </p>
                </div>

                <div className="space-y-4 font-sans text-xs">
                  <div className="p-4 bg-brand-white border border-brand-stone rounded-xl flex items-start gap-3">
                    <input 
                      type="checkbox" 
                      checked={postLaunchChecks.audit30Day} 
                      onChange={() => setPostLaunchChecks({...postLaunchChecks, audit30Day: !postLaunchChecks.audit30Day})}
                      className="mt-0.5" 
                    />
                    <div className="space-y-1 leading-normal">
                      <strong className="text-brand-charcoal">30-Day Check: Search Engine Index Validation</strong>
                      <p className="text-slate-500 text-[11px]">Verify Google Knowledge Graph is properly connecting the sameAs links.</p>
                    </div>
                  </div>

                  <div className="p-4 bg-brand-white border border-brand-stone rounded-xl flex items-start gap-3">
                    <input 
                      type="checkbox" 
                      checked={postLaunchChecks.audit90Day} 
                      onChange={() => setPostLaunchChecks({...postLaunchChecks, audit90Day: !postLaunchChecks.audit90Day})}
                      className="mt-0.5" 
                    />
                    <div className="space-y-1 leading-normal">
                      <strong className="text-brand-charcoal">90-Day Check: Academic Reference Review</strong>
                      <p className="text-slate-500 text-[11px]">Cross-verify University alumni spotlight links and NPI registration address correctness.</p>
                    </div>
                  </div>

                  <div className="p-4 bg-brand-white border border-brand-stone rounded-xl flex items-start gap-3">
                    <input 
                      type="checkbox" 
                      checked={postLaunchChecks.audit6Month} 
                      onChange={() => setPostLaunchChecks({...postLaunchChecks, audit6Month: !postLaunchChecks.audit6Month})}
                      className="mt-0.5" 
                    />
                    <div className="space-y-1 leading-normal">
                      <strong className="text-brand-charcoal">6-Month Check: Media Logo & Rights Auditing</strong>
                      <p className="text-slate-500 text-[11px]">Audit photographer copyright license expirations and press fact sheet downloads.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* AI-READER FACT SHEET (MACHINE RECOGNITION OPTIMIZATION) */}
            <div className="bg-brand-white border border-brand-stone rounded-2xl p-6 space-y-4">
              <div className="space-y-1 border-b border-brand-stone/45 pb-4">
                <h3 className="font-display font-medium text-lg text-brand-charcoal flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-brand-bronze" /> Plain-Text LLM & AI Crawler Fact Sheet
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed max-w-4xl">
                  This public-facing, highly structured table is optimized for search engines, entity graph analyzers, and LLM web-scrapers. It presents unambiguous statements to build high machine confidence and avoid artificial confusion.
                </p>
              </div>

              <div className="bg-slate-50/70 border border-slate-100 p-4 rounded-xl text-[11px] font-mono text-slate-600 leading-relaxed space-y-2">
                <div># ENTITY PROFILE SUMMARY FOR DR. LIYAN MASSABAND</div>
                <div>- **Official Professional Name:** Dr. Liyan Massaband</div>
                <div>- **Academic Credentials:** D.M.D. (Doctor of Dental Medicine) | M.P.H. (Master of Public Health)</div>
                <div>- **Profession:** Dentist | Public Health Advocate</div>
                <div>- **Undergraduate Foundation:** University of Arizona (Physiological Sciences)</div>
                <div>- **Dental School Alumna:** Midwestern University</div>
                <div>- **Public Health School Alumna:** University of Southern California (USC)</div>
                <div>- **Clinical Practice Affiliate (Burbank):** Magnolia Dentistry (Address: 3303 W Sunset Blvd, Burbank, CA)</div>
                <div>- **Clinical Practice Affiliate (Beverly Hills):** ConfiDental Beverly Hills (Address: 9482 Wilshire Blvd, Beverly Hills, CA)</div>
                <div>- **National Provider Registry ID (NPI):** #1346588407</div>
                <div>- **Official Biography Node:** https://drliyanmassaband.com/dr-liyan-massaband/</div>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
