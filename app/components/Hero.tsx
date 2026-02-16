import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 md:pt-48 md:pb-28">
      {/* Background — layered radial energy */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 75% 35%, rgba(232, 168, 73, 0.05) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 20% 70%, rgba(124, 154, 130, 0.04) 0%, transparent 60%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-5">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-20">
          {/* --- Text column --- */}
          <div className="max-w-2xl">
            {/* Eyebrow — editorial small-caps line */}
            <p
              className="animate-fade-up mb-6 text-[0.6875rem] font-semibold uppercase tracking-[0.18em]"
              style={{
                color: "var(--ll-muted)",
                fontFamily: "var(--font-body)",
              }}
            >
              Built by allergy parents, for allergy parents
            </p>

            <h1
              className="animate-fade-up delay-100"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.75rem, 5.5vw, 4.5rem)",
                lineHeight: 1.08,
                letterSpacing: "-0.025em",
                fontWeight: 800,
                color: "var(--ll-navy)",
              }}
            >
              Let them be a kid.
              <br />
              <span style={{ color: "var(--ll-coral)" }}>
                We&rsquo;ll handle the allergy part.
              </span>
            </h1>

            <p
              className="animate-fade-up delay-200 mt-8 text-base leading-[1.75] md:text-[1.1875rem] md:leading-[1.75]"
              style={{ color: "var(--ll-ink)", opacity: 0.75 }}
            >
              Share the safety card and action plan with every adult who
              matters&mdash;so your child can go to the party, the field trip,
              the sleepover.
            </p>

            <div className="animate-fade-up delay-300 mt-12 flex flex-wrap items-center gap-4">
              <Link href="#cta" className="ll-btn-hero">
                Join the League
              </Link>
              <Link href="#how-it-works" className="ll-btn-secondary">
                See how it works
              </Link>
            </div>
          </div>

          {/* --- Product-as-hero: Safety card mock --- */}
          <div className="animate-fade-up delay-300 flex justify-center lg:justify-end">
            <ProductCardHero />
          </div>
        </div>

        {/* --- Secondary supporting line — intentional, not a paragraph --- */}
        <div className="animate-fade-up delay-400 mt-16 md:mt-20">
          <div className="mx-auto max-w-3xl flex flex-col items-center gap-2 text-center">
            <p
              className="text-sm font-semibold tracking-[0.04em] md:text-base"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--ll-navy)",
              }}
            >
              Allergy safety that travels with your kid.
            </p>
            <p
              className="text-sm md:text-[0.9375rem]"
              style={{ color: "var(--ll-muted)" }}
            >
              No binders. No buried texts. Just the plan&mdash;always available.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Product-as-hero: clean, elevated safety card mock                 */
/* ------------------------------------------------------------------ */

function ProductCardHero() {
  return (
    <div className="relative w-[300px] md:w-[340px]">
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute -inset-8 rounded-3xl"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(124, 154, 130, 0.12) 0%, transparent 70%)",
        }}
      />

      {/* Card */}
      <div
        className="relative overflow-hidden rounded-2xl"
        style={{
          background: "#FDFCF8",
          border: "1px solid rgba(221, 229, 222, 0.7)",
          boxShadow:
            "0 2px 8px rgba(44, 62, 45, 0.05), 0 12px 40px rgba(44, 62, 45, 0.08), 0 0 0 1px rgba(221, 229, 222, 0.3)",
        }}
      >
        {/* Card header */}
        <div
          className="flex items-center gap-3 px-5 py-4"
          style={{ background: "var(--ll-sage-light)" }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 22 22"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M11 2L4 5.5V10.5C4 15.2 7 18.8 11 20C15 18.8 18 15.2 18 10.5V5.5L11 2Z"
              fill="var(--ll-sage)"
              fillOpacity="0.15"
              stroke="var(--ll-sage)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 11.5L10 13.5L14.5 8.5"
              stroke="var(--ll-sage)"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span
            className="text-sm font-semibold"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--ll-navy)",
            }}
          >
            Allergy Safety Card
          </span>
        </div>

        {/* Card body */}
        <div className="px-5 py-5 space-y-4">
          {/* Child info row */}
          <div className="flex items-center gap-3">
            <div
              className="flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold text-white"
              style={{ background: "var(--ll-navy)" }}
            >
              E
            </div>
            <div>
              <span
                className="block text-sm font-semibold"
                style={{ color: "var(--ll-navy)" }}
              >
                Emma, age 7
              </span>
              <span
                className="block text-xs"
                style={{ color: "var(--ll-muted)" }}
              >
                Lincoln Elementary — Mrs. Chen&apos;s class
              </span>
            </div>
          </div>

          {/* Allergen tags */}
          <div className="flex flex-wrap gap-1.5">
            <span
              className="rounded-full px-2.5 py-0.5 text-[11px] font-semibold"
              style={{
                background: "var(--ll-coral-light)",
                color: "var(--ll-coral)",
              }}
            >
              🥜 Peanut
            </span>
            <span
              className="rounded-full px-2.5 py-0.5 text-[11px] font-semibold"
              style={{
                background: "var(--ll-coral-light)",
                color: "var(--ll-coral)",
              }}
            >
              🌰 Tree Nut
            </span>
            <span
              className="rounded-full px-2.5 py-0.5 text-[11px] font-semibold"
              style={{
                background: "var(--ll-amber-light)",
                color: "var(--ll-navy)",
              }}
            >
              Sesame
            </span>
          </div>

          {/* Divider */}
          <div
            className="h-px w-full"
            style={{ background: "var(--ll-border)", opacity: 0.5 }}
          />

          {/* Emergency action */}
          <div>
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.08em] mb-2"
              style={{ color: "var(--ll-muted)" }}
            >
              If exposed
            </p>
            <div
              className="flex items-start gap-2.5 rounded-lg px-3 py-2.5 text-xs leading-snug"
              style={{
                background: "var(--ll-coral-light)",
                color: "var(--ll-ink)",
              }}
            >
              <span className="shrink-0 mt-0.5">💉</span>
              <span>
                <strong>Administer EpiPen</strong> immediately.
                <br />
                EpiPen location: backpack front pocket.
              </span>
            </div>
          </div>

          {/* Emergency contacts */}
          <div className="space-y-1.5">
            <div
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs"
              style={{ background: "var(--ll-cream-dark)" }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2.5 2h3l1 3-1.5 1a7.5 7.5 0 003 3l1-1.5 3 1v3a1 1 0 01-1 1A10 10 0 011.5 3a1 1 0 011-1z"
                  stroke="var(--ll-muted)"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span style={{ color: "var(--ll-ink)" }}>
                <strong>Mom</strong> — (555) 012-3456
              </span>
            </div>
            <div
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs"
              style={{ background: "var(--ll-cream-dark)" }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2.5 2h3l1 3-1.5 1a7.5 7.5 0 003 3l1-1.5 3 1v3a1 1 0 01-1 1A10 10 0 011.5 3a1 1 0 011-1z"
                  stroke="var(--ll-muted)"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span style={{ color: "var(--ll-ink)" }}>
                <strong>Dad</strong> — (555) 012-7890
              </span>
            </div>
          </div>
        </div>

        {/* Card footer — shared status */}
        <div
          className="flex items-center justify-center gap-2 px-5 py-3"
          style={{
            background: "var(--ll-sage)",
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M3.5 8.5l3 3 6-6"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-xs font-semibold text-white">
            Shared with 4 caregivers
          </span>
        </div>
      </div>
    </div>
  );
}
