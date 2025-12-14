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

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  mediaType: 'image' | 'video' | 'youtube' | 'vimeo';
  mediaUrl: string; // The full path to image/video OR the ID for youtube/vimeo
  thumbnailUrl?: string; // Optional: Path to a specific cover image for the card
  awards?: string[];
  link?: string;
  company?: string;
}