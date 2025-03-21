
import React, { useState } from 'react';
import Section from './ui/Section';
import { AnimateIn, StaggeredChildren } from './ui/Animation';
import { Experience as ExperienceType } from '@/lib/types';
import { cn } from '@/lib/utils';

interface ExperienceProps {
  experiences: ExperienceType[];
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  const [activeExperience, setActiveExperience] = useState<string>(experiences[0]?.id || '');
  
  const getExperience = (id: string) => {
    return experiences.find(exp => exp.id === id) || experiences[0];
  };
  
  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return 'Present';
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' }).format(date);
  };

  return (
    <Section id="experience" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <AnimateIn type="fade-in-up">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Work Experience
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">My Professional Journey</h2>
          </div>
        </AnimateIn>
        
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left column - Company tabs */}
            <AnimateIn type="fade-in" className="lg:w-1/3">
              <div className="bg-background rounded-lg shadow-sm p-1 mb-8 lg:mb-0 border overflow-hidden">
                <div className="flex flex-row lg:flex-col">
                  {experiences.map((exp, index) => (
                    <button
                      key={exp.id}
                      onClick={() => setActiveExperience(exp.id)}
                      className={cn(
                        'p-4 text-left transition-all duration-300 flex flex-1 lg:flex-initial items-center',
                        activeExperience === exp.id 
                          ? 'bg-primary/10 text-primary font-medium' 
                          : 'hover:bg-secondary/50 text-foreground/70'
                      )}
                    >
                      <div className="relative w-full">
                        <div className="flex items-center">
                          {exp.logo ? (
                            <img 
                              src={exp.logo} 
                              alt={exp.company} 
                              className="w-6 h-6 mr-3 object-contain"
                            />
                          ) : (
                            <div className="w-6 h-6 bg-primary/10 rounded-full mr-3" />
                          )}
                          <span className="text-sm lg:text-base">{exp.company}</span>
                        </div>
                        
                        {activeExperience === exp.id && (
                          <span className="absolute bottom-0 left-0 h-0.5 w-full bg-primary lg:w-0.5 lg:h-full lg:left-auto lg:right-0 lg:top-0" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </AnimateIn>
            
            {/* Right column - Experience details */}
            <AnimateIn type="fade-in" className="lg:w-2/3">
              {experiences.length > 0 && (
                <div className="bg-background rounded-lg shadow-sm p-6 lg:p-8 border">
                  <div key={activeExperience} className="animate-fade-in">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <h3 className="text-xl font-bold">{getExperience(activeExperience).position}</h3>
                      <div className="flex items-center mt-2 md:mt-0">
                        <span className="text-sm text-foreground/70">
                          {formatDate(getExperience(activeExperience).startDate)} — {formatDate(getExperience(activeExperience).endDate)}
                        </span>
                        <span className="mx-2 text-foreground/40">•</span>
                        <span className="text-sm text-foreground/70">{getExperience(activeExperience).location}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-4 mt-6">
                      {getExperience(activeExperience).description.map((desc, i) => (
                        <div key={i} className="flex">
                          <div className="mr-3 text-primary">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6.66675 10.1147L12.7947 3.98602L13.7381 4.92936L6.66675 12.0014L2.42875 7.76269L3.37208 6.81936L6.66675 10.1147Z" fill="currentColor" />
                            </svg>
                          </div>
                          <p className="text-foreground/80">{desc}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-8">
                      <h4 className="text-sm font-medium mb-3">Technologies & Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {getExperience(activeExperience).skills.map((skill, i) => (
                          <span 
                            key={i} 
                            className="px-3 py-1 bg-secondary rounded text-xs font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </AnimateIn>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Experience;
