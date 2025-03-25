
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
    <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#05061f] to-transparent"></div>
    {children}
    <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#05061f] to-transparent"></div>
  </div>
);

const Index: React.FC = () => {
  // Initialize smooth scrolling
  useScrollSmoothNavigation();
  
  useEffect(() => {
    // Set page title
    document.title = `${personalInfo.fullName} | Product Manager Portfolio`;
    
    // Log for debugging
    console.log("Index page loaded", { personalInfo });
    
    // Preload critical images
    const imagesToPreload = [
      personalInfo.avatar,
      personalInfo.aboutImage,
      '/lovable-uploads/9a95230f-c95c-4b5b-b7b4-81275a9e227c.png',
      '/lovable-uploads/2d2f2df8-7465-4659-aa9a-d882724e70c7.png',
      '/lovable-uploads/84b8c02c-19ec-45fa-be33-9c79abf4ca1a.png'
    ];
    
    imagesToPreload.forEach(imageUrl => {
      if (imageUrl) {
        const img = new Image();
        img.src = imageUrl;
      }
    });
  }, []);
  
  return (
    <div className="min-h-screen bg-[#05061f] text-white antialiased">
      {/* Fixed background elements */}
      <div className="fixed inset-0 bg-cover bg-center z-[-2]" style={{ 
        backgroundImage: `url('/lovable-uploads/84b8c02c-19ec-45fa-be33-9c79abf4ca1a.png')`,
        backgroundSize: 'cover',
        opacity: 0.4
      }}></div>
      
      {/* Enhanced star overlay effect */}
      <div className="fixed inset-0 bg-[url('/lovable-uploads/2d2f2df8-7465-4659-aa9a-d882724e70c7.png')] bg-repeat z-[-1] opacity-60"></div>
      
      <Header />
      <main>
        <Hero personalInfo={personalInfo} />
        <About personalInfo={personalInfo} />
        
        <BackgroundSection bgClass="bg-gradient-to-r from-indigo-950/90 to-purple-950/90">
          <Experience experiences={experiences} />
          <Projects projects={projects} />
        </BackgroundSection>
        
        <Skills skills={skills} />
        
        <BackgroundSection bgClass="bg-gradient-to-r from-purple-950/90 to-indigo-950/90">
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
