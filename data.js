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
      "Technology × Business Strategist",
      "Process Optimization Specialist",
      "PGPM Candidate @ Great Lakes",
    ],
    tagline:
      "Results-oriented professional bridging technology and business strategy — adept at aligning cross-functional teams to mobilize resources and execute scalable product optimizations.",
    location: "Chennai, India",
    // Quick facts shown as animated counters in the hero.
    stats: [
      { value: 44, suffix: "+", label: "Months of Experience" },
      { value: 99.7, suffix: " %ile", label: "CAT Quant Score" },
      { value: 70, suffix: "%", label: "Quality Issues Reduced" },
      { value: 30, suffix: "+", label: "Projects Delivered" },
    ],
  },

  /* ---- About / profile summary ----------------------------------------- */
  about: {
    heading: "About Me",
    paragraphs: [
      "I'm a technologist turned business strategist, currently pursuing my PGPM at the Great Lakes Institute of Management, Chennai. Over four years in software engineering and product development, I learned how to turn messy, manual processes into clean, scalable systems.",
      "I love sitting at the intersection of engineering and business — translating between the teams that build and the teams that decide. Whether it's automating reconciliation in a core banking platform or shaping a go-to-market strategy for a new brand, I'm happiest when I'm removing friction and unlocking capacity.",
      "Outside of work, you'll find me high-altitude backpacking in the Himalayas or studying the markets.",
    ],
    // Add/remove freely — rendered as little highlight chips.
    highlights: [
      "4+ years bridging engineering & product",
      "MBA candidate (PGPM, Great Lakes)",
      "Top 0.3% CAT Quantitative Aptitude",
      "Proven track record of on-time delivery",
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
        "Designed a workflow automation tool that cut 6 hours of effort per deliverable, improving team efficiency by 5% across 30 annual projects and increasing overall delivery capacity.",
        "Reduced post-launch quality issues by 70% across 18 independent projects, saving up to 16 hours of rework per project while sustaining a consistently high quality standard.",
        "Aligned diverse stakeholder teams to streamline project execution, resolving operational bottlenecks and achieving 100% on-time delivery.",
        "Mentored and onboarded junior team members across the end-to-end project lifecycle, enabling them to deliver independently and improving overall team productivity by 20%.",
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
  ],

  /* ---- Skills (value = proficiency 0–100 for the animated bars) -------- */
  skills: [
    { name: "Product Management", level: 90 },
    { name: "Stakeholder Management", level: 88 },
    { name: "Process Optimization", level: 92 },
    { name: "Data Analytics", level: 80 },
    { name: "Agile Methodologies", level: 85 },
    { name: "Risk Analysis", level: 78 },
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
    { title: "Placement Coordinator", org: "PICT", year: "2022" },
    { title: "NSS Volunteer", org: "PICT", year: "2019–2022" },
  ],

  interests: ["High-Altitude Backpacking", "Stock Market Enthusiast"],

  languages: ["English", "Hindi", "Marathi"],

  /* ---- Contact (EDIT the placeholders below with your real links) ------ */
  contact: {
    heading: "Let's build something together",
    blurb:
      "Open to product management roles, collaborations, and conversations. Drop me a line — I'd love to hear from you.",
    email: "your-email@example.com",          // <-- replace
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
