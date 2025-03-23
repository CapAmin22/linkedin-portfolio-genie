
import React from 'react';
import Section from './ui/Section';
import { AnimateIn } from './ui/Animation';
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
    <Section id="skills" className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <AnimateIn type="fade-in-up">
          <div className="text-center mb-8">
            <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Skills
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">My Expertise</h2>
          </div>
        </AnimateIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {categories.map((category, idx) => (
            <AnimateIn 
              key={category} 
              type="fade-in-up"
              delay={idx * 100}
              className="bg-background rounded-lg shadow-sm p-5 border"
            >
              <h3 className="text-xl font-semibold mb-3">{categoryLabels[category] || category}</h3>
              
              <div className="flex flex-wrap gap-2">
                {groupedSkills[category].map((skill) => (
                  <span 
                    key={skill.name}
                    className="px-3 py-1 bg-secondary rounded text-sm font-medium"
                  >
                    {skill.name}
                  </span>
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
