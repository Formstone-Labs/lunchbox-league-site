import Nav from "./components/Nav";
import Hero from "./components/Hero";
import AllergyStats from "./components/AllergyStats";
import Problem from "./components/Problem";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import SafetyCardDemo from "./components/SafetyCardDemo";
import WhyWeBuiltThis from "./components/WhyWeBuiltThis";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <AllergyStats />
        <Problem />
        <HowItWorks />
        <Features />
        <SafetyCardDemo />
        <WhyWeBuiltThis />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
