/**
 * Training Resources Data
 * Platforms, courses, YouTube channels, and reading resources
 */

export interface TrainingResource {
  name: string;
  url: string;
  description: string;
  free: boolean;
  features: string[];
}

export interface Lab {
  name: string;
  url: string;
  type: string;
  description: string;
  features: string[];
  pricing: string;
  free: boolean;
}

export const trainingPlatforms: TrainingResource[] = [
  {
    name: 'TryHackMe',
    url: 'https://tryhackme.com/',
    description: 'Gamified cybersecurity training with guided learning paths. Perfect for beginners with browser-based labs.',
    free: true,
    features: ['Beginner-friendly', 'Guided paths', 'Browser-based labs']
  },
  {
    name: 'Hack The Box Academy',
    url: 'https://academy.hackthebox.com/',
    description: 'Structured learning with hands-on modules covering offensive and defensive security topics.',
    free: true,
    features: ['Structured curriculum', 'Tier system', 'Job-role paths']
  },
  {
    name: 'SANS Cyber Aces',
    url: 'https://www.sans.org/cyberaces/',
    description: 'Free foundational courses from SANS covering operating systems, networking, and security basics.',
    free: true,
    features: ['SANS quality', 'Foundational', 'Self-paced']
  },
  {
    name: 'Cybrary',
    url: 'https://www.cybrary.it/',
    description: 'Large library of cybersecurity courses covering various topics and certifications.',
    free: true,
    features: ['Large library', 'Career paths', 'Cert prep']
  },
  {
    name: 'Fortinet Training Institute',
    url: 'https://training.fortinet.com/',
    description: 'Free NSE certification training covering network security fundamentals to advanced topics.',
    free: true,
    features: ['Free certs', 'Self-paced', 'ISC2 CPE credits']
  },
  {
    name: 'CISA Learning',
    url: 'https://www.cisa.gov/cybersecurity-training-exercises',
    description: 'Free government-sponsored cybersecurity training covering various security domains.',
    free: true,
    features: ['Government resources', 'ICS security', 'Free']
  },
  {
    name: 'LetsDefend',
    url: 'https://letsdefend.io/',
    description: 'Blue team training platform with simulated SOC environment and real-world scenarios.',
    free: true,
    features: ['SOC simulation', 'Blue team', 'Alerts practice']
  },
  {
    name: 'PentesterLab',
    url: 'https://pentesterlab.com/',
    description: 'Hands-on web security exercises ranging from basic to advanced vulnerabilities.',
    free: true,
    features: ['Web security', 'Progressive difficulty', 'Practical']
  }
];

export const trainingCourses: TrainingResource[] = [
  {
    name: 'Google Cybersecurity Professional Certificate',
    url: 'https://www.coursera.org/professional-certificates/google-cybersecurity',
    description: 'Comprehensive entry-level program covering security fundamentals, tools, and job preparation.',
    free: true,
    features: ['8 courses', 'Entry-level', 'Audit free']
  },
  {
    name: 'IBM Cybersecurity Analyst',
    url: 'https://www.coursera.org/professional-certificates/ibm-cybersecurity-analyst',
    description: 'Professional certificate covering security analysis, incident response, and forensics.',
    free: true,
    features: ['Professional cert', 'Practical labs', 'Audit free']
  },
  {
    name: 'ISC2 Certified in Cybersecurity (CC)',
    url: 'https://www.isc2.org/Certifications/CC',
    description: 'Free entry-level certification training from ISC2 with self-paced online course.',
    free: true,
    features: ['Free training', 'Free exam (limited)', 'Entry cert']
  },
  {
    name: 'FRSecure CISSP Mentor Program',
    url: 'https://frsecure.com/cissp-mentor-program/',
    description: 'Free weekly CISSP study group with expert mentors and structured curriculum.',
    free: true,
    features: ['Free mentorship', 'Weekly sessions', 'CISSP prep']
  },
  {
    name: 'Professor Messer Security+',
    url: 'https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/sy0-701-comptia-security-plus-course/',
    description: 'Complete free video course for CompTIA Security+ certification preparation.',
    free: true,
    features: ['Free videos', 'Complete course', 'Exam prep']
  },
  {
    name: 'PortSwigger Web Security Academy',
    url: 'https://portswigger.net/web-security',
    description: 'Comprehensive web security training with hands-on labs from the creators of Burp Suite.',
    free: true,
    features: ['Web security', 'Free labs', 'Industry standard']
  },
  {
    name: 'Splunk Free Training',
    url: 'https://www.splunk.com/en_us/training/free-courses.html',
    description: 'Free Splunk fundamentals training and certification preparation.',
    free: true,
    features: ['SIEM training', 'Free cert path', 'Vendor training']
  },
  {
    name: 'SamsClass.info',
    url: 'https://samsclass.info/',
    description: 'Free college-level security courses including hands-on projects and CTF challenges.',
    free: true,
    features: ['College courses', 'Projects', 'CTF challenges']
  }
];

export const youtubeChannels: TrainingResource[] = [
  {
    name: 'NetworkChuck',
    url: 'https://www.youtube.com/@NetworkChuck',
    description: 'Engaging cybersecurity and IT tutorials covering networking, hacking, and certifications.',
    free: true,
    features: ['Beginner-friendly', 'Entertaining', 'Practical']
  },
  {
    name: 'John Hammond',
    url: 'https://www.youtube.com/@_JohnHammond',
    description: 'CTF walkthroughs, malware analysis, and security research content.',
    free: true,
    features: ['CTF content', 'Malware analysis', 'Research']
  },
  {
    name: 'The Cyber Mentor',
    url: 'https://www.youtube.com/@TCMSecurityAcademy',
    description: 'Penetration testing tutorials and ethical hacking content from TCM Security.',
    free: true,
    features: ['Pentesting', 'Practical', 'Career advice']
  },
  {
    name: 'IppSec',
    url: 'https://www.youtube.com/@ippsec',
    description: 'Detailed Hack The Box machine walkthroughs and penetration testing techniques.',
    free: true,
    features: ['HTB walkthroughs', 'In-depth', 'Technical']
  },
  {
    name: 'LiveOverflow',
    url: 'https://www.youtube.com/@LiveOverflow',
    description: 'Deep technical content on hacking, CTFs, and security research.',
    free: true,
    features: ['Technical', 'CTF', 'Research']
  },
  {
    name: '13Cubed',
    url: 'https://www.youtube.com/@13Cubed',
    description: 'Digital forensics and incident response tutorials and tool demonstrations.',
    free: true,
    features: ['DFIR', 'Forensics tools', 'Tutorials']
  },
  {
    name: 'David Bombal',
    url: 'https://www.youtube.com/@davidbombal',
    description: 'Networking and cybersecurity content with expert interviews and tutorials.',
    free: true,
    features: ['Networking', 'Interviews', 'Cert prep']
  },
  {
    name: 'STOK',
    url: 'https://www.youtube.com/@STOKfredrik',
    description: 'Bug bounty hunting content, methodology, and career advice.',
    free: true,
    features: ['Bug bounty', 'Methodology', 'Career']
  }
];

export const readingResources: TrainingResource[] = [
  {
    name: 'OWASP Web Security Testing Guide',
    url: 'https://owasp.org/www-project-web-security-testing-guide/',
    description: 'Comprehensive guide to web application security testing methodology.',
    free: true,
    features: ['Web security', 'Methodology', 'Reference']
  },
  {
    name: 'NIST Cybersecurity Framework',
    url: 'https://www.nist.gov/cyberframework',
    description: 'Industry-standard framework for managing cybersecurity risk.',
    free: true,
    features: ['Framework', 'Risk management', 'Industry standard']
  },
  {
    name: 'MITRE ATT&CK',
    url: 'https://attack.mitre.org/',
    description: 'Knowledge base of adversary tactics, techniques, and procedures.',
    free: true,
    features: ['Threat intelligence', 'TTPs', 'Reference']
  },
  {
    name: 'HackTricks',
    url: 'https://book.hacktricks.xyz/',
    description: 'Comprehensive hacking techniques and methodology reference.',
    free: true,
    features: ['Pentesting', 'Cheatsheets', 'Comprehensive']
  },
  {
    name: 'PayloadsAllTheThings',
    url: 'https://github.com/swisskyrepo/PayloadsAllTheThings',
    description: 'Collection of useful payloads and bypasses for web application security.',
    free: true,
    features: ['Payloads', 'Cheatsheets', 'GitHub']
  },
  {
    name: 'The Hacker Recipes',
    url: 'https://www.thehacker.recipes/',
    description: 'Technical guides for Active Directory attacks and penetration testing.',
    free: true,
    features: ['AD attacks', 'Technical', 'Practical']
  }
];

export const labs: Lab[] = [
  {
    name: 'TryHackMe',
    url: 'https://tryhackme.com/',
    type: 'Learning Platform',
    description: 'Beginner-friendly platform with guided rooms and learning paths. Great for starting your journey.',
    features: ['Guided learning', 'Browser-based', 'Learning paths', 'Certificates'],
    pricing: 'Free tier available',
    free: true
  },
  {
    name: 'Hack The Box',
    url: 'https://www.hackthebox.com/',
    type: 'Practice Labs',
    description: 'Industry-standard platform for practicing penetration testing on vulnerable machines.',
    features: ['Active machines', 'Retired machines', 'Pro Labs', 'Challenges'],
    pricing: 'Free tier available',
    free: true
  },
  {
    name: 'PentesterLab',
    url: 'https://pentesterlab.com/',
    type: 'Web Security',
    description: 'Focused web application security exercises from basic to advanced.',
    features: ['Web vulns', 'Progressive', 'Badges', 'Exercises'],
    pricing: 'Free exercises available',
    free: true
  },
  {
    name: 'PortSwigger Web Security Academy',
    url: 'https://portswigger.net/web-security',
    type: 'Web Security',
    description: 'Free, comprehensive web security training from the creators of Burp Suite.',
    features: ['Interactive labs', 'All OWASP Top 10', 'Free', 'Practitioner cert'],
    pricing: 'Free',
    free: true
  },
  {
    name: 'Blue Team Labs Online',
    url: 'https://blueteamlabs.online/',
    type: 'Blue Team',
    description: 'Defensive security challenges focused on SOC analysis and incident response.',
    features: ['SOC challenges', 'DFIR labs', 'Investigations', 'Certificates'],
    pricing: 'Free tier available',
    free: true
  },
  {
    name: 'CyberDefenders',
    url: 'https://cyberdefenders.org/',
    type: 'Blue Team / DFIR',
    description: 'Blue team focused platform with forensics and incident response challenges.',
    features: ['DFIR challenges', 'Real scenarios', 'Community', 'Free'],
    pricing: 'Free',
    free: true
  },
  {
    name: 'LetsDefend',
    url: 'https://letsdefend.io/',
    type: 'SOC Simulation',
    description: 'Simulated SOC environment with real-world alert triage and investigation.',
    features: ['SOC simulation', 'Alert triage', 'Learning paths', 'Challenges'],
    pricing: 'Free tier available',
    free: true
  },
  {
    name: 'PicoCTF',
    url: 'https://picoctf.org/',
    type: 'CTF Platform',
    description: 'Beginner-friendly CTF platform from Carnegie Mellon with year-round challenges.',
    features: ['Beginner CTF', 'Year-round', 'Educational', 'Free'],
    pricing: 'Free',
    free: true
  },
  {
    name: 'OverTheWire',
    url: 'https://overthewire.org/wargames/',
    type: 'Wargames',
    description: 'Classic wargames for learning security concepts from basic Linux to advanced topics.',
    features: ['Wargames', 'Progressive', 'SSH-based', 'Classic'],
    pricing: 'Free',
    free: true
  },
  {
    name: 'VulnHub',
    url: 'https://www.vulnhub.com/',
    type: 'Vulnerable VMs',
    description: 'Downloadable vulnerable virtual machines for offline practice.',
    features: ['Offline practice', 'Various difficulty', 'Community', 'Free'],
    pricing: 'Free',
    free: true
  },
  {
    name: 'DVWA (Damn Vulnerable Web Application)',
    url: 'https://github.com/digininja/DVWA',
    type: 'Web Security Lab',
    description: 'Intentionally vulnerable web application for practicing web security testing.',
    features: ['Self-hosted', 'Web vulns', 'Adjustable difficulty', 'Educational'],
    pricing: 'Free',
    free: true
  },
  {
    name: 'Offensive Security Proving Grounds',
    url: 'https://www.offsec.com/labs/',
    type: 'Practice Labs',
    description: 'Practice environment for OSCP preparation with real-world vulnerable machines.',
    features: ['OSCP prep', 'Real machines', 'Practice', 'Play tier free'],
    pricing: 'Play tier free',
    free: true
  },
  {
    name: 'RangeForce',
    url: 'https://www.rangeforce.com/',
    type: 'Cyber Range',
    description: 'Enterprise-grade cyber range with hands-on security training modules.',
    features: ['Enterprise', 'Modules', 'Team training', 'Community edition'],
    pricing: 'Community edition available',
    free: true
  }
];
