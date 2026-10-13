const fallbackAcademyUrl = "https://academy.remnantsecurity.com";

function normalizeBaseUrl(value: string | undefined): string {
  return (value?.trim() || fallbackAcademyUrl).replace(/\/$/, "");
}

export const academyBaseUrl = normalizeBaseUrl(import.meta.env.VITE_ACADEMY_URL);

export const waitlistApiUrl =
  import.meta.env.VITE_WAITLIST_API_URL?.trim() || `${academyBaseUrl}/api/waitlist`;

export const careerPlanApiUrl =
  import.meta.env.VITE_CAREER_PLAN_API_URL?.trim() || `${academyBaseUrl}/api/career-plan`;

export function academyUrl(path: string): string {
  return `${academyBaseUrl}/${path.replace(/^\//, "")}`;
}
