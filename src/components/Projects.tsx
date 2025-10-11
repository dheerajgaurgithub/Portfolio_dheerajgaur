import React, { useEffect, useMemo, useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import ebcImg from './project images/ebc.png';
import shikfyImg from './project images/shikfy.png';
import lanracerImg from './project images/lanracer.png';
import bhuvikartImg from './project images/bhuvikart.png';
import jovacImg from './project images/jovacproject.png';
import ereaderImg from './project images/ereader.png';
import proposeImg from './project images/propose.png';

const Projects = () => {
  const projects = [
    {
      title: 'EarnByCode',
      description: 'A platform focused on coding-based opportunities with resources, tasks, and a clean UX for learners and contributors.',
      technologies: ['React', 'TypeScript', 'TailwindCSS'],
      github: 'https://github.com/dheerajgaurgithub/EarnByCode',
      live: 'https://earnbycode-ebc.vercel.app/',
      featured: true,
      status: 'Completed'
    },
    {
      title: 'ShikFy',
      description: 'An educational platform delivering curated content and a responsive interface for learners.',
      technologies: ['React', 'JavaScript', 'CSS'],
      github: 'https://github.com/dheerajgaurgithub/Shikfy',
      live: 'https://shikfy.netlify.app/',
      featured: true,
      status: 'Completed'
    },
    {
      title: 'Car Racing Game',
      description: 'A thrilling web application racing game with modern UI and engaging gameplay mechanics.',
      technologies: ['React.js', 'TypeScript', 'HTML5 Canvas', 'CSS3'],
      github: 'https://github.com/dheerajgaurgithub/Car_RacingGame',
      live: 'https://car-racing-game-beta-six.vercel.app/',
      featured: true,
      status: 'Completed'
    },
    {
      title: 'Jovac Project - TestGenerator',
      description: 'TestGenerator is a comprehensive, AI-powered test creation and management platform built with the MERN stack. It enables educators to automatically generate tests from PDF documents and provides student management features.',
      technologies: ['MERN Stack', 'MongoDB', 'Express.js', 'React.js', 'Node.js'],
      github: 'https://github.com/dheerajgaurgithub/Jovac-Project',
      live: 'https://jovac-project-lilac.vercel.app/',
      featured: true,
      status: 'Completed'
    },
    {
      title: 'BhuviKart E-Commerce',
      description: 'A fully responsive e-commerce website built using React(TSX) and CSS only – no frameworks or libraries. Features home page with product listings, product details, add to cart functionality, and checkout process.',
      technologies: ['React(TSX)', 'CSS3', 'Local Storage'],
      github: 'https://github.com/dheerajgaurgithub/BhuviKart-E-Commerce-website-',
      live: 'https://dheerajgaurbhuvikart.netlify.app/',
      featured: true,
      status: 'Completed'
    },
    {
      title: 'E-Reader Platform',
      description: 'A full-stack E-Reader Platform using MERN (MongoDB, Express, React, Node.js) with Vite and Tailwind CSS. Features modern UI, admin can add songs, playlists & albums, and user authentication.',
      technologies: ['MERN Stack', 'Vite', 'Material-UI CSS', 'MongoDB'],
      github: 'https://github.com/dheerajgaurgithub/E-Reader-integraminds',
      live: 'https://e-reader-integraminds-figg.vercel.app/',
      featured: true,
      status: 'Completed'
    },
    {
      title: 'Recipe Management System',
      description: 'CRUD Operation system for recipe management - add, delete, update recipes with a clean and intuitive interface.',
      technologies: ['Node.js', 'Express.js', 'EJS', 'MongoDB', 'Bootstrap'],
      github: 'https://github.com/dheerajgaurgithub/Recipe-Management-System',
      live: 'https://recipe-management-system-qt53.onrender.com/',
      featured: false,
      status: 'Completed'
    },
    {
      title: 'Tic-Tac-Toe Game',
      description: 'A classic Tic Tac Toe game showcasing the power of combining HTML, CSS, JavaScript, and React with modern UI and interactive gameplay.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'React'],
      github: 'https://github.com/dheerajgaurgithub/Tic-Tac-Toe-Game',
      live: 'https://tic-tac-toe-game-nu-lyart.vercel.app/game?mode=pvp',
      featured: false,
      status: 'Completed'
    },
    {
      title: 'Todo List App',
      description: 'A clean and intuitive todo list application for managing daily tasks and productivity. Features task creation, completion tracking, and organized task management.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Local Storage'],
      github: 'https://github.com/dheerajgaurgithub/todoList',
      live: 'https://dheerajstodolist.netlify.app/',
      featured: false,
      status: 'Completed'
    },
    {
      title: 'Propose Your Crush',
      description: 'A fun and interactive web application designed to help users propose to their crush in a creative and engaging way. Built with modern web technologies.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      github: 'https://github.com/dheerajgaurgithub/propsal',
      live: 'https://proposedheeraj.netlify.app/',
      featured: true,
      status: 'Completed'
    },
    {
      title: 'LeetCode Problems',
      description: 'A collection of my solutions to LeetCode problems in Java. Each solution is clean, well-commented, and optimized for readability and performance. Categorized by topic and difficulty.',
      technologies: ['Java', 'Data Structures', 'Algorithms', 'Problem Solving'],
      github: 'https://github.com/dheerajgaurgithub/LeetCode_Problems',
      live: '',
      featured: false,
      status: 'Ongoing'
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  const screenshotUrl = (url: string) => {
    if (!url || url === '#') return '';
    try {
      return `https://image.thum.io/get/width/1600/${encodeURIComponent(url)}`;
    } catch {
      return '';
    }
  };

  const username = 'dheerajgaurgithub';
  const [profile, setProfile] = useState<{ public_repos: number; followers: number; following: number; public_gists: number } | null>(null);
  const [repos, setRepos] = useState<any[]>([]);
  const [loadingRepos, setLoadingRepos] = useState<boolean>(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${username}`, {
          headers: { Accept: 'application/vnd.github+json' }
        });
        if (res.ok) {
          const data = await res.json();
          setProfile(data);
        }
      } catch {}
    };

    const fetchRepos = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=30&sort=updated`, {
          headers: { Accept: 'application/vnd.github+json' }
        });
        if (res.ok) {
          const data = await res.json();
          setRepos(data);
        }
      } catch {}
      finally {
        setLoadingRepos(false);
      }
    };

    fetchProfile();
    fetchRepos();
  }, []);

  const mappedRepos = useMemo(() => {
    const excludeTitles = new Set(projects.map(p => p.title.toLowerCase()));
    return repos
      .filter(r => !r.fork)
      .filter(r => !excludeTitles.has(String(r.name).toLowerCase()))
      .slice(0, 9)
      .map(r => ({
        title: r.name,
        description: r.description || 'No description provided.',
        technologies: [r.language].filter(Boolean),
        github: r.html_url,
        live: r.homepage && r.homepage.trim() !== '' ? r.homepage : '#',
        featured: false,
        status: 'Public'
      }));
  }, [repos, projects]);

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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {featuredProjects.map((project, index) => (
          <Card 
            key={index} 
            className="group h-full overflow-hidden border-0 bg-transparent shadow-none ring-0 rounded-xl"
            style={{animationDelay: `${index * 0.1}s`}}
          >
            <CardContent 
              className="p-4 sm:p-6 lg:p-8 h-full flex flex-col relative text-white transition-all duration-300 brightness-110 group-hover:brightness-100"
              style={{ 
                backgroundImage: 
                  project.title === 'EarnByCode' ? `url(${ebcImg})` :
                  project.title === 'ShikFy' ? `url(${shikfyImg})` :
                  project.title === 'Car Racing Game' ? `url(${lanracerImg})` :
                  project.title === 'BhuviKart E-Commerce' ? `url(${bhuvikartImg})` :
                  project.title === 'Jovac Project - TestGenerator' ? `url(${jovacImg})` :
                  project.title === 'E-Reader Platform' ? `url(${ereaderImg})` :
                  project.title === 'Propose Your Crush' ? `url(${proposeImg})` :
                  (project.live !== '#' ? `url(${screenshotUrl(project.live)})` : undefined),
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10 flex flex-col h-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
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
                      className="p-1.5 sm:p-2 rounded-lg hover:bg-muted transition-colors bg-white/10 backdrop-blur"
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
                        className="p-1.5 sm:p-2 rounded-lg hover:bg-muted transition-colors bg-white/10 backdrop-blur"
                        title="View Live"
                        aria-label="View live demo"
                      >
                        <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-sm sm:text-base text-white/90 mb-4 sm:mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="outline"
                        className="text-xs border-white/40 text-white/90 bg-black/20 backdrop-blur"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>

    {/* Other Projects removed as requested */}

    {/* GitHub Stats */}
    <div className="mt-12 sm:mt-16">
      <Card className="tech-card">
        <CardContent className="p-6 sm:p-8 text-center">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 gradient-text">
            GitHub Activity
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-4 rounded-lg bg-muted/30">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">{profile?.public_repos ?? '—'}</div>
              <p className="text-sm sm:text-base text-muted-foreground">Public Repositories</p>
            </div>
            <div className="p-4 rounded-lg bg-muted/30">
              <div className="text-2xl sm:text-3xl font-bold text-secondary mb-1 sm:mb-2">{profile?.followers ?? '—'}</div>
              <p className="text-sm sm:text-base text-muted-foreground">Followers</p>
            </div>
            <div className="p-4 rounded-lg bg-muted/30">
              <div className="text-2xl sm:text-3xl font-bold text-accent mb-1 sm:mb-2">{profile?.following ?? '—'}</div>
              <p className="text-sm sm:text-base text-muted-foreground">Following</p>
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
