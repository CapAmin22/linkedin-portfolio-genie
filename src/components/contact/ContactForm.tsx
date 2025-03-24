
import React, { useState } from 'react';
import { ContactFormData, ContactService } from '@/lib/services/contact-service';
import Button from '../ui/Button';
import { SendIcon } from 'lucide-react';
import { AnimateIn } from '../ui/Animation';
import FormField from './FormField';
import SuccessMessage from './SuccessMessage';

const initialFormState: ContactFormData = {
  name: '',
  email: '',
  subject: '',
  message: ''
};

const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState<ContactFormData>(initialFormState);
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
        setFormState(initialFormState);
        
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
    <AnimateIn type="fade-in" delay={100} className="md:w-3/5">
      <div className="bg-background/80 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-white/10">
        <h3 className="text-xl font-bold mb-6 relative inline-block">
          Send Me a Message
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded"></span>
        </h3>
        
        {submitSuccess ? (
          <SuccessMessage />
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                id="name"
                name="name"
                label="Name"
                required
                value={formState.name}
                onChange={handleChange}
                error={formErrors.name}
                placeholder="Your name"
              />
              
              <FormField
                id="email"
                name="email"
                label="Email"
                type="email"
                required
                value={formState.email}
                onChange={handleChange}
                error={formErrors.email}
                placeholder="Your email"
              />
            </div>
            
            <FormField
              id="subject"
              name="subject"
              label="Subject"
              required
              value={formState.subject}
              onChange={handleChange}
              error={formErrors.subject}
              placeholder="Subject of your message"
            />
            
            <FormField
              id="message"
              name="message"
              label="Message"
              type="textarea"
              required
              value={formState.message}
              onChange={handleChange}
              error={formErrors.message}
              placeholder="Your message"
            />
            
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
  );
};

export default ContactForm;
