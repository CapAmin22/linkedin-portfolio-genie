import React, { useState } from 'react';
import Section from './ui/Section';
import { AnimateIn } from './ui/Animation';
import Button from './ui/Button';
import { ContactInfo } from '@/lib/types';
import { MailIcon, LinkedinIcon, GithubIcon, MapPinIcon, SendIcon, ArrowRightIcon } from 'lucide-react';
import { ContactService, ContactFormData } from '@/lib/services/contact-service';
import { Input } from './ui/input';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';

interface ContactProps {
  contactInfo: ContactInfo;
}

const Contact: React.FC<ContactProps> = ({ contactInfo }) => {
  const [formState, setFormState] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formErrors, setFormErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const validateForm = (): boolean => {
    const errors: Partial<Record<keyof ContactFormData, string>> = {};
    
    if (!formState.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formState.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (!formState.subject.trim()) {
      errors.subject = 'Subject is required';
    }
    
    if (!formState.message.trim()) {
      errors.message = 'Message is required';
    } else if (formState.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    
    if (formErrors[name as keyof ContactFormData]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const success = await ContactService.submitContactForm(formState);
      
      if (success) {
        setSubmitSuccess(true);
        setFormState({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-48 -left-48 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl opacity-70" />
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-indigo-500/10 rounded-full filter blur-3xl opacity-60" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl opacity-60" />
      </div>
      
      <div className="container mx-auto px-4">
        <AnimateIn type="fade-in-up">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 text-primary rounded-full text-sm font-medium mb-4">
              Get In Touch
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Let's Connect</h2>
            <p className="text-foreground/70 max-w-xl mx-auto">
              Feel free to reach out if you're looking for a collaborator, have a question, or just want to connect.
            </p>
          </div>
        </AnimateIn>
        
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12">
            <AnimateIn type="fade-in" className="md:w-2/5">
              <div className="h-full bg-background/80 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-white/10">
                <h3 className="text-xl font-bold mb-6 relative inline-block">
                  Contact Information
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded"></span>
                </h3>
                
                <div className="space-y-8 flex-grow">
                  <div className="flex items-start group">
                    <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 p-4 rounded-full mr-5 transition-all duration-300 group-hover:from-blue-500/30 group-hover:to-indigo-500/30">
                      <MailIcon size={22} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-foreground/60 mb-1">Email</h4>
                      <a href={`mailto:${contactInfo.email}`} 
                        className="text-foreground group-hover:text-primary transition-colors flex items-center">
                        {contactInfo.email}
                        <ArrowRightIcon size={14} className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </a>
                    </div>
                  </div>
                  
                  {contactInfo.linkedin && (
                    <div className="flex items-start group">
                      <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 p-4 rounded-full mr-5 transition-all duration-300 group-hover:from-blue-500/30 group-hover:to-indigo-500/30">
                        <LinkedinIcon size={22} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-foreground/60 mb-1">LinkedIn</h4>
                        <a 
                          href={contactInfo.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground group-hover:text-primary transition-colors flex items-center"
                        >
                          Connect on LinkedIn
                          <ArrowRightIcon size={14} className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                        </a>
                      </div>
                    </div>
                  )}
                  
                  {contactInfo.github && (
                    <div className="flex items-start group">
                      <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 p-4 rounded-full mr-5 transition-all duration-300 group-hover:from-blue-500/30 group-hover:to-indigo-500/30">
                        <GithubIcon size={22} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-foreground/60 mb-1">GitHub</h4>
                        <a 
                          href={contactInfo.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground group-hover:text-primary transition-colors flex items-center"
                        >
                          View GitHub Profile
                          <ArrowRightIcon size={14} className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                        </a>
                      </div>
                    </div>
                  )}
                  
                  {contactInfo.location && (
                    <div className="flex items-start group">
                      <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 p-4 rounded-full mr-5 transition-all duration-300 group-hover:from-blue-500/30 group-hover:to-indigo-500/30">
                        <MapPinIcon size={22} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-foreground/60 mb-1">Location</h4>
                        <p className="text-foreground">{contactInfo.location}</p>
                      </div>
                    </div>
                  )}
                </div>
                
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
              </div>
            </AnimateIn>
            
            <AnimateIn type="fade-in" delay={100} className="md:w-3/5">
              <div className="bg-background/80 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-white/10">
                <h3 className="text-xl font-bold mb-6 relative inline-block">
                  Send Me a Message
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded"></span>
                </h3>
                
                {submitSuccess ? (
                  <Alert className="bg-green-500/10 border-green-500/30 text-green-600 animate-fade-in">
                    <AlertTitle className="text-lg font-semibold">Thank you for your message!</AlertTitle>
                    <AlertDescription>
                      I'll get back to you as soon as possible. Feel free to connect with me on social media in the meantime.
                    </AlertDescription>
                  </Alert>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Name
                        </label>
                        <Input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formState.name}
                          onChange={handleChange}
                          className={`w-full transition-all duration-300 border-white/10 bg-white/5 focus:border-indigo-500 ${formErrors.name ? 'border-red-500 bg-red-500/5' : ''}`}
                          placeholder="Your name"
                        />
                        {formErrors.name && (
                          <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email
                        </label>
                        <Input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formState.email}
                          onChange={handleChange}
                          className={`w-full transition-all duration-300 border-white/10 bg-white/5 focus:border-indigo-500 ${formErrors.email ? 'border-red-500 bg-red-500/5' : ''}`}
                          placeholder="Your email"
                        />
                        {formErrors.email && (
                          <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject
                      </label>
                      <Input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        value={formState.subject}
                        onChange={handleChange}
                        className={`w-full transition-all duration-300 border-white/10 bg-white/5 focus:border-indigo-500 ${formErrors.subject ? 'border-red-500 bg-red-500/5' : ''}`}
                        placeholder="Subject of your message"
                      />
                      {formErrors.subject && (
                        <p className="text-red-500 text-xs mt-1">{formErrors.subject}</p>
                      )}
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
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 transition-all duration-300 border-white/10 bg-white/5 focus:border-indigo-500 focus:ring-indigo-500/20 resize-none ${formErrors.message ? 'border-red-500 bg-red-500/5' : ''}`}
                        placeholder="Your message"
                      />
                      {formErrors.message && (
                        <p className="text-red-500 text-xs mt-1">{formErrors.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <Button
                        type="submit"
                        variant="gradient"
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
