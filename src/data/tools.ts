/**
 * Tools by Role Data
 * Security tools organized by role/specialty
 */

export interface ToolCategory {
  name: string;
  tools: string[];
}

export interface RoleTools {
  title: string;
  categories: ToolCategory[];
}

export const toolsByRole: Record<string, RoleTools> = {
  dfir: {
    title: "DFIR Tools",
    categories: [
      {
        name: "SIEM",
        tools: ["Splunk", "McAfee Nitro", "Graylog", "QRadar", "Elastic SIEM"]
      },
      {
        name: "Forensics",
        tools: ["EnCase Forensics", "FTK (Forensic Toolkit)", "Volatility", "Rekall", "Autopsy", "Sleuth Kit"]
      },
      {
        name: "Memory Analysis",
        tools: ["Volatility", "Rekall", "WinDbg", "GDB"]
      },
      {
        name: "Disk Forensics",
        tools: ["FTK Imager", "dd", "Autopsy", "X-Ways Forensics"]
      },
      {
        name: "Network Forensics",
        tools: ["Wireshark", "NetworkMiner", "Zeek (Bro)", "tcpdump"]
      },
      {
        name: "Orchestration",
        tools: ["Cortex XSOAR (Demisto)", "Phantom", "Swimlane", "TheHive"]
      },
      {
        name: "Other",
        tools: ["analyzeMFT", "SANS SIFT Workstation", "REMnux", "Magnet AXIOM"]
      }
    ]
  },
  pentesting: {
    title: "Penetration Testing Tools",
    categories: [
      {
        name: "Operating Systems",
        tools: ["Kali Linux", "Parrot Security", "BlackArch", "Commando VM"]
      },
      {
        name: "Exploitation",
        tools: ["Metasploit Framework", "Cobalt Strike", "Empire", "Covenant"]
      },
      {
        name: "Web Testing",
        tools: ["Burp Suite", "OWASP ZAP", "Nikto", "SQLmap", "wfuzz"]
      },
      {
        name: "Network",
        tools: ["Nmap", "Masscan", "Responder", "Impacket", "CrackMapExec"]
      },
      {
        name: "Password Cracking",
        tools: ["John the Ripper", "Hashcat", "Hydra", "Medusa"]
      },
      {
        name: "Wireless",
        tools: ["Aircrack-ng", "Wifite", "Kismet", "Fluxion"]
      },
      {
        name: "Reconnaissance",
        tools: ["Shodan", "Censys", "theHarvester", "Maltego", "Recon-ng"]
      }
    ]
  },
  socAnalyst: {
    title: "SOC Analyst Tools",
    categories: [
      {
        name: "SIEM",
        tools: ["Splunk Enterprise", "Elastic Stack (ELK)", "Graylog", "IBM QRadar", "Microsoft Sentinel"]
      },
      {
        name: "Security Monitoring",
        tools: ["Security Onion", "Wazuh", "OSSEC", "Suricata", "Zeek"]
      },
      {
        name: "Threat Intelligence",
        tools: ["MISP", "AlienVault OTX", "ThreatConnect", "Anomali"]
      },
      {
        name: "Incident Management",
        tools: ["TheHive", "RTIR", "ServiceNow Security Operations"]
      },
      {
        name: "EDR",
        tools: ["CrowdStrike Falcon", "Carbon Black", "SentinelOne", "Microsoft Defender for Endpoint"]
      },
      {
        name: "Attack Simulation",
        tools: ["Atomic Red Team", "MITRE Caldera", "Infection Monkey"]
      }
    ]
  },
  incidentResponse: {
    title: "Incident Response Tools",
    categories: [
      {
        name: "Malware Analysis",
        tools: ["Joe Sandbox", "ANY.RUN", "Cuckoo Sandbox", "REMnux", "YARA"]
      },
      {
        name: "Threat Intelligence",
        tools: ["VirusTotal", "Hybrid Analysis", "MalwareBazaar", "URLhaus"]
      },
      {
        name: "Endpoint Collection",
        tools: ["GRR Rapid Response", "Velociraptor", "KAPE", "CyLR"]
      },
      {
        name: "Log Analysis",
        tools: ["Chainsaw", "Hayabusa", "LogParser", "Sysmon"]
      }
    ]
  },
  devSecOps: {
    title: "DevSecOps Tools",
    categories: [
      {
        name: "SAST",
        tools: ["SonarQube", "Checkmarx", "Veracode", "Semgrep", "CodeQL"]
      },
      {
        name: "DAST",
        tools: ["Burp Suite", "OWASP ZAP", "Nikto", "Nuclei"]
      },
      {
        name: "SCA",
        tools: ["Snyk", "Dependabot", "OWASP Dependency-Check", "WhiteSource"]
      },
      {
        name: "Container Security",
        tools: ["Aqua Security", "Prisma Cloud", "Trivy", "Anchore", "Falco"]
      },
      {
        name: "Secret Scanning",
        tools: ["GitGuardian", "TruffleHog", "git-secrets", "detect-secrets"]
      },
      {
        name: "IaC Security",
        tools: ["Checkov", "tfsec", "Terrascan", "KICS"]
      }
    ]
  },
  threatIntel: {
    title: "Threat Intelligence Tools",
    categories: [
      {
        name: "Platforms",
        tools: ["OpenCTI", "MISP", "ThreatConnect", "Recorded Future", "Mandiant Advantage"]
      },
      {
        name: "OSINT",
        tools: ["Maltego", "SpiderFoot", "Shodan", "Censys", "GreyNoise"]
      },
      {
        name: "Feeds",
        tools: ["AlienVault OTX", "IBM X-Force Exchange", "Abuse.ch", "PhishTank"]
      },
      {
        name: "Analysis",
        tools: ["YARA", "Sigma", "STIX/TAXII", "CybOX"]
      }
    ]
  }
};

export const essentialTools = [
  { name: 'Kali Linux', url: 'https://www.kali.org/' },
  { name: 'Burp Suite Community', url: 'https://portswigger.net/burp/communitydownload' },
  { name: 'Wireshark', url: 'https://www.wireshark.org/' },
  { name: 'Nmap', url: 'https://nmap.org/' },
  { name: 'Metasploit Framework', url: 'https://www.metasploit.com/' },
  { name: 'OWASP ZAP', url: 'https://www.zaproxy.org/' },
  { name: 'Ghidra', url: 'https://ghidra-sre.org/' },
  { name: 'Autopsy', url: 'https://www.autopsy.com/' }
];
