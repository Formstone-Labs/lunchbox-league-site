export default function CTA() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden py-24 md:py-32"
      style={{ background: "var(--ll-amber-light)" }}
    >
      {/* ------------------------------------------------
          Decorative elements -- scattered hero doodles
          ------------------------------------------------ */}

      {/* Large starburst -- top left */}
      <svg
        className="pointer-events-none absolute top-6 left-4 h-14 w-14 opacity-20 md:top-10 md:left-16 md:h-20 md:w-20"
        viewBox="0 0 56 56"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M28 4l3.5 10.5L42 11l-7 9 5 10.5-10.5-2L28 40l-1.5-11.5L16 30.5l5-10.5-7-9 10.5 3.5z"
          stroke="var(--ll-amber)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Heart -- top right */}
      <svg
        className="pointer-events-none absolute top-8 right-6 h-10 w-10 opacity-20 md:top-14 md:right-20 md:h-14 md:w-14"
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M24 42S6 28 6 17C6 10 11 5 17 5C20.5 5 23 7 24 9C25 7 27.5 5 31 5C37 5 42 10 42 17C42 28 24 42 24 42Z"
          stroke="var(--ll-coral)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Shield -- right middle */}
      <svg
        className="pointer-events-none absolute top-1/3 right-3 h-9 w-9 opacity-15 md:right-12 md:h-12 md:w-12"
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M20 4L8 10v8c0 8 5.1 15 12 18 6.9-3 12-10 12-18v-8L20 4z"
          stroke="var(--ll-navy)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Cape / lightning -- bottom left */}
      <svg
        className="pointer-events-none absolute bottom-10 left-4 h-14 w-14 opacity-15 md:bottom-16 md:left-20 md:h-18 md:w-18"
        viewBox="0 0 56 56"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M32 8L18 28h10l-4 20L42 28H30l4-20z"
          stroke="var(--ll-amber)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Star cluster -- bottom right */}
      <svg
        className="pointer-events-none absolute bottom-8 right-8 h-10 w-10 opacity-15 md:bottom-14 md:right-24 md:h-14 md:w-14"
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M24 6l3 9h9l-7 5.5 2.5 9L24 24l-7.5 5.5 2.5-9-7-5.5h9z"
          stroke="var(--ll-sage)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="12" r="2" stroke="var(--ll-coral)" strokeWidth="1" opacity="0.5" />
        <circle cx="38" cy="38" r="1.5" stroke="var(--ll-amber)" strokeWidth="1" opacity="0.5" />
      </svg>

      {/* Small sparkle -- top center-right */}
      <svg
        className="pointer-events-none absolute top-5 left-2/3 h-6 w-6 opacity-20 md:h-8 md:w-8"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M12 2v4m0 12v4M2 12h4m12 0h4M5.6 5.6l2.8 2.8m7.2 7.2l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"
          stroke="var(--ll-coral)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>

      {/* Tiny lunchbox -- bottom center-left */}
      <svg
        className="pointer-events-none absolute bottom-6 left-1/4 h-8 w-8 opacity-15 md:h-10 md:w-10"
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="6"
          y="14"
          width="28"
          height="18"
          rx="4"
          stroke="var(--ll-navy)"
          strokeWidth="1.5"
        />
        <path
          d="M14 14v-3a6 6 0 0 1 12 0v3"
          stroke="var(--ll-navy)"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        <line x1="6" y1="22" x2="34" y2="22" stroke="var(--ll-navy)" strokeWidth="1.5" />
      </svg>

      {/* ------------------------------------------------
          Content
          ------------------------------------------------ */}
      <div className="relative mx-auto max-w-3xl px-5 text-center">
        <div className="animate-fade-up">
          <h2 className="ll-heading-lg">
            Every league starts with one&nbsp;hero.
          </h2>

          <p
            className="mx-auto mt-5 max-w-xl text-base leading-relaxed md:text-lg"
            style={{ color: "var(--ll-muted)" }}
          >
            You already protect your kid every single day. Lunchbox League just
            makes sure the rest of the world is ready too. Join us&nbsp;&mdash;
            and help build something that matters.
          </p>
        </div>

        {/* Email signup form */}
        <form
          action="mailto:hello@lunchboxleague.com"
          method="GET"
          className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row animate-fade-up delay-100"
        >
          <input
            type="email"
            name="subject"
            placeholder="Your email address"
            required
            aria-label="Email address"
            className="flex-1 rounded-xl border bg-white px-5 py-3.5 text-[0.9375rem] outline-none transition-shadow placeholder:opacity-50 focus:ring-2"
            style={{
              borderColor: "var(--ll-border)",
              color: "var(--ll-ink)",
              // @ts-expect-error CSS custom property
              "--tw-ring-color": "var(--ll-amber)",
            }}
          />
          <button type="submit" className="ll-btn-primary whitespace-nowrap">
            Join the League
          </button>
        </form>

        <p
          className="mt-4 text-xs animate-fade-up delay-200"
          style={{ color: "var(--ll-muted)" }}
        >
          We only send the good stuff. Promise.
        </p>
      </div>
    </section>
  );
}
