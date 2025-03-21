
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

// Sample data - Replace with actual LinkedIn data
const personalInfo: PersonalInfo = {
  fullName: "John Doe",
  title: "Software Engineer & UI/UX Designer",
  bio: "Passionate software engineer with over 5 years of experience developing elegant solutions to complex problems. Specializing in modern web technologies and user-centered design.",
  contact: {
    email: "john.doe@example.com",
    linkedin: "https://linkedin.com/in/johndoe",
    github: "https://github.com/johndoe",
    location: "San Francisco, CA"
  }
};

const experiences: ExperienceType[] = [
  {
    id: "exp1",
    company: "Tech Innovations Inc.",
    position: "Senior Software Engineer",
    location: "San Francisco, CA",
    startDate: "2021-06-01",
    endDate: null,
    description: [
      "Led development of a customer-facing web application that increased user engagement by 45%.",
      "Architected and implemented a microservices infrastructure that improved system reliability by 30%.",
      "Mentored junior developers and conducted code reviews to maintain high code quality standards."
    ],
    skills: ["React", "Node.js", "TypeScript", "AWS", "Docker"]
  },
  {
    id: "exp2",
    company: "Digital Solutions LLC",
    position: "Frontend Developer",
    location: "Boston, MA",
    startDate: "2018-03-01",
    endDate: "2021-05-31",
    description: [
      "Developed responsive web interfaces for enterprise clients using modern frontend frameworks.",
      "Collaborated with designers to implement pixel-perfect UI components and animations.",
      "Optimized application performance, achieving a 40% reduction in load time."
    ],
    skills: ["JavaScript", "React", "CSS3", "SASS", "Redux"]
  },
  {
    id: "exp3",
    company: "StartUp Vision",
    position: "Junior Web Developer",
    location: "Remote",
    startDate: "2016-09-01",
    endDate: "2018-02-28",
    description: [
      "Built and maintained client websites using HTML, CSS, and JavaScript.",
      "Implemented responsive designs that worked across multiple device types.",
      "Assisted in migration of legacy systems to modern web technologies."
    ],
    skills: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap"]
  }
];

const skills: Skill[] = [
  { name: "React", level: 5, category: "technical" },
  { name: "TypeScript", level: 4, category: "technical" },
  { name: "Node.js", level: 4, category: "technical" },
  { name: "UI/UX Design", level: 4, category: "technical" },
  { name: "CSS/SASS", level: 5, category: "technical" },
  { name: "GraphQL", level: 3, category: "technical" },
  { name: "AWS", level: 3, category: "technical" },
  
  { name: "Problem Solving", level: 5, category: "soft" },
  { name: "Communication", level: 4, category: "soft" },
  { name: "Teamwork", level: 5, category: "soft" },
  { name: "Leadership", level: 4, category: "soft" },
  
  { name: "Figma", level: 4, category: "tool" },
  { name: "Git", level: 5, category: "tool" },
  { name: "Docker", level: 3, category: "tool" },
  { name: "VS Code", level: 5, category: "tool" },
  
  { name: "English", level: 5, category: "language" },
  { name: "Spanish", level: 3, category: "language" }
];

const projects: Project[] = [
  {
    id: "proj1",
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    link: "https://example.com/project1",
    github: "https://github.com/johndoe/project1"
  },
  {
    id: "proj2",
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team features.",
    tags: ["React", "Firebase", "Material UI", "Redux"],
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    link: "https://example.com/project2",
    github: "https://github.com/johndoe/project2"
  },
  {
    id: "proj3",
    title: "Portfolio Website",
    description: "A sleek, responsive portfolio website template with smooth animations and modern design.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    link: "https://example.com/project3",
    github: "https://github.com/johndoe/project3"
  },
  {
    id: "proj4",
    title: "Weather Dashboard",
    description: "An interactive weather dashboard that displays current and forecasted weather conditions.",
    tags: ["JavaScript", "API Integration", "Chart.js", "CSS Grid"],
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    github: "https://github.com/johndoe/project4"
  },
  {
    id: "proj5",
    title: "Recipe Finder",
    description: "A web application that allows users to search for recipes based on available ingredients.",
    tags: ["React", "API Integration", "CSS3", "Responsive Design"],
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    link: "https://example.com/project5"
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
