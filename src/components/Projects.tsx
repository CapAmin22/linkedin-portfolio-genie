
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Section from './ui/Section';
import { AnimateIn, StaggeredChildren } from './ui/Animation';
import { Project } from '@/lib/types';
import { cn } from '@/lib/utils';
import Button from './ui/Button';
import { ExternalLinkIcon, GithubIcon, ArrowRightIcon } from 'lucide-react';

interface ProjectsProps {
  projects: Project[];
}

// ProjectCard component
const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  
  useEffect(() => {
    const img = new Image();
    img.src = project.imageUrl;
    img.onload = () => {
      setIsImageLoaded(true);
    };
  }, [project.imageUrl]);

  return (
    <div className="group relative w-full rounded-lg overflow-hidden shadow-md border transition-all duration-300 hover:shadow-lg bg-background">
      {/* Image container */}
      <div className="relative aspect-video overflow-hidden">
        <div 
          className={cn(
            "w-full h-full bg-secondary/40 absolute inset-0 transition-opacity duration-500",
            isImageLoaded ? "opacity-0" : "opacity-100"
          )}
        />
        <img 
          src={project.imageUrl}
          alt={project.title}
          className={cn(
            "w-full h-full object-cover transition-all duration-500",
            isImageLoaded ? "image-blur-loaded" : "image-blur-loading"
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Hover overlay with buttons */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex space-x-3">
            <Link to={`/project/${project.id}`}>
              <Button
                size="sm"
                icon={<ArrowRightIcon size={16} />}
                iconPosition="right"
              >
                View Details
              </Button>
            </Link>
            
            {project.github && (
              <Button
                variant="outline"
                size="sm"
                href={project.github}
                icon={<GithubIcon size={16} />}
                iconPosition="right"
                className="bg-background/80 backdrop-blur-sm"
              >
                Code
              </Button>
            )}
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-5">
        <Link to={`/project/${project.id}`} className="hover:text-primary transition-colors">
          <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
        </Link>
        <p className="text-foreground/70 text-sm line-clamp-2 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-2 py-1 bg-secondary text-foreground/80 rounded text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <Section id="projects" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <AnimateIn type="fade-in-up">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Portfolio
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
          </div>
        </AnimateIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <AnimateIn 
              key={project.id} 
              type="fade-in-up" 
              delay={index * 100}
              threshold={0.1}
            >
              <ProjectCard project={project} />
            </AnimateIn>
          ))}
        </div>
        
        {projects.length > 6 && (
          <AnimateIn type="fade-in" delay={600} className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              href="#"
            >
              View All Projects
            </Button>
          </AnimateIn>
        )}
      </div>
    </Section>
  );
};

export default Projects;
