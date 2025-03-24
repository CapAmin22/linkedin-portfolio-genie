
import React from 'react';

const ContactBackground: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
      <div className="absolute -top-48 -left-48 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl opacity-70" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-indigo-500/10 rounded-full filter blur-3xl opacity-60" />
      <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl opacity-60" />
    </div>
  );
};

export default ContactBackground;
