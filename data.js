/* ============================================================================
   PORTFOLIO CONTENT  —  EDIT THIS FILE TO UPDATE / ADD ANYTHING
   ----------------------------------------------------------------------------
   This is the single source of truth for the whole website.
   The page builds itself from the object below, so you never have to touch
   the HTML. To add a new job, project, skill, etc. just add another entry to
   the relevant array. To add a brand-new SECTION, see the note at the bottom.
   ============================================================================ */

const PORTFOLIO = {

  /* ---- Basic identity (shown in hero + nav + footer) -------------------- */
  profile: {
    name: "Krishna Darak",
    // Words in [brackets] get highlighted in the rotating hero headline.
    roles: [
      "Aspiring Product Manager",
      "Engineering → Management",
      "Process & Delivery Strategist",
      "PGPM Candidate @ Great Lakes",
    ],
    tagline:
      "Engineering-turned-management professional bridging technology and business strategy — skilled at root-cause analysis, stakeholder alignment, and scaling execution through data-driven process design.",
    location: "Chennai, India",
    // Quick facts shown as animated counters in the hero.
    stats: [
      { value: 44, suffix: "+", label: "Months of Experience" },
      { value: 99.7, suffix: " %ile", label: "CAT Quant Score" },
      { value: 70, suffix: "%", label: "Quality Issues Reduced" },
      { value: 32, suffix: "/yr", label: "Studio Output Scaled To" },
    ],
  },

  /* ---- About / profile summary ----------------------------------------- */
  about: {
    heading: "About Me",
    paragraphs: [
      "I'm an engineering-turned-management professional, currently pursuing my PGPM at the Great Lakes Institute of Management, Chennai. Over four years in software engineering and product delivery, I learned how to turn ambiguous, manual processes into structured, scalable systems — end-to-end, from problem identification through design, rollout, and iteration.",
      "I sit comfortably at the intersection of engineering rigor and business judgment: root-causing delivery bottlenecks, aligning cross-functional stakeholders, and translating data into decisions that scale execution. Whether it's automating reconciliation in a core banking platform or redesigning a 7-stage delivery pipeline to triple studio output, I'm happiest when I'm removing friction and unlocking capacity.",
      "Outside of work, you'll find me high-altitude backpacking in the Himalayas or studying the markets.",
    ],
    // Add/remove freely — rendered as little highlight chips.
    highlights: [
      "4+ years bridging engineering & management",
      "MBA candidate (PGPM, Great Lakes)",
      "Top 0.3% CAT Quantitative Aptitude",
      "Structured, data-driven process design",
    ],
  },

  /* ---- Professional experience ----------------------------------------- */
  experience: [
    {
      role: "Product Developer",
      company: "EdgeVerve Systems",
      period: "Jan 2026 – May 2026",
      points: [
        "Automated reconciliation of refund and payment discrepancies in a core banking platform, eliminating manual intervention and ensuring complete financial accuracy.",
      ],
    },
    {
      role: "Software Engineer",
      company: "Zensar Technologies",
      period: "Aug 2022 – Jan 2026",
      points: [
        "Owned a 7-stage delivery process end-to-end, coordinating creative, QA, and PM teams to scale studio output from an industry-average 10 games/year to 32 games/year, maintaining 100% on-time delivery across 12 personally-led titles.",
        "Identified the need for and independently built a workflow automation tool, cutting 6 hours of effort per deliverable and lifting team efficiency by 5% across 30 annual projects.",
        "Root-caused recurring defects across 18 projects by team, stage, and cause, then redesigned the delivery process based on the findings — cutting post-launch quality issues by 70% and saving up to 16 hours of rework per project.",
        "Managed a live client relationship under regulatory constraints, evaluating and delivering a late-stage customization request from a casino operator while protecting timeline, compliance requirements, and the account relationship.",
      ],
    },
  ],

  /* ---- Projects -------------------------------------------------------- */
  projects: [
    {
      title: "NutriBite — Brand Strategy",
      tag: "Ideathon 2026",
      description:
        "Spearheaded an end-to-end product and Go-To-Market strategy for a new Gen-Z targeted snack brand, optimizing existing operational pipelines to project ₹60–75 Lakhs in Year-1 revenue and an 18-month break-even period.",
      tags: ["Product Strategy", "Go-To-Market", "Financial Modeling"],
      link: "", // optional: add a URL to make the card clickable
    },
    {
      title: "MBA Desk",
      tag: "Academic Project",
      description:
        "An AI-powered tool that turns a full day's newspaper into a curated, function-tagged business briefing in seconds — breaking each relevant story into a summary, business impact, and SWOT-based strategic read, so students walk into class or interviews with decision-ready insight instead of an hour of reading.",
      tags: ["AI / LLM", "Product Design", "Business Strategy"],
      link: "https://github.com/KDarak53/MBA-Desk-Desktop", // repo / source
      downloadUrl: "https://raw.githubusercontent.com/KDarak53/MBA-Desk-Desktop/master/downloads/MBA%20Desk%20Setup.exe",
      downloadLabel: "Download (.exe, 85 MB)",
      videoUrl: "https://youtu.be/3lyZrkZxLj0",
    },
    {
      title: "Macroeconomic Analysis — Portugal (FY2022–27)",
      tag: "Academic Project",
      description:
        "Analyzed Portugal's economic trajectory across FY2022–25 actuals and FY2026–27 forecasts — spanning growth, inflation, labor markets, and trade-fiscal balances — surfacing 3 structural risks and recommending targeted policy interventions.",
      tags: ["Macroeconomics", "Policy Analysis", "Forecasting"],
      link: "",
    },
  ],

  /* ---- Skills (value = proficiency 0–100 for the animated bars) -------- */
  skills: [
    { name: "Structured Problem Solving", level: 90 },
    { name: "Product Management", level: 88 },
    { name: "Stakeholder Management", level: 88 },
    { name: "Process Design", level: 92 },
    { name: "Data-Driven Decision Making", level: 84 },
    { name: "Risk & Compliance", level: 78 },
  ],

  /* ---- Education ------------------------------------------------------- */
  education: [
    {
      degree: "PGPM (Post Graduate Programme in Management)",
      institute: "Great Lakes Institute of Management, Chennai",
      score: "Pursuing",
      year: "2027",
    },
    {
      degree: "B.E. — Electronics & Telecommunication (ENTC)",
      institute: "Pune Institute of Computer Technology, Pune",
      score: "8.98 / 10",
      year: "2022",
    },
    {
      degree: "Class XII (HSC)",
      institute: "Tatyasaheb Musale Vidyalaya & Junior College, Ichalkaranji",
      score: "79.06%",
      year: "2018",
    },
    {
      degree: "Class X (SSC)",
      institute: "Housabai Magdum Public High School, Kolhapur",
      score: "9.6 / 10",
      year: "2016",
    },
  ],

  /* ---- Certificates ---------------------------------------------------- */
  certificates: [
    {
      name: "Microsoft Certified: Azure Fundamentals",
      meta: "4 weeks · 2023",
      link: "https://www.credly.com/badges/d0b43569-165d-4ae6-83c3-1519e4f350ce/linked_in_profile",
    },
    {
      name: "SQL (Basic) — HackerRank",
      meta: "2 weeks · 2021",
      link: "https://www.hackerrank.com/certificates/40f8deb82932",
    },
  ],

  /* ---- Awards & achievements ------------------------------------------ */
  awards: [
    {
      title: "99.7 Percentile — CAT 2026 (Quantitative Aptitude)",
      detail: "Top 0.3% nationally in the Quantitative Aptitude section.",
    },
    {
      title: "Budding Innovator of the Quarter",
      detail: "Recognized at Zensar Technologies, 2025.",
    },
  ],

  /* ---- Positions of responsibility & extras (mixed list cards) -------- */
  leadership: [
    { title: "Placement Coordinator", org: "Great Lakes (GLIM)", year: "2026" },
    { title: "Project Lead", org: "Karma Yoga, GLIM", year: "2026" },
    { title: "Placement Coordinator", org: "PICT", year: "2022" },
    { title: "NSS Volunteer", org: "PICT", year: "2019–2022" },
  ],

  interests: ["High-Altitude Backpacking", "Stock Market Enthusiast"],

  languages: ["English", "Hindi", "Marathi", "Marwari"],

  /* ---- Contact (EDIT the placeholders below with your real links) ------ */
  contact: {
    heading: "Let's build something together",
    blurb:
      "Open to product management roles, collaborations, and conversations. Drop me a line — I'd love to hear from you.",
    email: "krishna.darak53@gmail.com",
    phone: "",                                 // optional, e.g. "+91 9XXXXXXXXX"
    socials: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/krishna-darak-9581b721a/", icon: "linkedin" }, // <-- replace
      { label: "GitHub",   url: "https://github.com/KDarak53",      icon: "github"   }, // <-- replace
      { label: "Email",    url: "mailto:krishna.darak53@gmail.com",       icon: "mail"     }, // <-- replace
    ],
  },

  /* ---- Footer ---------------------------------------------------------- */
  footer: {
    note: "Batch of 2026–27 · Built with HTML, CSS & JavaScript",
  },
};

/* ----------------------------------------------------------------------------
   WANT TO ADD A WHOLE NEW SECTION LATER?
   1) Add your data here, e.g.:
        PORTFOLIO.publications = [{ title: "...", url: "..." }];
   2) In script.js, write a small render function and add a nav entry.
   The existing sections are good copy-paste templates.
   -------------------------------------------------------------------------- */

// Expose to the page (top-level `const` does not auto-attach to window).
window.PORTFOLIO = PORTFOLIO;
