import Link from "next/link";
import { ArrowRight, ArrowUpRight, Scale, ShieldCheck } from "lucide-react";

const heroImage =
  "https://cdn.b12.io/client_media/UMC7OFnX/9a7bd9ea-42da-11f1-a766-0242ac110002-xElYNIs8Ge-ChwQy_qVb2.jpg";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-dark">
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url("${heroImage}")` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy-dark/95 to-navy-dark/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 via-transparent to-transparent" />
      </div>

      <div className="container-main relative grid min-h-[620px] items-center gap-12 py-20 lg:min-h-[690px] lg:grid-cols-[1.2fr_0.8fr] lg:py-24">
        <div className="max-w-3xl">
          <div className="mb-8 flex items-center gap-3">
            <span className="gold-line" />
            <span className="eyebrow">Jefwah & Associates Advocates</span>
          </div>

          <h1 className="text-balance max-w-3xl font-display text-5xl leading-[1.06] font-medium tracking-tight text-white sm:text-6xl lg:text-[76px]">
            Clarity in law.
            <br />
            <span className="text-gold-light">Confidence in</span>
            <br />
            every decision.
          </h1>

          <p className="mt-8 max-w-xl text-base leading-8 text-white/70 sm:text-lg">
            Professional legal services with expertise, clarity, and your
            advocacy at heart. We provide considered legal guidance for
            individuals, businesses and organisations.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex min-h-14 items-center justify-center gap-3 bg-gold px-7 py-4 text-xs font-bold tracking-wide text-navy-dark transition-colors hover:bg-gold-light"
            >
              Discuss Your Legal Matter
              <ArrowRight size={16} />
            </Link>

            <Link
              href="/practice-areas"
              className="inline-flex min-h-14 items-center justify-center gap-3 border border-white/30 px-7 py-4 text-xs font-semibold tracking-wide text-white transition-colors hover:border-gold hover:text-gold-light"
            >
              Explore Our Services
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-5 border-t border-white/15 pt-7">
            <div className="flex items-center gap-3">
              <Scale size={21} className="text-gold" />
              <div>
                <p className="text-sm font-medium text-white">
                  Broad Legal Practice
                </p>
                <p className="mt-1 text-xs text-white/50">
                  Across multiple practice areas
                </p>
              </div>
            </div>

            <div className="hidden h-9 w-px bg-white/20 sm:block" />

            <div className="flex items-center gap-3">
              <ShieldCheck size={21} className="text-gold" />
              <div>
                <p className="text-sm font-medium text-white">
                  Client-Focused Counsel
                </p>
                <p className="mt-1 text-xs text-white/50">
                  Clarity and professional guidance
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative editorial detail */}
        <div className="hidden items-end justify-end lg:flex">
          <div className="max-w-[260px] border-l border-gold/70 pl-6 pb-3">
            <p className="font-display text-3xl italic text-white/90">
              Ius est ars boni et aequi
            </p>
            <p className="mt-3 text-[10px] leading-5 tracking-[0.16em] text-white/50 uppercase">
              Law is the art of the good and the fair.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute right-0 bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
    </section>
  );
}
