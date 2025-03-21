
import React from 'react';
import Section from './ui/Section';
import { AnimateIn, StaggeredChildren } from './ui/Animation';
import { Skill } from '@/lib/types';
import { cn } from '@/lib/utils';

interface SkillsProps {
  skills: Skill[];
}

// Function to group skills by category
const groupSkillsByCategory = (skills: Skill[]) => {
  return skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);
};

// Function to render skill level
const SkillLevel: React.FC<{ level: number }> = ({ level }) => {
  return (
    <div className="flex space-x-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <div 
          key={i} 
          className={cn(
            "w-2 h-2 rounded-full",
            i < level ? "bg-primary" : "bg-secondary"
          )}
        />
      ))}
    </div>
  );
};

const categoryLabels: Record<string, string> = {
  'technical': 'Technical Skills',
  'soft': 'Soft Skills',
  'language': 'Languages',
  'tool': 'Tools & Software'
};

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const groupedSkills = groupSkillsByCategory(skills);
  const categories = Object.keys(groupedSkills);
  
  return (
    <Section id="skills" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <AnimateIn type="fade-in-up">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Skills
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">My Expertise</h2>
          </div>
        </AnimateIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {categories.map((category, idx) => (
            <AnimateIn 
              key={category} 
              type="fade-in-up"
              delay={idx * 100}
              className="bg-background rounded-lg shadow-sm p-6 border"
            >
              <h3 className="text-xl font-semibold mb-6">{categoryLabels[category] || category}</h3>
              
              <div className="space-y-5">
                {groupedSkills[category].map((skill) => (
                  <div key={skill.name} className="relative">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-base font-medium">{skill.name}</span>
                      <SkillLevel level={skill.level} />
                    </div>
                    
                    <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full"
                        style={{ width: `${(skill.level / 5) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Skills;
