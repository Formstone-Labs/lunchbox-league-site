export default function AllergyStats() {
  return (
    <section className="ll-section relative overflow-hidden">
      {/* Subtle diagonal energy lines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, var(--ll-navy) 0px, var(--ll-navy) 1px, transparent 1px, transparent 40px)",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-5">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center animate-fade-up">
          <p
            className="text-xs font-bold uppercase tracking-[0.2em]"
            style={{ color: "var(--ll-coral)" }}
          >
            The Call to Action
          </p>
          <h2 className="ll-heading-lg mt-3">
            Why the League exists.
          </h2>
          <p
            className="mt-4 text-base leading-relaxed md:text-lg"
            style={{ color: "var(--ll-muted)" }}
          >
            These aren&apos;t just numbers. They&apos;re kids at birthday parties,
            school cafeterias, and summer camps. They&apos;re why every kid
            deserves a league.
          </p>
        </div>

        {/* Stats grid */}
        <div className="mt-14 grid gap-8 md:grid-cols-3 md:gap-6">
          {/* Stat 1 -- 1 in 13 */}
          <div className="animate-fade-up flex flex-col items-center text-center">
            <div
              className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl"
              style={{ background: "var(--ll-coral-light)" }}
            >
              {/* Shield with exclamation */}
              <svg
                width="30"
                height="30"
                viewBox="0 0 32 32"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M16 3L5 8v7c0 7.73 4.66 14.22 11 17 6.34-2.78 11-9.27 11-17V8L16 3z"
                  stroke="var(--ll-coral)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 11v6"
                  stroke="var(--ll-coral)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <circle cx="16" cy="21" r="1.25" fill="var(--ll-coral)" />
              </svg>
            </div>
            <p
              className="text-3xl font-bold md:text-4xl"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--ll-coral)",
              }}
            >
              1 in 13
            </p>
            <p
              className="mt-2 max-w-[240px] text-sm leading-relaxed md:text-[15px]"
              style={{ color: "var(--ll-muted)" }}
            >
              children has a food allergy. That&apos;s two kids in every classroom
              who need a hero watching out for them.
            </p>
          </div>

          {/* Stat 2 -- Every 3 minutes */}
          <div className="animate-fade-up delay-100 flex flex-col items-center text-center">
            <div
              className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl"
              style={{ background: "var(--ll-amber-light)" }}
            >
              {/* Lightning bolt / urgency */}
              <svg
                width="28"
                height="28"
                viewBox="0 0 32 32"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M18 3L7 18h7l-2 11L27 14h-7l2-11z"
                  stroke="var(--ll-amber)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </div>
            <p
              className="text-3xl font-bold md:text-4xl"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--ll-amber)",
              }}
            >
              Every 3 min
            </p>
            <p
              className="mt-2 max-w-[260px] text-sm leading-relaxed md:text-[15px]"
              style={{ color: "var(--ll-muted)" }}
            >
              someone is rushed to the ER for an allergic reaction.
              The clock doesn&apos;t wait. Neither should we.
            </p>
          </div>

          {/* Stat 3 -- 170+ triggers */}
          <div className="animate-fade-up delay-200 flex flex-col items-center text-center">
            <div
              className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl"
              style={{ background: "var(--ll-sky-light)" }}
            >
              {/* Radar / detection icon */}
              <svg
                width="28"
                height="28"
                viewBox="0 0 32 32"
                fill="none"
                aria-hidden="true"
              >
                <circle
                  cx="16"
                  cy="16"
                  r="12"
                  stroke="var(--ll-sky)"
                  strokeWidth="2"
                />
                <circle
                  cx="16"
                  cy="16"
                  r="7"
                  stroke="var(--ll-sky)"
                  strokeWidth="1.5"
                  opacity="0.6"
                />
                <circle cx="16" cy="16" r="2.5" fill="var(--ll-sky)" />
                <path
                  d="M16 4v3M16 25v3M4 16h3M25 16h3"
                  stroke="var(--ll-sky)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <p
              className="text-3xl font-bold md:text-4xl"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--ll-sky)",
              }}
            >
              170+
            </p>
            <p
              className="mt-2 max-w-[240px] text-sm leading-relaxed md:text-[15px]"
              style={{ color: "var(--ll-muted)" }}
            >
              known food triggers. Every child&apos;s map is different.
              Every Shield is built for exactly one hero.
            </p>
          </div>
        </div>

        {/* Rallying statement */}
        <div className="animate-fade-up delay-300 mt-14 text-center">
          <p
            className="text-lg font-semibold italic md:text-xl"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--ll-navy)",
            }}
          >
            This is why the League exists.
          </p>
        </div>

        {/* Source */}
        <p
          className="mt-6 text-center text-xs"
          style={{ color: "var(--ll-muted)" }}
        >
          Source: FARE (Food Allergy Research &amp; Education)
        </p>
      </div>
    </section>
  );
}
