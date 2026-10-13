// Cybersecurity Career Roadmap 2026
// Typst Document - Compile with: typst compile filename.typ

#set document(
  title: "Cybersecurity Career Roadmap 2026",
  author: "Remnant Security",
)

#set page(
  paper: "us-letter",
  margin: (x: 0.75in, y: 0.75in),
  fill: rgb("#0a1628"),
)

#set text(
  font: "Helvetica",
  size: 11pt,
  fill: rgb("#e2e8f0"),
)

#set heading(numbering: none)

#show heading.where(level: 1): it => {
  set text(fill: rgb("#00ffcc"), size: 22pt, weight: "bold")
  v(0.5em)
  it.body
  v(0.3em)
  line(length: 100%, stroke: 0.5pt + rgb("#1e3a5f"))
  v(0.5em)
}

#show heading.where(level: 2): it => {
  set text(fill: rgb("#f59e0b"), size: 16pt, weight: "bold")
  v(0.4em)
  it.body
  v(0.2em)
}

#show heading.where(level: 3): it => {
  set text(fill: rgb("#00ffcc"), size: 13pt, weight: "bold")
  v(0.3em)
  it.body
  v(0.1em)
}

#let accent = rgb("#00ffcc")
#let amber = rgb("#f59e0b")
#let blue = rgb("#3b82f6")
#let purple = rgb("#a855f7")
#let green = rgb("#10b981")
#let red = rgb("#ef4444")
#let muted = rgb("#8b9dc3")
#let card-bg = rgb("#0d1f3c")
#let border = rgb("#1e3a5f")

#let usd(amount) = {
  text(font: "Helvetica")[\$#amount]
}

#let stat-card(value, label, color: accent) = {
  box(
    width: 100%,
    fill: card-bg,
    stroke: 1pt + color,
    radius: 8pt,
    inset: 12pt,
  )[
    #align(center)[
      #text(fill: color, size: 24pt, weight: "bold")[#value]
      #linebreak()
      #text(fill: white, size: 10pt)[#label]
    ]
  ]
}

#let info-box(title, content, color: accent) = {
  box(
    width: 100%,
    fill: card-bg,
    stroke: 1pt + color,
    radius: 8pt,
    inset: 12pt,
  )[
    #text(fill: color, weight: "bold", size: 12pt)[#title]
    #v(0.3em)
    #content
  ]
}

// ============================================
// COVER PAGE
// ============================================

#page(margin: 0pt)[
  #set align(center + horizon)

  #box(width: 100%, height: 100%, fill: rgb("#0a1628"))[
    #v(2in)

    #image("pdf-assets/logo-shield.png", width: 150pt)

    #v(0.5in)

    #text(fill: accent, size: 42pt, weight: "bold")[
      Cybersecurity
    ]
    #linebreak()
    #text(fill: accent, size: 42pt, weight: "bold")[
      Career Roadmap
    ]
    #linebreak()
    #v(0.2in)
    #text(fill: amber, size: 48pt, weight: "bold")[
      2026
    ]

    #v(0.5in)

    #text(fill: white, size: 16pt)[
      Your Complete Guide to Breaking Into Cybersecurity
    ]

    #v(1.5in)

    #box(
      fill: card-bg,
      stroke: 1pt + border,
      radius: 8pt,
      inset: 16pt,
    )[
      #text(fill: muted, size: 12pt)[
        A Remnant Security Guide
      ]
      #linebreak()
      #text(fill: muted, size: 11pt)[
        remnantsecurity.com
      ]
    ]
  ]
]

// ============================================
// TABLE OF CONTENTS
// ============================================

#page[
  #align(center)[
    #text(fill: accent, size: 28pt, weight: "bold")[Contents]
  ]

  #v(1em)
  #line(length: 100%, stroke: 0.5pt + border)
  #v(1em)

  #set text(size: 12pt)

  #grid(
    columns: (1fr, auto),
    row-gutter: 1.2em,

    [#text(fill: accent)[01] #h(0.5em) The Opportunity], [3],
    [#text(fill: accent)[02] #h(0.5em) Career Paths Comparison], [4],
    [#text(fill: accent)[03] #h(0.5em) AI + Cybersecurity: The New Frontier], [5],
    [#text(fill: accent)[04] #h(0.5em) Certification Roadmap], [9],
    [#text(fill: accent)[05] #h(0.5em) Skills Gap Assessment], [10],
    [#text(fill: accent)[06] #h(0.5em) 30-Day Action Plan], [11],
    [#text(fill: accent)[07] #h(0.5em) Free & Low-Cost Resources], [12],
    [#text(fill: accent)[08] #h(0.5em) Industry-Specific Paths], [13],
    [#text(fill: accent)[09] #h(0.5em) Remote Work Reality], [14],
    [#text(fill: accent)[10] #h(0.5em) Getting Hired Without Experience], [15],
    [#text(fill: accent)[11] #h(0.5em) Next Steps], [16],
  )

  #v(2em)

  #info-box("About This Guide")[
    This roadmap provides actionable career guidance backed by 2024-2026 industry data from ISC2, Bureau of Labor Statistics, CyberSeek, and leading industry analysts. All salary figures, certification costs, and market statistics are sourced and current as of publication.

    #v(0.5em)
    #text(fill: muted, size: 10pt)[Version 1.0 | February 2026]
  ]
]

// ============================================
// SECTION 1: THE OPPORTUNITY
// ============================================

#page[
  = The Opportunity

  #v(0.5em)

  #image("pdf-assets/market-stats.png", width: 100%)

  #v(1em)

  == Why Cybersecurity, Why Now?

  The cybersecurity industry faces an unprecedented talent shortage, creating one of the most compelling career opportunities of the decade.

  #v(0.5em)

  #grid(
    columns: (1fr, 1fr),
    column-gutter: 1em,
    row-gutter: 0.8em,

    stat-card("4.8M", "Global Workforce Gap", color: accent),
    stat-card("457K", "U.S. Job Openings", color: amber),
    stat-card("29%", "Job Growth 2024-2034", color: blue),
    stat-card(usd("128K"), "Median Salary", color: green),
  )

  #v(1em)

  == The Timing Has Never Been Better

  #grid(
    columns: (1fr, 1fr),
    column-gutter: 1em,

    info-box("Demand is Exploding", color: accent)[
      Cyberattacks have risen *60% year-over-year*. Every breach that makes headlines creates more budget and more job openings.
    ],

    info-box("Skills-Based Hiring", color: amber)[
      *65% of employers* now use skills evaluations over degree requirements. What you can demonstrate matters more than credentials.
    ],
  )

  #v(0.8em)

  #grid(
    columns: (1fr, 1fr),
    column-gutter: 1em,

    info-box("No Degree Required", color: blue)[
      Many entry-level roles—SOC Analyst, Security Analyst, Help Desk with security focus—don't require a four-year degree.
    ],

    info-box("Remote Work is Standard", color: green)[
      *48% of the global cybersecurity workforce* works remotely or hybrid. Geographic barriers are disappearing.
    ],
  )
]

// ============================================
// SECTION 2: CAREER PATHS
// ============================================

#page[
  = Career Paths Comparison

  Choose your path based on your interests, skills, and career goals.

  #v(0.5em)

  #image("pdf-assets/career-paths-chart.png", width: 100%)

  #v(1em)

  == Career Paths at a Glance

  #set table(
    fill: (x, y) => if y == 0 { card-bg } else if calc.odd(y) { rgb("#0d1f3c") } else { rgb("#0a1628") },
    stroke: 0.5pt + border,
  )

  #table(
    columns: (1.2fr, 0.8fr, 0.8fr, 1fr),
    align: (left, center, center, left),

    table.header(
      [#text(fill: accent, weight: "bold")[Career Path]],
      [#text(fill: accent, weight: "bold")[Entry]],
      [#text(fill: accent, weight: "bold")[Senior]],
      [#text(fill: accent, weight: "bold")[Best For]],
    ),

    [SOC Analyst], [50-80K], [85-130K], [Problem-solvers],
    [Penetration Tester], [80-105K], [140K+], [Creative hackers],
    [Security Engineer], [70-100K], [158-173K], [Builders],
    [GRC Analyst], [65-90K], [120K+], [Process-driven],
    [Cloud Security], [100K+], [128-170K], [Cloud enthusiasts],
    [Incident Responder], [85K], [145K], [Crisis handlers],
    [Security Architect], [130K], [200K+], [Big-picture thinkers],
    [CISO], [150K], [400K+], [Strategic leaders],
  )

  #v(1em)

  #info-box("Emerging Roles 2026-2026", color: amber)[
    #grid(
      columns: (1fr, 1fr),
      column-gutter: 1em,

      [
        *AI Security Engineer*
        - Salary: #usd("152K")-#usd("210K")
        - 56% wage premium for AI skills
      ],

      [
        *AI Governance Specialist*
        - High demand, low supply
        - ML + policy expertise
      ],
    )
  ]
]

// ============================================
// SECTION 3: AI + CYBERSECURITY
// ============================================

#page[
  = AI + Cybersecurity: The New Frontier

  The intersection of AI and cybersecurity is creating the most lucrative and fastest-growing career opportunities in tech.

  #v(0.5em)

  #image("pdf-assets/ai-security-roles.png", width: 100%)

  #v(1em)

  == Why AI Security Matters Now

  #grid(
    columns: (1fr, 1fr),
    column-gutter: 1em,

    info-box("The Threat Landscape", color: red)[
      #text(size: 10pt)[
        *AI-powered attacks are here:*
        - Deepfake social engineering
        - Automated vulnerability discovery
        - AI-generated phishing at scale
        - Adversarial ML attacks on models
        - AI-assisted malware evasion
      ]
    ],

    info-box("The Defense Opportunity", color: green)[
      #text(size: 10pt)[
        *AI-powered defense is critical:*
        - Behavioral anomaly detection
        - Automated threat hunting
        - Real-time incident response
        - Predictive security analytics
        - AI model security & alignment
      ]
    ],
  )

  #v(0.8em)

  #box(fill: card-bg, stroke: 2pt + amber, radius: 10pt, inset: 16pt, width: 100%)[
    #align(center)[
      #text(fill: amber, size: 20pt, weight: "bold")[56% Wage Premium]
      #h(1em)
      #text(fill: white, size: 14pt)[for professionals with AI + Security skills]
    ]
  ]
]

#page[
  = AI Security Roles: Current & Future

  == Current Roles (Hiring Now - 2026)

  #grid(
    columns: (1fr, 1fr),
    column-gutter: 1em,
    row-gutter: 1em,

    box(fill: card-bg, stroke: 2pt + accent, radius: 12pt, inset: 14pt)[
      #text(fill: accent, size: 15pt, weight: "bold")[AI Security Engineer]
      #h(1fr)
      #text(fill: amber, size: 13pt, weight: "bold")[#usd("152K")-#usd("210K")]

      #v(0.4em)
      #text(size: 10pt)[
        *What you do:* Secure AI/ML systems, implement model access controls, detect adversarial inputs, ensure training data integrity.

        *Skills needed:* Python, ML frameworks (PyTorch, TensorFlow), security fundamentals, API security, cloud platforms.

        *Who's hiring:* OpenAI, Anthropic, Google, Microsoft, Meta, NVIDIA, AI startups.
      ]
    ],

    box(fill: card-bg, stroke: 2pt + accent, radius: 12pt, inset: 14pt)[
      #text(fill: accent, size: 15pt, weight: "bold")[ML Security Researcher]
      #h(1fr)
      #text(fill: amber, size: 13pt, weight: "bold")[#usd("140K")-#usd("200K")]

      #v(0.4em)
      #text(size: 10pt)[
        *What you do:* Research adversarial ML, model vulnerabilities, jailbreaks, data poisoning attacks, publish findings.

        *Skills needed:* Deep ML knowledge, Python, research methodology, academic writing, red team mindset.

        *Who's hiring:* AI labs, universities, DARPA, big tech research teams.
      ]
    ],

    box(fill: card-bg, stroke: 2pt + accent, radius: 12pt, inset: 14pt)[
      #text(fill: accent, size: 15pt, weight: "bold")[LLM Red Team Specialist]
      #h(1fr)
      #text(fill: amber, size: 13pt, weight: "bold")[#usd("145K")-#usd("195K")]

      #v(0.4em)
      #text(size: 10pt)[
        *What you do:* Test LLMs for jailbreaks, prompt injection, harmful outputs, safety bypasses. Break AI systems before attackers do.

        *Skills needed:* Prompt engineering, creative attack thinking, NLP understanding, documentation skills.

        *Who's hiring:* Anthropic, OpenAI, Scale AI, AI safety orgs, consulting firms.
      ]
    ],

    box(fill: card-bg, stroke: 2pt + accent, radius: 12pt, inset: 14pt)[
      #text(fill: accent, size: 15pt, weight: "bold")[AI Governance Analyst]
      #h(1fr)
      #text(fill: amber, size: 13pt, weight: "bold")[#usd("120K")-#usd("160K")]

      #v(0.4em)
      #text(size: 10pt)[
        *What you do:* Develop AI policies, ensure regulatory compliance (EU AI Act), risk assessments, ethics frameworks.

        *Skills needed:* Policy writing, regulatory knowledge, risk management, communication, some technical literacy.

        *Who's hiring:* Enterprises adopting AI, consulting firms, government, AI companies.
      ]
    ],
  )
]

#page[
  = AI Security Roles: Emerging & Future

  == Emerging Roles (2026-2028)

  #grid(
    columns: (1fr, 1fr),
    column-gutter: 1em,
    row-gutter: 1em,

    box(fill: card-bg, stroke: 2pt + amber, radius: 12pt, inset: 14pt)[
      #text(fill: amber, size: 15pt, weight: "bold")[AI Threat Intelligence Analyst]
      #h(1fr)
      #text(fill: accent, size: 13pt, weight: "bold")[#usd("130K")-#usd("175K")]

      #v(0.4em)
      #text(size: 10pt)[
        *What you do:* Track AI-powered threat actors, analyze AI-generated malware, monitor adversarial ML trends.

        *Why emerging:* As attackers adopt AI, defenders need specialists who understand both domains.
      ]
    ],

    box(fill: card-bg, stroke: 2pt + amber, radius: 12pt, inset: 14pt)[
      #text(fill: amber, size: 15pt, weight: "bold")[Autonomous Systems Auditor]
      #h(1fr)
      #text(fill: accent, size: 13pt, weight: "bold")[#usd("150K")-#usd("200K")]

      #v(0.4em)
      #text(size: 10pt)[
        *What you do:* Audit AI agents, autonomous vehicles, robotics for security and safety compliance.

        *Why emerging:* Regulations are coming. Companies need auditors before deployment.
      ]
    ],

    box(fill: card-bg, stroke: 2pt + amber, radius: 12pt, inset: 14pt)[
      #text(fill: amber, size: 15pt, weight: "bold")[AI Supply Chain Security]
      #h(1fr)
      #text(fill: accent, size: 13pt, weight: "bold")[#usd("140K")-#usd("185K")]

      #v(0.4em)
      #text(size: 10pt)[
        *What you do:* Secure model pipelines, verify training data provenance, audit third-party models, detect backdoors.

        *Why emerging:* Model supply chain attacks are the next SolarWinds.
      ]
    ],

    box(fill: card-bg, stroke: 2pt + amber, radius: 12pt, inset: 14pt)[
      #text(fill: amber, size: 15pt, weight: "bold")[Deepfake Detection Engineer]
      #h(1fr)
      #text(fill: accent, size: 13pt, weight: "bold")[#usd("135K")-#usd("180K")]

      #v(0.4em)
      #text(size: 10pt)[
        *What you do:* Build systems to detect AI-generated media, voice clones, synthetic identities.

        *Why emerging:* Deepfakes are becoming indistinguishable. Detection is critical infrastructure.
      ]
    ],
  )

  #v(1em)

  == Future Opportunities (2028+)

  #info-box("The Horizon", color: purple)[
    #grid(
      columns: (1fr, 1fr, 1fr),
      column-gutter: 1em,

      [
        *AGI Safety Engineer*
        #linebreak()
        #usd("200K")-#usd("350K")+
        #linebreak()
        #text(size: 9pt, fill: muted)[Alignment research, containment protocols, safety testing for advanced AI systems.]
      ],

      [
        *AI-Human Trust Architect*
        #linebreak()
        #usd("170K")-#usd("250K")
        #linebreak()
        #text(size: 9pt, fill: muted)[Design verification systems for human-AI interaction, prevent manipulation.]
      ],

      [
        *Synthetic Media Forensics*
        #linebreak()
        #usd("150K")-#usd("220K")
        #linebreak()
        #text(size: 9pt, fill: muted)[Legal-grade analysis of AI-generated content for courts and investigations.]
      ],
    )
  ]
]

#page[
  = Breaking Into AI Security

  == Path 1: Security Professional → AI Security

  #info-box("If you have security experience", color: accent)[
    #text(size: 10pt)[
      *Add these skills:*
      - Python for ML (start with scikit-learn, then PyTorch)
      - Fundamentals of neural networks and LLMs
      - Hugging Face ecosystem
      - Prompt engineering and LLM APIs

      *Projects to build:*
      - Build a simple classifier, then try to fool it with adversarial examples
      - Create a prompt injection test suite for an open-source LLM
      - Document AI attack techniques on your blog

      *Timeline:* 3-6 months to become hireable
    ]
  ]

  #v(0.8em)

  == Path 2: AI/ML Engineer → AI Security

  #info-box("If you have ML experience", color: amber)[
    #text(size: 10pt)[
      *Add these skills:*
      - Security fundamentals (Security+ or equivalent knowledge)
      - Threat modeling and attack trees
      - Secure software development practices
      - Red team/adversarial mindset

      *Projects to build:*
      - Red team your own models for jailbreaks
      - Implement model access controls and audit logging
      - Contribute to AI safety research papers

      *Timeline:* 2-4 months to become hireable
    ]
  ]

  #v(0.8em)

  == Resources for AI Security

  #grid(
    columns: (1fr, 1fr),
    column-gutter: 1em,

    info-box("Learning", color: blue)[
      #text(size: 10pt)[
        *Courses:*
        - NVIDIA AI Red Team Training
        - Coursera ML Security Specialization
        - SANS SEC595: Applied Data Science

        *Research:*
        - MITRE ATLAS (AI attack framework)
        - Anthropic safety research papers
        - OpenAI red teaming reports
      ]
    ],

    info-box("Practice", color: green)[
      #text(size: 10pt)[
        *Hands-on:*
        - Gandalf (prompt injection game)
        - AI CTF challenges
        - HuggingFace model security labs

        *Community:*
        - AI Village (DEF CON)
        - MLSecOps Community
        - AI safety Discord servers
      ]
    ],
  )
]

// ============================================
// SECTION 4: CERTIFICATION ROADMAP
// ============================================

#page[
  = Certification Roadmap

  Certifications serve two purposes: they get you past HR filters, and they validate your knowledge.

  #v(0.5em)

  #image("pdf-assets/cert-roadmap.png", width: 100%)

  #v(1em)

  == Year 1: Foundation

  Start here regardless of your target role.

  #table(
    columns: (1.2fr, 0.6fr, 2fr),
    align: (left, center, left),
    stroke: 0.5pt + border,
    fill: (x, y) => if y == 0 { card-bg } else { rgb("#0a1628") },

    table.header(
      [#text(fill: accent, weight: "bold")[Certification]],
      [#text(fill: accent, weight: "bold")[Cost]],
      [#text(fill: accent, weight: "bold")[Details]],
    ),

    [CompTIA Security+], [#usd("404")], [DoD 8140 approved, 700K+ holders],
    [Google Cybersecurity], [Free], [Available on Coursera, great for career changers],
    [ISC2 CC], [Free], [No experience required, stepping stone],
  )

  #v(1em)

  == Certification ROI

  #grid(
    columns: (1fr, 1fr, 1fr),
    column-gutter: 1em,

    stat-card("37%", [Higher Salary #linebreak() (Certified vs Non)], color: green),
    stat-card("91%", [Employers Prefer #linebreak() Certifications], color: blue),
    stat-card(usd("151K"), [Average OSCP #linebreak() Holder Salary], color: amber),
  )

  #v(1em)

  #info-box("Government/DoD Path", color: purple)[
    *DoD 8140* replaced 8570 in 2026. Compliance deadline: February 15, 2026 (cyber roles), February 15, 2026 (all cyber workforce). Security+ satisfies multiple 8140 work role requirements.
  ]
]

// ============================================
// SECTION 4: SKILLS GAP
// ============================================

#page[
  = Skills Gap Assessment

  Understanding the skills gaps helps you position yourself strategically.

  #v(0.5em)

  #grid(
    columns: (1fr, 1fr),
    column-gutter: 1.5em,

    [
      #image("pdf-assets/skills-radar.png", width: 100%)
    ],

    [
      == Top Skills Gaps 2026

      #v(0.5em)

      Organizations are struggling to find talent in these areas:

      #v(0.5em)

      #box(fill: card-bg, stroke: 1pt + accent, radius: 8pt, inset: 12pt, width: 100%)[
        #text(fill: accent, weight: "bold")[1. AI/ML Security]
        #h(1fr)
        #text(fill: amber, weight: "bold")[34%]
        #linebreak()
        #text(size: 10pt, fill: muted)[Securing AI systems and models]
      ]

      #v(0.5em)

      #box(fill: card-bg, stroke: 1pt + blue, radius: 8pt, inset: 12pt, width: 100%)[
        #text(fill: blue, weight: "bold")[2. Cloud Security]
        #h(1fr)
        #text(fill: amber, weight: "bold")[30%]
        #linebreak()
        #text(size: 10pt, fill: muted)[AWS, Azure, GCP security]
      ]

      #v(0.5em)

      #box(fill: card-bg, stroke: 1pt + purple, radius: 8pt, inset: 12pt, width: 100%)[
        #text(fill: purple, weight: "bold")[3. Zero Trust]
        #h(1fr)
        #text(fill: amber, weight: "bold")[27%]
        #linebreak()
        #text(size: 10pt, fill: muted)[Implementation & architecture]
      ]

      #v(0.5em)

      #box(fill: card-bg, stroke: 1pt + green, radius: 8pt, inset: 12pt, width: 100%)[
        #text(fill: green, weight: "bold")[4. DFIR]
        #h(1fr)
        #text(fill: amber, weight: "bold")[25%]
        #linebreak()
        #text(size: 10pt, fill: muted)[Digital forensics & incident response]
      ]
    ],
  )

  #v(1em)

  == Self-Assessment Checklist

  Rate your current proficiency in each area:

  #grid(
    columns: (1fr, 1fr),
    column-gutter: 1em,

    info-box("Networking", color: accent)[
      #text(size: 10pt)[
        ○ TCP/IP model and protocols #linebreak()
        ○ DNS, DHCP, routing #linebreak()
        ○ Firewall concepts #linebreak()
        ○ VPNs and segmentation
      ]
    ],

    info-box("Operating Systems", color: blue)[
      #text(size: 10pt)[
        ○ Linux command line #linebreak()
        ○ Windows administration #linebreak()
        ○ File permissions #linebreak()
        ○ Log analysis
      ]
    ],

    info-box("Scripting", color: amber)[
      #text(size: 10pt)[
        ○ Python basics #linebreak()
        ○ Bash fundamentals #linebreak()
        ○ PowerShell basics #linebreak()
        ○ API interaction
      ]
    ],

    info-box("Security Concepts", color: green)[
      #text(size: 10pt)[
        ○ CIA triad #linebreak()
        ○ Authentication vs Authorization #linebreak()
        ○ Encryption types #linebreak()
        ○ Common attack types
      ]
    ],
  )
]

// ============================================
// SECTION 5: 30-DAY ACTION PLAN
// ============================================

#page[
  = 30-Day Action Plan

  Your first month in cybersecurity. Assumes 2-3 hours per day.

  #v(0.5em)

  #image("pdf-assets/action-plan-timeline.png", width: 100%)

  #v(1em)

  #grid(
    columns: (1fr, 1fr),
    column-gutter: 1em,
    row-gutter: 1em,

    info-box("Week 1: Foundation", color: accent)[
      #text(size: 10pt)[
        *Days 1-2:* Set up home lab
        - Download VirtualBox (free)
        - Install Kali Linux VM
        - Document the process

        *Days 3-4:* Start learning
        - Create TryHackMe account
        - Complete "Pre-Security" path

        *Days 5-7:* Begin cert study
        - Watch Professor Messer Sec+ videos
        - Create flashcards
      ]
    ],

    info-box("Week 2: Hands-On", color: amber)[
      #text(size: 10pt)[
        *Days 8-10:* Continue CTFs
        - Complete "Intro to Cybersecurity"
        - Start "Complete Beginner" path

        *Days 11-12:* Linux skills
        - Learn essential commands
        - Practice navigation

        *Days 13-14:* Network analysis
        - Install Wireshark
        - Capture your first packets
      ]
    ],

    info-box("Week 3: Build Brand", color: blue)[
      #text(size: 10pt)[
        *Days 15-16:* LinkedIn
        - Update headline
        - Add security skills
        - Write transition story

        *Days 17-18:* Community
        - Join r/cybersecurity
        - Find Discord servers
        - Follow security pros

        *Days 19-21:* Documentation
        - Create GitHub account
        - Start a blog or GitHub Pages
        - Write first post
      ]
    ],

    info-box("Week 4: Career Prep", color: green)[
      #text(size: 10pt)[
        *Days 22-23:* Research
        - Search LinkedIn jobs
        - Note common requirements
        - Identify target companies

        *Days 24-25:* Resume
        - Lead with certs & projects
        - Quantify learning
        - Add GitHub/blog links

        *Days 26-30:* Action
        - Apply to 3-5 positions
        - Schedule Sec+ exam date
        - Set 90-day goals
      ]
    ],
  )
]

// ============================================
// SECTION 6: FREE RESOURCES
// ============================================

#page[
  = Free & Low-Cost Resources

  The best resources in cybersecurity are often free.

  #v(0.5em)

  == Free Training Platforms

  #table(
    columns: (1.2fr, 1.5fr, 1.3fr),
    align: (left, left, left),
    stroke: 0.5pt + border,
    fill: (x, y) => if y == 0 { card-bg } else { rgb("#0a1628") },

    table.header(
      [#text(fill: accent, weight: "bold")[Platform]],
      [#text(fill: accent, weight: "bold")[Focus]],
      [#text(fill: accent, weight: "bold")[URL]],
    ),

    [TryHackMe], [Guided learning, CTF-style], [tryhackme.com],
    [Hack The Box Academy], [Structured courses], [academy.hackthebox.com],
    [SANS Cyber Aces], [Foundational skills], [cyberaces.org],
    [Fortinet NSE], [Network security, free certs], [training.fortinet.com],
    [PortSwigger Academy], [Web application security], [portswigger.net],
    [LetsDefend], [SOC analyst training], [letsdefend.io],
    [CyberDefenders], [Blue team challenges], [cyberdefenders.org],
  )

  #v(1em)

  == Free Certification Prep

  #grid(
    columns: (1fr, 1fr, 1fr),
    column-gutter: 1em,

    info-box("Security+", color: accent)[
      *Professor Messer*
      #linebreak()
      Free YouTube videos
      #linebreak()
      #text(size: 10pt, fill: muted)[Complete SY0-701 course]
    ],

    info-box("CISSP", color: amber)[
      *FRSecure Mentor*
      #linebreak()
      Live webinars + recordings
      #linebreak()
      #text(size: 10pt, fill: muted)[Community-driven prep]
    ],

    info-box("Google Cert", color: blue)[
      *Coursera Audit*
      #linebreak()
      Free access to materials
      #linebreak()
      #text(size: 10pt, fill: muted)[Pay only for certificate]
    ],
  )

  #v(1em)

  == Essential Free Tools

  #grid(
    columns: (1fr, 1fr),
    column-gutter: 1em,

    info-box("Offensive Tools", color: red)[
      #text(size: 10pt)[
        *Kali Linux* - Complete pentesting distro #linebreak()
        *Nmap* - Network scanning #linebreak()
        *Burp Suite Community* - Web testing #linebreak()
        *Metasploit Framework* - Exploitation #linebreak()
        *Gobuster* - Directory enumeration
      ]
    ],

    info-box("Defensive Tools", color: blue)[
      #text(size: 10pt)[
        *Wireshark* - Packet analysis #linebreak()
        *Security Onion* - Network monitoring #linebreak()
        *Ghidra* - Reverse engineering (NSA) #linebreak()
        *YARA* - Malware detection rules #linebreak()
        *CyberChef* - Data analysis (GCHQ)
      ]
    ],
  )
]

// ============================================
// SECTION 7: INDUSTRY PATHS
// ============================================

#page[
  = Industry-Specific Paths

  Certain industries pay premiums for cybersecurity talent.

  #v(0.5em)

  #grid(
    columns: (1fr, 1fr),
    column-gutter: 1em,
    row-gutter: 1em,

    box(fill: card-bg, stroke: 2pt + accent, radius: 12pt, inset: 16pt)[
      #text(fill: accent, size: 16pt, weight: "bold")[Healthcare]

      #v(0.5em)

      #text(size: 10pt)[
        *Why it pays:* HIPAA violations cost #usd("100")-#usd("50,000") per incident. Healthcare data sells for 10x financial data.

        #v(0.5em)

        *Key compliance:* HIPAA, HITECH

        *Recommended cert:* HCISPP (ISC2)

        *Focus areas:*
        - Patient data protection
        - Medical device security
        - EHR systems

        #v(0.5em)

        #text(fill: amber, weight: "bold")[Premium: #usd("140K")+ for specialists]
      ]
    ],

    box(fill: card-bg, stroke: 2pt + amber, radius: 12pt, inset: 16pt)[
      #text(fill: amber, size: 16pt, weight: "bold")[Financial Services]

      #v(0.5em)

      #text(size: 10pt)[
        *Why it pays:* Banks face constant attacks and heavy regulation. They pay for the best.

        #v(0.5em)

        *Key compliance:* PCI-DSS, SOX, GLBA

        *Focus areas:*
        - Fraud prevention
        - Transaction security
        - API security

        #v(0.5em)

        #text(fill: amber, weight: "bold")[Premium: #usd("140K")+ for elite testers]
      ]
    ],

    box(fill: card-bg, stroke: 2pt + blue, radius: 12pt, inset: 16pt)[
      #text(fill: blue, size: 16pt, weight: "bold")[Government & Defense]

      #v(0.5em)

      #text(size: 10pt)[
        *Why it pays:* Stable employment, excellent benefits, mission-driven work.

        #v(0.5em)

        *Key requirement:* DoD 8140 certification

        *Security clearance:* Required for most roles

        *Top employers:* NSA, CISA, FBI, DoD, contractors

        #v(0.5em)

        #text(fill: amber, weight: "bold")[Benefit: Job security + pension]
      ]
    ],

    box(fill: card-bg, stroke: 2pt + purple, radius: 12pt, inset: 16pt)[
      #text(fill: purple, size: 16pt, weight: "bold")[AI & Technology]

      #v(0.5em)

      #text(size: 10pt)[
        *Why it pays:* AI security is the new frontier. Few people have both skillsets.

        #v(0.5em)

        *Focus areas:*
        - ML model security
        - AI governance
        - Prompt injection defense

        *Top employers:* OpenAI, Anthropic, Google

        #v(0.5em)

        #text(fill: amber, weight: "bold")[Premium: 56% wage premium for AI skills]
      ]
    ],
  )
]

// ============================================
// SECTION 8: REMOTE WORK
// ============================================

#page[
  = Remote Work Reality

  The pandemic permanently changed cybersecurity work.

  #v(0.5em)

  == 2026-2026 Remote Statistics

  #grid(
    columns: (1fr, 1fr, 1fr, 1fr),
    column-gutter: 0.8em,

    stat-card("48%", [Remote/ #linebreak() Hybrid], color: accent),
    stat-card("75%", [Companies #linebreak() Hybrid], color: amber),
    stat-card("76%", [Would Quit #linebreak() W/O Remote], color: blue),
    stat-card([#usd("55")-80K], [Entry Remote #linebreak() Salaries], color: green),
  )

  #v(1em)

  == Remote-Friendly Roles

  #grid(
    columns: (1fr, 1fr, 1fr),
    column-gutter: 1em,

    info-box("Highly Remote", color: green)[
      #text(size: 10pt)[
        ✓ SOC Analyst (Tier 1-3) #linebreak()
        ✓ Security Analyst #linebreak()
        ✓ GRC/Compliance Analyst #linebreak()
        ✓ Threat Intelligence #linebreak()
        ✓ Penetration Tester
      ]
    ],

    info-box("Hybrid Preferred", color: amber)[
      #text(size: 10pt)[
        ~ Security Engineer #linebreak()
        ~ Incident Responder #linebreak()
        ~ Security Architect #linebreak()
        ~ Red Team Lead #linebreak()
        ~ Security Manager
      ]
    ],

    info-box("Usually On-Site", color: red)[
      #text(size: 10pt)[
        ✗ Physical Security #linebreak()
        ✗ OT/ICS Security #linebreak()
        ✗ Classified Gov Work #linebreak()
        ✗ Data Center Security #linebreak()
        ✗ Hardware Security
      ]
    ],
  )

  #v(1em)

  == Top Companies Hiring Remotely

  #grid(
    columns: (1fr, 1fr, 1fr, 1fr),
    column-gutter: 0.8em,

    info-box("Technology", color: accent)[
      #text(size: 9pt)[
        Google #linebreak()
        Amazon #linebreak()
        Microsoft #linebreak()
        NVIDIA
      ]
    ],

    info-box("Finance", color: amber)[
      #text(size: 9pt)[
        JPMorgan #linebreak()
        Goldman Sachs #linebreak()
        Visa #linebreak()
        Mastercard
      ]
    ],

    info-box("Defense", color: blue)[
      #text(size: 9pt)[
        Northrop #linebreak()
        Leidos #linebreak()
        BAE Systems #linebreak()
        Booz Allen
      ]
    ],

    info-box("Consulting", color: green)[
      #text(size: 9pt)[
        Deloitte #linebreak()
        KPMG #linebreak()
        Accenture #linebreak()
        Mandiant
      ]
    ],
  )
]

// ============================================
// SECTION 9: GETTING HIRED
// ============================================

#page[
  = Getting Hired Without Experience

  "How do I get experience without a job, and a job without experience?"

  #v(0.5em)

  == The Five-Step Formula

  #grid(
    columns: (1fr, 1fr),
    column-gutter: 1em,
    row-gutter: 0.8em,

    box(fill: card-bg, stroke: 2pt + accent, radius: 10pt, inset: 12pt)[
      #text(fill: accent, size: 24pt, weight: "bold")[1]
      #h(0.5em)
      #text(fill: white, size: 14pt, weight: "bold")[Get Certified]

      #v(0.3em)
      #text(size: 10pt)[
        Security+ clears HR filters. Period. It's the minimum bar for most entry-level positions.
      ]
    ],

    box(fill: card-bg, stroke: 2pt + amber, radius: 10pt, inset: 12pt)[
      #text(fill: amber, size: 24pt, weight: "bold")[2]
      #h(0.5em)
      #text(fill: white, size: 14pt, weight: "bold")[Build Labs]

      #v(0.3em)
      #text(size: 10pt)[
        Create a home lab and document it. Write detailed walkthroughs on GitHub or a blog. This IS experience.
      ]
    ],

    box(fill: card-bg, stroke: 2pt + blue, radius: 10pt, inset: 12pt)[
      #text(fill: blue, size: 24pt, weight: "bold")[3]
      #h(0.5em)
      #text(fill: white, size: 14pt, weight: "bold")[Practice CTFs]

      #v(0.3em)
      #text(size: 10pt)[
        TryHackMe and Hack The Box. Track progress publicly. "Completed 100+ CTF challenges" is a resume line.
      ]
    ],

    box(fill: card-bg, stroke: 2pt + purple, radius: 10pt, inset: 12pt)[
      #text(fill: purple, size: 24pt, weight: "bold")[4]
      #h(0.5em)
      #text(fill: white, size: 14pt, weight: "bold")[Network]

      #v(0.3em)
      #text(size: 10pt)[
        LinkedIn outreach, informational interviews. Local meetups: ISSA, OWASP, BSides conferences.
      ]
    ],
  )

  #v(0.5em)

  #box(fill: card-bg, stroke: 2pt + green, radius: 10pt, inset: 12pt, width: 100%)[
    #text(fill: green, size: 24pt, weight: "bold")[5]
    #h(0.5em)
    #text(fill: white, size: 14pt, weight: "bold")[Contribute to Open Source]

    #v(0.3em)
    #text(size: 10pt)[
      Find security tools on GitHub. Start with documentation or small fixes. Work up to code contributions. This demonstrates real-world collaboration.
    ]
  ]

  #v(1em)

  == Alternative Entry Points

  #table(
    columns: (1fr, 2fr),
    stroke: 0.5pt + border,
    fill: (x, y) => if y == 0 { card-bg } else { rgb("#0a1628") },

    table.header(
      [#text(fill: accent, weight: "bold")[Path]],
      [#text(fill: accent, weight: "bold")[Why It Works]],
    ),

    [MSP/MSSP], [Higher turnover = lower hiring bar. Great experience.],
    [IT Helpdesk → Security], [Internal transfers are easier. Learn the company first.],
    [Internships], [Many pay well. Direct path to full-time.],
    [Non-profit volunteer], [Gain experience while doing good.],
  )

  #v(1em)

  #info-box("Resume Tips", color: amber)[
    #text(size: 10pt)[
      *Lead with certifications:* CompTIA Security+ (2026) | Google Cybersecurity Certificate

      *Quantify your learning:* "Completed 50+ TryHackMe rooms" | "Ranked top 5% globally"

      *Include links:* GitHub portfolio | Blog | LinkedIn
    ]
  ]
]

// ============================================
// NEXT STEPS
// ============================================

#page[
  = Next Steps

  You've read the roadmap. Now it's time to move.

  #v(1em)

  #align(center)[
    #box(fill: card-bg, stroke: 3pt + accent, radius: 16pt, inset: 24pt, width: 80%)[
      #text(fill: accent, size: 18pt, weight: "bold")[Take the Career Quiz]

      #v(0.5em)

      #text(size: 12pt)[
        Not sure which path fits? Our assessment matches your skills and interests to specific cybersecurity roles.
      ]

      #v(0.8em)

      #text(fill: amber, size: 14pt, weight: "bold")[remnantsecurity.com]
    ]
  ]

  #v(1em)

  #align(center)[
    #box(fill: card-bg, stroke: 3pt + amber, radius: 16pt, inset: 24pt, width: 80%)[
      #text(fill: amber, size: 18pt, weight: "bold")[Join the Waitlist]

      #v(0.5em)

      #text(size: 12pt)[
        Get early access to structured courses, mentorship, and our community of security professionals.
      ]

      #v(0.8em)

      #text(fill: accent, size: 14pt, weight: "bold")[remnantsecurity.com]
    ]
  ]

  #v(1em)

  #align(center)[
    #box(fill: card-bg, stroke: 3pt + green, radius: 16pt, inset: 24pt, width: 80%)[
      #text(fill: green, size: 18pt, weight: "bold")[Start Day 1]

      #v(0.5em)

      #text(size: 12pt)[
        Go back to the 30-Day Action Plan. Today is Day 1.
        #linebreak()
        Download VirtualBox. Create your TryHackMe account. Begin.
      ]
    ]
  ]

  #v(2em)

  #line(length: 100%, stroke: 1pt + border)

  #v(1em)

  #align(center)[
    #text(fill: muted, size: 11pt)[
      *About Remnant Security*

      Remnant Security provides actionable cybersecurity career guidance backed by current industry data. We cut through the noise to give you practical steps for breaking into and advancing in cybersecurity.

      #v(0.5em)

      hello\@remnantsecurity.com

      #v(1em)

      #text(size: 9pt)[
        This guide was compiled using data from ISC2, Bureau of Labor Statistics, CyberSeek, Robert Half, ISACA, and direct industry research. All figures reflect 2024-2026 data as of publication.

        Version 1.0 | February 2026

        Copyright 2026 Remnant Security. All rights reserved.
      ]
    ]
  ]
]
