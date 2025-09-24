import { Navigation } from "@/components/ui/navigation";
import { HeroSection } from "@/components/ui/hero-section";
import { TrustSection } from "@/components/ui/trust-section";
import { FeaturesSection } from "@/components/ui/features-section";
import { CtaSection } from "@/components/ui/cta-section";
import { Footer } from "@/components/ui/footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <TrustSection />
      <FeaturesSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
