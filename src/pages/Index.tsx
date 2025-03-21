
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { PersonalInfo, Experience as ExperienceType, Skill, Project } from '@/lib/types';

// Amin's LinkedIn data
const personalInfo: PersonalInfo = {
  fullName: "Mohammad Amin Dehdashti",
  title: "Software Engineer | Full Stack Developer | Cloud Engineer",
  bio: "Passionate software engineer with expertise in full stack development and cloud engineering. Skilled in React, TypeScript, Node.js, and AWS cloud services. Currently pursuing a Master's in Computer Science & Engineering at Santa Clara University.",
  contact: {
    email: "amin.dehdashti@gmail.com",
    linkedin: "https://linkedin.com/in/22amin",
    github: "https://github.com/CodingWithAmin",
    location: "San Jose, California"
  }
};

const experiences: ExperienceType[] = [
  {
    id: "exp1",
    company: "Enel North America",
    position: "Software Engineer Intern",
    location: "San Francisco, CA",
    startDate: "2023-06-01",
    endDate: "2023-09-01",
    description: [
      "Developed a distributed IoT notification service enabling communication between controllers and mobile applications without using third-party platforms like Firebase.",
      "Built a high-performance Kafka and Redis-based broker system using a publish/subscribe model.",
      "Implemented AWS Lambda functions with API Gateway endpoints to handle real-time data processing.",
      "Created comprehensive unit tests achieving 85% code coverage using Jest framework."
    ],
    skills: ["TypeScript", "Node.js", "Kafka", "Redis", "AWS Lambda", "API Gateway", "Jest"]
  },
  {
    id: "exp2",
    company: "Enel Green Power",
    position: "QA Automation Engineer",
    location: "Rome, Italy",
    startDate: "2021-01-01",
    endDate: "2022-12-31",
    description: [
      "Led the development of an End-to-End test automation framework for Enel Green Power's distributed platform, achieving 65% reduction in testing time.",
      "Implemented automated test suites using Selenium and Playwright with TypeScript, increasing test coverage by 40%.",
      "Established a CI/CD pipeline for automated testing using Jenkins, improving code quality and deployment frequency.",
      "Collaborated with cross-functional teams to identify and resolve critical system defects, enhancing product reliability."
    ],
    skills: ["TypeScript", "Selenium", "Playwright", "Jenkins", "CI/CD", "E2E Testing"]
  },
  {
    id: "exp3",
    company: "Fanap Co.",
    position: "Software Developer",
    location: "Tehran, Iran",
    startDate: "2018-09-01",
    endDate: "2020-12-31",
    description: [
      "Designed and developed React-based front-end applications for financial services platforms with 100K+ daily users.",
      "Implemented responsive UI components and optimized application performance, improving load times by 35%.",
      "Collaborated with back-end developers to integrate RESTful APIs and GraphQL services.",
      "Participated in Agile development processes, including daily stand-ups, sprint planning, and retrospectives."
    ],
    skills: ["React", "JavaScript", "HTML/CSS", "RESTful APIs", "GraphQL", "Agile"]
  }
];

const skills: Skill[] = [
  // Technical Skills
  { name: "React", level: 5, category: "technical" },
  { name: "TypeScript", level: 5, category: "technical" },
  { name: "JavaScript", level: 5, category: "technical" },
  { name: "Node.js", level: 4, category: "technical" },
  { name: "AWS", level: 4, category: "technical" },
  { name: "SQL", level: 4, category: "technical" },
  { name: "NoSQL", level: 3, category: "technical" },
  { name: "Python", level: 3, category: "technical" },
  { name: "Docker", level: 3, category: "technical" },
  { name: "Kubernetes", level: 2, category: "technical" },
  
  // Soft Skills
  { name: "Problem Solving", level: 5, category: "soft" },
  { name: "Communication", level: 4, category: "soft" },
  { name: "Teamwork", level: 5, category: "soft" },
  { name: "Leadership", level: 4, category: "soft" },
  { name: "Adaptability", level: 5, category: "soft" },
  
  // Tools
  { name: "Git", level: 5, category: "tool" },
  { name: "Jenkins", level: 4, category: "tool" },
  { name: "Jira", level: 4, category: "tool" },
  { name: "VS Code", level: 5, category: "tool" },
  { name: "Postman", level: 4, category: "tool" },
  
  // Languages
  { name: "English", level: 4, category: "language" },
  { name: "Persian", level: 5, category: "language" }
];

const projects: Project[] = [
  {
    id: "proj1",
    title: "IoT Notification Service",
    description: "A distributed notification system for IoT devices using Kafka and Redis, enabling real-time communication between controllers and mobile applications.",
    tags: ["TypeScript", "Node.js", "Kafka", "Redis", "AWS"],
    imageUrl: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f",
    github: "https://github.com/CodingWithAmin/iot-notification-service"
  },
  {
    id: "proj2",
    title: "E2E Test Automation Framework",
    description: "A comprehensive end-to-end testing framework for distributed platforms, featuring parallel test execution and detailed reporting.",
    tags: ["TypeScript", "Selenium", "Playwright", "Jenkins", "CI/CD"],
    imageUrl: "https://images.unsplash.com/photo-1593642532400-2682810df593",
    github: "https://github.com/CodingWithAmin/test-automation-framework"
  },
  {
    id: "proj3",
    title: "Financial Dashboard",
    description: "A responsive React-based dashboard for financial services with real-time data visualization and user authentication.",
    tags: ["React", "TypeScript", "REST API", "Chart.js"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    link: "https://financial-dashboard-demo.netlify.app",
    github: "https://github.com/CodingWithAmin/financial-dashboard"
  },
  {
    id: "proj4",
    title: "Cloud Resource Manager",
    description: "A web application to monitor and manage AWS cloud resources, with cost optimization recommendations and automated scaling.",
    tags: ["React", "Node.js", "AWS SDK", "Terraform"],
    imageUrl: "https://images.unsplash.com/photo-1480694313141-fce5e697ee25",
    github: "https://github.com/CodingWithAmin/cloud-resource-manager"
  },
  {
    id: "proj5",
    title: "Smart Home Controller",
    description: "A mobile-first application to control and monitor smart home devices with automation features and energy consumption tracking.",
    tags: ["React Native", "Firebase", "IoT Protocols", "Redux"],
    imageUrl: "https://images.unsplash.com/photo-1585503418537-88331351ad99",
    link: "https://smart-home-demo.netlify.app",
    github: "https://github.com/CodingWithAmin/smart-home-controller"
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
    document.title = `${personalInfo.fullName} | Portfolio`;
    
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
        <Experience experiences={experiences} />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Contact contactInfo={personalInfo.contact} />
      </main>
      <Footer contactInfo={personalInfo.contact} fullName={personalInfo.fullName} />
    </div>
  );
};

export default Index;
