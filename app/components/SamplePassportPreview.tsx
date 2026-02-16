export default function SamplePassportPreview() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div
        className="pointer-events-none absolute -inset-6 rounded-[28px]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(232,168,73,0.16) 0%, transparent 70%)",
        }}
      />

      <article
        className="relative overflow-hidden rounded-3xl border p-6 md:p-8"
        style={{
          background: "#FDFCF8",
          borderColor: "rgba(221, 229, 222, 0.9)",
          boxShadow:
            "0 6px 24px rgba(44, 62, 45, 0.08), 0 28px 70px rgba(44, 62, 45, 0.12)",
        }}
      >
        <header className="flex items-center justify-between gap-4 border-b pb-4" style={{ borderColor: "var(--ll-border)" }}>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.16em]" style={{ color: "var(--ll-amber)" }}>
              Sample Passport Preview
            </p>
            <h2 className="mt-1 text-xl font-bold" style={{ color: "var(--ll-navy)", fontFamily: "var(--font-display)" }}>
              Maya R., age 8
            </h2>
          </div>
          <span className="rounded-full px-3 py-1 text-xs font-semibold" style={{ background: "var(--ll-sage-light)", color: "var(--ll-safe)" }}>
            Demo Only
          </span>
        </header>

        <section className="mt-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em]" style={{ color: "var(--ll-muted)" }}>
            Allergens
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {[
              ["Peanut", "var(--ll-coral-light)", "var(--ll-coral)"],
              ["Tree Nut", "var(--ll-coral-light)", "var(--ll-coral)"],
              ["Sesame", "var(--ll-amber-light)", "var(--ll-caution)"],
            ].map(([label, bg, color]) => (
              <span key={label} className="rounded-full px-3 py-1 text-xs font-semibold" style={{ background: bg, color }}>
                {label}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-5 rounded-2xl border-2 p-4" style={{ borderColor: "var(--ll-coral)" }}>
          <p className="text-[11px] font-bold uppercase tracking-[0.12em]" style={{ color: "var(--ll-coral)" }}>
            Emergency Action
          </p>
          <p className="mt-1 text-lg font-bold" style={{ color: "var(--ll-navy)" }}>
            Give epinephrine, then call 911.
          </p>
          <p className="mt-1 text-sm" style={{ color: "var(--ll-muted)" }}>
            EpiPen location (sample): front pocket of school bag.
          </p>
        </section>

        <section className="mt-5 grid gap-3 sm:grid-cols-2">
          {[
            ["Parent", "Alex", "(555) 111-1020"],
            ["Backup", "Jordan", "(555) 111-4040"],
          ].map(([role, name, phone]) => (
            <div key={role} className="rounded-xl border p-3" style={{ borderColor: "var(--ll-border)" }}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.1em]" style={{ color: "var(--ll-muted)" }}>
                {role}
              </p>
              <p className="mt-1 text-sm font-semibold" style={{ color: "var(--ll-navy)" }}>{name}</p>
              <p className="text-sm" style={{ color: "var(--ll-muted)" }}>{phone}</p>
            </div>
          ))}
        </section>
      </article>
    </div>
  );
}
