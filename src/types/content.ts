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

export type ToolCategory = 'design' | 'dev' | 'data';

export interface Tool {
  name: string;
  category: ToolCategory;
  iconName?: string;
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
  portraitAlt: string;
  resumeUrl: string;
  socials: SocialLinks;
}

export interface PortfolioData {
  profile: Profile;
  tools: Tool[];
  experiences: ExperienceRecord[];
  projects: ProjectRecord[];
}
