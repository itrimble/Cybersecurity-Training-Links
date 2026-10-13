import {
  SiteNav,
  HeroSection,
  LeadMagnetSection,
  ValuePropsSection,
  CareerPlanSection,
  CareerPathsSection,
  CertificationSection,
  ResourcesSection,
  SocialProofSection,
  CoursePreviewSection,
  PricingSection,
  WaitlistSection,
  Footer,
} from "@/components/landing";

export default function App() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <a
        href="#plan-builder"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to 90-day plan
      </a>
      <SiteNav />
      <HeroSection />
      <LeadMagnetSection />
      <ValuePropsSection />
      <CareerPlanSection />
      <CareerPathsSection />
      <CertificationSection />
      <ResourcesSection />
      <SocialProofSection />
      <CoursePreviewSection />
      <PricingSection />
      <WaitlistSection />
      <Footer />
    </main>
  );
}
