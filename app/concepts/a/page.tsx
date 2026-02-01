import Link from "next/link";

export default function ConceptA() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-10">
      <div className="flex items-center justify-between">
        <Link href="/concepts" className="rounded-full px-3 py-2 text-sm font-semibold text-[rgb(var(--lb-navy))] hover:bg-[rgba(var(--lb-sky),0.35)]">
          ← Concepts
        </Link>
        <span className="rounded-full bg-[rgba(var(--lb-violet),0.14)] px-3 py-1 text-xs font-semibold text-[rgb(var(--lb-navy))] ring-1 ring-[rgba(var(--lb-violet),0.35)]">
          Concept A · Badge-forward
        </span>
      </div>

      <section className="mt-10 grid gap-8 md:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-5">
          <h1 className="text-balance font-[family-name:var(--font-display)] text-5xl tracking-wide text-[rgb(var(--lb-navy))] md:text-6xl">
            The League Badge.
          </h1>
          <p className="max-w-xl text-pretty text-base leading-7 text-[rgba(var(--lb-ink),0.74)]">
            This direction leans into *team patch* energy—strong shapes, confident color, and a “mission kit” feeling that kids actually like.
          </p>

          <div className="flex flex-wrap gap-2">
            {[
              ["🛡️", "Allergy Passport"],
              ["✅", "Pack Check"],
              ["📌", "Emergency Plan"],
              ["🤝", "Teammates"],
            ].map(([i, t]) => (
              <div
                key={t}
                className="flex items-center gap-2 rounded-full bg-[rgb(var(--lb-card))] px-4 py-2 text-sm font-semibold text-[rgb(var(--lb-navy))] shadow-sm ring-1 ring-[rgba(var(--lb-navy),0.08)]"
              >
                <span>{i}</span>
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[28px] bg-[rgb(var(--lb-navy))] p-6 text-white shadow-[var(--lb-shadow)]">
          <div className="absolute -right-14 -top-14 h-56 w-56 rounded-full bg-[rgba(255,255,255,0.18)] blur-2xl" />
          <div className="absolute -left-16 bottom-10 h-52 w-52 rounded-full bg-[rgba(var(--lb-violet),0.45)] blur-3xl" />
          <div className="relative space-y-4">
            <div className="inline-flex items-center gap-3 rounded-[22px] bg-[rgba(255,255,255,0.10)] px-4 py-3 ring-1 ring-[rgba(255,255,255,0.18)]">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-[rgb(var(--lb-navy))]">
                <span className="font-[family-name:var(--font-display)] text-xl tracking-wider">LL</span>
              </div>
              <div>
                <div className="font-semibold">Mission Card</div>
                <div className="text-xs text-white/70">Share with teachers & caregivers</div>
              </div>
            </div>

            <div className="rounded-[24px] bg-white/95 p-4 text-[rgb(var(--lb-ink))] ring-1 ring-white/30">
              <div className="text-xs font-semibold text-[rgba(var(--lb-ink),0.55)]">AVOID</div>
              <div className="mt-1 font-semibold">Sesame</div>
              <div className="mt-3 text-xs font-semibold text-[rgba(var(--lb-ink),0.55)]">IF UNSURE</div>
              <div className="mt-1 text-sm">Call parent. Check label. Don’t guess.</div>
              <div className="mt-4 flex gap-2">
                <span className="rounded-full bg-[rgba(var(--lb-danger),0.12)] px-3 py-1 text-xs font-semibold text-[rgb(var(--lb-danger))]">
                  Emergency pinned
                </span>
                <span className="rounded-full bg-[rgba(var(--lb-sky),0.40)] px-3 py-1 text-xs font-semibold text-[rgb(var(--lb-navy))]">
                  Teammates
                </span>
              </div>
            </div>

            <div className="text-xs text-white/70">
              This concept makes the badge/app icon the hero. Great for merch, stickers, school culture.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
