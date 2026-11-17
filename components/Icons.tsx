import type { Entry } from "@/content/portfolio";

/* Simple original doodles, one per platform's job. Not the platforms' logos. */
export function EntryIcon({ icon }: { icon: Entry["icon"] }) {
  const common = {
    viewBox: "0 0 64 64",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 3,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  switch (icon) {
    case "badge":
      return (
        <svg {...common}>
          <circle cx="32" cy="27" r="16" />
          <path d="M32 18l2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2-4.5-4.4 6.2-.9z" fill="currentColor" stroke="none" />
          <path d="M23 41l-4 15 13-6 13 6-4-15" />
        </svg>
      );
    case "cards":
      return (
        <svg {...common}>
          <rect x="9" y="19" width="34" height="24" rx="4" transform="rotate(-10 26 31)" />
          <rect x="20" y="22" width="34" height="24" rx="4" fill="#fff" />
          <path d="M28 31h18M28 38h11" />
        </svg>
      );
    case "puzzle":
      return (
        <svg {...common}>
          <path d="M12 22h12a5 5 0 1110 0h12v12a5 5 0 100 10v10H34a5 5 0 10-10 0H12V44a5 5 0 110-10z" />
        </svg>
      );
    case "map":
      return (
        <svg {...common}>
          <path d="M8 16l16-6 16 6 16-6v38l-16 6-16-6-16 6z" />
          <path d="M24 10v38M40 16v38" />
          <path d="M14 36h4v-6h4" strokeDasharray="1 6" />
          <circle cx="48" cy="27" r="4" fill="currentColor" stroke="none" />
        </svg>
      );
    case "cube":
      return (
        <svg {...common}>
          <path d="M32 8l20 11v24L32 54 12 43V19z" />
          <path d="M12 19l20 11 20-11M32 30v24" />
          <circle cx="32" cy="19" r="2.5" fill="currentColor" stroke="none" />
        </svg>
      );
  }
}

/* Sticker doodles for the home page. White outline comes from CSS. */
export function CellSticker({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" aria-hidden>
      <path className="stk-outline" d="M60 8c26 0 50 16 52 46 2 30-22 58-52 58S6 90 8 56C10 26 34 8 60 8z" />
      <path d="M60 14c23 0 44 14 46 40 2 27-20 52-46 52S12 84 14 56C16 30 37 14 60 14z" fill="#bfe6cf" />
      <circle cx="54" cy="58" r="18" fill="#1c7a54" />
      <circle cx="49" cy="53" r="6" fill="#bfe6cf" />
      <ellipse cx="84" cy="44" rx="9" ry="5" fill="#f3a9cb" transform="rotate(-30 84 44)" />
      <ellipse cx="82" cy="78" rx="9" ry="5" fill="#f3a9cb" transform="rotate(25 82 78)" />
      <ellipse cx="34" cy="86" rx="8" ry="4.5" fill="#f3a9cb" transform="rotate(-15 34 86)" />
      <circle cx="32" cy="36" r="4" fill="#fff" />
      <circle cx="70" cy="28" r="3" fill="#fff" />
    </svg>
  );
}

export function LeafSticker({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" aria-hidden>
      <path className="stk-outline" d="M18 104C10 54 40 14 106 14c2 60-34 96-82 90z" />
      <path d="M24 98C18 56 44 22 100 20c0 52-32 82-76 78z" fill="#5fbf8f" />
      <path d="M26 96C46 70 66 48 94 28M48 72l-4-20M62 58l-2-18M52 72l22 2M66 56l20 0" stroke="#1c7a54" strokeWidth="4" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function DnaSticker({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 140" aria-hidden>
      <path className="stk-outline stk-outline-thin" d="M20 8c0 30 40 34 40 62s-40 32-40 62M60 8c0 30-40 34-40 62s40 32 40 62" fill="none" />
      <path d="M26 22h28M22 42h36M30 60h20M30 80h20M22 98h36M26 118h28" stroke="#f3a9cb" strokeWidth="5" strokeLinecap="round" />
      <path d="M20 8c0 30 40 34 40 62s-40 32-40 62" stroke="#e23d94" strokeWidth="7" strokeLinecap="round" fill="none" />
      <path d="M60 8c0 30-40 34-40 62s40 32 40 62" stroke="#a81c68" strokeWidth="7" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function StarSticker({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" aria-hidden>
      <path className="stk-outline" d="M50 8l12 27 30 3-23 20 7 30-26-16-26 16 7-30L8 38l30-3z" />
      <path d="M50 16l10 23 25 2-19 17 6 25-22-13-22 13 6-25-19-17 25-2z" fill="#f47fb5" />
      <path d="M50 16l10 23 25 2-19 17-16-2z" fill="#f9a8cd" />
    </svg>
  );
}

export function CloudSticker({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 160 110" aria-hidden>
      <path className="stk-outline" d="M40 96c-18 0-30-12-30-27 0-13 9-23 21-26 2-19 17-33 36-33 13 0 25 7 31 18 4-2 8-3 13-3 18 0 32 14 32 32 0 21-15 39-36 39z" />
      <path d="M42 90c-15 0-26-9-26-22 0-11 8-20 20-22 1-17 14-30 31-30 12 0 23 7 28 18 4-3 9-4 14-4 15 0 27 12 27 27 0 18-13 33-31 33z" fill="#f9a8cd" />
      <path d="M32 62c0-8 5-14 12-16M58 26c6-4 14-4 20-1" stroke="#fff" strokeWidth="5" strokeLinecap="round" fill="none" />
    </svg>
  );
}
