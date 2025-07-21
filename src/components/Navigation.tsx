import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from './ThemeProvider';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'LeetCode', href: '#leetcode' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
  <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled 
      ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-lg' 
      : 'bg-transparent'
  }`}>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-14 sm:h-16">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a 
            href="#hero" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#hero');
            }}
            className="text-lg sm:text-xl lg:text-2xl font-bold gradient-text hover:opacity-80 transition-opacity"
          >
            <span className="hidden sm:inline">dheerajgaur.dev</span>
            <span className="sm:hidden">DG</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              className="contact-link text-sm font-medium whitespace-nowrap px-2 py-1 rounded-md transition-colors hover:bg-muted/50"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Theme Toggle & Mobile Menu Button */}
        <div className="flex items-center gap-2 sm:gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            className="p-2 hover:bg-muted min-w-[2.5rem] h-10"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <Moon className="h-4 w-4" />
            ) : (
              <Sun className="h-4 w-4" />
            )}
          </Button>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden p-2 min-w-[2.5rem] h-10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
        isMenuOpen 
          ? 'max-h-96 opacity-100' 
          : 'max-h-0 opacity-0'
      }`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md border-t border-border">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
                setIsMenuOpen(false); // Close menu after navigation
              }}
              className={`block px-3 py-3 text-base font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-all duration-200 transform ${
                isMenuOpen 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-2 opacity-0'
              }`}
              style={{ 
                transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms' 
              }}
            >
              {item.label}
            </a>
          ))}
          
          {/* Mobile-only additional info */}
          <div className="px-3 py-2 mt-4 pt-4 border-t border-border/50">
            <p className="text-xs text-muted-foreground text-center">
              Made with ❤️ by Dheeraj Gaur
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
);
};

export default Navigation;