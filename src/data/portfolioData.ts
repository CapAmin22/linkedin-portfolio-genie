
import { PersonalInfo, Experience, Skill, Project, Education, Certification, Award } from '@/lib/types';

export const personalInfo: PersonalInfo = {
  fullName: "Amin Shaikh",
  title: "Product Management Enthusiast & Polymath",
  bio: "Product Management professional with expertise in UX/UI, ideation, and data-driven decision making.",
  avatar: "/lovable-uploads/AminPhoto PPZ1 (1) (1)",
  aboutImage: "/lovable-uploads/Amin3 (1)",
  summary: [
    "I'm Amin Shaikh, a passionate Product Manager with a strong background in product integration, data analytics, and user-centric design. With over three years of experience, I specialize in leveraging technology, UX/UI insights, and market research to build impactful digital solutions.",
    "My journey spans founding 22Poultry, optimizing user engagement at Shop Online New York, and leading AI-driven profile matching at TheEndorse. I've worked on API integrations, CI/CD pipelines, and payment processing, ensuring seamless cross-functional collaboration between engineering, design, and business teams.",
    "I thrive on solving complex problems, refining workflows, and delivering data-driven decisions that enhance product efficiency and user experience. My work is driven by a passion for innovation, emerging technologies, and continuous learning. Let's connect and build something great!"
  ],
  achievements: [
    "Founded and scaled 22Poultry, a SaaS platform delivering real-time poultry stats, bank loan solutions, training, and market insights that transform traditional industries.",
    "Led cross-functional teams at Helpy Moto to integrate advanced payment and service solutions, reducing refund processing errors by 10% and enhancing system reliability.",
    "Drove user-centric product development at Shop Online New York and TheEndorse by leveraging data analytics, UX/UI insights, and agile methodologies to boost engagement and retention.",
    "Recognized as an innovative leader with a strong track record in integration and data-driven decision making.",
    "Passionate about emerging technologies, AI/ML, and fintech, with a commitment to continuous learning and impactful product development."
  ],
  contact: {
    email: "shaikhaminrehman302@outlook.com",
    phone: "+91 8329556730",
    linkedin: "https://linkedin.com/in/22amin",
    website: "www.linkedin.com/in/22amin",
    location: "Bengaluru, Karnataka, India"
  }
};

export const experiences: Experience[] = [
  {
    id: "exp1",
    company: "22Poultry",
    position: "Founder",
    location: "India",
    startDate: "2023-12-01",
    endDate: null,
    description: [
      "Developing an innovative open-source information platform for the poultry industry.",
      "Features include: Real-Time Poultry Statistics, Bank Loan and Financial Assistance, Training and Education, Industry News and Updates, Networking for Stakeholders, Weather Forecast and Impact Analysis."
    ],
    skills: ["Product Management", "UX/UI Design", "Data Analysis", "Entrepreneurship", "Strategic Planning"]
  },
  {
    id: "exp2",
    company: "Shop Online New York",
    position: "Product Analyst",
    location: "New York, New York, United States",
    startDate: "2024-02-01",
    endDate: "2024-07-31",
    description: [
      "Conducted in-depth customer journey analysis to identify key pain points and areas for improvement.",
      "Developed and maintained key performance indicators (KPIs) for website traffic, customer engagement, and conversion rates.",
      "Performed A/B testing on website elements and marketing campaigns to optimize user experience and drive conversions.",
      "Analyzed customer data to identify trends, segment customer groups, and optimize marketing efforts.",
      "Developed predictive models to forecast demand, identify churn risks, and optimize inventory levels.",
      "Leveraged data visualization tools to communicate insights effectively to stakeholders.",
      "Collaborated with cross-functional teams (engineering, marketing, sales) to translate data insights into actionable product recommendations."
    ],
    skills: ["Product Analytics", "Customer Journey Mapping", "A/B Testing", "Data Visualization", "Predictive Modeling"]
  },
  {
    id: "exp3",
    company: "TheEndorse",
    position: "Product Management Intern",
    location: "India",
    startDate: "2024-06-01",
    endDate: "2024-09-30",
    description: [
      "Contributing to an AI-powered employee referral platform that leverages AI and machine learning models for resume scanning, resume creation, and optimizing employee networks to meet organizational recruitment needs.",
      "Our solution is designed to help companies reduce reliance on HR recruiters & outsourcing, thereby saving both time and money."
    ],
    skills: ["AI/ML", "Product Management", "HR Tech", "Resume Scanning", "Employee Networks"]
  },
  {
    id: "exp4",
    company: "GrowthSchool",
    position: "Product Management Intern",
    location: "India",
    startDate: "2023-11-01",
    endDate: "2024-04-30",
    description: [
      "Led brainstorming sessions, market research, and user research initiatives to drive product strategy and MVP development.",
      "Developed wireframes and prototypes using Figma, ensuring user-centric design improvements and rapid iteration.",
      "Leveraged Azure AI Vision for enhanced image matching by integrating its optical capabilities with OCR for inputs optimized for general non-document visuals and the Document Intelligence read model for text-heavy structured and digital documents.",
      "Established key performance indicators (KPIs) and success metrics, ensuring clear communication of product performance across all stakeholders."
    ],
    skills: ["Product Strategy", "Figma", "Azure AI Vision", "OCR", "KPI Tracking", "User Research"]
  },
  {
    id: "exp5",
    company: "Banto Technologies",
    position: "Frontend Business Analyst",
    location: "India",
    startDate: "2022-04-01",
    endDate: "2024-03-31",
    description: [
      "Built the 2 Products for MSME (Tution classes Web Application, built web app for local furniture artist).",
      "Led requirement gathering meetings and maintained client relations (Web App projects for different clients.)",
      "Collaborated with project stakeholders and SMEs to document requirements and system specifications.",
      "Created low-fidelity wireframes using Figma and managed projects. Managed cross-functional teams.",
      "Worked as a Product Owner on projects, prioritizing features and refining documents based on new requirements."
    ],
    skills: ["Business Analysis", "Figma", "Client Relations", "Requirements Gathering", "Product Ownership"]
  },
  {
    id: "exp6",
    company: "HELPY_MOTO",
    position: "Product Integration Specialist",
    location: "India",
    startDate: "2021-09-01",
    endDate: "2022-02-28",
    description: [
      "Product integration efforts to deliver a seamless user experience across multiple platforms, aligning technical capabilities with the overall product vision.",
      "Developed and implemented an automated API testing protocol using Postman that identified integration glitches early, reducing refund processing errors by 10% and enhancing overall system reliability.",
      "Evaluated and integrated essential external tools to enhance platform functionality while keeping the user journey intuitive.",
      "Focused on maintaining data accuracy and operational efficiency through streamlined, user-friendly solutions.",
      "Championed agile methodologies and continuous improvement strategies, significantly reducing time-to-market."
    ],
    skills: ["API Testing", "Postman", "Product Integration", "Agile Methodologies", "User Experience"]
  }
];

export const skills: Skill[] = [
  // Technical Skills
  { name: "Product Management", level: 5, category: "technical" },
  { name: "UX/UI Design", level: 4, category: "technical" },
  { name: "Data Analysis", level: 4, category: "technical" },
  { name: "Product Strategy", level: 5, category: "technical" },
  { name: "Figma", level: 4, category: "technical" },
  { name: "Wireframing", level: 4, category: "technical" },
  { name: "Miro", level: 3, category: "technical" },
  { name: "Python", level: 3, category: "technical" },
  { name: "SQL", level: 3, category: "technical" },
  { name: "Excel", level: 4, category: "technical" },
  
  // Data Tools
  { name: "Amplitude", level: 4, category: "tool" },
  { name: "Mixpanel", level: 4, category: "tool" },
  { name: "Google Analytics", level: 4, category: "tool" },
  { name: "Power BI", level: 3, category: "tool" },
  { name: "JIRA", level: 4, category: "tool" },
  { name: "Confluence", level: 4, category: "tool" },
  { name: "ClickUp", level: 3, category: "tool" },
  { name: "Trello", level: 3, category: "tool" },
  { name: "Asana", level: 3, category: "tool" },
  
  // Soft Skills
  { name: "Problem Solving", level: 5, category: "soft" },
  { name: "Decision Making", level: 5, category: "soft" },
  { name: "Feature Prioritization", level: 5, category: "soft" },
  { name: "Go-to-Market Strategy", level: 4, category: "soft" },
  { name: "Team Leadership", level: 4, category: "soft" },
  { name: "Cross-functional Collaboration", level: 5, category: "soft" },
  
  // Languages
  { name: "English", level: 5, category: "language" },
  { name: "Hindi", level: 5, category: "language" }
];

export const projects: Project[] = [
  {
    id: "proj1",
    title: "22POULTRY",
    description: "An innovative open-source information platform for the poultry industry, providing real-time statistics, financial assistance information, training resources, and industry updates.",
    tags: ["Product Management", "UX/UI", "Data Analytics", "Strategic Vision"],
    imageUrl: "https://images.unsplash.com/photo-1569431059518-1c327657272c",
    github: "https://github.com/22amin/22poultry"
  },
  {
    id: "proj2",
    title: "AI Employee Referral Platform",
    description: "An AI-powered platform that streamlines the recruitment process by leveraging machine learning for resume scanning, creation, and optimizing employee networks.",
    tags: ["AI/ML", "HR Tech", "Product Management", "User Experience"],
    imageUrl: "https://images.unsplash.com/photo-1568992688065-536aad8a12f6",
    link: "https://theendorse.com"
  },
  {
    id: "proj3",
    title: "MSME Web Applications",
    description: "Developed multiple web applications for small businesses, including a platform for tutoring classes and a showcase site for a local furniture artist.",
    tags: ["Business Analysis", "Figma", "Front-end Development", "UX Design"],
    imageUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
    github: "https://github.com/22amin/msme-web-apps"
  },
  {
    id: "proj4",
    title: "Product Integration System",
    description: "Developed an automated API testing protocol that identified integration issues early, reducing error rates and improving system reliability.",
    tags: ["API Testing", "Postman", "Integration", "Quality Assurance"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    github: "https://github.com/22amin/api-integration-system"
  },
  {
    id: "proj5",
    title: "Customer Journey Analysis Tool",
    description: "A data visualization tool for analyzing customer journeys, identifying pain points, and generating actionable recommendations to improve conversion rates.",
    tags: ["Data Analysis", "User Experience", "A/B Testing", "Visualization"],
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    link: "https://customer-journey-tool.netlify.app",
    github: "https://github.com/22amin/customer-journey-analysis"
  },
  {
    id: "proj6",
    title: "Product Analytics Dashboard",
    description: "Interactive dashboard for product managers to track user engagement metrics, feature adoption, and conversion funnel analytics in real-time.",
    tags: ["Data Visualization", "Product Analytics", "Dashboard Design", "User Metrics"],
    imageUrl: "https://images.unsplash.com/photo-1553484771-11998c592b9c",
    link: "https://product-analytics-dashboard.vercel.app"
  }
];

export const education: Education[] = [
  {
    institution: "Savitribai Phule Pune University",
    degree: "Bachelor's degree",
    field: "Computer Science",
    startDate: "2019-04-01",
    endDate: "2021-10-30",
    location: "Pune, India"
  },
  {
    institution: "GrowthSchool",
    degree: "Certificate",
    field: "Product Management",
    startDate: "2023-11-01",
    endDate: "2024-04-30",
    location: "India"
  }
];

export const certifications: Certification[] = [
  {
    name: "Aha! PM Certification",
    issuer: "Aha.io",
    date: "2023",
    description: "Strengthened my skills in identifying ideal customers and ensuring product-market fit. Building product strategies that match vision and market needs, and designing effective acquisition funnels and measuring customer satisfaction."
  },
  {
    name: "Project Management & Business Analysis Certification",
    issuer: "IIBA, LinkedIn & Microsoft",
    date: "2023",
    description: "These certifications in BA, DA, Communication, and Project management gave me overall Knowledge and Skills, which is foundation for Good PM like time management, communication, requirement gathering, data analysis, and lot more other crucial skills."
  }
];

export const awards: Award[] = [
  {
    title: "Reducing refund processing errors",
    issuer: "Helpy Moto",
    date: "",
    description: "Developed and implemented an automated API testing protocol using Postman that identified integration glitches early, reducing refund processing errors by 10% and enhancing overall system reliability at Helpy Moto.",
    highlight: true
  },
  {
    title: "Boosted retention",
    issuer: "Shop Online New York",
    date: "",
    description: "Conducted in-depth customer journey and funnel analyses that boosted retention by 15% and reduced churn by 10% at Shop Online New York"
  },
  {
    title: "Best client management award",
    issuer: "Banao Tech",
    date: "",
    description: "Won recognition for exceptional client management skills and relationship building."
  },
  {
    title: "Top 1% at GrowthSchool",
    issuer: "GrowthSchool",
    date: "",
    description: "Recognized for academic excellence and outstanding performance."
  }
];
