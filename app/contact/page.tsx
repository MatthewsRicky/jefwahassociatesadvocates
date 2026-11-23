import { Suspense } from "react";
import Link from "next/link";

import EnquiryForm from "@/components/contact/EnquiryForm";
import PageHero from "@/components/shared/PageHero";
import { contactPhones, siteConfig } from "@/data/site";
import { practiceAreas } from "@/data/practice-areas";
import { getWhatsAppUrl } from "@/lib/whatsapp";

type ContactPageProps = {
  searchParams: Promise<{
    service?: string;
  }>;
};

function ContactPageFallback() {
  return (
    <div className="container-main section-padding">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <div className="h-8 w-48 animate-pulse rounded bg-gray-200" />
          <div className="mt-6 h-32 animate-pulse rounded bg-gray-100" />
        </div>

        <div className="h-[600px] animate-pulse rounded bg-gray-100" />
      </div>
    </div>
  );
}

export default function ContactPage({ searchParams }: ContactPageProps) {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Let's Discuss Your Legal Needs."
        description="Contact Jefwah & Associates Advocates to discuss your matter and the legal assistance you may require."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
        ]}
      />

      <Suspense fallback={<ContactPageFallback />}>
        <ContactPageContent searchParams={searchParams} />
      </Suspense>
    </>
  );
}

async function ContactPageContent({ searchParams }: ContactPageProps) {
  const { service } = await searchParams;

  const validServices = new Set([
    ...practiceAreas.map((area) => area.slug),
    "other",
  ]);

  const initialService = service && validServices.has(service) ? service : "";

  const principalContact = contactPhones[3];

  return (
    <section className="section-padding bg-ivory">
      <div className="container-main grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        {/* Contact information */}
        <div>
          <span className="eyebrow">Contact the Firm</span>

          <h2 className="mt-4 font-display text-3xl text-navy md:text-4xl">
            Professional guidance starts with a conversation.
          </h2>

          <p className="mt-6 leading-8 text-muted">
            Whether you need assistance with a personal legal matter, a business
            transaction or a dispute, our team is available to discuss your
            enquiry.
          </p>

          <div className="mt-10 space-y-7">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-navy">
                Office
              </h3>
              <p className="mt-2 text-muted">{siteConfig.address.full}</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-navy">
                Email
              </h3>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-2 inline-block text-muted transition-colors hover:text-gold"
              >
                {siteConfig.email}
              </a>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-navy">
                Contact
              </h3>

              {contactPhones.map((contact) => (
                <a
                  key={contact.number}
                  href={contact.href}
                  className="mt-2 block text-muted transition-colors hover:text-gold"
                >
                  {contact.name}: {contact.number}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <a
              href={getWhatsAppUrl(
                "Hello Jefwah & Associates Advocates. I would like to make a legal enquiry.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-gold"
            >
              Contact us on WhatsApp
            </a>
          </div>

          <div className="mt-10 border-t border-border pt-8">
            <h3 className="font-semibold text-navy">Find our office</h3>

            <p className="mt-2 text-sm leading-7 text-muted">
              {siteConfig.address.town}
            </p>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Diani+Shopping+Centre%2C+Diani+Beach+Road%2C+Kenya"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex text-sm font-semibold text-navy underline decoration-gold underline-offset-4"
            >
              Get directions
            </a>
          </div>
        </div>

        {/* Enquiry form */}
        <div className="bg-white p-6 shadow-sm md:p-10">
          <div className="mb-8">
            <span className="eyebrow">Send an Enquiry</span>
            <h2 className="mt-3 font-display text-2xl text-navy md:text-3xl">
              How can we assist you?
            </h2>
            <p className="mt-3 text-sm leading-7 text-muted">
              Complete the form below and our team will get back to you.
            </p>
          </div>

          <EnquiryForm initialService={initialService} />
        </div>
      </div>
    </section>
  );
}
