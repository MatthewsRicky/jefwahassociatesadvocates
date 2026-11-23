import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Scale,
  ShieldCheck,
  MessagesSquare,
  Handshake,
} from "lucide-react";

import PageHero from "@/components/shared/PageHero";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About the Firm",
  description:
    "Learn about Jefwah & Associates Advocates, our legal philosophy, professional approach and commitment to client-focused legal services in Kenya.",
};

const principles = [
  {
    title: "Integrity",
    description:
      "We recognise the importance of honesty, professional responsibility and ethical conduct in every aspect of legal practice.",
    icon: ShieldCheck,
  },
  {
    title: "Clear Communication",
    description:
      "We value open communication and aim to help clients understand their legal position, available options and the processes involved.",
    icon: MessagesSquare,
  },
  {
    title: "Practical Counsel",
    description:
      "We consider the circumstances of each matter and provide legal guidance directed towards practical and appropriate solutions.",
    icon: Handshake,
  },
  {
    title: "Professional Advocacy",
    description:
      "We approach legal representation with preparation, careful consideration and respect for the professional responsibilities of an advocate.",
    icon: Scale,
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the Firm"
        title="A legal practice built around people and purpose."
        description="Discover the philosophy, values and professional approach that inform the work of Jefwah & Associates Advocates."
        breadcrumbs={[{ label: "About" }]}
      />

      {/* Introduction */}
      <section className="section-padding bg-ivory">
        <div className="container-main grid gap-12 lg:grid-cols-2 lg:gap-24">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="gold-line" />
              <span className="eyebrow">Who We Are</span>
            </div>

            <h2 className="font-display text-4xl leading-tight text-navy sm:text-5xl">
              Understanding the law. Understanding the client.
            </h2>
          </div>

          <div className="space-y-6 text-sm leading-8 text-foreground/75">
            <p>
              Jefwah & Associates Advocates is a Kenyan legal practice providing
              legal services across a range of personal, commercial and
              professional matters.
            </p>

            <p>
              We understand that engaging legal counsel often comes at an
              important point in a person's life or the development of a
              business. Our approach therefore begins with understanding the
              client's circumstances and the legal issues involved.
            </p>

            <p>
              Through clear communication, careful analysis and professional
              advocacy, we seek to provide considered guidance throughout the
              legal process.
            </p>

            <p>
              Our practice encompasses litigation, property and conveyancing,
              corporate and commercial law, family matters and other areas of
              legal practice.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Our Philosophy</span>

            <h2 className="mt-6 font-display text-4xl leading-tight text-navy sm:text-5xl lg:text-6xl">
              {siteConfig.motto.latin}
            </h2>

            <div className="gold-line mx-auto mt-7" />

            <p className="mt-7 text-sm leading-8 text-muted sm:text-base">
              {siteConfig.motto.translation}
            </p>

            <p className="mt-5 text-sm leading-8 text-foreground/70">
              This principle reflects our appreciation of law as a discipline
              concerned not only with rules and procedures, but also with
              fairness, justice and the circumstances of those seeking legal
              assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-navy-dark text-white">
        <div className="container-main">
          <div className="max-w-2xl">
            <span className="eyebrow">Our Values</span>

            <h2 className="mt-6 font-display text-4xl leading-tight text-white sm:text-5xl">
              The principles that guide our work.
            </h2>

            <p className="mt-5 text-sm leading-8 text-white/60">
              Our professional approach is informed by a commitment to
              responsible legal practice and the interests of those we
              represent.
            </p>
          </div>

          <div className="mt-14 grid gap-px bg-white/15 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle, index) => {
              const Icon = principle.icon;

              return (
                <article
                  key={principle.title}
                  className="bg-navy-dark p-7 md:p-8"
                >
                  <span className="font-display text-lg text-gold/70">
                    0{index + 1}
                  </span>

                  <Icon
                    size={26}
                    strokeWidth={1.4}
                    className="mt-7 text-gold-light"
                  />

                  <h3 className="mt-6 font-display text-2xl text-white">
                    {principle.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/55">
                    {principle.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section-padding bg-ivory">
        <div className="container-main flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow">Work With Us</span>

            <h2 className="mt-5 font-display text-4xl leading-tight text-navy sm:text-5xl">
              Let's discuss how we can assist you.
            </h2>

            <p className="mt-4 text-sm leading-7 text-muted">
              Contact our team to discuss your legal requirements and the
              assistance you may need.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-3 bg-navy px-7 py-4 text-xs font-bold tracking-wide text-white transition-colors hover:bg-gold hover:text-navy-dark"
          >
            Contact the Firm
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
