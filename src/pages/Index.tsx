
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { PersonalInfo, Experience as ExperienceType, Skill, Project, Education as EducationType, Certification, Award } from '@/lib/types';
import EducationSection from '@/components/Education';
import Certifications from '@/components/Certifications';
import Awards from '@/components/Awards';

const personalInfo: PersonalInfo = {
  fullName: "Amin Shaikh",
  title: "Product Management | Founder | UX/UI | Ideation | Data-Driven Decision Making | Product Road-Mapping | GTM | Polymath",
  bio: "Product Management professional with expertise in UX/UI, ideation, and data-driven decision making.",
  summary: [
    "Passionate Product Management Professional | Problem Solver | User Experience Innovator",
    "I thrive on identifying and solving real-world challenges through strategic product development. With a robust background in computer science and over three years of experience in product management and business analysis, I transform complex problems into elegant, user-centric solutions.",
    "My professional journey spans diverse ecosystems—from B2B to B2C start-ups—where I've consistently demonstrated:",
    "Strategic Vision: Pioneering projects like 22POULTRY, an innovative open-source information platform for the poultry industry, showcasing my ability to identify and address market gaps.",
    "Cross-Functional Excellence: Proven track record of collaborating with global teams, aligning stakeholders, and driving product vision across different time zones and technological landscapes.",
    "Data-Driven Approach: Leveraging advanced analytics, user research, and tools like Google Analytics, Mixpanel, CleverTap, and Amplitude to make informed product decisions and track performance metrics."
  ],
  achievements: [
    "Led cross-functional teams to deliver product features that increased user engagement by 35%",
    "Recognized as 'Emerging Product Leader' by GrowthSchool in 2023",
    "National Rowing Champion representing university team",
    "Speaker at Product Management Summit 2023 on 'Data-Driven Decision Making in Product Development'"
  ],
  contact: {
    email: "shaikhaminrehman302@outlook.com",
    phone: "+91 8329556730",
    linkedin: "https://linkedin.com/in/22amin",
    website: "www.linkedin.com/in/22amin",
    location: "Bengaluru, Karnataka, India"
  }
};

const experiences: ExperienceType[] = [
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

const skills: Skill[] = [
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

const projects: Project[] = [
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

const education: EducationType[] = [
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

const certifications: Certification[] = [
  {
    name: "Power Essential in Business Analysis",
    issuer: "Microsoft and LinkedIn",
    date: "2023"
  },
  {
    name: "Business Analysis Essentials",
    issuer: "LinkedIn",
    date: "2023"
  },
  {
    name: "Business Benefits Realization Foundations",
    issuer: "LinkedIn",
    date: "2023"
  },
  {
    name: "Data Modeling For Power BI",
    issuer: "Microsoft",
    date: "2022"
  },
  {
    name: "UX Studies",
    issuer: "Udemy",
    date: "2022"
  }
];

const awards: Award[] = [
  {
    title: "National Rowing Championship",
    issuer: "Indian Rowing Federation",
    date: "2022",
    description: "First place in the collegiate rowing championship, representing university team in the national competition."
  },
  {
    title: "Emerging Product Leader",
    issuer: "GrowthSchool",
    date: "2023",
    description: "Recognized for exceptional leadership in product management and innovation."
  },
  {
    title: "Best Product Pitch",
    issuer: "Startup India Hackathon",
    date: "2023",
    description: "Won first place for the most innovative product pitch at the national hackathon."
  },
  {
    title: "NCC Senior Division Certificate",
    issuer: "National Cadet Corps",
    date: "2020",
    description: "Completed senior division training program with distinction, demonstrating leadership and discipline."
  }
];

const Index: React.FC = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const href = this.getAttribute('href');
        if (!href) return;
        
        const target = document.querySelector(href);
        if (!target) return;
        
        window.scrollTo({
          top: (target as HTMLElement).offsetTop,
          behavior: 'smooth'
        });
      });
    });
    
    // Change page title
    document.title = `${personalInfo.fullName} | Product Manager Portfolio`;
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-background antialiased">
      <Header />
      <main>
        <Hero personalInfo={personalInfo} />
        <About personalInfo={personalInfo} />
        <div className="relative py-12 bg-secondary/10">
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background to-transparent"></div>
          <Experience experiences={experiences} />
          <Projects projects={projects} />
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent"></div>
        </div>
        <Skills skills={skills} />
        <div className="relative py-12 bg-secondary/20">
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background to-transparent"></div>
          <EducationSection education={education} />
          <Certifications certifications={certifications} />
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent"></div>
        </div>
        <Awards awards={awards} />
        <Contact contactInfo={personalInfo.contact} />
      </main>
      <Footer contactInfo={personalInfo.contact} fullName={personalInfo.fullName} />
    </div>
  );
};

export default Index;
