export default function AllergyStats() {
  return (
    <section
      className="border-y py-10 md:py-14"
      style={{
        background: "var(--ll-amber-light)",
        borderColor: "var(--ll-border)",
      }}
    >
      <div className="mx-auto max-w-5xl px-5">
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {/* Stat 1 — 1 in 13 children */}
          <div className="flex flex-col items-center text-center animate-fade-up">
            {/* Child figure icon */}
            <div
              className="mb-4 flex h-12 w-12 items-center justify-center rounded-full"
              style={{ background: "var(--ll-sky-light)" }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <circle
                  cx="12"
                  cy="5.5"
                  r="2.5"
                  stroke="var(--ll-navy)"
                  strokeWidth="1.8"
                />
                <path
                  d="M12 10v5m0 0l-2.5 4m2.5-4l2.5 4"
                  stroke="var(--ll-navy)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 13.5h8"
                  stroke="var(--ll-navy)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <p
              className="text-2xl font-bold md:text-3xl"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--ll-navy)",
              }}
            >
              1 in 13
            </p>
            <p
              className="mt-2 max-w-[220px] text-sm leading-relaxed md:text-[15px]"
              style={{ color: "var(--ll-muted)" }}
            >
              children in the U.S. has a food allergy
            </p>
          </div>

          {/* Stat 2 — Every 3 minutes */}
          <div className="flex flex-col items-center text-center animate-fade-up delay-100">
            {/* Clock icon */}
            <div
              className="mb-4 flex h-12 w-12 items-center justify-center rounded-full"
              style={{ background: "var(--ll-coral-light)" }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  stroke="var(--ll-navy)"
                  strokeWidth="1.8"
                />
                <path
                  d="M12 7v5l3 3"
                  stroke="var(--ll-navy)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p
              className="text-2xl font-bold md:text-3xl"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--ll-navy)",
              }}
            >
              Every 3 min
            </p>
            <p
              className="mt-2 max-w-[260px] text-sm leading-relaxed md:text-[15px]"
              style={{ color: "var(--ll-muted)" }}
            >
              a food allergy reaction sends someone to the emergency room
            </p>
          </div>

          {/* Stat 3 — 170+ foods */}
          <div className="flex flex-col items-center text-center animate-fade-up delay-200">
            {/* Warning triangle icon */}
            <div
              className="mb-4 flex h-12 w-12 items-center justify-center rounded-full"
              style={{ background: "var(--ll-sage-light)" }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M12 3L2 21h20L12 3z"
                  stroke="var(--ll-navy)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 10v4"
                  stroke="var(--ll-navy)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <circle cx="12" cy="17" r="0.75" fill="var(--ll-navy)" />
              </svg>
            </div>
            <p
              className="text-2xl font-bold md:text-3xl"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--ll-navy)",
              }}
            >
              170+
            </p>
            <p
              className="mt-2 max-w-[240px] text-sm leading-relaxed md:text-[15px]"
              style={{ color: "var(--ll-muted)" }}
            >
              foods have been reported to cause allergic reactions
            </p>
          </div>
        </div>

        {/* Source attribution */}
        <p
          className="mt-10 text-center text-xs"
          style={{ color: "var(--ll-muted)" }}
        >
          Source: FARE (Food Allergy Research &amp; Education)
        </p>
      </div>
    </section>
  );
}
