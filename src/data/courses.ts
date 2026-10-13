/**
 * Course Data
 * Course previews and interest categories for the waitlist
 */

import { academyUrl } from '@/lib/academy';

export interface CoursePreview {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  price: number;
  listPrice?: number;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  features: string[];
  status: 'available' | 'coming-soon' | 'waitlist';
  badge?: string;
  ctaUrl?: string;
  ctaLabel?: string;
}

export interface CourseInterest {
  id: string;
  label: string;
  description: string;
}

export const courseInterests: CourseInterest[] = [
  {
    id: 'career-jumpstart',
    label: 'Cybersecurity Career Jumpstart',
    description: 'Choose a lane and build a practical 90-day plan'
  },
  {
    id: 'portfolio-labs',
    label: 'Portfolio Labs & Bootcamp',
    description: 'Build defender and hunter tools you can explain'
  },
  {
    id: 'ai-governance',
    label: 'AI & Cybersecurity Governance',
    description: 'Learn to manage AI risks and security policies'
  },
  {
    id: 'insider-threat',
    label: 'Insider Threat Detection',
    description: 'Build programs to detect and prevent insider threats'
  },
  {
    id: 'budget-soc',
    label: 'Budget SOC Operations',
    description: 'Run effective security operations on a limited budget'
  },
  {
    id: 'ai-security',
    label: 'AI Security Practitioner',
    description: 'Practice securing AI systems and workflows'
  }
];

export const roleOptions = [
  { value: 'student', label: 'Student' },
  { value: 'it-pro', label: 'IT Professional' },
  { value: 'career-changer', label: 'Career Changer' },
  { value: 'team-lead', label: 'Team Lead / Manager' }
];

export const coursePreviews: CoursePreview[] = [
  {
    id: 'remnant-security-bootcamp',
    title: 'Remnant Security Cybersecurity Bootcamp',
    subtitle: 'Build a defend-and-hunt portfolio across six role paths',
    description: 'A portfolio-first program that connects security foundations to working tools, KQL hunts, dashboards, risk briefs, and scenario-based assessments.',
    price: 97,
    listPrice: 197,
    duration: '9 modules',
    level: 'Beginner',
    features: [
      'Lifetime access with future updates',
      '32 focused lessons across six paths',
      'Nine portfolio artifacts',
      'Three working-tool lab projects',
      '180 interactive assessment questions',
      'Protected video and transcripts'
    ],
    status: 'available',
    badge: 'Flagship',
    ctaUrl: academyUrl('/courses/remnant-security-cybersecurity-bootcamp'),
    ctaLabel: 'Preview Bootcamp'
  },
  {
    id: 'ai-governance',
    title: 'AI Governance for Security Leaders',
    subtitle: 'Lead AI security initiatives with confidence',
    description: 'Master the frameworks and strategies needed to govern AI systems securely. Learn risk assessment, policy development, and compliance for AI in enterprise environments.',
    price: 197,
    duration: '6 weeks',
    level: 'Intermediate',
    features: [
      'AI risk assessment frameworks',
      'Security policy templates',
      'Compliance checklists (NIST AI RMF)',
      'Real-world case studies',
      'Certificate of completion'
    ],
    status: 'waitlist',
    badge: 'Popular'
  },
  {
    id: 'insider-threat',
    title: 'Insider Threat Program Development',
    subtitle: 'Build your organization\'s insider threat program',
    description: 'Learn to design, implement, and manage an insider threat program. Covers detection techniques, behavioral analysis, and incident response for insider risks.',
    price: 147,
    duration: '4 weeks',
    level: 'Intermediate',
    features: [
      'Program design templates',
      'Detection tool configurations',
      'Behavioral indicators guide',
      'Investigation procedures',
      'Policy documentation'
    ],
    status: 'waitlist'
  },
  {
    id: 'budget-soc',
    title: 'Budget SOC Operations Bootcamp',
    subtitle: 'Maximum security monitoring, minimal budget',
    description: 'Build and run an effective Security Operations Center without breaking the bank. Learn to leverage open-source tools, automate workflows, and prioritize threats.',
    price: 97,
    duration: '4 weeks',
    level: 'Beginner',
    features: [
      'Open-source SIEM setup',
      'Alert triage playbooks',
      'Automation scripts',
      'Tool comparison guides',
      'Hands-on labs'
    ],
    status: 'waitlist',
    badge: 'Best Value'
  },
  {
    id: 'career-jumpstart',
    title: 'Cybersecurity Career Jumpstart',
    subtitle: 'Choose a lane, build proof, execute 90 days',
    description: 'The book-backed academy entry course. Build a lane decision, learning route, safe lab blueprint, portfolio evidence pack, AI review gate, and dated 90-day career contract.',
    price: 47,
    listPrice: 97,
    duration: '3 weeks',
    level: 'Beginner',
    features: [
      '18 focused lessons',
      'Five required proof artifacts',
      'Safe home lab blueprint',
      'AI workflow guardrails',
      '90-day execution scoreboard'
    ],
    status: 'available',
    badge: 'Start Here',
    ctaUrl: academyUrl('/courses/cybersecurity-career-jumpstart'),
    ctaLabel: 'Preview Course'
  },
  {
    id: 'ai-security-practitioner',
    title: 'AI Security Practitioner',
    subtitle: 'Hands-on AI security for practitioners',
    description: 'Deep dive into securing AI/ML systems. Covers adversarial attacks, model security, prompt injection, and securing AI infrastructure.',
    price: 247,
    duration: '8 weeks',
    level: 'Advanced',
    features: [
      'Adversarial ML techniques',
      'LLM security testing',
      'AI infrastructure hardening',
      'Red team exercises',
      'Capstone project'
    ],
    status: 'waitlist',
    badge: 'Advanced'
  }
];
