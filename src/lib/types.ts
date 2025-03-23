
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
  highlight?: boolean;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link?: string;
  github?: string;
  featured?: boolean;
  completed?: boolean;
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
  gpa?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  link?: string;
  iconUrl?: string;
}

export interface Award {
  title: string;
  issuer: string;
  date: string;
  description?: string;
  highlight?: boolean;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
  website?: string;
  location?: string;
}

export interface PersonalInfo {
  fullName: string;
  title: string;
  bio: string;
  summary?: string[];
  avatar?: string;
  aboutImage?: string;
  contact: ContactInfo;
  achievements?: string[];
  availability?: 'available' | 'limited' | 'unavailable';
}

export interface FormSubmissionResponse {
  success: boolean;
  message: string;
}
