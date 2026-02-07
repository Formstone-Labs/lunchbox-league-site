export default function Features() {
  return (
    <section id="features" className="ll-section">
      <div className="mx-auto max-w-5xl px-5">
        {/* ── Header ── */}
        <div className="mx-auto max-w-2xl text-center animate-fade-up">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--ll-sage)]">
            Powers &amp; Abilities
          </p>
          <h2 className="mt-3 ll-heading-lg">
            Every hero needs their gear.
          </h2>
        </div>

        {/* ── Feature grid — clean 2-column ── */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">

          {/* ── 1. The Shield ── */}
          <FeatureCard
            color="amber"
            title="The Shield"
            description="Your child's allergy profile forged into one powerful, shareable safety card. Allergens, severity, medications, emergency contacts — readable at a glance."
            icon={
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                <path d="M5 7Q14 2 23 7L23 17Q14 26 5 17Z" stroke="var(--ll-amber)" strokeWidth="2" fill="none" strokeLinejoin="round" />
                <path d="M10 14l3 3 6-7" stroke="var(--ll-amber)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            }
          />

          {/* ── 2. The Signal ── */}
          <FeatureCard
            color="sky"
            title="The Signal"
            description="Send the Shield to anyone who needs it. Teachers, nurses, coaches — one tap and your whole squad is briefed and ready."
            icon={
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                <path d="M7 10Q14 4 21 10" stroke="var(--ll-sky)" strokeWidth="2" strokeLinecap="round" fill="none" />
                <path d="M10 14Q14 9 18 14" stroke="var(--ll-sky)" strokeWidth="2" strokeLinecap="round" fill="none" />
                <circle cx="14" cy="17" r="2" fill="var(--ll-sky)" />
              </svg>
            }
          />

          {/* ── 3. Battle Plan ── */}
          <FeatureCard
            color="coral"
            title="Battle Plan"
            description="Your emergency action plan — pinned, printable, high-contrast. When seconds matter, big type and zero ambiguity could save a life."
            icon={
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                <rect x="5" y="2" width="18" height="24" rx="3" stroke="var(--ll-coral)" strokeWidth="2" fill="none" />
                <path d="M14 9L19 18H9Z" stroke="var(--ll-coral)" strokeWidth="1.8" strokeLinejoin="round" fill="none" />
                <line x1="14" y1="12" x2="14" y2="14.5" stroke="var(--ll-coral)" strokeWidth="1.8" strokeLinecap="round" />
                <circle cx="14" cy="16.5" r="0.8" fill="var(--ll-coral)" />
              </svg>
            }
          />

          {/* ── 4. Morning Mission ── */}
          <FeatureCard
            color="sage"
            title="Morning Mission"
            description="Fifteen seconds every morning. Safe snack packed? Label verified? Medication confirmed? A daily power-up that sends your kid out the door ready for anything."
            icon={
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                <rect x="4" y="5" width="20" height="20" rx="4" stroke="var(--ll-sage)" strokeWidth="2" fill="none" />
                <rect x="10" y="2" width="8" height="5" rx="2.5" stroke="var(--ll-sage)" strokeWidth="1.5" fill="var(--ll-sage-light)" />
                <path d="M9 13l2 2 4-5" stroke="var(--ll-sage)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                <path d="M9 20l2 2 4-5" stroke="var(--ll-sage)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            }
          />

          {/* ── 5. The Roster ── */}
          <FeatureCard
            color="amber"
            title="The Roster"
            description="One account, your whole family. Every child gets their own Shield, their own squad, their own story."
            icon={
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                <circle cx="10" cy="9" r="4" stroke="var(--ll-amber)" strokeWidth="1.8" fill="none" />
                <path d="M3 22c0-4.5 3-7.5 7-7.5s7 3 7 7.5" stroke="var(--ll-amber)" strokeWidth="1.8" strokeLinecap="round" fill="none" />
                <circle cx="19" cy="11" r="3.5" stroke="var(--ll-amber)" strokeWidth="1.8" fill="var(--ll-amber-light)" />
                <path d="M13 24c0-3.5 2.5-6 6-6s6 2.5 6 6" stroke="var(--ll-amber)" strokeWidth="1.8" strokeLinecap="round" fill="none" />
              </svg>
            }
          />

          {/* ── 6. Stealth Mode ── */}
          <FeatureCard
            color="navy"
            title="Stealth Mode"
            description="No signal? No problem. Shields and Battle Plans are cached for offline access — always ready, always on duty."
            icon={
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                <path d="M4 11c5.5-5 14.5-5 20 0" stroke="var(--ll-navy)" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.25" />
                <path d="M7.5 15c3.5-3.5 9.5-3.5 13 0" stroke="var(--ll-navy)" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.25" />
                <circle cx="14" cy="20" r="2" fill="var(--ll-navy)" opacity="0.25" />
                <line x1="5" y1="5" x2="23" y2="23" stroke="var(--ll-navy)" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
                <path d="M18 21l2.5 2.5 5-5.5" stroke="var(--ll-sage)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
}

/* ── Reusable feature card ── */

const colorMap: Record<string, { bg: string; border: string }> = {
  amber: { bg: "var(--ll-amber-light)", border: "var(--ll-amber)" },
  sky: { bg: "var(--ll-sky-light)", border: "var(--ll-sky)" },
  coral: { bg: "var(--ll-coral-light)", border: "var(--ll-coral)" },
  sage: { bg: "var(--ll-sage-light)", border: "var(--ll-sage)" },
  navy: { bg: "var(--ll-cream-dark)", border: "var(--ll-navy)" },
};

function FeatureCard({
  color,
  title,
  description,
  icon,
}: {
  color: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  const c = colorMap[color] ?? colorMap.amber;
  return (
    <div className="animate-fade-up ll-card group flex gap-5 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(45,42,38,0.06)]">
      <div
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-105"
        style={{ background: c.bg }}
      >
        {icon}
      </div>
      <div>
        <h3 className="font-[family-name:var(--font-display)] text-base font-bold text-[var(--ll-navy)]">
          {title}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-[var(--ll-muted)]">
          {description}
        </p>
      </div>
    </div>
  );
}
