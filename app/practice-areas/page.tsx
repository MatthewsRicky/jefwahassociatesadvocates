import type { Metadata } from "next";

import PageHero from "@/components/shared/PageHero";
import PracticeAreaCard from "@/components/practice-areas/PracticeAreaCard";
import { practiceAreas } from "@/data/practice-areas";

export const metadata: Metadata = {
  title: "Practice Areas",
  description:
    "Explore the legal services offered by Jefwah & Associates Advocates, including litigation, conveyancing, corporate law, family law and more.",
};

export default function PracticeAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Legal Services"
        title="Legal experience across a range of practice areas."
        description="Explore our areas of legal practice and discover how our team may assist with your personal, commercial and professional legal requirements."
        breadcrumbs={[{ label: "Practice Areas" }]}
      />

      <section className="section-padding bg-ivory">
        <div className="container-main">
          <div className="mb-12 max-w-2xl">
            <span className="eyebrow">How We Can Assist</span>

            <h2 className="mt-5 font-display text-4xl leading-tight text-navy sm:text-5xl">
              Find the legal support you need.
            </h2>

            <p className="mt-5 text-sm leading-8 text-muted">
              Our practice encompasses a variety of legal disciplines. Select an
              area below to learn more about the services and legal assistance
              available.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {practiceAreas.map((area, index) => (
              <PracticeAreaCard key={area.slug} area={area} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-16 text-white">
        <div className="container-main flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow">Need Assistance?</span>

            <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl">
              Not sure which practice area applies to your matter?
            </h2>

            <p className="mt-4 text-sm leading-7 text-white/60">
              Contact our team and briefly explain what you need assistance
              with.
            </p>
          </div>

          <a
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center border border-gold px-7 py-4 text-xs font-bold tracking-wide text-gold-light transition-colors hover:bg-gold hover:text-navy-dark"
          >
            Make an Enquiry
          </a>
        </div>
      </section>
    </>
  );
}
