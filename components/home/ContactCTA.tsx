import Link from "next/link";
import { ArrowRight, MessageCircle, Mail } from "lucide-react";

import { siteConfig } from "@/data/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 md:py-28">
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full border border-white/10" />
      <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full border border-gold/20" />

      <div className="container-main relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-7 flex items-center justify-center gap-3">
            <span className="gold-line" />
            <span className="eyebrow">Start a Conversation</span>
            <span className="gold-line" />
          </div>

          <h2 className="text-balance font-display text-4xl leading-tight text-white sm:text-5xl lg:text-[62px]">
            Every legal matter deserves a considered response.
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-sm leading-8 text-white/65 sm:text-base">
            Whether you need advice on a personal matter, property transaction
            or business concern, start a conversation with our team.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex min-h-14 items-center justify-center gap-3 bg-gold px-8 py-4 text-xs font-bold tracking-wide text-navy-dark transition-colors hover:bg-gold-light"
            >
              Make an Enquiry
              <ArrowRight size={16} />
            </Link>

            <a
              href={getWhatsAppUrl(
                "Hello Jefwah & Associates Advocates. I would like to discuss a legal matter.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 items-center justify-center gap-3 border border-white/30 px-8 py-4 text-xs font-semibold tracking-wide text-white transition-colors hover:border-gold hover:text-gold-light"
            >
              <MessageCircle size={17} />
              WhatsApp Our Team
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 border-t border-white/15 pt-7 text-xs text-white/55">
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-gold-light"
            >
              <Mail size={14} className="text-gold" />
              {siteConfig.email}
            </a>

            <span className="hidden h-4 w-px bg-white/20 sm:block" />

            <span>{siteConfig.address.town}, Kenya</span>
          </div>
        </div>
      </div>
    </section>
  );
}
