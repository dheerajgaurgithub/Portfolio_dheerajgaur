import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'Car Racing',
      description: 'A thrilling 3D-lane racing game built with React, TypeScript, and HTML5 Canvas. Race through neon-lit highways, avoid obstacles, collect power-ups, and achieve the highest score!',
      technologies: ['React.js', 'TypeScript', 'HTML5 Canvas', 'CSS3'],
      github: 'https://github.com/dheerajgaurgithub/Car_RacingGame',
      live: 'https://dheerajgaurracinggame.netlify.app/',
      featured: true,
      status: 'Completed'
    },
    {
      title: 'Spotify Clone',
      description: 'A music streaming interface clone of Spotify with responsive design, playlist management, and audio controls using vanilla web technologies.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Web Audio API'],
      github: 'https://github.com/dheerajgaurgithub/spotify-clone',
      live: '',
      featured: false,
      status: 'working'
    },
    {
      title: 'Recipe Management System',
      description: 'A CRUD application for managing recipes with EJS templating. Features include adding, editing, deleting, and viewing recipes with a clean interface.',
      technologies: ['Node.js', 'Express.js', 'EJS', 'MongoDB', 'Bootstrap'],
      github: 'https://github.com/dheerajgaurgithub/Recipe-Management-System',
      live: 'https://recipe-management-system-qt53.onrender.com/',
      featured: false,
      status: 'Completed'
    },
    {
      title: 'BhuviKart',
      description: 'E-commerce website clone with product listing, shopping cart functionality, and responsive design built with core web technologies.',
      technologies: ['React(TSX)', 'CSS3', 'Local Storage'],
      github: 'https://github.com/dheerajgaurgithub/BhuviKart-E-Commerce-website-',
      live: 'https://dheerajgaurbhuvikart.netlify.app/',
      featured: true,
      status: 'Completed'
    },
    // {
    //   title: 'Employee Onboarding System',
    //   description: 'Streamline your HR operations with intelligent automation, real-time collaboration, and seamless employee experiences.',
    //   technologies: ['React(jSX)', 'tailwind', 'Local Storage'],
    //   github: 'https://github.com/dheerajgaurgithub/Employee_On_Boarding_System',
    //   live: 'https://employee-on-boarding-system.vercel.app/',
    //   featured: true,
    //   status: 'Completed'
    // },
    {
      title: 'Test Generator',
      description: 'An intelligent test generation system built during Coding Blocks internship. Allows educators to create customized tests with various question types.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
      github: 'https://github.com/dheerajgaurgithub/test-generator',
      live: '#',
      featured: 'working',
      status: 'Completed'
    },
    {
      title: 'Tic-Tac-Toe Game',
      description: 'A CRUD application for managing recipes with EJS templating. Features include adding, editing, deleting, and viewing recipes with a clean interface.',
      technologies: ['TypeScript','CSS','JavaScript'],
      github: 'https://github.com/dheerajgaurgithub/Tic-Tac-Toe-Game',
      live: 'https://tic-tac-toe-game-nu-lyart.vercel.app/game?mode=pvp',
      featured: false,
      status: 'Completed'
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-muted/30">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12 sm:mb-16">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
        Featured <span className="gradient-text">Projects</span>
      </h2>
      <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8 px-2">
        A showcase of my technical skills through real-world applications
      </p>
      <div className="flex justify-center">
        <a 
          href="https://github.com/dheerajgaurgithub"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link text-base sm:text-lg flex items-center gap-2 px-4 py-2 rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-300"
        >
          <Github className="h-4 w-4 sm:h-5 sm:w-5" />
          <span className="hidden xs:inline">View All on GitHub</span>
          <span className="xs:hidden">GitHub</span>
        </a>
      </div>
    </div>

    {/* Featured Projects */}
    <div className="mb-12 sm:mb-16">
      <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center gradient-text">
        Major Projects
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {featuredProjects.map((project, index) => (
          <Card 
            key={index} 
            className="project-card h-full"
            style={{animationDelay: `${index * 0.1}s`}}
          >
            <CardContent className="p-4 sm:p-6 lg:p-8 h-full flex flex-col">
              <div className="flex items-start justify-between mb-4 gap-4">
                <div className="flex-1 min-w-0">
                  <h4 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-primary transition-colors truncate">
                    {project.title}
                  </h4>
                  <Badge 
                    variant="secondary"
                    className="bg-gradient-to-r from-primary/10 to-accent/10 text-primary border border-primary/30 text-xs sm:text-sm"
                  >
                    {project.status}
                  </Badge>
                </div>
                <div className="flex gap-1 sm:gap-2 flex-shrink-0">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 sm:p-2 rounded-lg hover:bg-muted transition-colors"
                    title="View Source"
                    aria-label="View source code"
                  >
                    <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                  {project.live !== '#' && (
                    <a 
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 sm:p-2 rounded-lg hover:bg-muted transition-colors"
                      title="View Live"
                      aria-label="View live demo"
                    >
                      <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5" />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed flex-grow">
                {project.description}
              </p>

              <div className="mt-auto">
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
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
    <div className="mb-12 sm:mb-16">
      <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center gradient-text">
        Other Projects
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {otherProjects.map((project, index) => (
          <Card 
            key={index} 
            className="tech-card h-full"
            style={{animationDelay: `${(index + featuredProjects.length) * 0.1}s`}}
          >
            <CardContent className="p-4 sm:p-5 lg:p-6 h-full flex flex-col">
              <div className="flex items-start justify-between mb-3 sm:mb-4 gap-3">
                <h4 className="text-base sm:text-lg font-semibold group-hover:text-primary transition-colors flex-1 min-w-0">
                  <span className="line-clamp-2">{project.title}</span>
                </h4>
                <div className="flex gap-1 flex-shrink-0">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 rounded hover:bg-muted transition-colors"
                    aria-label="View source code"
                  >
                    <Github className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </a>
                  {project.live !== '#' && (
                    <a 
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 rounded hover:bg-muted transition-colors"
                      aria-label="View live demo"
                    >
                      <ExternalLink className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 flex-grow line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1">
                {project.technologies.slice(0, window.innerWidth < 640 ? 2 : 3).map((tech, techIndex) => (
                  <Badge 
                    key={techIndex} 
                    variant="outline"
                    className="text-xs border-primary/20"
                  >
                    {tech}
                  </Badge>
                ))}
                {project.technologies.length > (window.innerWidth < 640 ? 2 : 3) && (
                  <Badge variant="outline" className="text-xs border-primary/20">
                    +{project.technologies.length - (window.innerWidth < 640 ? 2 : 3)}
                  </Badge>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>

    {/* GitHub Stats */}
    <div className="mt-12 sm:mt-16">
      <Card className="tech-card">
        <CardContent className="p-6 sm:p-8 text-center">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 gradient-text">
            GitHub Activity
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-4 rounded-lg bg-muted/30">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">6+</div>
              <p className="text-sm sm:text-base text-muted-foreground">Public Repositories</p>
            </div>
            <div className="p-4 rounded-lg bg-muted/30">
              <div className="text-2xl sm:text-3xl font-bold text-secondary mb-1 sm:mb-2">5+</div>
              <p className="text-sm sm:text-base text-muted-foreground">Technologies Used</p>
            </div>
            <div className="p-4 rounded-lg bg-muted/30">
              <div className="text-2xl sm:text-3xl font-bold text-accent mb-1 sm:mb-2">100+</div>
              <p className="text-sm sm:text-base text-muted-foreground">Commits This Year</p>
            </div>
          </div>
          <Button 
            className="mt-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90 w-full sm:w-auto text-sm sm:text-base"
            asChild
          >
            <a 
              href="https://github.com/dheerajgaurgithub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />
              <span className="hidden xs:inline">Visit My GitHub</span>
              <span className="xs:hidden">GitHub</span>
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
