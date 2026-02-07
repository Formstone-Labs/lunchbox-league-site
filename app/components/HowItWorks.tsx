export default function HowItWorks() {
  return (
    <section id="how-it-works" className="ll-section">
      <div className="mx-auto max-w-6xl px-5">
        {/* ── Header ── */}
        <div className="mx-auto max-w-2xl text-center animate-fade-up">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--ll-coral)]">
            The Origin Story
          </p>
          <h2 className="mt-3 ll-heading-lg">
            How heroes are made.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--ll-muted)]">
            Every great hero has an origin story. Yours starts right here,
            right now, in about two minutes flat.
          </p>
        </div>

        {/* ── Steps ── */}
        <div className="relative mt-16 flex flex-col gap-20 lg:gap-24">

          {/* Journey path connecting line (desktop only) */}
          <svg
            className="pointer-events-none absolute top-0 left-1/2 hidden h-full w-px -translate-x-1/2 lg:block"
            aria-hidden="true"
          >
            <line
              x1="0" y1="24" x2="0" y2="100%"
              stroke="var(--ll-amber)"
              strokeWidth="2"
              strokeDasharray="6 8"
              strokeLinecap="round"
              opacity="0.35"
            />
            {/* Journey dots at each step */}
            <circle cx="0" cy="60" r="4" fill="var(--ll-amber)" opacity="0.5" />
            <circle cx="0" cy="50%" r="4" fill="var(--ll-coral)" opacity="0.5" />
            <circle cx="0" cy="85%" r="4" fill="var(--ll-sage)" opacity="0.5" />
          </svg>

          {/* ─── STEP 1: Forge Your Shield ─── Text left, visual right */}
          <div className="relative animate-fade-up delay-100">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              {/* Text */}
              <div className="order-2 lg:order-1">
                <StepBadge number={1} color="var(--ll-amber)" />
                <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl font-bold text-[var(--ll-navy)] md:text-2xl">
                  Forge your Shield
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--ll-muted)] md:text-base md:leading-relaxed">
                  Every hero needs armor. Build your child&apos;s allergy profile
                  &mdash; allergens, medications, emergency contacts, action plan
                  &mdash; and watch it come together into one powerful, shareable
                  safety card. Two minutes to craft. A lifetime of protection.
                </p>
                <div className="mt-5 flex items-center gap-2 text-sm font-medium text-[var(--ll-amber)]">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M8 1l2 4.5 5 .5-3.8 3.4L12.3 14 8 11.5 3.7 14l1.1-4.6L1 6l5-.5z" fill="currentColor" opacity="0.6" />
                  </svg>
                  Takes about 2 minutes
                </div>
              </div>

              {/* Visual */}
              <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
                <ForgeShieldVisual />
              </div>
            </div>
          </div>

          {/* ─── STEP 2: Assemble Your League ─── Visual left, text right */}
          <div className="relative animate-fade-up delay-200">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              {/* Visual */}
              <div className="order-1 flex justify-center lg:justify-start">
                <AssembleLeagueVisual />
              </div>

              {/* Text */}
              <div className="order-2">
                <StepBadge number={2} color="var(--ll-coral)" />
                <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl font-bold text-[var(--ll-navy)] md:text-2xl">
                  Assemble your League
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--ll-muted)] md:text-base md:leading-relaxed">
                  No hero works alone. Share the Shield with teachers, nurses,
                  coaches, grandparents, babysitters &mdash; every ally in your
                  child&apos;s world. They each get a clear, one-glance briefing
                  and their own role on the team.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {["Teacher", "Nurse", "Coach", "Grandparent", "Sitter"].map((role) => (
                    <span
                      key={role}
                      className="inline-flex items-center gap-1.5 rounded-full bg-[var(--ll-cream-dark)] px-3 py-1 text-xs font-semibold text-[var(--ll-navy)]"
                    >
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
                        <circle cx="4" cy="4" r="3" fill="var(--ll-coral)" opacity="0.4" />
                      </svg>
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ─── STEP 3: Activate Daily Defense ─── Text left, visual right */}
          <div className="relative animate-fade-up delay-300">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              {/* Text */}
              <div className="order-2 lg:order-1">
                <StepBadge number={3} color="var(--ll-sage)" />
                <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl font-bold text-[var(--ll-navy)] md:text-2xl">
                  Activate daily defense
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--ll-muted)] md:text-base md:leading-relaxed">
                  Every morning, a 15-second mission briefing before school:
                  snack verified, medication confirmed, teacher notified. Your
                  kid walks in confident &mdash; and so do you. Their battle
                  plan stays one tap away, all day.
                </p>
                <div className="mt-5 flex items-center gap-2 text-sm font-medium text-[var(--ll-sage)]">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M2 8.5L6 12.5L14 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                  15 seconds every morning
                </div>
              </div>

              {/* Visual */}
              <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
                <MissionBriefVisual />
              </div>
            </div>
          </div>
        </div>

        {/* ── Closing tagline ── */}
        <div className="animate-fade-up delay-400 mt-20 text-center">
          <p className="font-[family-name:var(--font-display)] text-lg font-bold text-[var(--ll-navy)] md:text-xl">
            Origin story complete. Time to fly.
          </p>
          <div className="mx-auto mt-3 flex items-center justify-center gap-1.5">
            <svg width="20" height="2" viewBox="0 0 20 2" aria-hidden="true">
              <line x1="0" y1="1" x2="20" y2="1" stroke="var(--ll-amber)" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <svg width="8" height="8" viewBox="0 0 8 8" aria-hidden="true">
              <path d="M1 4 L4 1 L7 4 L4 7 Z" fill="var(--ll-amber)" />
            </svg>
            <svg width="20" height="2" viewBox="0 0 20 2" aria-hidden="true">
              <line x1="0" y1="1" x2="20" y2="1" stroke="var(--ll-amber)" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   Step badge — numbered circle with color accent
   ================================================================ */

function StepBadge({ number, color }: { number: number; color: string }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white shadow-sm"
        style={{ background: color }}
      >
        {number}
      </div>
      <div className="h-px w-8" style={{ background: color, opacity: 0.3 }} />
      <span
        className="text-xs font-semibold uppercase tracking-widest"
        style={{ color }}
      >
        Step {number}
      </span>
    </div>
  );
}

/* ================================================================
   STEP 1 VISUAL — Shield being forged with energy / sparkle
   ================================================================ */

function ForgeShieldVisual() {
  return (
    <div className="ll-card relative w-full max-w-sm overflow-hidden p-6">
      {/* Ambient sparkle dots */}
      <div className="absolute top-3 right-4 h-2 w-2 rounded-full bg-[var(--ll-amber)] opacity-40" style={{ animation: "fade-in 1.5s ease-in-out infinite alternate" }} />
      <div className="absolute top-8 right-10 h-1.5 w-1.5 rounded-full bg-[var(--ll-amber)] opacity-25" style={{ animation: "fade-in 2s ease-in-out infinite alternate 0.5s" }} />
      <div className="absolute bottom-6 left-4 h-1.5 w-1.5 rounded-full bg-[var(--ll-amber)] opacity-30" style={{ animation: "fade-in 1.8s ease-in-out infinite alternate 0.3s" }} />

      {/* Card header */}
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--ll-amber-light)]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {/* Shield shape */}
            <path
              d="M5 6 Q12 2 19 6 L19 14 Q12 22 5 14 Z"
              fill="var(--ll-amber)"
              opacity="0.2"
            />
            <path
              d="M5 6 Q12 2 19 6 L19 14 Q12 22 5 14 Z"
              stroke="var(--ll-amber)"
              strokeWidth="1.8"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Checkmark */}
            <path d="M9 13 L11 15.5 L16 10" stroke="var(--ll-amber)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
        </div>
        <div>
          <div className="text-sm font-semibold text-[var(--ll-navy)]">
            Allergy Shield
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

      {/* Severity + medication */}
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
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M3 2.5A1.5 1.5 0 014.5 1h7A1.5 1.5 0 0113 2.5v11a1.5 1.5 0 01-1.5 1.5h-7A1.5 1.5 0 013 13.5v-11z" stroke="var(--ll-muted)" strokeWidth="1.2" fill="none" />
          <line x1="6" y1="12" x2="10" y2="12" stroke="var(--ll-muted)" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
        <div className="text-xs text-[var(--ll-muted)]">
          <span className="font-medium text-[var(--ll-ink)]">Mom:</span>{" "}
          (555) 012-3456
        </div>
      </div>

      {/* Forge energy bar */}
      <div className="mt-5">
        <div className="flex items-center justify-between text-[11px] text-[var(--ll-muted)]">
          <span className="font-medium text-[var(--ll-amber)]">Shield strength</span>
          <span>100%</span>
        </div>
        <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-[var(--ll-cream-dark)]">
          <div
            className="h-full rounded-full"
            style={{
              width: "100%",
              background: "linear-gradient(90deg, var(--ll-amber), #F7BD5E)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

/* ================================================================
   STEP 2 VISUAL — Hub-and-spoke league assembly
   ================================================================ */

function AssembleLeagueVisual() {
  return (
    <div className="ll-card flex w-full max-w-sm items-center justify-center p-8">
      <svg
        width="280"
        height="260"
        viewBox="0 0 280 260"
        fill="none"
        aria-hidden="true"
        className="w-full max-w-[280px]"
      >
        {/* ── Energy ring around center ── */}
        <circle
          cx="140" cy="120" r="50"
          stroke="var(--ll-amber)"
          strokeWidth="1"
          strokeDasharray="3 5"
          fill="none"
          opacity="0.3"
        />
        <circle
          cx="140" cy="120" r="58"
          stroke="var(--ll-coral)"
          strokeWidth="0.8"
          strokeDasharray="2 6"
          fill="none"
          opacity="0.2"
        />

        {/* ── Central shield card ── */}
        <rect
          x="104" y="84" width="72" height="72" rx="16"
          fill="#FFFCF7"
          stroke="var(--ll-navy)"
          strokeWidth="2"
        />
        {/* Shield emblem */}
        <path
          d="M130 100 Q140 93 150 100 L150 118 Q140 128 130 118 Z"
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
        <text
          x="140" y="146" textAnchor="middle"
          fontSize="8" fontWeight="600" fill="var(--ll-muted)"
          fontFamily="var(--font-body)"
        >
          THE SHIELD
        </text>

        {/* ── Connecting energy beams (curved, with glow) ── */}
        {/* To Teacher (top-left) */}
        <path d="M112 94 Q78 62 54 40" stroke="var(--ll-amber)" strokeWidth="1.8" strokeDasharray="5 4" strokeLinecap="round" fill="none" />
        {/* To Nurse (top-right) */}
        <path d="M168 94 Q202 62 226 40" stroke="var(--ll-sky)" strokeWidth="1.8" strokeDasharray="5 4" strokeLinecap="round" fill="none" />
        {/* To Coach (bottom-left) */}
        <path d="M112 146 Q78 178 54 206" stroke="var(--ll-sage)" strokeWidth="1.8" strokeDasharray="5 4" strokeLinecap="round" fill="none" />
        {/* To Grandparent (bottom-right) */}
        <path d="M168 146 Q202 178 226 206" stroke="var(--ll-coral)" strokeWidth="1.8" strokeDasharray="5 4" strokeLinecap="round" fill="none" />
        {/* To Sitter (right) */}
        <path d="M176 120 Q220 120 254 120" stroke="var(--ll-amber)" strokeWidth="1.8" strokeDasharray="5 4" strokeLinecap="round" fill="none" opacity="0.7" />

        {/* Small energy sparks along beams */}
        <circle cx="82" cy="67" r="2" fill="var(--ll-amber)" opacity="0.5" />
        <circle cx="198" cy="67" r="2" fill="var(--ll-sky)" opacity="0.5" />
        <circle cx="82" cy="177" r="2" fill="var(--ll-sage)" opacity="0.5" />
        <circle cx="198" cy="177" r="2" fill="var(--ll-coral)" opacity="0.5" />

        {/* ── Person nodes with role badges ── */}

        {/* Teacher (top-left) */}
        <circle cx="40" cy="28" r="20" fill="var(--ll-amber-light)" stroke="var(--ll-amber)" strokeWidth="1.5" />
        <circle cx="40" cy="22" r="5.5" fill="var(--ll-navy)" opacity="0.2" />
        <path d="M31 37c0-4.5 4-7 9-7s9 2.5 9 7" fill="var(--ll-navy)" opacity="0.12" />
        {/* Role badge */}
        <rect x="12" y="46" width="56" height="18" rx="9" fill="var(--ll-amber)" opacity="0.15" />
        <text x="40" y="58" textAnchor="middle" fontSize="8" fontWeight="700" fill="var(--ll-amber)" fontFamily="var(--font-body)">
          TEACHER
        </text>

        {/* Nurse (top-right) */}
        <circle cx="240" cy="28" r="20" fill="var(--ll-sky-light)" stroke="var(--ll-sky)" strokeWidth="1.5" />
        <circle cx="240" cy="22" r="5.5" fill="var(--ll-navy)" opacity="0.2" />
        <path d="M231 37c0-4.5 4-7 9-7s9 2.5 9 7" fill="var(--ll-navy)" opacity="0.12" />
        {/* Cross on nurse */}
        <line x1="240" y1="19" x2="240" y2="26" stroke="var(--ll-sky)" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
        <line x1="236.5" y1="22.5" x2="243.5" y2="22.5" stroke="var(--ll-sky)" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
        <rect x="215" y="46" width="50" height="18" rx="9" fill="var(--ll-sky)" opacity="0.15" />
        <text x="240" y="58" textAnchor="middle" fontSize="8" fontWeight="700" fill="var(--ll-sky)" fontFamily="var(--font-body)">
          NURSE
        </text>

        {/* Coach (bottom-left) */}
        <circle cx="40" cy="218" r="20" fill="var(--ll-sage-light)" stroke="var(--ll-sage)" strokeWidth="1.5" />
        <circle cx="40" cy="212" r="5.5" fill="var(--ll-navy)" opacity="0.2" />
        <path d="M31 227c0-4.5 4-7 9-7s9 2.5 9 7" fill="var(--ll-navy)" opacity="0.12" />
        <rect x="14" y="236" width="52" height="18" rx="9" fill="var(--ll-sage)" opacity="0.15" />
        <text x="40" y="248" textAnchor="middle" fontSize="8" fontWeight="700" fill="var(--ll-sage)" fontFamily="var(--font-body)">
          COACH
        </text>

        {/* Grandparent (bottom-right) */}
        <circle cx="240" cy="218" r="20" fill="var(--ll-coral-light)" stroke="var(--ll-coral)" strokeWidth="1.5" />
        <circle cx="240" cy="212" r="5.5" fill="var(--ll-navy)" opacity="0.2" />
        <path d="M231 227c0-4.5 4-7 9-7s9 2.5 9 7" fill="var(--ll-navy)" opacity="0.12" />
        <rect x="210" y="236" width="60" height="18" rx="9" fill="var(--ll-coral)" opacity="0.15" />
        <text x="240" y="248" textAnchor="middle" fontSize="8" fontWeight="700" fill="var(--ll-coral)" fontFamily="var(--font-body)">
          GRANDMA
        </text>

        {/* Sitter (right side) */}
        <circle cx="264" cy="120" r="16" fill="var(--ll-amber-light)" stroke="var(--ll-amber)" strokeWidth="1" />
        <circle cx="264" cy="116" r="4" fill="var(--ll-navy)" opacity="0.2" />
        <path d="M257 126c0-3 3-5 7-5s7 2 7 5" fill="var(--ll-navy)" opacity="0.12" />
        <text x="264" y="143" textAnchor="middle" fontSize="7" fontWeight="600" fill="var(--ll-amber)" fontFamily="var(--font-body)" opacity="0.8">
          SITTER
        </text>

        {/* Decorative action lines / sparkle bursts */}
        <g opacity="0.25">
          {/* Small starburst near teacher */}
          <line x1="64" y1="18" x2="69" y2="14" stroke="var(--ll-amber)" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="66" y1="12" x2="68" y2="20" stroke="var(--ll-amber)" strokeWidth="1.2" strokeLinecap="round" />
          {/* Small starburst near nurse */}
          <line x1="216" y1="14" x2="211" y2="10" stroke="var(--ll-sky)" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="213" y1="8" x2="214" y2="16" stroke="var(--ll-sky)" strokeWidth="1.2" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

/* ================================================================
   STEP 3 VISUAL — Mission briefing checklist
   ================================================================ */

function MissionBriefVisual() {
  return (
    <div className="ll-card relative w-full max-w-sm overflow-hidden p-6">
      {/* Top bar — mission header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--ll-sage-light)]">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M2 4h12M2 8h8M2 12h10" stroke="var(--ll-sage)" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[var(--ll-sage)]">
              Daily Mission
            </div>
            <div className="text-[10px] text-[var(--ll-muted)]">
              Tuesday, 7:15 AM
            </div>
          </div>
        </div>
        <div className="flex h-6 items-center rounded-full bg-[var(--ll-sage-light)] px-2.5 text-[10px] font-bold text-[var(--ll-sage)]">
          ACTIVE
        </div>
      </div>

      {/* Divider */}
      <div className="my-4 h-px bg-[var(--ll-border)]" />

      {/* Checklist items */}
      <div className="space-y-3">
        {[
          { label: "Safe snack packed", detail: "SunButter crackers", done: true },
          { label: "Label verified", detail: "Lunchbox checked", done: true },
          { label: "Medication confirmed", detail: "EpiPen in backpack", done: true },
          { label: "Teacher notified", detail: "Tap to send", done: false },
        ].map((item) => (
          <div
            key={item.label}
            className={`flex items-center gap-3 rounded-lg px-3 py-2.5 ${
              item.done
                ? "bg-[var(--ll-sage-light)]"
                : "border-2 border-dashed border-[var(--ll-sage)] bg-white"
            }`}
          >
            <div
              className={`flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-md ${
                item.done
                  ? "bg-[var(--ll-sage)] shadow-sm"
                  : "border-2 border-[var(--ll-sage)] bg-white"
              }`}
              style={{ width: 22, height: 22 }}
            >
              {item.done && (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2.5 6.5L5 9L9.5 3.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
            <div className="flex-1">
              <span className={`text-sm font-medium ${item.done ? "text-[var(--ll-sage)]" : "text-[var(--ll-ink)]"}`}>
                {item.label}
              </span>
              <span className="ml-2 text-[11px] text-[var(--ll-muted)]">
                {item.detail}
              </span>
            </div>
            {item.done && (
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="shrink-0">
                <circle cx="7" cy="7" r="6" fill="var(--ll-sage)" opacity="0.15" />
                <path d="M4 7l2 2 4-4" stroke="var(--ll-sage)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            )}
          </div>
        ))}
      </div>

      {/* Progress footer */}
      <div className="mt-5 flex items-center gap-4">
        <div className="flex-1">
          <div className="h-2 w-full overflow-hidden rounded-full bg-[var(--ll-cream-dark)]">
            <div
              className="h-full rounded-full"
              style={{
                width: "75%",
                background: "linear-gradient(90deg, var(--ll-sage), #6BC08B)",
              }}
            />
          </div>
        </div>
        <div className="text-xs font-bold text-[var(--ll-sage)]">
          3/4
        </div>
      </div>

      {/* Emergency plan quick access */}
      <div className="mt-4 flex items-center gap-3 rounded-lg bg-[var(--ll-coral-light)] px-3 py-2.5">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--ll-coral)]">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <line x1="7" y1="2" x2="7" y2="8" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <circle cx="7" cy="11" r="1" fill="white" />
          </svg>
        </div>
        <div>
          <div className="text-xs font-semibold text-[var(--ll-coral)]">
            Battle Plan ready
          </div>
          <div className="text-[10px] text-[var(--ll-muted)]">
            Emergency action plan &mdash; one tap away
          </div>
        </div>
      </div>
    </div>
  );
}
