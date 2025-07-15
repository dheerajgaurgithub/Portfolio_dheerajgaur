import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/dp.png';
import jsPDF from "jspdf";

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const texts = [
    'Fullstack Web Developer',
    'Problem Solver',
    'Programmer and Coder'
  ];

  const fullResumeData = {
    personalInfo: {
      name: 'Dheeraj Gaur',
      title: 'Full Stack Web Developer',
      email: 'dheerajgaur.0fficial@gmail.com',
      phone: '+91 6397684456',
      linkedin: 'linkedin.com/in/dheeraj-gaur-9b5410324',
      github: 'github.com/dheerajgaurgithub',
      location: 'Aligarh, India'
    },
    education: [
      {
        degree: 'Bachelor of Technology in Computer Science & Engineering',
        institution: 'GLA University, Mathura',
        duration: '2023 - 2026',
        cgpa: 'Current CGPA: 7.26/10'
      },
      {
        degree: 'Diploma in Computer Science & Information Technology',
        institution: 'Vivekananda College',
        duration: 'Completed',
        grade: 'First Division'
      }
    ],
    experience: [
      {
        position: 'Full Stack MERN Intern',
        company: 'Coding Blocks',
        duration: 'Jun 2024 - Aug 2024',
        achievements: [
          'Developed responsive web applications using MERN stack',
          'Implemented RESTful APIs and database optimization',
          'Collaborated with team to deliver projects on schedule',
          'Gained hands-on experience with modern development practices'
        ]
      },
      {
        position: 'Full Stack Development Intern',
        company: 'Integraminds',
        duration: 'Mar 2024 - May 2024',
        achievements: [
          'Built dynamic user interfaces with React.js',
          'Worked on backend development using Node.js and Express',
          'Integrated third-party APIs and services',
          'Participated in code reviews and agile development'
        ]
      }
    ],
    skills: {
      programming: ['Java', 'Python', 'JavaScript', 'TypeScript', 'C++'],
      frontend: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
      backend: ['Node.js', 'Express.js', 'RESTful APIs', 'GraphQL'],
      database: ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase'],
      tools: ['Git', 'GitHub', 'VS Code', 'Postman', 'Docker'],
      cloud: ['AWS', 'Vercel', 'Netlify', 'Heroku']
    },
    achievements: [
      'Solved 197+ problems on LeetCode with global ranking 639,734',
      'Built 6+ full-stack web applications with modern technologies',
      'Active contributor to open-source projects on GitHub',
      'Strong foundation in Data Structures and Algorithms',
      'Experience with both frontend and backend development'
    ]
  };

  const handleDownloadResume = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text(fullResumeData.personalInfo.name, 10, 15);
    doc.setFontSize(12);
    doc.text(fullResumeData.personalInfo.title, 10, 25);
    doc.text(`Email: ${fullResumeData.personalInfo.email}`, 10, 35);
    doc.text(`Phone: ${fullResumeData.personalInfo.phone}`, 10, 42);
    doc.text(`Location: ${fullResumeData.personalInfo.location}`, 10, 49);
    doc.text(`LinkedIn: ${fullResumeData.personalInfo.linkedin}`, 10, 56);
    doc.text(`GitHub: ${fullResumeData.personalInfo.github}`, 10, 63);

    let y = 75;
    doc.setFontSize(14);
    doc.text("Education", 10, y);
    doc.setFontSize(12);
    y += 7;
    fullResumeData.education.forEach((edu) => {
      doc.text(`${edu.degree} - ${edu.institution} (${edu.duration}) ${edu.cgpa || edu.grade || ""}`.trim(), 12, y);
      y += 7;
    });

    y += 5;
    doc.setFontSize(14);
    doc.text("Experience", 10, y);
    doc.setFontSize(12);
    y += 7;
    fullResumeData.experience.forEach((exp) => {
      doc.text(`${exp.position} - ${exp.company} (${exp.duration})`, 12, y);
      y += 6;
      exp.achievements.forEach((ach) => {
        doc.text(`- ${ach}`, 16, y);
        y += 6;
      });
      y += 2;
    });

    y += 5;
    doc.setFontSize(14);
    doc.text("Skills", 10, y);
    doc.setFontSize(12);
    y += 7;
    Object.entries(fullResumeData.skills).forEach(([cat, skills]) => {
      doc.text(`${cat}: ${skills.join(", ")}`, 12, y);
      y += 6;
    });

    y += 5;
    doc.setFontSize(14);
    doc.text("Achievements", 10, y);
    doc.setFontSize(12);
    y += 7;
    fullResumeData.achievements.forEach((ach) => {
      doc.text(`- ${ach}`, 12, y);
      y += 6;
    });

    doc.save("Dheeraj_Gaur_Resume.pdf");
  };

  useEffect(() => {
    const typingTimeout = setTimeout(() => {
      if (charIndex < texts[currentIndex].length) {
        setCurrentText(texts[currentIndex].slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else {
        setTimeout(() => {
          setCharIndex(0);
          setCurrentText('');
          setCurrentIndex((currentIndex + 1) % texts.length);
        }, 2000);
      }
    }, 100);

    return () => clearTimeout(typingTimeout);
  }, [charIndex, currentIndex]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 sm:pt-32">
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--gradient-hero)]"></div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full animate-float opacity-60"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-secondary rounded-full animate-float opacity-40" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-accent rounded-full animate-float opacity-50" style={{ animationDelay: '4s' }}></div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="hero-glow">
                <img
                  src={profileImage}
                  alt="Dheeraj Gaur"
                  className="w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] rounded-full object-cover border-4 border-primary/20 shadow-[var(--shadow-elegant)] slide-in-left"
                />
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="text-center lg:text-left slide-in-right">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="block text-foreground">Hello, I'm</span>
              <span className="gradient-text">Dheeraj Gaur</span>
            </h1>

            <div className="h-20 mb-8">
              <p className="text-2xl lg:text-3xl text-muted-foreground">
                I'm a{' '}
                <span className="typing-cursor font-bold text-primary min-h-[1.2em] inline-block">
                  {currentText}
                </span>
              </p>
            </div>

            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Passionate about creating innovative solutions with modern web technologies.
              Currently pursuing B.Tech CSE and building amazing projects.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-[var(--shadow-elegant)]"
                onClick={handleDownloadResume}
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary/50 hover:bg-primary/10"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 justify-center lg:justify-start">
              <a href="https://github.com/dheerajgaurgithub" target="_blank" rel="noopener noreferrer" className="contact-link">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com/in/dheeraj-gaur-9b5410324" target="_blank" rel="noopener noreferrer" className="contact-link">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:dheerajgaur.0fficial@gmail.com" className="contact-link">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/60 rounded-full relative overflow-hidden">
            <div className="w-1 h-3 bg-gradient-to-b from-primary to-secondary rounded-full absolute top-2 left-1/2 transform -translate-x-1/2 animate-pulse"></div>
          </div>
          <span className="text-xs text-muted-foreground">Scroll</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
