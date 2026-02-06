export default function SafetyCardDemo() {
  return (
    <section
      id="safety"
      className="ll-section relative overflow-hidden"
      style={{ background: "var(--ll-navy)" }}
    >
      {/* Subtle dot-grid texture instead of gradient orbs */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center animate-fade-up">
          <h2
            className="text-[1.75rem] tracking-tight text-white md:text-[2.25rem]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            See the safety card.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/80 md:text-lg">
            Everything a teacher needs to know&nbsp;&mdash; at a glance.
          </p>
        </div>

        {/* Demo card */}
        <div className="mx-auto mt-14 max-w-lg animate-fade-up delay-200">
          <div
            className="rounded-2xl bg-white p-6 md:p-8"
            style={{
              boxShadow:
                "0 4px 12px rgba(0,0,0,0.08), 0 24px 64px rgba(0,0,0,0.18)",
            }}
          >
            {/* ---- Card header ---- */}
            <div className="flex items-center gap-3">
              <div
                className="grid h-9 w-9 shrink-0 place-items-center rounded-xl text-white"
                style={{ background: "var(--ll-navy)" }}
              >
                {/* Lunchbox icon */}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="9" width="18" height="11" rx="3" />
                  <path d="M3 13h18" />
                  <path d="M8 9V6a4 4 0 0 1 8 0v3" />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span
                    className="text-xs font-semibold uppercase tracking-wide"
                    style={{ color: "var(--ll-muted)" }}
                  >
                    Safety Card
                  </span>
                </div>
                <div
                  className="text-base font-semibold"
                  style={{ color: "var(--ll-navy)" }}
                >
                  Example Child
                </div>
              </div>
              <span
                className="shrink-0 text-xs"
                style={{ color: "var(--ll-muted)" }}
              >
                Updated today
              </span>
            </div>

            {/* ---- Allergen tags ---- */}
            <div className="mt-5 flex flex-wrap gap-2">
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold"
                style={{
                  background: "var(--ll-coral-light)",
                  color: "var(--ll-coral)",
                }}
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM6.7 5.3a.5.5 0 0 1 .7 0L8 5.9l.6-.6a.5.5 0 1 1 .7.7L8.7 6.6l.6.6a.5.5 0 1 1-.7.7L8 7.3l-.6.6a.5.5 0 1 1-.7-.7l.6-.6-.6-.6a.5.5 0 0 1 0-.7ZM5 10a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5A.5.5 0 0 1 5 10Z" />
                </svg>
                Peanut&nbsp;&mdash; Avoid
              </span>
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold"
                style={{
                  background: "var(--ll-amber-light)",
                  color: "var(--ll-caution)",
                }}
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M8 1.45l6.93 12.18A.5.5 0 0 1 14.49 14H1.51a.5.5 0 0 1-.44-.74L8 1.45ZM7.5 10.5v1h1v-1h-1Zm0-4v3h1v-3h-1Z" />
                </svg>
                Egg&nbsp;&mdash; Caution
              </span>
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold"
                style={{
                  background: "var(--ll-sage-light)",
                  color: "var(--ll-safe)",
                }}
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1Zm2.85 5.35-3.5 3.5a.5.5 0 0 1-.7 0l-1.5-1.5a.5.5 0 1 1 .7-.7L7 8.79l3.15-3.15a.5.5 0 1 1 .7.7Z" />
                </svg>
                Dairy&nbsp;&mdash; Safe
              </span>
            </div>

            {/* ---- Emergency protocol ---- */}
            <div
              className="mt-5 rounded-xl border-2 p-4"
              style={{ borderColor: "var(--ll-coral)" }}
            >
              <div
                className="text-[11px] font-bold uppercase tracking-wider"
                style={{ color: "var(--ll-coral)" }}
              >
                If Exposure Suspected
              </div>
              <div
                className="mt-2 text-lg font-bold leading-snug"
                style={{ color: "var(--ll-navy)" }}
              >
                Give epinephrine. Call 911.
              </div>
              <div
                className="mt-1 text-sm"
                style={{ color: "var(--ll-muted)" }}
              >
                Contact parent immediately.
              </div>
            </div>

            {/* ---- Emergency contacts ---- */}
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div
                className="rounded-xl border p-3"
                style={{ borderColor: "var(--ll-border)" }}
              >
                <div
                  className="text-[11px] font-semibold uppercase tracking-wide"
                  style={{ color: "var(--ll-muted)" }}
                >
                  Parent
                </div>
                <div
                  className="mt-1 text-sm font-semibold"
                  style={{ color: "var(--ll-navy)" }}
                >
                  Mom
                </div>
                <div
                  className="text-sm"
                  style={{ color: "var(--ll-muted)" }}
                >
                  (555) 555&#x2011;1212
                </div>
              </div>
              <div
                className="rounded-xl border p-3"
                style={{ borderColor: "var(--ll-border)" }}
              >
                <div
                  className="text-[11px] font-semibold uppercase tracking-wide"
                  style={{ color: "var(--ll-muted)" }}
                >
                  Backup
                </div>
                <div
                  className="mt-1 text-sm font-semibold"
                  style={{ color: "var(--ll-navy)" }}
                >
                  Dad
                </div>
                <div
                  className="text-sm"
                  style={{ color: "var(--ll-muted)" }}
                >
                  (555) 555&#x2011;3434
                </div>
              </div>
            </div>

            {/* ---- Action buttons ---- */}
            <div className="mt-5 flex flex-wrap gap-2">
              <button
                type="button"
                className="rounded-full px-4 py-2 text-xs font-semibold text-white transition-colors"
                style={{
                  background: "var(--ll-navy)",
                }}
              >
                Share Card
              </button>
              <button
                type="button"
                className="rounded-full px-4 py-2 text-xs font-semibold transition-colors"
                style={{
                  color: "var(--ll-navy)",
                  border: "1.5px solid var(--ll-border)",
                  background: "transparent",
                }}
              >
                Print
              </button>
              <button
                type="button"
                className="rounded-full px-4 py-2 text-xs font-semibold transition-colors"
                style={{
                  background: "var(--ll-coral-light)",
                  color: "var(--ll-coral)",
                }}
              >
                Emergency Plan
              </button>
            </div>
          </div>

          {/* Caption below card */}
          <p className="mt-8 text-center text-sm text-white/60">
            Shareable. Printable. Always up to date.
          </p>
        </div>
      </div>
    </section>
  );
}
