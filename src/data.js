export const profile = {
  name: "Fazil Ahamed S",
  role: "MERN Stack Developer",
  location: "Trichy, Tamil Nadu",
  summary:
    "I build full-stack web applications with MongoDB, Express.js, React.js and Node.js, from responsive interfaces to RESTful APIs. My background in data analytics and machine learning helps me solve problems with data.",
  email: "shake515187@gmail.com",
  phone: "8220818336",
  linkedin: "https://linkedin.com/in/fazil-ahamed-s-996445225",
  github: "https://github.com/Fazilahamed26",
};

export const facts = [
  ["8.36", "MCA CGPA"],
  ["2", "Internships"],
  ["3", "Projects"],
  ["4", "Certifications"],
];

export const projects = [
  {
    title: "Real Estate CRM",
    kind: "Full-stack web application",
    wide: true,
    points: [
      "Manages leads, properties, sales employees and bookings, with JWT-based role access for Admin and Sales users.",
      "Lead management with search, filtering, employee assignment and stage tracking, plus a Project → Building → Unit hierarchy with real-time availability.",
      "Booking system that prevents double bookings and updates statuses automatically, using FastAPI and SQLAlchemy REST APIs connected to a React (Axios) frontend.",
    ],
    tags: ["React.js", "FastAPI", "Python", "SQLite", "SQLAlchemy", "JWT"],
    link: "https://real-estate-crm-frontend-lrio.onrender.com/",
  },
  {
    title: "Expense Tracker",
    kind: "Web application",
    points: [
      "Expense tracking app with full CRUD functionality for managing personal expenses.",
      "User-friendly interface that organizes financial records for easier monitoring and reporting.",
    ],
    tags: ["MongoDB", "Express.js", "React.js", "Node.js"],
    link: "",
  },
  {
    title: "AI Disaster Predictor",
    kind: "Machine learning project",
    points: [
      "Machine learning model that predicts disasters from historical datasets, including preprocessing and feature engineering.",
      "Evaluated with standard ML metrics, with visual insights to support decisions.",
    ],
    tags: ["Python", "Scikit-Learn"],
    link: "https://ai-disaster-prediction-liard.vercel.app/",
  },
];

export const jobs = [
  {
    title: "Data Science Intern",
    org: "Suriya Informatics",
    when: "Dec 2025 – Mar 2026",
    points: [
      "Worked on AI-based disaster prediction with machine learning, including data preprocessing and exploratory data analysis.",
      "Built prediction models with Python and Scikit-Learn and visualized insights with Matplotlib and Seaborn.",
    ],
  },
  {
    title: "Python Data Analytics Intern",
    org: "iLife Technologies",
    when: "May 2025 – Jun 2025",
    points: [
      "Analyzed datasets with Python and Pandas, covering data cleaning, transformation and visualization.",
      "Produced analytical reports to support data-driven insights.",
    ],
  },
];

export const skills = [
  ["Web (MERN)", ["HTML5", "CSS3", "JavaScript", "React.js", "Node.js", "Express.js"]],
  ["Backend", ["FastAPI", "SQLAlchemy", "JWT Authentication"]],
  ["Databases", ["MongoDB", "MySQL", "SQLite"]],
  ["Languages", ["Python", "JavaScript", "SQL"]],
  ["Data analytics", ["Pandas", "NumPy", "Power BI", "Excel", "Data Cleaning", "Data Visualization", "EDA"]],
  ["Machine learning", ["Scikit-Learn", "Logistic Regression", "Random Forest", "SVM"]],
  ["Tools", ["Git/GitHub", "VS Code", "Jupyter Notebook", "Postman"]],
  ["Soft skills", ["Problem Solving", "Analytical Thinking", "Team Collaboration", "Communication", "Adaptability", "Time Management"], true],
];

export const education = [
  ["Master of Computer Applications", "St. Joseph’s College (Autonomous), Trichy", "2024 – 2026 · CGPA 8.36"],
  ["Bachelor of Computer Applications", "Jamal Mohamed College (Autonomous), Trichy", "2021 – 2024 · CGPA 8.40"],
];

export const certifications = [
  ["Python Training", "Besant Technologies, 2024"],
  ["30 Days MasterClass in Artificial Intelligence", "NoviTech R&D Pvt. Ltd., 2025"],
  ["Power BI Dashboard Boot Camp", "NoviTech R&D Pvt. Ltd., 2025"],
  ["30 Days MasterClass in Full Stack Development", "NoviTech R&D Pvt. Ltd., 2025"],
];
