export type PracticeArea = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  featured?: boolean;
};

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  specialty: string;
  phone: string;
  biography: string;
  image?: string;
};

export type ContactPhone = {
  name: string;
  role: string;
  number: string;
  href: string;
};

export type NavigationItem = {
  label: string;
  href: string;
};
