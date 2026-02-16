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

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--ll-cream)",
      }}
    >
      <div className="mx-auto max-w-6xl px-5 pt-14 pb-12 md:pt-20 md:pb-16">
        {/* Top section */}
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-start md:justify-between">
          {/* Logo + tagline */}
          <div>
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
            <p
              className="mt-3 max-w-xs text-sm leading-relaxed"
              style={{ color: "var(--ll-muted)" }}
            >
              Protecting tiny heroes, one lunchbox at a time.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-10 gap-y-4 text-sm">
            <Link
              href="mailto:hello@lunchboxleague.com"
              className="transition-colors hover:underline"
              style={{ color: "var(--ll-muted)" }}
            >
              Contact
            </Link>
            <Link
              href="#"
              className="transition-colors hover:underline"
              style={{ color: "var(--ll-muted)" }}
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="transition-colors hover:underline"
              style={{ color: "var(--ll-muted)" }}
            >
              Terms
            </Link>
          </div>
        </div>

        {/* Solidarity line */}
        <p
          className="mt-8 text-center text-sm italic"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--ll-navy)",
            opacity: 0.4,
          }}
        >
          Every kid deserves a league.
        </p>

        {/* Bottom: copyright */}
        <div
          className="mt-6 border-t pt-6 text-center text-xs"
          style={{
            borderColor: "var(--ll-border)",
            color: "var(--ll-muted)",
          }}
        >
          &copy; 2026 Lunchbox League
        </div>
      </div>
    </footer>
  );
}
