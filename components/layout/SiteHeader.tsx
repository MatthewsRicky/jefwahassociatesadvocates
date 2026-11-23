"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, ChevronRight } from "lucide-react";
import { navigation, siteConfig, contactPhones } from "@/data/site";
import FirmMonogram from "@/components/shared/FirmMonogram";

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const primaryPhone = contactPhones[3];

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Utility bar */}
      <div className="hidden bg-navy-dark text-white md:block">
        <div className="container-main flex min-h-10 items-center justify-between text-[11px] tracking-wide">
          <p className="text-white/70">
            Professional Legal Services | Diani, Kenya
          </p>

          <div className="flex items-center gap-6">
            <a
              href={`mailto:${siteConfig.email}`}
              className="transition-colors hover:text-gold-light"
            >
              {siteConfig.email}
            </a>

            <a
              href={primaryPhone.href}
              className="flex items-center gap-2 transition-colors hover:text-gold-light"
            >
              <Phone size={12} />
              {primaryPhone.number}
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="border-b border-border bg-white/95 backdrop-blur-md">
        <div className="container-main flex h-[76px] items-center justify-between">
          {/* Brand */}
          <Link
            href="/"
            className="flex min-w-0 items-center gap-3"
            aria-label="Jefwah & Associates Advocates home"
            onClick={() => setMobileOpen(false)}
          >
            <FirmMonogram size="md" />

            <div className="min-w-0">
              <span className="block font-display text-lg leading-tight font-semibold text-navy sm:text-xl">
                Jefwah & Associates
              </span>
              <span className="mt-1 block text-[9px] tracking-[0.19em] text-muted uppercase sm:text-[10px]">
                Advocates
              </span>
            </div>
          </Link>

          {/* Desktop navigation */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-7 lg:flex"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative py-2 text-[12px] font-medium text-foreground/80 transition-colors hover:text-navy"
              >
                {item.label}
                <span className="absolute right-0 bottom-0 left-0 h-[2px] origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}

            <Link
              href="/contact"
              className="ml-2 inline-flex items-center gap-2 bg-navy px-5 py-3 text-[11px] font-semibold tracking-wide text-white transition-colors hover:bg-gold hover:text-navy-dark"
            >
              Make an Enquiry
              <ChevronRight size={14} />
            </Link>
          </nav>

          {/* Mobile menu toggle */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileOpen((open) => !open)}
            className="flex h-11 w-11 items-center justify-center border border-border text-navy transition-colors hover:border-gold lg:hidden"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile navigation */}
        <div
          id="mobile-navigation"
          className={`overflow-hidden border-t border-border bg-white transition-all duration-300 lg:hidden ${
            mobileOpen
              ? "max-h-[460px] opacity-100"
              : "max-h-0 border-transparent opacity-0"
          }`}
          aria-hidden={!mobileOpen}
        >
          <nav aria-label="Mobile navigation" className="container-main py-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                tabIndex={mobileOpen ? 0 : -1}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between border-b border-border py-4 text-sm font-medium text-navy transition-colors hover:text-gold"
              >
                {item.label}
                <ChevronRight size={15} className="text-gold" />
              </Link>
            ))}

            <Link
              href="/contact"
              tabIndex={mobileOpen ? 0 : -1}
              onClick={() => setMobileOpen(false)}
              className="mt-5 flex items-center justify-center gap-2 bg-navy px-5 py-4 text-sm font-semibold text-white transition-colors hover:bg-gold hover:text-navy-dark"
            >
              Make an Enquiry
              <ChevronRight size={16} />
            </Link>

            <a
              href={primaryPhone.href}
              className="mt-4 flex items-center justify-center gap-2 py-2 text-xs text-muted"
            >
              <Phone size={13} />
              {primaryPhone.number}
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
