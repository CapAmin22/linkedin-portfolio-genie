
import React from 'react';
import Section from './ui/Section';
import { AnimateIn } from './ui/Animation';
import { Certification } from '@/lib/types';
import { AwardIcon } from 'lucide-react';

interface CertificationsProps {
  certifications: Certification[];
}

const Certifications: React.FC<CertificationsProps> = ({ certifications }) => {
  return (
    <Section id="certifications" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <AnimateIn type="fade-in-up">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Certifications
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Professional Credentials</h2>
          </div>
        </AnimateIn>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <AnimateIn 
              key={index} 
              type="fade-in-up" 
              delay={index * 100}
            >
              <div className="bg-background rounded-lg shadow-sm p-5 border h-full">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <AwardIcon size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{cert.name}</h3>
                    <div className="flex flex-col md:flex-row md:items-center gap-2 text-sm">
                      <span className="text-foreground/70">{cert.issuer}</span>
                      <span className="hidden md:block text-foreground/50">•</span>
                      <span className="text-foreground/70">{cert.date}</span>
                    </div>
                    {cert.link && (
                      <a 
                        href={cert.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary text-sm mt-2 inline-block hover:underline"
                      >
                        Show credential
                      </a>
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

export default Certifications;
