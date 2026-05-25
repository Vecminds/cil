import { TweaksProvider } from "@/components/tweaks/tweaks-context";
import Nav from "@/components/nav";
import Hero from "@/components/hero";
import Problem from "@/components/problem";
import Solution from "@/components/solution";
import Features from "@/components/features";
import How from "@/components/how";
import IndustriesSection from "@/components/industries-section";
import FAQ from "@/components/faq";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import TweaksWrapper from "@/components/tweaks/tweaks-wrapper";
import RevealObserver from "@/components/reveal-observer";

export default function Page() {
  return (
    <TweaksProvider>
      <RevealObserver />
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <How />
        <IndustriesSection />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <TweaksWrapper />
    </TweaksProvider>
  );
}
