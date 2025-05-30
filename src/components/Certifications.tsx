
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
    <Section id="certifications" className="py-20 md:py-28 bg-[#0a0d3d]/40">
      <div className="container mx-auto px-4">
        <AnimateIn type="fade-in-up">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-primary/20 text-white rounded-full text-sm font-medium mb-4">
              Certifications
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Professional Credentials</h2>
          </div>
        </AnimateIn>
        
        <div className="max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <AnimateIn 
              key={index} 
              type="fade-in-up" 
              delay={index * 100}
            >
              <div className="bg-[#0f1445]/80 rounded-lg shadow-lg p-5 border border-white/10 mb-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="bg-primary/20 p-3 rounded-full text-primary h-fit">
                    <AwardIcon size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1 text-primary">{cert.name}</h3>
                    <div className="flex flex-col md:flex-row md:items-center gap-2 text-sm mb-2">
                      <span className="text-white/90 font-medium">{cert.issuer}</span>
                      {cert.date && (
                        <>
                          <span className="hidden md:block text-white/50">•</span>
                          <span className="text-white/80">{cert.date}</span>
                        </>
                      )}
                    </div>
                    {cert.description && (
                      <p className="text-white/80 text-sm mt-2">{cert.description}</p>
                    )}
                    {cert.link && (
                      <a 
                        href={cert.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary text-sm mt-3 inline-block hover:underline"
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
