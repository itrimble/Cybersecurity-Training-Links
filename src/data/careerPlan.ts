import { careers, type Career } from "@/data/careers";
import { coursePreviews, type CoursePreview } from "@/data/courses";
import { academyUrl } from "@/lib/academy";

export type AssessmentAnswer = string | string[];
export type AssessmentAnswers = Record<string, AssessmentAnswer>;

export interface AssessmentOption {
  value: string;
  label: string;
  description: string;
  icon: string;
  careers?: string[];
}

export interface AssessmentStep {
  id: string;
  eyebrow: string;
  question: string;
  helper: string;
  multiple?: boolean;
  maxSelections?: number;
  options: AssessmentOption[];
}

export interface PlanProject {
  title: string;
  summary: string;
  deliverables: string[];
}

export interface RoadmapWeek {
  week: string;
  title: string;
  action: string;
  evidence: string;
}

export interface CareerPlan {
  version: 1;
  generatedAt: string;
  bestFit: Career;
  alternatives: Career[];
  skillPriorities: string[];
  certificationPriorities: string[];
  project: PlanProject;
  roadmap: RoadmapWeek[];
  recommendedCourse: CoursePreview;
  destinationUrl: string | null;
  answerSummary: {
    goal: string;
    experience: string;
    challenges: string[];
    weeklyTime: string;
  };
}

const allCareerIds = careers.map((career) => career.id);

export const assessmentSteps: AssessmentStep[] = [
  {
    id: "goal",
    eyebrow: "YOUR OUTCOME",
    question: "What would make the next 90 days feel successful?",
    helper: "Choose the outcome you want this plan to move toward.",
    options: [
      {
        value: "first-job",
        label: "Choose a path toward my first cyber role",
        description: "Stop guessing and build evidence for a realistic entry lane.",
        icon: "🚀",
        careers: ["security-analyst", "grc-analyst", "security-engineer", "penetration-tester"],
      },
      {
        value: "portfolio",
        label: "Build portfolio proof I can explain",
        description: "Finish one credible artifact instead of collecting more tutorials.",
        icon: "🧰",
        careers: allCareerIds,
      },
      {
        value: "certification",
        label: "Prepare for a useful certification",
        description: "Connect study time to hands-on work and a target role.",
        icon: "🎓",
        careers: ["security-analyst", "security-engineer", "cloud-security", "penetration-tester", "grc-analyst"],
      },
      {
        value: "advance",
        label: "Move into a stronger security specialty",
        description: "Turn existing IT or cyber experience into a focused next move.",
        icon: "📈",
        careers: ["security-architect", "cloud-security", "appsec-engineer", "threat-intel", "incident-responder"],
      },
      {
        value: "train-team",
        label: "Lead or train a security team",
        description: "Build a practical plan for risk, governance, and team capability.",
        icon: "🧭",
        careers: ["ciso", "grc-analyst", "security-architect", "security-engineer"],
      },
    ],
  },
  {
    id: "experience",
    eyebrow: "YOUR STARTING POINT",
    question: "Where are you starting from today?",
    helper: "There is no wrong answer. This changes the pace and first milestones.",
    options: [
      {
        value: "new",
        label: "New to cybersecurity",
        description: "I need foundations, vocabulary, and a safe place to practice.",
        icon: "🌱",
        careers: ["security-analyst", "grc-analyst", "security-engineer"],
      },
      {
        value: "student",
        label: "Student or recent graduate",
        description: "I need to turn learning into employer-ready evidence.",
        icon: "📚",
        careers: ["security-analyst", "penetration-tester", "security-engineer", "threat-intel"],
      },
      {
        value: "it-transitioning",
        label: "IT professional moving into security",
        description: "I want to translate existing experience into a security specialty.",
        icon: "🔄",
        careers: ["security-engineer", "cloud-security", "security-architect", "incident-responder"],
      },
      {
        value: "security-pro",
        label: "Already working in security",
        description: "I want deeper specialization and stronger portfolio proof.",
        icon: "🛡️",
        careers: ["incident-responder", "appsec-engineer", "threat-intel", "red-team", "malware-analyst"],
      },
      {
        value: "manager",
        label: "Manager or team lead",
        description: "I need a plan I can use to guide people and decisions.",
        icon: "👥",
        careers: ["ciso", "grc-analyst", "security-architect"],
      },
    ],
  },
  {
    id: "challenges",
    eyebrow: "WHAT GETS IN THE WAY",
    question: "What has made progress difficult?",
    helper: "Choose up to three. Your roadmap will account for them.",
    multiple: true,
    maxSelections: 3,
    options: [
      { value: "where-to-start", label: "I do not know where to start", description: "There are too many paths and conflicting recommendations.", icon: "🗺️" },
      { value: "time", label: "My time is limited", description: "Work, school, or family makes consistency difficult.", icon: "⏱️" },
      { value: "budget", label: "Training costs add up", description: "I need a plan built around affordable resources.", icon: "💸" },
      { value: "practice", label: "I need hands-on practice", description: "I understand concepts but lack evidence of applied work.", icon: "🧪" },
      { value: "confidence", label: "I am not sure my work is good enough", description: "I need a clearer quality bar and review checklist.", icon: "🔎" },
      { value: "job-search", label: "My learning does not connect to hiring", description: "I need to explain projects, decisions, and results clearly.", icon: "💼" },
    ],
  },
  {
    id: "work-style",
    eyebrow: "HOW YOU LIKE TO WORK",
    question: "Which kind of security work sounds most satisfying?",
    helper: "Pick the work you would still enjoy when it becomes detailed.",
    options: [
      { value: "respond", label: "Investigate active threats and incidents", description: "Follow evidence, make decisions, and restore normal operations.", icon: "🚨", careers: ["security-analyst", "incident-responder", "threat-intel"] },
      { value: "test", label: "Find weaknesses before attackers do", description: "Test systems in authorized environments and explain the risk.", icon: "🎯", careers: ["penetration-tester", "red-team", "appsec-engineer"] },
      { value: "build", label: "Build and improve secure systems", description: "Design controls, automate safeguards, and reduce repeat failures.", icon: "⚙️", careers: ["security-engineer", "cloud-security", "appsec-engineer", "security-architect"] },
      { value: "govern", label: "Turn risk into clear decisions and policy", description: "Connect technical evidence to business priorities and accountability.", icon: "📋", careers: ["grc-analyst", "ciso", "security-architect"] },
      { value: "research", label: "Study malware, actors, and emerging threats", description: "Analyze patterns and turn findings into useful intelligence.", icon: "🧬", careers: ["malware-analyst", "threat-intel", "red-team"] },
    ],
  },
  {
    id: "security-focus",
    eyebrow: "YOUR CURIOSITY",
    question: "What do you most want to understand or protect?",
    helper: "This narrows your lane without locking you into one job title.",
    options: [
      { value: "people-process", label: "People, process, risk, and compliance", description: "Policies, audits, governance, insider risk, and security programs.", icon: "🤝", careers: ["grc-analyst", "ciso", "security-architect"] },
      { value: "networks-endpoints", label: "Networks, endpoints, and security operations", description: "Logs, alerts, investigations, detections, and response.", icon: "🖥️", careers: ["security-analyst", "incident-responder", "security-engineer", "malware-analyst"] },
      { value: "cloud-apps", label: "Cloud platforms and applications", description: "Identity, infrastructure, code, pipelines, and application risk.", icon: "☁️", careers: ["cloud-security", "appsec-engineer", "security-engineer", "security-architect"] },
      { value: "offensive", label: "Offensive testing and adversary behavior", description: "Authorized exploitation, emulation, and defensive lessons.", icon: "🧨", careers: ["penetration-tester", "red-team", "threat-intel"] },
      { value: "intelligence", label: "Threat intelligence and malware", description: "Actor behavior, indicators, reverse engineering, and reporting.", icon: "🧠", careers: ["threat-intel", "malware-analyst", "incident-responder"] },
    ],
  },
  {
    id: "technical-depth",
    eyebrow: "YOUR PREFERRED DEPTH",
    question: "How technical do you want your next role to be?",
    helper: "Choose what fits your interests—not what sounds most impressive.",
    options: [
      { value: "deep", label: "Deeply technical", description: "Code, reverse engineering, exploitation, or complex engineering.", icon: "⌨️", careers: ["malware-analyst", "red-team", "appsec-engineer", "cloud-security"] },
      { value: "hands-on", label: "Hands-on with tools and systems", description: "Configure, investigate, test, and document technical environments.", icon: "🛠️", careers: ["security-analyst", "security-engineer", "incident-responder", "penetration-tester"] },
      { value: "balanced", label: "A balance of technical and business work", description: "Translate evidence, risk, architecture, and operational needs.", icon: "⚖️", careers: ["security-architect", "threat-intel", "grc-analyst", "cloud-security"] },
      { value: "strategic", label: "Mostly strategic and people-focused", description: "Lead programs, priorities, governance, and executive decisions.", icon: "♟️", careers: ["ciso", "grc-analyst", "security-architect"] },
    ],
  },
  {
    id: "weekly-time",
    eyebrow: "A PLAN YOU CAN KEEP",
    question: "How much focused time can you protect each week?",
    helper: "A smaller honest commitment beats an ambitious plan you cannot repeat.",
    options: [
      { value: "2-3", label: "2–3 hours", description: "Three short sessions built around one essential outcome.", icon: "🕒" },
      { value: "4-6", label: "4–6 hours", description: "A steady pace with learning, lab work, and documentation.", icon: "🗓️" },
      { value: "7-10", label: "7–10 hours", description: "A faster pace with room for deeper project iterations.", icon: "⚡" },
      { value: "10-plus", label: "More than 10 hours", description: "An intensive pace with additional practice and review.", icon: "🔥" },
    ],
  },
];

const projectsByCareer: Record<string, PlanProject> = {
  "security-analyst": {
    title: "SOC alert triage casebook",
    summary: "Investigate a safe set of simulated alerts and document what happened, what mattered, and what you would do next.",
    deliverables: ["Triage notes for five alerts", "One incident timeline", "A one-page findings brief", "A reusable investigation checklist"],
  },
  "penetration-tester": {
    title: "Authorized web application assessment",
    summary: "Assess a purpose-built training application, validate findings safely, and write a remediation-focused report.",
    deliverables: ["Rules-of-engagement statement", "Evidence-backed findings", "Risk-ranked remediation table", "Executive summary"],
  },
  "security-engineer": {
    title: "Secure baseline automation pack",
    summary: "Define and test a secure configuration baseline for a lab system, then automate the repeatable checks.",
    deliverables: ["Baseline checklist", "Validation script", "Before-and-after evidence", "Exception and rollback notes"],
  },
  "incident-responder": {
    title: "Incident timeline and after-action report",
    summary: "Reconstruct a simulated incident from synthetic evidence and turn the investigation into operational lessons.",
    deliverables: ["Evidence log", "Incident timeline", "Containment decision record", "After-action report"],
  },
  "security-architect": {
    title: "Threat model and reference architecture",
    summary: "Model a fictional service, identify trust boundaries, and recommend controls with clear tradeoffs.",
    deliverables: ["System context diagram", "Threat register", "Control decisions", "Reference architecture brief"],
  },
  "grc-analyst": {
    title: "Risk register and control evidence pack",
    summary: "Assess a fictional small organization and connect risks, controls, owners, and evidence without overstating certainty.",
    deliverables: ["Scoped risk register", "Control mapping", "Evidence request list", "Leadership summary"],
  },
  "cloud-security": {
    title: "Cloud security posture review",
    summary: "Review a lab cloud environment for identity, logging, network, and data-protection gaps.",
    deliverables: ["Architecture diagram", "Prioritized findings", "Remediation-as-code sample", "Verification checklist"],
  },
  "appsec-engineer": {
    title: "Secure code review pack",
    summary: "Review a deliberately vulnerable training application and show how fixes reduce concrete risk.",
    deliverables: ["Threat model", "Annotated findings", "Secure code changes", "Regression checklist"],
  },
  "threat-intel": {
    title: "Decision-focused threat intelligence brief",
    summary: "Research a public threat scenario and turn sourced findings into a bounded, useful recommendation.",
    deliverables: ["Source log", "Confidence-rated findings", "Actor or campaign timeline", "Decision brief"],
  },
  ciso: {
    title: "90-day security program brief",
    summary: "Prioritize a fictional organization’s security work using business context, risk, ownership, and measurable outcomes.",
    deliverables: ["Current-state summary", "Prioritized risk backlog", "90-day operating plan", "Executive scorecard"],
  },
  "red-team": {
    title: "Authorized adversary emulation plan",
    summary: "Design a bounded exercise for a lab environment and connect each test to defensive learning.",
    deliverables: ["Rules of engagement", "Technique-to-control map", "Safe execution plan", "Purple-team findings brief"],
  },
  "malware-analyst": {
    title: "Static malware triage report",
    summary: "Analyze a known-safe training sample without executing it and communicate the evidence and limitations.",
    deliverables: ["Sample handling notes", "Static indicators", "Behavior hypotheses", "Detection and escalation brief"],
  },
};

function answerValues(answer: AssessmentAnswer | undefined): string[] {
  if (Array.isArray(answer)) return answer;
  return answer ? [answer] : [];
}

function optionLabel(stepId: string, value: string): string {
  return assessmentSteps
    .find((step) => step.id === stepId)
    ?.options.find((option) => option.value === value)?.label || value;
}

function rankCareers(answers: AssessmentAnswers): Career[] {
  const scores = new Map(careers.map((career, index) => [career.id, { score: 0, index }]));

  for (const step of assessmentSteps) {
    for (const value of answerValues(answers[step.id])) {
      const option = step.options.find((item) => item.value === value);
      option?.careers?.forEach((careerId) => {
        const entry = scores.get(careerId);
        if (entry) entry.score += step.id === "goal" ? 2 : 3;
      });
    }
  }

  return [...careers].sort((left, right) => {
    const leftScore = scores.get(left.id)!;
    const rightScore = scores.get(right.id)!;
    return rightScore.score - leftScore.score || leftScore.index - rightScore.index;
  });
}

function certificationPriorities(career: Career, experience: string): string[] {
  const certifications = [...career.certifications];
  if (["new", "student"].includes(experience) && !certifications.includes("Security+")) {
    certifications.unshift("Security+");
  }
  return [...new Set(certifications)].slice(0, 3);
}

function recommendedCourse(answers: AssessmentAnswers): CoursePreview {
  const goal = answers.goal;
  const experience = answers.experience;
  if (goal === "train-team") {
    return coursePreviews.find((course) => course.id === "ai-governance")!;
  }
  if (experience === "security-pro" && goal === "advance") {
    return coursePreviews.find((course) => course.id === "ai-security-practitioner")!;
  }
  if (["new", "student"].includes(String(experience)) || goal === "first-job") {
    return coursePreviews.find((course) => course.id === "career-jumpstart")!;
  }
  return coursePreviews.find((course) => course.id === "remnant-security-bootcamp")!;
}

function roadmapFor(
  career: Career,
  project: PlanProject,
  challenges: string[],
  weeklyTime: string,
): RoadmapWeek[] {
  const hours = weeklyTime === "2-3" ? "2–3" : weeklyTime === "7-10" ? "7–10" : weeklyTime === "10-plus" ? "10+" : "4–6";
  const firstSkill = career.skills[0];
  const secondSkill = career.skills[1] ?? career.skills[0];
  const hasTimeConstraint = challenges.includes("time");
  const resourceConstraint = challenges.includes("budget")
    ? "Use a free or already-owned lab resource."
    : "Choose one reputable learning resource and ignore competing playlists.";

  return [
    { week: "Week 1", title: "Set your baseline", action: `Protect ${hours} hours, review five current ${career.title} job descriptions, and record the skills that repeat.`, evidence: "A one-page baseline with your available time, current strengths, and three gaps." },
    { week: "Week 2", title: "Learn the role through real work", action: `Interview or observe one practitioner if possible. Map ${career.dailyTasks.slice(0, 3).join(", ").toLowerCase()} to evidence employers can inspect.`, evidence: "A role map connecting daily tasks to portfolio evidence." },
    { week: "Week 3", title: `Build the ${firstSkill} foundation`, action: `${resourceConstraint} Complete one focused lesson and reproduce the result in your own safe environment.`, evidence: `Notes and screenshots showing a repeatable ${firstSkill} exercise.` },
    { week: "Week 4", title: `Practice ${secondSkill}`, action: `Complete a second bounded exercise, then explain what the output proves and what it does not prove.`, evidence: `A concise technical explanation of the ${secondSkill} exercise.` },
    { week: "Week 5", title: "Follow one investigation or build workflow", action: `Use a checklist for one realistic lab task. ${hasTimeConstraint ? "Split it into three sessions of 45 minutes or less." : "Repeat the workflow once without the tutorial."}`, evidence: "A completed checklist plus raw, non-sensitive evidence." },
    { week: "Week 6", title: "Close the first skill gap", action: `Review your errors from weeks 3–5 and repeat the weakest step until the result is consistent.`, evidence: "A before-and-after note showing one corrected mistake." },
    { week: "Week 7", title: `Scope: ${project.title}`, action: `Write a one-page project brief with the problem, safe boundary, tools, deliverables, and definition of done.`, evidence: "A dated project brief with explicit authorization and safety limits." },
    { week: "Week 8", title: "Build the first working version", action: `Create the smallest complete version of the project and capture evidence as you work.`, evidence: project.deliverables[0] },
    { week: "Week 9", title: "Test normal and failure cases", action: `Test the project against expected, unexpected, and incomplete inputs. Record limitations instead of hiding them.`, evidence: project.deliverables[1] ?? "A test record with normal and failure cases." },
    { week: "Week 10", title: "Turn work into a clear story", action: `Document the problem, scope, method, evidence, result, and limitations for a non-expert reader.`, evidence: project.deliverables[2] ?? "A portfolio-ready project brief." },
    { week: "Week 11", title: "Review and publish safely", action: `Remove secrets and personal data, ask one person to review the work, and publish only material safe to share.`, evidence: project.deliverables[3] ?? "A sanitized, reviewed portfolio artifact." },
    { week: "Week 12", title: "Connect the project to hiring", action: `Write two résumé bullets and practice a two-minute explanation of your decisions, evidence, and tradeoffs.`, evidence: "Two evidence-based résumé bullets and a recorded project explanation." },
    { week: "Days 85–90", title: "Review, choose, and continue", action: `Score the plan honestly, update your gaps, and choose the next 30-day action. Treat certifications as support for the work—not a substitute for it.`, evidence: "A completed scorecard and one dated next commitment." },
  ];
}

export function isAssessmentComplete(answers: AssessmentAnswers): boolean {
  return assessmentSteps.every((step) => answerValues(answers[step.id]).length > 0);
}

export function generateCareerPlan(answers: AssessmentAnswers): CareerPlan {
  if (!isAssessmentComplete(answers)) {
    throw new Error("Complete every assessment step before generating a plan.");
  }

  const [bestFit, ...alternatives] = rankCareers(answers);
  const experience = String(answers.experience);
  const challenges = answerValues(answers.challenges);
  const weeklyTime = String(answers["weekly-time"]);
  const project = projectsByCareer[bestFit.id];
  const course = recommendedCourse(answers);

  const destinationUrl = course.status === "available"
    ? bestFit.academyPathSlug && course.id === "remnant-security-bootcamp"
      ? academyUrl(`/courses/remnant-security-cybersecurity-bootcamp/paths/${bestFit.academyPathSlug}`)
      : course.ctaUrl ?? null
    : null;

  return {
    version: 1,
    generatedAt: new Date().toISOString(),
    bestFit,
    alternatives: alternatives.slice(0, 2),
    skillPriorities: bestFit.skills.slice(0, 4),
    certificationPriorities: certificationPriorities(bestFit, experience),
    project,
    roadmap: roadmapFor(bestFit, project, challenges, weeklyTime),
    recommendedCourse: course,
    destinationUrl,
    answerSummary: {
      goal: optionLabel("goal", String(answers.goal)),
      experience: optionLabel("experience", experience),
      challenges: challenges.map((challenge) => optionLabel("challenges", challenge)),
      weeklyTime: optionLabel("weekly-time", weeklyTime),
    },
  };
}

export function planToMarkdown(plan: CareerPlan): string {
  const lines = [
    "# My 90-Day Cybersecurity Plan",
    "",
    `Generated: ${new Date(plan.generatedAt).toLocaleDateString()}`,
    `Best-fit lane: ${plan.bestFit.title}`,
    `Alternative lanes: ${plan.alternatives.map((career) => career.title).join(", ")}`,
    "",
    "## Starting point",
    "",
    `- Goal: ${plan.answerSummary.goal}`,
    `- Experience: ${plan.answerSummary.experience}`,
    `- Weekly commitment: ${plan.answerSummary.weeklyTime}`,
    `- Constraints: ${plan.answerSummary.challenges.join(", ")}`,
    "",
    "## Skill priorities",
    "",
    ...plan.skillPriorities.map((skill, index) => `${index + 1}. ${skill}`),
    "",
    "## Certification priorities",
    "",
    ...plan.certificationPriorities.map((certification, index) => `${index + 1}. ${certification}`),
    "",
    `## Portfolio project: ${plan.project.title}`,
    "",
    plan.project.summary,
    "",
    ...plan.project.deliverables.map((deliverable) => `- ${deliverable}`),
    "",
    "## Week-by-week roadmap",
    "",
    ...plan.roadmap.flatMap((item) => [
      `### ${item.week}: ${item.title}`,
      "",
      item.action,
      "",
      `**Evidence:** ${item.evidence}`,
      "",
    ]),
    "## Recommended next step",
    "",
    `${plan.recommendedCourse.title}: ${plan.recommendedCourse.description}`,
    plan.destinationUrl ? `\n${plan.destinationUrl}` : "\nJoin the Remnant Security launch list for this course.",
    "",
    "---",
    "Generated by Remnant Security. This plan is guidance, not a job guarantee.",
  ];

  return lines.join("\n");
}
