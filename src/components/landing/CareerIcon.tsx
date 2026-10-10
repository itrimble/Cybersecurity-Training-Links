import { Cloud, Cog, Target, Landmark, Briefcase, Laptop, ClipboardList, Search, Swords, Fingerprint, Siren, Bug, Shield, type LucideIcon } from "lucide-react";

// Drawn icons replace the emoji stored in data/careers.ts (one stroke, one weight).
const map: Record<string, LucideIcon> = {
  "☁️": Cloud, "⚙️": Cog, "🎯": Target, "🏛️": Landmark, "👔": Briefcase, "💻": Laptop,
  "📋": ClipboardList, "🔍": Search, "🔴": Swords, "🕵️": Fingerprint, "🚨": Siren, "🦠": Bug,
};

export function CareerIcon({ glyph, className = "h-5 w-5" }: { glyph?: string; className?: string }) {
  const Icon = (glyph && map[glyph]) || Shield;
  return <span className="icon-box"><Icon aria-hidden className={className} strokeWidth={1.75} /></span>;
}
