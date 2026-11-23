import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

type Breadcrumb = {
  label: string;
  href?: string;
};

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumbs: Breadcrumb[];
};

export default function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy-dark py-20 text-white md:py-28">
      <div className="absolute -right-24 -top-32 h-96 w-96 rounded-full border border-white/10" />
      <div className="absolute -right-12 -top-20 h-72 w-72 rounded-full border border-gold/20" />

      <div className="container-main relative">
        <nav
          aria-label="Breadcrumb"
          className="mb-12 flex flex-wrap items-center gap-2 text-xs text-white/50"
        >
          <Link
            href="/"
            aria-label="Home"
            className="transition-colors hover:text-gold-light"
          >
            <Home size={14} />
          </Link>

          {breadcrumbs.map((crumb, index) => (
            <span
              key={`${crumb.label}-${index}`}
              className="flex items-center gap-2"
            >
              <ChevronRight size={13} className="text-gold/70" />

              {crumb.href ? (
                <Link
                  href={crumb.href}
                  className="transition-colors hover:text-gold-light"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-white/80">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>

        <div className="max-w-3xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="gold-line" />
            <span className="eyebrow">{eyebrow}</span>
          </div>

          <h1 className="text-balance font-display text-5xl leading-[1.08] text-white sm:text-6xl lg:text-7xl">
            {title}
          </h1>

          <p className="mt-7 max-w-2xl text-sm leading-8 text-white/65 sm:text-base">
            {description}
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
    </section>
  );
}
