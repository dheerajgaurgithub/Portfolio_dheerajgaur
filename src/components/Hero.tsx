import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/dp.png';
import jsPDF from "jspdf";
const RESUME_DOWNLOAD = 'https://drive.google.com/uc?export=download&id=161vEUmJvNrgYJWf7qcPSZ_MYOhDFh14u';
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
