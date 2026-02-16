export default function Problem() {
  return (
    <section className="ll-section">
      <div className="mx-auto max-w-6xl px-5">
        {/* Section heading */}
        <h2 className="ll-heading-lg animate-fade-up">
          You&apos;ve been the hero all along.
        </h2>

        {/* Two-column editorial layout */}
        <div className="mt-12 grid gap-12 md:grid-cols-[1.5fr_1fr] md:gap-16">
          {/* LEFT — Editorial love letter */}
          <div className="animate-fade-up delay-100">
            <p
              className="text-base leading-[1.8] md:text-lg md:leading-[1.8]"
              style={{ color: "var(--ll-ink)" }}
            >
              You&apos;re the one who called the birthday party mom at 9pm to ask
              about the cupcake ingredients. You&apos;re the one who memorized the
              back of every snack bag in the grocery aisle at midnight, squinting
              at &ldquo;may contain&rdquo; warnings until the words blurred
              together.
            </p>

            <p
              className="mt-6 text-base leading-[1.8] md:text-lg md:leading-[1.8]"
              style={{ color: "var(--ll-ink)" }}
            >
              You rehearsed the emergency plan with babysitters who nodded
              politely but didn&apos;t quite get it. You packed the safe cupcake
              in a labeled container so your kid wouldn&apos;t be the only one
              without dessert. You briefed the substitute teacher, the field trip
              chaperone, the new lunch aide&nbsp;&mdash; and then you briefed them
              again.
            </p>

            <p
              className="mt-6 text-base leading-[1.8] md:text-lg md:leading-[1.8]"
              style={{ color: "var(--ll-muted)" }}
            >
              You&apos;ve been doing all of this alone, with paper forms that get
              lost, text messages that get buried, and a knot in your stomach
              every time your phone rings during lunch hour. That&apos;s not
              weakness. That&apos;s a superhero flying without a cape.
            </p>
          </div>

          {/* RIGHT — Before / After comic panel illustration */}
          <div className="flex flex-col items-center gap-6 animate-fade-up delay-200">
            {/* "Before" — chaotic juggling panel */}
            <div className="relative w-full max-w-[300px]">
              {/* Comic panel border */}
              <div
                className="rounded-xl border-[2.5px] overflow-hidden"
                style={{ borderColor: "var(--ll-navy)" }}
              >
                <svg
                  viewBox="0 0 280 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full"
                  aria-hidden="true"
                >
                  {/* Panel background */}
                  <rect width="280" height="200" fill="#FDFCF8" />

                  {/* Action lines radiating from center — comic style chaos */}
                  <g opacity="0.08">
                    <line x1="140" y1="100" x2="20" y2="20" stroke="var(--ll-navy)" strokeWidth="1.5" />
                    <line x1="140" y1="100" x2="260" y2="15" stroke="var(--ll-navy)" strokeWidth="1.5" />
                    <line x1="140" y1="100" x2="10" y2="130" stroke="var(--ll-navy)" strokeWidth="1.5" />
                    <line x1="140" y1="100" x2="270" y2="140" stroke="var(--ll-navy)" strokeWidth="1.5" />
                    <line x1="140" y1="100" x2="50" y2="190" stroke="var(--ll-navy)" strokeWidth="1.5" />
                    <line x1="140" y1="100" x2="230" y2="190" stroke="var(--ll-navy)" strokeWidth="1.5" />
                  </g>

                  {/* Paper 1 — tilted left, flying away */}
                  <g transform="rotate(-15 55 65)">
                    <rect x="20" y="25" width="70" height="90" rx="3" fill="white" stroke="var(--ll-border)" strokeWidth="1.5" />
                    <rect x="30" y="38" width="35" height="2.5" rx="1" fill="var(--ll-border)" />
                    <rect x="30" y="46" width="48" height="2.5" rx="1" fill="var(--ll-border)" />
                    <rect x="30" y="54" width="28" height="2.5" rx="1" fill="var(--ll-border)" />
                    <rect x="30" y="66" width="42" height="2.5" rx="1" fill="var(--ll-border)" />
                    {/* Allergy tag */}
                    <rect x="30" y="78" width="38" height="12" rx="6" fill="var(--ll-coral-light)" stroke="var(--ll-coral)" strokeWidth="0.8" />
                    <rect x="36" y="82.5" width="26" height="2.5" rx="1" fill="var(--ll-coral)" />
                  </g>

                  {/* Paper 2 — tilted right */}
                  <g transform="rotate(12 210 55)">
                    <rect x="175" y="15" width="70" height="90" rx="3" fill="white" stroke="var(--ll-border)" strokeWidth="1.5" />
                    <rect x="185" y="28" width="40" height="2.5" rx="1" fill="var(--ll-border)" />
                    <rect x="185" y="36" width="50" height="2.5" rx="1" fill="var(--ll-border)" />
                    <rect x="185" y="44" width="30" height="2.5" rx="1" fill="var(--ll-border)" />
                    {/* Allergy tag */}
                    <rect x="185" y="56" width="38" height="12" rx="6" fill="var(--ll-coral-light)" stroke="var(--ll-coral)" strokeWidth="0.8" />
                    <rect x="191" y="60.5" width="26" height="2.5" rx="1" fill="var(--ll-coral)" />
                  </g>

                  {/* Paper 3 — barely hanging on, center-bottom */}
                  <g transform="rotate(5 140 130)">
                    <rect x="100" y="85" width="70" height="90" rx="3" fill="white" stroke="var(--ll-border)" strokeWidth="1.5" />
                    <rect x="110" y="98" width="45" height="2.5" rx="1" fill="var(--ll-border)" />
                    <rect x="110" y="106" width="35" height="2.5" rx="1" fill="var(--ll-border)" />
                    <rect x="110" y="114" width="48" height="2.5" rx="1" fill="var(--ll-border)" />
                    {/* Allergy tag */}
                    <rect x="110" y="126" width="38" height="12" rx="6" fill="var(--ll-coral-light)" stroke="var(--ll-coral)" strokeWidth="0.8" />
                    <rect x="116" y="130.5" width="26" height="2.5" rx="1" fill="var(--ll-coral)" />
                  </g>

                  {/* Scattered question marks — humorous overwhelm */}
                  <text x="18" y="155" fill="var(--ll-coral)" fontSize="18" fontWeight="700" fontFamily="var(--font-display)" opacity="0.5" transform="rotate(-10 18 155)">?</text>
                  <text x="248" y="45" fill="var(--ll-coral)" fontSize="14" fontWeight="700" fontFamily="var(--font-display)" opacity="0.4" transform="rotate(8 248 45)">?</text>
                  <text x="130" y="30" fill="var(--ll-coral)" fontSize="12" fontWeight="700" fontFamily="var(--font-display)" opacity="0.35" transform="rotate(-5 130 30)">?</text>
                  <text x="250" y="175" fill="var(--ll-coral)" fontSize="16" fontWeight="700" fontFamily="var(--font-display)" opacity="0.45" transform="rotate(12 250 175)">?</text>


                  {/* Phone buzzing icon — top right */}
                  <g transform="translate(230, 80)" opacity="0.4">
                    <rect x="0" y="0" width="14" height="22" rx="3" stroke="var(--ll-navy)" strokeWidth="1.5" fill="none" />
                    {/* Buzz lines */}
                    <line x1="-4" y1="5" x2="-2" y2="7" stroke="var(--ll-navy)" strokeWidth="1.2" strokeLinecap="round" />
                    <line x1="-4" y1="14" x2="-2" y2="12" stroke="var(--ll-navy)" strokeWidth="1.2" strokeLinecap="round" />
                    <line x1="16" y1="5" x2="18" y2="7" stroke="var(--ll-navy)" strokeWidth="1.2" strokeLinecap="round" />
                    <line x1="16" y1="14" x2="18" y2="12" stroke="var(--ll-navy)" strokeWidth="1.2" strokeLinecap="round" />
                  </g>
                </svg>
              </div>

              <p
                className="mt-2 text-center text-xs font-medium tracking-wide uppercase"
                style={{ color: "var(--ll-muted)" }}
              >
                Paper forms. Buried texts. Constant vigilance.
              </p>
            </div>

            {/* Dramatic transition arrow with action lines */}
            <div className="flex items-center justify-center relative">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                aria-hidden="true"
              >
                {/* Action burst behind arrow */}
                <line x1="24" y1="6" x2="24" y2="0" stroke="var(--ll-amber)" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
                <line x1="12" y1="10" x2="8" y2="5" stroke="var(--ll-amber)" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
                <line x1="36" y1="10" x2="40" y2="5" stroke="var(--ll-amber)" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
                {/* Arrow */}
                <path
                  d="M24 12v24m0 0l-8-8m8 8l8-8"
                  stroke="var(--ll-amber)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* "After" — powered-up safety card with glow */}
            <div className="w-full max-w-[260px]">
              {/* Comic panel border with glow effect */}
              <div
                className="rounded-xl border-[2.5px] overflow-hidden"
                style={{
                  borderColor: "var(--ll-sage)",
                  boxShadow: "0 0 20px rgba(74, 155, 110, 0.2), 0 0 40px rgba(74, 155, 110, 0.08)",
                }}
              >
                <div className="ll-card overflow-hidden rounded-none border-0 p-0" style={{ boxShadow: "none" }}>
                  {/* Card header — powered up */}
                  <div
                    className="flex items-center gap-3 px-5 py-4"
                    style={{ background: "var(--ll-sage-light)" }}
                  >
                    {/* Shield icon instead of checkbox */}
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M11 2L4 5.5V10.5C4 15.2 7 18.8 11 20C15 18.8 18 15.2 18 10.5V5.5L11 2Z"
                        fill="var(--ll-sage)"
                        fillOpacity="0.15"
                        stroke="var(--ll-sage)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 11.5L10 13.5L14.5 8.5"
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

                  {/* Powered-up footer */}
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
              </div>

              {/* Action lines radiating from card — power-up effect */}
              <div className="relative -mt-1">
                <svg
                  width="260"
                  height="20"
                  viewBox="0 0 260 20"
                  fill="none"
                  aria-hidden="true"
                  className="w-full"
                >
                  <line x1="30" y1="10" x2="10" y2="15" stroke="var(--ll-sage)" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
                  <line x1="230" y1="10" x2="250" y2="15" stroke="var(--ll-sage)" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
                  <line x1="80" y1="8" x2="60" y2="18" stroke="var(--ll-sage)" strokeWidth="1" strokeLinecap="round" opacity="0.2" />
                  <line x1="180" y1="8" x2="200" y2="18" stroke="var(--ll-sage)" strokeWidth="1" strokeLinecap="round" opacity="0.2" />
                </svg>
              </div>

              <p
                className="mt-1 text-center text-xs font-medium tracking-wide uppercase"
                style={{ color: "var(--ll-sage)" }}
              >
                Armed. Shared. Always ready.
              </p>
            </div>
          </div>
        </div>

        {/* Bridge — rallying cry */}
        <div className="mt-16 animate-fade-up delay-300 md:mt-20">
          <div className="mx-auto max-w-3xl text-center">
            {/* Decorative flourish */}
            <svg
              width="60"
              height="8"
              viewBox="0 0 60 8"
              fill="none"
              aria-hidden="true"
              className="mx-auto mb-6"
            >
              <path
                d="M2 4 Q10 1 18 4 Q26 7 34 4 Q42 1 50 4 Q54 5.5 58 4"
                stroke="var(--ll-amber)"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
                opacity="0.5"
              />
            </svg>

            <p
              className="ll-heading-lg"
              style={{ color: "var(--ll-navy)" }}
            >
              You don&apos;t have to do this alone anymore.
            </p>
            <p
              className="mt-4 text-lg md:text-xl"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--ll-amber)",
                fontWeight: 600,
              }}
            >
              The League has your back.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
