import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function Introduction() {
  return (
    <section className="section-padding bg-ivory">
      <div className="container-main grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-24">
        <div>
          <div className="mb-6 flex items-center gap-3">
            <span className="gold-line" />
            <span className="eyebrow">About the Firm</span>
          </div>

          <h2 className="text-balance max-w-xl text-4xl leading-[1.15] text-navy sm:text-5xl lg:text-[58px]">
            Legal counsel grounded in{" "}
            <span className="italic text-gold">clarity</span> and purpose.
          </h2>

          <div className="mt-8 gold-line" />
        </div>

        <div>
          <p className="text-base leading-8 text-foreground/75">
            Jefwah & Associates Advocates is a legal practice serving
            individuals, businesses and organisations in Kenya and beyond. We
            recognise that legal matters can be complex and sometimes stressful,
            and believe that good counsel begins with understanding the people
            behind each matter.
          </p>

          <p className="mt-5 text-base leading-8 text-foreground/75">
            Our approach centres on clear communication, thorough analysis and
            practical legal guidance shaped around each client's circumstances.
          </p>

          <div className="mt-9 border-l-2 border-gold py-2 pl-6">
            <p className="font-display text-2xl italic text-navy">
              {siteConfig.motto.latin}
            </p>
            <p className="mt-2 text-xs tracking-wide text-muted">
              {siteConfig.motto.translation}
            </p>
          </div>

          <Link
            href="/about"
            className="mt-9 inline-flex items-center gap-3 text-xs font-bold tracking-wide text-navy transition-colors hover:text-gold"
          >
            DISCOVER OUR FIRM
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
