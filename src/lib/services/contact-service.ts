
import { toast } from "@/hooks/use-toast";

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
      
      // In a real application, this would be an API call
      // For demonstration, we'll simulate a successful submission with network delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulate validation - email validation on backend side
      if (!formData.email.includes('@')) {
        throw new Error('Invalid email format');
      }
      
      // Log the submission (this would be an API call in production)
      console.log("Form submitted successfully:", formData);
      
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
