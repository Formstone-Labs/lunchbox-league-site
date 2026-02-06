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
      {/* Handle arch */}
      <path
        d="M16 18C16 10 20 6 24 6C28 6 32 10 32 18"
        stroke="var(--ll-navy)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      {/* Lunchbox body — rounded rectangle */}
      <rect
        x="8"
        y="17"
        width="32"
        height="24"
        rx="6"
        fill="var(--ll-amber)"
        stroke="var(--ll-navy)"
        strokeWidth="2.25"
      />
      {/* Subtle body highlight line */}
      <path
        d="M12 24H36"
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
      {/* "LL" text inside body */}
      <text
        x="24"
        y="35"
        textAnchor="middle"
        fontFamily="serif"
        fontWeight="700"
        fontSize="11"
        fill="var(--ll-navy)"
        letterSpacing="0.5"
      >
        LL
      </text>
    </svg>
  );
}

export default function Nav() {
  return (
    <nav
      className="sticky top-0 z-50 border-b backdrop-blur-md"
      style={{
        borderColor: "var(--ll-border)",
        backgroundColor: "rgba(255, 248, 240, 0.85)",
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <LunchboxLogo />
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
            className="px-4 py-2 text-sm font-medium transition-colors"
            style={{ color: "var(--ll-navy)" }}
          >
            How It Works
          </Link>
          <Link
            href="#features"
            className="px-4 py-2 text-sm font-medium transition-colors"
            style={{ color: "var(--ll-navy)" }}
          >
            Features
          </Link>
          <Link
            href="#faq"
            className="px-4 py-2 text-sm font-medium transition-colors"
            style={{ color: "var(--ll-navy)" }}
          >
            FAQ
          </Link>
        </div>

        {/* CTA */}
        <Link href="#cta" className="ll-btn-primary text-sm">
          Join the Waitlist
        </Link>
      </div>
    </nav>
  );
}
