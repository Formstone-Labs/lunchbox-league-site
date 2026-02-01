import Link from "next/link";

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-wide text-[rgb(var(--lb-navy))]">
    {children}
  </h2>
);

const Pill = ({ children, tone = "violet" }: { children: React.ReactNode; tone?: "violet" | "mint" | "sky" | "sun" }) => {
  const tones = {
    violet: "bg-[rgb(var(--lb-violet))] text-white",
    mint: "bg-[rgb(var(--lb-mint))] text-[rgb(var(--lb-navy))]",
    sky: "bg-[rgb(var(--lb-sky))] text-[rgb(var(--lb-navy))]",
    sun: "bg-[rgb(var(--lb-sun))] text-[rgb(var(--lb-navy))]",
  } as const;
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold shadow-sm ${tones[tone]}`}>
      {children}
    </span>
  );
};

function Card({ title, body, icon }: { title: string; body: string; icon: string }) {
  return (
    <div
      className="rounded-[var(--lb-radius-lg)] bg-[rgb(var(--lb-card))] p-6 shadow-[var(--lb-shadow-tight)] ring-1 ring-[rgb(var(--lb-border))]"
      role="group"
      aria-label={title}
    >
      <div className="flex items-start gap-4">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[rgb(var(--lb-cloud))] text-2xl">
          {icon}
        </div>
        <div className="space-y-2">
          <div className="font-[family-name:var(--font-display)] text-2xl tracking-wide text-[rgb(var(--lb-navy))]">
            {title}
          </div>
          <p className="text-sm leading-6 text-[rgba(var(--lb-ink),0.78)]">{body}</p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-10 md:py-16">
      <header className="flex flex-col gap-10">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[rgb(var(--lb-navy))] text-white shadow-[var(--lb-shadow-tight)]">
              <span className="font-[family-name:var(--font-display)] text-xl tracking-wider">LL</span>
            </div>
            <div className="leading-tight">
              <div className="font-semibold tracking-tight">Lunchbox League</div>
              <div className="text-xs text-[rgba(var(--lb-ink),0.6)]">Captain Joy / Superhero Utility</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 md:flex">
            <Link
              className="rounded-full px-3 py-2 text-sm font-semibold text-[rgb(var(--lb-navy))] hover:bg-[rgba(var(--lb-sky),0.35)]"
              href="#why"
            >
              Why it works
            </Link>
            <Link
              className="rounded-full px-3 py-2 text-sm font-semibold text-[rgb(var(--lb-navy))] hover:bg-[rgba(var(--lb-sky),0.35)]"
              href="#components"
            >
              Components
            </Link>
            <Link
              className="rounded-full bg-[rgb(var(--lb-violet))] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-95"
              href="#cta"
            >
              Get early access
            </Link>
          </nav>
        </div>

        <section className="relative overflow-hidden rounded-[28px] bg-[rgb(var(--lb-card))] p-7 shadow-[var(--lb-shadow)] ring-1 ring-[rgb(var(--lb-border))] md:p-10">
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[rgba(var(--lb-violet),0.18)] blur-3xl" />
          <div className="pointer-events-none absolute -left-28 top-24 h-72 w-72 rounded-full bg-[rgba(var(--lb-sky),0.28)] blur-3xl" />

          <div className="flex flex-col gap-6 md:max-w-3xl">
            <div className="flex flex-wrap gap-2">
              <Pill tone="violet">Mission-ready</Pill>
              <Pill tone="sky">School-day calm</Pill>
              <Pill tone="mint">Kid-powered</Pill>
              <Pill tone="sun">Serious when it matters</Pill>
            </div>

            <h1 className="text-balance text-4xl font-bold tracking-tight text-[rgb(var(--lb-navy))] md:text-6xl">
              Turn allergy safety into a kid‑powered mission.
            </h1>
            <p className="max-w-2xl text-pretty text-base leading-7 text-[rgba(var(--lb-ink),0.72)] md:text-lg">
              Lunchbox League helps parents share clear allergy info, run quick “pack checks,” and keep an emergency plan pinned—so kids feel brave,
              not different.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#cta"
                className="inline-flex items-center justify-center rounded-full bg-[rgb(var(--lb-navy))] px-5 py-3 text-sm font-semibold text-white shadow-[var(--lb-shadow-tight)] hover:opacity-95"
              >
                Join the League
              </a>
              <Link
                href="/concepts"
                className="inline-flex items-center justify-center rounded-full bg-[rgba(var(--lb-sky),0.35)] px-5 py-3 text-sm font-semibold text-[rgb(var(--lb-navy))] ring-1 ring-[rgba(var(--lb-navy),0.08)] hover:bg-[rgba(var(--lb-sky),0.5)]"
              >
                See concept variations
              </Link>
            </div>

            <div className="mt-2 flex flex-wrap gap-2 text-xs text-[rgba(var(--lb-ink),0.65)]">
              <span className="rounded-full bg-[rgba(var(--lb-cloud),0.9)] px-3 py-1 ring-1 ring-[rgba(var(--lb-navy),0.06)]">
                “Mission ready.”
              </span>
              <span className="rounded-full bg-[rgba(var(--lb-cloud),0.9)] px-3 py-1 ring-1 ring-[rgba(var(--lb-navy),0.06)]">
                “Pack check complete.”
              </span>
              <span className="rounded-full bg-[rgba(var(--lb-cloud),0.9)] px-3 py-1 ring-1 ring-[rgba(var(--lb-navy),0.06)]">
                “Emergency plan: pinned.”
              </span>
            </div>
          </div>
        </section>
      </header>

      <section id="why" className="mt-14 grid gap-6 md:grid-cols-3">
        <Card
          icon="🛡️"
          title="Captain-calm"
          body="Parents get clarity and control. The brand stays warm—but never fuzzy—when safety is on the line."
        />
        <Card
          icon="🏷️"
          title="Readable at a glance"
          body="Allergy info becomes a card you can share and a checklist you can run in 15 seconds."
        />
        <Card
          icon="⭐"
          title="Kids feel proud"
          body="We reframe ‘allergy management’ as a mission. The vibe is brave, not scary."
        />
      </section>

      <section id="components" className="mt-16 space-y-8">
        <div className="flex items-end justify-between gap-4">
          <div className="space-y-2">
            <H2>Brand components</H2>
            <p className="max-w-2xl text-sm leading-6 text-[rgba(var(--lb-ink),0.72)]">
              These are the building blocks we’ll reuse across the app and website: badges, safety cards, teammate cards, and pack checks.
            </p>
          </div>
          <Link
            href="/kit"
            className="hidden rounded-full bg-[rgb(var(--lb-violet))] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-95 md:inline-flex"
          >
            View component kit
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[var(--lb-radius-lg)] bg-[rgb(var(--lb-card))] p-6 shadow-[var(--lb-shadow)] ring-1 ring-[rgb(var(--lb-border))]">
            <div className="flex items-center justify-between">
              <div className="font-[family-name:var(--font-display)] text-2xl tracking-wide text-[rgb(var(--lb-navy))]">Safety Card</div>
              <Pill tone="mint">Shareable</Pill>
            </div>
            <div className="mt-5 grid gap-3">
              <div className="rounded-2xl bg-[rgba(var(--lb-cloud),0.9)] p-4 ring-1 ring-[rgba(var(--lb-navy),0.06)]">
                <div className="flex items-center justify-between">
                  <div className="font-semibold">Talan’s Mission Card</div>
                  <span className="text-xs text-[rgba(var(--lb-ink),0.65)]">Updated today</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-[rgba(var(--lb-danger),0.12)] px-3 py-1 text-xs font-semibold text-[rgb(var(--lb-danger))]">
                    Avoid: Sesame
                  </span>
                  <span className="rounded-full bg-[rgba(var(--lb-caution),0.14)] px-3 py-1 text-xs font-semibold text-[rgb(var(--lb-ink))]">
                    Check: Egg
                  </span>
                  <span className="rounded-full bg-[rgba(var(--lb-safe),0.14)] px-3 py-1 text-xs font-semibold text-[rgb(var(--lb-ink))]">
                    Safe: Dairy
                  </span>
                </div>
                <div className="mt-3 text-sm text-[rgba(var(--lb-ink),0.7)]">
                  Emergency plan pinned • EpiPen in side pocket • Call parent if unsure.
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <Pill tone="sky">Teammates</Pill>
                <Pill tone="violet">Pack Check</Pill>
                <Pill tone="sun">Field Trip Mode</Pill>
              </div>
            </div>
          </div>

          <div
            data-mode="emergency"
            className="rounded-[var(--lb-radius-lg)] bg-[rgb(var(--lb-card))] p-6 ring-1 ring-[rgb(var(--lb-border))]"
          >
            <div className="flex items-center justify-between">
              <div className="font-[family-name:var(--font-display)] text-2xl tracking-wide">Emergency Mode</div>
              <span className="rounded-full bg-[rgba(var(--lb-danger),0.12)] px-3 py-1 text-xs font-bold text-[rgb(var(--lb-danger))]">
                Serious
              </span>
            </div>
            <div className="mt-5 space-y-4">
              <div className="rounded-2xl border border-[rgba(var(--lb-danger),0.35)] p-4">
                <div className="text-xs font-semibold text-[rgba(var(--lb-ink),0.6)]">IF EXPOSURE SUSPECTED</div>
                <div className="mt-2 text-lg font-semibold">Give epinephrine. Call 911.</div>
                <div className="mt-1 text-sm text-[rgba(var(--lb-ink),0.75)]">Then contact parent/guardian.</div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-[rgba(var(--lb-ink),0.12)] p-4">
                  <div className="text-xs font-semibold text-[rgba(var(--lb-ink),0.6)]">Parent</div>
                  <div className="mt-1 font-semibold">Nate</div>
                  <div className="text-sm text-[rgba(var(--lb-ink),0.72)]">(555) 555‑1212</div>
                </div>
                <div className="rounded-2xl border border-[rgba(var(--lb-ink),0.12)] p-4">
                  <div className="text-xs font-semibold text-[rgba(var(--lb-ink),0.6)]">Backup</div>
                  <div className="mt-1 font-semibold">Spouse</div>
                  <div className="text-sm text-[rgba(var(--lb-ink),0.72)]">(555) 555‑3434</div>
                </div>
              </div>
              <div className="text-xs text-[rgba(var(--lb-ink),0.6)]">
                (Emergency mode is intentionally minimal—no playful tone, high contrast, big type.)
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cta" className="mt-16 overflow-hidden rounded-[28px] bg-[rgb(var(--lb-navy))] p-8 text-white shadow-[var(--lb-shadow)] md:p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <div className="font-[family-name:var(--font-display)] text-3xl tracking-wide">Ready to join the League?</div>
            <p className="max-w-xl text-sm leading-6 text-white/80">
              We’re building a calmer, braver way to handle allergies—without turning your family into a medical chart.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-[rgb(var(--lb-navy))] hover:opacity-95"
              href="mailto:nateweiner.assistant@gmail.com?subject=Lunchbox%20League%20early%20access"
            >
              Email for early access
            </a>
            <Link
              className="inline-flex items-center justify-center rounded-full bg-[rgba(255,255,255,0.12)] px-5 py-3 text-sm font-semibold text-white ring-1 ring-[rgba(255,255,255,0.22)] hover:bg-[rgba(255,255,255,0.18)]"
              href="/concepts"
            >
              View variants
            </Link>
          </div>
        </div>
      </section>

      <footer className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-[rgba(var(--lb-ink),0.10)] pt-8 text-sm text-[rgba(var(--lb-ink),0.65)] md:flex-row md:items-center">
        <div>
          © {new Date().getFullYear()} Lunchbox League — mission-ready allergy safety.
        </div>
        <div className="flex flex-wrap gap-3">
          <Link className="hover:underline" href="/kit">
            Component kit
          </Link>
          <Link className="hover:underline" href="/concepts">
            Concept routes
          </Link>
        </div>
      </footer>
    </main>
  );
}
