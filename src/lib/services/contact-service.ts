
import { toast } from "@/components/ui/use-toast";

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
      
      // In a real application, you would make an API call here
      // For demonstration purposes, we'll simulate a successful submission
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Log the submission (this would be an API call in production)
      console.log("Form submitted successfully:", formData);
      
      // Show success toast
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
        variant: "default",
      });
      
      return true;
    } catch (error) {
      console.error("Error submitting form:", error);
      
      // Show error toast
      toast({
        title: "Something went wrong",
        description: "Unable to send your message. Please try again later.",
        variant: "destructive",
      });
      
      return false;
    }
  }
}
