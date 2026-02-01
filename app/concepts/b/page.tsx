import Link from "next/link";

export default function ConceptB() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-10">
      <div className="flex items-center justify-between">
        <Link href="/concepts" className="rounded-full px-3 py-2 text-sm font-semibold text-[rgb(var(--lb-navy))] hover:bg-[rgba(var(--lb-sky),0.35)]">
          ← Concepts
        </Link>
        <span className="rounded-full bg-[rgba(var(--lb-sky),0.22)] px-3 py-1 text-xs font-semibold text-[rgb(var(--lb-navy))] ring-1 ring-[rgba(var(--lb-sky),0.45)]">
          Concept B · Premium calm
        </span>
      </div>

      <section className="mt-10 grid gap-10 md:grid-cols-2 md:items-center">
        <div className="space-y-5">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-[rgb(var(--lb-navy))] md:text-6xl">
            Quiet confidence.
            <span className="block text-[rgba(var(--lb-ink),0.72)]">Brave kids.</span>
          </h1>
          <p className="max-w-xl text-pretty text-base leading-7 text-[rgba(var(--lb-ink),0.72)]">
            This direction is more premium and calm: fewer shapes, more whitespace, and a strong “captain voice.”
            The superhero energy shows up in microcopy and badges—never chaos.
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            {[
              ["Captain-calm UI", "Clean typography. Serious when it matters."],
              ["Shareable by default", "A safety card that’s readable at a glance."],
              ["Morning-speed flows", "Pack checks in seconds."],
              ["Emergency clarity", "Minimal, high-contrast, pinned."],
            ].map(([t, d]) => (
              <div
                key={t}
                className="rounded-[22px] bg-[rgb(var(--lb-card))] p-4 ring-1 ring-[rgb(var(--lb-border))]"
              >
                <div className="font-semibold text-[rgb(var(--lb-navy))]">{t}</div>
                <div className="mt-1 text-sm text-[rgba(var(--lb-ink),0.68)]">{d}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] bg-[rgb(var(--lb-card))] p-7 shadow-[var(--lb-shadow)] ring-1 ring-[rgb(var(--lb-border))]">
          <div className="flex items-center justify-between">
            <div className="font-[family-name:var(--font-display)] text-3xl tracking-wide text-[rgb(var(--lb-navy))]">Pack Check</div>
            <span className="rounded-full bg-[rgba(var(--lb-mint),0.18)] px-3 py-1 text-xs font-semibold text-[rgb(var(--lb-navy))] ring-1 ring-[rgba(var(--lb-mint),0.35)]">
              Mission ready
            </span>
          </div>

          <div className="mt-5 space-y-3">
            {(
              [
                { done: true, label: "Label verified" },
                { done: true, label: "No sesame in ingredients" },
                { done: false, label: "Teacher note attached" },
                { done: false, label: "EpiPen location confirmed" },
              ] as const
            ).map(({ done, label }) => (
              <div key={label}
                className="flex items-center justify-between rounded-2xl bg-[rgba(var(--lb-cloud),0.9)] px-4 py-3 ring-1 ring-[rgba(var(--lb-navy),0.06)]"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`grid h-8 w-8 place-items-center rounded-xl ring-1 ${
                      done
                        ? "bg-[rgba(var(--lb-safe),0.20)] ring-[rgba(var(--lb-safe),0.40)]"
                        : "bg-white ring-[rgba(var(--lb-ink),0.12)]"
                    }`}
                    aria-hidden
                  >
                    {done ? "✓" : "•"}
                  </span>
                  <div className="text-sm font-semibold text-[rgb(var(--lb-navy))]">{label}</div>
                </div>
                <span className="text-xs text-[rgba(var(--lb-ink),0.55)]">tap</span>
              </div>
            ))}
          </div>

          <div className="mt-5 text-xs text-[rgba(var(--lb-ink),0.62)]">
            Calm captain aesthetic. If we ship this one, we’d add subtle motion (staggered check completion + badge reveal).
          </div>
        </div>
      </section>
    </main>
  );
}
