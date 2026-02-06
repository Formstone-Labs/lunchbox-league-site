const faqs = [
  {
    q: "What is Lunchbox League?",
    a: "Lunchbox League is an app that helps parents of children with food allergies create a clear, shareable safety profile \u2014 including allergens, emergency plans, and contacts \u2014 so teachers, caregivers, and coaches always know what to do.",
  },
  {
    q: "When does it launch?",
    a: "We\u2019re building Lunchbox League right now and plan to launch soon. Join the waitlist to be the first to know.",
  },
  {
    q: "Is it a medical device?",
    a: "No. Lunchbox League is a communication tool, not a medical device. It helps you share allergy information clearly \u2014 but always follow your child\u2019s allergist\u2019s guidance for medical decisions.",
  },
  {
    q: "Who can see my child\u2019s information?",
    a: "Only people you explicitly share it with. Profiles are private by default. You control who has access, and you can revoke it anytime.",
  },
  {
    q: "Will it be free?",
    a: "We\u2019re building Lunchbox League with a free core experience for families. We may offer optional premium features down the road, but the essentials will always be free.",
  },
  {
    q: "What allergies does it support?",
    a: "All of them. You can add any food allergy, intolerance, or dietary restriction. The profile also supports medication info and emergency action plans.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="ll-section">
      <div className="mx-auto max-w-3xl px-5">
        <div className="text-center">
          <h2 className="ll-heading-lg">Common questions.</h2>
        </div>

        <div className="mt-12 flex flex-col gap-3">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group ll-card px-6 py-5"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-[0.9375rem] font-semibold leading-snug [color:var(--ll-navy)] [&::-webkit-details-marker]:hidden [list-style:none]">
                <span>{faq.q}</span>

                {/* Plus icon that rotates to X when open */}
                <span
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full [background:var(--ll-amber-light)] transition-transform duration-200 group-open:rotate-45"
                  aria-hidden="true"
                >
                  <svg
                    className="h-3.5 w-3.5"
                    fill="none"
                    stroke="var(--ll-navy)"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </span>
              </summary>

              <div className="pt-3 pb-1 text-[0.9375rem] leading-relaxed [color:var(--ll-muted)]">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
