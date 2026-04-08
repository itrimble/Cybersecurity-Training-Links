import {
  HeroSection,
  LeadMagnetSection,
  ValuePropsSection,
  CareerPathsSection,
  CertificationSection,
  ResourcesSection,
  SocialProofSection,
  CoursePreviewSection,
  LecternSection,
  QuickSurveySection,
  PricingSection,
  WaitlistSection,
  Footer,
} from "@/components/landing";

export default function App() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <LeadMagnetSection />
      <ValuePropsSection />
      <CareerPathsSection />
      <CertificationSection />
      <ResourcesSection />
      <SocialProofSection />
      <CoursePreviewSection />
      <LecternSection />
      <QuickSurveySection />
      <PricingSection />
      <WaitlistSection />
      <Footer />
    </main>
  );
}
