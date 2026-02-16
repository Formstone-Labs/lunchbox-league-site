export default function Features() {
  return (
    <section id="features" className="ll-section">
      <div className="mx-auto max-w-5xl px-5">
        {/* ── Header ── */}
        <div className="mx-auto max-w-2xl text-center animate-fade-up">
          <h2 className="ll-heading-lg">
            What if they could just…<br />be a kid?
          </h2>
        </div>

        {/* ── Superpower cards ── */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {/* ── 1. Invisible Armor ── */}
          <FeatureCard
            color="amber"
            title="Invisible Armor"
            description="Your kid walks into any room protected. Every adult who matters has the plan — not a binder in a drawer, a living shield that travels with them."
            icon={
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                <path d="M5 7Q14 2 23 7L23 17Q14 26 5 17Z" stroke="var(--ll-amber)" strokeWidth="2" fill="none" strokeLinejoin="round" />
                <path d="M10 14l3 3 6-7" stroke="var(--ll-amber)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            }
          />

          {/* ── 2. The Whole Village ── */}
          <FeatureCard
            color="sky"
            title="The Whole Village"
            description="Teachers, coaches, grandparents, the new babysitter — everyone on the same page, instantly. No more 9pm phone calls about cupcake ingredients."
            icon={
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                <circle cx="10" cy="9" r="4" stroke="var(--ll-sky)" strokeWidth="1.8" fill="none" />
                <path d="M3 22c0-4.5 3-7.5 7-7.5s7 3 7 7.5" stroke="var(--ll-sky)" strokeWidth="1.8" strokeLinecap="round" fill="none" />
                <circle cx="19" cy="11" r="3.5" stroke="var(--ll-sky)" strokeWidth="1.8" fill="var(--ll-sky-light)" />
                <path d="M13 24c0-3.5 2.5-6 6-6s6 2.5 6 6" stroke="var(--ll-sky)" strokeWidth="1.8" strokeLinecap="round" fill="none" />
              </svg>
            }
          />

          {/* ── 3. Fearless Field Trips ── */}
          <FeatureCard
            color="coral"
            title="Fearless Field Trips"
            description="Sleepovers. Birthday parties. Camp. The moments that used to terrify you become the adventures they deserve."
            icon={
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                <path d="M14 4l3 6h6l-5 4 2 7-6-4-6 4 2-7-5-4h6z" stroke="var(--ll-coral)" strokeWidth="1.8" strokeLinejoin="round" fill="none" />
              </svg>
            }
          />

          {/* ── 4. Always Ready ── */}
          <FeatureCard
            color="navy"
            title="Always Ready"
            description="Offline. At 2am. In the school cafeteria with no signal. The plan is always one tap away."
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

          {/* ── 5. Know the Enemy ── */}
          <FeatureCard
            color="sage"
            title="Know the Enemy"
            description="Scan any label, any menu. In seconds, not minutes. No more squinting at ingredient lists at midnight."
            icon={
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="7" stroke="var(--ll-sage)" strokeWidth="2" fill="none" />
                <line x1="17" y1="17" x2="24" y2="24" stroke="var(--ll-sage)" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M9 12h6M12 9v6" stroke="var(--ll-sage)" strokeWidth="1.5" strokeLinecap="round" />
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
    <div className="animate-fade-up ll-card group relative overflow-hidden p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(45,42,38,0.06)]">
      {/* Accent top bar */}
      <div
        className="absolute top-0 left-0 h-[3px] w-full"
        style={{
          background: `linear-gradient(90deg, ${c.border}, transparent)`,
          opacity: 0.5,
        }}
      />
      <div
        className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-105"
        style={{ background: c.bg }}
      >
        {icon}
      </div>
      <h3 className="font-[family-name:var(--font-display)] text-[1.0625rem] font-bold text-[var(--ll-navy)]">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-[1.7] text-[var(--ll-muted)]">
        {description}
      </p>
    </div>
  );
}
