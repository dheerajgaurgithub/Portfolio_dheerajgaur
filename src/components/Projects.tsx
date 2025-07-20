import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'Social Media Platform',
      description: 'A full-featured social media platform built with MERN stack. Features include user authentication, post creation, real-time messaging, and social interactions.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'JWT'],
      github: 'https://github.com/dheerajgaurgithub/social-media-platform',
      live: '#',
      featured: true,
      status: 'Completed'
    },
    {
      title: 'Spotify Clone',
      description: 'A music streaming interface clone of Spotify with responsive design, playlist management, and audio controls using vanilla web technologies.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Web Audio API'],
      github: 'https://github.com/dheerajgaurgithub/spotify-clone',
      live: '#',
      featured: true,
      status: 'Completed'
    },
    {
      title: 'Recipe Management System',
      description: 'A CRUD application for managing recipes with EJS templating. Features include adding, editing, deleting, and viewing recipes with a clean interface.',
      technologies: ['Node.js', 'Express.js', 'EJS', 'MongoDB', 'Bootstrap'],
      github: 'https://github.com/dheerajgaurgithub/Recipe-Management-System',
      live: '#',
      featured: true,
      status: 'Completed'
    },
    {
      title: 'BhuviKart',
      description: 'E-commerce website clone with product listing, shopping cart functionality, and responsive design built with core web technologies.',
      technologies: ['React(TSX)', 'CSS3', 'JavaScript', 'Local Storage'],
      github: 'https://github.com/dheerajgaurgithub/amazon-clone',
      live: 'https://dheerajgaurbhuvikart.netlify.app/',
      featured: false,
      status: 'Completed'
    },
    {
      title: 'Test Generator',
      description: 'An intelligent test generation system built during Coding Blocks internship. Allows educators to create customized tests with various question types.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
      github: 'https://github.com/dheerajgaurgithub/test-generator',
      live: '#',
      featured: false,
      status: 'Completed'
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            A showcase of my technical skills through real-world applications
          </p>
          <div className="flex justify-center">
            <a 
              href="https://github.com/dheerajgaurgithub"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link text-lg"
            >
              <Github className="h-5 w-5" />
              View All on GitHub
            </a>
          </div>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center gradient-text">Major Projects</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <Card 
                key={index} 
                className="project-card h-full"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h4>
                      <Badge 
                        variant="secondary"
                        className="bg-gradient-to-r from-primary/10 to-accent/10 text-primary border border-primary/30"
                      >
                        {project.status}
                      </Badge>
                    </div>
                    <div className="flex gap-2">
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg hover:bg-muted transition-colors"
                        title="View Source"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="outline"
                          className="text-xs border-primary/20 hover:border-primary/50 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center gradient-text">Other Projects</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {otherProjects.map((project, index) => (
              <Card 
                key={index} 
                className="tech-card h-full"
                style={{animationDelay: `${(index + featuredProjects.length) * 0.1}s`}}
              >
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <div className="flex gap-1">
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 rounded hover:bg-muted transition-colors"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="outline"
                        className="text-xs border-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs border-primary/20">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* GitHub Stats */}
        <div className="mt-16">
          <Card className="tech-card">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 gradient-text">GitHub Activity</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">6+</div>
                  <p className="text-muted-foreground">Public Repositories</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary mb-2">5+</div>
                  <p className="text-muted-foreground">Technologies Used</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">100+</div>
                  <p className="text-muted-foreground">Commits This Year</p>
                </div>
              </div>
              <Button 
                className="mt-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                asChild
              >
                <a 
                  href="https://github.com/dheerajgaurgithub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  Visit My GitHub
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
