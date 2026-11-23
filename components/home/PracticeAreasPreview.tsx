import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  ShieldCheck,
  Baby,
  FileText,
  Scale,
  Building2,
  BriefcaseBusiness,
} from "lucide-react";

import { practiceAreas } from "@/data/practice-areas";

const icons = {
  "shield-check": ShieldCheck,
  baby: Baby,
  "file-text": FileText,
  scale: Scale,
  "building-2": Building2,
  "briefcase-business": BriefcaseBusiness,
};

export default function PracticeAreasPreview() {
  const featuredAreas = practiceAreas.filter((area) => area.featured);

  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="gold-line" />
              <span className="eyebrow">What We Do</span>
            </div>

            <h2 className="text-balance font-display text-4xl leading-tight text-navy sm:text-5xl lg:text-[56px]">
              Legal services for the matters that matter.
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-muted">
              Our practice covers a broad range of legal matters, allowing
              clients to seek guidance across personal, commercial and
              property-related concerns.
            </p>
          </div>

          <Link
            href="/practice-areas"
            className="inline-flex shrink-0 items-center gap-3 text-xs font-bold tracking-wide text-navy transition-colors hover:text-gold"
          >
            VIEW ALL PRACTICE AREAS
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {featuredAreas.map((area, index) => {
            const Icon = icons[area.icon as keyof typeof icons] ?? Scale;

            return (
              <Link
                key={area.slug}
                href={`/practice-areas/${area.slug}`}
                className="group flex min-h-[270px] flex-col bg-white p-7 transition-colors duration-300 hover:bg-ivory sm:p-9"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center border border-gold/40 text-gold transition-colors group-hover:bg-navy group-hover:text-gold-light">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>

                  <span className="font-display text-xl text-gold/60">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-9 font-display text-2xl leading-snug text-navy transition-colors group-hover:text-gold">
                  {area.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted">
                  {area.shortDescription}
                </p>

                <span className="mt-auto flex items-center gap-2 pt-7 text-[10px] font-bold tracking-[0.14em] text-navy uppercase transition-colors group-hover:text-gold">
                  Explore Service
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </Link>
            );
          })}
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="/practice-areas"
            className="inline-flex items-center gap-3 border border-navy px-7 py-4 text-xs font-bold tracking-wide text-navy transition-colors hover:bg-navy hover:text-white"
          >
            Explore All 11 Practice Areas
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
