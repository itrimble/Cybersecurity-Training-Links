/**
 * CyberPath - Cybersecurity Career Training Data
 * Comprehensive database of career paths, certifications, and training resources
 * Last Updated: January 2026
 */

const CyberPathData = {
    // ============================================
    // CAREER PATHS
    // ============================================
    careers: [
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
            description: 'Lead and manage an organization\'s entire security program, strategy, and team.',
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
            description: 'Conduct advanced adversary simulations to test an organization\'s detection and response capabilities.',
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
    ],

    // ============================================
    // CERTIFICATIONS
    // ============================================
    certifications: {
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
    },

    // ============================================
    // FREE TRAINING RESOURCES
    // ============================================
    training: {
        platforms: [
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
        ],
        courses: [
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
        ],
        youtube: [
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
                name: 'STÖK',
                url: 'https://www.youtube.com/@STOKfredrik',
                description: 'Bug bounty hunting content, methodology, and career advice.',
                free: true,
                features: ['Bug bounty', 'Methodology', 'Career']
            }
        ],
        reading: [
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
        ]
    },

    // ============================================
    // HANDS-ON LABS
    // ============================================
    labs: [
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
        },
        {
            name: 'Immersive Labs',
            url: 'https://www.immersivelabs.com/',
            type: 'Enterprise Training',
            description: 'Enterprise cybersecurity training platform with hands-on labs.',
            features: ['Enterprise', 'Role-based', 'Assessments', 'Community access'],
            pricing: 'Some free content',
            free: false
        }
    ],

    // ============================================
    // ADDITIONAL RESOURCES
    // ============================================
    resources: {
        communities: [
            { name: 'Reddit r/cybersecurity', url: 'https://www.reddit.com/r/cybersecurity/' },
            { name: 'Reddit r/netsec', url: 'https://www.reddit.com/r/netsec/' },
            { name: 'Reddit r/AskNetsec', url: 'https://www.reddit.com/r/AskNetsec/' },
            { name: 'Hack The Box Discord', url: 'https://discord.gg/hackthebox' },
            { name: 'TryHackMe Discord', url: 'https://discord.gg/tryhackme' },
            { name: 'InfoSec Community Discord', url: 'https://discord.gg/infosec' },
            { name: 'Black Hills InfoSec Discord', url: 'https://discord.gg/bhis' },
            { name: 'OWASP Slack', url: 'https://owasp.org/slack/invite' }
        ],
        news: [
            { name: 'Krebs on Security', url: 'https://krebsonsecurity.com/' },
            { name: 'The Hacker News', url: 'https://thehackernews.com/' },
            { name: 'Bleeping Computer', url: 'https://www.bleepingcomputer.com/' },
            { name: 'Dark Reading', url: 'https://www.darkreading.com/' },
            { name: 'Threatpost', url: 'https://threatpost.com/' },
            { name: 'Security Week', url: 'https://www.securityweek.com/' },
            { name: 'SANS Internet Storm Center', url: 'https://isc.sans.edu/' },
            { name: 'Risky Business Podcast', url: 'https://risky.biz/' }
        ],
        tools: [
            { name: 'Kali Linux', url: 'https://www.kali.org/' },
            { name: 'Burp Suite Community', url: 'https://portswigger.net/burp/communitydownload' },
            { name: 'Wireshark', url: 'https://www.wireshark.org/' },
            { name: 'Nmap', url: 'https://nmap.org/' },
            { name: 'Metasploit Framework', url: 'https://www.metasploit.com/' },
            { name: 'OWASP ZAP', url: 'https://www.zaproxy.org/' },
            { name: 'Ghidra', url: 'https://ghidra-sre.org/' },
            { name: 'Autopsy', url: 'https://www.autopsy.com/' }
        ],
        government: [
            { name: 'CISA Resources', url: 'https://www.cisa.gov/resources-tools' },
            { name: 'NIST Cybersecurity', url: 'https://www.nist.gov/cybersecurity' },
            { name: 'NICCS (National Initiative for Cybersecurity Careers)', url: 'https://niccs.cisa.gov/' },
            { name: 'CyberSeek Career Pathway', url: 'https://www.cyberseek.org/pathway.html' },
            { name: 'FBI Cyber Division', url: 'https://www.fbi.gov/investigate/cyber' },
            { name: 'NSA Cybersecurity', url: 'https://www.nsa.gov/Cybersecurity/' },
            { name: 'ENISA (EU)', url: 'https://www.enisa.europa.eu/' },
            { name: 'NCSC (UK)', url: 'https://www.ncsc.gov.uk/' }
        ]
    },

    // ============================================
    // CAREER QUIZ QUESTIONS
    // ============================================
    quizQuestions: [
        {
            id: 1,
            question: 'What type of work environment appeals to you most?',
            options: [
                { text: 'Fast-paced, responding to active threats and incidents', careers: ['security-analyst', 'incident-responder'] },
                { text: 'Methodical, finding vulnerabilities before attackers do', careers: ['penetration-tester', 'red-team', 'appsec-engineer'] },
                { text: 'Strategic, designing systems and policies', careers: ['security-architect', 'grc-analyst', 'ciso'] },
                { text: 'Research-focused, analyzing malware and threats', careers: ['malware-analyst', 'threat-intel'] }
            ]
        },
        {
            id: 2,
            question: 'How do you prefer to solve problems?',
            options: [
                { text: 'Breaking things apart to understand how they work', careers: ['penetration-tester', 'red-team', 'malware-analyst'] },
                { text: 'Building and implementing secure solutions', careers: ['security-engineer', 'cloud-security', 'appsec-engineer'] },
                { text: 'Investigating and piecing together clues', careers: ['security-analyst', 'incident-responder', 'threat-intel'] },
                { text: 'Creating frameworks and processes', careers: ['grc-analyst', 'security-architect', 'ciso'] }
            ]
        },
        {
            id: 3,
            question: 'What aspect of security interests you most?',
            options: [
                { text: 'Offensive security - hacking and exploitation', careers: ['penetration-tester', 'red-team'] },
                { text: 'Defensive security - protecting and monitoring', careers: ['security-analyst', 'security-engineer', 'incident-responder'] },
                { text: 'Cloud and application security', careers: ['cloud-security', 'appsec-engineer'] },
                { text: 'Governance, compliance, and risk management', careers: ['grc-analyst', 'security-architect', 'ciso'] }
            ]
        },
        {
            id: 4,
            question: 'How technical do you want your role to be?',
            options: [
                { text: 'Extremely technical - coding, reverse engineering, exploits', careers: ['malware-analyst', 'red-team', 'appsec-engineer'] },
                { text: 'Technical - hands-on with tools and systems', careers: ['penetration-tester', 'security-engineer', 'incident-responder', 'cloud-security'] },
                { text: 'Mix of technical and business/policy', careers: ['security-analyst', 'security-architect', 'threat-intel'] },
                { text: 'More strategic and management-focused', careers: ['grc-analyst', 'ciso'] }
            ]
        },
        {
            id: 5,
            question: 'What are your long-term career goals?',
            options: [
                { text: 'Become a top technical expert in my field', careers: ['red-team', 'malware-analyst', 'appsec-engineer'] },
                { text: 'Lead a security team or department', careers: ['ciso', 'security-architect'] },
                { text: 'Balance technical work with career growth', careers: ['security-engineer', 'penetration-tester', 'cloud-security'] },
                { text: 'Work in consulting or advisory roles', careers: ['grc-analyst', 'security-architect', 'incident-responder'] }
            ]
        }
    ]
};

// Make data available globally
window.CyberPathData = CyberPathData;
