
import React, { useState } from 'react';
import Section from './ui/Section';
import { AnimateIn } from './ui/Animation';
import Button from './ui/Button';
import { ContactInfo } from '@/lib/types';
import { MailIcon, LinkedinIcon, GithubIcon, MapPinIcon, SendIcon } from 'lucide-react';

interface ContactProps {
  contactInfo: ContactInfo;
}

const Contact: React.FC<ContactProps> = ({ contactInfo }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formState);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <Section id="contact" className="py-20 md:py-28 relative">
      {/* Background decor elements */}
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-primary/5 rounded-full filter blur-3xl opacity-50 -z-10 transform -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-secondary/30 rounded-full filter blur-3xl opacity-50 -z-10 transform translate-x-1/3" />
      
      <div className="container mx-auto px-4">
        <AnimateIn type="fade-in-up">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Contact
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-foreground/70 max-w-xl mx-auto">
              Feel free to reach out if you're looking for a collaborator, have a question, or just want to connect.
            </p>
          </div>
        </AnimateIn>
        
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Left column - Contact info */}
            <AnimateIn type="fade-in" className="md:w-2/5">
              <div className="h-full bg-background rounded-lg shadow-sm p-8 border flex flex-col">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-6 flex-grow">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <MailIcon size={20} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-foreground/60 mb-1">Email</h4>
                      <a href={`mailto:${contactInfo.email}`} className="text-foreground hover:text-primary transition-colors">
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>
                  
                  {contactInfo.linkedin && (
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        <LinkedinIcon size={20} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-foreground/60 mb-1">LinkedIn</h4>
                        <a 
                          href={contactInfo.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground hover:text-primary transition-colors"
                        >
                          Connect on LinkedIn
                        </a>
                      </div>
                    </div>
                  )}
                  
                  {contactInfo.github && (
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        <GithubIcon size={20} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-foreground/60 mb-1">GitHub</h4>
                        <a 
                          href={contactInfo.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground hover:text-primary transition-colors"
                        >
                          View GitHub Profile
                        </a>
                      </div>
                    </div>
                  )}
                  
                  {contactInfo.location && (
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        <MapPinIcon size={20} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-foreground/60 mb-1">Location</h4>
                        <p className="text-foreground">{contactInfo.location}</p>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="mt-8 pt-8 border-t">
                  <h4 className="text-sm font-medium mb-4">Connect with me</h4>
                  <div className="flex space-x-4">
                    {contactInfo.linkedin && (
                      <a 
                        href={contactInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-secondary p-3 rounded-full text-foreground hover:text-primary transition-colors"
                        aria-label="LinkedIn"
                      >
                        <LinkedinIcon size={18} />
                      </a>
                    )}
                    
                    {contactInfo.github && (
                      <a 
                        href={contactInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-secondary p-3 rounded-full text-foreground hover:text-primary transition-colors"
                        aria-label="GitHub"
                      >
                        <GithubIcon size={18} />
                      </a>
                    )}
                    
                    <a 
                      href={`mailto:${contactInfo.email}`}
                      className="bg-secondary p-3 rounded-full text-foreground hover:text-primary transition-colors"
                      aria-label="Email"
                    >
                      <MailIcon size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </AnimateIn>
            
            {/* Right column - Contact form */}
            <AnimateIn type="fade-in" delay={100} className="md:w-3/5">
              <div className="bg-background rounded-lg shadow-sm p-8 border">
                <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
                
                {submitSuccess ? (
                  <div className="bg-green-50 border border-green-200 text-green-700 rounded-lg p-4 mb-6 animate-fade-in">
                    <p className="font-medium">Thank you for your message!</p>
                    <p className="text-sm mt-1">I'll get back to you as soon as possible.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formState.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formState.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
                          placeholder="Your email"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        value={formState.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
                        placeholder="Subject of your message"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        value={formState.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors resize-none"
                        placeholder="Your message"
                      />
                    </div>
                    
                    <div>
                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        icon={isSubmitting ? null : <SendIcon size={18} />}
                        className="w-full sm:w-auto"
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </AnimateIn>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
