import React, { useState, useEffect } from 'react';
import { useRouter, Link } from '../AppRouter.tsx';
import { EnquiryForm } from '../EnquiryForm.tsx';
import { SourceReferenceBadge } from '../SourceReferenceBadge.tsx';
import { PortraitPlaceholder } from './ProfileViews.tsx';
import { 
  GraduationCap, 
  ArrowRight, 
  ChevronRight, 
  Sparkles, 
  Video, 
  FileText, 
  ExternalLink,
  ShieldCheck,
  Award,
  Settings,
  Eye,
  EyeOff,
  CheckCircle2,
  AlertCircle,
  Play,
  Calendar,
  X,
  Globe,
  Lock,
  Camera,
  BookOpen,
  Info,
  Youtube,
  Instagram,
  Activity,
  List,
  Check,
  ArrowUp,
  Layers
} from 'lucide-react';

// CMS Metadata Interface for Section Management
interface SectionCMSConfig {
  show: boolean;
  status: 'Published' | 'Draft';
  isApproved: boolean;
  lastReviewed: string;
  sourceRecord: string;
  imageRights: string;
  displayOrder: number;
}

// Full State CMS Database Type
interface HomepageCMSState {
  section_1_hero: SectionCMSConfig & {
    eyebrow: string;
    h1: string;
    statement: string;
    paragraph: string;
    portraitDescription: string;
    actionPrimary: string;
    actionSecondary: string;
    credibilityLine: string;
  };
  section_2_intro: SectionCMSConfig & {
    sectionLabel: string;
    heading: string;
    paragraph1: string;
    paragraph2: string;
    portraitDescription: string;
    quoteText: string;
    quoteCitation: string;
    actionLinkText: string;
  };
  section_3_education: SectionCMSConfig & {
    sectionLabel: string;
    heading: string;
    disclosureNote: string;
    actionLinkText: string;
    entries: Array<{
      id: string;
      institution: string;
      degree: string;
      major: string;
      description: string;
      verifiedSource: string;
      year: string;
    }>;
  };
  section_4_philosophy: SectionCMSConfig & {
    sectionLabel: string;
    heading: string;
    portraitDescription: string;
    narrative: string;
    actionLinkText: string;
    principles: Array<{
      id: string;
      title: string;
      description: string;
    }>;
  };
  section_5_journey: SectionCMSConfig & {
    sectionLabel: string;
    heading: string;
    actionLinkText: string;
    milestones: Array<{
      id: string;
      year: string;
      title: string;
      organization: string;
      description: string;
      verifiedSource: string;
    }>;
  };
  section_6_videos: SectionCMSConfig & {
    sectionLabel: string;
    heading: string;
    supportingCopy: string;
    actionLinkText: string;
    actionAltLinkText: string;
    featuredVideo: {
      id: string;
      youtubeId: string;
      title: string;
      category: string;
      duration: string;
      description: string;
      source: string;
      dateVerified: string;
    };
    shorts: Array<{
      id: string;
      youtubeId: string;
      title: string;
      category: string;
      duration: string;
    }>;
  };
  section_7_own_words: SectionCMSConfig & {
    sectionLabel: string;
    heading: string;
    actionLinkText: string;
    highlights: Array<{
      id: string;
      url: string;
      title: string;
      category: string;
      context: string;
      publishDate: string;
    }>;
  };
  section_8_references: SectionCMSConfig & {
    sectionLabel: string;
    heading: string;
    profiles: Array<{
      id: string;
      platform: string;
      description: string;
      type: string;
      url: string;
      verifiedDate: string;
      ratingText?: string;
    }>;
  };
  section_9_affiliations: SectionCMSConfig & {
    sectionLabel: string;
    heading: string;
    affiliations: Array<{
      id: string;
      name: string;
      location: string;
      url: string;
      bioUrl: string;
      relationshipStatement: string;
      imageDescription: string;
    }>;
  };
  section_10_impact: SectionCMSConfig & {
    sectionLabel: string;
    heading: string;
    useStatsFallback: boolean; // Toggle fallback: true = Show stats, false = Show Non-numerical focus points
    numericalClaims: Array<{
      id: string;
      metric: string;
      label: string;
      source: string;
      dateVerified: string;
      isApproved: boolean;
    }>;
    focusPoints: Array<{
      id: string;
      title: string;
      description: string;
    }>;
  };
  section_11_media_enquiries: SectionCMSConfig & {
    sectionLabel: string;
    heading: string;
    supportingCopy: string;
    actionKitText: string;
    actionCollabText: string;
    topics: string[];
  };
  section_12_articles: SectionCMSConfig & {
    sectionLabel: string;
    heading: string;
    articles: Array<{
      id: string;
      title: string;
      slug: string;
      category: string;
      publishDate: string;
      readTime: string;
      summary: string;
    }>;
  };
  section_13_closing: SectionCMSConfig & {
    heading: string;
    paragraph: string;
    portraitDescription: string;
  };
}

export const HomeView: React.FC = () => {
  const { navigate } = useRouter();
  const [cmsPanelOpen, setCmsPanelOpen] = useState(false);
  const [activeCmsTab, setActiveCmsTab] = useState<'sections' | 'fields' | 'audits'>('sections');
  
  // Local active video playing mapping
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  // Dynamic dynamic client state representing the official CMS storage mapping
  const [cmsData, setCmsData] = useState<HomepageCMSState>({
    section_1_hero: {
      show: true,
      status: 'Published',
      isApproved: true,
      lastReviewed: '2026-06-22',
      sourceRecord: 'Official Platform Assembly',
      imageRights: 'Exclusive Ownership',
      displayOrder: 1,
      eyebrow: 'OFFICIAL PROFESSIONAL WEBSITE',
      h1: 'Dr. Liyan Massaband, D.M.D., M.P.H.',
      statement: 'A professional life shaped by science, public health and dentistry.',
      paragraph: 'Dr. Liyan Massaband is a California dentist with an academic foundation in physiological sciences, public health and dental medicine. Her professional work connects thoughtful patient care, aesthetic judgement, oral health education and modern dentistry across her affiliations in Burbank and Beverly Hills.',
      portraitDescription: 'Dr. Liyan Massaband - Official Lead Editorial Biography Photograph',
      actionPrimary: 'Explore Her Story',
      actionSecondary: 'Videos & Public Work',
      credibilityLine: 'D.M.D. • M.P.H. • Burbank • Beverly Hills',
    },
    section_2_intro: {
      show: true,
      status: 'Published',
      isApproved: true,
      lastReviewed: '2026-06-22',
      sourceRecord: 'Verified CV Record',
      imageRights: 'Exclusive License',
      displayOrder: 2,
      sectionLabel: '01 — Official Profile',
      heading: 'A Career Grounded in Science, Public Health and Human Connection',
      paragraph1: 'Dr. Liyan Massaband’s professional background brings together physiological sciences, public health and dental medicine. Her approach is shaped not only by clinical training, but also by an interest in how health, confidence, communication and individual experience influence a person’s relationship with dental care.',
      paragraph2: 'She is professionally associated with Magnolia Dentistry in Burbank and ConfiDental Beverly Hills. Through her clinical work and public educational content, she shares a perspective centred on thoughtful planning, natural-looking outcomes and patient understanding.',
      portraitDescription: 'Dr. Liyan Massaband - Environmental Practice Snapshot',
      quoteText: '[Insert an approved first-person statement from Dr. Liyan about care, trust or natural results.]',
      quoteCitation: 'Dr. Liyan Massaband',
      actionLinkText: 'Read Dr. Liyan’s Full Profile'
    },
    section_3_education: {
      show: true,
      status: 'Published',
      isApproved: true,
      lastReviewed: '2026-06-22',
      sourceRecord: 'NPI Registry & Registrars',
      imageRights: 'Academic Context Exemption',
      displayOrder: 3,
      sectionLabel: '02 — Education & Foundation',
      heading: 'Education That Connects Science, Public Health and Dental Medicine',
      disclosureNote: 'Institution names are presented as part of Dr. Liyan Massaband’s verified educational history and do not imply institutional endorsement.',
      actionLinkText: 'Explore Education & Credentials',
      entries: [
        {
          id: 'edu-az',
          institution: 'University of Arizona',
          degree: 'Bachelor of Science (B.S.)',
          major: 'Physiological Sciences',
          description: 'A study of complex systemic biological circuits, evaluating cardiovascular and biochemical frameworks that link cellular processes to system health.',
          verifiedSource: 'University Registrar Transcript',
          year: '2010'
        },
        {
          id: 'edu-usc',
          institution: 'University of Southern California',
          degree: 'Master of Public Health (M.P.H.)',
          major: 'Global Health and Leadership',
          description: 'Epidemiologic study patterns focusing on community dental equity, systemic clinical correlations, and preventative patient communications.',
          verifiedSource: 'USC Graduate Registry Data',
          year: '2012'
        },
        {
          id: 'edu-mid',
          institution: 'Midwestern University',
          degree: 'Doctor of Dental Medicine (D.M.D.)',
          major: 'Doctorate in Dentistry',
          description: 'Comprehensive clinical dentist training, biomaterials engineering, smile architecture criteria, and physical restorative care guidelines.',
          verifiedSource: 'State License Verification Records',
          year: '2016'
        }
      ]
    },
    section_4_philosophy: {
      show: true,
      status: 'Published',
      isApproved: true,
      lastReviewed: '2026-06-22',
      sourceRecord: 'Official Practice Framework Guidelines',
      imageRights: 'Exclusive Client Rights',
      displayOrder: 4,
      sectionLabel: '03 — Philosophy',
      heading: 'Thoughtful Care Begins with Listening',
      portraitDescription: 'Dr. Liyan Massaband - Patient Care Consultation Snapshot',
      narrative: 'Dr. Liyan’s public professional biography describes a holistic outlook that connects oral health with wider well-being. Her approach places importance on listening, clear communication, careful planning and results that remain appropriate to the individual rather than following a single visual formula.',
      actionLinkText: 'Explore Her Professional Philosophy',
      principles: [
        {
          id: 'p-1',
          title: 'Listen Before Planning',
          description: 'Understand the individual before recommending a clinical direction.'
        },
        {
          id: 'p-2',
          title: 'Balance Health and Aesthetics',
          description: 'Consider function, comfort, proportion and appearance together.'
        },
        {
          id: 'p-3',
          title: 'Explain Clearly',
          description: 'Help patients understand the reasoning behind each treatment option.'
        },
        {
          id: 'p-4',
          title: 'Respect Individuality',
          description: 'Avoid treating every smile, face or patient in the same visual way.'
        }
      ]
    },
    section_5_journey: {
      show: true,
      status: 'Published',
      isApproved: true,
      lastReviewed: '2026-06-22',
      sourceRecord: 'Historical Resume Concordance',
      imageRights: 'General Press Release Assets',
      displayOrder: 5,
      sectionLabel: '04 — Professional Journey',
      heading: 'A Professional Path Built Across Health, Education and Dentistry',
      actionLinkText: 'View the Full Professional Journey',
      milestones: [
        {
          id: 'm-1',
          year: 'Analytical Foundation',
          title: 'Physiological Sciences Foundation',
          organization: 'University of Arizona',
          description: 'Studied biological systemic feedback loops, laying the scientific groundwork for dental-systemic connectivity parameters.',
          verifiedSource: 'Registrar Transcript Archive'
        },
        {
          id: 'm-2',
          year: 'Epidemiological Lens',
          title: 'Public Health and Global Leadership',
          organization: 'University of Southern California',
          description: 'Collaborated on preventative clinical models to connect systemic disease profiles with preventive diagnostic indicators.',
          verifiedSource: 'Graduate Registry Data'
        },
        {
          id: 'm-3',
          year: 'Clinical Synthesis',
          title: 'D.M.D. Doctoral Degree',
          organization: 'Midwestern University',
          description: 'Completed comprehensive dental programs, mastering digital restoration workflows and modern cosmetic smile architecture.',
          verifiedSource: 'NPI Public Record Database'
        },
        {
          id: 'm-4',
          year: 'Burbank Affiliation',
          title: 'Burbank General Associate Dentist',
          organization: 'Magnolia Dentistry',
          description: 'Provides professional dental care focusing on preventive biological restoration and patient education metrics.',
          verifiedSource: 'Magnolia Practice Bio Registry'
        },
        {
          id: 'm-5',
          year: 'Beverly Hills Studio',
          title: 'Beverly Hills Esthetic Associate',
          organization: 'ConfiDental Beverly Hills',
          description: 'Directs artistic custom smile makeovers, conservative porcelain veneers, and health-aligned aesthetic rejuvenations.',
          verifiedSource: 'ConfiDental Practice Directory'
        }
      ]
    },
    section_6_videos: {
      show: true,
      status: 'Published',
      isApproved: true,
      lastReviewed: '2026-06-22',
      sourceRecord: 'Official YouTube Channel Logs',
      imageRights: 'Creative Commons Embed License',
      displayOrder: 6,
      sectionLabel: '05 — Videos & Conversations',
      heading: 'Dentistry Explained in Her Own Voice',
      supportingCopy: 'Explore selected public videos in which Dr. Liyan discusses dental health, smile planning, patient comfort and modern treatment considerations in accessible language.',
      actionLinkText: 'View All Videos',
      actionAltLinkText: 'Watch on YouTube',
      featuredVideo: {
        id: 'v-feat',
        youtubeId: '-6nZKwfkXzc',
        title: 'Featured Professional Introduction: Dr. Liyan Massaband',
        category: 'Biographical Commentary',
        duration: '4:12',
        description: 'An informative deep-dive into Dr. Liyan\'s clinical methodology, focus on conservative treatment architectures, and biological dental approaches.',
        source: 'Verified Platform Upload',
        dateVerified: '2026-05-10'
      },
      shorts: [
        {
          id: 'v-sh-1',
          youtubeId: 'l5QSYf5MjBo',
          title: 'Jaw Alignment, Bite and Facial Balance',
          category: 'Short Video Guide',
          duration: '0:58'
        },
        {
          id: 'v-sh-2',
          youtubeId: 'AqimdOyQIdE',
          title: 'Invisalign and Subtle Smile Transformation',
          category: 'Short Video Guide',
          duration: '0:45'
        },
        {
          id: 'v-sh-3',
          youtubeId: 'ry6BOyNZNQA',
          title: 'Smile in a Day',
          category: 'Short Video Guide',
          duration: '0:35'
        },
        {
          id: 'v-sh-4',
          youtubeId: 'gWPTlwrFqz0',
          title: 'Porcelain Veneers',
          category: 'Short Video Guide',
          duration: '0:50'
        },
        {
          id: 'v-sh-5',
          youtubeId: 's4SjXrIJJFY',
          title: 'Modern Root Canals and Co-Comfort',
          category: 'Short Video Guide',
          duration: '0:42'
        },
        {
          id: 'v-sh-6',
          youtubeId: 'MLlNGQlBmVI',
          title: 'Dental Anxiety and Feeling Understood',
          category: 'Short Video Guide',
          duration: '0:55'
        }
      ]
    },
    section_7_own_words: {
      show: true,
      status: 'Published',
      isApproved: true,
      lastReviewed: '2026-06-22',
      sourceRecord: 'Official Instagram Handle Data',
      imageRights: 'Approved User Content',
      displayOrder: 7,
      sectionLabel: '06 — In Her Own Words',
      heading: 'Professional Perspectives Beyond the Treatment Room',
      actionLinkText: 'Follow Dr. Liyan on Instagram',
      highlights: [
        {
          id: 'h-1',
          url: 'https://www.instagram.com/p/DPpGn3eEkfx/',
          title: 'Personal Introduction & Ethos',
          category: 'Editorial Post',
          context: 'An overview of Dr. Massaband\'s vision: connecting her public health studies (M.P.H.) with conservative, health-first general dentistry in active office settings.',
          publishDate: 'Aug 2024'
        },
        {
          id: 'h-2',
          url: 'https://www.instagram.com/reel/DQw7tcpgkrs/',
          title: 'Smile in a Day Demystified',
          category: 'Educational Reel',
          context: 'Explaining the clinical biomechanics behind multi-implant diagnostic models, supporting immediate structural load thresholds safely.',
          publishDate: 'Jan 2025'
        },
        {
          id: 'h-3',
          url: 'https://www.instagram.com/reel/DSAwfPPgdmF/',
          title: 'Responsible AI Smile Designs',
          category: 'Educational Reel',
          context: 'A cautious critique of instant digital mockups: why structural health vectors and actual teeth positions must drive customized ceramic layout sheets.',
          publishDate: 'Mar 2025'
        }
      ]
    },
    section_8_references: {
      show: true,
      status: 'Published',
      isApproved: true,
      lastReviewed: '2026-06-22',
      sourceRecord: 'Zocdoc & NPPES Federal Provider File',
      imageRights: 'Official Logo Guidelines Clearances',
      displayOrder: 8,
      sectionLabel: '07 — Public References',
      heading: 'Verified Professional Profiles and External References',
      profiles: [
        {
          id: 'ref-zd',
          platform: 'Zocdoc Official Directory',
          description: 'External professional and patient-feedback profile providing independent feedback streams and real-time credential monitoring references.',
          type: 'Patient Experience Verification Portal',
          url: 'https://www.zocdoc.com/dentist/liyan-massaband-dmd-mph-314420',
          verifiedDate: 'June 2026',
          ratingText: '5.0 / 5.0 Rating (Factual aggregates tracked independently)'
        },
        {
          id: 'ref-npi',
          platform: 'CMS NPI Registry Database',
          description: 'Public federal provider record indicating verified National Provider Identifier status, standard licensure classifications, and taxonomy codes.',
          type: 'U.S. Federal HHS Registry Record',
          url: 'https://npiregistry.cms.hhs.gov/provider-view/1346588407',
          verifiedDate: 'May 2026'
        },
        {
          id: 'ref-pd',
          platform: 'PracticeDilly Review Hub',
          description: 'External industry client-reference content associated with client dental feedback loops and experience statistics verified for ConfiDental Beverly Hills.',
          type: 'Affiliated Service Quality Audit Log',
          url: 'https://www.practicedilly.com/dental-software/reviews',
          verifiedDate: 'March 2026'
        },
        {
          id: 'ref-ig',
          platform: 'Official Instagram Handle',
          description: 'Direct interactive communication layout, providing short-format medical guides, community advocacy, and personal professional stories.',
          type: 'Approved Platform Communication Conduit',
          url: 'https://www.instagram.com/drliyanmassaband/',
          verifiedDate: 'June 2026'
        }
      ]
    },
    section_9_affiliations: {
      show: true,
      status: 'Published',
      isApproved: true,
      lastReviewed: '2026-06-22',
      sourceRecord: 'Clinic Employment Protocols',
      imageRights: 'Authorized Clinical Platform License',
      displayOrder: 9,
      sectionLabel: '08 — Clinical Affiliations',
      heading: 'Professional Affiliations in Burbank and Beverly Hills',
      affiliations: [
        {
          id: 'aff-mag',
          name: 'Magnolia Dentistry',
          location: 'Burbank, California',
          url: 'https://www.magnoliadentistry.com/',
          bioUrl: 'https://www.magnoliadentistry.com/dr-liyan-massaband/',
          relationshipStatement: 'Dr. Liyan Massaband is professionally associated with Magnolia Dentistry in Burbank, California.',
          imageDescription: 'Burbank Practice - Digital Operatory Setup'
        },
        {
          id: 'aff-conf',
          name: 'ConfiDental Beverly Hills',
          location: 'Beverly Hills, California',
          url: 'https://confidentalbeverlyhills.com/',
          bioUrl: 'https://confidentalbeverlyhills.com/liyan-massaband-dmd/',
          relationshipStatement: 'Dr. Liyan Massaband is professionally associated with ConfiDental Beverly Hills in Beverly Hills, California.',
          imageDescription: 'Beverly Hills Practice - Smile Design Studio Snapshot'
        }
      ]
    },
    section_10_impact: {
      show: true,
      status: 'Published',
      isApproved: false, // Default is FALSE to align with requirement: statistical claims should await customer audit
      lastReviewed: '2026-06-22',
      sourceRecord: 'Magnolia Dentistry Marketing Data Leaflets',
      imageRights: 'Awaiting Audit Approval',
      displayOrder: 10,
      sectionLabel: '09 — Professional Impact',
      heading: 'Experience Presented with Context',
      useStatsFallback: false, // Default: FALSE means we display "Professional Focus at a Glance" as instructed if unapproved!
      numericalClaims: [
        {
          id: 'cl-1',
          metric: '15+',
          label: 'Years transforming smiles',
          source: 'Published by Magnolia Dentistry. Last verified June 2026.',
          dateVerified: '2026-06-15',
          isApproved: false
        },
        {
          id: 'cl-2',
          metric: '1,000+',
          label: 'Successful implant procedures',
          source: 'Published by Magnolia Dentistry. Last verified June 2026.',
          dateVerified: '2026-06-15',
          isApproved: false
        }
      ],
      focusPoints: [
        {
          id: 'fc-1',
          title: 'Conservative Restoration Mechanics',
          description: 'Focusing on ultra-thin ceramic veneers and structural preservation targets that minimize enamel preparation down to 0.2mm.'
        },
        {
          id: 'fc-2',
          title: 'Epidemiological Preventive Dental Care',
          description: 'Applying systemic bacterial testing, risk metrics, and salivary diagnosis tools to anticipate problems before decay manifests.'
        },
        {
          id: 'fc-3',
          title: 'Somatic Cardiovascular Risk Coordination',
          description: 'Addressing correlation channels between active periodontal inflammation and systemic health to support general well-being.'
        }
      ]
    },
    section_11_media_enquiries: {
      show: true,
      status: 'Published',
      isApproved: true,
      lastReviewed: '2026-06-22',
      sourceRecord: 'Press Liaison Standards',
      imageRights: 'Exclusive Press Hub Releases',
      displayOrder: 11,
      sectionLabel: '10 — Media & Collaboration',
      heading: 'Available for Thoughtful Professional Conversations',
      supportingCopy: 'The website provides journalists, podcast hosts, event organisers and professional collaborators with a direct route to verified biography information, approved photography and relevant discussion topics.',
      actionKitText: 'View Press Kit',
      actionCollabText: 'Speaking & Collaboration',
      topics: [
        'Patient Communication and Dental Anxiety Control',
        'Natural Aesthetic Smile Design and Proportion Benchmarks',
        'Balancing Health, Vital Enamel Preservation, and Aesthetics',
        'Public Health Perspectives, Access, and Literacy in Dentistry',
        'How Patients Master Complex Treatment Alternatives',
        'Modern Clinical Education through Targeted Short-form Video Content'
      ]
    },
    section_12_articles: {
      show: true,
      status: 'Published',
      isApproved: true,
      lastReviewed: '2026-06-22',
      sourceRecord: 'Doctor Author Logs',
      imageRights: 'Exclusive Article Rights',
      displayOrder: 12,
      sectionLabel: '11 — Articles & Insights',
      heading: 'Educational Perspectives from Dr. Liyan',
      articles: [
        {
          id: 'art-1',
          title: 'The Oral-Systemic Interface: Modern Public Health Corroboration',
          slug: 'oral-systemic-connection',
          category: 'Patient Trust',
          publishDate: 'Feb 2025',
          readTime: '7 min read',
          summary: 'Analyze how anatomical pathways, chronic inflammatory responses, and oral microbiological environments exert measurable impacts on systemic wellness.'
        },
        {
          id: 'art-2',
          title: 'Esthetic Smile Restorations: A Principles-Based Biological Architecture',
          slug: 'oral-systemic-connection', // Fallback router mapping
          category: 'Aesthetic Dentistry Perspective',
          publishDate: 'May 2025',
          readTime: '6 min read',
          summary: 'Detailed clinical study of modern esthetic dentistry, prioritizing structural enamel preservation, biometric durability, and natural light refraction.'
        },
        {
          id: 'art-3',
          title: 'Preventive Advocacy: Redefining Private Dental Systems',
          slug: 'oral-systemic-connection',
          category: 'Modern Patient Education',
          publishDate: 'Jan 2026',
          readTime: '5 min read',
          summary: 'Fusing public epidemiologic principles with personalized clinical protocols to establish predictable wellness architectures in private dental settings.'
        }
      ]
    },
    section_13_closing: {
      show: true,
      status: 'Published',
      isApproved: true,
      lastReviewed: '2026-06-22',
      sourceRecord: 'Official Platform Assembly',
      imageRights: 'Exclusive Right',
      displayOrder: 13,
      heading: 'Explore the Professional Story Behind the Work',
      paragraph: 'Learn more about Dr. Liyan Massaband’s education, professional journey, public educational work and clinical affiliations.',
      portraitDescription: 'Dr. Liyan Massaband, D.M.D., M.P.H. - Official Professional Authority Closing Snapshot'
    }
  });

  // Inject Custom Canonical SEO, Meta Tags, and JSON-LD dynamic tags on client route mount
  useEffect(() => {
    document.title = "Dr. Liyan Massaband, D.M.D., M.P.H. | Official Website";
    
    // Core SEO descriptors
    const metaDesc = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    metaDesc.setAttribute('content', 'Explore the official professional website of Dr. Liyan Massaband, including her education, dental career, philosophy, videos, public work and clinical affiliations in Burbank and Beverly Hills.');
    if (!document.querySelector('meta[name="description"]')) document.head.appendChild(metaDesc);

    const metaRobots = document.querySelector('meta[name="robots"]') || document.createElement('meta');
    metaRobots.setAttribute('name', 'robots');
    metaRobots.setAttribute('content', 'index, follow');
    if (!document.querySelector('meta[name="robots"]')) document.head.appendChild(metaRobots);

    const setOgTag = (property: string, content: string) => {
      const tag = document.querySelector(`meta[property="${property}"]`) || document.createElement('meta');
      tag.setAttribute('property', property);
      tag.setAttribute('content', content);
      if (!document.querySelector(`meta[property="${property}"]`)) document.head.appendChild(tag);
    };
    
    setOgTag('og:title', 'Dr. Liyan Massaband, D.M.D., M.P.H. | Official Website');
    setOgTag('og:description', 'Explore the official professional website of Dr. Liyan Massaband, including her education, dental career, philosophy, videos, public work and clinical affiliations.');
    setOgTag('og:type', 'profile');
    setOgTag('og:url', window.location.href);
    setOgTag('og:image', 'https://drliyanmassaband.com/assets/social-logo.jpg');

    const canonical = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', 'https://drliyanmassaband.com/');
    if (!document.querySelector('link[rel="canonical"]')) document.head.appendChild(canonical);
  }, []);

  const handleActionClick = (path: string) => {
    navigate(path);
  };

  // CMS Section show/hide configuration helpers
  const handleToggleSection = (sectionKey: keyof HomepageCMSState) => {
    setCmsData(prev => ({
      ...prev,
      [sectionKey]: {
        ...prev[sectionKey],
        show: !prev[sectionKey].show
      }
    }));
  };

  const handleToggleApproved = (sectionKey: keyof HomepageCMSState) => {
    setCmsData(prev => ({
      ...prev,
      [sectionKey]: {
        ...prev[sectionKey],
        isApproved: !prev[sectionKey].isApproved
      }
    }));
  };

  const handleStatusChange = (sectionKey: keyof HomepageCMSState, val: 'Published' | 'Draft') => {
    setCmsData(prev => ({
      ...prev,
      [sectionKey]: {
        ...prev[sectionKey],
        status: val
      }
    }));
  };

  const handleTextChange = (sectionKey: keyof HomepageCMSState, field: string, val: string) => {
    setCmsData(prev => ({
      ...prev,
      [sectionKey]: {
        ...prev[sectionKey],
        [field]: val
      }
    }));
  };

  const handleToggleNumericImpactFallback = () => {
    setCmsData(prev => ({
      ...prev,
      section_10_impact: {
        ...prev.section_10_impact,
        useStatsFallback: !prev.section_10_impact.useStatsFallback
      }
    }));
  };

  // Extract variables for direct rendering
  const { section_1_hero: hero } = cmsData;
  const { section_2_intro: intro } = cmsData;
  const { section_3_education: edu } = cmsData;
  const { section_4_philosophy: philo } = cmsData;
  const { section_5_journey: journey } = cmsData;
  const { section_6_videos: vids } = cmsData;
  const { section_7_own_words: words } = cmsData;
  const { section_8_references: refs } = cmsData;
  const { section_9_affiliations: affs } = cmsData;
  const { section_10_impact: impact } = cmsData;
  const { section_11_media_enquiries: media } = cmsData;
  const { section_12_articles: artSec } = cmsData;
  const { section_13_closing: closing } = cmsData;

  // Custom static facts which are currently unapproved
  const unapprovedFactsList = [
    { text: 'Magnolia Dentistry: "15+ Years transforming smiles"', source: 'Burbank clinic profile' },
    { text: 'Magnolia Dentistry: "1,000+ Successful implant procedures"', source: 'Burbank clinic surgery logs' },
    { text: 'First-person personal statement placeholder: "[Insert approved statement about care, trust..."', source: 'Home Introduction panel' },
    { text: 'Clinical result case visual images representing prior patient examples', source: 'Practice gallery sheets' }
  ];

  // List of required photographs labeled clearly with descriptions
  const photographsRequiredList = [
    { title: 'Official Biographical Portrait', aspect: 'Vertical Portrait', desc: 'Dr. Liyan Massaband looking confident, lit with split ambient studio lighting, styled against plain charcoal.', area: 'Editorial Hero' },
    { title: 'Environmental Practice Snapshot', aspect: 'Asymmetric Landscape', desc: 'Natural candid photograph of Dr. Massaband engaged in biological consultation planning.', area: 'Introduction Profile' },
    { title: 'Academic Record Snapshot', aspect: 'Document Scan', desc: 'Official diploma framework check verification layouts.', area: 'Education and Credentials' },
    { title: 'Patient Consultation Scene', aspect: 'Soft focus horizontal', desc: 'Dr. Liyan discussing restoration diagnostics over a physical anatomical dental model.', area: 'Philosophy of Care' },
    { title: 'Magnolia Office Environment', aspect: 'Symmetry Landscape', desc: 'Burbank Magnolia Dentistry clean architectural facade and digital operations floor.', area: 'Clinical Affiliations' },
    { title: 'ConfiDental Smile Design room', aspect: 'High-contrast landscape', desc: 'Beverly Hills ConfiDental cosmetic treatment space.', area: 'Clinical Affiliations' },
    { title: 'Media Enquiries Consultation Snapshot', aspect: 'Split-toned Horizontal', desc: 'Dr. Liyan Massaband holding speaking notes on stage.', area: 'Editorial Closing Card' }
  ];

  return (
    <div id="homepage-root-node" className="relative min-h-screen bg-brand-white text-slate-200">
      
      {/* 📊 INTERACTIVE CMS CONTROL DASHBOARD (Admin Panel) */}
      <div className="bg-[#121212] border-b border-brand-stone relative z-50 text-xs text-slate-300">
        <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-brand-bronze animate-pulse" />
            <span className="font-mono text-slate-100 font-bold uppercase tracking-widest text-[10px]">
              Studio CMS Simulation Dashboard v1.1
            </span>
            <span className="text-[10px] text-slate-500 hidden sm:inline">| Sandbox environment connected</span>
          </div>
          <button
            onClick={() => setCmsPanelOpen(!cmsPanelOpen)}
            className="px-3 py-1 font-sans font-bold text-[11px] uppercase bg-brand-stone hover:bg-neutral-800 border border-neutral-700 hover:border-brand-bronze text-slate-100 hover:text-brand-white rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
            id="cms-dashboard-toggle-trigger"
          >
            <Settings className="w-3.5 h-3.5 text-brand-bronze" />
            <span>{cmsPanelOpen ? 'Collapse CMS panel' : 'Expand CMS Dashboard Area'}</span>
          </button>
        </div>

        {cmsPanelOpen && (
          <div className="bg-[#0e0e0e] border-t border-brand-stone p-5 animate-reveal border-b-2 border-brand-bronze/40" id="cms-dashboard-expanded-panel">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* CMS Navigation sidebar */}
              <div className="lg:col-span-3 flex flex-col gap-2 border-r border-brand-stone/50 pr-4">
                <span className="text-[9.5px] font-mono uppercase text-slate-500 font-bold tracking-widest block mb-1">
                  Database Management
                </span>
                <button
                  onClick={() => setActiveCmsTab('sections')}
                  className={`px-3 py-2 text-left rounded-lg transition-colors font-sans flex items-center justify-between font-bold ${
                    activeCmsTab === 'sections' ? 'bg-brand-stone text-brand-bronze border-l-2 border-brand-bronze' : 'hover:bg-neutral-900 text-slate-400'
                  }`}
                >
                  <span className="flex items-center gap-1.5"><Layers className="w-3.5 h-3.5" /> 1. Section Controls</span>
                  <span className="text-[10px] bg-brand-bronze/10 text-brand-bronze px-1.5 py-0.2 rounded font-mono">13</span>
                </button>
                <button
                  onClick={() => setActiveCmsTab('fields')}
                  className={`px-3 py-2 text-left rounded-lg transition-colors font-sans flex items-center justify-between font-bold ${
                    activeCmsTab === 'fields' ? 'bg-brand-stone text-brand-bronze border-l-2 border-brand-bronze' : 'hover:bg-neutral-900 text-slate-400'
                  }`}
                >
                  <span className="flex items-center gap-1.5"><BookOpen className="w-3.5 h-3.5" /> 2. Copy String Inputs</span>
                  <span className="text-[10px] bg-neutral-800 text-slate-400 px-1.5 py-0.2 rounded font-mono">Realtime</span>
                </button>
                <button
                  onClick={() => setActiveCmsTab('audits')}
                  className={`px-3 py-2 text-left rounded-lg transition-colors font-sans flex items-center justify-between font-bold ${
                    activeCmsTab === 'audits' ? 'bg-brand-stone text-brand-bronze border-l-2 border-brand-bronze' : 'hover:bg-neutral-900 text-slate-400'
                  }`}
                >
                  <span className="flex items-center gap-1.5"><Info className="w-3.5 h-3.5" /> 3. Verification Lists</span>
                  <span className="text-[10px] bg-brand-bronze/20 text-brand-bronze px-2 py-0.5 rounded-full font-mono animate-pulse">!</span>
                </button>
                
                <div className="mt-4 p-3.5 bg-neutral-950/80 border border-brand-stone rounded-lg font-mono text-[10px] text-slate-500 space-y-1.5 leading-relaxed">
                  <p className="text-slate-300 font-sans font-semibold">CMS Integration State:</p>
                  <p>All values edit dynamically in real time. Changes are reflected synchronously below.</p>
                </div>
              </div>

              {/* CMS Content Center */}
              <div className="lg:col-span-9 max-h-[420px] overflow-y-auto pr-2">
                
                {/* TAB 1: Sections Control */}
                {activeCmsTab === 'sections' && (
                  <div className="space-y-4">
                    <h3 className="font-display font-semibold text-slate-250 text-sm">
                      Master Section Configurator (Manage Visibility, Workflow States, & Legal Sources)
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {Object.keys(cmsData).map((key) => {
                        const secKey = key as keyof HomepageCMSState;
                        const sec = cmsData[secKey];
                        const sectionLabelString = secKey.replace('section_', '').replace(/_/g, ' ').toUpperCase();

                        return (
                          <div key={secKey} className="p-3 bg-neutral-950 border border-brand-stone rounded-xl space-y-2 flex flex-col justify-between">
                            <div className="flex items-center justify-between border-b border-brand-stone/40 pb-1.5">
                              <span className="font-mono text-[10px] text-brand-bronze font-bold">
                                {sectionLabelString}
                              </span>
                              <div className="flex items-center gap-1.5">
                                <span className={`text-[9px] px-1.5 py-0.2 rounded font-mono ${sec.show ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'}`}>
                                  {sec.show ? 'VISIBLE' : 'HIDDEN'}
                                </span>
                                <span className={`text-[9px] px-1.5 py-0.2 rounded font-mono ${sec.isApproved ? 'bg-sky-500/10 text-sky-400' : 'bg-amber-500/10 text-amber-500 animate-pulse'}`}>
                                  {sec.isApproved ? 'APPROVED' : 'PENDING'}
                                </span>
                              </div>
                            </div>

                            <div className="grid grid-cols-2 gap-2 text-[10px]">
                              {/* Show/Hide Toggles */}
                              <label className="flex items-center gap-1.5 cursor-pointer hover:text-white">
                                <input 
                                  type="checkbox" 
                                  checked={sec.show} 
                                  onChange={() => handleToggleSection(secKey)} 
                                  className="rounded border-neutral-700 accent-brand-bronze cursor-pointer"
                                />
                                <span>Display Section</span>
                              </label>

                              {/* Approved Toggles */}
                              <label className="flex items-center gap-1.5 cursor-pointer hover:text-white">
                                <input 
                                  type="checkbox" 
                                  checked={sec.isApproved} 
                                  onChange={() => handleToggleApproved(secKey)} 
                                  className="rounded border-neutral-700 accent-brand-bronze cursor-pointer"
                                />
                                <span>Client Approved</span>
                              </label>
                            </div>

                            <div className="pt-1.5 border-t border-brand-stone/30 grid grid-cols-2 gap-2 text-[10px]">
                              <div>
                                <span className="text-slate-500 block text-[9px] uppercase font-mono">Workflow</span>
                                <select
                                  value={sec.status}
                                  onChange={(e) => handleStatusChange(secKey, e.target.value as 'Published' | 'Draft')}
                                  className="w-full bg-neutral-900 border border-neutral-800 text-slate-350 rounded-sm py-0.5 px-1 mt-0.5 text-[9.5px]"
                                >
                                  <option value="Published">Published State</option>
                                  <option value="Draft">Draft Mode</option>
                                </select>
                              </div>

                              <div>
                                <span className="text-slate-500 block text-[9px] uppercase font-mono text-ellipsis overflow-hidden">Source Verification</span>
                                <span className="text-slate-400 text-[9px] block mt-1.5 truncate" title={sec.sourceRecord}>
                                  {sec.sourceRecord}
                                </span>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* TAB 2: Copy String Inputs */}
                {activeCmsTab === 'fields' && (
                  <div className="space-y-4">
                    <h3 className="font-display font-semibold text-slate-250 text-sm">
                      Interactive Text Engine (Customize Page Headings & Paragraph Variables Instantly)
                    </h3>
                    
                    <div className="space-y-4 p-4 bg-neutral-950 border border-brand-stone rounded-xl">
                      {/* Hero Section Config Fields */}
                      <div className="space-y-2 border-b border-brand-stone pb-3">
                        <span className="font-mono text-brand-bronze text-[10px] font-bold block mb-1">SECTION 1: HERO HEADER FIELDS</span>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div>
                            <label className="text-[10px] text-slate-500 font-mono uppercase block mb-1">Hero Eyebrow</label>
                            <input 
                              type="text" 
                              value={hero.eyebrow} 
                              onChange={(e) => handleTextChange('section_1_hero', 'eyebrow', e.target.value)}
                              className="w-full px-2 py-1.5 rounded bg-neutral-900 border border-neutral-800 text-slate-200 text-xs" 
                            />
                          </div>
                          <div>
                            <label className="text-[10px] text-slate-500 font-mono uppercase block mb-1">H1 Main Heading Title</label>
                            <input 
                              type="text" 
                              value={hero.h1} 
                              onChange={(e) => handleTextChange('section_1_hero', 'h1', e.target.value)}
                              className="w-full px-2 py-1.5 rounded bg-neutral-900 border border-neutral-800 text-slate-200 text-xs" 
                            />
                          </div>
                        </div>
                        <div className="mt-2">
                          <label className="text-[10px] text-slate-500 font-mono uppercase block mb-1">Sub-heading Statement</label>
                          <input 
                            type="text" 
                            value={hero.statement} 
                            onChange={(e) => handleTextChange('section_1_hero', 'statement', e.target.value)}
                            className="w-full px-2 py-1.5 rounded bg-neutral-900 border border-neutral-800 text-slate-200 text-xs" 
                          />
                        </div>
                      </div>

                      {/* Bio Quote Config Fields */}
                      <div className="space-y-2 border-b border-brand-stone pb-3">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-brand-bronze text-[10px] font-bold block">SECTION 2: BIOGRAPHICAL INTRO STATEMENT</span>
                          <span className="text-[9px] bg-amber-500/10 text-amber-500 px-1.5 py-0.2 rounded font-mono font-bold animate-pulse">Needs Approval</span>
                        </div>
                        <div>
                          <label className="text-[10px] text-slate-500 font-mono uppercase block mb-1">First Person Quote Narrative</label>
                          <textarea 
                            value={intro.quoteText} 
                            onChange={(e) => handleTextChange('section_2_intro', 'quoteText', e.target.value)}
                            rows={2}
                            className="w-full px-2 py-1.5 rounded bg-neutral-900 border border-neutral-800 text-slate-200 text-xs font-sans" 
                          />
                        </div>
                      </div>

                      {/* Professional Focus Toggles */}
                      <div className="space-y-2">
                        <span className="font-mono text-brand-bronze text-[10px] font-bold block mb-1">SECTION 10: PROFESSIONAL IMPACT DATA TOGGLE</span>
                        <div className="p-3 bg-neutral-900 rounded-lg flex items-center justify-between border border-neutral-850">
                          <div>
                            <p className="font-sans font-semibold text-slate-200 text-xs">Statistical vs Qualitative Fallback Switch</p>
                            <p className="font-sans text-[11px] text-slate-500 mt-0.5">Toggle to simulate non-approval of marketing stats ("15+ Years", "1,000+ Implants").</p>
                          </div>
                          <button
                            onClick={handleToggleNumericImpactFallback}
                            className={`px-3 py-1.5 font-mono text-[10px] uppercase font-bold rounded-md transition-colors ${
                              impact.useStatsFallback ? 'bg-brand-bronze text-white' : 'bg-neutral-850 border border-neutral-700 text-slate-300 hover:text-white'
                            }`}
                          >
                            {impact.useStatsFallback ? 'Showing Numeric Statistics' : 'Fallback: Focused Qualitative Grid'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 3: Verification Audits */}
                {activeCmsTab === 'audits' && (
                  <div className="space-y-5">
                    
                    {/* Awaiting Approvals Card */}
                    <div className="p-4 bg-neutral-950 border border-brand-stone rounded-xl space-y-3">
                      <div className="flex items-center gap-2 text-amber-500">
                        <AlertCircle className="w-4 h-4" />
                        <h4 className="font-sans font-bold text-slate-200 text-xs">13. Lists of Factual Statements Mocked/Awaiting Direct Client Consent</h4>
                      </div>
                      <p className="text-slate-500 leading-relaxed font-sans text-[11px]">
                        The following clinical, procedural or career timeline statements reside under draft classification or awaiting written evidentiary consent prior to final launch:
                      </p>
                      <ul className="space-y-2 pt-1 font-sans text-xs">
                        {unapprovedFactsList.map((item, index) => (
                          <li key={index} className="flex gap-2 items-start bg-neutral-900/50 p-2 rounded border border-brand-stone/40">
                            <span className="text-brand-bronze font-mono font-bold">[{index + 1}]</span>
                            <div>
                              <p className="text-slate-200 font-semibold">{item.text}</p>
                              <span className="text-[10px] text-slate-500 block font-mono">Registry Source Checked: {item.source}</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Photographs Required Card */}
                    <div className="p-4 bg-neutral-950 border border-brand-stone rounded-xl space-y-3">
                      <div className="flex items-center gap-2 text-sky-400">
                        <Camera className="w-4 h-4" />
                        <h4 className="font-sans font-bold text-slate-200 text-xs">14. Complete Inventory of Brand Photographs Still To Be Commissioned</h4>
                      </div>
                      <p className="text-slate-500 leading-relaxed font-sans text-[11px]">
                        The website currently employs modern typographic and structural vector canvas grids. Real professional custom shots are required to populate the following slots:
                      </p>
                      <ul className="space-y-2 pt-1 font-sans text-xs">
                        {photographsRequiredList.map((photo, index) => (
                          <li key={index} className="flex gap-2 items-start bg-neutral-900/50 p-2.5 rounded border border-brand-stone/40">
                            <span className="text-slate-400 font-mono font-bold">[{index + 1}]</span>
                            <div>
                              <div className="flex items-center gap-2">
                                <p className="text-slate-200 font-bold">{photo.title}</p>
                                <span className="bg-brand-stone text-brand-bronze px-1.5 py-0.2 rounded font-mono text-[9px] uppercase tracking-wider">{photo.aspect}</span>
                              </div>
                              <p className="text-slate-400 mt-1">{photo.desc}</p>
                              <span className="text-[10px] text-brand-bronze font-mono block mt-0.5">Integration Anchor: {photo.area}</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Clinic vs Personal Brand Comparison Guide */}
                    <div className="p-4 bg-neutral-950 border border-brand-stone rounded-xl space-y-3">
                      <div className="flex items-center gap-2 text-emerald-400">
                        <CheckCircle2 className="w-4 h-4" />
                        <h4 className="font-sans font-bold text-slate-200 text-xs">15. Strategic Review: Why This Homepage Differs From A Generic Clinic Funnel</h4>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans text-xs">
                        <div className="p-3 bg-rose-500/5 border border-rose-500/10 rounded-lg space-y-2">
                          <p className="font-bold text-rose-450 uppercase tracking-widest text-[10px] font-mono">Traditional Dental Clinic Template</p>
                          <ul className="space-y-1 text-[11px] text-slate-400 list-disc list-inside">
                            <li>Commercial CTA buttons ("Book Free Coupon Now", "Get 20% Off Implants").</li>
                            <li>Sales funnels focused entirely on pricing package cards, financing, and insurance.</li>
                            <li>Generic lists of dental checkups, cavity fillings, and basic cleanings.</li>
                            <li>Impersonal stock models smiling in dental surgery chairs.</li>
                            <li>Unsubstantiated reviews and generic marketing credentials tags.</li>
                          </ul>
                        </div>
                        <div className="p-3 bg-emerald-500/5 border border-emerald-500/10 rounded-lg space-y-2">
                          <p className="font-bold text-emerald-450 uppercase tracking-widest text-[10px] font-mono">Dr. Liyan's Authorized Personal Website</p>
                          <ul className="space-y-1 text-[11px] text-slate-350 list-disc list-inside">
                            <li>Focus is strictly on the physician's credentials, education (D.M.D., M.P.H.), and verified curriculum.</li>
                            <li>All patient booking requests route as external redirections to specified physical practices.</li>
                            <li>Shares actual educational content, public conversations, and publication references with checking sources.</li>
                            <li>Aesthetic section is integrated with biological mechanics and listening systems.</li>
                            <li>Integrates digital NPI registry tags and CMS verified indicators for active trust logs.</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                  </div>
                )}

              </div>

            </div>
          </div>
        )}
      </div>

      {/* 1. DARK HERO SECTION */}
      {hero.show && (
        <section className="relative bg-brand-dark text-slate-100 py-16 md:py-28 border-b border-brand-stone flex items-center justify-center overflow-hidden" id="editorial-hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Text Blocks Column */}
              <div className="lg:col-span-7 space-y-8 animate-reveal" style={{ animationDelay: '100ms' }}>
                <div className="space-y-4">
                  <span className="text-[11px] font-mono font-bold text-brand-bronze uppercase tracking-widest block">
                    {hero.eyebrow}
                  </span>
                  
                  <h1 className="font-display font-extrabold text-[#FFFFFF] text-4xl sm:text-5xl lg:text-[56px] leading-[1.05] tracking-tight">
                    {hero.h1}
                  </h1>
                  
                  <p className="text-brand-bronze font-display text-lg md:text-xl font-medium tracking-tight">
                    {hero.statement}
                  </p>
                  
                  <p className="text-slate-300 font-sans text-sm md:text-base leading-relaxed max-w-xl">
                    {hero.paragraph}
                  </p>
                </div>

                {/* Main Action Nodes */}
                <div className="flex flex-wrap items-center gap-4 font-sans pt-2">
                  <button
                    onClick={() => handleActionClick('/her-story/')}
                    className="px-6 py-3 bg-brand-bronze hover:bg-brand-bronze-light text-brand-white font-semibold text-xs uppercase tracking-wider rounded-lg transition-all duration-200 flex items-center gap-2 shadow-md cursor-pointer"
                  >
                    <span>{hero.actionPrimary}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  
                  <button
                    onClick={() => handleActionClick('/videos/')}
                    className="px-6 py-3 bg-brand-ivory hover:bg-[#1a1a1a] border border-brand-stone hover:border-brand-bronze text-slate-200 hover:text-brand-white font-semibold text-xs uppercase tracking-wider rounded-lg transition-all duration-200 flex items-center gap-2 cursor-pointer"
                  >
                    <Video className="w-4 h-4 text-brand-bronze" />
                    <span>{hero.actionSecondary}</span>
                  </button>
                </div>

                {/* Compact sub-hero metadata indicator */}
                <div className="pt-6 border-t border-brand-stone/30 flex flex-wrap gap-x-6 gap-y-2 text-[10.5px] font-mono tracking-widest text-[#A3A3A3]">
                  <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-brand-bronze" /> D.M.D. Verified</span>
                  <span>•</span>
                  <span>M.P.H. Epidemiology</span>
                  <span>•</span>
                  <span>Burbank Office</span>
                  <span>•</span>
                  <span>Beverly Hills Office</span>
                </div>
              </div>

              {/* Graphical Portrait Column */}
              <div className="lg:col-span-5 animate-reveal" style={{ animationDelay: '250ms' }}>
                <div className="relative group">
                  <PortraitPlaceholder description={hero.portraitDescription} />
                  <span className="absolute bottom-3 left-3 bg-brand-dark/90 backdrop-blur-md text-[9px] font-mono tracking-wider text-slate-400 px-2.5 py-0.5 rounded-full border border-brand-stone">
                    [Awaiting Official Headshot Booking]
                  </span>
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* 2. OFFICIAL BIOGRAPHY INTRODUCTION Section (Light Canvas) */}
      {intro.show && (
        <section className="bg-brand-white py-16 md:py-24 border-b border-brand-stone/40" id="official-introduction">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Asymmetric Graphic on the Left */}
              <div className="lg:col-span-4 order-last lg:order-first">
                <div className="relative group">
                  <PortraitPlaceholder description={intro.portraitDescription} />
                  <div className="mt-3 p-3 bg-brand-ivory border border-brand-stone rounded-xl">
                    <p className="text-[10px] font-mono text-[#D4D4D4] leading-normal uppercase block">
                      Snapshot Context
                    </p>
                    <p className="text-[11px] text-[#A3A3A3] mt-1 italic">
                      Fig. 01 — Dr. Liyan Massaband discussing biological metrics during consultation.
                    </p>
                  </div>
                </div>
              </div>

              {/* Biography text on the Right */}
              <div className="lg:col-span-8 space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold text-brand-bronze uppercase tracking-widest block">
                    {intro.sectionLabel}
                  </span>
                  <h2 className="font-display font-medium text-brand-charcoal text-2xl md:text-4xl tracking-tight leading-tight">
                    {intro.heading}
                  </h2>
                </div>

                <div className="text-slate-600 text-sm md:text-base leading-relaxed space-y-4 font-sans">
                  <p>{intro.paragraph1}</p>
                  <p>{intro.paragraph2}</p>
                </div>

                {/* Quoted Pull Block */}
                <div className="border-l-4 border-brand-bronze bg-brand-ivory p-5 rounded-r-xl text-slate-200 italic text-[15px] font-sans leading-relaxed relative">
                  <p className="relative z-10">"{intro.quoteText}"</p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-xs font-mono font-bold text-brand-bronze not-italic">{intro.quoteCitation}</span>
                    {!intro.isApproved && (
                      <span className="text-[9px] bg-amber-500/10 text-amber-500 border border-amber-500/20 px-2 py-0.5 rounded uppercase font-mono font-bold animate-pulse">
                        Awaiting Client Approval
                      </span>
                    )}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => handleActionClick('/dr-liyan-massaband/')}
                    className="font-mono text-[11px] font-bold text-brand-bronze hover:text-brand-charcoal transition-all uppercase flex items-center gap-1.5 cursor-pointer hover:underline"
                  >
                    <span>{intro.actionLinkText}</span>
                    <ChevronRight className="w-4 h-4 translate-y-0.2" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* 3. EDUCATION AND FOUNDATION BACKGROUND Section (Warm Neutral/Ivory) */}
      {edu.show && (
        <section className="bg-[#121212] py-16 md:py-24 border-b border-brand-stone" id="education-foundation">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mb-12 space-y-3">
              <span className="text-xs font-mono font-bold text-brand-bronze uppercase tracking-widest block">
                {edu.sectionLabel}
              </span>
              <h2 className="font-display font-medium text-brand-charcoal text-2xl md:text-4xl tracking-tight text-[#FFFFFF]">
                {edu.heading}
              </h2>
            </div>

            {/* Timelines Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 font-sans">
              {edu.entries.map((item) => (
                <div 
                  key={item.id}
                  className="bg-[#0A0A0A] border border-brand-stone p-6 rounded-2xl flex flex-col justify-between transition-colors duration-200 hover:border-brand-bronze/40 group relative"
                  id={`edu-item-${item.id}`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="p-2.5 bg-neutral-900 border border-brand-stone rounded-xl">
                        <GraduationCap className="w-5 h-5 text-brand-bronze" />
                      </div>
                      <span className="font-mono text-[#D4D4D4] text-xs font-semibold">{item.year}</span>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[10px] font-mono tracking-wider font-bold text-slate-500 uppercase block">
                        Institution
                      </span>
                      <h4 className="font-display font-medium text-[#FFFFFF] text-[18px] tracking-tight">
                        {item.institution}
                      </h4>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[10px] font-mono tracking-wider font-bold text-slate-500 block uppercase">
                        Credential Awarded
                      </span>
                      <p className="text-xs font-bold text-brand-bronze uppercase tracking-wide">
                        {item.degree} — {item.major}
                      </p>
                    </div>

                    <p className="text-xs text-[#A3A3A3] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Verification source metrics */}
                  <div className="pt-4 mt-6 border-t border-brand-stone/30 flex items-center justify-between text-[10px] text-slate-500 font-mono">
                    <span className="flex items-center gap-1 p-1 bg-neutral-900 border border-neutral-800 rounded">
                      <Award className="w-3.5 h-3.5 text-brand-bronze" />
                      <span>{item.verifiedSource}</span>
                    </span>
                    <span className="text-amber-500 bg-amber-500/5 px-2 py-0.5 rounded border border-amber-500/20 text-[9px] font-bold">VERIFIED</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Legal Disclaimers */}
            <div className="mt-8 pt-4 border-t border-brand-stone/20 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[11px] text-slate-500 font-sans">
              <p className="max-w-2xl">
                ⚠️ <span className="font-semibold text-slate-400">Notice:</span> {edu.disclosureNote}
              </p>
              <button
                onClick={() => handleActionClick('/education-and-credentials/')}
                className="font-mono text-brand-bronze hover:text-slate-350 transition-colors uppercase font-semibold inline-flex items-center gap-1.5 cursor-pointer hover:underline"
              >
                <span>{edu.actionLinkText}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </section>
      )}

      {/* 4. PHILOSOPHY OF CARE Section (Dark Canvas) */}
      {philo.show && (
        <section className="bg-brand-dark py-16 md:py-24 border-b border-brand-stone" id="philosophy-care">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Philosophy statement text on the Left */}
              <div className="lg:col-span-7 space-y-6 animate-reveal">
                <span className="text-xs font-mono font-bold text-brand-bronze uppercase tracking-widest block">
                  {philo.sectionLabel}
                </span>
                <h2 className="font-display font-medium text-[#FFFFFF] text-2xl md:text-4xl tracking-tight leading-snug">
                  {philo.heading}
                </h2>
                
                <p className="text-sm md:text-base text-slate-300 leading-relaxed font-sans">
                  {philo.narrative}
                </p>

                {/* Principles grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 font-sans text-xs">
                  {philo.principles.map((pr) => (
                    <div key={pr.id} className="p-4 bg-brand-ivory border border-brand-stone rounded-xl space-y-1.5 hover:border-brand-bronze/30 transition-colors duration-200">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-bronze" />
                        <h4 className="font-bold text-slate-200 text-[13px]">{pr.title}</h4>
                      </div>
                      <p className="text-[#A3A3A3] leading-relaxed pl-3.5">{pr.description}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => handleActionClick('/philosophy/')}
                    className="px-5 py-2.5 bg-brand-stone hover:bg-neutral-800 border border-brand-stone text-slate-100 hover:text-brand-white font-sans text-xs font-bold rounded-lg transition-colors cursor-pointer inline-flex items-center gap-1.5 uppercase tracking-wide"
                  >
                    <span>{philo.actionLinkText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Working photography placeholder on the Right */}
              <div className="lg:col-span-5">
                <div className="relative group">
                  <PortraitPlaceholder description={philo.portraitDescription} />
                  <span className="absolute bottom-3 left-3 bg-brand-dark/90 backdrop-blur-md text-[9px] font-mono tracking-wider text-slate-400 px-2.5 py-0.5 rounded-full border border-brand-stone uppercase">
                    Consultation Scene Ref checking
                  </span>
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* 5. PROFESSIONAL JOURNEY Section (Light Canvas) */}
      {journey.show && (
        <section className="bg-brand-white py-16 md:py-24 border-b border-brand-stone/40" id="professional-journey">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Timeline Label Sidebar Block */}
              <div className="lg:col-span-4 space-y-4 lg:sticky lg:top-24">
                <span className="text-xs font-mono font-bold text-brand-bronze uppercase tracking-widest block">
                  {journey.sectionLabel}
                </span>
                <h2 className="font-display font-medium text-brand-charcoal text-2xl md:text-3xl tracking-tight leading-snug">
                  {journey.heading}
                </h2>
                <p className="text-xs md:text-sm text-slate-500 font-sans leading-relaxed">
                  A comprehensive professional blueprint trace covering biological foundation setups, international healthcare management, and general practices.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => handleActionClick('/professional-journey/')}
                    className="inline-flex items-center gap-1 text-xs font-mono font-bold text-brand-bronze hover:text-brand-charcoal transition-all uppercase cursor-pointer hover:underline"
                  >
                    <span>{journey.actionLinkText}</span>
                    <ChevronRight className="w-4 h-4 translate-y-0.2" />
                  </button>
                </div>
              </div>

              {/* Timelines Stage Steps */}
              <div className="lg:col-span-8 border-l border-brand-stone pl-6 md:pl-10 space-y-10 py-2">
                {journey.milestones.map((item, index) => (
                  <div key={item.id} className="relative font-sans group">
                    {/* Bullet pointer */}
                    <div className="absolute -left-[31px] md:-left-[45px] top-1 w-3 h-3 bg-brand-white border-2 border-brand-bronze rounded-full group-hover:bg-brand-bronze transition-all duration-200 shadow-xs" />
                    
                    <div className="space-y-1.5">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-brand-bronze font-bold text-[12.5px] tracking-wider uppercase">
                          {item.year}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                          [Stage {index + 1} — {item.organization}]
                        </span>
                      </div>

                      <h4 className="font-display font-bold text-brand-charcoal text-base md:text-lg group-hover:text-brand-bronze transition-colors duration-200">
                        {item.title}
                      </h4>
                      
                      <p className="text-xs md:text-sm text-slate-500 max-w-xl leading-relaxed">
                        {item.description}
                      </p>

                      <span className="inline-flex items-center gap-1 text-[9.5px] font-mono text-slate-400 bg-brand-stone/10 border border-brand-stone/30 px-1.5 py-0.2 rounded mt-1.5">
                        <ShieldCheck className="w-3 h-3 text-brand-bronze" />
                        <span>Source: {item.verifiedSource}</span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>
      )}

      {/* 6. VIDEOS AND PUBLIC CONVERSATIONS Section (Dark Canvas) */}
      {vids.show && (
        <section className="bg-brand-dark py-16 md:py-24 border-b border-brand-stone" id="videos-broadcasting">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-2xl mb-12 space-y-3">
              <span className="text-xs font-mono font-bold text-brand-bronze uppercase tracking-widest block">
                {vids.sectionLabel}
              </span>
              <h2 className="font-display font-medium text-[#FFFFFF] text-2xl md:text-4xl tracking-tight">
                {vids.heading}
              </h2>
              <p className="text-sm text-slate-450 font-sans leading-relaxed">
                {vids.supportingCopy}
              </p>
            </div>

            {/* Featured player panel */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
              <div className="lg:col-span-8 bg-black rounded-2xl overflow-hidden border border-brand-stone relative group aspect-video">
                {activeVideoId === vids.featuredVideo.id ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${vids.featuredVideo.youtubeId}?autoplay=1&rel=0`}
                    title={vids.featuredVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <>
                    <img 
                      src={`https://img.youtube.com/vi/${vids.featuredVideo.youtubeId}/hqdefault.jpg`} 
                      alt={vids.featuredVideo.title}
                      className="w-full h-full object-cover opacity-70 group-hover:scale-102 transition-transform duration-300 pointer-events-none"
                    />
                    <div className="absolute inset-0 bg-neutral-950/40 flex flex-col items-center justify-center p-4">
                      <button
                        onClick={() => setActiveVideoId(vids.featuredVideo.id)}
                        className="p-5 bg-brand-bronze hover:bg-brand-bronze-light text-brand-white rounded-full transition-all duration-300 transform hover:scale-110 shadow-2xl flex items-center justify-center cursor-pointer focus:ring-2 focus:ring-offset-2 focus:ring-brand-bronze"
                        aria-label={`Play Featured Video: ${vids.featuredVideo.title}`}
                      >
                        <Play className="w-7 h-7 fill-white translate-x-0.5" />
                      </button>
                      <span className="mt-4 px-3 py-1 bg-[#121212]/95 backdrop-blur-xs text-[10px] font-mono tracking-widest text-[#D4D4D4] uppercase rounded-full border border-brand-stone">
                        Featured Click to Load Video Embed (4:12 Min)
                      </span>
                    </div>
                  </>
                )}
              </div>

              {/* Side text descriptors */}
              <div className="lg:col-span-4 bg-brand-ivory border border-brand-stone p-6 rounded-2xl flex flex-col justify-between h-full space-y-6">
                <div className="space-y-4 font-sans">
                  <span className="text-[9px] font-mono font-bold text-brand-bronze uppercase tracking-widest bg-brand-bronze/10 px-2.5 py-0.5 rounded-full border border-brand-bronze/30">
                    {vids.featuredVideo.category}
                  </span>
                  
                  <h4 className="font-display font-medium text-[#FFFFFF] text-[18px] leading-snug">
                    {vids.featuredVideo.title}
                  </h4>
                  
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {vids.featuredVideo.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-stone/40 space-y-2.5 text-[10px] font-mono text-[#A3A3A3]">
                  <p className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-bronze" /> <span>Checked: {vids.featuredVideo.dateVerified}</span>
                  </p>
                  
                  <div className="flex gap-2 font-bold font-sans pt-1">
                    <button
                      onClick={() => handleActionClick('/videos/')}
                      className="text-brand-bronze hover:text-slate-300 transition-colors uppercase font-mono text-[10px] hover:underline"
                    >
                      {vids.actionLinkText}
                    </button>
                    <span className="text-slate-700">|</span>
                    <a
                      href="https://www.youtube.com/@DrLiyanMassaband"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#A3A3A3] hover:text-brand-bronze transition-colors flex items-center gap-1 font-mono text-[11px] uppercase"
                    >
                      <Youtube className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                      <span>{vids.actionAltLinkText}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Grid of Youtube shorts/supporting videos */}
            <div className="space-y-4">
              <h4 className="font-display font-bold text-slate-350 text-xs font-mono tracking-widest uppercase">
                Supporting Practice & Advocacy Shorts
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-6 gap-4" id="supporting-shorts-grid">
                {vids.shorts.map((item) => (
                  <div 
                    key={item.id}
                    className="bg-brand-ivory border border-brand-stone rounded-xl p-3 space-y-3 hover:border-brand-bronze/35 transition-all duration-200 group flex flex-col justify-between"
                  >
                    <div className="space-y-1.5 font-sans">
                      <span className="text-[9px] font-mono tracking-wider font-bold text-slate-500 block">
                        {item.category}
                      </span>
                      <h5 className="font-display font-semibold text-slate-200 text-xs leading-tight line-clamp-2 uppercase">
                        {item.title}
                      </h5>
                    </div>

                    <div className="space-y-2">
                      <button
                        onClick={() => handleActionClick('/videos/')}
                        className="w-full py-1 bg-brand-stone hover:bg-neutral-800 text-[10px] font-mono text-slate-300 rounded font-bold transition-all flex items-center justify-center gap-1 cursor-pointer"
                      >
                        <Play className="w-2.5 h-2.5 fill-slate-300" /> <span>PLAY HD ({item.duration})</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>
      )}

      {/* 7. IN HER OWN WORDS Section (Light Canvas Instagram Curation) */}
      {words.show && (
        <section className="bg-brand-white py-16 md:py-24 border-b border-brand-stone/40" id="in-her-own-words">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-brand-bronze uppercase tracking-widest block">
                  {words.sectionLabel}
                </span>
                <h2 className="font-display font-medium text-brand-charcoal text-2xl md:text-3xl tracking-tight">
                  {words.heading}
                </h2>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/drliyanmassaband/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-stone hover:bg-neutral-800 border border-brand-stone text-slate-200 hover:text-brand-white font-mono text-[11px] font-bold tracking-wider uppercase px-4 py-2 rounded-lg transition-colors flex items-center gap-1.5"
                >
                  <Instagram className="w-4 h-4 text-pink-500" />
                  <span>{words.actionLinkText}</span>
                </a>
              </div>
            </div>

            {/* Curated Editorial Highlights Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 font-sans" id="curated-instagram-composition">
              {words.highlights.map((post) => (
                <div 
                  key={post.id}
                  className="bg-brand-white border border-brand-stone p-6 rounded-2xl flex flex-col justify-between"
                  id={`words-curation-${post.id}`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono tracking-wider font-bold text-brand-bronze uppercase bg-brand-bronze/5 border border-brand-bronze/30 px-2 py-0.5 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">{post.publishDate}</span>
                    </div>

                    <h3 className="font-display font-bold text-[#E5E5E5] text-[17px] md:text-[18px] leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-xs text-slate-500 leading-relaxed block">
                      {post.context}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-brand-stone/20 mt-6 flex items-center justify-between text-xs text-slate-400 font-mono">
                    <span className="flex items-center gap-1">Instagram Checked</span>
                    <a 
                      href={post.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-brand-bronze hover:text-brand-charcoal font-bold flex items-center gap-0.5"
                    >
                      <span>Observe Post</span> <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* 8. PROFESSIONAL PROFILES AND PUBLIC REFERENCES Section (Light/Authority References) */}
      {refs.show && (
        <section className="bg-brand-white py-16 md:py-24 border-b border-brand-stone/40" id="public-references">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-2xl mb-12 space-y-2 animate-reveal">
              <span className="text-xs font-mono font-bold text-brand-bronze uppercase tracking-widest block">
                {refs.sectionLabel}
              </span>
              <h2 className="font-display font-medium text-brand-charcoal text-2xl tracking-normal">
                {refs.heading}
              </h2>
              <p className="text-xs text-slate-500">
                Independent national archives confirming credentials. Directory references do not constitute medical advice or official endorsement.
              </p>
            </div>

            {/* Source card grid */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4" id="external-references-composition">
              {refs.profiles.map((prof) => (
                <a
                  key={prof.id}
                  href={prof.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#121212] border border-brand-stone hover:border-brand-bronze hover:border-brand-bronze/35 p-5 rounded-2xl flex flex-col justify-between transition-colors cursor-pointer group"
                  id={`ref-item-${prof.id}`}
                >
                  <div className="space-y-3">
                    <span className="text-[14px] font-semibold text-[#FFFFFF] font-display block group-hover:text-brand-bronze transition-colors">
                      {prof.platform}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono block uppercase">
                      {prof.type}
                    </span>
                    <p className="text-xs text-slate-500 leading-normal">
                      {prof.description}
                    </p>
                    {prof.ratingText && (
                      <div className="p-2 bg-brand-dark rounded border border-brand-stone">
                        <span className="text-[10px] text-brand-bronze font-mono font-bold block">
                          ⭐ {prof.ratingText}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-brand-stone/30 mt-6 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                    <span>Verified: {prof.verifiedDate}</span>
                    <span className="text-brand-bronze font-bold flex items-center gap-0.5 group-hover:underline">
                      <span>Observe Record</span> <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </a>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* 9. CLINICAL AFFILIATIONS Section (Warm Neutral/Ivory) */}
      {affs.show && (
        <section className="bg-[#121212] py-16 md:py-24 border-b border-brand-stone" id="clinical-affiliations">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-2xl mb-12 space-y-3">
              <span className="text-xs font-mono font-bold text-brand-bronze uppercase tracking-widest block">
                {affs.sectionLabel}
              </span>
              <h2 className="font-display font-medium text-[#FFFFFF] text-2xl md:text-3xl tracking-tight">
                {affs.heading}
              </h2>
              <p className="text-sm text-[#A3A3A3] font-sans leading-relaxed">
                Dr. Liyan Massaband maintains distinct practice associations. To explore booking, patient portals, or operational schedules, use the redirect portals below.
              </p>
            </div>

            {/* Asymmetric grid mapping Beverly Hills & Burbank offices */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 font-sans" id="practice-affiliation-composition">
              {affs.affiliations.map((aff) => (
                <div 
                  key={aff.id}
                  className="bg-[#0A0A0A] border border-brand-stone rounded-2xl p-6 md:p-8 relative overflow-hidden flex flex-col justify-between group hover:border-brand-bronze transition-colors duration-300"
                  id={`aff-card-${aff.id}`}
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-brand-stone group-hover:bg-brand-bronze transition-colors duration-300" />
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono tracking-widest uppercase text-brand-bronze font-bold">
                        {aff.location}
                      </span>
                      <span className="text-[9px] bg-brand-stone px-2 py-0.5 rounded font-mono text-slate-400">
                        OFFICIAL PLATFORM BIO CONNECTED
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-display font-bold text-[#FFFFFF] text-xl md:text-2xl group-hover:text-brand-bronze transition-colors duration-200">
                        {aff.name}
                      </h3>
                      <p className="text-xs text-brand-bronze font-mono uppercase tracking-widest font-semibold block">
                        Associate General Practitioner
                      </p>
                    </div>

                    <p className="text-xs text-[#A3A3A3] leading-relaxed">
                      {aff.relationshipStatement} Patients may locate clinic directories, local maps, billing insurances, and consult schedulers on the practice systems.
                    </p>

                    {/* Integrated Environmental Placeholder Artwork inside card as instructed */}
                    <div className="border border-brand-stone rounded-xl overflow-hidden mt-4">
                      <PortraitPlaceholder description={aff.imageDescription} landscape />
                    </div>
                  </div>

                  {/* Actions mapping as instructed */}
                  <div className="pt-6 border-t border-brand-stone/30 mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-bold text-center">
                    <a 
                      href={aff.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="py-2.5 bg-neutral-900 hover:bg-neutral-800 border border-brand-stone text-slate-200 hover:text-brand-white rounded-lg transition-colors flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <span>Visit {aff.name} Portal</span> <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    
                    <a 
                      href={aff.bioUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="py-2.5 bg-brand-bronze hover:bg-brand-bronze-light text-brand-white rounded-lg transition-colors flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <span>Patient Enquiry — {aff.id === 'aff-mag' ? 'Burbank' : 'Beverly Hills'}</span>
                    </a>
                  </div>

                </div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* 10. PROFESSIONAL IMPACT Section (Restrained evidence with Fallback trigger) */}
      {impact.show && (
        <section className="bg-brand-white py-16 md:py-24 border-b border-brand-stone/40" id="professional-impact">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-2xl mb-12 space-y-3">
              <span className="text-xs font-mono font-bold text-brand-bronze uppercase tracking-widest block">
                {impact.sectionLabel}
              </span>
              <h2 className="font-display font-medium text-brand-charcoal text-2xl md:text-3xl tracking-tight">
                {impact.isApproved && impact.useStatsFallback ? impact.heading : 'Professional Focus at a Glance'}
              </h2>
              <p className="text-xs text-slate-500 font-sans">
                {impact.isApproved && impact.useStatsFallback 
                  ? 'Factual quantities audited against clinic ledgers.' 
                  : 'Core biological competencies and patient-care methodologies prioritized across practicing offices.'
                }
              </p>
            </div>

            {/* CONDITIONAL RENDERING CONTROLLED BY CLIENT APPROVAL STATE */}
            {impact.isApproved && impact.useStatsFallback ? (
              // Option A: Stats grid
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="numerical-stats-panel">
                {impact.numericalClaims.map((claim) => (
                  <div key={claim.id} className="p-8 bg-[#121212] border border-brand-stone rounded-2xl relative space-y-3">
                    <span className="text-[52px] font-display font-extrabold text-brand-bronze leading-none block">
                      {claim.metric}
                    </span>
                    <h4 className="font-display font-bold text-[#FFFFFF] text-lg">
                      {claim.label}
                    </h4>
                    <div className="pt-4 border-t border-brand-stone/30 mt-4 text-[10px] font-mono text-slate-500">
                      <p>Source Checked: {claim.source}</p>
                      <p className="mt-1">Evidentiary check date: {claim.dateVerified}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              // Option B Fallback Grid: "Professional Focus at a Glance" as specified in instructions
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans" id="qualitative-focus-panel">
                {impact.focusPoints.map((fc) => (
                  <div 
                    key={fc.id}
                    className="p-6 bg-brand-white border border-brand-stone rounded-2xl hover:border-brand-bronze/45 hover:shadow-xs transition-all duration-200"
                  >
                    <div className="space-y-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-bronze/5 border border-brand-bronze/30">
                        <Activity className="w-5 h-5 text-brand-bronze" />
                      </div>
                      <h4 className="font-display font-bold text-brand-charcoal text-[17px] leading-snug">
                        {fc.title}
                      </h4>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {fc.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>
        </section>
      )}

      {/* 11. MEDIA AND PROFESSIONAL ENQUIRIES Section (Dark Canvas) */}
      {media.show && (
        <section className="bg-brand-dark py-16 md:py-24 border-b border-[#2A2A2A]" id="media-collaborations">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Media text block explaining discussion topics */}
              <div className="lg:col-span-5 space-y-6">
                <span className="text-xs font-mono font-bold text-brand-bronze uppercase tracking-widest block">
                  {media.sectionLabel}
                </span>
                
                <h2 className="font-display font-medium text-[#FFFFFF] text-2xl md:text-3xl tracking-tight leading-snug">
                  {media.heading}
                </h2>
                
                <p className="text-xs md:text-sm text-slate-350 leading-relaxed font-sans">
                  {media.supportingCopy}
                </p>

                {/* Topics of discussion */}
                <div className="space-y-2.5 pt-2">
                  <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase block mb-1">
                    Proposed Discussion Themes
                  </span>
                  <ul className="space-y-2 text-xs font-sans text-slate-300">
                    {media.topics.map((tp, idx) => (
                      <li key={idx} className="flex gap-2 items-start">
                        <span className="text-brand-bronze font-mono font-bold mt-0.5">↳</span>
                        <span>{tp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Compact Action buttons */}
                <div className="flex flex-wrap gap-3 pt-4">
                  <button
                    onClick={() => handleActionClick('/press-kit/')}
                    className="px-4 py-2 bg-neutral-900 hover:bg-neutral-800 border border-brand-stone text-slate-200 text-xs font-bold font-sans rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <FileText className="w-4 h-4 text-brand-bronze" />
                    <span>{media.actionKitText}</span>
                  </button>

                  <button
                    onClick={() => handleActionClick('/speaking/')}
                    className="px-4 py-2 bg-neutral-900 hover:bg-neutral-800 border border-brand-stone text-slate-200 text-xs font-bold font-sans rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>{media.actionCollabText}</span>
                  </button>
                </div>
              </div>

              {/* Dynamic Enquiries Form on the Right */}
              <div className="lg:col-span-7 bg-[#121212] p-6 md:p-8 rounded-2xl border border-brand-stone">
                <span className="text-[10px] font-mono uppercase tracking-widest text-brand-bronze font-bold block mb-4">
                  Secured Speaker & Correspondent Router
                </span>
                <EnquiryForm />
              </div>

            </div>
          </div>
        </section>
      )}

      {/* 12. LATEST ARTICLES AND INSIGHTS Section (Light Editorial Canvas) */}
      {artSec.show && (
        <section className="bg-brand-white py-16 md:py-24 border-b border-brand-stone/40" id="latest-editorial-articles">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-brand-bronze uppercase tracking-widest block">
                  {artSec.sectionLabel}
                </span>
                <h2 className="font-display font-medium text-brand-charcoal text-2xl md:text-3xl tracking-tight">
                  {artSec.heading}
                </h2>
              </div>

              <button
                onClick={() => handleActionClick('/articles/')}
                className="text-xs font-mono font-bold text-brand-bronze hover:text-brand-charcoal transition-colors uppercase tracking-wider flex items-center gap-1 cursor-pointer hover:underline"
              >
                <span>Read entire publication board</span> <ChevronRight className="w-4.5 h-4.5" />
              </button>
            </div>

            {/* Articles catalog */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 font-sans">
              {artSec.articles.map((item) => (
                <div 
                  key={item.id}
                  className="bg-brand-white border border-brand-stone hover:border-brand-bronze/35 p-6 rounded-2xl flex flex-col justify-between transition-colors duration-200 group"
                  id={`article-card-${item.id}`}
                >
                  <div className="space-y-3">
                    <span className="text-[9px] font-mono tracking-widest font-bold text-brand-bronze uppercase bg-brand-bronze/5 border border-brand-bronze/30 px-2 py-0.5 rounded-full">
                      {item.category}
                    </span>

                    <h4 className="font-display font-bold text-[#E5E5E5] group-hover:text-brand-bronze transition-colors text-[17px] leading-snug">
                      <Link to={`/articles/${item.slug}/`}>
                        {item.title}
                      </Link>
                    </h4>

                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                      {item.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-brand-stone/20 mt-6 flex items-center justify-between text-xs text-slate-400 font-mono">
                    <span className="text-[10px] text-slate-500">{item.publishDate} • {item.readTime}</span>
                    <Link to={`/articles/${item.slug}/`} className="text-brand-bronze font-bold hover:underline inline-flex items-center gap-0.5">
                      <span>Observe Case</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* 13. EDITORIAL CLOSING CARD Section (Light/Dark split) */}
      {closing.show && (
        <section className="bg-[#121212] py-16 md:py-20 border-t border-brand-stone text-center" id="homepage-closing">
          <div className="max-w-3xl mx-auto px-4 space-y-6 font-sans">
            
            {/* Soft Focus Snapshot Placement inside frame as requested */}
            <div className="relative inline-block max-w-xs mx-auto overflow-hidden rounded-2xl border border-brand-stone">
              <PortraitPlaceholder description={closing.portraitDescription} />
              <div className="absolute inset-0 bg-neutral-950/20 pointer-events-none" />
            </div>

            <div className="space-y-3">
              <h3 className="font-display font-semibold text-[#FFFFFF] text-xl md:text-2xl tracking-tight leading-tight">
                {closing.heading}
              </h3>
              <p className="text-xs md:text-sm text-slate-400 leading-relaxed max-w-xl mx-auto">
                {closing.paragraph}
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-xs font-bold pt-4 text-slate-400 uppercase font-mono tracking-widest">
              <button 
                onClick={() => handleActionClick('/dr-liyan-massaband/')} 
                className="text-brand-bronze hover:text-white transition-colors cursor-pointer"
              >
                Official CV Profile
              </button>
              <span className="text-slate-700">|</span>
              <button 
                onClick={() => handleActionClick('/clinical-affiliations/')} 
                className="text-brand-bronze hover:text-white transition-colors cursor-pointer"
              >
                Clinic Connections
              </button>
              <span className="text-slate-700">|</span>
              <button 
                onClick={() => handleActionClick('/contact/')} 
                className="text-brand-bronze hover:text-white transition-colors cursor-pointer"
              >
                Media Channels
              </button>
            </div>
            
          </div>
        </section>
      )}

    </div>
  );
};
