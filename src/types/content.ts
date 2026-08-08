export type ProjectCategory = 'Graphic Design' | 'Dev Project';

export interface ProjectRecord {
  id: string;
  title: string;
  category: ProjectCategory;
  year: string;
  imageUrl: string;
  imageAlt: string;
  destinationUrl: string;
  accentColor: string;
  featured?: boolean;
  tags?: string[];
  description?: string;
}

export interface ExperienceRecord {
  id: string;
  role: string;
  organization: string;
  logoUrl: string;
  logoAlt: string;
  year: string;
  description?: string;
}

export interface EducationRecord {
  id: string;
  degree: string;
  institution: string;
  year: string;
  description?: string;
}

export interface CertificationRecord {
  id: string;
  title: string;
  issuer: string;
  year: string;
  credentialUrl?: string;
  description?: string;
}

export type ToolCategory = 'backend-db' | 'analytics' | 'design' | 'tools-vc' | 'ai' | 'design' | 'dev' | 'data';

export interface Tool {
  name: string;
  category: ToolCategory;
  iconName?: string;
  description?: string;
}

export interface SocialLinks {
  linkedin: string;
  github: string;
  instagram: string;
  email: string;
}

export interface Profile {
  name: string;
  role: string;
  bio: string;
  portraitUrl: string;
  portraitHoverUrl?: string;
  portraitAlt: string;
  resumeUrl: string;
  socials: SocialLinks;
}

export interface PortfolioData {
  profile: Profile;
  tools: Tool[];
  experiences: ExperienceRecord[];
  education: EducationRecord[];
  certifications: CertificationRecord[];
  projects: ProjectRecord[];
}

