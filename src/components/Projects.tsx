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
import todolistImg from './project images/todolist.png';
import tictactoeImg from './project images/tictactoe.png';
const Projects = () => {
  const projects = [
    {
      title: 'EarnByCode',
      description: `EarnByCode is an interactive platform designed to empower learners and developers through coding-based opportunities, challenges, and curated learning resources. Built using React, TypeScript, and TailwindCSS, the platform offers a clean, responsive, and engaging user experience focused on growth and collaboration.
      Key Features:
      - 💻 Explore coding challenges, resources, and learning materials in one place.
      - 🚀 Interactive task dashboard allowing contributors to add, update, and manage coding opportunities.
      - 🧠 Learner-friendly design with a focus on clarity, performance, and accessibility.
      - 🌐 Fully responsive UI built with TailwindCSS, ensuring a seamless experience across all devices.
      - ⚙️ Modular architecture and clean TypeScript codebase for scalability and maintainability.`,
      technologies: ['React', 'TypeScript', 'TailwindCSS'],
      github: 'https://github.com/dheerajgaurgithub/EarnByCode',
      live: 'https://earnbycode-ebc.vercel.app/',
      featured: true,
      status: 'Completed'
    },
    {
      title: 'ShikFy',
      description: `ShikFy is a modern social media platform built with React, designed to help young users connect, share moments, and engage with their community in an interactive environment. The platform focuses on simplicity, speed, and seamless user experience — featuring a responsive interface inspired by real-world social platforms.
      Key Features:
      - 💬 Users can post updates, share photos, and interact through likes and comments.
      - 👥 Dynamic feed system with real-time post rendering and profile interactions.
      - 🔐 Authentication and session handling for secure access and personalized experience.
      - 🌙 Modern UI with smooth animations, responsive layouts, and mobile-friendly design.
      - ⚙️ Clean, modular code structure built entirely with React and CSS — easy to extend with a backend or database integration.
      `,
      technologies: ['React', 'JavaScript (ES6+)', 'CSS3'],
      github: 'https://github.com/dheerajgaurgithub/Shikfy',
      live: 'https://shikfy.netlify.app/',
      featured: true,
      status: 'Completed'
    },
    {
      title: 'Car Racing Game',
      description: `An interactive and thrilling web-based car racing game built using React.js and TypeScript, featuring smooth gameplay and visually appealing UI. The game utilizes HTML5 Canvas for real-time rendering and animations, offering a fast, responsive, and immersive racing experience directly in the browser.
      Key Features:
      - 🏎️ Real-time racing mechanics using HTML5 Canvas for high-performance rendering.
      - 🎮 Player-controlled car with keyboard interactions and collision detection.
      - ⚡ Dynamic obstacle generation and scoring system to increase difficulty as you progress.
      - 🎨 Responsive and modern UI designed with pure CSS3 and React components.
      - 💾 Optimized state management and animation loops for smooth gameplay.`,
      technologies: ['React.js', 'TypeScript', 'HTML5 Canvas', 'CSS3'],
      github: 'https://github.com/dheerajgaurgithub/Car_RacingGame',
      live: 'https://car-racing-game-beta-six.vercel.app/',
      featured: true,
      status: 'Completed'
    },
    {
      title: 'Jovac Project - TestGenerator',
      description: `TestGenerator is a powerful AI-powered test creation and management platform designed for educators, built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The platform streamlines the process of generating tests from PDF documents, while providing robust student management and performance tracking features.
      Key Features:
      - 📄 Automatic test generation from PDF documents using AI-powered parsing.
      - 👩‍🏫 Educator dashboard to manage students, tests, and results efficiently.
      - 📝 Student module for taking tests, tracking progress, and viewing scores.
      - 🌐 Responsive and modern UI built with React.js and CSS for seamless interaction.
      - ⚙️ Modular backend with Express.js and MongoDB ensuring scalability and secure data handling.
      `,
      technologies: ['MERN Stack', 'MongoDB', 'Express.js', 'React.js', 'Node.js'],
      github: 'https://github.com/dheerajgaurgithub/Jovac-Project',
      live: 'https://jovac-project-lilac.vercel.app/',
      featured: true,
      status: 'Completed'
    },
    {
      title: 'BhuviKart E-Commerce',
      description: `BhuviKart is a fully responsive and dynamic e-commerce web application built entirely with React (TypeScript + TSX) and pure CSS — without using any external frameworks or libraries. The project showcases clean UI design, optimized performance, and component-based architecture.
      Key Features:
      - 🏠 Modern and responsive home page with interactive product listings.
      - 🛒 Product detail pages with smooth navigation and add-to-cart functionality.
      - 💳 Complete checkout flow powered by Local Storage for cart management.
      - 🔍 Dynamic filtering and product rendering using reusable React components.
      - ⚡ Lightweight and fast performance optimized with TypeScript and Vite setup.
      `,
      technologies: ['React(TSX)', 'CSS3', 'Local Storage'],
      github: 'https://github.com/dheerajgaurgithub/BhuviKart-E-Commerce-website-',
      live: 'https://dheerajgaurbhuvikart.netlify.app/',
      featured: true,
      status: 'Completed'
    },
    {
      title: 'E-Reader Platform',
      description: `An advanced full-stack E-Reader web application built with Flask (Python) on the backend and React (Vite + Tailwind CSS) on the frontend. The platform delivers a seamless digital reading and listening experience with dynamic content management.
      It includes secure user authentication, an admin dashboard for uploading and managing songs, playlists, and albums, and a personalized user interface for interactive content engagement. The project is optimized for high performance, responsive design, and modular scalability.
      - Complete Flask backend with RESTful API endpoints for authentication, content management, and user data.
      - React frontend integrated with Flask using fetch/axios for API communication.
      - Database integration using MongoDB for dynamic data storage.
      - Configuration for environment variables, deployment setup (Vercel + Flask server), and well-structured code with comments for easy understanding.
      - Admin and user modules separated cleanly for scalability and collaboration.`,
      technologies:['Flask', 'React', 'Vite', 'Tailwind CSS', 'MongoDB', 'REST API'],
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
      description: `Tic-Tac-Toe Game is a modern take on the classic game, built with React, HTML5, CSS3, and JavaScript. The platform combines a sleek, interactive UI with smooth gameplay mechanics, making it enjoyable for players of all ages.
Key Features:
- 🎮 Play against another player with real-time interactive moves.
- 🌐 Responsive design ensuring the game works seamlessly on desktop and mobile devices.
- ⚡ Modern UI with animations for a polished and engaging user experience.
- 🔄 Reset or replay the game easily with a single click.
- 👨‍💻 Modular React components for game board, squares, and score tracking, making the codebase clean and maintainable.`,
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'React'],
      github: 'https://github.com/dheerajgaurgithub/Tic-Tac-Toe-Game',
      live: 'https://tic-tac-toe-game-nu-lyart.vercel.app/',
      featured: true,
      status: 'Completed'
    },
    {
      title: 'Todo List App',
      description: `Todo List App is a clean, intuitive, and responsive web application designed to help users manage daily tasks efficiently. Built with HTML5, CSS3, and JavaScript, it focuses on simplicity, productivity, and smooth user experience.
Key Features:
- ✅ Add, edit, and delete tasks with ease.
- 📌 Mark tasks as complete and track progress dynamically.
- 📂 Organize tasks by categories or priorities (optional extensions possible).
- 💾 Persistent task storage using Local Storage for data retention across sessions.
- 🌐 Fully responsive design, ensuring usability across desktop and mobile devices.
`,
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Local Storage'],
      github: 'https://github.com/dheerajgaurgithub/todoList',
      live: 'https://dheerajstodolist.netlify.app/',
      featured: true,
      status: 'Completed'
    },
    {
      title: 'Propose Your Crush',
      description: `Propose Your Crush is a fun, interactive web application that allows users to express their feelings creatively. Designed with modern web technologies, the platform makes the proposal experience playful, engaging, and visually appealing.

Key Features:
- 💌 Fun and interactive UI with animations to enhance user experience.
- 🎨 Creative proposal templates allowing personalized messages.
- 🌐 Fully responsive design ensuring smooth experience on all devices.
- ⚡ Lightweight and fast-loading using pure HTML5, CSS3, and JavaScript.
- 👨‍💻 Easy to extend or customize for additional features or themes.

GitHub Repository Overview:
- Clean and well-commented HTML, CSS, and JavaScript codebase.
- Organized folder structure for assets, scripts, and styles.
- Interactive animations implemented with CSS and vanilla JS.
- Simple and beginner-friendly project for learning or inspiration.`,
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
              className="p-4 sm:p-6 lg:p-8 h-64 sm:h-72 lg:h-80 flex flex-col relative text-white transition-all duration-300 brightness-110 group-hover:brightness-100"
              style={{ 
                backgroundImage: 
                  project.title === 'EarnByCode' ? `url(${ebcImg})` :
                  project.title === 'ShikFy' ? `url(${shikfyImg})` :
                  project.title === 'Car Racing Game' ? `url(${lanracerImg})` :
                  project.title === 'BhuviKart E-Commerce' ? `url(${bhuvikartImg})` :
                  project.title === 'Jovac Project - TestGenerator' ? `url(${jovacImg})` :
                  project.title === 'E-Reader Platform' ? `url(${ereaderImg})` :
                  project.title === 'Propose Your Crush' ? `url(${proposeImg})` :
                  project.title === 'Tic-Tac-Toe Game' ? `url(${tictactoeImg})` :
                  project.title === 'Todo List App' ? `url(${todolistImg})` :
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
