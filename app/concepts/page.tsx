import Link from "next/link";

const Tile = ({
  title,
  desc,
  href,
  tone,
}: {
  title: string;
  desc: string;
  href: string;
  tone: "violet" | "mint" | "sky" | "sun";
}) => {
  const tones = {
    violet: "bg-[rgba(var(--lb-violet),0.14)] ring-[rgba(var(--lb-violet),0.35)]",
    mint: "bg-[rgba(var(--lb-mint),0.14)] ring-[rgba(var(--lb-mint),0.35)]",
    sky: "bg-[rgba(var(--lb-sky),0.20)] ring-[rgba(var(--lb-sky),0.45)]",
    sun: "bg-[rgba(var(--lb-sun),0.20)] ring-[rgba(var(--lb-sun),0.45)]",
  } as const;

  return (
    <Link
      href={href}
      className={`group relative overflow-hidden rounded-[24px] p-6 ring-1 transition hover:-translate-y-0.5 hover:shadow-[var(--lb-shadow)] ${tones[tone]}`}
    >
      <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/35 blur-2xl transition group-hover:scale-105" />
      <div className="relative space-y-2">
        <div className="font-[family-name:var(--font-display)] text-3xl tracking-wide text-[rgb(var(--lb-navy))]">
          {title}
        </div>
        <p className="text-sm leading-6 text-[rgba(var(--lb-ink),0.75)]">{desc}</p>
        <div className="pt-2 text-sm font-semibold text-[rgb(var(--lb-navy))]">Open →</div>
      </div>
    </Link>
  );
};

export default function Concepts() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-10">
      <div className="flex items-center justify-between gap-4">
        <Link href="/" className="rounded-full px-3 py-2 text-sm font-semibold text-[rgb(var(--lb-navy))] hover:bg-[rgba(var(--lb-sky),0.35)]">
          ← Home
        </Link>
        <div className="text-xs text-[rgba(var(--lb-ink),0.6)]">Multiple looks, same brand DNA</div>
      </div>

      <header className="mt-8 space-y-3">
        <h1 className="font-[family-name:var(--font-display)] text-4xl tracking-wide text-[rgb(var(--lb-navy))] md:text-5xl">
          Concept variations
        </h1>
        <p className="max-w-2xl text-sm leading-6 text-[rgba(var(--lb-ink),0.72)]">
          These routes are different executions of “Captain Joy / Superhero Utility”—serious about safety, joyful about the daily routine.
        </p>
      </header>

      <section className="mt-8 grid gap-5 md:grid-cols-3">
        <Tile
          tone="violet"
          title="Concept A"
          desc="Hero badge energy. Bold shapes, patch-like components, more ‘league’ vibe."
          href="/concepts/a"
        />
        <Tile
          tone="sky"
          title="Concept B"
          desc="Premium calm captain. More whitespace, quiet confidence, less ‘comic’—still kid-forward."
          href="/concepts/b"
        />
        <Tile
          tone="mint"
          title="Concept C"
          desc="Sticker-tag playful. Bright tags + checklists, fun microcopy, still readable."
          href="/concepts/c"
        />
      </section>

      <div className="mt-10 rounded-[24px] bg-[rgb(var(--lb-card))] p-6 ring-1 ring-[rgb(var(--lb-border))]">
        <div className="text-sm font-semibold text-[rgb(var(--lb-navy))]">Next:</div>
        <div className="mt-1 text-sm text-[rgba(var(--lb-ink),0.72)]">
          I can turn any of these into a full marketing site (FAQ, pricing, waitlist form) + a mini brand kit page.
        </div>
      </div>
    </main>
  );
}
