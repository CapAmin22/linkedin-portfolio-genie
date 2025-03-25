
import React from 'react';
import { ContactInfo } from '@/lib/types';
import { ArrowUpIcon, GithubIcon, LinkedinIcon, LinkIcon, MailIcon } from 'lucide-react';

interface FooterProps {
  contactInfo: ContactInfo;
  fullName: string;
}

const Footer: React.FC<FooterProps> = ({ contactInfo, fullName }) => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050726] border-t border-indigo-900/30">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold text-white">{fullName}</h2>
            <p className="text-sm text-indigo-200 mt-1">Portfolio & Professional Profile</p>
          </div>
          
          <div className="flex space-x-6">
            {contactInfo.github && (
              <a 
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-300 hover:text-indigo-400 transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon size={20} />
              </a>
            )}
            
            {contactInfo.linkedin && (
              <a 
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-300 hover:text-indigo-400 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={20} />
              </a>
            )}
            
            <a 
              href={contactInfo.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-300 hover:text-indigo-400 transition-colors"
              aria-label="Website"
            >
              <LinkIcon size={20} />
            </a>
            
            <a 
              href={`mailto:${contactInfo.email}`}
              className="text-indigo-300 hover:text-indigo-400 transition-colors"
              aria-label="Email"
            >
              <MailIcon size={20} />
            </a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-indigo-900/30">
          <p className="text-sm text-indigo-200 mb-4 md:mb-0">
            &copy; {currentYear} {fullName}. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-8">
            <button 
              onClick={scrollToTop}
              className="inline-flex items-center text-sm text-indigo-300 hover:text-indigo-400 transition-colors"
            >
              <span className="mr-2">Back to top</span>
              <ArrowUpIcon size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
