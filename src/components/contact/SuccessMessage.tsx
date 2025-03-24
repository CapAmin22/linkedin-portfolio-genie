
import React from 'react';
import { Alert, AlertTitle, AlertDescription } from '../ui/alert';

const SuccessMessage: React.FC = () => {
  return (
    <Alert className="bg-green-500/10 border-green-500/30 text-green-600 animate-fade-in">
      <AlertTitle className="text-lg font-semibold">Thank you for your message!</AlertTitle>
      <AlertDescription>
        I'll get back to you as soon as possible. Feel free to connect with me on social media in the meantime.
      </AlertDescription>
    </Alert>
  );
};

export default SuccessMessage;
