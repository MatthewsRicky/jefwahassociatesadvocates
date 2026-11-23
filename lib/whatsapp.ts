import { siteConfig } from "@/data/site";

export function getWhatsAppUrl(message?: string): string {
  const number = siteConfig.whatsappNumber;

  if (!number) return "#";

  const text =
    message ?? "Hello, I would like to enquire about your legal services.";

  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}
