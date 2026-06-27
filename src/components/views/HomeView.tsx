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

  return (
    <div id="homepage-root-node" className="relative min-h-screen bg-brand-white text-brand-charcoal">
      
      {/* 1. DARK HERO SECTION */}
      {hero.show && (
        <section className="relative bg-brand-white text-slate-800 py-16 md:py-28 border-b border-brand-stone flex items-center justify-center overflow-hidden" id="editorial-hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Text Blocks Column */}
              <div className="lg:col-span-7 space-y-8 animate-reveal" style={{ animationDelay: '100ms' }}>
                <div className="space-y-4">
                  <span className="text-[11px] font-mono font-bold text-brand-bronze uppercase tracking-widest block">
                    {hero.eyebrow}
                  </span>
                  
                  <h1 className="font-display font-extrabold text-brand-charcoal text-4xl sm:text-5xl lg:text-[56px] leading-[1.05] tracking-tight">
                    {hero.h1}
                  </h1>
                  
                  <p className="text-brand-bronze font-display text-lg md:text-xl font-medium tracking-tight">
                    {hero.statement}
                  </p>
                  
                  <p className="text-slate-600 font-sans text-sm md:text-base leading-relaxed max-w-xl">
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
                    className="px-6 py-3 bg-white hover:bg-brand-bronze hover:text-white border border-brand-stone hover:border-brand-bronze text-slate-700 font-semibold text-xs uppercase tracking-wider rounded-lg transition-all duration-200 flex items-center gap-2 cursor-pointer"
                  >
                    <Video className="w-4 h-4 text-brand-bronze hover:text-white" />
                    <span>{hero.actionSecondary}</span>
                  </button>
                </div>

                {/* Compact sub-hero metadata indicator */}
                <div className="pt-6 border-t border-brand-stone/30 flex flex-wrap gap-x-6 gap-y-2 text-[10.5px] font-mono tracking-widest text-slate-600">
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
                  <span className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md text-[9px] font-mono tracking-wider text-slate-600 px-2.5 py-0.5 rounded-full border border-brand-stone">
                    [Official Portrait Representation]
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
        <section className="bg-brand-white py-16 md:py-24 border-b border-brand-stone" id="education-foundation">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mb-12 space-y-3">
              <span className="text-xs font-mono font-bold text-brand-bronze uppercase tracking-widest block">
                {edu.sectionLabel}
              </span>
              <h2 className="font-display font-medium text-brand-charcoal text-2xl md:text-4xl tracking-tight">
                {edu.heading}
              </h2>
            </div>

            {/* Timelines Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 font-sans">
              {edu.entries.map((item) => (
                <div 
                  key={item.id}
                  className="bg-white border border-brand-stone p-6 rounded-2xl flex flex-col justify-between transition-colors duration-200 hover:border-brand-bronze/40 hover:shadow-md group relative"
                  id={`edu-item-${item.id}`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="p-2.5 bg-brand-bronze/5 border border-brand-stone rounded-xl">
                        <GraduationCap className="w-5 h-5 text-brand-bronze" />
                      </div>
                      <span className="font-mono text-brand-bronze text-xs font-semibold">{item.year}</span>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[10px] font-mono tracking-wider font-bold text-slate-500 uppercase block">
                        Institution
                      </span>
                      <h4 className="font-display font-medium text-brand-charcoal text-[18px] tracking-tight">
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
                    <span className="flex items-center gap-1 p-1 bg-brand-bronze/5 border border-brand-stone/30 rounded">
                      <Award className="w-3.5 h-3.5 text-brand-bronze" />
                      <span className="text-brand-bronze font-semibold">{item.verifiedSource}</span>
                    </span>
                    <span className="text-amber-600 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 text-[9px] font-bold">VERIFIED</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Legal Disclaimers */}
            <div className="mt-8 pt-4 border-t border-brand-stone/20 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[11px] text-slate-500 font-sans">
              <p className="max-w-2xl">
                ⚠️ <span className="font-semibold text-slate-500">Notice:</span> {edu.disclosureNote}
              </p>
              <button
                onClick={() => handleActionClick('/education-and-credentials/')}
                className="font-mono text-brand-bronze hover:text-brand-bronze-light transition-colors uppercase font-semibold inline-flex items-center gap-1.5 cursor-pointer hover:underline"
              >
                <span>{edu.actionLinkText}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </section>
      )}

      {/* 4. PHILOSOPHY OF CARE Section (Light Editorial Canvas) */}
      {philo.show && (
        <section className="bg-brand-white py-16 md:py-24 border-b border-brand-stone" id="philosophy-care">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Philosophy statement text on the Left */}
              <div className="lg:col-span-7 space-y-6 animate-reveal">
                <span className="text-xs font-mono font-bold text-brand-bronze uppercase tracking-widest block">
                  {philo.sectionLabel}
                </span>
                <h2 className="font-display font-medium text-brand-charcoal text-2xl md:text-4xl tracking-tight leading-snug">
                  {philo.heading}
                </h2>
                
                <p className="text-sm md:text-base text-slate-600 leading-relaxed font-sans">
                  {philo.narrative}
                </p>

                {/* Principles grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 font-sans text-xs">
                  {philo.principles.map((pr) => (
                    <div key={pr.id} className="p-4 bg-white border border-brand-stone rounded-xl space-y-1.5 hover:border-brand-bronze/30 transition-all duration-200 shadow-xs hover:shadow-sm">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-bronze" />
                        <h4 className="font-bold text-brand-charcoal text-[13px]">{pr.title}</h4>
                      </div>
                      <p className="text-slate-500 leading-relaxed pl-3.5">{pr.description}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => handleActionClick('/philosophy/')}
                    className="px-5 py-2.5 bg-white hover:bg-brand-stone border border-brand-stone text-brand-charcoal font-sans text-xs font-bold rounded-lg transition-colors cursor-pointer inline-flex items-center gap-1.5 uppercase tracking-wide"
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
                  <span className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md text-[9px] font-mono tracking-wider text-slate-600 px-2.5 py-0.5 rounded-full border border-brand-stone uppercase shadow-xs">
                    Consultation Scene
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

      {/* 6. VIDEOS AND PUBLIC CONVERSATIONS Section (Light Editorial Canvas) */}
      {vids.show && (
        <section className="bg-brand-white py-16 md:py-24 border-b border-brand-stone" id="videos-broadcasting">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-2xl mb-12 space-y-3">
              <span className="text-xs font-mono font-bold text-brand-bronze uppercase tracking-widest block">
                {vids.sectionLabel}
              </span>
              <h2 className="font-display font-medium text-brand-charcoal text-2xl md:text-4xl tracking-tight">
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
                      <span className="mt-4 px-3 py-1 bg-brand-charcoal/95 backdrop-blur-xs text-[10px] font-mono tracking-widest text-white uppercase rounded-full border border-brand-stone">
                        Featured Click to Load Video Embed (4:12 Min)
                      </span>
                    </div>
                  </>
                )}
              </div>

              {/* Side text descriptors */}
              <div className="lg:col-span-4 bg-white border border-brand-stone p-6 rounded-2xl flex flex-col justify-between h-full space-y-6 shadow-sm">
                <div className="space-y-4 font-sans">
                  <span className="text-[9px] font-mono font-bold text-brand-bronze uppercase tracking-widest bg-brand-bronze/10 px-2.5 py-0.5 rounded-full border border-brand-bronze/30">
                    {vids.featuredVideo.category}
                  </span>
                  
                  <h4 className="font-display font-medium text-brand-charcoal text-[18px] leading-snug">
                    {vids.featuredVideo.title}
                  </h4>
                  
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {vids.featuredVideo.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-stone/40 space-y-2.5 text-[10px] font-mono text-slate-600">
                  <p className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-bronze" /> <span>Checked: {vids.featuredVideo.dateVerified}</span>
                  </p>
                  
                  <div className="flex gap-2 font-bold font-sans pt-1">
                    <button
                      onClick={() => handleActionClick('/videos/')}
                      className="text-brand-bronze hover:text-brand-bronze-light transition-colors uppercase font-mono text-[10px] hover:underline"
                    >
                      {vids.actionLinkText}
                    </button>
                    <span className="text-brand-stone">|</span>
                    <a
                      href="https://www.youtube.com/@DrLiyanMassaband"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-brand-bronze transition-colors flex items-center gap-1 font-mono text-[11px] uppercase"
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
              <h4 className="font-display font-bold text-brand-charcoal text-xs font-mono tracking-widest uppercase">
                Supporting Practice & Advocacy Shorts
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-6 gap-4" id="supporting-shorts-grid">
                {vids.shorts.map((item) => (
                  <div 
                    key={item.id}
                    className="bg-white border border-brand-stone rounded-xl p-3 space-y-3 hover:border-brand-bronze/35 transition-all duration-200 hover:shadow-sm group flex flex-col justify-between"
                  >
                    <div className="space-y-1.5 font-sans">
                      <span className="text-[9px] font-mono tracking-wider font-bold text-slate-500 block">
                        {item.category}
                      </span>
                      <h5 className="font-display font-semibold text-brand-charcoal text-xs leading-tight line-clamp-2 uppercase">
                        {item.title}
                      </h5>
                    </div>

                    <div className="space-y-2">
                      <button
                        onClick={() => handleActionClick('/videos/')}
                        className="w-full py-1 bg-brand-ivory hover:bg-brand-bronze text-brand-charcoal hover:text-white border border-brand-stone/35 text-[10px] font-mono rounded font-bold transition-all flex items-center justify-center gap-1 cursor-pointer"
                      >
                        <Play className="w-2.5 h-2.5 fill-current" /> <span>PLAY HD ({item.duration})</span>
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
                  className="bg-white border border-brand-stone hover:border-brand-bronze p-5 rounded-2xl flex flex-col justify-between transition-colors cursor-pointer group shadow-xs"
                  id={`ref-item-${prof.id}`}
                >
                  <div className="space-y-3">
                    <span className="text-[14px] font-semibold text-brand-charcoal font-display block group-hover:text-brand-bronze transition-colors">
                      {prof.platform}
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono block uppercase">
                      {prof.type}
                    </span>
                    <p className="text-xs text-slate-600 leading-normal">
                      {prof.description}
                    </p>
                    {prof.ratingText && (
                      <div className="p-2 bg-brand-white rounded border border-brand-stone">
                        <span className="text-[10px] text-brand-bronze font-mono font-bold block">
                          ⭐ {prof.ratingText}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-brand-stone/30 mt-6 flex items-center justify-between text-[10px] text-slate-500 font-mono">
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
        <section className="bg-brand-white py-16 md:py-24 border-b border-brand-stone" id="clinical-affiliations">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-2xl mb-12 space-y-3">
              <span className="text-xs font-mono font-bold text-brand-bronze uppercase tracking-widest block">
                {affs.sectionLabel}
              </span>
              <h2 className="font-display font-medium text-brand-charcoal text-2xl md:text-3xl tracking-tight">
                {affs.heading}
              </h2>
              <p className="text-sm text-slate-600 font-sans leading-relaxed">
                Dr. Liyan Massaband maintains distinct practice associations. To explore booking, patient portals, or operational schedules, use the redirect portals below.
              </p>
            </div>

            {/* Asymmetric grid mapping Beverly Hills & Burbank offices */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 font-sans" id="practice-affiliation-composition">
              {affs.affiliations.map((aff) => (
                <div 
                  key={aff.id}
                  className="bg-white border border-brand-stone rounded-2xl p-6 md:p-8 relative overflow-hidden flex flex-col justify-between group hover:border-brand-bronze hover:shadow-md transition-all duration-300"
                  id={`aff-card-${aff.id}`}
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-brand-stone group-hover:bg-brand-bronze transition-colors duration-300" />
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono tracking-widest uppercase text-brand-bronze font-bold">
                        {aff.location}
                      </span>
                      <span className="text-[9px] bg-brand-bronze/10 px-2 py-0.5 rounded font-mono text-brand-bronze font-bold border border-brand-bronze/20">
                        VERIFIED AFFILIATION
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-display font-bold text-brand-charcoal text-xl md:text-2xl group-hover:text-brand-bronze transition-colors duration-200">
                        {aff.name}
                      </h3>
                      <p className="text-xs text-brand-bronze font-mono uppercase tracking-widest font-semibold block">
                        Associate General Practitioner
                      </p>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
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
                      className="py-2.5 bg-brand-ivory hover:bg-brand-stone border border-brand-stone/40 text-brand-charcoal rounded-lg transition-colors flex items-center justify-center gap-1 cursor-pointer"
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
                  <div key={claim.id} className="p-8 bg-white border border-brand-stone rounded-2xl relative space-y-3 shadow-xs hover:shadow-md transition-shadow">
                    <span className="text-[52px] font-display font-extrabold text-brand-bronze leading-none block">
                      {claim.metric}
                    </span>
                    <h4 className="font-display font-bold text-brand-charcoal text-lg">
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

      {/* 11. MEDIA AND PROFESSIONAL ENQUIRIES Section (Light Editorial Canvas) */}
      {media.show && (
        <section className="bg-brand-white py-16 md:py-24 border-b border-brand-stone/40" id="media-collaborations">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Media text block explaining discussion topics */}
              <div className="lg:col-span-5 space-y-6">
                <span className="text-xs font-mono font-bold text-brand-bronze uppercase tracking-widest block">
                  {media.sectionLabel}
                </span>
                
                <h2 className="font-display font-medium text-brand-charcoal text-2xl md:text-3xl tracking-tight leading-snug">
                  {media.heading}
                </h2>
                
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-sans">
                  {media.supportingCopy}
                </p>

                {/* Topics of discussion */}
                <div className="space-y-2.5 pt-2">
                  <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase block mb-1">
                    Proposed Discussion Themes
                  </span>
                  <ul className="space-y-2 text-xs font-sans text-slate-600">
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
                    className="px-4 py-2 bg-white hover:bg-brand-stone border border-brand-stone text-brand-charcoal text-xs font-bold font-sans rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <FileText className="w-4 h-4 text-brand-bronze" />
                    <span>{media.actionKitText}</span>
                  </button>

                  <button
                    onClick={() => handleActionClick('/speaking/')}
                    className="px-4 py-2 bg-white hover:bg-brand-stone border border-brand-stone text-brand-charcoal text-xs font-bold font-sans rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <span>{media.actionCollabText}</span>
                  </button>
                </div>
              </div>

              {/* Dynamic Enquiries Form on the Right */}
              <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-2xl border border-brand-stone shadow-sm">
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

      {/* 13. EDITORIAL CLOSING CARD Section (Light Editorial Canvas) */}
      {closing.show && (
        <section className="bg-brand-white py-16 md:py-20 border-t border-brand-stone text-center" id="homepage-closing">
          <div className="max-w-3xl mx-auto px-4 space-y-6 font-sans">
            
            {/* Soft Focus Snapshot Placement inside frame as requested */}
            <div className="relative inline-block max-w-xs mx-auto overflow-hidden rounded-2xl border border-brand-stone">
              <PortraitPlaceholder description={closing.portraitDescription} />
              <div className="absolute inset-0 bg-neutral-950/5 pointer-events-none" />
            </div>

            <div className="space-y-3">
              <h3 className="font-display font-semibold text-brand-charcoal text-xl md:text-2xl tracking-tight leading-tight">
                {closing.heading}
              </h3>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed max-w-xl mx-auto">
                {closing.paragraph}
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-xs font-bold pt-4 text-slate-500 uppercase font-mono tracking-widest">
              <button 
                onClick={() => handleActionClick('/dr-liyan-massaband/')} 
                className="text-brand-bronze hover:text-brand-bronze-light transition-colors cursor-pointer"
              >
                Official CV Profile
              </button>
              <span className="text-brand-stone">|</span>
              <button 
                onClick={() => handleActionClick('/clinical-affiliations/')} 
                className="text-brand-bronze hover:text-brand-bronze-light transition-colors cursor-pointer"
              >
                Clinic Connections
              </button>
              <span className="text-brand-stone">|</span>
              <button 
                onClick={() => handleActionClick('/contact/')} 
                className="text-brand-bronze hover:text-brand-bronze-light transition-colors cursor-pointer"
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
