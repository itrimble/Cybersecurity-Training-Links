import {
  HeroSection,
  LeadMagnetSection,
  ValuePropsSection,
  CareerPathsSection,
  CertificationSection,
  ResourcesSection,
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

// SocialProofSection (unverified stats + testimonials) is intentionally not rendered; see PR notes.
export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a href="#main" className="skip-link">Skip to content</a>
      <SiteNav />
      <main id="main" tabIndex={-1}>
        <HeroSection />
        <ValuePropsSection />
        <CareerPathsSection />
        <CertificationSection />
        <LeadMagnetSection />
        <ResourcesSection />
        <CoursePreviewSection />
        <QuickSurveySection />
        <PricingSection />
        <WaitlistSection />
        <AppsBooksSection />
        <LecternSection />
        <SupportSection />
        <PrivacySection />
      </main>
      <Footer />
    </div>
  );
}
