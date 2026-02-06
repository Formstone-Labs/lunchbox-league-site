export default function Features() {
  return (
    <section id="features" className="ll-section">
      <div className="mx-auto max-w-6xl px-5">
        {/* ── Header ── */}
        <div className="mx-auto max-w-2xl text-center animate-fade-up">
          <h2 className="ll-heading-lg">
            Everything you need. Nothing you don&apos;t.
          </h2>
        </div>

        {/* ── Asymmetric grid ──
            Row 1: large (2 cols) + regular (1 col)
            Row 2: regular (1 col) + large (2 cols)
            Row 3: regular (1 col) + regular (1 col) + empty/fill
        */}
        <div className="mt-14 grid gap-5 md:grid-cols-3">

          {/* ── Row 1 ── */}

          {/* 1. Allergy Profile Card — FEATURED, spans 2 cols */}
          <div className="animate-fade-up delay-100 ll-card ll-card-hover border-l-4 border-l-[var(--ll-amber)] p-7 md:col-span-2">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--ll-amber-light)]">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  aria-hidden="true"
                >
                  {/* Card body */}
                  <rect
                    x="3" y="4" width="22" height="20" rx="4"
                    stroke="var(--ll-amber)"
                    strokeWidth="2"
                    fill="none"
                  />
                  {/* Shield */}
                  <path
                    d="M11 10 Q14 7 17 10 L17 17 Q14 21 11 17 Z"
                    fill="var(--ll-amber)"
                    opacity="0.3"
                  />
                  <path
                    d="M11 10 Q14 7 17 10 L17 17 Q14 21 11 17 Z"
                    stroke="var(--ll-amber)"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  {/* Checkmark inside shield */}
                  <path
                    d="M12.5 14 L13.8 15.5 L16 12"
                    stroke="var(--ll-amber)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-display)] text-lg text-[var(--ll-navy)]">
                  Allergy Profile Card
                </h3>
                <p className="mt-2 text-base leading-relaxed text-[var(--ll-muted)]">
                  One card with your child&apos;s allergens, severity,
                  medications, and emergency contacts. Readable at a glance by
                  anyone you share it with.
                </p>
              </div>
            </div>
          </div>

          {/* 2. Easy Sharing — regular */}
          <div className="animate-fade-up delay-200 ll-card ll-card-hover p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--ll-sky-light)]">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                aria-hidden="true"
              >
                {/* Card shape */}
                <rect
                  x="2" y="6" width="16" height="16" rx="3"
                  stroke="var(--ll-sky)"
                  strokeWidth="2"
                  fill="none"
                />
                {/* Arrow leaving card */}
                <path
                  d="M18 14 L25 14"
                  stroke="var(--ll-sky)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M22 10.5 L25.5 14 L22 17.5"
                  stroke="var(--ll-sky)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                {/* Lines on card */}
                <line
                  x1="6" y1="11" x2="14" y2="11"
                  stroke="var(--ll-sky)"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  opacity="0.5"
                />
                <line
                  x1="6" y1="14" x2="12" y2="14"
                  stroke="var(--ll-sky)"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  opacity="0.5"
                />
                <line
                  x1="6" y1="17" x2="13" y2="17"
                  stroke="var(--ll-sky)"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  opacity="0.5"
                />
              </svg>
            </div>
            <h3 className="mt-4 font-[family-name:var(--font-display)] text-lg text-[var(--ll-navy)]">
              Easy Sharing
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--ll-muted)]">
              Share with teachers, nurses, coaches, and caregivers. Always
              current. Always clear.
            </p>
          </div>

          {/* ── Row 2 ── */}

          {/* 3. Emergency Plan — regular */}
          <div className="animate-fade-up delay-100 ll-card ll-card-hover p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--ll-coral-light)]">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                aria-hidden="true"
              >
                {/* Document */}
                <rect
                  x="5" y="2" width="18" height="24" rx="3"
                  stroke="var(--ll-coral)"
                  strokeWidth="2"
                  fill="none"
                />
                {/* Alert triangle */}
                <path
                  d="M14 9 L19 18 H9 Z"
                  stroke="var(--ll-coral)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="var(--ll-coral)"
                  opacity="0.2"
                />
                <path
                  d="M14 9 L19 18 H9 Z"
                  stroke="var(--ll-coral)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                {/* Exclamation mark */}
                <line
                  x1="14" y1="12" x2="14" y2="15"
                  stroke="var(--ll-coral)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <circle cx="14" cy="16.8" r="0.8" fill="var(--ll-coral)" />
                {/* Document lines */}
                <line
                  x1="9" y1="22" x2="19" y2="22"
                  stroke="var(--ll-coral)"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  opacity="0.4"
                />
              </svg>
            </div>
            <h3 className="mt-4 font-[family-name:var(--font-display)] text-lg text-[var(--ll-navy)]">
              Emergency Plan
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--ll-muted)]">
              Pinned. Printable. High-contrast. When seconds matter, everything
              is big type and zero ambiguity.
            </p>
          </div>

          {/* 4. Pack Check — FEATURED, spans 2 cols */}
          <div className="animate-fade-up delay-200 ll-card ll-card-hover border-l-4 border-l-[var(--ll-sage)] p-7 md:col-span-2">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--ll-sage-light)]">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  aria-hidden="true"
                >
                  {/* Clipboard body */}
                  <rect
                    x="4" y="5" width="20" height="21" rx="3"
                    stroke="var(--ll-sage)"
                    strokeWidth="2"
                    fill="none"
                  />
                  {/* Clipboard top */}
                  <rect
                    x="10" y="2" width="8" height="5" rx="2"
                    stroke="var(--ll-sage)"
                    strokeWidth="1.5"
                    fill="var(--ll-sage-light)"
                  />
                  {/* Check line 1 */}
                  <path
                    d="M8 13 L10 15 L13 11"
                    stroke="var(--ll-sage)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  <line
                    x1="15" y1="13" x2="21" y2="13"
                    stroke="var(--ll-sage)"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    opacity="0.5"
                  />
                  {/* Check line 2 */}
                  <path
                    d="M8 19 L10 21 L13 17"
                    stroke="var(--ll-sage)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  <line
                    x1="15" y1="19" x2="20" y2="19"
                    stroke="var(--ll-sage)"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    opacity="0.5"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-display)] text-lg text-[var(--ll-navy)]">
                  Pack Check
                </h3>
                <p className="mt-2 text-base leading-relaxed text-[var(--ll-muted)]">
                  A 15-second checklist before school. Label verified? Safe
                  snack packed? Medication location confirmed?
                </p>
              </div>
            </div>
          </div>

          {/* ── Row 3 ── */}

          {/* 5. Multiple Children — regular, offset to center the row */}
          <div className="animate-fade-up delay-100 ll-card ll-card-hover p-6 md:col-span-1">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--ll-amber-light)]">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                aria-hidden="true"
              >
                {/* Person 1 */}
                <circle cx="10" cy="9" r="4" stroke="var(--ll-amber)" strokeWidth="1.8" fill="none" />
                <path
                  d="M3 22c0-4.5 3-7.5 7-7.5s7 3 7 7.5"
                  stroke="var(--ll-amber)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  fill="none"
                />
                {/* Person 2 (offset, overlapping) */}
                <circle cx="19" cy="11" r="3.5" stroke="var(--ll-amber)" strokeWidth="1.8" fill="var(--ll-amber-light)" />
                <path
                  d="M13 24c0-3.5 2.5-6 6-6s6 2.5 6 6"
                  stroke="var(--ll-amber)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </div>
            <h3 className="mt-4 font-[family-name:var(--font-display)] text-lg text-[var(--ll-navy)]">
              Multiple Children
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--ll-muted)]">
              One account for your whole family. Each child gets their own
              profile and safety card.
            </p>
          </div>

          {/* 6. Works Offline — regular */}
          <div className="animate-fade-up delay-200 ll-card ll-card-hover p-6 md:col-span-1">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--ll-sage-light)]">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                aria-hidden="true"
              >
                {/* WiFi arcs */}
                <path
                  d="M4 11c5.5-5 14.5-5 20 0"
                  stroke="var(--ll-sage)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.3"
                />
                <path
                  d="M7.5 15c3.5-3.5 9.5-3.5 13 0"
                  stroke="var(--ll-sage)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.3"
                />
                <circle cx="14" cy="20" r="2" fill="var(--ll-sage)" opacity="0.3" />
                {/* Slash through wifi */}
                <line
                  x1="5" y1="5" x2="23" y2="23"
                  stroke="var(--ll-sage)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                {/* Checkmark (bottom right) */}
                <path
                  d="M18 21 L20.5 23.5 L25 18"
                  stroke="var(--ll-sage)"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </div>
            <h3 className="mt-4 font-[family-name:var(--font-display)] text-lg text-[var(--ll-navy)]">
              Works Offline
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--ll-muted)]">
              Shared profiles are saved for offline access. The emergency plan
              works even without a signal.
            </p>
          </div>

          {/* Empty cell to maintain asymmetry on desktop — the third column
              in row 3 is intentionally empty, keeping the two cards left-aligned */}
        </div>
      </div>
    </section>
  );
}
