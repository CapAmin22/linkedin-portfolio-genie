
import React from 'react';
import Section from './ui/Section';
import { AnimateIn } from './ui/Animation';
import { Award } from '@/lib/types';
import { TrophyIcon, AwardIcon, StarIcon } from 'lucide-react';

interface AwardsProps {
  awards: Award[];
}

const Awards: React.FC<AwardsProps> = ({ awards }) => {
  const getIcon = (index: number) => {
    const icons = [
      <TrophyIcon key="trophy" size={24} />,
      <AwardIcon key="award" size={24} />,
      <StarIcon key="star" size={24} />
    ];
    return icons[index % icons.length];
  };

  return (
    <Section id="awards" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/10 rounded-full filter blur-3xl opacity-30 -z-10" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-secondary/20 rounded-full filter blur-3xl opacity-30 -z-10" />
      
      <div className="container mx-auto px-4">
        <AnimateIn type="fade-in-up">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-primary/20 text-white rounded-full text-sm font-medium mb-4">
              Recognition
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Awards & Achievements</h2>
            <p className="mt-4 text-white/80 max-w-2xl mx-auto">
              Recognition for dedication and excellence in product management and leadership.
            </p>
          </div>
        </AnimateIn>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {awards.map((award, index) => (
            <AnimateIn 
              key={index} 
              type="fade-in-up" 
              delay={index * 100}
            >
              <div className={`bg-[#0f1445]/80 backdrop-blur-sm rounded-lg p-6 transition-all duration-300 h-full ${
                award.highlight 
                  ? 'shadow-lg border border-primary/30 hover:shadow-xl hover:border-primary/40' 
                  : 'shadow-lg border border-white/10 hover:border-primary/20 hover:shadow-md'
              }`}>
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-full text-primary ${
                    award.highlight ? 'bg-primary/20' : 'bg-primary/10'
                  }`}>
                    {getIcon(index)}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold mb-2 ${award.highlight ? 'text-primary' : 'text-white'}`}>
                      {award.title}
                    </h3>
                    <div className="flex flex-col md:flex-row md:items-center gap-2 text-sm mb-3">
                      <span className="text-white/90 font-medium">{award.issuer}</span>
                      {award.date && (
                        <>
                          <span className="hidden md:block text-white/50">•</span>
                          <span className="text-white/80">{award.date}</span>
                        </>
                      )}
                    </div>
                    {award.description && (
                      <p className="text-white/80 text-sm md:text-base">{award.description}</p>
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
