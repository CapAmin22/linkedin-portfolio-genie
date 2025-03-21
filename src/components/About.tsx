
import React from 'react';
import Section from './ui/Section';
import { AnimateIn } from './ui/Animation';
import { PersonalInfo } from '@/lib/types';

interface AboutProps {
  personalInfo: PersonalInfo;
}

const About: React.FC<AboutProps> = ({ personalInfo }) => {
  return (
    <Section id="about" className="py-20 md:py-28 relative">
      {/* Subtle background effects */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-secondary/30 rounded-full filter blur-3xl opacity-20 -z-10" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/10 rounded-full filter blur-3xl opacity-20 -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-16 max-w-6xl mx-auto">
          {/* Left column with image */}
          <AnimateIn type="fade-in" className="md:w-2/5 mb-10 md:mb-0">
            <div className="relative">
              {personalInfo.avatar ? (
                <img 
                  src={personalInfo.avatar} 
                  alt={personalInfo.fullName}
                  className="w-full h-auto rounded-lg shadow-lg object-cover"
                />
              ) : (
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
                  alt="Product Management"
                  className="w-full h-auto rounded-lg shadow-lg object-cover"
                />
              )}
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary rounded-lg -z-10" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-primary/50 rounded-lg -z-10" />
            </div>
          </AnimateIn>
          
          {/* Right column with content */}
          <div className="md:w-3/5">
            <AnimateIn type="fade-in-up" delay={100}>
              <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                About Me
              </div>
            </AnimateIn>
            
            <AnimateIn type="fade-in-up" delay={200}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Passionate Product Management Professional
              </h2>
            </AnimateIn>
            
            <AnimateIn type="fade-in-up" delay={300}>
              <div className="prose prose-lg max-w-none">
                {personalInfo.summary && personalInfo.summary.map((paragraph, index) => (
                  <p key={index} className="text-foreground/80 mb-4">
                    {paragraph}
                  </p>
                ))}
                
                {!personalInfo.summary && (
                  <p className="text-foreground/80 mb-6">
                    {personalInfo.bio}
                  </p>
                )}
                
                <p className="text-foreground/80">
                  Beyond work, I'm a National Rowing Champion and NCC Senior, bringing the same discipline, strategy, and passion to product management that I apply to sports and personal growth. Always eager to transform innovative ideas into impactful solutions.
                </p>
              </div>
            </AnimateIn>
            
            <AnimateIn type="fade-in-up" delay={400}>
              <div className="mt-8">
                <h3 className="text-lg font-medium mb-4">Technical Toolkit:</h3>
                <div className="flex flex-wrap gap-3">
                  <div className="px-4 py-2 bg-secondary rounded-md text-sm font-medium">Figma</div>
                  <div className="px-4 py-2 bg-secondary rounded-md text-sm font-medium">Wireframing</div>
                  <div className="px-4 py-2 bg-secondary rounded-md text-sm font-medium">Miro</div>
                  <div className="px-4 py-2 bg-secondary rounded-md text-sm font-medium">Amplitude</div>
                  <div className="px-4 py-2 bg-secondary rounded-md text-sm font-medium">Mixpanel</div>
                  <div className="px-4 py-2 bg-secondary rounded-md text-sm font-medium">JIRA</div>
                  <div className="px-4 py-2 bg-secondary rounded-md text-sm font-medium">Excel</div>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
