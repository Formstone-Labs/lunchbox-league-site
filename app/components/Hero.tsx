import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-5xl px-5">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
          {/* --- Text column --- */}
          <div className="max-w-2xl">
            <h1 className="ll-heading-xl animate-fade-up">
              Every parent of an allergic child knows{" "}
the feeling.
            </h1>

            <p className="animate-fade-up delay-100 mt-6 text-base leading-relaxed text-[var(--ll-muted)] md:text-lg md:leading-relaxed">
              The knot before drop-off. The worry at lunch. Lunchbox League is
              the app that helps you share your child&apos;s allergies, emergency
              plan, and safety info with everyone who needs it&nbsp;&mdash;
              clearly and instantly.
            </p>

            <div className="animate-fade-up delay-200 mt-10 flex flex-wrap gap-4">
              <Link href="#cta" className="ll-btn-primary">
                Join the Waitlist
              </Link>
              <Link href="#how-it-works" className="ll-btn-secondary">
                See how it works
              </Link>
            </div>
          </div>

          {/* --- Illustration column --- */}
          <div className="animate-fade-up delay-300 flex justify-center lg:justify-end">
            <LunchboxIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Inline SVG — warm, hand-drawn lunchbox with safety elements       */
/* ------------------------------------------------------------------ */

function LunchboxIllustration() {
  return (
    <svg
      width="380"
      height="340"
      viewBox="0 0 380 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-[300px] md:w-[380px]"
    >
      {/* --- soft shadow under lunchbox --- */}
      <ellipse cx="190" cy="305" rx="120" ry="14" fill="#E8E0D8" opacity="0.5" />

      {/* --- lunchbox body --- */}
      <rect
        x="65"
        y="120"
        width="250"
        height="160"
        rx="24"
        fill="#F5A623"
        stroke="#1B2D4F"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* lunchbox lid line */}
      <path
        d="M65 175 Q190 168 315 175"
        stroke="#1B2D4F"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* latch */}
      <rect
        x="170"
        y="163"
        width="40"
        height="24"
        rx="8"
        fill="#1B2D4F"
        stroke="#1B2D4F"
        strokeWidth="2"
      />
      <circle cx="190" cy="175" r="4" fill="#FFF8F0" />

      {/* lid highlight stripe */}
      <rect
        x="90"
        y="138"
        width="200"
        height="6"
        rx="3"
        fill="#FFF3DC"
        opacity="0.6"
      />

      {/* --- handle --- */}
      <path
        d="M145 120 Q145 80 190 80 Q235 80 235 120"
        stroke="#1B2D4F"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
      {/* handle highlight */}
      <path
        d="M155 115 Q155 90 190 90 Q225 90 225 115"
        stroke="#2A4170"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.3"
      />

      {/* --- shield on the lunchbox --- */}
      <path
        d="M178 210 Q190 198 202 210 L202 238 Q190 252 178 238 Z"
        fill="#4A9B6E"
        stroke="#1B2D4F"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* checkmark inside shield */}
      <path
        d="M185 226 L189 232 L198 218"
        stroke="#FFF8F0"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* --- allergen tag bubble — top left --- */}
      <rect
        x="28"
        y="88"
        width="68"
        height="30"
        rx="15"
        fill="#E8573A"
        stroke="#1B2D4F"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <text
        x="62"
        y="108"
        textAnchor="middle"
        fill="#FFF8F0"
        fontSize="11"
        fontWeight="600"
        fontFamily="var(--font-body)"
      >
        Peanut
      </text>

      {/* --- allergen tag bubble — top right --- */}
      <rect
        x="278"
        y="72"
        width="72"
        height="30"
        rx="15"
        fill="#E8573A"
        stroke="#1B2D4F"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <text
        x="314"
        y="92"
        textAnchor="middle"
        fill="#FFF8F0"
        fontSize="11"
        fontWeight="600"
        fontFamily="var(--font-body)"
      >
        Tree Nut
      </text>

      {/* --- allergen tag bubble — right side --- */}
      <rect
        x="300"
        y="190"
        width="56"
        height="30"
        rx="15"
        fill="#E8573A"
        stroke="#1B2D4F"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <text
        x="328"
        y="210"
        textAnchor="middle"
        fill="#FFF8F0"
        fontSize="11"
        fontWeight="600"
        fontFamily="var(--font-body)"
      >
        Dairy
      </text>

      {/* --- doodle: small checklist — left side --- */}
      <g transform="translate(14, 170)" opacity="0.9">
        {/* paper */}
        <rect
          x="0"
          y="0"
          width="38"
          height="48"
          rx="6"
          fill="#FFF8F0"
          stroke="#1B2D4F"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* lines */}
        <line x1="10" y1="14" x2="30" y2="14" stroke="#E8E0D8" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="10" y1="22" x2="26" y2="22" stroke="#E8E0D8" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="10" y1="30" x2="28" y2="30" stroke="#E8E0D8" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="10" y1="38" x2="22" y2="38" stroke="#E8E0D8" strokeWidth="1.5" strokeLinecap="round" />
        {/* checkmarks */}
        <path d="M8 12 L10 15 L14 10" stroke="#4A9B6E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M8 20 L10 23 L14 18" stroke="#4A9B6E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M8 28 L10 31 L14 26" stroke="#4A9B6E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>

      {/* --- doodle: small star — top --- */}
      <g transform="translate(240, 52)">
        <path
          d="M10 0 L12.5 7 L20 7 L14 11.5 L16.5 19 L10 14 L3.5 19 L6 11.5 L0 7 L7.5 7 Z"
          fill="#F5A623"
          stroke="#1B2D4F"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* --- doodle: heart — bottom right --- */}
      <g transform="translate(330, 142)">
        <path
          d="M12 21 C-4 10 0 0 12 6 C24 0 28 10 12 21Z"
          fill="#E8573A"
          stroke="#1B2D4F"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.85"
        />
      </g>

      {/* --- doodle: small plus / cross — bottom left --- */}
      <g transform="translate(50, 260)" opacity="0.7">
        <line x1="0" y1="8" x2="16" y2="8" stroke="#6CB4D9" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="8" y1="0" x2="8" y2="16" stroke="#6CB4D9" strokeWidth="2.5" strokeLinecap="round" />
      </g>

      {/* --- doodle: tiny circle dots scattered --- */}
      <circle cx="120" cy="60" r="3" fill="#6CB4D9" opacity="0.5" />
      <circle cx="310" cy="130" r="2.5" fill="#F5A623" opacity="0.5" />
      <circle cx="50" cy="140" r="2" fill="#4A9B6E" opacity="0.4" />
      <circle cx="350" cy="250" r="3" fill="#6CB4D9" opacity="0.4" />
      <circle cx="80" cy="295" r="2" fill="#F5A623" opacity="0.45" />

      {/* --- doodle: small squiggle — bottom --- */}
      <path
        d="M140 300 Q155 292 170 300 Q185 308 200 300 Q215 292 230 300"
        stroke="#F5A623"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.45"
      />
    </svg>
  );
}
