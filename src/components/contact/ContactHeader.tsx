
import React from 'react';
import { AnimateIn } from '../ui/Animation';

const ContactHeader: React.FC = () => {
  return (
    <AnimateIn type="fade-in-up">
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-1 bg-gradient-to-r from-indigo-600/60 to-purple-600/60 text-white font-medium rounded-full text-sm mb-4 border border-indigo-400/30">
          Get In Touch
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Let's Connect</h2>
        <p className="text-gray-200 max-w-xl mx-auto leading-relaxed">
          Feel free to reach out if you're looking for a collaborator, have a question, or just want to connect.
        </p>
      </div>
    </AnimateIn>
  );
};

export default ContactHeader;
