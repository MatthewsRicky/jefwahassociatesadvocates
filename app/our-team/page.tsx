import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Phone, MessageCircle } from "lucide-react";

import PageHero from "@/components/shared/PageHero";
import { teamMembers } from "@/data/team";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the advocates at Jefwah & Associates Advocates and learn about their roles and areas of legal practice.",
};

export default function OurTeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our People"
        title="Meet the advocates behind our practice."
        description="Get to know the legal professionals at Jefwah & Associates Advocates and explore their respective areas of practice."
        breadcrumbs={[{ label: "Our Team" }]}
      />

      <section className="section-padding bg-ivory">
        <div className="container-main">
          <div className="max-w-2xl">
            <span className="eyebrow">The People Behind the Practice</span>

            <h2 className="mt-5 font-display text-4xl leading-tight text-navy sm:text-5xl">
              Experience and perspectives across legal practice.
            </h2>

            <p className="mt-5 text-sm leading-8 text-muted">
              Our team brings together different areas of legal practice to
              address the varied needs of individuals, businesses and
              organisations.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <article key={member.slug} className="group min-w-0">
                <div className="relative aspect-[4/5] overflow-hidden bg-[#E8E5DD]">
                  {member.image ? (
                    <div
                      role="img"
                      aria-label={`Portrait of ${member.name}`}
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{
                        backgroundImage: `url("${member.image}")`,
                      }}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center font-display text-6xl text-navy">
                      {member.name
                        .split(" ")
                        .map((part) => part[0])
                        .join("")}
                    </div>
                  )}

                  <span className="absolute top-4 left-4 bg-navy px-3 py-2 font-display text-sm text-gold-light">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="border-b border-border py-6">
                  <h3 className="font-display text-2xl text-navy">
                    {member.name}
                  </h3>

                  <p className="mt-2 text-[10px] font-bold tracking-[0.14em] text-gold uppercase">
                    {member.role}
                  </p>

                  <div className="my-5 h-px bg-border" />

                  <p className="text-xs leading-6 text-muted">
                    {member.specialty}
                  </p>

                  <p className="mt-5 text-sm leading-7 text-foreground/70">
                    {member.biography}
                  </p>

                  <div className="mt-6 flex flex-col gap-3">
                    <a
                      href={`tel:${member.phone}`}
                      className="inline-flex items-center gap-2 text-xs font-semibold text-navy transition-colors hover:text-gold"
                    >
                      <Phone size={14} />
                      {member.phone}
                    </a>

                    <a
                      href={getWhatsAppUrl(
                        `Hello ${member.name}, I would like to make a legal enquiry with Jefwah & Associates Advocates.`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-navy transition-colors hover:text-gold"
                    >
                      <MessageCircle size={14} />
                      Contact via WhatsApp
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-16 text-white">
        <div className="container-main flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="eyebrow">Speak With Our Team</span>

            <h2 className="mt-4 font-display text-3xl sm:text-4xl">
              Have a legal matter you'd like to discuss?
            </h2>

            <p className="mt-3 text-sm leading-7 text-white/60">
              Get in touch to discuss your requirements.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-3 border border-gold px-7 py-4 text-xs font-bold tracking-wide text-gold-light transition-colors hover:bg-gold hover:text-navy-dark"
          >
            Contact the Firm
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
