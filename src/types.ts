
import { ReactNode } from 'react';

export interface ServiceItem {
  title: string;
  icon: ReactNode;
  description: string;
  detailedDescription: string;
}

export interface AppLinks {
  main: string;
  ethos: string;
  booking: string;
  linkedin: string;
  facebook: string;
  instagram: string;
}

export interface AppData {
  name: string;
  title: string;
  company: string;
  license: string;
  tagline: string;
  hashtag: string;
  bio: string;
  phone: string;
  email: string;
  bannerUrl: string;
  links: AppLinks;
  services: ServiceItem[];
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
