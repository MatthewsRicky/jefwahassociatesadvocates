import Link from "next/link";
import { MapPin, Mail, Phone, ArrowUpRight } from "lucide-react";

import { siteConfig, navigation, contactPhones } from "@/data/site";
import { practiceAreas } from "@/data/practice-areas";
import FirmMonogram from "@/components/shared/FirmMonogram";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function SiteFooter() {
const currentYear = 2026;

  return (
    <footer className="bg-navy-dark text-white">
      {/* Main footer */}
      <div className="container-main py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          {/* Firm identity */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <FirmMonogram size="lg" />

              <div>
                <span className="block font-display text-xl font-semibold text-white">
                  Jefwah & Associates
                </span>
                <span className="mt-1 block text-[10px] tracking-[0.2em] text-gold-light uppercase">
                  Advocates
                </span>
              </div>
            </Link>

            <p className="mt-7 max-w-sm text-sm leading-7 text-white/60">
              Providing professional legal services and considered legal
              guidance to individuals, businesses and organisations.
            </p>

            <p className="mt-6 font-display text-lg italic text-gold-light">
              {siteConfig.motto.latin}
            </p>

            <p className="mt-1 text-xs text-white/40">
              {siteConfig.motto.translation}
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h3 className="mb-6 text-[11px] font-semibold tracking-[0.16em] text-gold-light uppercase">
              Explore
            </h3>

            <ul className="space-y-4">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 transition-colors hover:text-gold-light"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice areas */}
          <div className="lg:col-span-3">
            <h3 className="mb-6 text-[11px] font-semibold tracking-[0.16em] text-gold-light uppercase">
              Practice Areas
            </h3>

            <ul className="space-y-4">
              {practiceAreas.slice(0, 7).map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/practice-areas/${area.slug}`}
                    className="text-sm text-white/60 transition-colors hover:text-gold-light"
                  >
                    {area.title}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="/practice-areas"
              className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-gold-light transition-colors hover:text-white"
            >
              All Practice Areas
              <ArrowUpRight size={14} />
            </Link>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="mb-6 text-[11px] font-semibold tracking-[0.16em] text-gold-light uppercase">
              Get in Touch
            </h3>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <MapPin size={17} className="mt-1 shrink-0 text-gold" />
                <p className="text-sm leading-6 text-white/60">
                  {siteConfig.address.full}
                </p>
              </div>

              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-gold-light"
              >
                <Mail size={16} className="shrink-0 text-gold" />
                {siteConfig.email}
              </a>

              <div className="space-y-4">
                {contactPhones.map((person) => (
                  <a
                    key={person.name}
                    href={person.href}
                    className="flex items-start gap-3 text-sm text-white/60 transition-colors hover:text-gold-light"
                  >
                    <Phone size={16} className="mt-0.5 shrink-0 text-gold" />
                    <span>
                      <span className="block text-white/80">{person.name}</span>
                      <span className="mt-1 block text-xs">
                        {person.number}
                      </span>
                    </span>
                  </a>
                ))}
              </div>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-gold/50 px-4 py-3 text-xs font-semibold text-gold-light transition-colors hover:bg-gold hover:text-navy-dark"
              >
                Contact Us on WhatsApp
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="container-main flex flex-col gap-3 py-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>

          <p>Professionalism. Integrity. Advocacy.</p>
        </div>
      </div>
    </footer>
  );
}
