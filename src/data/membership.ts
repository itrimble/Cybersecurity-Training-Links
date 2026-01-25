/**
 * Membership and Course Data
 * Premium membership tiers and upcoming courses
 */

export interface MembershipTier {
  id: string;
  name: string;
  price: number;
  interval: string;
  description: string;
  features: string[];
  highlight: boolean;
  seats?: number;
}

export interface UpcomingCourse {
  title: string;
  status: string;
  category: string;
  careers: string[];
}

export interface AudienceSegment {
  label: string;
  description: string;
  recommendedPaths: string[];
}

export const membershipTiers: MembershipTier[] = [
  {
    id: 'student',
    name: 'Student',
    price: 19,
    interval: 'month',
    description: 'Perfect for students and career changers just getting started',
    features: [
      'Access to beginner courses',
      'Community Discord access',
      'Weekly study groups',
      'Career path roadmaps'
    ],
    highlight: false
  },
  {
    id: 'professional',
    name: 'Professional',
    price: 49,
    interval: 'month',
    description: 'For serious career builders ready to level up',
    features: [
      'All Student features',
      'All courses & certifications',
      'Hands-on lab environment',
      '1-on-1 mentorship sessions',
      'Interview prep coaching',
      'Job placement assistance'
    ],
    highlight: true
  },
  {
    id: 'team',
    name: 'Team',
    price: 199,
    interval: 'month',
    seats: 5,
    description: 'Train your team with enterprise-grade security education',
    features: [
      'All Professional features',
      'Team admin dashboard',
      'Progress tracking & reports',
      'Custom learning paths',
      'Priority support'
    ],
    highlight: false
  }
];

export const upcomingCourses: UpcomingCourse[] = [
  { title: 'Security+ Prep Course', status: 'coming-soon', category: 'certification', careers: ['securityAnalyst', 'socAnalyst'] },
  { title: 'SOC Analyst Bootcamp', status: 'coming-soon', category: 'career-path', careers: ['socAnalyst'] },
  { title: 'CISSP Prep Course', status: 'coming-soon', category: 'certification', careers: ['securityArchitect', 'ciso'] },
  { title: 'Ethical Hacking Fundamentals', status: 'coming-soon', category: 'career-path', careers: ['pentester', 'redTeam'] },
  { title: 'Incident Response Mastery', status: 'coming-soon', category: 'career-path', careers: ['incidentResponder', 'socAnalyst'] },
  { title: 'Cloud Security Essentials', status: 'coming-soon', category: 'technical', careers: ['cloudSecurityEngineer', 'securityArchitect'] },
  { title: 'Malware Analysis Deep Dive', status: 'coming-soon', category: 'technical', careers: ['malwareAnalyst', 'threatHunter'] }
];

export const audienceSegments: Record<string, AudienceSegment> = {
  beginner: {
    label: 'Career Changer',
    description: 'New to cybersecurity, looking to break into the field',
    recommendedPaths: ['securityAnalyst', 'socAnalyst', 'complianceAnalyst']
  },
  student: {
    label: 'Student',
    description: 'Currently studying IT, computer science, or cybersecurity',
    recommendedPaths: ['securityAnalyst', 'pentester', 'securityEngineer']
  },
  professional: {
    label: 'IT Professional',
    description: 'Experienced in IT, looking to specialize in security',
    recommendedPaths: ['securityEngineer', 'securityArchitect', 'cloudSecurityEngineer']
  },
  business: {
    label: 'Team/Business',
    description: 'Building a security team or upskilling existing staff',
    recommendedPaths: ['socAnalyst', 'securityEngineer', 'incidentResponder']
  }
};

export const curriculumTopics = [
  {
    icon: 'Monitor',
    title: 'Security Operations & SIEM',
    description: 'Master the tools used in Security Operations Centers',
    topics: ['SIEM platforms (Splunk, Elastic)', 'Log analysis', 'Alert triage', 'Threat detection', 'Incident documentation']
  },
  {
    icon: 'Target',
    title: 'Penetration Testing',
    description: 'Learn ethical hacking methodology and techniques',
    topics: ['Reconnaissance', 'Vulnerability scanning', 'Exploitation', 'Post-exploitation', 'Report writing']
  },
  {
    icon: 'Cloud',
    title: 'Cloud Security',
    description: 'Secure AWS, Azure, and GCP environments',
    topics: ['IAM', 'Network security', 'Container security', 'Serverless security', 'Compliance']
  },
  {
    icon: 'FileText',
    title: 'Governance, Risk & Compliance',
    description: 'Navigate regulatory requirements and risk management',
    topics: ['NIST Framework', 'ISO 27001', 'Risk assessment', 'Policy development', 'Audit preparation']
  },
  {
    icon: 'AlertTriangle',
    title: 'Incident Response & Forensics',
    description: 'Respond to and investigate security incidents',
    topics: ['IR lifecycle', 'Digital forensics', 'Malware analysis', 'Chain of custody', 'Threat hunting']
  },
  {
    icon: 'Code',
    title: 'Application Security',
    description: 'Build and test secure applications',
    topics: ['OWASP Top 10', 'Secure coding', 'Code review', 'SAST/DAST', 'DevSecOps']
  }
];
