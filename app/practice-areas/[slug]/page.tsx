import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, MessageCircle, Scale } from "lucide-react";

import PageHero from "@/components/shared/PageHero";
import { practiceAreas } from "@/data/practice-areas";
import { getWhatsAppUrl } from "@/lib/whatsapp";

type PracticePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return practiceAreas.map((area) => ({
    slug: area.slug,
  }));
}

export async function generateMetadata({
  params,
}: PracticePageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = practiceAreas.find((item) => item.slug === slug);

  if (!area) {
    return {
      title: "Practice Area Not Found",
    };
  }

  return {
    title: area.title,
    description: area.shortDescription,
  };
}

export default async function PracticeAreaPage({ params }: PracticePageProps) {
  const { slug } = await params;

  const area = practiceAreas.find((item) => item.slug === slug);

  if (!area) {
    notFound();
  }

  const relatedAreas = practiceAreas
    .filter((item) => item.slug !== area.slug)
    .slice(0, 3);

  const whatsappMessage = `Hello Jefwah & Associates Advocates. I would like to enquire about your ${area.title} services.`;

  return (
    <>
      <PageHero
        eyebrow="Our Practice Areas"
        title={area.title}
        description={area.shortDescription}
        breadcrumbs={[
          { label: "Practice Areas", href: "/practice-areas" },
          { label: area.title },
        ]}
      />

      {/* Service introduction */}
      <section className="section-padding bg-white">
        <div className="container-main grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="gold-line" />
              <span className="eyebrow">Understanding Your Matter</span>
            </div>

            <h2 className="font-display text-4xl leading-tight text-navy sm:text-5xl">
              Legal guidance informed by your circumstances.
            </h2>

            <div className="mt-8 space-y-5 text-sm leading-8 text-foreground/70">
              <p>{area.description}</p>

              <p>
                Every legal matter has its own circumstances, requirements and
                considerations. Understanding those details is an important
                starting point in determining the appropriate legal approach.
              </p>

              <p>
                We encourage prospective clients to contact the firm to discuss
                their particular matter and establish the nature of the
                assistance they require.
              </p>
            </div>
          </div>

          <aside className="h-fit border border-border bg-ivory p-7 sm:p-9">
            <div className="flex h-12 w-12 items-center justify-center bg-navy text-gold-light">
              <Scale size={23} strokeWidth={1.5} />
            </div>

            <h3 className="mt-7 font-display text-3xl text-navy">
              Discuss your legal matter.
            </h3>

            <p className="mt-4 text-sm leading-7 text-muted">
              Contact our team with a brief description of your legal
              requirements. We can discuss your enquiry and the next appropriate
              steps.
            </p>

            <Link
              href={`/contact?service=${area.slug}`}
              className="mt-8 flex min-h-13 items-center justify-center gap-3 bg-navy px-5 py-4 text-xs font-bold tracking-wide text-white transition-colors hover:bg-gold hover:text-navy-dark"
            >
              Make an Enquiry
              <ArrowRight size={16} />
            </Link>

            <a
              href={getWhatsAppUrl(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex min-h-13 items-center justify-center gap-3 border border-navy/20 px-5 py-4 text-xs font-semibold text-navy transition-colors hover:border-gold hover:text-gold"
            >
              <MessageCircle size={16} />
              WhatsApp Our Team
            </a>
          </aside>
        </div>
      </section>

      {/* Related services */}
      <section className="section-padding bg-ivory">
        <div className="container-main">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="eyebrow">Explore Further</span>

              <h2 className="mt-5 font-display text-4xl text-navy sm:text-5xl">
                Other practice areas.
              </h2>
            </div>

            <Link
              href="/practice-areas"
              className="inline-flex items-center gap-2 text-xs font-bold tracking-wide text-navy transition-colors hover:text-gold"
            >
              ALL SERVICES
              <ArrowUpRight size={15} />
            </Link>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {relatedAreas.map((related) => (
              <Link
                key={related.slug}
                href={`/practice-areas/${related.slug}`}
                className="group flex items-center justify-between border border-border bg-white p-6 transition-colors hover:border-gold/60"
              >
                <span className="pr-4 font-display text-xl text-navy transition-colors group-hover:text-gold">
                  {related.title}
                </span>

                <ArrowUpRight
                  size={17}
                  className="shrink-0 text-gold transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
