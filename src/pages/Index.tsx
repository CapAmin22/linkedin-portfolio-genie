
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import EducationSection from '@/components/Education';
import Certifications from '@/components/Certifications';
import Awards from '@/components/Awards';
import { 
  personalInfo, 
  experiences, 
  skills, 
  projects, 
  education, 
  certifications, 
  awards 
} from '@/data/portfolioData';
import useScrollSmoothNavigation from '@/hooks/useScrollSmoothNavigation';

/**
 * Portfolio sections wrapper component
 */
const BackgroundSection: React.FC<{
  children: React.ReactNode;
  bgClass: string;
}> = ({ children, bgClass }) => (
  <div className={`relative py-12 ${bgClass}`}>
    <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background to-transparent"></div>
    {children}
    <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent"></div>
  </div>
);

const Index: React.FC = () => {
  // Initialize smooth scrolling
  useScrollSmoothNavigation();
  
  useEffect(() => {
    // Set page title
    document.title = `${personalInfo.fullName} | Product Manager Portfolio`;
  }, []);
  
  return (
    <div className="min-h-screen bg-background antialiased">
      <Header />
      <main>
        <Hero personalInfo={personalInfo} />
        <About personalInfo={personalInfo} />
        
        <BackgroundSection bgClass="bg-secondary/10">
          <Experience experiences={experiences} />
          <Projects projects={projects} />
        </BackgroundSection>
        
        <Skills skills={skills} />
        
        <BackgroundSection bgClass="bg-secondary/20">
          <EducationSection education={education} />
          <Certifications certifications={certifications} />
        </BackgroundSection>
        
        <Awards awards={awards} />
        <Contact contactInfo={personalInfo.contact} />
      </main>
      <Footer contactInfo={personalInfo.contact} fullName={personalInfo.fullName} />
    </div>
  );
};

export default Index;
