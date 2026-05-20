export interface NavItem {
  label: string;
  href: string;
}

export interface Project {
  number: number;
  year: string;
  title: string;
  categories: string;
  thumbnail: string;
  thumbnailAlt?: string;
  logo?: string;
  href: string;
}

export interface ArchiveImage {
  src: string;
  alt?: string;
  width: number;
  height: number;
}

export interface ContactInfo {
  phone: string;
  email: string;
  location: string;
}
