import type { Metadata } from "next";

import Hero from "@/components/home/Hero";
import Introduction from "@/components/home/Introduction";
import PracticeAreasPreview from "@/components/home/PracticeAreasPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import TeamPreview from "@/components/home/TeamPreview";
import ContactCTA from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Jefwah & Associates Advocates offers legal guidance in litigation, property law, corporate and commercial matters, family law and more. Based in Diani, Kenya.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Introduction />
      <PracticeAreasPreview />
      <WhyChooseUs />
      <TeamPreview />
      <ContactCTA />
    </>
  );
}
