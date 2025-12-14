export interface Job {
  id: string;
  company: string;
  role: string;
  period: string;
  description?: string;
  highlights: string[];
}

export interface Education {
  school: string;
  degree: string;
  year: string;
  location: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}

export interface Skill {
  category: string;
  items: string[];
}