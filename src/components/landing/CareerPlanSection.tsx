import { useEffect, useMemo, useState } from "react";
import type { FormEvent } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  CalendarDays,
  Check,
  CheckCircle2,
  Download,
  ExternalLink,
  Loader2,
  Mail,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  Target,
  Wrench,
} from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import {
  assessmentSteps,
  generateCareerPlan,
  isAssessmentComplete,
  planToMarkdown,
  type AssessmentAnswers,
  type CareerPlan,
} from "@/data/careerPlan";
import { careerPlanApiUrl } from "@/lib/academy";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

type PlanStage = "intro" | "questions" | "processing" | "result";

interface StoredPlanState {
  currentStep: number;
  answers: AssessmentAnswers;
  plan: CareerPlan | null;
}

const storageKey = "remnant-security-career-plan-v1";

function loadStoredState(): StoredPlanState {
  if (typeof window === "undefined") {
    return { currentStep: 0, answers: {}, plan: null };
  }

  try {
    const stored = window.localStorage.getItem(storageKey);
    if (!stored) return { currentStep: 0, answers: {}, plan: null };
    const parsed = JSON.parse(stored) as Partial<StoredPlanState>;
    return {
      currentStep: Math.min(
        Math.max(Number(parsed.currentStep) || 0, 0),
        assessmentSteps.length - 1,
      ),
      answers: parsed.answers && typeof parsed.answers === "object" ? parsed.answers : {},
      plan: parsed.plan?.version === 1 ? parsed.plan : null,
    };
  } catch {
    return { currentStep: 0, answers: {}, plan: null };
  }
}

function answerValues(value: string | string[] | undefined): string[] {
  if (Array.isArray(value)) return value;
  return value ? [value] : [];
}

function saveBlob(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}

function resultFilename(plan: CareerPlan): string {
  return `my-90-day-${plan.bestFit.id}-plan.md`;
}

export function CareerPlanSection() {
  const stored = useMemo(loadStoredState, []);
  const [stage, setStage] = useState<PlanStage>(stored.plan ? "result" : "intro");
  const [currentStep, setCurrentStep] = useState(stored.currentStep);
  const [answers, setAnswers] = useState<AssessmentAnswers>(stored.answers);
  const [plan, setPlan] = useState<CareerPlan | null>(stored.plan);
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [emailStatus, setEmailStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [emailMessage, setEmailMessage] = useState("");
  const [downloadStatus, setDownloadStatus] = useState<"idle" | "loading">("idle");
  const [downloadMessage, setDownloadMessage] = useState("");

  useEffect(() => {
    if (stage === "intro" && Object.keys(answers).length === 0 && !plan) {
      window.localStorage.removeItem(storageKey);
      return;
    }

    window.localStorage.setItem(
      storageKey,
      JSON.stringify({ currentStep, answers, plan } satisfies StoredPlanState),
    );
  }, [answers, currentStep, plan, stage]);

  useEffect(() => {
    if (stage !== "processing") return;

    const timer = window.setTimeout(() => {
      const nextPlan = generateCareerPlan(answers);
      setPlan(nextPlan);
      setStage("result");
      trackEvent("assessment_completed", {
        best_fit: nextPlan.bestFit.id,
        goal: String(answers.goal),
        experience: String(answers.experience),
      });
    }, 900);

    return () => window.clearTimeout(timer);
  }, [answers, stage]);

  const step = assessmentSteps[currentStep];
  const selectedValues = answerValues(answers[step?.id]);
  const canContinue = selectedValues.length > 0;
  const progress = ((currentStep + 1) / assessmentSteps.length) * 100;

  function startAssessment() {
    setStage("questions");
    trackEvent("assessment_started", { source: "career_plan_section" });
  }

  function chooseOption(value: string) {
    if (!step) return;

    if (!step.multiple) {
      setAnswers((current) => ({ ...current, [step.id]: value }));
      return;
    }

    setAnswers((current) => {
      const existing = answerValues(current[step.id]);
      const next = existing.includes(value)
        ? existing.filter((item) => item !== value)
        : existing.length < (step.maxSelections ?? Number.POSITIVE_INFINITY)
          ? [...existing, value]
          : existing;
      return { ...current, [step.id]: next };
    });
  }

  function continueAssessment() {
    if (!canContinue) return;
    if (currentStep < assessmentSteps.length - 1) {
      setCurrentStep((current) => current + 1);
      return;
    }

    if (isAssessmentComplete(answers)) {
      setStage("processing");
    }
  }

  function goBack() {
    if (currentStep === 0) {
      setStage("intro");
      return;
    }
    setCurrentStep((current) => current - 1);
  }

  function resetPlan() {
    window.localStorage.removeItem(storageKey);
    setStage("intro");
    setCurrentStep(0);
    setAnswers({});
    setPlan(null);
    setEmail("");
    setEmailStatus("idle");
    setEmailMessage("");
    setDownloadMessage("");
  }

  async function downloadPlan() {
    if (!plan) return;
    setDownloadStatus("loading");
    setDownloadMessage("");

    let delivery: "server" | "local-fallback" = "server";
    try {
      const response = await fetch(careerPlanApiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "download",
          plan,
          source: window.location.href,
          company: "",
        }),
      });
      if (!response.ok) throw new Error("The plan service is temporarily unavailable.");
      saveBlob(await response.blob(), resultFilename(plan));
      setDownloadMessage("Your plan is downloaded and saved on this device.");
    } catch {
      delivery = "local-fallback";
      saveBlob(new Blob([planToMarkdown(plan)], { type: "text/markdown;charset=utf-8" }), resultFilename(plan));
      setDownloadMessage("Your plan is downloaded. A local copy was created while the email service is unavailable.");
    } finally {
      setDownloadStatus("idle");
      trackEvent("plan_downloaded", { best_fit: plan.bestFit.id, delivery });
      trackEvent("plan_saved", { best_fit: plan.bestFit.id, method: "download", delivery });
    }
  }

  async function emailPlan(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!plan || !email) return;
    setEmailStatus("sending");
    setEmailMessage("");

    try {
      const response = await fetch(careerPlanApiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "email",
          email,
          plan,
          source: window.location.href,
          company,
        }),
      });
      const data = await response.json() as { error?: string };
      if (!response.ok) throw new Error(data.error || "We could not email your plan right now.");
      setEmailStatus("success");
      setEmailMessage("Your plan is on its way. Check your inbox in a few minutes.");
      trackEvent("plan_emailed", { best_fit: plan.bestFit.id });
      trackEvent("plan_saved", { best_fit: plan.bestFit.id, method: "email" });
    } catch (error) {
      setEmailStatus("error");
      setEmailMessage(error instanceof Error ? error.message : "We could not email your plan right now.");
    }
  }

  function handleCourseClick() {
    if (!plan) return;
    trackEvent("plan_course_clicked", {
      best_fit: plan.bestFit.id,
      course: plan.recommendedCourse.id,
      destination: plan.destinationUrl ? "academy" : "waitlist",
    });
  }

  function goToWaitlist() {
    handleCourseClick();
    window.dispatchEvent(
      new CustomEvent("remnant:waitlist", {
        detail: { interest: plan?.recommendedCourse.id ?? "getting-started" },
      }),
    );
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section className="relative overflow-hidden bg-card/30 py-20 md:py-32" id="plan-builder">
      <div className="absolute inset-0 cyber-grid opacity-30" />
      <div className="container relative px-4">
        <div className="mx-auto max-w-5xl">
          {stage === "intro" && (
            <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <span className="section-label">[ MY 90-DAY CYBERSECURITY PLAN ]</span>
                <h2 className="mb-5 text-3xl font-bold tracking-tight md:text-5xl">
                  Stop collecting advice. Build your <span className="text-primary">next 90 days.</span>
                </h2>
                <p className="mb-8 max-w-2xl text-lg text-muted-foreground">
                  Answer seven focused questions and leave with a role-specific plan,
                  one portfolio project, and a practical week-by-week roadmap.
                </p>
                <Button size="lg" className="cyber-button group" onClick={startAssessment}>
                  Build my free plan
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <p className="mt-4 text-sm text-muted-foreground">
                  About 3 minutes. No account required. Your progress stays on this device.
                </p>
              </div>

              <div className="cyber-card p-6 md:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="icon-box"><Sparkles className="h-6 w-6 text-primary" /></div>
                  <div>
                    <p className="font-mono text-xs text-primary">YOUR OUTPUT</p>
                    <h3 className="text-xl font-bold">A plan you can actually use</h3>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    [Target, "Best-fit career lane", "See your strongest match and two credible alternatives."],
                    [Wrench, "One portfolio project", "Build evidence instead of another unfinished playlist."],
                    [CalendarDays, "13-week roadmap", "Know exactly what to learn, build, test, and publish each week."],
                    [ShieldCheck, "Private by default", "Responses are saved locally; analytics never include your email."],
                  ].map(([Icon, title, description]) => {
                    const ItemIcon = Icon as typeof Target;
                    return (
                      <div className="flex gap-3" key={String(title)}>
                        <ItemIcon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <div>
                          <p className="font-medium">{String(title)}</p>
                          <p className="text-sm text-muted-foreground">{String(description)}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {stage === "questions" && step && (
            <div className="mx-auto max-w-3xl">
              <div className="mb-7">
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="font-mono text-primary">STEP {currentStep + 1} OF {assessmentSteps.length}</span>
                  <span className="text-muted-foreground">{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} aria-label={`Assessment progress: ${Math.round(progress)}%`} />
              </div>

              <div className="cyber-card p-6 md:p-9">
                <span className="mb-3 block font-mono text-xs tracking-wider text-accent">[ {step.eyebrow} ]</span>
                <h2 className="mb-2 text-2xl font-bold md:text-3xl">{step.question}</h2>
                <p className="mb-7 text-muted-foreground">{step.helper}</p>

                <div className="space-y-3" role={step.multiple ? "group" : "radiogroup"} aria-label={step.question}>
                  {step.options.map((option) => {
                    const selected = selectedValues.includes(option.value);
                    const atLimit = Boolean(
                      step.multiple &&
                      !selected &&
                      selectedValues.length >= (step.maxSelections ?? Number.POSITIVE_INFINITY),
                    );
                    return (
                      <button
                        type="button"
                        key={option.value}
                        onClick={() => chooseOption(option.value)}
                        disabled={atLimit}
                        role={step.multiple ? "checkbox" : "radio"}
                        aria-checked={selected}
                        className={cn(
                          "flex w-full items-start gap-4 border p-4 text-left transition-all md:p-5",
                          selected
                            ? "border-primary bg-primary/10"
                            : "border-border bg-background/40 hover:border-primary/50",
                          atLimit && "cursor-not-allowed opacity-45",
                        )}
                      >
                        <span className="text-2xl" aria-hidden="true">{option.icon}</span>
                        <span className="flex-1">
                          <span className="block font-medium">{option.label}</span>
                          <span className="mt-1 block text-sm text-muted-foreground">{option.description}</span>
                        </span>
                        <span
                          className={cn(
                            "mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border",
                            selected ? "border-primary bg-primary text-primary-foreground" : "border-muted-foreground",
                          )}
                        >
                          {selected && <Check className="h-3 w-3" />}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-8 flex items-center justify-between gap-4 border-t border-border pt-6">
                  <Button variant="ghost" onClick={goBack}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back
                  </Button>
                  <Button onClick={continueAssessment} disabled={!canContinue} className="cyber-button">
                    {currentStep === assessmentSteps.length - 1 ? "Build my plan" : "Next question"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          )}

          {stage === "processing" && (
            <div className="mx-auto max-w-2xl py-16 text-center" role="status" aria-live="polite">
              <div className="icon-box animate-glow-pulse mx-auto mb-7 h-20 w-20">
                <Loader2 className="h-9 w-9 animate-spin text-primary" />
              </div>
              <span className="section-label">[ BUILDING YOUR PLAN ]</span>
              <h2 className="mb-3 text-3xl font-bold">Turning your answers into a practical roadmap…</h2>
              <p className="text-muted-foreground">
                Matching your career lane, skill priorities, project, and weekly pace.
              </p>
            </div>
          )}

          {stage === "result" && plan && (
            <div className="animate-fade-in">
              <div className="mb-8 flex flex-col gap-5 border-b border-border pb-8 md:flex-row md:items-end md:justify-between">
                <div>
                  <span className="section-label">[ YOUR 90-DAY CYBERSECURITY PLAN ]</span>
                  <h2 className="text-3xl font-bold md:text-5xl">
                    Your strongest lane: <span className="text-primary">{plan.bestFit.title}</span>
                  </h2>
                  <p className="mt-3 max-w-3xl text-muted-foreground">
                    {plan.bestFit.description} Your plan is saved on this device and can be downloaded or emailed.
                  </p>
                </div>
                <Button variant="outline" onClick={resetPlan} className="shrink-0">
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Start over
                </Button>
              </div>

              <div className="mb-8 grid gap-5 lg:grid-cols-3">
                <div className="cyber-card p-6 lg:col-span-2">
                  <div className="mb-5 flex items-center gap-3">
                    <Target className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-bold">Career match</h3>
                  </div>
                  <div className="mb-5 border border-primary/30 bg-primary/5 p-5">
                    <span className="font-mono text-xs text-primary">BEST FIT</span>
                    <div className="mt-2 flex items-start gap-3">
                      <span className="text-3xl" aria-hidden="true">{plan.bestFit.icon}</span>
                      <div>
                        <h4 className="text-xl font-bold">{plan.bestFit.title}</h4>
                        <p className="mt-1 text-sm text-muted-foreground">{plan.bestFit.description}</p>
                      </div>
                    </div>
                  </div>
                  <p className="mb-3 text-sm font-medium">Credible alternatives</p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {plan.alternatives.map((career) => (
                      <div className="flex items-center gap-3 border border-border p-4" key={career.id}>
                        <span className="text-2xl" aria-hidden="true">{career.icon}</span>
                        <span className="font-medium">{career.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="cyber-card p-6">
                  <div className="mb-5 flex items-center gap-3">
                    <Award className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-bold">Your priorities</h3>
                  </div>
                  <p className="mb-2 font-mono text-xs text-accent">SKILLS</p>
                  <ol className="mb-6 space-y-2">
                    {plan.skillPriorities.map((skill, index) => (
                      <li className="flex gap-2 text-sm" key={skill}>
                        <span className="font-mono text-primary">{index + 1}.</span>{skill}
                      </li>
                    ))}
                  </ol>
                  <p className="mb-2 font-mono text-xs text-accent">CERTIFICATIONS</p>
                  <ol className="space-y-2">
                    {plan.certificationPriorities.map((certification, index) => (
                      <li className="flex gap-2 text-sm" key={certification}>
                        <span className="font-mono text-primary">{index + 1}.</span>{certification}
                      </li>
                    ))}
                  </ol>
                  <p className="mt-4 text-xs text-muted-foreground">Certifications support the work; they do not replace portfolio evidence.</p>
                </div>
              </div>

              <div className="cyber-card mb-8 p-6 md:p-8">
                <div className="mb-5 flex items-center gap-3">
                  <Wrench className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-mono text-xs text-accent">YOUR PORTFOLIO PROJECT</p>
                    <h3 className="text-2xl font-bold">{plan.project.title}</h3>
                  </div>
                </div>
                <p className="mb-5 max-w-3xl text-muted-foreground">{plan.project.summary}</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {plan.project.deliverables.map((deliverable) => (
                    <div className="flex gap-3 border border-border p-4 text-sm" key={deliverable}>
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                      {deliverable}
                    </div>
                  ))}
                </div>
              </div>

              <div className="cyber-card mb-8 p-6 md:p-8">
                <div className="mb-7 flex items-center gap-3">
                  <CalendarDays className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-mono text-xs text-accent">WEEK BY WEEK</p>
                    <h3 className="text-2xl font-bold">Your 90-day roadmap</h3>
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {plan.roadmap.map((item, index) => (
                    <article className="relative border border-border bg-background/35 p-5" key={item.week}>
                      <span className="absolute right-4 top-4 font-mono text-3xl text-primary/20">{String(index + 1).padStart(2, "0")}</span>
                      <p className="mb-1 font-mono text-xs text-primary">{item.week.toUpperCase()}</p>
                      <h4 className="mb-2 pr-10 text-lg font-bold">{item.title}</h4>
                      <p className="mb-4 text-sm text-muted-foreground">{item.action}</p>
                      <p className="border-t border-border pt-3 text-xs"><span className="font-medium text-accent">EVIDENCE:</span> {item.evidence}</p>
                    </article>
                  ))}
                </div>
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                <div className="cyber-card p-6 md:p-8">
                  <div className="mb-5 flex items-center gap-3">
                    <Download className="h-6 w-6 text-primary" />
                    <div>
                      <p className="font-mono text-xs text-accent">KEEP YOUR WORK</p>
                      <h3 className="text-xl font-bold">Save your plan</h3>
                    </div>
                  </div>
                  <Button onClick={downloadPlan} disabled={downloadStatus === "loading"} className="mb-5 w-full cyber-button">
                    {downloadStatus === "loading" ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Download className="mr-2 h-4 w-4" />}
                    Download as Markdown
                  </Button>
                  {downloadMessage && <p className="mb-5 text-sm text-primary" role="status">{downloadMessage}</p>}

                  <form className="space-y-3 border-t border-border pt-5" onSubmit={emailPlan}>
                    <label className="block text-sm font-medium" htmlFor="plan-email">Email a copy to yourself</label>
                    <Input
                      id="plan-email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      required
                    />
                    <label className="absolute h-px w-px overflow-hidden opacity-0" aria-hidden="true">
                      Company
                      <input name="company" tabIndex={-1} autoComplete="off" value={company} onChange={(event) => setCompany(event.target.value)} />
                    </label>
                    <Button type="submit" variant="outline" className="w-full" disabled={emailStatus === "sending" || !email}>
                      {emailStatus === "sending" ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Mail className="mr-2 h-4 w-4" />}
                      Email my plan
                    </Button>
                    {emailMessage && (
                      <p className={cn("text-sm", emailStatus === "error" ? "text-red-400" : "text-primary")} role={emailStatus === "error" ? "alert" : "status"}>
                        {emailMessage}
                      </p>
                    )}
                    <p className="text-xs text-muted-foreground">Your email is used to deliver this plan. It is never included in analytics.</p>
                  </form>
                </div>

                <div className="cyber-card border-primary/40 p-6 md:p-8">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <div>
                      <p className="font-mono text-xs text-accent">RECOMMENDED NEXT STEP</p>
                      <h3 className="text-xl font-bold">{plan.recommendedCourse.title}</h3>
                    </div>
                    <span className="font-mono text-2xl font-bold text-primary">${plan.recommendedCourse.price}</span>
                  </div>
                  <p className="mb-4 text-sm text-muted-foreground">{plan.recommendedCourse.description}</p>
                  <ul className="mb-6 space-y-2">
                    {plan.recommendedCourse.features.slice(0, 3).map((feature) => (
                      <li className="flex gap-2 text-sm" key={feature}>
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />{feature}
                      </li>
                    ))}
                  </ul>
                  {plan.destinationUrl ? (
                    <a
                      href={plan.destinationUrl}
                      onClick={handleCourseClick}
                      className={buttonVariants({ className: "w-full cyber-button" })}
                    >
                      Follow my academy path
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  ) : (
                    <Button className="w-full cyber-button" onClick={goToWaitlist}>
                      Join the matching course waitlist
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  )}
                  <p className="mt-4 text-xs text-muted-foreground">Your free plan is complete whether or not you enroll.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
