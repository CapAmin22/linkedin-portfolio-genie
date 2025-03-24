
import React, { useState } from 'react';
import { ContactFormData, ContactService } from '@/lib/services/contact-service';
import { Input } from '../ui/input';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import Button from '../ui/Button';
import { SendIcon } from 'lucide-react';
import { AnimateIn } from '../ui/Animation';
import { Textarea } from '../ui/textarea';

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
              <Textarea
                id="message"
                name="message"
                required
                value={formState.message}
                onChange={handleChange}
                rows={5}
                className={`w-full transition-all duration-300 border-white/10 bg-white/5 focus:border-indigo-500 focus:ring-indigo-500/20 resize-none ${formErrors.message ? 'border-red-500 bg-red-500/5' : ''}`}
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
  );
};

export default ContactForm;
