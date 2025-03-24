
import React from 'react';
import Section from './ui/Section';
import { AnimateIn } from './ui/Animation';
import { PersonalInfo } from '@/lib/types';
import { CheckCircle2Icon } from 'lucide-react';

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
              <img 
                src="/lovable-uploads/af6ecf3e-1241-467d-b89d-8f8b3fa814cc.png"
                alt={personalInfo.fullName}
                className="w-full h-auto rounded-lg shadow-lg object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80";
                }}
              />
              
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
              </div>
            </AnimateIn>
            
            {personalInfo.achievements && (
              <AnimateIn type="fade-in-up" delay={400}>
                <div className="mt-8">
                  <h3 className="text-lg font-medium mb-4">Key Achievements:</h3>
                  <div className="space-y-3">
                    {personalInfo.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start">
                        <div className="mr-3 text-primary mt-1">
                          <CheckCircle2Icon size={18} />
                        </div>
                        <p className="text-foreground/90">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateIn>
            )}
            
            <AnimateIn type="fade-in-up" delay={500}>
              <div className="mt-8">
                <h3 className="text-lg font-medium mb-4">Technical Toolkit:</h3>
                <div className="flex flex-wrap gap-2">
                  <div className="px-3 py-1 bg-secondary rounded-md text-sm font-medium">Product Strategy</div>
                  <div className="px-3 py-1 bg-secondary rounded-md text-sm font-medium">Wireframing</div>
                  <div className="px-3 py-1 bg-secondary rounded-md text-sm font-medium">Prototyping</div>
                  <div className="px-3 py-1 bg-secondary rounded-md text-sm font-medium">Postman</div>
                  <div className="px-3 py-1 bg-secondary rounded-md text-sm font-medium">Primary & Secondary Research</div>
                  <div className="px-3 py-1 bg-secondary rounded-md text-sm font-medium">Brainstorming</div>
                  <div className="px-3 py-1 bg-secondary rounded-md text-sm font-medium">API Integration</div>
                  <div className="px-3 py-1 bg-secondary rounded-md text-sm font-medium">KPI</div>
                  <div className="px-3 py-1 bg-secondary rounded-md text-sm font-medium">PDLC</div>
                  <div className="px-3 py-1 bg-secondary rounded-md text-sm font-medium">Cross-Functional Collaboration</div>
                  <div className="px-3 py-1 bg-secondary rounded-md text-sm font-medium">Figma</div>
                  <div className="px-3 py-1 bg-secondary rounded-md text-sm font-medium">JIRA/Confluence</div>
                  <div className="px-3 py-1 bg-secondary rounded-md text-sm font-medium">PRD</div>
                  <div className="px-3 py-1 bg-secondary rounded-md text-sm font-medium">Agile & Scrum</div>
                  <div className="px-3 py-1 bg-secondary rounded-md text-sm font-medium">GTM</div>
                  <div className="px-3 py-1 bg-secondary rounded-md text-sm font-medium">Data Analysis</div>
                  <div className="px-3 py-1 bg-secondary rounded-md text-sm font-medium">User Story Mapping</div>
                  <div className="px-3 py-1 bg-secondary rounded-md text-sm font-medium">UX/UI</div>
                  <div className="px-3 py-1 bg-secondary rounded-md text-sm font-medium">Product Roadmap</div>
                  <div className="px-3 py-1 bg-secondary rounded-md text-sm font-medium">Story Telling</div>
                  <div className="px-3 py-1 bg-secondary rounded-md text-sm font-medium">Structured Thinking</div>
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
