import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-28 md:pt-48 md:pb-40">
      {/* Background — layered radial energy */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 75% 35%, rgba(232, 168, 73, 0.05) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 20% 70%, rgba(124, 154, 130, 0.04) 0%, transparent 60%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-5">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-20">
          {/* --- Text column --- */}
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <p
              className="animate-fade-up mb-6 inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.1em]"
              style={{
                background: "rgba(253, 243, 224, 0.7)",
                color: "var(--ll-navy)",
                border: "1px solid rgba(232, 168, 73, 0.35)",
              }}
            >
              <span
                className="inline-block h-1.5 w-1.5 rounded-full"
                style={{ background: "var(--ll-sage)" }}
              />
              Built by allergy parents, for allergy parents
            </p>

            <h1
              className="animate-fade-up delay-100"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(3rem, 6vw, 4.75rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
                fontWeight: 800,
                color: "var(--ll-navy)",
              }}
            >
              Every kid deserves
              <br />
              a{" "}
              <span
                style={{ color: "var(--ll-coral)" }}
              >
                league
              </span>
              .
            </h1>

            <p
              className="animate-fade-up delay-200 mt-8 text-base leading-[1.75] md:text-[1.1875rem] md:leading-[1.75]"
              style={{ color: "var(--ll-muted)" }}
            >
              Your kid shouldn&apos;t have to sit out birthday parties or skip
              the field trip. Lunchbox League arms your whole
              village&nbsp;&mdash; teachers, coaches, grandparents&nbsp;&mdash; with
              the safety cards and emergency plans that let your child live
              full-volume.
            </p>

            <p
              className="animate-fade-up delay-300 mt-4 text-sm font-medium italic"
              style={{ color: "var(--ll-navy)", opacity: 0.55 }}
            >
              Because every kid deserves a league in their corner.
            </p>

            <div className="animate-fade-up delay-300 mt-12 flex flex-wrap items-center gap-4">
              <Link href="#cta" className="ll-btn-hero">
                Join the League
              </Link>
              <Link href="#how-it-works" className="ll-btn-secondary">
                See how it works
              </Link>
            </div>
          </div>

          {/* --- Illustration column --- */}
          <div className="animate-fade-up delay-300 flex justify-center lg:justify-end">
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Inline SVG - heroic lunchbox shield with whimsical doodles        */
/* ------------------------------------------------------------------ */

function HeroIllustration() {
  return (
    <svg
      width="400"
      height="400"
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-[320px] md:w-[400px]"
    >
      {/* ---- Ambient glow behind lunchbox ---- */}
      <ellipse cx="200" cy="200" rx="140" ry="120" fill="#E8A849" opacity="0.06" />
      <ellipse cx="200" cy="200" rx="90" ry="80" fill="#E8A849" opacity="0.05" />

      {/* ---- Soft ground shadow ---- */}
      <ellipse cx="200" cy="360" rx="120" ry="12" fill="#DDE5DE" opacity="0.4" />

      {/* ---- Cape billowing behind ---- */}
      <g className="animate-float-slow">
        <path
          d="M80 140c-20 30-35 80-28 140 8-12 18-16 28-14"
          fill="#E05252"
          opacity="0.7"
        />
        <path
          d="M74 150c-18 28-30 72-24 128 6-10 14-14 22-12"
          fill="#E05252"
          opacity="0.35"
        />
        <path
          d="M320 140c20 30 35 80 28 140-8-12-18-16-28-14"
          fill="#E05252"
          opacity="0.55"
        />
        <path
          d="M326 150c18 28 30 72 24 128-6-10-14-14-22-12"
          fill="#E05252"
          opacity="0.25"
        />
      </g>

      {/* ---- Main lunchbox body — shield-shaped bottom ---- */}
      <g className="animate-float-gentle">
        {/* Body — flat top, shield-pointed bottom */}
        <path
          d="M80 130h240v100c0 40-50 95-120 95S80 270 80 230V130Z"
          fill="#E8A849"
          stroke="#2C3E2D"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />

        {/* Lid area highlight */}
        <rect x="105" y="145" width="190" height="5" rx="2.5" fill="#FDF3E0" opacity="0.55" />

        {/* Lid line */}
        <path
          d="M80 170h240"
          stroke="#2C3E2D"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Handle */}
        <path
          d="M152 130 Q152 80 200 80 Q248 80 248 130"
          stroke="#2C3E2D"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M160 125 Q160 88 200 88 Q240 88 240 125"
          stroke="#3D5240"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
          opacity="0.2"
        />

        {/* Clasp */}
        <rect x="180" y="158" width="40" height="24" rx="8" fill="#2C3E2D" />
        <circle cx="200" cy="170" r="5" fill="#F7F4EE" />

        {/* ---- Central shield emblem ---- */}
        <g className="animate-pulse-shield" style={{ transformOrigin: "200px 245px" }}>
          {/* Shield glow */}
          <path
            d="M165 205 Q200 185 235 205 L235 260 Q200 290 165 260 Z"
            fill="#7C9A82"
            opacity="0.12"
            transform="scale(1.08) translate(-16, -20)"
          />
          {/* Shield shape */}
          <path
            d="M170 210 Q200 192 230 210 L230 258 Q200 286 170 258 Z"
            fill="#7C9A82"
            stroke="#2C3E2D"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          {/* Inner border */}
          <path
            d="M178 216 Q200 202 222 216 L222 252 Q200 276 178 252 Z"
            fill="none"
            stroke="#F7F4EE"
            strokeWidth="1"
            opacity="0.35"
          />
          {/* Star inside shield */}
          <path
            d="M200 222l4.5 9 10 1.5-7.2 7 1.7 10-9-4.7-9 4.7 1.7-10-7.2-7 10-1.5Z"
            fill="#F7F4EE"
            opacity="0.9"
          />
        </g>

        {/* Bottom accent */}
        <path
          d="M120 280 Q200 282 280 280"
          stroke="#2C3E2D"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.06"
          fill="none"
        />
      </g>

      {/* ---- Allergen tags floating around ---- */}
      <g className="animate-drift-left">
        <rect x="10" y="120" width="68" height="28" rx="14" fill="#E05252" stroke="#2C3E2D" strokeWidth="1.8" />
        <text x="44" y="139" textAnchor="middle" fill="#F7F4EE" fontSize="11" fontWeight="600" fontFamily="var(--font-body)">Peanut</text>
        <path d="M78 134 Q92 140 100 148" stroke="#2C3E2D" strokeWidth="1" strokeDasharray="3 3" fill="none" opacity="0.25" strokeLinecap="round" />
      </g>

      <g className="animate-drift-right">
        <rect x="310" y="100" width="76" height="28" rx="14" fill="#E05252" stroke="#2C3E2D" strokeWidth="1.8" />
        <text x="348" y="119" textAnchor="middle" fill="#F7F4EE" fontSize="11" fontWeight="600" fontFamily="var(--font-body)">Tree Nut</text>
        <path d="M310 118 Q298 128 292 140" stroke="#2C3E2D" strokeWidth="1" strokeDasharray="3 3" fill="none" opacity="0.25" strokeLinecap="round" />
      </g>

      <g className="animate-float-slow" style={{ animationDelay: "1s" }}>
        <rect x="332" y="225" width="54" height="28" rx="14" fill="#E05252" stroke="#2C3E2D" strokeWidth="1.8" />
        <text x="359" y="244" textAnchor="middle" fill="#F7F4EE" fontSize="11" fontWeight="600" fontFamily="var(--font-body)">Dairy</text>
      </g>

      {/* ---- Doodle: checklist card ---- */}
      <g transform="translate(8, 200)" opacity="0.85" className="animate-float-slow" style={{ animationDelay: "2s" }}>
        <rect width="42" height="52" rx="6" fill="#F7F4EE" stroke="#2C3E2D" strokeWidth="1.8" />
        <line x1="12" y1="14" x2="34" y2="14" stroke="#DDE5DE" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="12" y1="22" x2="30" y2="22" stroke="#DDE5DE" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="12" y1="30" x2="32" y2="30" stroke="#DDE5DE" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="12" y1="38" x2="26" y2="38" stroke="#DDE5DE" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 12l2 3 4-5" stroke="#7C9A82" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M8 20l2 3 4-5" stroke="#7C9A82" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M8 28l2 3 4-5" stroke="#7C9A82" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>

      {/* ---- Stars ---- */}
      <g transform="translate(130, 40)" className="animate-twinkle">
        <path d="M10 0L12.5 7 20 7 14 11.5 16.5 19 10 14 3.5 19 6 11.5 0 7 7.5 7Z" fill="#E8A849" stroke="#2C3E2D" strokeWidth="1.5" strokeLinejoin="round" />
      </g>
      <g transform="translate(275, 55)" className="animate-twinkle-delayed">
        <path d="M6 0L7.5 4.5 12 4.5 8.5 7 10 11.5 6 8.5 2 11.5 3.5 7 0 4.5 4.5 4.5Z" fill="#E8A849" stroke="#2C3E2D" strokeWidth="1.2" strokeLinejoin="round" />
      </g>
      <g transform="translate(355, 175)" className="animate-twinkle" style={{ animationDelay: "0.7s" }}>
        <path d="M5 0L6.2 3.8 10 3.8 7 6 8 10 5 7.5 2 10 3 6 0 3.8 3.8 3.8Z" fill="#E8A849" opacity="0.6" />
      </g>

      {/* ---- Lightning bolts ---- */}
      <g transform="translate(356, 148)" opacity="0.75">
        <path d="M8 0L4 10 9 10 5 20" stroke="#E8A849" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>
      <g transform="translate(48, 80)" opacity="0.55">
        <path d="M6 0L3 7 7 7 4 14" stroke="#E8A849" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>

      {/* ---- Floating hearts ---- */}
      <g transform="translate(350, 280)" className="animate-float-gentle" style={{ animationDelay: "0.5s" }}>
        <path d="M10 17C-3 8 0 0 10 5 20 0 23 8 10 17Z" fill="#E05252" stroke="#2C3E2D" strokeWidth="1.2" strokeLinejoin="round" opacity="0.7" />
      </g>
      <g transform="translate(240, 32)" className="animate-float-slow" style={{ animationDelay: "1.5s" }}>
        <path d="M6 10C-1 5 0 0 6 3 12 0 13 5 6 10Z" fill="#E05252" stroke="#2C3E2D" strokeWidth="1" strokeLinejoin="round" opacity="0.5" />
      </g>

      {/* ---- Small plus signs ---- */}
      <g transform="translate(48, 300)" opacity="0.45">
        <line x1="0" y1="7" x2="14" y2="7" stroke="#6B9FCA" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="7" y1="0" x2="7" y2="14" stroke="#6B9FCA" strokeWidth="2.5" strokeLinecap="round" />
      </g>
      <g transform="translate(165, 52)" opacity="0.3">
        <line x1="0" y1="5" x2="10" y2="5" stroke="#6B9FCA" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="5" y1="0" x2="5" y2="10" stroke="#6B9FCA" strokeWidth="1.8" strokeLinecap="round" />
      </g>

      {/* ---- Tiny dots ---- */}
      <circle cx="125" cy="68" r="2.5" fill="#6B9FCA" opacity="0.4" />
      <circle cx="338" cy="160" r="2" fill="#E8A849" opacity="0.4" />
      <circle cx="40" cy="165" r="2" fill="#7C9A82" opacity="0.3" />
      <circle cx="375" cy="310" r="2.5" fill="#6B9FCA" opacity="0.3" />
      <circle cx="80" cy="330" r="2" fill="#E8A849" opacity="0.35" />
    </svg>
  );
}
