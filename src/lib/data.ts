// src/lib/data.ts
// Real data from Ankit Yadav's resume

export const personalInfo = {
  name: "Ankit Yadav",
  title: "Full Stack Developer",
  roles: [
    "Full Stack Developer",
    "Data Analyst",
    "Software Engineer",
    "ML Engineer",
    "Problem Solver",
  ],
  email: "ankityyadaav@gmail.com", // Replace with real email
  phone: "+91-9170385562",   // Replace with real phone
  location: "Delhi NCR, India",
  github: "https://github.com/Ankityy2",
  linkedin: "https://www.linkedin.com/in/ankity2/",
  summary:
    "MCA graduate from CDAC-GGSIPU Noida (GPA: 8.04) with a strong foundation in Mathematics and Computer Science. Passionate about building scalable full-stack applications, data-driven solutions, and intelligent systems. Experienced across Python, SQL, React, and cloud technologies with hands-on project work spanning ML, analytics dashboards, and voice AI.",
};

export const skills = {
  languages: [
    { name: "Python", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "TypeScript", level: 75 },
    { name: "SQL", level: 88 },
    { name: "Java", level: 72 },
    { name: "C/C++", level: 70 },
    { name: "HTML/CSS", level: 88 },
  ],
  frameworks: [
    { name: "React.js", level: 82 },
    { name: "Node.js", level: 78 },
    { name: "Next.js", level: 72 },
    { name: "Flask", level: 75 },
    { name: "Tailwind CSS", level: 85 },
  ],
  data: [
    { name: "Power BI", level: 80 },
    { name: "MySQL", level: 85 },
    { name: "Pandas / NumPy", level: 84 },
    { name: "Scikit-learn", level: 78 },
    { name: "Matplotlib", level: 80 },
  ],
  tools: [
    { name: "Git / GitHub", level: 85 },
    { name: "VS Code", level: 90 },
    { name: "Postman", level: 80 },
    { name: "Figma", level: 65 },
    { name: "Linux", level: 72 },
  ],
  icons: [
    "Python", "JavaScript", "TypeScript", "React", "Next.js", "Node.js",
    "SQL", "MySQL", "Power BI", "Git", "Tailwind CSS", "Flask",
    "Scikit-learn", "Pandas", "Linux", "Figma", "VS Code", 
  ],
};

export const projects = [
  {
    id: 1,
    title: "Predictive Customer Segmentation and Churn Predication",
    description:
      "ML-powered customer segmentation system using K-Means and DBSCAN clustering on 50k+ data points. Achieved 91% silhouette score with interactive dashboards for business insights.",
    tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "K-Means", "DBSCAN"],
    category: "Machine Learning",
    color: "#00f5ff",
    github: "https://github.com/Ankityy2",
    live: null,
    highlights: [
      "91% silhouette clustering score",
      "50,000+ data points processed",
      "Interactive visualization dashboards",
      "Business-ready segmentation reports",
    ],
  },
  {
  id: 2,
  title: "RealEstate Investment Advisor",
  description:
    "End-to-end ML platform with XGBoost classifier (99.4% accuracy) and Linear Regression for 5-year price prediction. Features MLflow experiment tracking, interactive Streamlit web app, and EDA on 2,50,000 Indian housing records.",
  tech: ["Python", "XGBoost", "Scikit-learn", "MLflow", "Streamlit", "Pandas", "Plotly"],
  category: "Machine Learning",
  color: "#8b5cf6",
  github: "https://github.com/Ankityy2/RealEstate_Advisor_Project",
  live: null,
  highlights: [
    "99.4% classification accuracy with XGBoost",
    "Future price prediction with R² = 1.0",
    "6 ML models tracked via MLflow",
    "Interactive Streamlit prediction app",
  ],
},
{
  id: 3,
  title: "Cricbuzz LiveStats Dashboard",
  description:
    "Real-time cricket analytics platform integrating Cricbuzz REST API with SQLite database. Features live match scores with interactive scorecards, 25 SQL practice queries (Beginner to Advanced), full CRUD operations on player database, and ICC player rankings across Test, ODI & T20I formats.",
  tech: ["Python", "Streamlit", "SQLite", "REST API", "Pandas", "Requests", "Python-dotenv"],
  category: "Sports Analytics",
  color: "#16a34a",
  github: "https://github.com/Ankityy2/cricbuzz-livestats",
  live: null,
  highlights: [
    "Live match scores & batting/bowling scorecards via Cricbuzz API",
    "25 SQL queries — Beginner, Intermediate & Advanced analytics",
    "Full CRUD operations on player & match database",
    "Multi-page Streamlit dashboard with real-time data",
  ],
},
  {
    id: 4,
    title: "Fitness Analytics Dashboard",
    description:
      "End-to-end analytics platform with MySQL backend, Power BI dashboards, and DAX measures. Tracks user fitness metrics with trend analysis and KPI monitoring across 10+ visual report pages.",
    tech: ["MySQL", "Power BI", "DAX", "SQL", "Data Modeling"],
    category: "Data Analytics",
    color: "#8b5cf6",
    github: "https://github.com/Ankityy2/Starva-fitness-data-analysis",
    live: null,
    highlights: [
      "10+ interactive Power BI report pages",
      "Custom DAX measures & KPIs",
      "Optimized MySQL data warehouse",
      "Trend analysis & forecasting",
    ],
  },
  {
    id: 5,
    title: "JARVIS Voice Assistant",
    description:
      "Intelligent voice assistant powered by OpenAI GPT-3.5, with speech-to-text, NLP intent parsing, real-time web search integration, and task automation capabilities.",
    tech: ["Python", "OpenAI GPT-3.5", "Speech Recognition", "NLP", "Flask"],
    category: "AI / NLP",
    color: "#fbbf24",
    github: "https://github.com/Ankityy2",
    live: null,
    highlights: [
      "GPT-3.5 powered conversational AI",
      "Real-time speech-to-text processing",
      "Web search & task automation",
      "Context-aware multi-turn dialogue",
    ],
  },
  {
    id: 6,
    title: "AK Clothing E-Commerce",
    description:
      "Full-stack e-commerce website for personal clothing brand AK Clothing. Features 3D interactive product showcasing, cart drawer, responsive design, and smooth animations.",
    tech: ["HTML", "CSS", "JavaScript", "Three.js", "Tailwind CSS"],
    category: "Full Stack",
    color: "#f43f5e",
    github: "https://github.com/Ankityy2",
    live: null,
    highlights: [
      "3D interactive product display",
      "Fully functional cart system",
      "Mobile-first responsive design",
      "Smooth GSAP animations",
    ],
  },
];

export const experience = [
  {
    id: 1,
    role: "MCA Graduate Trainee (Self-directed)",
    company: "CDAC–GGSIPU Noida",
    duration: "2024 – 2026",
    type: "Academic / Project",
    description:
      "Completed intensive MCA program with specializations in Full Stack Development, Data Analytics, Cloud Computing, and Machine Learning. Built production-grade projects across multiple tech stacks.",
    achievements: [
      "GPA: 8.04 — consistently strong academic performance",
      "Led 3 capstone projects spanning ML, analytics, and AI",
      "Studied Cloud Computing: Kubernetes, Edge AI, MEC, geo-distributed systems",
      
    ],
  },
  {
    id: 2,
    role: " Developer",
    company: "AK Clothing",
    duration: "2024 – 2025",
    type: "Entrepreneurial",
    description:
      "Founded and runs AK Clothing — a small clothing brand with a custom-built e-commerce website. Handles product management, website development, and customer operations end-to-end.",
    achievements: [
      "Built full e-commerce platform from scratch",
      "Manages inventory, orders, and customer service",
      "Applies tech skills to real business problems",
      "Demonstrates product ownership and entrepreneurship",
    ],
  },
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "CDAC–GGSIPU, Noida",
    duration: "2024 – 2026",
    gpa: "8.04 / 10",
    highlights: [
      "Full Stack Development",
      "Cloud Computing",
      "Machine Learning",
      "Data Analyst",
      "Database Management",
      "Software Engineering",
    ],
  },
  {
    degree: "B.Sc. Honours in Mathematics",
    institution: "Maharaja Suhel Dev State University",
    duration: "2021 – 2024",
    gpa: "First Division",
    highlights: [
      "Advanced Calculus & Linear Algebra",
      "Probability & Statistics",
      "Discrete Mathematics",
      "Numerical Methods",
    ],
  },
];

export const certifications = [
  {
    name: "Python for Data Science",
    issuer: "Udemy",
    year: "2025",
    color: "#00f5ff",
  },
  {
    name: "SQL for Data Analytics",
    issuer: "Udemy",
    year: "2025",
    color: "#8b5cf6",
  },
  {
    name: "Power BI Desktop",
    issuer: "Udemy",
    year: "2024",
    color: "#fbbf24",
  },
  {
    name: "Machine Learning Foundations",
    issuer: " Coursera",
    year: "2024",
    color: "#f43f5e",
  },
  {
    name: "Big Data & Data Science Bootcamp",
    issuer: "CDAC Noida",
    year: "2025",
    color: "#10b981",
  },
   {
    name: "Cloud Computing Bootcamp",
    issuer: "CDAC Noida",
    year: "2025",
    color: "#10b981",
  },
   {
    name: "AWS - Solutions Architecture Job Simulation",
    issuer: "Forage",
    year: "2025",
    color: "#10b981",
  },
  {
    name: "Tata - GenAI Powered Data Analytics Job Simulation",
    issuer: "Forage",
    year: "2025",
    color: "#10b981",
  },
  {
    name: "Tata Group - Data Visualisation: Empowering Business with Effective Insights Job Simulation",
    issuer: "Forage",
    year: "2025",
    color: "#10b981",
  },
  {
    name: "Introduction to Artificial Intelligence",
    issuer: "Linkedln Learning",
    year: "2024",
    color: "#10b981",
  },
  {
    name: "Software Engineering",
    issuer: "Sylor",
    year: "2026",
    color: "#10b981",
  },
   {
    name: "Edge Computing",
    issuer: "NAPTEL",
    year: "2026",
    color: "#10b981",
  },

  
];

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
