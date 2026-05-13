import { Download } from "@/components/sections/download";
import { FaqSection } from "@/components/sections/faq";
import { Features } from "@/components/sections/features";
import { Footer } from "@/components/sections/footer";
import { Gestures } from "@/components/sections/gestures";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Pricing } from "@/components/sections/pricing";
import { Privacy } from "@/components/sections/privacy";

const HomePage = () => {
  return (
    <main className="relative">
      <Hero />
      <HowItWorks />
      <div className="hairline mx-auto max-w-6xl" />
      <Features />
      <div className="hairline mx-auto max-w-6xl" />
      <Gestures />
      <div className="hairline mx-auto max-w-6xl" />
      <Privacy />
      <Pricing />
      <Download />
      <FaqSection />
      <Footer />
    </main>
  );
};

export default HomePage;
