import type { ContactPhone, NavigationItem } from "@/types";

export const siteConfig = {
  name: "Jefwah & Associates Advocates",
  shortName: "Jefwah & Associates",
  initials: "JA",
  tagline: "Professional Legal Services",
  description:
    "Professional legal services with expertise, clarity, and your advocacy at heart.",

  motto: {
    latin: "Ius est ars boni et aequi",
    translation: "Law is the art of the good and the fair.",
  },

  email: "jefwah.associates@gmail.com",

  address: {
    building: "Diani Shopping Centre",
    suite: "Suite U-EF",
    street: "Diani Beach Road",
    town: "Diani",
    postalAddress: "P.O. Box 82234-80100",
    city: "Mombasa",
    country: "Kenya",
    full: "Suite U-EF, Diani Shopping Centre, Diani Beach Road, Diani, Mombasa, Kenya",
  },

  // Confirm the firm's preferred WhatsApp number before enabling.
  whatsappNumber: "254701829820",

  responseTime: "Within 24 business hours",

  colors: {
    navy: "#09234D",
    navyDark: "#061831",
    navyLight: "#153764",
    gold: "#C49328",
    goldLight: "#D8B45D",
    ivory: "#F7F6F2",
  },
};

export const contactPhones: ContactPhone[] = [
  {
    name: "Samuel Jefwah",
    role: "Managing Partner",
    number: "+254715611580",
    href: "tel:+254715611580",
  },
  {
    name: "Amanda Ndeda",
    role: "Partner",
    number: "+254701694100",
    href: "tel:+254701694100",
  },
  {
    name: "Kennedy Biwot",
    role: "Partner",
    number: "+254726943544",
    href: "tel:+254726943544",
  },
  {
    name: "Prince Karisa",
    role: "Senior Associate Advocate",
    number: "+254701829820",
    href: "tel:+254701829820",
  },
];

export const navigation: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Practice Areas", href: "/practice-areas" },
  { label: "Our Team", href: "/our-team" },
  { label: "Contact", href: "/contact" },
];

