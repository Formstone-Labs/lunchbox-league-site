import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import SamplePassportPreview from "../components/SamplePassportPreview";

export default function SamplePassportPage() {
  return (
    <>
      <Nav />
      <main className="relative overflow-hidden py-20 md:py-28">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 70% 20%, rgba(232,168,73,0.09) 0%, transparent 70%), radial-gradient(ellipse 55% 45% at 20% 75%, rgba(124,154,130,0.08) 0%, transparent 65%)",
          }}
        />

        <div className="relative mx-auto max-w-6xl px-5">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: "var(--ll-muted)" }}>
              Public demo
            </p>
            <h1 className="mt-4 ll-heading-lg">View a sample Allergy Passport</h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed md:text-lg" style={{ color: "var(--ll-muted)" }}>
              This page is a marketing preview with fictional child details. To create and manage your real child&apos;s passport, use the Lunchbox League app.
            </p>
          </div>

          <div className="mt-10">
            <SamplePassportPreview />
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="https://app.lunchboxleague.com" className="ll-btn-hero">
              Open the App
            </Link>
            <Link href="/" className="ll-btn-secondary">
              Back to Website
            </Link>
          </div>

          <p className="mx-auto mt-4 max-w-2xl text-center text-sm" style={{ color: "var(--ll-muted)" }}>
            Sample preview only (no account required). The app experience uses your authenticated account and your real child data.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
