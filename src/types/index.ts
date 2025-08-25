export interface NavBar {
  logo: string;
  links: NavItems[];
}

export interface NavItems {
  name: string;
  link?: string;
}

export interface HeroSEction {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  callToAction: string;
}

export interface Testimonial {
  name: string;
  feedback: string;
  avatar?: string;
  rate?: number;
  date?: string;
}
