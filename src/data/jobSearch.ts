/**
 * Job Search Resources Data
 * Salary research, resume services, recruiters, job boards, and interview tips
 */

export interface JobResource {
  name: string;
  url: string;
  specialty?: string;
}

export interface KeywordTip {
  instead: string;
  use: string;
}

export interface InterviewTips {
  keywords: KeywordTip[];
  transferableSkills: string[];
  whyHireYou: string[];
}

export const salaryResearch: JobResource[] = [
  { name: "Glassdoor", url: "https://www.glassdoor.com/Salaries/index.htm" },
  { name: "Levels.fyi", url: "https://www.levels.fyi/" },
  { name: "Salary.com", url: "https://www.salary.com/" },
  { name: "PayScale", url: "https://www.payscale.com/" },
  { name: "Blind", url: "https://www.teamblind.com/" },
  { name: "Comparably", url: "https://www.comparably.com/" }
];

export const resumeServices: JobResource[] = [
  { name: "Storeyline Resumes", url: "https://storeylineresumes.com/" },
  { name: "TopResume", url: "https://www.topresume.com/" },
  { name: "Resume.io", url: "https://resume.io/" },
  { name: "Zety", url: "https://zety.com/" },
  { name: "ResumeGenius", url: "https://resumegenius.com/" },
  { name: "EnhanCV", url: "https://enhancv.com/" }
];

export const recruiters: JobResource[] = [
  { name: "CyberSN", url: "https://www.cybersn.com/", specialty: "Cybersecurity focused" },
  { name: "NinjaJobs", url: "https://ninjajobs.org/", specialty: "Security community" },
  { name: "Hitch Partners", url: "https://hitchpartners.com/", specialty: "Security executives" },
  { name: "Zilker Partners", url: "https://zilkerpartners.com/", specialty: "Tech security" },
  { name: "ClearedJobs.net", url: "https://clearedjobs.net/", specialty: "Security clearance" }
];

export const jobBoards: JobResource[] = [
  { name: "LinkedIn Jobs", url: "https://www.linkedin.com/jobs/" },
  { name: "Indeed", url: "https://www.indeed.com/" },
  { name: "Dice", url: "https://www.dice.com/" },
  { name: "CyberSecJobs", url: "https://www.cybersecjobs.com/" },
  { name: "InfoSec Jobs", url: "https://infosec-jobs.com/" },
  { name: "CyberSeek", url: "https://www.cyberseek.org/" },
  { name: "Glassdoor", url: "https://www.glassdoor.com/" },
  { name: "ZipRecruiter", url: "https://www.ziprecruiter.com/" }
];

export const interviewTips: InterviewTips = {
  keywords: [
    { instead: "team worker", use: "collaborate" },
    { instead: "hardworking", use: "diligent, conscientious" },
    { instead: "professional", use: "competent, proficient" },
    { instead: "problem solver", use: "solution-oriented" },
    { instead: "high standards", use: "detail-oriented" }
  ],
  transferableSkills: [
    "Risk Management",
    "Fraud Detection",
    "Customer Service",
    "Communication",
    "Project Management",
    "Problem-Solving",
    "Critical Thinking",
    "Attention to Detail",
    "Documentation",
    "Technical Troubleshooting",
    "Research & Analysis",
    "Adaptability",
    "Time Management"
  ],
  whyHireYou: [
    "Positive and enthusiastic attitude",
    "Actively seek out challenges",
    "Transferable skills match the role",
    "Work independently and as team member",
    "Strong communicator",
    "Go above and beyond expectations",
    "Adaptable to change",
    "Fast learner",
    "Committed to professional development"
  ]
};

export const communities: JobResource[] = [
  { name: 'Reddit r/cybersecurity', url: 'https://www.reddit.com/r/cybersecurity/' },
  { name: 'Reddit r/netsec', url: 'https://www.reddit.com/r/netsec/' },
  { name: 'Reddit r/AskNetsec', url: 'https://www.reddit.com/r/AskNetsec/' },
  { name: 'Hack The Box Discord', url: 'https://discord.gg/hackthebox' },
  { name: 'TryHackMe Discord', url: 'https://discord.gg/tryhackme' },
  { name: 'InfoSec Community Discord', url: 'https://discord.gg/infosec' },
  { name: 'Black Hills InfoSec Discord', url: 'https://discord.gg/bhis' },
  { name: 'OWASP Slack', url: 'https://owasp.org/slack/invite' }
];

export const newsResources: JobResource[] = [
  { name: 'Krebs on Security', url: 'https://krebsonsecurity.com/' },
  { name: 'The Hacker News', url: 'https://thehackernews.com/' },
  { name: 'Bleeping Computer', url: 'https://www.bleepingcomputer.com/' },
  { name: 'Dark Reading', url: 'https://www.darkreading.com/' },
  { name: 'Threatpost', url: 'https://threatpost.com/' },
  { name: 'Security Week', url: 'https://www.securityweek.com/' },
  { name: 'SANS Internet Storm Center', url: 'https://isc.sans.edu/' },
  { name: 'Risky Business Podcast', url: 'https://risky.biz/' }
];

export const governmentResources: JobResource[] = [
  { name: 'CISA Resources', url: 'https://www.cisa.gov/resources-tools' },
  { name: 'NIST Cybersecurity', url: 'https://www.nist.gov/cybersecurity' },
  { name: 'NICCS (National Initiative for Cybersecurity Careers)', url: 'https://niccs.cisa.gov/' },
  { name: 'CyberSeek Career Pathway', url: 'https://www.cyberseek.org/pathway.html' },
  { name: 'FBI Cyber Division', url: 'https://www.fbi.gov/investigate/cyber' },
  { name: 'NSA Cybersecurity', url: 'https://www.nsa.gov/Cybersecurity/' },
  { name: 'ENISA (EU)', url: 'https://www.enisa.europa.eu/' },
  { name: 'NCSC (UK)', url: 'https://www.ncsc.gov.uk/' }
];
