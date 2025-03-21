
export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description: string[];
  skills: string[];
  logo?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link?: string;
  github?: string;
}

export interface Skill {
  name: string;
  level: number; // 1-5
  category: 'technical' | 'soft' | 'language' | 'tool';
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string | null;
  location: string;
  description?: string;
  logo?: string;
}

export interface ContactInfo {
  email: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
  location?: string;
}

export interface PersonalInfo {
  fullName: string;
  title: string;
  bio: string;
  avatar?: string;
  contact: ContactInfo;
}
