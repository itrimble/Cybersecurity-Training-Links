import {
  HeroSection,
  AboutSection,
  TrainingSection,
  CareerQuiz,
  CurriculumSection,
  CertificationSection,
  InterviewSection,
  ToolsSection,
  BooksSection,
  WaitlistSection,
  Footer,
} from "@/components/landing";

export default function App() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <AboutSection />
      <TrainingSection />
      <CareerQuiz />
      <CurriculumSection />
      <CertificationSection />
      <InterviewSection />
      <ToolsSection />
      <BooksSection />
      <WaitlistSection />
      <Footer />
    </main>
  );
}
