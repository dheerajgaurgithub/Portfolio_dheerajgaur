import React from 'react';
import Navigation from './Navigation';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import LeetCode from './LeetCode';

import Contact from './Contact';
import Footer from './Footer';

const Portfolio = () => {
  return (
    <div 
      className="min-h-screen relative"
      style={{
        backgroundImage: 'url(https://drive.google.com/uc?export=view&id=1KG4mEZe8CS5pV-hK7MS6jWUSycS-6PCp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Background overlay for better readability */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]"></div>
      
      {/* Content wrapper */}
      <div className="relative z-10">
        <Navigation />
      
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="skills">
          <Skills />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="leetcode">
          <LeetCode />
        </section>
        
        
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      <Footer />
      </div>
    </div>
  );
};

export default Portfolio;