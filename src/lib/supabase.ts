
import { createClient } from '@supabase/supabase-js';
import { FormSubmissionResponse } from './types';

const supabaseUrl = 'https://klmhyqxutkvnjbfyaqtn.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtsbWh5cXh1dGt2bmpiZnlhcXRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI2MTc4NTYsImV4cCI6MjA1ODE5Mzg1Nn0.GrVck9HY1YRDZtBrG81LjsrcOPHdsOTdP76BlikZ-gk';

export const supabase = createClient(supabaseUrl, supabaseKey);

// Contact message service
export async function submitContactMessage(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): Promise<FormSubmissionResponse> {
  try {
    const { error } = await supabase
      .from('contact_messages')
      .insert([
        { 
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
          created_at: new Date().toISOString()
        }
      ]);

    if (error) throw error;
    
    return {
      success: true,
      message: 'Message sent successfully!'
    };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to send message. Please try again.'
    };
  }
}
