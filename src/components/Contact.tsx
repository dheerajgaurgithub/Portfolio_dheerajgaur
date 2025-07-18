import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      primary: 'dheerajgaur.0fficial@gmail.com',
      secondary: 'dheeraj.gaur_cs23@gla.ac.in',
      href: 'mailto:dheerajgaur.0fficial@gmail.com',
      description: 'Personal & College Email'
    },
    {
      icon: Phone,
      label: 'Phone',
      primary: '+91 6397684456',
      secondary: 'Available 9 AM - 9 PM',
      href: 'tel:+916397684456',
      description: 'Call or WhatsApp'
    },
    {
      icon: MapPin,
      label: 'Location',
      primary: 'Aligarh, UP',
      secondary: '202001, India',
      href: 'https://maps.google.com/?q=Aligarh,UP,India',
      description: 'Open to Remote Work'
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/dheeraj-gaur-9b5410324',
      description: 'Professional Network',
      color: 'hover:text-blue-600'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/dheerajgaurgithub',
      description: 'Code Repository',
      color: 'hover:text-gray-600 dark:hover:text-gray-400'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:dheerajgaur.0fficial@gmail.com',
      description: 'Direct Contact',
      color: 'hover:text-red-600'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate? Let's discuss your next project or opportunity!
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((contact, index) => (
              <Card 
                key={index} 
                className="tech-card group"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardContent className="p-8 text-center">
                  <div className="skill-icon mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <contact.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {contact.label}
                  </h3>
                  <a 
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : '_self'}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="block"
                  >
                    <p className="font-semibold text-foreground mb-1 hover:text-primary transition-colors">
                      {contact.primary}
                    </p>
                    <p className="text-sm text-muted-foreground mb-2">
                      {contact.secondary}
                    </p>
                  </a>
                  <p className="text-xs text-muted-foreground">
                    {contact.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Social Links */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-8 gradient-text">Connect With Me</h3>
            <div className="flex justify-center gap-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex flex-col items-center gap-3 p-6 rounded-xl border border-border hover:border-primary/50 transition-all hover:scale-105 ${social.color}`}
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <social.icon className="h-8 w-8 transition-colors" />
                  <div className="text-center">
                    <div className="font-semibold">{social.name}</div>
                    <div className="text-sm text-muted-foreground">{social.description}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <Card className="tech-card">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Let's Build Something Amazing Together!</h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Whether you have a project in mind, want to discuss opportunities, or just want to say hello, 
                I'd love to hear from you. I'm always open to interesting conversations and new challenges.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="p-6 rounded-lg bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10">
                  <h4 className="font-semibold mb-2 text-primary">Looking for a Developer?</h4>
                  <p className="text-sm text-muted-foreground">
                    I'm available for full-time positions, internships, and freelance projects. 
                    Let's discuss how I can contribute to your team.
                  </p>
                </div>
                <div className="p-6 rounded-lg bg-gradient-to-br from-secondary/5 to-accent/5 border border-secondary/10">
                  <h4 className="font-semibold mb-2 text-secondary">Want to Collaborate?</h4>
                  <p className="text-sm text-muted-foreground">
                    Open to collaborating on interesting projects, contributing to open source, 
                    or participating in hackathons and coding competitions.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-[var(--shadow-elegant)]"
                  asChild
                >
                  <a href="mailto:dheerajgaur.0fficial@gmail.com">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </a>
                </Button>
                <Button 
                  variant="outline"
                  className="border-primary/50 hover:bg-primary/10"
                  asChild
                >
                  <a href="https://linkedin.com/in/dheeraj-gaur-9b5410324" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" />
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Quick Response Promise */}
          <div className="mt-8 text-center">
            <div className="text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Usually responds within 24 hours
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;