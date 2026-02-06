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

export default function Footer() {
  return (
    <footer
      className="border-t"
      style={{
        borderColor: "var(--ll-border)",
        backgroundColor: "var(--ll-cream)",
      }}
    >
      <div className="mx-auto max-w-6xl px-5 py-12 md:py-16">
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
              className="mt-3 max-w-xs text-sm"
              style={{ color: "var(--ll-muted)" }}
            >
              Allergy safety, made simple.
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

        {/* Bottom: copyright */}
        <div
          className="mt-10 border-t pt-6 text-center text-xs"
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
