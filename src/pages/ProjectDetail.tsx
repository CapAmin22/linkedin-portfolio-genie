
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { AnimateIn } from '@/components/ui/Animation';
import { Project } from '@/lib/types';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/ui/Button';
import { ArrowLeftIcon, ExternalLinkIcon, GithubIcon } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { getProjectById } from '@/lib/services/project-service';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

const ProjectDetail: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  
  const { data: project, isLoading, error } = useQuery({
    queryKey: ['project', projectId],
    queryFn: () => getProjectById(projectId || ''),
    enabled: !!projectId,
  });

  useEffect(() => {
    if (project) {
      document.title = `${project.title} | Amin Shaikh Portfolio`;
    }
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [project]);

  const contactInfo = {
    email: "shaikhaminrehman302@outlook.com",
    linkedin: "https://linkedin.com/in/22amin",
    website: "www.linkedin.com/in/22amin",
    location: "Bengaluru, Karnataka, India"
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-10 w-40 bg-secondary rounded mb-4"></div>
          <div className="h-6 w-64 bg-secondary/50 rounded"></div>
        </div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-4">Project not found</h1>
        <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist or has been removed.</p>
        <Link to="/" className="text-primary hover:underline">
          Return to homepage
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background antialiased">
      <Header />
      
      <main>
        {/* Hero section with project image */}
        <section className="relative pt-20 pb-12 md:pb-20 bg-secondary/10 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background/50 to-transparent opacity-70 -z-10" />
          
          <div className="container mx-auto px-4">
            <AnimateIn type="fade-in-up" delay={100}>
              <Link 
                to="/#projects" 
                className="inline-flex items-center text-sm text-foreground/70 hover:text-primary mb-6 transition-colors"
              >
                <ArrowLeftIcon size={16} className="mr-2" />
                Back to Projects
              </Link>
            </AnimateIn>
            
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
              <AnimateIn type="fade-in-up" delay={200}>
                <h1 className="text-3xl md:text-4xl font-bold">{project.title}</h1>
              </AnimateIn>
              
              <AnimateIn type="fade-in" delay={300}>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </AnimateIn>
            </div>
            
            <AnimateIn type="fade-in" delay={400}>
              <div className="relative aspect-video w-full max-w-5xl mx-auto overflow-hidden rounded-lg shadow-lg border border-border">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
            </AnimateIn>
          </div>
        </section>
        
        {/* Project details */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Left column - Main content */}
              <div className="lg:col-span-2">
                <AnimateIn type="fade-in-up" delay={100}>
                  <div className="prose prose-lg max-w-none mb-10">
                    <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
                    <p className="text-foreground/80">{project.description}</p>
                    
                    {/* Extended description - this would come from the detailed project data */}
                    <p className="text-foreground/80 mt-4">
                      This project represents a significant milestone in addressing industry challenges through innovative technological solutions. It incorporates user-centered design principles with robust technical implementation to create a seamless and intuitive experience.
                    </p>
                    
                    <p className="text-foreground/80 mt-4">
                      The development process involved extensive research, prototyping, and iterative testing to ensure that the final product meets the needs of all stakeholders while maintaining high performance and scalability standards.
                    </p>
                  </div>
                </AnimateIn>
                
                <AnimateIn type="fade-in-up" delay={200}>
                  <div className="mb-10">
                    <h2 className="text-2xl font-bold mb-6">Key Features</h2>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="mr-3 text-primary mt-1">
                          <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                            <span className="text-primary text-sm">1</span>
                          </div>
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">User-Centric Design</h3>
                          <p className="text-foreground/70 text-sm">
                            Intuitive interface that prioritizes user experience and accessibility across all devices.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-3 text-primary mt-1">
                          <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                            <span className="text-primary text-sm">2</span>
                          </div>
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">Advanced Data Analysis</h3>
                          <p className="text-foreground/70 text-sm">
                            Robust data processing capabilities with real-time analytics and visualization.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-3 text-primary mt-1">
                          <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                            <span className="text-primary text-sm">3</span>
                          </div>
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">Seamless Integration</h3>
                          <p className="text-foreground/70 text-sm">
                            Easy integration with existing systems and third-party services through well-documented APIs.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-3 text-primary mt-1">
                          <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                            <span className="text-primary text-sm">4</span>
                          </div>
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">Scalable Architecture</h3>
                          <p className="text-foreground/70 text-sm">
                            Built on a foundation that can easily scale to accommodate growth and increased demand.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </AnimateIn>
                
                <AnimateIn type="fade-in-up" delay={300}>
                  <div className="mb-10">
                    <h2 className="text-2xl font-bold mb-6">Technologies Used</h2>
                    <div className="flex flex-wrap gap-3">
                      {project.tags.concat(['React', 'TypeScript', 'Tailwind CSS', 'Figma', 'Node.js']).map((tech, index) => (
                        <div 
                          key={`tech-${index}`} 
                          className="px-4 py-2 bg-secondary rounded-md text-sm font-medium"
                        >
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimateIn>
                
                {/* Optional: Project Gallery */}
                <AnimateIn type="fade-in-up" delay={400}>
                  <div className="mb-10">
                    <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="aspect-video rounded-lg overflow-hidden border border-border">
                        <img 
                          src={project.imageUrl} 
                          alt={`${project.title} screenshot 1`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="aspect-video rounded-lg overflow-hidden border border-border">
                        <img 
                          src="https://images.unsplash.com/photo-1553484771-11998c592b9c" 
                          alt={`${project.title} screenshot 2`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </AnimateIn>
              </div>
              
              {/* Right column - Sidebar */}
              <div className="space-y-8">
                <AnimateIn type="fade-in" delay={200}>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <h3 className="text-sm font-medium text-muted-foreground">STATUS</h3>
                          <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${project.completed ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' : 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400'}`}>
                            {project.completed ? 'Completed' : 'In Progress'}
                          </span>
                        </div>
                        
                        <div>
                          <h3 className="text-sm font-medium text-muted-foreground mb-2">PROJECT LINKS</h3>
                          <div className="space-y-3">
                            {project.link && (
                              <Button
                                variant="outline"
                                size="sm"
                                href={project.link}
                                icon={<ExternalLinkIcon size={16} />}
                                iconPosition="right"
                                fullWidth
                              >
                                View Live Demo
                              </Button>
                            )}
                            
                            {project.github && (
                              <Button
                                variant="outline"
                                size="sm"
                                href={project.github}
                                icon={<GithubIcon size={16} />}
                                iconPosition="right"
                                fullWidth
                              >
                                View Source Code
                              </Button>
                            )}
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-sm font-medium text-muted-foreground mb-2">CREATED BY</h3>
                          <div className="flex items-center space-x-3">
                            <Avatar>
                              <AvatarImage src="/lovable-uploads/b3c0efc4-917f-4545-a9bc-e3ae493900f8.png" alt="Amin Shaikh" />
                              <AvatarFallback>AS</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">Amin Shaikh</div>
                              <div className="text-sm text-muted-foreground">Product Management Professional</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimateIn>
                
                <AnimateIn type="fade-in" delay={300}>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-sm font-medium text-muted-foreground mb-4">GET IN TOUCH</h3>
                      <p className="text-sm text-foreground/70 mb-4">
                        Interested in learning more about this project or discussing potential collaboration opportunities?
                      </p>
                      <Button
                        variant="default"
                        size="sm"
                        href="/contact"
                        fullWidth
                      >
                        Contact Me
                      </Button>
                    </CardContent>
                  </Card>
                </AnimateIn>
              </div>
            </div>
          </div>
        </section>
        
        {/* Related Projects */}
        <section className="py-12 md:py-20 bg-secondary/10">
          <div className="container mx-auto px-4">
            <AnimateIn type="fade-in-up">
              <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">Related Projects</h2>
            </AnimateIn>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* This would be populated with actual related projects */}
              {[1, 2, 3].map((i) => (
                <AnimateIn key={i} type="fade-in-up" delay={i * 100}>
                  <Card className="group hover:shadow-lg transition-all duration-300">
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      <img 
                        src={`https://images.unsplash.com/photo-${i === 1 ? '1499750310107-5fef28a66643' : i === 2 ? '1551288049-bebda4e38f71' : '1460925895917-afdab827c52f'}`}
                        alt={`Related project ${i}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-5">
                      <h3 className="font-semibold mb-2">Related Project {i}</h3>
                      <p className="text-sm text-foreground/70 mb-4">
                        Another impressive project showcasing similar skills and technologies.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 2).map((tag, index) => (
                          <span 
                            key={index} 
                            className="px-2 py-1 bg-secondary text-foreground/80 rounded text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </AnimateIn>
              ))}
            </div>
            
            <AnimateIn type="fade-in" delay={400} className="text-center mt-10">
              <Link to="/#projects">
                <Button variant="outline">
                  View All Projects
                </Button>
              </Link>
            </AnimateIn>
          </div>
        </section>
      </main>
      
      <Footer contactInfo={contactInfo} fullName="Amin Shaikh" />
    </div>
  );
};

export default ProjectDetail;
