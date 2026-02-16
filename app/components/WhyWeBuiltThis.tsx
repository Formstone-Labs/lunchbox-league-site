export default function WhyWeBuiltThis() {
  return (
    <section id="why" className="ll-section">
      <div className="mx-auto max-w-6xl px-5">
        {/* Section heading */}
        <div className="animate-fade-up">
          <h2 className="ll-heading-lg">
            Our Origin Story
          </h2>
          <p
            className="mt-3 text-sm font-semibold tracking-widest uppercase"
            style={{ color: "var(--ll-amber)" }}
          >
            Why we started the League
          </p>
        </div>

        <div className="mt-12 grid items-start gap-12 lg:grid-cols-[1fr_auto] lg:gap-20">
          {/* ---- Manifesto text column ---- */}
          <div className="max-w-2xl animate-fade-up delay-100">
            <div
              className="space-y-6 border-l-[3px] pl-6 md:pl-8"
              style={{ borderColor: "var(--ll-amber)" }}
            >
              {/* Decorative opening quotation mark */}
              <div
                className="select-none -ml-1 -mb-2 text-5xl leading-none md:text-6xl"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--ll-amber)",
                  opacity: 0.5,
                }}
                aria-hidden="true"
              >
                &ldquo;
              </div>

              <p
                className="text-base leading-relaxed md:text-lg md:leading-relaxed"
                style={{ color: "var(--ll-ink)" }}
              >
                We built Lunchbox League because we&apos;re allergy parents too.
                We&apos;re the ones who showed up to kindergarten orientation with
                a three-page action plan and a sick feeling that it still
                wasn&apos;t enough. We&apos;ve sat in the parking lot after
                drop-off, hands on the steering wheel, running through every
                scenario one more time.
              </p>

              <p
                className="text-base leading-relaxed md:text-lg md:leading-relaxed"
                style={{ color: "var(--ll-ink)" }}
              >
                We know what it&apos;s like to watch your kid walk into a
                cafeteria and wish you could put a force field around them. To
                feel the gut-punch of &ldquo;I didn&apos;t know she
                couldn&apos;t have that&rdquo; from someone who meant well but
                didn&apos;t have the information. So we stopped wishing someone
                would build the thing we needed, and we built it ourselves.
              </p>

              <p
                className="text-base leading-relaxed md:text-lg md:leading-relaxed"
                style={{ color: "var(--ll-ink)" }}
              >
                This isn&apos;t a medical app made by people who read about
                allergies in a textbook. This is armor forged by parents who have
                lived it&nbsp;&mdash; the 2am EpiPen checks, the birthday party
                negotiations, the quiet terror of the first sleepover. We built
                the tools we wished existed on the worst days, so your best days
                can feel a little safer.
              </p>
            </div>

            {/* League principles — woven into the manifesto */}
            <div className="mt-10 space-y-4 animate-fade-up delay-200">
              <p
                className="text-xs font-semibold tracking-widest uppercase"
                style={{ color: "var(--ll-muted)" }}
              >
                The Lunchbox League Oath
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                <OathPrinciple
                  color="var(--ll-amber)"
                  text="Every parent deserves backup."
                />
                <OathPrinciple
                  color="var(--ll-sage)"
                  text="No hero fights alone."
                />
                <OathPrinciple
                  color="var(--ll-coral)"
                  text="Information saves lives."
                />
                <OathPrinciple
                  color="var(--ll-sky)"
                  text="Our kids are worth the fight."
                />
              </div>
            </div>

            {/* Team oath signature */}
            <div className="mt-10 animate-fade-up delay-300">
              <div
                className="rounded-xl px-6 py-5"
                style={{ background: "var(--ll-amber-light)" }}
              >
                <p
                  className="text-base leading-relaxed italic"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--ll-navy)",
                  }}
                >
                  Our kids walk out the door every morning &mdash; and we want
                  them fearless when they do. That&apos;s why we built this.
                  Welcome to the League.
                </p>

                <div className="mt-4 flex items-center gap-3">
                  {/* League badge — small star cluster */}
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M14 3l2.8 5.7 6.3.9-4.55 4.44 1.07 6.26L14 17.1l-5.62 2.95 1.07-6.26L4.9 9.6l6.3-.9L14 3z"
                      fill="var(--ll-amber)"
                      stroke="var(--ll-navy)"
                      strokeWidth="1.2"
                      strokeLinejoin="round"
                    />
                    <circle cx="14" cy="12" r="2.5" fill="var(--ll-navy)" opacity="0.15" />
                  </svg>
                  <span
                    className="text-base font-semibold"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "var(--ll-navy)",
                    }}
                  >
                    &mdash; The Founding Members, Lunchbox League
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ---- Illustration column ---- */}
          <div className="flex justify-center lg:justify-end animate-fade-up delay-200">
            <WhyIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Oath principle pill                                                 */
/* ------------------------------------------------------------------ */

function OathPrinciple({ color, text }: { color: string; text: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M8 1.5L3 4v4c0 3.5 2.1 6 5 7 2.9-1 5-3.5 5-7V4L8 1.5z"
          fill={color}
          fillOpacity="0.15"
          stroke={color}
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
      </svg>
      <span
        className="text-sm font-medium"
        style={{ color: "var(--ll-navy)" }}
      >
        {text}
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Inline SVG — parent and child as heroes, dynamic with action lines */
/* ------------------------------------------------------------------ */

function WhyIllustration() {
  return (
    <svg
      width="260"
      height="340"
      viewBox="0 0 260 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-[200px] md:w-[260px]"
    >
      {/* Energy burst — radial action lines behind figures */}
      <g opacity="0.08">
        <line x1="120" y1="150" x2="20" y2="50" stroke="var(--ll-amber)" strokeWidth="2" />
        <line x1="120" y1="150" x2="240" y2="40" stroke="var(--ll-amber)" strokeWidth="2" />
        <line x1="120" y1="150" x2="5" y2="180" stroke="var(--ll-amber)" strokeWidth="1.5" />
        <line x1="120" y1="150" x2="255" y2="200" stroke="var(--ll-amber)" strokeWidth="1.5" />
        <line x1="120" y1="150" x2="10" y2="280" stroke="var(--ll-amber)" strokeWidth="1.5" />
        <line x1="120" y1="150" x2="250" y2="280" stroke="var(--ll-amber)" strokeWidth="1.5" />
      </g>

      {/* Soft ground shadow */}
      <ellipse cx="125" cy="285" rx="95" ry="10" fill="#DDE5DE" opacity="0.5" />

      {/* ---- Parent figure ---- */}
      {/* Head */}
      <circle cx="95" cy="80" r="22" fill="var(--ll-amber-light)" stroke="var(--ll-navy)" strokeWidth="2.5" />
      {/* Eyes — determined, confident */}
      <circle cx="88" cy="78" r="2" fill="var(--ll-navy)" />
      <circle cx="102" cy="78" r="2" fill="var(--ll-navy)" />
      {/* Confident smile */}
      <path d="M89 87 Q95 93 101 87" stroke="var(--ll-navy)" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* Hair hint */}
      <path d="M73 72 Q75 58 95 55 Q115 58 117 72" stroke="var(--ll-navy)" strokeWidth="2.5" strokeLinecap="round" fill="none" />

      {/* Cape — flowing behind parent, implied power */}
      <path
        d="M80 100 Q60 130 50 200 Q55 210 75 195 Q78 160 82 130 Z"
        fill="var(--ll-coral)"
        fillOpacity="0.7"
        stroke="var(--ll-navy)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M110 100 Q130 130 140 200 Q135 210 115 195 Q112 160 108 130 Z"
        fill="var(--ll-coral)"
        fillOpacity="0.6"
        stroke="var(--ll-navy)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Body */}
      <path
        d="M78 100 Q76 130 74 170 L116 170 Q114 130 112 100 Z"
        fill="var(--ll-navy)"
        stroke="var(--ll-navy)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Shield emblem on chest */}
      <path
        d="M89 115 Q95 110 101 115 L101 130 Q95 137 89 130 Z"
        fill="var(--ll-amber)"
        stroke="var(--ll-amber)"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      <path
        d="M93 120 L95 123 L99 118"
        stroke="var(--ll-navy)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Legs */}
      <path d="M80 170 L77 270" stroke="var(--ll-navy)" strokeWidth="6" strokeLinecap="round" />
      <path d="M110 170 L113 270" stroke="var(--ll-navy)" strokeWidth="6" strokeLinecap="round" />
      {/* Shoes */}
      <ellipse cx="74" cy="272" rx="10" ry="5" fill="var(--ll-navy)" />
      <ellipse cx="116" cy="272" rx="10" ry="5" fill="var(--ll-navy)" />

      {/* Arm reaching down to hold child's hand */}
      <path
        d="M112 115 Q124 140 135 165"
        stroke="var(--ll-navy)"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />

      {/* ---- Child figure ---- */}
      {/* Head */}
      <circle cx="165" cy="140" r="17" fill="var(--ll-coral-light)" stroke="var(--ll-navy)" strokeWidth="2.5" />
      {/* Eyes — bright, joyful */}
      <circle cx="159" cy="138" r="1.8" fill="var(--ll-navy)" />
      <circle cx="171" cy="138" r="1.8" fill="var(--ll-navy)" />
      {/* Big happy smile */}
      <path d="M161 146 Q165 151 169 146" stroke="var(--ll-navy)" strokeWidth="1.8" strokeLinecap="round" fill="none" />

      {/* Child's cape — smaller, flowing */}
      <path
        d="M155 155 Q145 170 142 200 Q145 206 155 198 Q154 178 155 165 Z"
        fill="var(--ll-amber)"
        fillOpacity="0.6"
        stroke="var(--ll-navy)"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Body */}
      <path
        d="M153 155 Q151 175 150 210 L180 210 Q179 175 177 155 Z"
        fill="var(--ll-amber)"
        stroke="var(--ll-navy)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Star emblem on child's chest */}
      <g transform="translate(158, 168)">
        <path
          d="M7 0 L8.6 4.8 L14 4.8 L9.7 7.8 L11.3 13 L7 9.6 L2.7 13 L4.3 7.8 L0 4.8 L5.4 4.8 Z"
          fill="var(--ll-navy)"
          stroke="var(--ll-navy)"
          strokeWidth="0.5"
          strokeLinejoin="round"
          opacity="0.7"
          transform="scale(0.7)"
        />
      </g>

      {/* Legs */}
      <path d="M155 210 L153 270" stroke="var(--ll-navy)" strokeWidth="5" strokeLinecap="round" />
      <path d="M175 210 L177 270" stroke="var(--ll-navy)" strokeWidth="5" strokeLinecap="round" />
      {/* Shoes */}
      <ellipse cx="151" cy="272" rx="8" ry="4" fill="var(--ll-navy)" />
      <ellipse cx="179" cy="272" rx="8" ry="4" fill="var(--ll-navy)" />

      {/* Child arm reaching up to hold parent's hand */}
      <path
        d="M150 165 Q143 155 137 168"
        stroke="var(--ll-navy)"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />

      {/* Clasped hands — glowing connection */}
      <circle cx="136" cy="167" r="6" fill="var(--ll-amber-light)" stroke="var(--ll-amber)" strokeWidth="1.5" />
      <circle cx="136" cy="167" r="5" fill="var(--ll-amber-light)" stroke="var(--ll-navy)" strokeWidth="2" />

      {/* ---- Lunchbox in child's other hand ---- */}
      <g transform="translate(181, 180)">
        {/* Lunchbox body */}
        <rect x="0" y="8" width="28" height="20" rx="5" fill="var(--ll-amber)" stroke="var(--ll-navy)" strokeWidth="2" />
        {/* Lid line */}
        <path d="M0 16 h28" stroke="var(--ll-navy)" strokeWidth="1.5" />
        {/* Handle */}
        <path d="M8 8 Q8 2 14 2 Q20 2 20 8" stroke="var(--ll-navy)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        {/* Shield on lunchbox */}
        <path
          d="M11 20 Q14 17 17 20 L17 26 Q14 29 11 26 Z"
          fill="var(--ll-sage)"
          stroke="var(--ll-navy)"
          strokeWidth="0.8"
          strokeLinejoin="round"
        />
      </g>

      {/* Child arm going to lunchbox */}
      <path
        d="M177 170 Q185 178 187 186"
        stroke="var(--ll-navy)"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />

      {/* ---- Dynamic decorative elements ---- */}

      {/* Action lines — short speed streaks around figures */}
      <g opacity="0.25">
        <line x1="42" y1="95" x2="28" y2="90" stroke="var(--ll-amber)" strokeWidth="2" strokeLinecap="round" />
        <line x1="42" y1="108" x2="26" y2="108" stroke="var(--ll-amber)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="200" y1="140" x2="215" y2="135" stroke="var(--ll-amber)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="198" y1="155" x2="213" y2="155" stroke="var(--ll-amber)" strokeWidth="1.5" strokeLinecap="round" />
      </g>

      {/* Star burst — top */}
      <g transform="translate(200, 55)">
        <path
          d="M10 0 L12.5 7 L20 7 L14 11.5 L16.5 19 L10 14 L3.5 19 L6 11.5 L0 7 L7.5 7 Z"
          fill="var(--ll-amber)"
          stroke="var(--ll-navy)"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.7"
        />
      </g>

      {/* Small star */}
      <g transform="translate(30, 45)">
        <path
          d="M6 0 L7.5 4.2 L12 4.2 L8.4 6.9 L9.8 11.4 L6 8.4 L2.2 11.4 L3.6 6.9 L0 4.2 L4.5 4.2 Z"
          fill="var(--ll-amber)"
          stroke="var(--ll-navy)"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.5"
        />
      </g>

      {/* Heart — between the two figures, floating up */}
      <g transform="translate(120, 60)">
        <path
          d="M10 16 C-2 8 0 0 10 5 C20 0 22 8 10 16Z"
          fill="var(--ll-coral)"
          stroke="var(--ll-navy)"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.65"
        />
      </g>

      {/* Sparkle dots */}
      <circle cx="40" cy="180" r="2.5" fill="var(--ll-sky)" opacity="0.45" />
      <circle cx="235" cy="120" r="2" fill="var(--ll-sage)" opacity="0.4" />
      <circle cx="220" cy="250" r="2.5" fill="var(--ll-amber)" opacity="0.4" />
      <circle cx="25" cy="250" r="2" fill="var(--ll-coral)" opacity="0.35" />

      {/* Small shield icon floating */}
      <g transform="translate(225, 85)" opacity="0.4">
        <path
          d="M8 2L3 4.5V8C3 11 5.5 13.5 8 14.5C10.5 13.5 13 11 13 8V4.5L8 2Z"
          fill="var(--ll-sage)"
          stroke="var(--ll-navy)"
          strokeWidth="1"
          strokeLinejoin="round"
        />
      </g>

    </svg>
  );
}
