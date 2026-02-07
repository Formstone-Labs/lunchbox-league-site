import Link from "next/link";

function LunchboxLogo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Cape flowing behind lunchbox */}
      <path
        d="M10 20c-3 4-5 12-4 20 3-4 6-5 9-4"
        fill="var(--ll-coral)"
        opacity="0.75"
      />
      <path
        d="M38 20c3 4 5 12 4 20-3-4-6-5-9-4"
        fill="var(--ll-coral)"
        opacity="0.6"
      />
      {/* Handle */}
      <path
        d="M16 18C16 10 20 6 24 6C28 6 32 10 32 18"
        stroke="var(--ll-navy)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      {/* Lunchbox body — rounded like a shield */}
      <path
        d="M8 17h32v14c0 8-7 16-16 16S8 39 8 31V17Z"
        fill="var(--ll-amber)"
        stroke="var(--ll-navy)"
        strokeWidth="2.25"
        strokeLinejoin="round"
      />
      {/* Lid line */}
      <path
        d="M8 24h32"
        stroke="var(--ll-navy)"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.2"
      />
      {/* Clasp */}
      <rect
        x="20"
        y="15"
        width="8"
        height="6"
        rx="2"
        fill="var(--ll-cream)"
        stroke="var(--ll-navy)"
        strokeWidth="2"
      />
      {/* Star emblem on body */}
      <path
        d="M24 29l1.8 3.6 4 .6-2.9 2.8.7 4L24 38l-3.6 2 .7-4-2.9-2.8 4-.6Z"
        fill="var(--ll-cream)"
        opacity="0.9"
      />
    </svg>
  );
}

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md">
      <div
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3"
      >
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2.5">
          <div className="transition-transform duration-200 group-hover:rotate-[-4deg] group-hover:scale-105">
            <LunchboxLogo />
          </div>
          <span
            className="text-base font-semibold tracking-tight"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--ll-navy)",
            }}
          >
            Lunchbox League
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden items-center gap-1 md:flex">
          <Link
            href="#how-it-works"
            className="rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:bg-[var(--ll-amber-light)]"
            style={{ color: "var(--ll-navy)" }}
          >
            How It Works
          </Link>
          <Link
            href="#features"
            className="rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:bg-[var(--ll-amber-light)]"
            style={{ color: "var(--ll-navy)" }}
          >
            Features
          </Link>
          <Link
            href="#faq"
            className="rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:bg-[var(--ll-amber-light)]"
            style={{ color: "var(--ll-navy)" }}
          >
            FAQ
          </Link>
        </div>

        {/* CTA */}
        <Link href="#cta" className="ll-btn-primary text-sm">
          Join the League
        </Link>
      </div>

      {/* Warm accent line */}
      <div
        className="h-[2px] w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, var(--ll-amber) 20%, var(--ll-coral) 50%, var(--ll-amber) 80%, transparent 100%)",
          opacity: 0.35,
        }}
      />
    </nav>
  );
}
