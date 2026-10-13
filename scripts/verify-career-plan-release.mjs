const defaultMarketingUrl = "https://remnantsecurity.com";
const defaultAcademyUrl = "https://remnant-security-academy.vercel.app";
const requestTimeoutMs = 15_000;

function argument(name, fallback) {
  const index = process.argv.indexOf(name);
  return index === -1 ? fallback : process.argv[index + 1];
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

async function request(url, init = {}) {
  return fetch(url, {
    ...init,
    signal: AbortSignal.timeout(requestTimeoutMs),
  });
}

function buildPlan(academyUrl) {
  const roadmap = [
    {
      week: "Week 1",
      title: "Set your Security Analyst baseline",
      action: "Protect 4–6 hours, review five current Security Analyst job descriptions, and record the skills and tools that repeat.",
      evidence: "A one-page baseline listing available time, current strengths, and three recurring skill gaps.",
    },
    {
      week: "Week 2",
      title: "Map the SOC investigation workflow",
      action: "Trace how an alert moves through intake, validation, triage, investigation, escalation, and documentation in a Security Operations Center.",
      evidence: "A workflow map connecting each SOC stage to an inspectable analyst artifact.",
    },
    {
      week: "Week 3",
      title: "Build a log-analysis foundation",
      action: "Use one reputable free lab to filter and compare safe authentication, process, and network logs, then reproduce the exercise without the tutorial.",
      evidence: "Annotated queries and screenshots showing three repeatable log-analysis findings.",
    },
    {
      week: "Week 4",
      title: "Practice incident triage",
      action: "Create a severity and disposition rubric, then use it to classify three simulated alerts without overstating what the evidence proves.",
      evidence: "Three triage records with severity, rationale, disposition, and clearly stated unknowns.",
    },
    {
      week: "Week 5",
      title: "Investigate five simulated alerts",
      action: "For each authorized lab alert, record the initial hypothesis, supporting and conflicting evidence, final disposition, and next action.",
      evidence: "Five structured alert notes with timestamps, queries, findings, and defensible dispositions.",
    },
    {
      week: "Week 6",
      title: "Correct your weakest investigation step",
      action: "Review the five alert notes for missed context, unsupported conclusions, and inconsistent severity, then repeat the weakest investigation.",
      evidence: "A before-and-after case showing one reasoning or evidence-handling mistake that was corrected.",
    },
    {
      week: "Week 7",
      title: "Scope the SOC alert triage casebook",
      action: "Write a one-page project brief covering the problem, authorized data, tools, four deliverables, safety boundary, and definition of done.",
      evidence: "A dated casebook brief with explicit authorization, exclusions, and acceptance criteria.",
    },
    {
      week: "Week 8",
      title: "Build the casebook’s alert narratives",
      action: "Turn the five investigations into concise narratives that show what triggered the alert, what you checked, and why you chose each disposition.",
      evidence: "A polished set of triage notes for five alerts using one consistent evidence template.",
    },
    {
      week: "Week 9",
      title: "Reconstruct an incident timeline",
      action: "Select the strongest case, normalize its timestamps, sequence the observed events, and distinguish facts from analyst inference.",
      evidence: "One incident timeline with cited event sources, confidence labels, and documented gaps.",
    },
    {
      week: "Week 10",
      title: "Write a findings brief for a non-expert",
      action: "Explain the selected incident’s scope, method, evidence, conclusion, limitations, and recommended next steps on one page.",
      evidence: "A one-page findings brief that a hiring manager can understand without opening the raw logs.",
    },
    {
      week: "Week 11",
      title: "Create and safely publish your checklist",
      action: "Turn the repeatable investigation steps into a checklist, remove secrets and personal data, request one review, and publish only safe material.",
      evidence: "A reviewed investigation checklist plus a sanitized portfolio repository or PDF.",
    },
    {
      week: "Week 12",
      title: "Connect the casebook to hiring",
      action: "Write two evidence-based résumé bullets and record a two-minute explanation of your triage decisions, uncertainty, and tradeoffs.",
      evidence: "Two résumé bullets and a recorded project walkthrough that references specific casebook evidence.",
    },
    {
      week: "Days 85–90",
      title: "Score the plan and commit to the next month",
      action: "Review every deliverable, update the three baseline gaps, and choose one dated 30-day action for applications, deeper practice, or certification support.",
      evidence: "A completed 90-day scorecard and one calendar-backed commitment for the next 30 days.",
    },
  ];

  return {
    generatedAt: new Date().toISOString(),
    bestFit: { id: "security-analyst", title: "Security Analyst" },
    alternatives: [
      { title: "Security Engineer" },
      { title: "Incident Responder" },
    ],
    skillPriorities: ["SIEM investigation", "Log analysis and correlation", "Incident triage and response", "Network traffic analysis"],
    certificationPriorities: ["Security+", "CySA+", "Splunk Core Certified User"],
    project: {
      title: "SOC alert triage casebook",
      summary: "Investigate a safe set of simulated alerts and document what happened, what mattered, and what you would do next.",
      deliverables: ["Triage notes for five alerts", "One incident timeline", "A one-page findings brief", "A reusable investigation checklist"],
    },
    roadmap,
    answerSummary: {
      goal: "Build portfolio proof I can explain",
      experience: "New to cybersecurity",
      challenges: ["My time is limited", "I need hands-on practice"],
      weeklyTime: "4–6 hours",
    },
    recommendedCourse: {
      title: "Cybersecurity Career Jumpstart",
      description: "Build a focused path and practical evidence.",
    },
    destinationUrl: new URL(
      "/courses/cybersecurity-career-jumpstart",
      academyUrl,
    ).toString(),
  };
}

function assertDistinctRoadmap(plan) {
  assert(plan.roadmap.length === 13, "The QA plan must contain exactly 13 roadmap periods.");
  for (const field of ["title", "action", "evidence"]) {
    const normalized = plan.roadmap.map((item) => item[field].toLowerCase().replace(/\s+/g, " ").trim());
    assert(
      new Set(normalized).size === normalized.length,
      `The QA plan repeats roadmap ${field} content.`,
    );
  }
}

async function verifyMarketing(marketingUrl, academyUrl) {
  const response = await request(marketingUrl);
  assert(response.ok, `Marketing site returned ${response.status}.`);
  const html = await response.text();
  const scriptPaths = [...html.matchAll(/<script[^>]+src=["']([^"']+\.js)["']/g)]
    .map((match) => match[1]);
  assert(scriptPaths.length > 0, "No production JavaScript bundle was found.");

  const bundles = await Promise.all(
    scriptPaths.map(async (path) => {
      const bundleResponse = await request(new URL(path, marketingUrl));
      assert(bundleResponse.ok, `Marketing bundle returned ${bundleResponse.status}.`);
      return bundleResponse.text();
    }),
  );
  const source = bundles.join("\n");

  assert(
    source.includes("MY 90-DAY CYBERSECURITY PLAN")
      || source.includes("My 90-Day Cybersecurity Plan"),
    "The deployed marketing bundle does not contain the 90-day plan funnel.",
  );
  assert(
    !source.includes("Find Your Cybersecurity Career Path")
      && !source.includes("Take our quick quiz"),
    "The deployed marketing bundle still contains the legacy assessment.",
  );
  assert(
    !source.toLowerCase().includes("api_secret"),
    "The deployed marketing bundle still contains an email-provider secret parameter.",
  );
  assert(
    source.includes(new URL(academyUrl).origin),
    "The deployed marketing bundle does not target the verified academy origin.",
  );

  console.log("PASS marketing funnel and client credential boundary");
}

async function verifyCareerPlanApi(marketingUrl, academyUrl, apiUrl, qaEmail, skipEmail) {
  const endpoint = new URL("/api/career-plan", apiUrl);
  const origin = new URL(marketingUrl).origin;
  const headers = {
    "Content-Type": "application/json",
    "Origin": origin,
  };
  const plan = buildPlan(academyUrl);
  assertDistinctRoadmap(plan);

  const preflight = await request(endpoint, {
    method: "OPTIONS",
    headers: { "Origin": origin },
  });
  assert(preflight.status === 204, `Career-plan preflight returned ${preflight.status}.`);
  assert(
    preflight.headers.get("access-control-allow-origin") === origin,
    "Career-plan preflight did not return the expected allowed origin.",
  );

  const rejected = await request(endpoint, {
    method: "POST",
    headers: { ...headers, "Origin": "https://untrusted.invalid" },
    body: JSON.stringify({ action: "download", plan, company: "" }),
  });
  assert(rejected.status === 403, `Untrusted origin returned ${rejected.status}, not 403.`);

  const repeatedPlan = {
    ...plan,
    roadmap: plan.roadmap.map((item) => ({
      ...item,
      action: "Repeat the same placeholder action.",
      evidence: "Repeat the same placeholder evidence.",
    })),
  };
  const repeated = await request(endpoint, {
    method: "POST",
    headers,
    body: JSON.stringify({ action: "download", plan: repeatedPlan, company: "" }),
  });
  assert(repeated.status === 400, `Repeated roadmap content returned ${repeated.status}, not 400.`);

  const download = await request(endpoint, {
    method: "POST",
    headers,
    body: JSON.stringify({ action: "download", plan, company: "" }),
  });
  assert(download.status === 200, `Career-plan download returned ${download.status}.`);
  assert(
    download.headers.get("content-type")?.startsWith("text/markdown"),
    "Career-plan download did not return Markdown.",
  );
  assert(
    download.headers.get("content-disposition")?.includes("attachment"),
    "Career-plan download is missing its attachment disposition.",
  );
  const markdown = await download.text();
  assert(
    (markdown.match(/^### /gm) ?? []).length === 13,
    "Career-plan download does not contain all 13 roadmap periods.",
  );
  assert(
    markdown.includes(plan.destinationUrl),
    "Career-plan download does not contain the matching academy path.",
  );
  console.log("PASS career-plan CORS, origin rejection, duplicate-roadmap rejection, download, roadmap, and routing");

  if (skipEmail) {
    console.log("SKIP career-plan email acceptance (--skip-email)");
    return;
  }

  assert(
    qaEmail && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(qaEmail),
    "Set CAREER_PLAN_QA_EMAIL to an inbox you control, or pass --skip-email for a non-release check.",
  );
  const email = await request(endpoint, {
    method: "POST",
    headers,
    body: JSON.stringify({ action: "email", email: qaEmail, plan, company: "" }),
  });
  assert(email.status === 200, `Career-plan email returned ${email.status}.`);
  console.log("PASS career-plan email accepted by the server-side provider");
  console.log("CHECK confirm the message arrived in the controlled QA inbox");
}

async function main() {
  const marketingUrl = new URL(argument("--marketing-url", defaultMarketingUrl));
  const academyUrl = new URL(argument("--academy-url", defaultAcademyUrl));
  const apiUrl = new URL(argument("--api-url", academyUrl));
  const skipEmail = process.argv.includes("--skip-email");
  const skipMarketing = process.argv.includes("--skip-marketing");

  if (skipMarketing) {
    console.log("SKIP marketing deployment verification (--skip-marketing)");
  } else {
    await verifyMarketing(marketingUrl, academyUrl);
  }
  await verifyCareerPlanApi(
    marketingUrl,
    academyUrl,
    apiUrl,
    process.env.CAREER_PLAN_QA_EMAIL,
    skipEmail,
  );
  console.log("PASS 90-day career-plan release verification");
}

main().catch((error) => {
  console.error(`FAIL ${error instanceof Error ? error.message : "Unknown release verification error."}`);
  process.exitCode = 1;
});
