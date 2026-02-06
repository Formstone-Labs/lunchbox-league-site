export default function WhyWeBuiltThis() {
  return (
    <section id="why" className="ll-section">
      <div className="mx-auto max-w-6xl px-5">
        {/* Section heading */}
        <div className="animate-fade-up">
          <h2 className="ll-heading-lg">
            Why we&apos;re building this.
          </h2>
        </div>

        <div className="mt-12 grid items-start gap-12 lg:grid-cols-[1fr_auto] lg:gap-20">
          {/* ---- Editorial text column ---- */}
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
                If your child has food allergies, you already know. You know
                the look on a new teacher&apos;s face when you explain
                anaphylaxis. You know the weight of trusting someone else with
                information that could save your child&apos;s life.
              </p>

              <p
                className="text-base leading-relaxed md:text-lg md:leading-relaxed"
                style={{ color: "var(--ll-ink)" }}
              >
                We started Lunchbox League because we believe that information
                shouldn&apos;t be trapped in paper forms and forgotten binders.
                Every person in your child&apos;s life should have clear,
                instant access to what they need to keep your kid safe.
              </p>

              <p
                className="text-base leading-relaxed md:text-lg md:leading-relaxed"
                style={{ color: "var(--ll-ink)" }}
              >
                We&apos;re not building another medical app. We&apos;re
                building a better way for families and schools to communicate
                about allergies&nbsp;&mdash; simply, clearly, and with
                confidence.
              </p>
            </div>

            {/* Signature */}
            <div className="mt-10 flex items-center gap-3 animate-fade-up delay-300">
              {/* Small amber star */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M10 2l2.35 4.76 5.25.77-3.8 3.7.9 5.23L10 13.94l-4.7 2.52.9-5.23-3.8-3.7 5.25-.77L10 2z"
                  fill="var(--ll-amber)"
                  stroke="var(--ll-amber)"
                  strokeWidth="0.5"
                  strokeLinejoin="round"
                />
              </svg>
              <span
                className="text-base italic"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--ll-navy)",
                }}
              >
                &mdash; The Lunchbox League Team
              </span>
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
/*  Inline SVG — parent and child with a lunchbox-heart, warm & simple */
/* ------------------------------------------------------------------ */

function WhyIllustration() {
  return (
    <svg
      width="260"
      height="300"
      viewBox="0 0 260 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-[200px] md:w-[260px]"
    >
      {/* Soft ground shadow */}
      <ellipse cx="130" cy="280" rx="90" ry="10" fill="#E8E0D8" opacity="0.5" />

      {/* ---- Parent figure ---- */}
      {/* Head */}
      <circle cx="100" cy="80" r="22" fill="var(--ll-amber-light)" stroke="var(--ll-navy)" strokeWidth="2.5" />
      {/* Eyes */}
      <circle cx="93" cy="78" r="2" fill="var(--ll-navy)" />
      <circle cx="107" cy="78" r="2" fill="var(--ll-navy)" />
      {/* Smile */}
      <path d="M95 86 Q100 91 105 86" stroke="var(--ll-navy)" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* Hair hint */}
      <path d="M78 72 Q80 58 100 55 Q120 58 122 72" stroke="var(--ll-navy)" strokeWidth="2.5" strokeLinecap="round" fill="none" />

      {/* Body */}
      <path
        d="M82 100 Q80 130 78 170 L122 170 Q120 130 118 100 Z"
        fill="var(--ll-navy)"
        stroke="var(--ll-navy)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Legs */}
      <path d="M85 170 L82 270" stroke="var(--ll-navy)" strokeWidth="6" strokeLinecap="round" />
      <path d="M115 170 L118 270" stroke="var(--ll-navy)" strokeWidth="6" strokeLinecap="round" />
      {/* Shoes */}
      <ellipse cx="79" cy="272" rx="10" ry="5" fill="var(--ll-navy)" />
      <ellipse cx="121" cy="272" rx="10" ry="5" fill="var(--ll-navy)" />

      {/* Arm reaching down to hold child's hand */}
      <path
        d="M118 115 Q130 140 140 165"
        stroke="var(--ll-navy)"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />

      {/* ---- Child figure ---- */}
      {/* Head */}
      <circle cx="170" cy="140" r="17" fill="var(--ll-coral-light)" stroke="var(--ll-navy)" strokeWidth="2.5" />
      {/* Eyes */}
      <circle cx="164" cy="138" r="1.8" fill="var(--ll-navy)" />
      <circle cx="176" cy="138" r="1.8" fill="var(--ll-navy)" />
      {/* Smile */}
      <path d="M166 145 Q170 149 174 145" stroke="var(--ll-navy)" strokeWidth="1.8" strokeLinecap="round" fill="none" />

      {/* Body */}
      <path
        d="M158 155 Q156 175 155 210 L185 210 Q184 175 182 155 Z"
        fill="var(--ll-amber)"
        stroke="var(--ll-navy)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Legs */}
      <path d="M160 210 L158 270" stroke="var(--ll-navy)" strokeWidth="5" strokeLinecap="round" />
      <path d="M180 210 L182 270" stroke="var(--ll-navy)" strokeWidth="5" strokeLinecap="round" />
      {/* Shoes */}
      <ellipse cx="156" cy="272" rx="8" ry="4" fill="var(--ll-navy)" />
      <ellipse cx="184" cy="272" rx="8" ry="4" fill="var(--ll-navy)" />

      {/* Child arm reaching up to hold parent's hand */}
      <path
        d="M155 165 Q148 155 142 168"
        stroke="var(--ll-navy)"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />

      {/* Clasped hands (small circle at the meeting point) */}
      <circle cx="141" cy="167" r="5" fill="var(--ll-amber-light)" stroke="var(--ll-navy)" strokeWidth="2" />

      {/* ---- Lunchbox in child's other hand ---- */}
      <g transform="translate(186, 180)">
        {/* Lunchbox body */}
        <rect x="0" y="8" width="28" height="20" rx="5" fill="var(--ll-amber)" stroke="var(--ll-navy)" strokeWidth="2" />
        {/* Lid line */}
        <path d="M0 16 h28" stroke="var(--ll-navy)" strokeWidth="1.5" />
        {/* Handle */}
        <path d="M8 8 Q8 2 14 2 Q20 2 20 8" stroke="var(--ll-navy)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        {/* Heart on lunchbox */}
        <path
          d="M11 22 C7 19 8 16 11 18 C14 16 15 19 11 22Z"
          fill="var(--ll-coral)"
          stroke="var(--ll-navy)"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* Child arm going to lunchbox */}
      <path
        d="M182 170 Q190 178 192 186"
        stroke="var(--ll-navy)"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />

      {/* ---- Decorative elements ---- */}
      {/* Small floating heart */}
      <g transform="translate(55, 42)">
        <path
          d="M8 14 C-2 7 0 0 8 4 C16 0 18 7 8 14Z"
          fill="var(--ll-coral)"
          stroke="var(--ll-navy)"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.7"
        />
      </g>

      {/* Small star */}
      <g transform="translate(200, 100)">
        <path
          d="M8 0 L9.8 5.6 L16 5.6 L11 9 L12.8 15 L8 11.2 L3.2 15 L5 9 L0 5.6 L6.2 5.6 Z"
          fill="var(--ll-amber)"
          stroke="var(--ll-navy)"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.6"
        />
      </g>

      {/* Tiny dots */}
      <circle cx="45" cy="120" r="2.5" fill="var(--ll-sky)" opacity="0.45" />
      <circle cx="230" cy="160" r="2" fill="var(--ll-sage)" opacity="0.4" />
      <circle cx="210" cy="250" r="2.5" fill="var(--ll-amber)" opacity="0.4" />

      {/* Small squiggle */}
      <path
        d="M40 260 Q50 254 60 260 Q70 266 80 260"
        stroke="var(--ll-amber)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.4"
      />
    </svg>
  );
}
