import Link from "next/link";

function Swatch({ name, rgb }: { name: string; rgb: string }) {
  return (
    <div className="rounded-2xl bg-[rgb(var(--lb-card))] p-4 ring-1 ring-[rgb(var(--lb-border))]">
      <div className="flex items-center justify-between">
        <div className="font-semibold text-[rgb(var(--lb-navy))]">{name}</div>
        <code className="text-xs text-[rgba(var(--lb-ink),0.6)]">{rgb}</code>
      </div>
      <div className="mt-3 h-10 rounded-xl" style={{ background: `rgb(${rgb})` }} />
    </div>
  );
}

export default function Kit() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-10">
      <div className="flex items-center justify-between gap-4">
        <Link href="/" className="rounded-full px-3 py-2 text-sm font-semibold text-[rgb(var(--lb-navy))] hover:bg-[rgba(var(--lb-sky),0.35)]">
          ← Home
        </Link>
        <Link href="/concepts" className="rounded-full px-3 py-2 text-sm font-semibold text-[rgb(var(--lb-navy))] hover:bg-[rgba(var(--lb-sky),0.35)]">
          Concept routes →
        </Link>
      </div>

      <header className="mt-8 space-y-3">
        <h1 className="font-[family-name:var(--font-display)] text-5xl tracking-wide text-[rgb(var(--lb-navy))]">Component kit</h1>
        <p className="max-w-2xl text-sm leading-6 text-[rgba(var(--lb-ink),0.72)]">
          A quick visual inventory of brand tokens and a couple core components. This becomes the source of truth for the marketing site.
        </p>
      </header>

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        <Swatch name="Navy" rgb="var(--lb-navy)" />
        <Swatch name="Violet" rgb="var(--lb-violet)" />
        <Swatch name="Sky" rgb="var(--lb-sky)" />
        <Swatch name="Mint" rgb="var(--lb-mint)" />
        <Swatch name="Sun" rgb="var(--lb-sun)" />
        <Swatch name="Danger" rgb="var(--lb-danger)" />
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-[28px] bg-[rgb(var(--lb-card))] p-7 shadow-[var(--lb-shadow)] ring-1 ring-[rgb(var(--lb-border))]">
          <div className="flex items-center justify-between">
            <div className="font-[family-name:var(--font-display)] text-3xl tracking-wide text-[rgb(var(--lb-navy))]">Buttons</div>
            <span className="rounded-full bg-[rgba(var(--lb-sky),0.22)] px-3 py-1 text-xs font-semibold text-[rgb(var(--lb-navy))] ring-1 ring-[rgba(var(--lb-sky),0.45)]">
              captain calm
            </span>
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <button className="rounded-full bg-[rgb(var(--lb-navy))] px-5 py-3 text-sm font-semibold text-white shadow-[var(--lb-shadow-tight)] hover:opacity-95">
              Primary
            </button>
            <button className="rounded-full bg-[rgb(var(--lb-violet))] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95">
              Hero
            </button>
            <button className="rounded-full bg-[rgba(var(--lb-sky),0.35)] px-5 py-3 text-sm font-semibold text-[rgb(var(--lb-navy))] ring-1 ring-[rgba(var(--lb-navy),0.08)] hover:bg-[rgba(var(--lb-sky),0.5)]">
              Secondary
            </button>
          </div>
        </div>

        <div data-mode="emergency" className="rounded-[28px] bg-white p-7 ring-1 ring-[rgb(var(--lb-border))]">
          <div className="flex items-center justify-between">
            <div className="font-[family-name:var(--font-display)] text-3xl tracking-wide">Emergency token mode</div>
            <span className="rounded-full bg-[rgba(var(--lb-danger),0.12)] px-3 py-1 text-xs font-bold text-[rgb(var(--lb-danger))]">
              danger
            </span>
          </div>
          <div className="mt-4 rounded-2xl border border-[rgba(var(--lb-danger),0.35)] p-4">
            <div className="text-xs font-semibold text-[rgba(var(--lb-ink),0.6)]">IF ANAPHYLAXIS SUSPECTED</div>
            <div className="mt-2 text-lg font-semibold">Give epinephrine. Call 911.</div>
            <div className="mt-1 text-sm text-[rgba(var(--lb-ink),0.75)]">Then contact parent/guardian.</div>
          </div>
          <div className="mt-4 text-xs text-[rgba(var(--lb-ink),0.6)]">
            Emergency mode should always be printable, high-contrast, and free of playful styling.
          </div>
        </div>
      </section>
    </main>
  );
}
