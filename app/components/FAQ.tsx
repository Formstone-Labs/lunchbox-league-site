const faqs = [
  {
    q: "What exactly is Lunchbox League?",
    a: "We\u2019re the sidekick every allergy parent deserves. Lunchbox League lets you build your child\u2019s Safety Shield \u2014 a shareable profile with their allergens, emergency action plan, and your contact info. Send it to teachers, coaches, grandparents, babysitters, anyone in your kid\u2019s squad. One link, always up to date, and everyone\u2019s on the same page.",
  },
  {
    q: "When does it launch?",
    a: "We\u2019re deep in the lab building this right now. Join the League to be first in line when we open the doors \u2014 and to help shape what we\u2019re building. Early members get a voice in the features we prioritize.",
  },
  {
    q: "Is Lunchbox League a medical device?",
    a: "Nope. We\u2019re a communication tool, not a medical one. Think of it like a really smart, always-current info card \u2014 we help the people in your child\u2019s life understand their needs clearly. For medical guidance, always follow your child\u2019s allergist. We\u2019re here to make sure everyone else is informed and prepared.",
  },
  {
    q: "Who can see my child\u2019s information?",
    a: "Only the people you choose. Your child\u2019s Shield is private by default. You pick who gets access, and you can revoke it anytime with one tap. We built this as parents ourselves \u2014 privacy isn\u2019t a feature, it\u2019s the foundation.",
  },
  {
    q: "Will it be free?",
    a: "The core experience \u2014 building and sharing your child\u2019s Shield \u2014 will always be free. We may add optional premium features later, but the essentials that keep your kid safe? Those belong to every family, no exceptions.",
  },
  {
    q: "What allergies does it support?",
    a: "All of them. Peanuts, tree nuts, dairy, shellfish, sesame \u2014 you name it. You can also add intolerances, dietary restrictions, medication details, and emergency action plans. Every hero\u2019s Shield is unique to them.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="ll-section">
      <div className="mx-auto max-w-3xl px-5">
        {/* Header */}
        <div className="text-center animate-fade-up">
          <p
            className="text-xs font-bold uppercase tracking-[0.2em]"
            style={{ color: "var(--ll-sage)" }}
          >
            Intel Briefing
          </p>
          <h2 className="ll-heading-lg mt-3">Questions? We&apos;ve got answers.</h2>
        </div>

        {/* Accordion */}
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
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-200 group-open:rotate-45 group-open:scale-110"
                  style={{ background: "var(--ll-amber-light)" }}
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
