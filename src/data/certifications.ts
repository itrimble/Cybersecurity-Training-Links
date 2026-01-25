/**
 * Certifications Data
 * Cybersecurity certifications organized by experience level
 */

export interface Certification {
  name: string;
  org: string;
  url: string;
  tags: string[];
}

export interface CertificationLevels {
  entry: Certification[];
  intermediate: Certification[];
  advanced: Certification[];
}

export const certifications: CertificationLevels = {
  entry: [
    {
      name: 'CompTIA Security+',
      org: 'CompTIA',
      url: 'https://www.comptia.org/certifications/security',
      tags: ['Foundational', 'Vendor-Neutral', 'DoD 8570']
    },
    {
      name: 'CompTIA Network+',
      org: 'CompTIA',
      url: 'https://www.comptia.org/certifications/network',
      tags: ['Networking', 'Foundational']
    },
    {
      name: 'eJPT (eLearnSecurity Junior Penetration Tester)',
      org: 'INE Security',
      url: 'https://security.ine.com/certifications/ejpt-certification/',
      tags: ['Penetration Testing', 'Hands-on', 'Entry-level']
    },
    {
      name: 'Google Cybersecurity Certificate',
      org: 'Google',
      url: 'https://www.coursera.org/professional-certificates/google-cybersecurity',
      tags: ['Free (Audit)', 'Foundational', 'Self-paced']
    },
    {
      name: 'CC (Certified in Cybersecurity)',
      org: 'ISC2',
      url: 'https://www.isc2.org/Certifications/CC',
      tags: ['Free Training', 'Entry-level', 'Foundational']
    },
    {
      name: 'Splunk Core Certified User',
      org: 'Splunk',
      url: 'https://www.splunk.com/en_us/training/certification-track/splunk-core-certified-user.html',
      tags: ['SIEM', 'Free Training', 'Vendor-specific']
    },
    {
      name: 'BTL1 (Blue Team Level 1)',
      org: 'Security Blue Team',
      url: 'https://www.securityblue.team/certifications/blue-team-level-1',
      tags: ['Blue Team', 'Hands-on', 'SOC']
    }
  ],
  intermediate: [
    {
      name: 'CompTIA CySA+',
      org: 'CompTIA',
      url: 'https://www.comptia.org/certifications/cybersecurity-analyst',
      tags: ['Security Analyst', 'DoD 8570']
    },
    {
      name: 'CompTIA PenTest+',
      org: 'CompTIA',
      url: 'https://www.comptia.org/certifications/pentest',
      tags: ['Penetration Testing', 'DoD 8570']
    },
    {
      name: 'CEH (Certified Ethical Hacker)',
      org: 'EC-Council',
      url: 'https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/',
      tags: ['Ethical Hacking', 'DoD 8570']
    },
    {
      name: 'PNPT (Practical Network Penetration Tester)',
      org: 'TCM Security',
      url: 'https://certifications.tcm-sec.com/pnpt/',
      tags: ['Penetration Testing', 'Hands-on', 'Practical']
    },
    {
      name: 'GSEC (GIAC Security Essentials)',
      org: 'GIAC',
      url: 'https://www.giac.org/certification/security-essentials-gsec',
      tags: ['SANS', 'Comprehensive', 'DoD 8570']
    },
    {
      name: 'GCIH (GIAC Certified Incident Handler)',
      org: 'GIAC',
      url: 'https://www.giac.org/certification/certified-incident-handler-gcih',
      tags: ['Incident Response', 'SANS']
    },
    {
      name: 'AWS Security Specialty',
      org: 'AWS',
      url: 'https://aws.amazon.com/certification/certified-security-specialty/',
      tags: ['Cloud', 'AWS', 'Specialized']
    },
    {
      name: 'Azure Security Engineer (AZ-500)',
      org: 'Microsoft',
      url: 'https://learn.microsoft.com/en-us/credentials/certifications/azure-security-engineer/',
      tags: ['Cloud', 'Azure', 'Specialized']
    },
    {
      name: 'CISA (Certified Information Systems Auditor)',
      org: 'ISACA',
      url: 'https://www.isaca.org/credentialing/cisa',
      tags: ['Audit', 'GRC', 'DoD 8570']
    }
  ],
  advanced: [
    {
      name: 'CISSP (Certified Information Systems Security Professional)',
      org: 'ISC2',
      url: 'https://www.isc2.org/Certifications/CISSP',
      tags: ['Management', 'DoD 8570', 'Gold Standard']
    },
    {
      name: 'OSCP (Offensive Security Certified Professional)',
      org: 'Offensive Security',
      url: 'https://www.offsec.com/courses/pen-200/',
      tags: ['Penetration Testing', 'Hands-on', 'Industry Respected']
    },
    {
      name: 'OSEP (Offensive Security Experienced Penetration Tester)',
      org: 'Offensive Security',
      url: 'https://www.offsec.com/courses/pen-300/',
      tags: ['Advanced Pentesting', 'Evasion']
    },
    {
      name: 'CISM (Certified Information Security Manager)',
      org: 'ISACA',
      url: 'https://www.isaca.org/credentialing/cism',
      tags: ['Management', 'DoD 8570']
    },
    {
      name: 'CCSP (Certified Cloud Security Professional)',
      org: 'ISC2',
      url: 'https://www.isc2.org/Certifications/CCSP',
      tags: ['Cloud Security', 'Advanced']
    },
    {
      name: 'GCFA (GIAC Certified Forensic Analyst)',
      org: 'GIAC',
      url: 'https://www.giac.org/certification/certified-forensic-analyst-gcfa',
      tags: ['Forensics', 'DFIR', 'SANS']
    },
    {
      name: 'GREM (GIAC Reverse Engineering Malware)',
      org: 'GIAC',
      url: 'https://www.giac.org/certification/reverse-engineering-malware-grem',
      tags: ['Malware Analysis', 'SANS']
    },
    {
      name: 'CRTO (Certified Red Team Operator)',
      org: 'Zero Point Security',
      url: 'https://training.zeropointsecurity.co.uk/courses/red-team-ops',
      tags: ['Red Team', 'C2', 'Hands-on']
    },
    {
      name: 'OSWE (Offensive Security Web Expert)',
      org: 'Offensive Security',
      url: 'https://www.offsec.com/courses/web-300/',
      tags: ['Web Security', 'Advanced', 'Code Review']
    }
  ]
};

export const certificationLevelLabels = {
  entry: { label: 'Entry Level', description: 'Perfect for beginners starting their cybersecurity journey' },
  intermediate: { label: 'Intermediate', description: 'For professionals with 1-3 years of experience' },
  advanced: { label: 'Advanced', description: 'For senior professionals and specialists' }
};
