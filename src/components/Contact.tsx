
import React from 'react';
import Section from './ui/Section';
import { ContactInfo as ContactInfoType } from '@/lib/types';
import ContactInfo from './contact/ContactInfo';
import ContactForm from './contact/ContactForm';
import ContactBackground from './contact/ContactBackground';
import ContactHeader from './contact/ContactHeader';

interface ContactProps {
  contactInfo: ContactInfoType;
}

const Contact: React.FC<ContactProps> = ({ contactInfo }) => {
  return (
    <Section id="contact" className="py-20 md:py-28 relative overflow-hidden">
      <ContactBackground />
      
      <div className="container mx-auto px-4">
        <ContactHeader />
        
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12">
            <ContactInfo contactInfo={contactInfo} />
            <ContactForm />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
