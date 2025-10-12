import React from 'react';
import { Github, Linkedin, Mail, Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/dheerajgaurgithub',
      color: 'hover:text-gray-600 dark:hover:text-gray-400'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/dheeraj-gaur-9b5410324',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'https://mail.google.com/mail/?view=cm&fs=1&to=dheerajgaur.0fficial@gmail.com',
      color: 'hover:text-red-600'
    }
  ];

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-muted/30 border-t border-border">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
      {/* Brand Section */}
      <div className="sm:col-span-2 lg:col-span-2 text-center sm:text-left">
        <h3 className="text-xl sm:text-2xl font-bold gradient-text mb-3 sm:mb-4">dheerajgaur.dev</h3>
        <p className="text-muted-foreground mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
          Passionate Full Stack Developer creating innovative solutions with modern web technologies. 
          Always learning, always building, always growing.
        </p>
        <div className="flex items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm text-muted-foreground flex-wrap">
          <span>Made with</span>
          <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-red-500 animate-pulse" />
          <span>and</span>
          <Coffee className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-600" />
          <span>by Dheeraj Gaur</span>
        </div>
      </div>

      {/* Quick Links */}
      <div className="text-center sm:text-left">
        <h4 className="font-semibold mb-3 sm:mb-4 text-foreground text-sm sm:text-base">Quick Links</h4>
        <ul className="space-y-2">
          {quickLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm block py-1"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Connect */}
      <div className="text-center sm:text-left">
        <h4 className="font-semibold mb-3 sm:mb-4 text-foreground text-sm sm:text-base">Connect</h4>
        <div className="space-y-2 sm:space-y-3">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center sm:justify-start gap-2 text-muted-foreground transition-colors text-xs sm:text-sm py-1 ${social.color}`}
            >
              <social.icon className="h-3 w-3 sm:h-4 sm:w-4" />
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </div>

    {/* Bottom Section */}
    <div className="pt-6 sm:pt-8 border-t border-border">
      <div className="flex flex-col items-center justify-center sm:flex-row sm:justify-between gap-3 sm:gap-4">
        <div className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
          © {currentYear} Dheeraj Gaur. All rights reserved.
        </div>
        
        <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Code className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="hidden xs:inline">Built with </span>React & Tailwind CSS
          </span>
        </div>
      </div>
    </div>
  </div>

  {/* Scroll to top indicator */}
  <div className="text-center py-3 sm:py-4 border-t border-border">
    <button
      onClick={() => scrollToSection('#hero')}
      className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm flex items-center gap-1 mx-auto group"
    >
      <span>Back to Top</span>
      <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-current rounded-full flex items-center justify-center group-hover:animate-bounce">
        <div className="w-0.5 h-1.5 sm:w-1 sm:h-2 bg-current rounded-full"></div>
      </div>
    </button>
  </div>
</footer>
);
};

export default Footer;