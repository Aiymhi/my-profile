export const profile = {
  name: "Aiym Aibekova",
  title: "I build software that makes complex things easier to use.",
  intro:
    "Hi, I’m Aiym. I study computer science and economics at Pacific Lutheran University, and I love finding ways to make technology useful to real people. I’m happiest when I’m building something, learning from the people around me, and getting to share that excitement with someone else.",
  education: "Pacific Lutheran University · Computer Science and Economics · Class of 2027",
  email: "aibekova@plu.edu",
  linkedIn: "https://www.linkedin.com/in/aiym-aibekova-457033287/",
  resume: "/AiymAibekova_Resume.pdf",
  highlights: [
    "Microsoft SWE Intern · 2026",
    "Accepted · CCSC-NW 2026",
    "CS + Economics · PLU",
  ],
};

export const projects = [
  {
    id: "microsoft",
    title: "Microsoft — On-call assistant for IcM triage",
    category: "Software",
    role: "Software Engineer Intern",
    problem:
      "On-call engineers need to understand IcM alerts quickly and decide what is worth investigating without getting lost in alert noise.",
    evidence:
      "LLM-powered assistant for alert triage, with an estimated 30–40% reduction in triage time.",
    status: "2026",
    links: [],
  },
  {
    id: "admission",
    title: "PLU Admission CRM — student information experience",
    category: "Product",
    role: "Admission CRM Student Intern",
    problem:
      "Prospective students and staff needed clearer, faster, and more reliable experiences in the admissions portal and email workflows.",
    evidence:
      "Updated Slate portal templates, UI/UX details, HTML/Liquid email content, and T-SQL queries for dynamic student data used in public views.",
    status: "2026–present",
    links: [],
  },
  {
    id: "nextwave",
    title: "The New Technologists Fellowship · NextWave Society / Cyborg Mobile",
    category: "Fellowship",
    role: "Fellowship Intern",
    problem:
      "A four-week team challenge explored solutions to rising commercial tobacco, vaping, and marijuana use among King County youth ages 14–20.",
    evidence:
      "Built an exploratory dashboard incorporating mentor feedback while the team considered a different solution direction.",
    status: "Spring 2026",
    links: [],
  },
  {
    id: "data-engineering",
    title: "Data Engineering Internship",
    category: "Data",
    role: "Data Engineering Intern",
    problem:
      "Operational systems needed cleaner, more reliable data flows to support decisions across marketplace activity and issue resolution.",
    evidence:
      "Worked on data and workflow support across ordering, inventory, and operational reporting with a strong focus on reliability and clarity.",
    status: "2025–2026",
    links: [],
  },
  {
    id: "coding-with-kids",
    title: "Coding With Kids",
    category: "Mentorship",
    role: "Instructor",
    problem:
      "Students needed approachable, hands-on ways to learn programming and build confidence with technical concepts.",
    evidence:
      "Taught engaging coding projects in Python and MakeCode to help students explore logic, creativity, and problem-solving.",
    status: "Summer 2025",
    links: [],
  },
];

export const experience = [
  {
    title: "Software Engineer Intern",
    company: "Microsoft, Substrate (MRS)",
    location: "Redmond, WA",
    period: "2026",
    bullets: [
      "Built an LLM-powered on-call assistant for IcM alerts to summarize context and support triage decisions.",
      "Worked on a workflow that aims to reduce investigation overhead for engineers handling high-volume alert signals.",
    ],
  },
  {
    title: "Admission CRM Student Intern",
    company: "PLU Office of Admission",
    location: "Tacoma, WA",
    period: "2026–present",
    bullets: [
      "Updated admission tool experiences using Slate, HTML/Liquid, and front-end UX refinements.",
      "Used T-SQL and student-data logic to build cleaner, more reliable public-facing views and templates.",
    ],
  },
  {
    title: "Fellowship Intern",
    company: "The New Technologists Fellowship · NextWave Society / Cyborg Mobile",
    location: "Seattle, WA",
    period: "Spring 2026",
    bullets: [
      "Collaborated on a four-week team challenge exploring community solutions for rising youth exposure to commercial tobacco, vaping, and marijuana.",
      "Built an exploratory dashboard with mentor feedback while the team evaluated a different solution direction.",
    ],
  },
  {
    title: "Data Engineering Intern",
    company: "Data Engineering Internship",
    location: "Operations-focused",
    period: "2025–2026",
    bullets: [
      "Supported data and workflow reliability across operational reporting and inventory-related systems.",
      "Focused on cleaner, more understandable data flows that help teams make faster decisions.",
    ],
  },
  {
    title: "Instructor",
    company: "Coding With Kids",
    location: "Seattle area",
    period: "Summer 2025",
    bullets: [
      "Taught hands-on coding projects that made programming and logic approachable for students.",
      "Used Python and MakeCode activities to build confidence and engagement in early technical learning.",
    ],
  },
];

export const researchSummary = {
  title: "Stock Price Prediction Using ML with Historical Data and Sentiment Analysis",
  status: "Accepted · CCSC-NW 2026",
  authors: "Aiym Aibekova, Hoda Jalalediny, Daniel Ma, and Renzhi Cao",
  conference: "CCSC-NW 2026",
  summary:
    "This project explores whether historical market data and sentiment signals can be combined into a more useful stock-price forecasting approach. The research makes room for practical tradeoffs, feature choices, and honest evaluation limits rather than overclaiming predictive certainty.",
};
