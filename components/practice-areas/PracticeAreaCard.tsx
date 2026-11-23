import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Baby,
  FileText,
  Scale,
  Building2,
  BriefcaseBusiness,
  Users,
  Globe,
  HeartHandshake,
  Landmark,
  Network,
} from "lucide-react";

import type { PracticeArea } from "@/types";

const icons = {
  "shield-check": ShieldCheck,
  baby: Baby,
  "file-text": FileText,
  scale: Scale,
  "building-2": Building2,
  "briefcase-business": BriefcaseBusiness,
  users: Users,
  globe: Globe,
  "heart-handshake": HeartHandshake,
  landmark: Landmark,
  network: Network,
};

type PracticeAreaCardProps = {
  area: PracticeArea;
  index: number;
};

export default function PracticeAreaCard({
  area,
  index,
}: PracticeAreaCardProps) {
  const Icon = icons[area.icon as keyof typeof icons] ?? Scale;

  return (
    <Link
      href={`/practice-areas/${area.slug}`}
      className="group flex min-h-[285px] flex-col border border-border bg-white p-7 transition-all duration-300 hover:border-gold/60 hover:bg-ivory sm:p-8"
    >
      <div className="flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center border border-gold/40 text-gold transition-all duration-300 group-hover:border-navy group-hover:bg-navy group-hover:text-gold-light">
          <Icon size={22} strokeWidth={1.5} />
        </div>

        <span className="font-display text-xl text-gold/60">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <h2 className="mt-8 font-display text-2xl leading-snug text-navy transition-colors group-hover:text-gold">
        {area.title}
      </h2>

      <p className="mt-3 text-sm leading-7 text-muted">
        {area.shortDescription}
      </p>

      <span className="mt-auto flex items-center gap-2 pt-7 text-[10px] font-bold tracking-[0.14em] text-navy uppercase transition-colors group-hover:text-gold">
        Explore Service
        <ArrowRight
          size={14}
          className="transition-transform group-hover:translate-x-1"
        />
      </span>
    </Link>
  );
}
