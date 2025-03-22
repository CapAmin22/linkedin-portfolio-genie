
import { Project } from '@/lib/types';
import { supabase } from '@/lib/supabase';

// Mock data for projects to get started
// In a real app, this would come from your Supabase database
const projectsData: Project[] = [
  {
    id: "proj1",
    title: "22POULTRY",
    description: "An innovative open-source information platform for the poultry industry, providing real-time statistics, financial assistance information, training resources, and industry updates.",
    tags: ["Product Management", "UX/UI", "Data Analytics", "Strategic Vision"],
    imageUrl: "https://images.unsplash.com/photo-1569431059518-1c327657272c",
    github: "https://github.com/22amin/22poultry",
    completed: true
  },
  {
    id: "proj2",
    title: "AI Employee Referral Platform",
    description: "An AI-powered platform that streamlines the recruitment process by leveraging machine learning for resume scanning, creation, and optimizing employee networks.",
    tags: ["AI/ML", "HR Tech", "Product Management", "User Experience"],
    imageUrl: "https://images.unsplash.com/photo-1568992688065-536aad8a12f6",
    link: "https://theendorse.com",
    completed: true
  },
  {
    id: "proj3",
    title: "MSME Web Applications",
    description: "Developed multiple web applications for small businesses, including a platform for tutoring classes and a showcase site for a local furniture artist.",
    tags: ["Business Analysis", "Figma", "Front-end Development", "UX Design"],
    imageUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
    github: "https://github.com/22amin/msme-web-apps",
    completed: true
  },
  {
    id: "proj4",
    title: "Product Integration System",
    description: "Developed an automated API testing protocol that identified integration issues early, reducing error rates and improving system reliability.",
    tags: ["API Testing", "Postman", "Integration", "Quality Assurance"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    github: "https://github.com/22amin/api-integration-system",
    completed: true
  },
  {
    id: "proj5",
    title: "Customer Journey Analysis Tool",
    description: "A data visualization tool for analyzing customer journeys, identifying pain points, and generating actionable recommendations to improve conversion rates.",
    tags: ["Data Analysis", "User Experience", "A/B Testing", "Visualization"],
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    link: "https://customer-journey-tool.netlify.app",
    github: "https://github.com/22amin/customer-journey-analysis",
    completed: false
  },
  {
    id: "proj6",
    title: "Product Analytics Dashboard",
    description: "Interactive dashboard for product managers to track user engagement metrics, feature adoption, and conversion funnel analytics in real-time.",
    tags: ["Data Visualization", "Product Analytics", "Dashboard Design", "User Metrics"],
    imageUrl: "https://images.unsplash.com/photo-1553484771-11998c592b9c",
    link: "https://product-analytics-dashboard.vercel.app",
    completed: false
  }
];

// Function to get all projects
export const getProjects = async (): Promise<Project[]> => {
  try {
    // First try to get projects from Supabase
    const { data, error } = await supabase
      .from('projects')
      .select('*');
      
    if (error) {
      console.error('Error fetching projects from Supabase:', error);
      // Fall back to mock data if Supabase query fails
      return projectsData;
    }
    
    if (data && data.length > 0) {
      return data as Project[];
    }
    
    // If no data in Supabase, return mock data
    return projectsData;
  } catch (error) {
    console.error('Error in getProjects:', error);
    // Return mock data if any error occurs
    return projectsData;
  }
};

// Function to get a single project by ID
export const getProjectById = async (id: string): Promise<Project | null> => {
  try {
    // First try to get the project from Supabase
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('id', id)
      .single();
      
    if (error) {
      console.error('Error fetching project from Supabase:', error);
      // Fall back to mock data if Supabase query fails
      const mockProject = projectsData.find(project => project.id === id);
      return mockProject || null;
    }
    
    if (data) {
      return data as Project;
    }
    
    // If no data in Supabase, check mock data
    const mockProject = projectsData.find(project => project.id === id);
    return mockProject || null;
  } catch (error) {
    console.error('Error in getProjectById:', error);
    // Check mock data if any error occurs
    const mockProject = projectsData.find(project => project.id === id);
    return mockProject || null;
  }
};
