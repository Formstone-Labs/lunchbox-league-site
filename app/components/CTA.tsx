export default function CTA() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden py-20 md:py-28"
      style={{ background: "var(--ll-amber-light)" }}
    >
      {/* ------------------------------------------------
          Decorative hand-drawn doodles — scattered edges
          ------------------------------------------------ */}

      {/* Star — top left */}
      <svg
        className="pointer-events-none absolute top-8 left-6 h-10 w-10 opacity-30 md:top-12 md:left-16 md:h-14 md:w-14"
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M24 4L27.5 18.5H42L30 27.5L34 42L24 33L14 42L18 27.5L6 18.5H20.5L24 4Z"
          stroke="var(--ll-amber)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>

      {/* Heart — top right */}
      <svg
        className="pointer-events-none absolute top-10 right-8 h-9 w-9 opacity-25 md:top-16 md:right-20 md:h-12 md:w-12"
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
          fill="none"
        />
      </svg>

      {/* Small star — right middle */}
      <svg
        className="pointer-events-none absolute top-1/3 right-4 h-7 w-7 opacity-20 md:right-12 md:h-10 md:w-10"
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M20 4L23 16H35L25.5 23L29 35L20 28L11 35L14.5 23L5 16H17L20 4Z"
          stroke="var(--ll-amber)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>

      {/* Lunchbox doodle — bottom left */}
      <svg
        className="pointer-events-none absolute bottom-10 left-4 h-12 w-12 opacity-20 md:bottom-16 md:left-20 md:h-16 md:w-16"
        viewBox="0 0 56 56"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="8"
          y="18"
          width="40"
          height="28"
          rx="5"
          stroke="var(--ll-navy)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 18V14C18 11 21 8 28 8C35 8 38 11 38 14V18"
          stroke="var(--ll-navy)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <line
          x1="8"
          y1="30"
          x2="48"
          y2="30"
          stroke="var(--ll-navy)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      {/* Heart — bottom right */}
      <svg
        className="pointer-events-none absolute bottom-8 right-6 h-8 w-8 opacity-20 md:bottom-14 md:right-24 md:h-11 md:w-11"
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M24 42S6 28 6 17C6 10 11 5 17 5C20.5 5 23 7 24 9C25 7 27.5 5 31 5C37 5 42 10 42 17C42 28 24 42 24 42Z"
          stroke="var(--ll-sage)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>

      {/* Small star — bottom center-left */}
      <svg
        className="pointer-events-none absolute bottom-6 left-1/3 h-6 w-6 opacity-15 md:h-8 md:w-8"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M16 3L18.5 12.5H28L20.5 18L23.5 28L16 22L8.5 28L11.5 18L4 12.5H13.5L16 3Z"
          stroke="var(--ll-amber)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>

      {/* Tiny star — top center-right */}
      <svg
        className="pointer-events-none absolute top-6 left-2/3 h-5 w-5 opacity-20 md:h-7 md:w-7"
        viewBox="0 0 28 28"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M14 2L16 10H24L17.5 15L20 23L14 18.5L8 23L10.5 15L4 10H12L14 2Z"
          stroke="var(--ll-coral)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>

      {/* ------------------------------------------------
          Content
          ------------------------------------------------ */}
      <div className="relative mx-auto max-w-3xl px-5 text-center">
        <h2 className="ll-heading-lg">Be the first to know.</h2>

        <p
          className="mx-auto mt-4 max-w-xl text-base leading-relaxed md:text-lg"
          style={{ color: "var(--ll-muted)" }}
        >
          Join the waitlist and we&apos;ll let you know as soon as Lunchbox
          League is ready. No spam &mdash; just one email when it&apos;s time.
        </p>

        {/* Email signup form */}
        <form
          action="mailto:hello@lunchboxleague.com"
          method="GET"
          className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            name="subject"
            placeholder="Enter your email"
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
            Join the Waitlist
          </button>
        </form>

        <p
          className="mt-4 text-xs"
          style={{ color: "var(--ll-muted)" }}
        >
          We respect your inbox. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
