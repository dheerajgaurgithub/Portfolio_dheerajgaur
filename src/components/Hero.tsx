import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/dp.png';
import jsPDF from "jspdf";
const RESUME_DOWNLOAD = 'https://drive.google.com/file/d/1c7keN-fNhUXAHaeXBfCcNs0ekQwloptg/view?usp=sharing';
const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const texts = [
    'Fullstack Web Developer',
    'Problem Solver',
    'Programmer and Coder'
  ];


  const handleDownloadResume = () => {
    window.open(RESUME_DOWNLOAD, '_blank');
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
  <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 sm:pt-24 lg:pt-32">
    {/* Background */}
    <div className="absolute inset-0 bg-[var(--gradient-hero)]"></div>

    {/* Floating elements - Hidden on mobile for better performance */}
    <div className="hidden sm:block absolute top-20 left-10 w-3 h-3 sm:w-4 sm:h-4 bg-primary rounded-full animate-float opacity-60"></div>
    <div className="hidden sm:block absolute top-40 right-20 w-4 h-4 sm:w-6 sm:h-6 bg-secondary rounded-full animate-float opacity-40" style={{ animationDelay: '2s' }}></div>
    <div className="hidden sm:block absolute bottom-40 left-20 w-2 h-2 sm:w-3 sm:h-3 bg-accent rounded-full animate-float opacity-50" style={{ animationDelay: '4s' }}></div>

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        {/* Profile Image */}
        <div className="flex justify-center lg:justify-start order-1 lg:order-1">
          <div className="relative">
            <div className="hero-glow">
              <img
                src={profileImage}
                alt="Dheeraj Gaur"
                className="w-40 h-40 xs:w-48 xs:h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[500px] xl:h-[500px] rounded-full object-cover border-2 sm:border-4 border-primary/20 shadow-[var(--shadow-elegant)] slide-in-left"
              />
            </div>
          </div>
        </div>

        {/* Text content */}
        <div className="text-center lg:text-left slide-in-right order-2 lg:order-2">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6">
            <span className="block text-foreground">Hello, I'm</span>
            <span className="gradient-text">Dheeraj Gaur</span>
          </h1>

          <div className="h-16 sm:h-20 mb-6 sm:mb-8">
            <p className="text-lg xs:text-xl sm:text-2xl lg:text-3xl text-muted-foreground">
              I'm a{' '}
              <span className="typing-cursor font-bold text-primary min-h-[1.2em] inline-block">
                {currentText}
              </span>
            </p>
          </div>

          <p className="text-sm xs:text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            🔹 B.Tech CSE Student | GLA University<br/>
            🔹 Skills: Java | Web Dev | Data Structures & Algorithms<br/>
            📌 Always learning, building, and sharing
          </p>

          {/* Buttons */}
          <div className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-[var(--shadow-elegant)] w-full xs:w-auto text-sm sm:text-base"
              onClick={handleDownloadResume}
            >
              <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Download Resume
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary/50 hover:bg-primary/10 w-full xs:w-auto text-sm sm:text-base"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 sm:gap-6 justify-center lg:justify-start">
            <a 
              href="https://github.com/dheerajgaurgithub" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-link p-2 sm:p-3"
              aria-label="GitHub Profile"
            >
              <Github className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
            <a 
              href="https://linkedin.com/in/dheeraj-gaur-9b5410324" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-link p-2 sm:p-3"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=dheerajgaur.0fficial@gmail.com" 
              className="contact-link p-2 sm:p-3"
              aria-label="Email Contact"
            >
              <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Scroll Indicator */}
    <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2">
      <div className="flex flex-col items-center space-y-1 sm:space-y-2 animate-bounce">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-primary/60 rounded-full relative overflow-hidden">
          <div className="w-0.5 h-2 sm:w-1 sm:h-3 bg-gradient-to-b from-primary to-secondary rounded-full absolute top-1.5 sm:top-2 left-1/2 transform -translate-x-1/2 animate-pulse"></div>
        </div>
        <span className="text-xs text-muted-foreground hidden sm:block">Scroll</span>
      </div>
    </div>
  </section>
);
};

export default Hero;
