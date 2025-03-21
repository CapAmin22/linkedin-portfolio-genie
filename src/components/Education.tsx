
import React from 'react';
import Section from './ui/Section';
import { AnimateIn } from './ui/Animation';
import { Education as EducationType } from '@/lib/types';
import { cn } from '@/lib/utils';
import { GraduationCapIcon } from 'lucide-react';

interface EducationProps {
  education: EducationType[];
}

const Education: React.FC<EducationProps> = ({ education }) => {
  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return 'Present';
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' }).format(date);
  };

  return (
    <Section id="education" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <AnimateIn type="fade-in-up">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Education
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Academic Background</h2>
          </div>
        </AnimateIn>
        
        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <AnimateIn 
              key={index} 
              type="fade-in-up" 
              delay={index * 100}
              className="mb-8"
            >
              <div className="bg-background rounded-lg shadow-sm p-6 border">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <GraduationCapIcon size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                      <h3 className="text-xl font-bold">{edu.institution}</h3>
                      <div className="text-sm text-foreground/70">
                        {formatDate(edu.startDate)} — {formatDate(edu.endDate)}
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <div className="font-medium">{edu.degree}, {edu.field}</div>
                      <div className="text-sm text-foreground/70">{edu.location}</div>
                    </div>
                    
                    {edu.description && (
                      <p className="text-foreground/80 mt-3">{edu.description}</p>
                    )}
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Education;
