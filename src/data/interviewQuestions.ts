/**
 * Interview Questions Data
 * Comprehensive interview question database for cybersecurity roles
 */

export interface BehavioralQuestion {
  question: string;
  format: string;
  tips: string;
}

export interface InterviewQuestions {
  recruiter: string[];
  hiringManager: string[];
  culture: string[];
  compensation: string[];
  behavioral: BehavioralQuestion[];
  situational: string[];
  stress: string[];
  adaptability: string[];
  clientFocus: string[];
  roleSpecific: {
    securityEngineering: string[];
    dfir: string[];
    pentesting: string[];
    socAnalyst: string[];
    incidentResponse: string[];
    devSecOps: string[];
    cloudSecurity: string[];
  };
}

export const interviewQuestions: InterviewQuestions = {
  recruiter: [
    "What does the interview process look like?",
    "What key qualities are the hiring managers looking for?",
    "Will there be any technical assessments?",
    "Is this a backfill or a new role?",
    "How many rounds of interviews are there?",
    "What is the timeline for the hiring process?",
    "What is the team size and structure?",
    "Is this role remote, hybrid, or on-site?"
  ],
  hiringManager: [
    "What problems are you trying to solve with this hire?",
    "How will success be measured in this role?",
    "What are the 90-day goals for this position?",
    "What are the biggest challenges the team faces?",
    "How does the security team interact with other departments?",
    "What does your asset inventory look like?",
    "How do you handle vulnerability management?",
    "Do you have ransomware playbooks in place?",
    "What's the security team's perception within the organization?",
    "What security tools and technologies are currently in use?",
    "How is the security budget determined?",
    "What does the on-call rotation look like?",
    "How do you prioritize security initiatives?",
    "What's the biggest security win the team has had recently?",
    "How do you measure security program maturity?",
    "What compliance frameworks do you follow?",
    "How does the team handle security awareness training?",
    "What's the incident response process like?",
    "How often do you conduct penetration tests?",
    "What's the relationship between security and development teams?",
    "How do you stay current with emerging threats?",
    "What opportunities are there for professional development?",
    "What certifications does the company support?",
    "How is remote work handled for security roles?",
    "What's the team's approach to documentation?",
    "How do you handle security debt?",
    "What's the change management process?",
    "How are security decisions communicated to leadership?",
    "What metrics do you report to executives?",
    "Where do you see the security program in 2-3 years?"
  ],
  culture: [
    "How would you describe the company culture?",
    "What opportunities are there for growth and advancement?",
    "How does the company handle mistakes?",
    "What's the work-life balance like?",
    "How are decisions made on the team?",
    "What do you enjoy most about working here?",
    "How does the team celebrate successes?",
    "What's the most challenging aspect of working here?",
    "How does the company support diversity and inclusion?",
    "What's the typical career path for someone in this role?"
  ],
  compensation: [
    "What is the salary range for this position?",
    "Are RSUs or stock options part of the compensation?",
    "Is there a relocation package available?",
    "What does the annual bonus structure look like?",
    "What benefits are included (health, dental, vision)?",
    "What's the 401(k) matching policy?",
    "Is there education reimbursement available?",
    "What's the typical promotion timeline?",
    "Are there performance bonuses?",
    "What professional development budget is available?"
  ],
  behavioral: [
    {
      question: "Tell me about a time you dealt with a difficult person or situation.",
      format: "P.A.R. (Problem-Action-Resolution)",
      tips: "Focus on your actions and the positive outcome"
    },
    {
      question: "Describe your leadership style with an example.",
      format: "P.A.R.",
      tips: "Show how you motivate and guide others"
    },
    {
      question: "Tell me about a time you failed and what you learned.",
      format: "P.A.R.",
      tips: "Be honest, focus on the learning and growth"
    },
    {
      question: "Describe a goal you achieved and how you reached it.",
      format: "P.A.R.",
      tips: "Show planning and persistence"
    },
    {
      question: "How do you handle disagreements with coworkers?",
      format: "P.A.R.",
      tips: "Emphasize communication and finding common ground"
    },
    {
      question: "Tell me about working under a tight deadline.",
      format: "P.A.R.",
      tips: "Show prioritization and time management"
    },
    {
      question: "Describe a time you had to quickly learn new technology.",
      format: "P.A.R.",
      tips: "Demonstrate adaptability and learning ability"
    },
    {
      question: "How have you improved a security process?",
      format: "P.A.R.",
      tips: "Show initiative and measurable results"
    },
    {
      question: "Tell me about a time you had to explain technical concepts to non-technical stakeholders.",
      format: "P.A.R.",
      tips: "Show communication skills and patience"
    },
    {
      question: "Describe handling multiple priorities simultaneously.",
      format: "P.A.R.",
      tips: "Demonstrate organization and prioritization"
    },
    {
      question: "Tell me about a security incident you handled.",
      format: "P.A.R.",
      tips: "Walk through your methodology and decision-making"
    }
  ],
  situational: [
    "How would you handle a conflict between security requirements and business needs?",
    "What would you do if you discovered a critical vulnerability in production?",
    "How would you approach implementing a security awareness program?",
    "What steps would you take if an executive requested to bypass security controls?",
    "How would you investigate suspicious network traffic?",
    "What would be your first steps after discovering a data breach?",
    "How would you handle a user who repeatedly violates security policies?",
    "What would you do if you found malware on an executive's laptop?",
    "How would you prioritize multiple security alerts during an incident?",
    "What would you do if you disagreed with a security decision from leadership?"
  ],
  stress: [
    "How do you handle stressful situations?",
    "What do you do to prevent stress from escalating?",
    "Describe a high-pressure security incident you managed.",
    "How do you maintain focus during an active breach?",
    "What self-care practices help you manage work stress?",
    "How do you decompress after handling a major incident?"
  ],
  adaptability: [
    "How do you adjust to changes in priorities?",
    "Describe adapting to a colleague's different work style.",
    "How have you handled a major transition at work?",
    "How do you keep up with the constantly evolving cybersecurity landscape?",
    "Tell me about a time when a project scope changed significantly.",
    "How do you handle ambiguity in your work?"
  ],
  clientFocus: [
    "Describe a difficult customer interaction you handled.",
    "How do you build rapport with new clients or stakeholders?",
    "How have you handled scope changes requested by clients?",
    "How do you explain complex security concepts to non-technical people?",
    "How do you balance security requirements with user experience?",
    "Tell me about advocating for a security improvement to leadership.",
    "How do you handle pushback on security recommendations?",
    "Describe building trust with a skeptical stakeholder."
  ],
  roleSpecific: {
    securityEngineering: [
      "How do you approach endpoint and cloud device management?",
      "What SIEM tools have you used and how did you configure them?",
      "Describe implementing a DLP solution.",
      "How do you handle alert fatigue in a SOC environment?",
      "What's your threat hunting methodology?",
      "How do you measure security monitoring effectiveness?",
      "Describe your experience with security automation.",
      "How do you approach security architecture reviews?",
      "What's your process for evaluating security tools?",
      "How do you handle security in CI/CD pipelines?",
      "Describe implementing zero trust architecture.",
      "How do you approach cloud security posture management?"
    ],
    dfir: [
      "How do you identify persistence mechanisms on a compromised system?",
      "Describe your response to a supply chain attack (e.g., SolarWinds).",
      "How would you handle a Log4j-style vulnerability?",
      "What's your approach to cloud forensics?",
      "How do you maintain chain of custody during investigations?",
      "Describe your malware analysis methodology.",
      "How do you determine attack vectors in an investigation?",
      "What memory forensics techniques do you use?",
      "How do you approach incident containment decisions?"
    ],
    pentesting: [
      "How do you define scope for a penetration test?",
      "Explain ARP spoofing and how to detect it.",
      "What are effective defenses against brute force attacks?",
      "Describe the difference between white, black, and gray box testing.",
      "How do you approach web application security testing?",
      "What's your API security testing methodology?",
      "Describe conducting a social engineering assessment.",
      "How do you prioritize vulnerabilities in your reports?",
      "What's your approach to Active Directory attacks?",
      "How do you test for privilege escalation?",
      "Describe your reconnaissance methodology.",
      "How do you handle scope creep during engagements?",
      "What do you do when you find a critical vulnerability mid-test?",
      "How do you write effective penetration test reports?"
    ],
    socAnalyst: [
      "What SIEM tools have you used (Splunk, ELK, QRadar)?",
      "Explain the difference between IDS and IPS.",
      "What's the difference between encryption and hashing?",
      "Define risk, vulnerability, and threat.",
      "Explain Blue Team vs Red Team roles.",
      "How do you prevent data leakage?",
      "What's your policy on admin rights for users?",
      "How would you harden a web server?",
      "What constitutes a weak security policy?",
      "Explain MAC spoofing and detection methods.",
      "What recent cyber attacks have caught your attention?",
      "How do you use the MITRE ATT&CK framework?",
      "Explain the CIA Triad with examples.",
      "What is Zero Trust and how would you implement it?",
      "What is a CMDB and why is it important?",
      "How do you establish a monitoring baseline?",
      "Describe your alert triage process.",
      "How do you handle false positives?",
      "What log sources are most valuable for detection?",
      "How do you correlate events across multiple sources?",
      "Describe investigating a phishing incident.",
      "How do you document and escalate security incidents?",
      "What's your approach to threat hunting?",
      "How do you stay current with emerging threats?",
      "Describe creating a detection rule or signature.",
      "How do you measure SOC effectiveness?",
      "What metrics do you track in a SOC?",
      "How do you handle analyst burnout?",
      "Describe your shift handoff process.",
      "How do you prioritize alerts during high-volume periods?",
      "What's your experience with SOAR platforms?",
      "How do you approach tuning detection rules?",
      "Describe investigating lateral movement.",
      "How do you identify command and control traffic?",
      "What indicators suggest ransomware activity?",
      "How do you approach user behavior analytics?",
      "Describe your experience with EDR tools.",
      "How do you handle incidents outside business hours?"
    ],
    incidentResponse: [
      "How do you create detection signatures for new threats?",
      "Describe your IOC lookup and validation process.",
      "What's your approach to malware detonation and analysis?",
      "How would you investigate bash history tampering?",
      "How do you analyze a surge in security alerts?",
      "What's your process for determining false positives?",
      "Describe your incident containment decision process.",
      "How do you prioritize and communicate during incidents?"
    ],
    devSecOps: [
      "How do you integrate security into the SDLC?",
      "What security testing tools do you use in CI/CD?",
      "Explain 'shifting left' in security.",
      "Describe your CI/CD pipeline security experience.",
      "How do you approach container security?",
      "What's your secure code review process?",
      "How do you automate security testing?",
      "How do you approach API security?",
      "How do you handle vulnerabilities in dependencies?",
      "What's your approach to Infrastructure as Code security?",
      "How do you balance security with development velocity?",
      "Describe implementing secrets management."
    ],
    cloudSecurity: [
      "Describe your experience with AWS/Azure/GCP security.",
      "How do you approach cloud security architecture?",
      "What's your experience with cloud IAM?",
      "How do you manage cloud security posture?",
      "Describe securing containerized workloads.",
      "What's your approach to serverless security?",
      "How do you handle multi-cloud security?",
      "Describe ensuring cloud compliance.",
      "What's your cloud penetration testing experience?",
      "How do you monitor cloud environments for threats?",
      "Describe implementing cloud-native security tools.",
      "How do you approach cloud cost optimization for security?"
    ]
  }
};

export const interviewCategories = [
  { key: 'recruiter', label: 'Recruiter Questions', icon: 'Phone' },
  { key: 'hiringManager', label: 'Hiring Manager', icon: 'UserCheck' },
  { key: 'culture', label: 'Culture Fit', icon: 'Users' },
  { key: 'compensation', label: 'Compensation', icon: 'DollarSign' },
  { key: 'behavioral', label: 'Behavioral', icon: 'MessageSquare' },
  { key: 'situational', label: 'Situational', icon: 'HelpCircle' },
  { key: 'stress', label: 'Stress Management', icon: 'Activity' },
  { key: 'adaptability', label: 'Adaptability', icon: 'RefreshCw' },
  { key: 'clientFocus', label: 'Client Focus', icon: 'Heart' }
];

export const roleSpecificCategories = [
  { key: 'securityEngineering', label: 'Security Engineering' },
  { key: 'dfir', label: 'DFIR' },
  { key: 'pentesting', label: 'Penetration Testing' },
  { key: 'socAnalyst', label: 'SOC Analyst' },
  { key: 'incidentResponse', label: 'Incident Response' },
  { key: 'devSecOps', label: 'DevSecOps' },
  { key: 'cloudSecurity', label: 'Cloud Security' }
];
