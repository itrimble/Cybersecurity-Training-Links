/**
 * Technical Concepts Data
 * Core cybersecurity concepts and frameworks
 */

export interface Stage {
  name: string;
  details?: string;
  description?: string;
}

export interface OSILayer {
  number: number;
  name: string;
  examples: string;
  attacks: string;
}

export interface Principle {
  name: string;
  description: string;
  examples?: string;
}

export interface Component {
  name: string;
  description: string;
}

export const incidentResponseLifecycle = {
  title: "Incident Response Lifecycle",
  description: "NIST framework for handling security incidents",
  stages: [
    {
      name: "1. Preparation",
      details: "Establish incident response capability, train team, acquire tools, develop procedures and playbooks"
    },
    {
      name: "2. Detection & Analysis",
      details: "Identify potential incidents, analyze alerts, determine scope and impact, document findings"
    },
    {
      name: "3. Containment, Eradication & Recovery",
      details: "Contain the threat, remove malicious artifacts, restore systems, verify clean state"
    },
    {
      name: "4. Post-Incident Activity",
      details: "Lessons learned, documentation, process improvements, metrics reporting"
    }
  ]
};

export const osiModel = {
  title: "OSI Model",
  description: "Seven-layer networking reference model",
  layers: [
    { number: 7, name: "Application", examples: "HTTP, HTTPS, FTP, SMTP, DNS", attacks: "SQL injection, XSS, phishing" },
    { number: 6, name: "Presentation", examples: "SSL/TLS, JPEG, ASCII", attacks: "SSL stripping, format string attacks" },
    { number: 5, name: "Session", examples: "NetBIOS, RPC, PPTP", attacks: "Session hijacking, man-in-the-middle" },
    { number: 4, name: "Transport", examples: "TCP, UDP", attacks: "SYN flood, port scanning" },
    { number: 3, name: "Network", examples: "IP, ICMP, IGMP", attacks: "IP spoofing, routing attacks" },
    { number: 2, name: "Data Link", examples: "Ethernet, MAC, ARP", attacks: "ARP spoofing, MAC flooding" },
    { number: 1, name: "Physical", examples: "Cables, hubs, repeaters", attacks: "Physical access, wiretapping" }
  ]
};

export const cyberKillChain = {
  title: "Cyber Kill Chain",
  description: "Lockheed Martin framework for understanding attack phases",
  stages: [
    { name: "1. Reconnaissance", description: "Gathering information about the target (OSINT, scanning)" },
    { name: "2. Weaponization", description: "Creating malicious payload (exploit + malware)" },
    { name: "3. Delivery", description: "Transmitting the weapon to target (email, web, USB)" },
    { name: "4. Exploitation", description: "Triggering the vulnerability to execute code" },
    { name: "5. Installation", description: "Installing malware for persistent access" },
    { name: "6. Command & Control", description: "Establishing communication channel with attacker" },
    { name: "7. Actions on Objectives", description: "Achieving goals (data theft, destruction, ransomware)" }
  ]
};

export const mitreAttack = {
  title: "MITRE ATT&CK Framework",
  description: "Knowledge base of adversary tactics, techniques, and procedures",
  components: [
    { name: "Tactics", description: "The 'why' - adversary's tactical objectives (14 tactics)" },
    { name: "Techniques", description: "The 'how' - methods to achieve tactics (~200 techniques)" },
    { name: "Procedures", description: "Specific implementations by threat actors" }
  ],
  tactics: [
    "Reconnaissance", "Resource Development", "Initial Access", "Execution",
    "Persistence", "Privilege Escalation", "Defense Evasion", "Credential Access",
    "Discovery", "Lateral Movement", "Collection", "Command and Control",
    "Exfiltration", "Impact"
  ],
  url: "https://attack.mitre.org/"
};

export const zeroTrust = {
  title: "Zero Trust Architecture",
  description: "Security model based on 'never trust, always verify'",
  principles: [
    { name: "Verify Explicitly", description: "Always authenticate and authorize based on all available data points" },
    { name: "Least Privilege Access", description: "Limit user access with just-in-time and just-enough-access" },
    { name: "Assume Breach", description: "Minimize blast radius, segment access, verify end-to-end encryption" }
  ],
  pillars: [
    "Identity verification",
    "Device health validation",
    "Application security",
    "Data protection",
    "Infrastructure security",
    "Network segmentation",
    "Continuous monitoring"
  ]
};

export const ciaTriad = {
  title: "CIA Triad",
  description: "Foundational security model",
  components: [
    { name: "Confidentiality", description: "Ensuring data is accessible only to authorized parties", examples: "Encryption, access controls, classification" },
    { name: "Integrity", description: "Ensuring data is accurate and unaltered", examples: "Hashing, digital signatures, version control" },
    { name: "Availability", description: "Ensuring systems and data are accessible when needed", examples: "Redundancy, backups, disaster recovery" }
  ]
};

export const technicalConcepts = {
  incidentResponseLifecycle,
  osiModel,
  cyberKillChain,
  mitreAttack,
  zeroTrust,
  ciaTriad
};
