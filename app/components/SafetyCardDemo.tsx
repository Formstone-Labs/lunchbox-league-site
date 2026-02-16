export default function SafetyCardDemo() {
  return (
    <section
      id="safety"
      className="ll-section relative overflow-hidden"
      style={{ background: "var(--ll-navy)", paddingTop: "7rem", paddingBottom: "7rem" }}
    >
      {/* Soft curve at top for organic transition */}
      <div
        className="pointer-events-none absolute -top-px left-0 w-full"
        aria-hidden="true"
      >
        <svg viewBox="0 0 1440 48" fill="none" className="block w-full" preserveAspectRatio="none" style={{ height: "48px" }}>
          <path d="M0 48V24C360 0 1080 0 1440 24V48H0Z" fill="var(--ll-cream)" />
        </svg>
      </div>

      {/* Soft curve at bottom */}
      <div
        className="pointer-events-none absolute -bottom-px left-0 w-full"
        aria-hidden="true"
      >
        <svg viewBox="0 0 1440 48" fill="none" className="block w-full" preserveAspectRatio="none" style={{ height: "48px" }}>
          <path d="M0 0V24C360 48 1080 48 1440 24V0H0Z" fill="var(--ll-cream)" />
        </svg>
      </div>

      {/* Comic-book dot pattern background */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.035) 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Subtle energy arc -- top */}
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[600px] -translate-x-1/2 rounded-[50%] opacity-[0.06]"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse, var(--ll-amber) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center animate-fade-up">
          <p
            className="text-xs font-bold uppercase tracking-[0.2em]"
            style={{ color: "var(--ll-amber)" }}
          >
            Your Secret Weapon
          </p>
          <h2
            className="mt-3 text-[1.75rem] font-bold tracking-tight text-white md:text-[2.25rem]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            The Shield, up close.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70 md:text-lg">
            Everything your child&apos;s squad needs&nbsp;&mdash; allergens, action
            plans, emergency contacts&nbsp;&mdash; in one glance.
          </p>
        </div>

        {/* Demo card with glow aura */}
        <div className="mx-auto mt-14 max-w-lg animate-fade-up delay-200">
          <div
            className="relative rounded-2xl"
            style={{
              /* Layered glow aura */
              filter: "drop-shadow(0 0 40px rgba(245,166,35,0.12))",
            }}
          >
            {/* Outer glow ring */}
            <div
              className="pointer-events-none absolute -inset-3 rounded-3xl opacity-30"
              aria-hidden="true"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(245,166,35,0.15), transparent 70%)",
              }}
            />

            <div
              className="relative rounded-2xl bg-white p-6 md:p-8"
              style={{
                boxShadow:
                  "0 4px 12px rgba(0,0,0,0.08), 0 24px 64px rgba(0,0,0,0.22), 0 0 0 1px rgba(245,166,35,0.08)",
              }}
            >
              {/* ---- Card header ---- */}
              <div className="flex items-center gap-3">
                <div
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-white"
                  style={{ background: "var(--ll-navy)" }}
                >
                  {/* Shield icon */}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 2L3 7v5c0 6.5 3.9 11.9 9 14.3 5.1-2.4 9-7.8 9-14.3V7l-9-5z" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span
                      className="text-[10px] font-bold uppercase tracking-[0.15em]"
                      style={{ color: "var(--ll-amber)" }}
                    >
                      Safety Shield
                    </span>
                    {/* Verified badge */}
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="var(--ll-sage)"
                      aria-hidden="true"
                    >
                      <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1Zm2.85 5.35-3.5 3.5a.5.5 0 0 1-.7 0l-1.5-1.5a.5.5 0 1 1 .7-.7L7 8.79l3.15-3.15a.5.5 0 1 1 .7.7Z" />
                    </svg>
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
                <div className="flex items-center gap-2">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 16 16"
                    fill="var(--ll-coral)"
                    aria-hidden="true"
                  >
                    <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM7.5 4.5h1v5h-1v-5Zm0 6h1v1h-1v-1Z" />
                  </svg>
                  <div
                    className="text-[11px] font-bold uppercase tracking-wider"
                    style={{ color: "var(--ll-coral)" }}
                  >
                    If Exposure Suspected
                  </div>
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
                  style={{ background: "var(--ll-navy)" }}
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
          </div>

          {/* Caption */}
          <p className="mt-10 text-center text-sm font-medium text-white/50">
            Built by parents. Trusted by everyone who loves your kid.
          </p>
        </div>
      </div>
    </section>
  );
}
