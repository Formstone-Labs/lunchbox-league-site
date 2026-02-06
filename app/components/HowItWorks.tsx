export default function HowItWorks() {
  return (
    <section id="how-it-works" className="ll-section">
      <div className="mx-auto max-w-6xl px-5">
        {/* ── Header ── */}
        <div className="mx-auto max-w-2xl text-center animate-fade-up">
          <h2 className="ll-heading-lg">
            How Lunchbox League works.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--ll-muted)]">
            Three steps. Two minutes. Total peace of mind.
          </p>
        </div>

        {/* ── Steps ── */}
        <div className="relative mt-16 flex flex-col gap-16 lg:gap-20">

          {/* Connecting dashed line (desktop only) */}
          <svg
            className="pointer-events-none absolute top-0 left-1/2 hidden h-full w-px -translate-x-1/2 lg:block"
            aria-hidden="true"
          >
            <line
              x1="0" y1="0" x2="0" y2="100%"
              stroke="var(--ll-border)"
              strokeWidth="2"
              strokeDasharray="8 8"
              strokeLinecap="round"
            />
          </svg>

          {/* ─── STEP 1 ─── Text left, visual right */}
          <div className="relative animate-fade-up delay-100">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              {/* Text */}
              <div className="order-2 lg:order-1">
                <StepBadge number={1} />
                <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl text-[var(--ll-navy)] md:text-[1.375rem]">
                  Build your child&apos;s allergy profile
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--ll-muted)] md:text-base md:leading-relaxed">
                  Add their allergens, severity levels, medications, emergency
                  contacts, and action plan. It takes about two minutes.
                </p>
              </div>

              {/* Visual */}
              <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
                <ProfileCardVisual />
              </div>
            </div>
          </div>

          {/* ─── STEP 2 ─── Visual left, text right (zigzag) */}
          <div className="relative animate-fade-up delay-200">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              {/* Visual */}
              <div className="order-1 flex justify-center lg:justify-start">
                <SharingVisual />
              </div>

              {/* Text */}
              <div className="order-2">
                <StepBadge number={2} />
                <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl text-[var(--ll-navy)] md:text-[1.375rem]">
                  Share it with their people
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--ll-muted)] md:text-base md:leading-relaxed">
                  Send your child&apos;s safety profile to teachers, school
                  nurses, coaches, babysitters&nbsp;&mdash; anyone in their
                  life. They get a clear, one-glance summary.
                </p>
              </div>
            </div>
          </div>

          {/* ─── STEP 3 ─── Text left, visual right (back to original) */}
          <div className="relative animate-fade-up delay-300">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              {/* Text */}
              <div className="order-2 lg:order-1">
                <StepBadge number={3} />
                <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl text-[var(--ll-navy)] md:text-[1.375rem]">
                  Stay ready, every morning
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--ll-muted)] md:text-base md:leading-relaxed">
                  Run a quick pack check before school. Update the profile
                  anytime. The emergency plan is always one tap away.
                </p>
              </div>

              {/* Visual */}
              <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
                <ChecklistVisual />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   Step badge — small circle with number
   ================================================================ */

function StepBadge({ number }: { number: number }) {
  return (
    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--ll-navy)] text-sm font-bold text-white shadow-sm">
      {number}
    </div>
  );
}

/* ================================================================
   STEP 1 VISUAL — Allergy profile card being filled out
   ================================================================ */

function ProfileCardVisual() {
  return (
    <div className="ll-card w-full max-w-sm p-6">
      {/* Card header */}
      <div className="flex items-center gap-3">
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          aria-hidden="true"
        >
          {/* Person silhouette */}
          <circle cx="18" cy="12" r="6" fill="var(--ll-navy)" opacity="0.15" />
          <path
            d="M8 32c0-6 4.5-10 10-10s10 4 10 10"
            fill="var(--ll-navy)"
            opacity="0.15"
          />
          {/* Card outline */}
          <rect
            x="2"
            y="2"
            width="32"
            height="32"
            rx="8"
            stroke="var(--ll-navy)"
            strokeWidth="2"
            fill="none"
          />
        </svg>
        <div>
          <div className="text-sm font-semibold text-[var(--ll-navy)]">
            Allergy Profile
          </div>
          <div className="text-xs text-[var(--ll-muted)]">
            Riley M., age 7
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="my-4 h-px bg-[var(--ll-border)]" />

      {/* Allergen tags */}
      <div className="text-xs font-medium uppercase tracking-wider text-[var(--ll-muted)]">
        Allergens
      </div>
      <div className="mt-2.5 flex flex-wrap gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--ll-coral-light)] px-3 py-1 text-xs font-semibold text-[var(--ll-coral)]">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
            <path d="M2 2l6 6M8 2l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          Avoid: Peanut
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--ll-amber-light)] px-3 py-1 text-xs font-semibold text-[var(--ll-amber)]">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
            <path d="M5 2v4M5 7.5v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          Check: Egg
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--ll-sage-light)] px-3 py-1 text-xs font-semibold text-[var(--ll-sage)]">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
            <path d="M2 5.5L4 7.5L8 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Safe: Dairy
        </span>
      </div>

      {/* Severity + medication row */}
      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="rounded-lg bg-[var(--ll-cream-dark)] px-3 py-2">
          <div className="text-[10px] font-medium uppercase tracking-wider text-[var(--ll-muted)]">
            Severity
          </div>
          <div className="mt-0.5 text-sm font-semibold text-[var(--ll-coral)]">
            Anaphylaxis
          </div>
        </div>
        <div className="rounded-lg bg-[var(--ll-cream-dark)] px-3 py-2">
          <div className="text-[10px] font-medium uppercase tracking-wider text-[var(--ll-muted)]">
            Medication
          </div>
          <div className="mt-0.5 text-sm font-semibold text-[var(--ll-navy)]">
            EpiPen Jr.
          </div>
        </div>
      </div>

      {/* Emergency contact */}
      <div className="mt-4 flex items-center gap-2 rounded-lg border border-dashed border-[var(--ll-border)] px-3 py-2">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M3 2.5A1.5 1.5 0 014.5 1h7A1.5 1.5 0 0113 2.5v11a1.5 1.5 0 01-1.5 1.5h-7A1.5 1.5 0 013 13.5v-11z"
            stroke="var(--ll-muted)"
            strokeWidth="1.2"
            fill="none"
          />
          <line
            x1="6"
            y1="12"
            x2="10"
            y2="12"
            stroke="var(--ll-muted)"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
        <div className="text-xs text-[var(--ll-muted)]">
          <span className="font-medium text-[var(--ll-ink)]">Mom:</span>{" "}
          (555) 012-3456
        </div>
      </div>
    </div>
  );
}

/* ================================================================
   STEP 2 VISUAL — Hub-and-spoke sharing diagram
   ================================================================ */

function SharingVisual() {
  return (
    <div className="ll-card flex w-full max-w-sm items-center justify-center p-8">
      <svg
        width="280"
        height="240"
        viewBox="0 0 280 240"
        fill="none"
        aria-hidden="true"
        className="w-full max-w-[280px]"
      >
        {/* ── Central card ── */}
        <rect
          x="100" y="80" width="80" height="80" rx="14"
          fill="#FFFCF7"
          stroke="var(--ll-navy)"
          strokeWidth="2"
        />
        {/* Shield on card */}
        <path
          d="M130 100 Q140 92 150 100 L150 118 Q140 128 130 118 Z"
          fill="var(--ll-sage)"
          opacity="0.8"
        />
        <path
          d="M135 110 L139 114 L146 105"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Small "card" label */}
        <rect x="113" y="130" width="54" height="6" rx="3" fill="var(--ll-border)" />
        <rect x="118" y="140" width="44" height="4" rx="2" fill="var(--ll-border)" opacity="0.6" />

        {/* ── Connecting lines (dashed, hand-drawn feel) ── */}
        {/* To Teacher (top-left) */}
        <path
          d="M110 90 Q80 60 60 42"
          stroke="var(--ll-amber)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          strokeLinecap="round"
          fill="none"
        />
        {/* To Nurse (top-right) */}
        <path
          d="M170 90 Q200 60 220 42"
          stroke="var(--ll-sky)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          strokeLinecap="round"
          fill="none"
        />
        {/* To Coach (bottom-left) */}
        <path
          d="M110 150 Q80 175 60 198"
          stroke="var(--ll-sage)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          strokeLinecap="round"
          fill="none"
        />
        {/* To Sitter (bottom-right) */}
        <path
          d="M170 150 Q200 175 220 198"
          stroke="var(--ll-coral)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          strokeLinecap="round"
          fill="none"
        />

        {/* ── Person avatars ── */}

        {/* Teacher — top-left */}
        <circle cx="46" cy="28" r="22" fill="var(--ll-amber-light)" />
        <circle cx="46" cy="22" r="6" fill="var(--ll-navy)" opacity="0.25" />
        <path d="M36 40c0-5 4.5-8 10-8s10 3 10 8" fill="var(--ll-navy)" opacity="0.15" />
        <text
          x="46" y="56" textAnchor="middle"
          fontSize="9" fontWeight="600" fill="var(--ll-navy)"
          fontFamily="var(--font-body)"
        >
          Teacher
        </text>

        {/* Nurse — top-right */}
        <circle cx="234" cy="28" r="22" fill="var(--ll-sky-light)" />
        <circle cx="234" cy="22" r="6" fill="var(--ll-navy)" opacity="0.25" />
        <path d="M224 40c0-5 4.5-8 10-8s10 3 10 8" fill="var(--ll-navy)" opacity="0.15" />
        <text
          x="234" y="56" textAnchor="middle"
          fontSize="9" fontWeight="600" fill="var(--ll-navy)"
          fontFamily="var(--font-body)"
        >
          Nurse
        </text>

        {/* Coach — bottom-left */}
        <circle cx="46" cy="210" r="22" fill="var(--ll-sage-light)" />
        <circle cx="46" cy="204" r="6" fill="var(--ll-navy)" opacity="0.25" />
        <path d="M36 222c0-5 4.5-8 10-8s10 3 10 8" fill="var(--ll-navy)" opacity="0.15" />
        <text
          x="46" y="238" textAnchor="middle"
          fontSize="9" fontWeight="600" fill="var(--ll-navy)"
          fontFamily="var(--font-body)"
        >
          Coach
        </text>

        {/* Sitter — bottom-right */}
        <circle cx="234" cy="210" r="22" fill="var(--ll-coral-light)" />
        <circle cx="234" cy="204" r="6" fill="var(--ll-navy)" opacity="0.25" />
        <path d="M224 222c0-5 4.5-8 10-8s10 3 10 8" fill="var(--ll-navy)" opacity="0.15" />
        <text
          x="234" y="238" textAnchor="middle"
          fontSize="9" fontWeight="600" fill="var(--ll-navy)"
          fontFamily="var(--font-body)"
        >
          Sitter
        </text>

        {/* Small send arrows on lines */}
        {/* Arrow on top-left line */}
        <path
          d="M78 60 l-5-2 l1 5"
          stroke="var(--ll-amber)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Arrow on top-right line */}
        <path
          d="M202 60 l5-2 l-1 5"
          stroke="var(--ll-sky)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Arrow on bottom-left line */}
        <path
          d="M78 180 l-5 2 l1-5"
          stroke="var(--ll-sage)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Arrow on bottom-right line */}
        <path
          d="M202 180 l5 2 l-1-5"
          stroke="var(--ll-coral)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </div>
  );
}

/* ================================================================
   STEP 3 VISUAL — Checklist + emergency card
   ================================================================ */

function ChecklistVisual() {
  return (
    <div className="ll-card flex w-full max-w-sm gap-4 p-6">
      {/* Left side: checklist */}
      <div className="flex-1">
        <div className="text-xs font-medium uppercase tracking-wider text-[var(--ll-muted)]">
          Morning Pack Check
        </div>
        <div className="mt-3 space-y-2.5">
          {[
            { label: "Label verified", done: true },
            { label: "Safe snack packed", done: true },
            { label: "Medication location", done: true },
            { label: "Teacher notified", done: false },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2.5">
              <div
                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded ${
                  item.done
                    ? "bg-[var(--ll-sage)] shadow-sm"
                    : "border-2 border-[var(--ll-border)] bg-white"
                }`}
              >
                {item.done && (
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2.5 6.5L5 9L9.5 3.5"
                      stroke="white"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
              <span
                className={`text-sm ${
                  item.done
                    ? "text-[var(--ll-muted)] line-through"
                    : "font-medium text-[var(--ll-ink)]"
                }`}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="mt-4">
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-[var(--ll-cream-dark)]">
            <div
              className="h-full rounded-full bg-[var(--ll-sage)]"
              style={{ width: "75%" }}
            />
          </div>
          <div className="mt-1 text-[11px] text-[var(--ll-muted)]">
            3 of 4 complete
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-px bg-[var(--ll-border)]" />

      {/* Right side: emergency quick card */}
      <div className="flex w-28 flex-col items-center justify-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--ll-coral-light)]">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            aria-hidden="true"
          >
            {/* Phone outline */}
            <rect
              x="6"
              y="2"
              width="16"
              height="24"
              rx="4"
              stroke="var(--ll-coral)"
              strokeWidth="2"
              fill="none"
            />
            {/* Screen */}
            <rect
              x="8"
              y="6"
              width="12"
              height="14"
              rx="1"
              fill="var(--ll-coral)"
              opacity="0.12"
            />
            {/* Cross / plus (emergency) */}
            <line
              x1="14" y1="9" x2="14" y2="17"
              stroke="var(--ll-coral)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <line
              x1="10" y1="13" x2="18" y2="13"
              stroke="var(--ll-coral)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* Home button */}
            <line
              x1="12" y1="23" x2="16" y2="23"
              stroke="var(--ll-coral)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="mt-3 text-center text-xs font-semibold text-[var(--ll-coral)]">
          Emergency Plan
        </div>
        <div className="mt-1 text-center text-[10px] leading-tight text-[var(--ll-muted)]">
          Always one tap away
        </div>
      </div>
    </div>
  );
}
