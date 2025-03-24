
import React from 'react';
import { ContactInfo as ContactInfoType } from '@/lib/types';
import { MailIcon, LinkedinIcon, GithubIcon, MapPinIcon, ArrowRightIcon } from 'lucide-react';
import { AnimateIn } from '../ui/Animation';

interface ContactInfoProps {
  contactInfo: ContactInfoType;
}

const ContactInfoItem = ({ 
  icon: Icon, 
  title, 
  content, 
  link 
}: { 
  icon: React.ElementType; 
  title: string; 
  content: React.ReactNode;
  link?: string; 
}) => (
  <div className="flex items-start group">
    <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 p-4 rounded-full mr-5 transition-all duration-300 group-hover:from-blue-500/30 group-hover:to-indigo-500/30">
      <Icon size={22} className="text-primary" />
    </div>
    <div className="flex-1 overflow-hidden">
      <h4 className="text-sm font-medium text-foreground/60 mb-1">{title}</h4>
      {link ? (
        <a 
          href={link}
          target={link.startsWith('mailto:') ? undefined : "_blank"}
          rel="noopener noreferrer"
          className="text-foreground group-hover:text-primary transition-colors flex items-center break-all"
        >
          {content}
          <ArrowRightIcon size={14} className="ml-1 flex-shrink-0 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
        </a>
      ) : (
        <p className="text-foreground">{content}</p>
      )}
    </div>
  </div>
);

const SocialLinks = ({ contactInfo }: { contactInfo: ContactInfoType }) => (
  <div className="mt-10 pt-8 border-t border-white/10">
    <h4 className="text-sm font-medium mb-5">Connect with me</h4>
    <div className="flex space-x-4">
      {contactInfo.linkedin && (
        <a 
          href={contactInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 p-3 rounded-full text-foreground hover:text-primary transition-all duration-300 hover:from-blue-500/20 hover:to-indigo-500/20"
          aria-label="LinkedIn"
        >
          <LinkedinIcon size={20} />
        </a>
      )}
      
      {contactInfo.github && (
        <a 
          href={contactInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 p-3 rounded-full text-foreground hover:text-primary transition-all duration-300 hover:from-blue-500/20 hover:to-indigo-500/20"
          aria-label="GitHub"
        >
          <GithubIcon size={20} />
        </a>
      )}
      
      <a 
        href={`mailto:${contactInfo.email}`}
        className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 p-3 rounded-full text-foreground hover:text-primary transition-all duration-300 hover:from-blue-500/20 hover:to-indigo-500/20"
        aria-label="Email"
      >
        <MailIcon size={20} />
      </a>
    </div>
  </div>
);

const ContactInfo: React.FC<ContactInfoProps> = ({ contactInfo }) => {
  return (
    <AnimateIn type="fade-in" className="md:w-2/5">
      <div className="h-full bg-background/80 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-white/10">
        <h3 className="text-xl font-bold mb-6 relative inline-block">
          Contact Information
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded"></span>
        </h3>
        
        <div className="space-y-8 flex-grow">
          <ContactInfoItem 
            icon={MailIcon} 
            title="Email" 
            content={contactInfo.email} 
            link={`mailto:${contactInfo.email}`} 
          />
          
          {contactInfo.linkedin && (
            <ContactInfoItem 
              icon={LinkedinIcon} 
              title="LinkedIn" 
              content="Connect on LinkedIn" 
              link={contactInfo.linkedin} 
            />
          )}
          
          {contactInfo.github && (
            <ContactInfoItem 
              icon={GithubIcon} 
              title="GitHub" 
              content="View GitHub Profile" 
              link={contactInfo.github} 
            />
          )}
          
          {contactInfo.location && (
            <ContactInfoItem 
              icon={MapPinIcon} 
              title="Location" 
              content={contactInfo.location} 
            />
          )}
        </div>
        
        <SocialLinks contactInfo={contactInfo} />
      </div>
    </AnimateIn>
  );
};

export default ContactInfo;
