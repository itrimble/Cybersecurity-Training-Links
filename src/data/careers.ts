/**
 * Career Paths Data
 * Comprehensive database of cybersecurity career paths
 */

export interface CareerResource {
  name: string;
  url: string;
}

export interface Career {
  id: string;
  title: string;
  icon: string;
  category: 'entry' | 'technical' | 'management' | 'specialized';
  level: string;
  salaryRange: string;
  description: string;
  skills: string[];
  certifications: string[];
  resources: CareerResource[];
  dailyTasks: string[];
  careerProgression: string[];
}

export const careers: Career[] = [
  {
    id: 'security-analyst',
    title: 'Security Analyst / SOC Analyst',
    icon: '🔍',
    category: 'entry',
    level: 'Entry to Mid',
    salaryRange: '$60,000 - $110,000',
    description: 'Monitor security systems, analyze threats, investigate incidents, and respond to security alerts in a Security Operations Center.',
    skills: [
      'SIEM tools (Splunk, QRadar, Elastic)',
      'Log analysis and correlation',
      'Incident triage and response',
      'Network traffic analysis',
      'Malware analysis basics',
      'Threat intelligence',
      'Security frameworks (MITRE ATT&CK)'
    ],
    certifications: ['Security+', 'CySA+', 'GSEC', 'Splunk Core Certified User', 'BTL1'],
    resources: [
      { name: 'TryHackMe SOC Level 1', url: 'https://tryhackme.com/path/outline/soclevel1' },
      { name: 'Blue Team Labs Online', url: 'https://blueteamlabs.online/' },
      { name: 'LetsDefend', url: 'https://letsdefend.io/' }
    ],
    dailyTasks: [
      'Monitor SIEM dashboards for security alerts',
      'Investigate and triage security incidents',
      'Document incident findings and create reports',
      'Update detection rules and signatures',
      'Collaborate with IT teams on remediation'
    ],
    careerProgression: ['Junior SOC Analyst', 'SOC Analyst', 'Senior SOC Analyst', 'SOC Team Lead', 'Security Operations Manager']
  },
  {
    id: 'penetration-tester',
    title: 'Penetration Tester / Ethical Hacker',
    icon: '🎯',
    category: 'technical',
    level: 'Mid to Senior',
    salaryRange: '$80,000 - $150,000',
    description: 'Simulate cyber attacks to identify vulnerabilities in systems, networks, and applications before malicious hackers can exploit them.',
    skills: [
      'Network penetration testing',
      'Web application security testing',
      'Exploit development',
      'Social engineering',
      'Scripting (Python, Bash)',
      'Vulnerability assessment',
      'Report writing'
    ],
    certifications: ['OSCP', 'PNPT', 'CEH', 'PenTest+', 'GPEN', 'eJPT', 'OSWE'],
    resources: [
      { name: 'Hack The Box', url: 'https://www.hackthebox.com/' },
      { name: 'TryHackMe', url: 'https://tryhackme.com/' },
      { name: 'PortSwigger Web Security Academy', url: 'https://portswigger.net/web-security' }
    ],
    dailyTasks: [
      'Conduct penetration tests on client systems',
      'Research and develop new attack techniques',
      'Write detailed technical reports',
      'Present findings to stakeholders',
      'Stay current with latest vulnerabilities'
    ],
    careerProgression: ['Junior Pentester', 'Penetration Tester', 'Senior Pentester', 'Red Team Lead', 'Offensive Security Director']
  },
  {
    id: 'security-engineer',
    title: 'Security Engineer',
    icon: '⚙️',
    category: 'technical',
    level: 'Mid to Senior',
    salaryRange: '$90,000 - $160,000',
    description: 'Design, implement, and maintain security solutions to protect organizational infrastructure, applications, and data.',
    skills: [
      'Network security architecture',
      'Firewall and IDS/IPS configuration',
      'Cloud security (AWS, Azure, GCP)',
      'Infrastructure as Code',
      'Automation and scripting',
      'Security tool deployment',
      'Incident response'
    ],
    certifications: ['Security+', 'CISSP', 'AWS Security Specialty', 'Azure Security Engineer', 'CCSP'],
    resources: [
      { name: 'AWS Security Learning Path', url: 'https://aws.amazon.com/training/learn-about/security/' },
      { name: 'Azure Security Documentation', url: 'https://learn.microsoft.com/en-us/azure/security/' },
      { name: 'SANS SEC401', url: 'https://www.sans.org/cyber-security-courses/security-essentials-network-endpoint-cloud/' }
    ],
    dailyTasks: [
      'Deploy and configure security tools',
      'Respond to and investigate security incidents',
      'Perform security assessments and audits',
      'Automate security processes',
      'Collaborate with development teams on secure design'
    ],
    careerProgression: ['Junior Security Engineer', 'Security Engineer', 'Senior Security Engineer', 'Staff Security Engineer', 'Principal Security Engineer']
  },
  {
    id: 'incident-responder',
    title: 'Incident Responder / DFIR',
    icon: '🚨',
    category: 'technical',
    level: 'Mid to Senior',
    salaryRange: '$85,000 - $145,000',
    description: 'Investigate and respond to security breaches, perform digital forensics, and help organizations recover from cyber incidents.',
    skills: [
      'Digital forensics (disk, memory, network)',
      'Malware analysis',
      'Incident handling procedures',
      'Chain of custody',
      'Threat hunting',
      'Log analysis',
      'Reverse engineering basics'
    ],
    certifications: ['GCIH', 'GCFA', 'GNFA', 'CHFI', 'ECIH', 'FOR508'],
    resources: [
      { name: 'SANS DFIR Resources', url: 'https://www.sans.org/digital-forensics-incident-response/' },
      { name: 'CyberDefenders', url: 'https://cyberdefenders.org/' },
      { name: 'Malware Traffic Analysis', url: 'https://www.malware-traffic-analysis.net/' }
    ],
    dailyTasks: [
      'Respond to active security incidents',
      'Conduct forensic investigations',
      'Analyze malware samples',
      'Create incident reports and timelines',
      'Develop and improve IR playbooks'
    ],
    careerProgression: ['Incident Responder', 'Senior IR Analyst', 'DFIR Lead', 'IR Manager', 'CIRT Director']
  },
  {
    id: 'security-architect',
    title: 'Security Architect',
    icon: '🏛️',
    category: 'management',
    level: 'Senior',
    salaryRange: '$130,000 - $200,000',
    description: 'Design enterprise security architecture, create security standards, and guide organizations in implementing comprehensive security strategies.',
    skills: [
      'Enterprise security architecture',
      'Risk assessment and management',
      'Security frameworks (NIST, ISO 27001)',
      'Cloud architecture',
      'Zero trust architecture',
      'Business continuity planning',
      'Vendor management'
    ],
    certifications: ['CISSP', 'SABSA', 'TOGAF', 'CISM', 'CCSP', 'AWS Solutions Architect'],
    resources: [
      { name: 'NIST Cybersecurity Framework', url: 'https://www.nist.gov/cyberframework' },
      { name: 'SABSA Institute', url: 'https://sabsa.org/' },
      { name: 'Cloud Security Alliance', url: 'https://cloudsecurityalliance.org/' }
    ],
    dailyTasks: [
      'Design security architecture for new projects',
      'Review and approve security designs',
      'Create security standards and guidelines',
      'Evaluate security products and vendors',
      'Advise leadership on security strategy'
    ],
    careerProgression: ['Security Engineer', 'Senior Security Engineer', 'Security Architect', 'Principal Architect', 'Chief Architect']
  },
  {
    id: 'grc-analyst',
    title: 'GRC Analyst / Compliance Specialist',
    icon: '📋',
    category: 'management',
    level: 'Entry to Mid',
    salaryRange: '$65,000 - $120,000',
    description: 'Ensure organizations meet regulatory requirements, manage risk assessments, and develop security policies and procedures.',
    skills: [
      'Regulatory compliance (GDPR, HIPAA, PCI-DSS, SOX)',
      'Risk assessment methodologies',
      'Policy development',
      'Audit preparation',
      'Security frameworks (NIST, ISO 27001, SOC 2)',
      'Vendor risk management',
      'Documentation'
    ],
    certifications: ['CISA', 'CISM', 'CRISC', 'CGEIT', 'Security+', 'ISO 27001 Lead Auditor'],
    resources: [
      { name: 'ISACA Resources', url: 'https://www.isaca.org/resources' },
      { name: 'NIST Risk Management Framework', url: 'https://csrc.nist.gov/projects/risk-management' },
      { name: 'PCI Security Standards', url: 'https://www.pcisecuritystandards.org/' }
    ],
    dailyTasks: [
      'Conduct risk assessments',
      'Prepare for and support audits',
      'Develop and update security policies',
      'Monitor regulatory changes',
      'Manage vendor security assessments'
    ],
    careerProgression: ['GRC Analyst', 'Senior GRC Analyst', 'GRC Manager', 'Director of Compliance', 'Chief Compliance Officer']
  },
  {
    id: 'cloud-security',
    title: 'Cloud Security Engineer',
    icon: '☁️',
    category: 'specialized',
    level: 'Mid to Senior',
    salaryRange: '$100,000 - $170,000',
    description: 'Secure cloud infrastructure and applications across AWS, Azure, GCP, and hybrid environments.',
    skills: [
      'AWS, Azure, GCP security services',
      'Container security (Kubernetes, Docker)',
      'Infrastructure as Code (Terraform, CloudFormation)',
      'Cloud IAM and access management',
      'Cloud compliance and governance',
      'DevSecOps practices',
      'Cloud networking'
    ],
    certifications: ['AWS Security Specialty', 'Azure Security Engineer (AZ-500)', 'GCP Security Engineer', 'CCSP', 'CKS'],
    resources: [
      { name: 'AWS Security Documentation', url: 'https://docs.aws.amazon.com/security/' },
      { name: 'Azure Security Center', url: 'https://azure.microsoft.com/en-us/products/defender-for-cloud/' },
      { name: 'GCP Security Best Practices', url: 'https://cloud.google.com/security/best-practices' }
    ],
    dailyTasks: [
      'Configure cloud security controls',
      'Monitor cloud security posture',
      'Implement IAM policies',
      'Review infrastructure as code for security',
      'Respond to cloud security incidents'
    ],
    careerProgression: ['Cloud Engineer', 'Cloud Security Engineer', 'Senior Cloud Security Engineer', 'Cloud Security Architect', 'Head of Cloud Security']
  },
  {
    id: 'appsec-engineer',
    title: 'Application Security Engineer',
    icon: '💻',
    category: 'specialized',
    level: 'Mid to Senior',
    salaryRange: '$95,000 - $165,000',
    description: 'Integrate security into the software development lifecycle, perform code reviews, and build secure applications.',
    skills: [
      'Secure coding practices',
      'SAST/DAST tools',
      'Code review',
      'OWASP Top 10',
      'API security',
      'DevSecOps',
      'Programming (Python, Java, JavaScript)',
      'Threat modeling'
    ],
    certifications: ['CSSLP', 'GWEB', 'OSWE', 'CASE', 'DevSecOps certifications'],
    resources: [
      { name: 'OWASP', url: 'https://owasp.org/' },
      { name: 'PortSwigger Web Security Academy', url: 'https://portswigger.net/web-security' },
      { name: 'Secure Code Warrior', url: 'https://www.securecodewarrior.com/' }
    ],
    dailyTasks: [
      'Review code for security vulnerabilities',
      'Integrate security tools into CI/CD pipelines',
      'Train developers on secure coding',
      'Perform threat modeling',
      'Manage vulnerability remediation'
    ],
    careerProgression: ['Developer', 'AppSec Engineer', 'Senior AppSec Engineer', 'AppSec Lead', 'Director of Application Security']
  },
  {
    id: 'threat-intel',
    title: 'Threat Intelligence Analyst',
    icon: '🕵️',
    category: 'specialized',
    level: 'Mid to Senior',
    salaryRange: '$80,000 - $140,000',
    description: 'Research and analyze cyber threats, track threat actors, and provide actionable intelligence to improve security posture.',
    skills: [
      'Threat landscape analysis',
      'OSINT techniques',
      'Malware analysis',
      'MITRE ATT&CK framework',
      'Intelligence report writing',
      'Dark web monitoring',
      'Indicator of Compromise (IOC) analysis'
    ],
    certifications: ['GIAC CTI (GCTI)', 'CTIA', 'FOR578', 'Security+', 'CySA+'],
    resources: [
      { name: 'MITRE ATT&CK', url: 'https://attack.mitre.org/' },
      { name: 'AlienVault OTX', url: 'https://otx.alienvault.com/' },
      { name: 'VirusTotal', url: 'https://www.virustotal.com/' }
    ],
    dailyTasks: [
      'Monitor threat feeds and intelligence sources',
      'Research and track threat actors',
      'Create intelligence reports',
      'Share IOCs with security teams',
      'Brief stakeholders on emerging threats'
    ],
    careerProgression: ['Junior Threat Analyst', 'Threat Intelligence Analyst', 'Senior Threat Analyst', 'Threat Intelligence Lead', 'Director of Threat Intelligence']
  },
  {
    id: 'ciso',
    title: 'CISO / Security Manager',
    icon: '👔',
    category: 'management',
    level: 'Executive',
    salaryRange: '$150,000 - $400,000+',
    description: "Lead and manage an organization's entire security program, strategy, and team.",
    skills: [
      'Strategic planning',
      'Budget management',
      'Team leadership',
      'Executive communication',
      'Risk management',
      'Regulatory compliance',
      'Business acumen',
      'Vendor management'
    ],
    certifications: ['CISSP', 'CISM', 'CCISO', 'MBA', 'CGEIT'],
    resources: [
      { name: 'CISO Executive Network', url: 'https://www.cisoexecnetwork.com/' },
      { name: 'SANS Security Leadership', url: 'https://www.sans.org/cyber-security-courses/security-leadership-essentials-managers/' },
      { name: 'ISACA CISM', url: 'https://www.isaca.org/credentialing/cism' }
    ],
    dailyTasks: [
      'Set security strategy and vision',
      'Present to board and executives',
      'Manage security budget',
      'Lead and develop security teams',
      'Oversee incident response',
      'Ensure regulatory compliance'
    ],
    careerProgression: ['Security Manager', 'Director of Security', 'VP of Security', 'CISO', 'Global CISO']
  },
  {
    id: 'red-team',
    title: 'Red Team Operator',
    icon: '🔴',
    category: 'specialized',
    level: 'Senior',
    salaryRange: '$110,000 - $180,000',
    description: "Conduct advanced adversary simulations to test an organization's detection and response capabilities.",
    skills: [
      'Advanced exploitation',
      'Custom tool development',
      'Evasion techniques',
      'Physical security testing',
      'Social engineering',
      'C2 frameworks',
      'Active Directory attacks',
      'OPSEC'
    ],
    certifications: ['OSCP', 'OSEP', 'CRTO', 'GXPN', 'CRTL'],
    resources: [
      { name: 'Red Team Village', url: 'https://redteamvillage.io/' },
      { name: 'SpecterOps Blog', url: 'https://posts.specterops.io/' },
      { name: 'HackTricks', url: 'https://book.hacktricks.xyz/' }
    ],
    dailyTasks: [
      'Plan and execute red team engagements',
      'Develop custom tools and implants',
      'Conduct covert operations',
      'Document attack paths',
      'Collaborate with blue team on improvements'
    ],
    careerProgression: ['Penetration Tester', 'Red Team Operator', 'Senior Red Team Operator', 'Red Team Lead', 'Adversary Simulation Director']
  },
  {
    id: 'malware-analyst',
    title: 'Malware Analyst / Reverse Engineer',
    icon: '🦠',
    category: 'specialized',
    level: 'Mid to Senior',
    salaryRange: '$90,000 - $160,000',
    description: 'Analyze malicious software to understand its behavior, capabilities, and origins.',
    skills: [
      'Static and dynamic malware analysis',
      'Reverse engineering (IDA Pro, Ghidra)',
      'Assembly language (x86, x64, ARM)',
      'Programming (Python, C/C++)',
      'Sandboxing and behavioral analysis',
      'Unpacking and deobfuscation',
      'Memory forensics'
    ],
    certifications: ['GREM', 'GCTI', 'FOR610', 'eCMAP'],
    resources: [
      { name: 'Malware Unicorn Workshops', url: 'https://malwareunicorn.org/' },
      { name: 'Ghidra', url: 'https://ghidra-sre.org/' },
      { name: 'ANY.RUN', url: 'https://any.run/' }
    ],
    dailyTasks: [
      'Analyze malware samples',
      'Write technical analysis reports',
      'Extract indicators of compromise',
      'Develop detection signatures',
      'Support incident response'
    ],
    careerProgression: ['Junior Malware Analyst', 'Malware Analyst', 'Senior Malware Analyst', 'Malware Research Lead', 'Principal Reverse Engineer']
  }
];

export const careerCategories = {
  entry: { label: 'Entry Level', color: 'text-green-400' },
  technical: { label: 'Technical', color: 'text-blue-400' },
  management: { label: 'Management', color: 'text-purple-400' },
  specialized: { label: 'Specialized', color: 'text-amber-400' }
};
