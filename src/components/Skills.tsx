
import React from 'react';
import Section from './ui/Section';
import { AnimateIn } from './ui/Animation';
import { Skill } from '@/lib/types';
import { cn } from '@/lib/utils';
import { Progress } from './ui/progress';
import { Star, StarHalf, StarOff } from 'lucide-react';

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

// Component to render stars based on skill level
const SkillLevel: React.FC<{ level: number }> = ({ level }) => {
  const fullStars = Math.floor(level);
  const hasHalfStar = level % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  
  return (
    <div className="flex">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} className="w-3.5 h-3.5 text-primary" fill="currentColor" />
      ))}
      {hasHalfStar && <StarHalf className="w-3.5 h-3.5 text-primary" fill="currentColor" />}
      {[...Array(emptyStars)].map((_, i) => (
        <StarOff key={`empty-${i}`} className="w-3.5 h-3.5 text-muted-foreground" />
      ))}
    </div>
  );
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
              
              <div className="space-y-3">
                {groupedSkills[category].map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <SkillLevel level={skill.level} />
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
