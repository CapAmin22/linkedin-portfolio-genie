
import React from 'react';
import { AnimateIn } from '../ui/Animation';

const ContactHeader: React.FC = () => {
  return (
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
  );
};

export default ContactHeader;
