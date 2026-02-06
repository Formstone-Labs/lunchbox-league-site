export default function Problem() {
  return (
    <section className="ll-section">
      <div className="mx-auto max-w-6xl px-5">
        {/* Section heading */}
        <h2 className="ll-heading-lg animate-fade-up">
          You&apos;ve done this before.
        </h2>

        {/* Two-column editorial layout */}
        <div className="mt-12 grid gap-12 md:grid-cols-[1.5fr_1fr] md:gap-16">
          {/* LEFT — Editorial copy */}
          <div className="animate-fade-up delay-100">
            <p
              className="text-base leading-[1.8] md:text-lg md:leading-[1.8]"
              style={{ color: "var(--ll-ink)" }}
            >
              You&apos;ve written the same allergy info on forms every September.
              You&apos;ve briefed every new teacher, every substitute, every
              lunch aide.
            </p>

            <p
              className="mt-6 text-base leading-[1.8] md:text-lg md:leading-[1.8]"
              style={{ color: "var(--ll-ink)" }}
            >
              You&apos;ve labeled every snack. Checked every ingredient list.
              Called ahead to every birthday party.
            </p>

            <p
              className="mt-6 text-base leading-[1.8] md:text-lg md:leading-[1.8]"
              style={{ color: "var(--ll-muted)" }}
            >
              And still&nbsp;&mdash; every morning, there&apos;s a knot. Because
              you can&apos;t be there at lunch. You can&apos;t read every label.
              You can&apos;t guarantee that everyone remembers.
            </p>
          </div>

          {/* RIGHT — Before / After SVG illustration */}
          <div className="flex flex-col items-center gap-8 animate-fade-up delay-200">
            {/* "Before" — scattered forms with red X */}
            <div className="relative w-full max-w-[300px]">
              <svg
                viewBox="0 0 280 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full"
                aria-hidden="true"
              >
                {/* Background scattered papers */}
                {/* Paper 1 — tilted left */}
                <g transform="rotate(-8 60 90)">
                  <rect
                    x="30"
                    y="30"
                    width="100"
                    height="130"
                    rx="4"
                    fill="#FFFCF7"
                    stroke="var(--ll-border)"
                    strokeWidth="1.5"
                  />
                  {/* Lines on paper */}
                  <rect x="44" y="50" width="50" height="3" rx="1.5" fill="var(--ll-border)" />
                  <rect x="44" y="60" width="65" height="3" rx="1.5" fill="var(--ll-border)" />
                  <rect x="44" y="70" width="40" height="3" rx="1.5" fill="var(--ll-border)" />
                  <rect x="44" y="84" width="58" height="3" rx="1.5" fill="var(--ll-border)" />
                  <rect x="44" y="94" width="45" height="3" rx="1.5" fill="var(--ll-border)" />
                  {/* Allergy label */}
                  <rect
                    x="44"
                    y="112"
                    width="52"
                    height="16"
                    rx="8"
                    fill="var(--ll-coral-light)"
                    stroke="var(--ll-coral)"
                    strokeWidth="1"
                  />
                  <rect x="52" y="118" width="36" height="3" rx="1.5" fill="var(--ll-coral)" />
                </g>

                {/* Paper 2 — tilted right */}
                <g transform="rotate(5 190 80)">
                  <rect
                    x="140"
                    y="20"
                    width="100"
                    height="130"
                    rx="4"
                    fill="#FFFCF7"
                    stroke="var(--ll-border)"
                    strokeWidth="1.5"
                  />
                  <rect x="154" y="40" width="55" height="3" rx="1.5" fill="var(--ll-border)" />
                  <rect x="154" y="50" width="68" height="3" rx="1.5" fill="var(--ll-border)" />
                  <rect x="154" y="60" width="42" height="3" rx="1.5" fill="var(--ll-border)" />
                  <rect x="154" y="74" width="60" height="3" rx="1.5" fill="var(--ll-border)" />
                  <rect x="154" y="84" width="48" height="3" rx="1.5" fill="var(--ll-border)" />
                  {/* Allergy label */}
                  <rect
                    x="154"
                    y="100"
                    width="52"
                    height="16"
                    rx="8"
                    fill="var(--ll-coral-light)"
                    stroke="var(--ll-coral)"
                    strokeWidth="1"
                  />
                  <rect x="162" y="106" width="36" height="3" rx="1.5" fill="var(--ll-coral)" />
                </g>

                {/* Paper 3 — center, slightly tilted */}
                <g transform="rotate(-2 140 110)">
                  <rect
                    x="80"
                    y="50"
                    width="100"
                    height="130"
                    rx="4"
                    fill="#FFFCF7"
                    stroke="var(--ll-border)"
                    strokeWidth="1.5"
                  />
                  <rect x="94" y="70" width="60" height="3" rx="1.5" fill="var(--ll-border)" />
                  <rect x="94" y="80" width="48" height="3" rx="1.5" fill="var(--ll-border)" />
                  <rect x="94" y="90" width="55" height="3" rx="1.5" fill="var(--ll-border)" />
                  <rect x="94" y="104" width="62" height="3" rx="1.5" fill="var(--ll-border)" />
                  <rect x="94" y="114" width="38" height="3" rx="1.5" fill="var(--ll-border)" />
                  {/* Allergy label */}
                  <rect
                    x="94"
                    y="130"
                    width="52"
                    height="16"
                    rx="8"
                    fill="var(--ll-coral-light)"
                    stroke="var(--ll-coral)"
                    strokeWidth="1"
                  />
                  <rect x="102" y="136" width="36" height="3" rx="1.5" fill="var(--ll-coral)" />
                </g>

                {/* Red X overlay — overwhelm */}
                <g opacity="0.85">
                  <circle cx="140" cy="105" r="28" fill="var(--ll-coral)" fillOpacity="0.12" />
                  <path
                    d="M128 93l24 24m0-24l-24 24"
                    stroke="var(--ll-coral)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </g>
              </svg>

              <p
                className="mt-2 text-center text-xs font-medium tracking-wide uppercase"
                style={{ color: "var(--ll-muted)" }}
              >
                Scattered forms. Constant worry.
              </p>
            </div>

            {/* Divider arrow */}
            <div className="flex items-center justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M12 5v14m0 0l-5-5m5 5l5-5"
                  stroke="var(--ll-amber)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* "After" — clean card / phone mockup */}
            <div className="w-full max-w-[260px]">
              <div
                className="ll-card overflow-hidden p-0"
                style={{ borderColor: "var(--ll-sage)" }}
              >
                {/* Card header */}
                <div
                  className="flex items-center gap-3 px-5 py-4"
                  style={{ background: "var(--ll-sage-light)" }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="16"
                      height="16"
                      rx="4"
                      stroke="var(--ll-sage)"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M6 10l2.5 2.5L14 7"
                      stroke="var(--ll-sage)"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span
                    className="text-sm font-semibold"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "var(--ll-navy)",
                    }}
                  >
                    Allergy Safety Card
                  </span>
                </div>

                {/* Card body */}
                <div className="px-5 py-4 space-y-3">
                  {/* Name row */}
                  <div className="flex items-center gap-2">
                    <div
                      className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold text-white"
                      style={{ background: "var(--ll-navy)" }}
                    >
                      E
                    </div>
                    <span
                      className="text-sm font-semibold"
                      style={{ color: "var(--ll-navy)" }}
                    >
                      Emma, age 7
                    </span>
                  </div>

                  {/* Allergen tags */}
                  <div className="flex flex-wrap gap-1.5">
                    <span
                      className="rounded-full px-2.5 py-0.5 text-[11px] font-semibold"
                      style={{
                        background: "var(--ll-coral-light)",
                        color: "var(--ll-coral)",
                      }}
                    >
                      Peanut
                    </span>
                    <span
                      className="rounded-full px-2.5 py-0.5 text-[11px] font-semibold"
                      style={{
                        background: "var(--ll-coral-light)",
                        color: "var(--ll-coral)",
                      }}
                    >
                      Tree Nut
                    </span>
                    <span
                      className="rounded-full px-2.5 py-0.5 text-[11px] font-semibold"
                      style={{
                        background: "var(--ll-amber-light)",
                        color: "var(--ll-navy)",
                      }}
                    >
                      Sesame
                    </span>
                  </div>

                  {/* Emergency contact */}
                  <div
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs"
                    style={{ background: "var(--ll-cream-dark)" }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M2.5 2h3l1 3-1.5 1a7.5 7.5 0 003 3l1-1.5 3 1v3a1 1 0 01-1 1A10 10 0 011.5 3a1 1 0 011-1z"
                        stroke="var(--ll-muted)"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span style={{ color: "var(--ll-muted)" }}>
                      Emergency: Mom (555-0123)
                    </span>
                  </div>

                  {/* EpiPen row */}
                  <div
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium"
                    style={{
                      background: "var(--ll-sage-light)",
                      color: "var(--ll-sage)",
                    }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      aria-hidden="true"
                    >
                      <rect
                        x="5"
                        y="1"
                        width="4"
                        height="12"
                        rx="2"
                        stroke="var(--ll-sage)"
                        strokeWidth="1.2"
                      />
                      <path
                        d="M7 4v3"
                        stroke="var(--ll-sage)"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                    </svg>
                    EpiPen in backpack front pocket
                  </div>
                </div>

                {/* Green checkmark footer */}
                <div
                  className="flex items-center justify-center gap-2 px-5 py-3"
                  style={{
                    background: "var(--ll-sage)",
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M3.5 8.5l3 3 6-6"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-xs font-semibold text-white">
                    Shared with 3 caregivers
                  </span>
                </div>
              </div>

              <p
                className="mt-3 text-center text-xs font-medium tracking-wide uppercase"
                style={{ color: "var(--ll-sage)" }}
              >
                Clear. Current. Always accessible.
              </p>
            </div>
          </div>
        </div>

        {/* Bridge line — "What if you could?" */}
        <div className="mt-16 animate-fade-up delay-300 md:mt-20">
          <p
            className="ll-heading-lg text-center"
            style={{ color: "var(--ll-navy)" }}
          >
What if you could?
          </p>
        </div>
      </div>
    </section>
  );
}
