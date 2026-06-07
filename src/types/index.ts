// Shared Type Definitions

// ── PERSONAL INFORMATION ───────────────────────────────────────────────────
export interface SocialLink {
  platform: string;
  url: string;
  label: string;
  iconName: string; // Used to dynamically import Lucide icons if needed
}

export interface HeroData {
  name: string;
  subtitle: string;
  roles: string[];
  tagline: string;
  ctaResume: string;
  ctaWork: string;
  socialLinks: SocialLink[];
}

export interface AboutData {
  bioParagraphs: string[];
  learningAreas: string[];
  personalInterests: string[];
}

// ── SKILLS ──────────────────────────────────────────────────────────────────
export interface SkillCategory {
  category: string;
  skills: string[];
}

// ── PROJECTS & FEATURED WORK ───────────────────────────────────────────────
export interface FeaturedWorkItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  architectureOverview: string;
  challengesSolved: string[];
  results: string[];
  tags: string[];
  github?: string;
  demo?: string;
  image?: string;
  status: 'completed' | 'ongoing';
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  status: 'Completed' | 'Ongoing';
  highlights: string[];
  duration?: string;
}

// ── RESEARCH INTERESTS ─────────────────────────────────────────────────────
export interface ResearchTopic {
  id: string;
  title: string;
  description: string;
}

export interface ResearchData {
  patentStatus: string;
  topics: ResearchTopic[];
}

// ── EDUCATION ───────────────────────────────────────────────────────────────
export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institute: string;
  location: string;
  startYear: number | string;
  endYear: number | string | 'Present';
  cgpa?: string;
  thesis?: string;
  courses: string[];
}

// ── ACHIEVEMENTS ────────────────────────────────────────────────────────────
export interface AchievementItem {
  id: string;
  title: string;
  issuer: string;
  year?: number | string;
  type: 'award' | 'certification' | 'scholarship' | 'honor' | 'patent' | 'research' | 'academic';
  description?: string;
  highlight?: string;
  status?: string;
  applicationNo?: string;
  publicationDate?: string;
  tags?: string[];
  link?: string;
  credentialId?: string;
}

// ── CONTACT ─────────────────────────────────────────────────────────────────
export interface ContactData {
  // Core identity
  name: string;
  position: string;
  department: string;
  institution: string;
  institutionShort: string;
  // Contact channels
  email: string;
  altEmail: string;
  github: string;
  githubHandle: string;
  linkedin: string;
  linkedinHandle: string;
  location: string;
  // Legacy social links (kept for compatibility)
  availability: 'open' | 'selective' | 'not-looking';
  availabilityText: string;
  socials: SocialLink[];
  // Rich profile data
  tagline: string;
  intro: string;
  professionalInterests: string[];
  openTo: string[];
}
