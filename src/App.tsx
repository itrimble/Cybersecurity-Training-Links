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
  SupportSection,
  PrivacySection,
  Footer,
  SiteNav,
  AppsBooksSection,
} from "@/components/landing";

export default function App() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteNav />
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
      <AppsBooksSection />
      <WaitlistSection />
      <SupportSection />
      <PrivacySection />
      <Footer />
    </main>
  );
}
