import { siteConfig } from "@/data/site";

type FirmMonogramProps = {
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizes = {
  sm: "h-10 w-10 text-lg",
  md: "h-12 w-12 text-xl",
  lg: "h-16 w-16 text-2xl",
};

export default function FirmMonogram({
  size = "md",
  className = "",
}: FirmMonogramProps) {
  return (
    <div
      aria-label={`${siteConfig.name} logo`}
      role="img"
      className={`relative flex shrink-0 items-center justify-center border border-gold/70 bg-navy ${sizes[size]} ${className}`}
    >
      <span className="font-display font-semibold tracking-tight text-gold">
        {siteConfig.initials}
      </span>

      <span className="absolute inset-[3px] border border-gold/20" />
    </div>
  );
}
