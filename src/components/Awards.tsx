
import React from 'react';
import Section from './ui/Section';
import { AnimateIn } from './ui/Animation';
import { Award } from '@/lib/types';
import { TrophyIcon } from 'lucide-react';

interface AwardsProps {
  awards: Award[];
}

const Awards: React.FC<AwardsProps> = ({ awards }) => {
  return (
    <Section id="awards" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <AnimateIn type="fade-in-up">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Recognition
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Awards & Achievements</h2>
          </div>
        </AnimateIn>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 gap-6">
          {awards.map((award, index) => (
            <AnimateIn 
              key={index} 
              type="fade-in-up" 
              delay={index * 100}
            >
              <div className="bg-background rounded-lg shadow-sm p-6 border border-secondary/50 hover:border-primary/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <TrophyIcon size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{award.title}</h3>
                    <div className="flex flex-col md:flex-row md:items-center gap-2 text-sm mb-3">
                      <span className="text-foreground/70">{award.issuer}</span>
                      <span className="hidden md:block text-foreground/50">•</span>
                      <span className="text-foreground/70">{award.date}</span>
                    </div>
                    {award.description && (
                      <p className="text-foreground/80">{award.description}</p>
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

export default Awards;
