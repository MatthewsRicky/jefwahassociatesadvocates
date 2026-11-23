import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";
import { teamMembers } from "@/data/team";

export default function TeamPreview() {
  return (
    <section className="section-padding bg-ivory">
      <div className="container-main">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="gold-line" />
              <span className="eyebrow">Our People</span>
            </div>

            <h2 className="text-balance font-display text-4xl leading-tight text-navy sm:text-5xl lg:text-[56px]">
              Meet the team behind your representation.
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-muted">
              Our advocates bring different areas of legal practice together to
              serve the needs of our clients.
            </p>
          </div>

          <Link
            href="/our-team"
            className="inline-flex shrink-0 items-center gap-3 text-xs font-bold tracking-wide text-navy transition-colors hover:text-gold"
          >
            MEET THE FULL TEAM
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <article key={member.slug} className="group min-w-0">
              <Link
                href="/our-team"
                aria-label={`Meet ${member.name}`}
                className="relative block aspect-[4/5] overflow-hidden bg-[#E8E5DD]"
              >
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
                  <div className="absolute inset-0 flex items-center justify-center font-display text-5xl text-navy">
                    {member.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </div>
                )}

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-dark/85 to-transparent p-5 pt-16 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold text-white">
                    View Profile
                    <ArrowUpRight size={14} />
                  </span>
                </div>
              </Link>

              <div className="border-b border-border py-5">
                <h3 className="font-display text-2xl text-navy">
                  {member.name}
                </h3>

                <p className="mt-1 text-[10px] font-bold tracking-[0.12em] text-gold uppercase">
                  {member.role}
                </p>

                <p className="mt-3 min-h-10 text-xs leading-6 text-muted">
                  {member.specialty}
                </p>

                <a
                  href={`tel:${member.phone}`}
                  className="mt-4 inline-flex items-center gap-2 text-xs text-navy transition-colors hover:text-gold"
                >
                  <Phone size={13} />
                  {member.phone}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
