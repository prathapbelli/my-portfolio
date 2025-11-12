import { type ReactElement } from 'react';

export interface Profile {
  name: string;
  avatarColor: string;
}

export interface Skill {
  name: string;
  description: string;
  // Fix: Use the more specific ReactElement type for JSX components.
  icon: ReactElement;
  imageUrl?: string;
}

export type Page = 'home' | 'experience' | 'skills' | 'projects' | 'profile';

export interface Project {
  title: string;
  imageUrl: string;
  link?: string;
  page?: Page;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  points: string[];
}