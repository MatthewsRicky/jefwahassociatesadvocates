import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function WhatsAppButton() {
  return (
    <Link
      href={getWhatsAppUrl(
        "Hello Jefwah & Associates Advocates. I would like to make a legal enquiry.",
      )}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact Jefwah & Associates Advocates on WhatsApp"
      className="fixed right-5 bottom-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform duration-300 hover:scale-110 sm:right-7 sm:bottom-7"
    >
      <MessageCircle size={25} strokeWidth={2} />

      <span className="absolute right-[68px] hidden whitespace-nowrap rounded-sm bg-navy-dark px-3 py-2 text-xs font-medium text-white shadow-md md:block">
        Chat with our team
      </span>
    </Link>
  );
}
