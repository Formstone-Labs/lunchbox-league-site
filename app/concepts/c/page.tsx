import Link from "next/link";

const Tag = ({ label, kind }: { label: string; kind: "avoid" | "check" | "safe" }) => {
  const styles = {
    avoid: "bg-[rgba(var(--lb-danger),0.12)] text-[rgb(var(--lb-danger))] ring-[rgba(var(--lb-danger),0.35)]",
    check: "bg-[rgba(var(--lb-caution),0.18)] text-[rgb(var(--lb-navy))] ring-[rgba(var(--lb-caution),0.45)]",
    safe: "bg-[rgba(var(--lb-safe),0.16)] text-[rgb(var(--lb-navy))] ring-[rgba(var(--lb-safe),0.40)]",
  } as const;
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ring-1 ${styles[kind]}`}>
      {label}
    </span>
  );
};

export default function ConceptC() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-10">
      <div className="flex items-center justify-between">
        <Link href="/concepts" className="rounded-full px-3 py-2 text-sm font-semibold text-[rgb(var(--lb-navy))] hover:bg-[rgba(var(--lb-sky),0.35)]">
          ← Concepts
        </Link>
        <span className="rounded-full bg-[rgba(var(--lb-mint),0.16)] px-3 py-1 text-xs font-semibold text-[rgb(var(--lb-navy))] ring-1 ring-[rgba(var(--lb-mint),0.35)]">
          Concept C · Sticker-tag playful
        </span>
      </div>

      <section className="mt-10 grid gap-8 md:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-5">
          <h1 className="text-balance font-[family-name:var(--font-display)] text-5xl tracking-wide text-[rgb(var(--lb-navy))] md:text-6xl">
            Stickers.
            <span className="block text-[rgba(var(--lb-ink),0.72)]">But make it safety.</span>
          </h1>
          <p className="max-w-xl text-pretty text-base leading-7 text-[rgba(var(--lb-ink),0.72)]">
            This concept is the most “fun” visually: tags, checklists, and playful microcopy.
            Underneath, it’s still strict about semantics and emergency clarity.
          </p>

          <div className="flex flex-wrap gap-2">
            <Tag kind="avoid" label="Avoid: Sesame" />
            <Tag kind="check" label="Check: Egg" />
            <Tag kind="safe" label="Safe: Dairy" />
            <span className="inline-flex items-center rounded-full bg-[rgba(var(--lb-violet),0.14)] px-3 py-1 text-xs font-semibold text-[rgb(var(--lb-navy))] ring-1 ring-[rgba(var(--lb-violet),0.35)]">
              Badge unlocked: “Label Pro”
            </span>
          </div>
        </div>

        <div className="rounded-[28px] bg-[rgb(var(--lb-card))] p-7 shadow-[var(--lb-shadow)] ring-1 ring-[rgb(var(--lb-border))]">
          <div className="flex items-center justify-between">
            <div className="font-[family-name:var(--font-display)] text-3xl tracking-wide text-[rgb(var(--lb-navy))]">Mission Kit</div>
            <span className="rounded-full bg-[rgba(var(--lb-sun),0.22)] px-3 py-1 text-xs font-semibold text-[rgb(var(--lb-navy))] ring-1 ring-[rgba(var(--lb-sun),0.45)]">
              field trip mode
            </span>
          </div>

          <div className="mt-5 grid gap-3">
            {[
              ["✅", "Pack check complete"],
              ["📎", "Teacher note attached"],
              ["🧃", "Safe snack packed"],
              ["🛟", "Emergency plan pinned"],
            ].map(([i, t]) => (
              <div
                key={t}
                className="flex items-center justify-between rounded-2xl bg-[rgba(var(--lb-cloud),0.9)] px-4 py-3 ring-1 ring-[rgba(var(--lb-navy),0.06)]"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-white ring-1 ring-[rgba(var(--lb-ink),0.12)]">
                    {i}
                  </span>
                  <div className="text-sm font-semibold text-[rgb(var(--lb-navy))]">{t}</div>
                </div>
                <span className="text-xs text-[rgba(var(--lb-ink),0.55)]">tap</span>
              </div>
            ))}
          </div>

          <div className="mt-5 text-xs text-[rgba(var(--lb-ink),0.62)]">
            Best for: kid buy-in + habit. We’d keep emergency mode in the calmer Concept B style.
          </div>
        </div>
      </section>
    </main>
  );
}
