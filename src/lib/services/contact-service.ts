
import { toast } from "@/hooks/use-toast";
import { submitContactMessage } from "@/lib/supabase";

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export class ContactService {
  static async submitContactForm(formData: ContactFormData): Promise<boolean> {
    try {
      console.log("Submitting form data:", formData);
      
      // Validate email format
      if (!formData.email.includes('@')) {
        throw new Error('Invalid email format');
      }
      
      // Submit to Supabase
      const response = await submitContactMessage(formData);
      
      if (!response.success) {
        throw new Error(response.message);
      }
      
      // Show success toast
      toast({
        title: "Message Sent Successfully!",
        description: "Thanks for reaching out. I'll get back to you soon.",
        variant: "default",
      });
      
      return true;
    } catch (error) {
      console.error("Error submitting form:", error);
      
      // Show detailed error toast
      const errorMessage = error instanceof Error ? error.message : "Something went wrong";
      
      toast({
        title: "Message could not be sent",
        description: errorMessage || "Please try again later.",
        variant: "destructive",
      });
      
      return false;
    }
  }
}
