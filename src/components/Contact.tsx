import React, { useRef, useState } from 'react';
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

  const [showForm, setShowForm] = useState(false);
  const formRef = useRef<HTMLDivElement | null>(null);

  const handleOpenForm = () => {
    setShowForm(true);
    setTimeout(() => formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 0);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
            Ready to collaborate? Let's discuss your next project or opportunity!
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
            {contactInfo.map((contact, index) => (
              <Card 
                key={index} 
                className="tech-card group"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardContent className="p-4 sm:p-6 lg:p-8 text-center">
                  <div className="skill-icon mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                    <contact.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {contact.label}
                  </h3>
                  <a 
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : '_self'}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="block"
                  >
                    <p className="font-semibold text-foreground mb-1 hover:text-primary transition-colors text-sm sm:text-base">
                      {contact.primary}
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-2">
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
          <div className="mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 gradient-text">Connect With Me</h3>
            <div className="grid grid-cols-2 sm:flex sm:justify-center gap-3 sm:gap-4 lg:gap-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex flex-col items-center gap-2 sm:gap-3 p-3 sm:p-4 lg:p-6 rounded-xl border border-border hover:border-primary/50 transition-all hover:scale-105 ${social.color}`}
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <social.icon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 transition-colors" />
                  <div className="text-center">
                    <div className="font-semibold text-xs sm:text-sm lg:text-base">{social.name}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground hidden sm:block">{social.description}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <Card className="tech-card">
            <CardContent className="p-4 sm:p-6 lg:p-8 text-center">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 gradient-text">
                Let's Build Something Amazing Together!
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-2 sm:px-0">
                Whether you have a project in mind, want to discuss opportunities, or just want to say hello, 
                I'd love to hear from you. I'm always open to interesting conversations and new challenges.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                <Button 
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-[var(--shadow-elegant)] text-sm sm:text-base w-full sm:w-auto"
                  onClick={handleOpenForm}
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
                <Button 
                  variant="outline"
                  className="border-primary/50 hover:bg-primary/10 text-sm sm:text-base w-full sm:w-auto"
                  asChild
                >
                  <a href="https://linkedin.com/in/dheeraj-gaur-9b5410324" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" />
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>

              {showForm && (
                <div ref={formRef} className="mt-6 sm:mt-8 max-w-2xl mx-auto text-left">
                  <ContactForm />
                </div>
              )}
            </CardContent>
          </Card>

          {/* Quick Response Promise */}
          <div className="mt-6 sm:mt-8 text-center">
            <div className="text-xs sm:text-sm text-muted-foreground">
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

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<null | { ok: boolean; msg: string }>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);
    try {
      const env = (import.meta as any).env || {};
      const origin = typeof window !== 'undefined' ? window.location.origin : '';
      const forcedProdBase = origin.includes('dheerajgaurofficial.netlify.app')
        ? 'https://portfolio-dheerajgaur.onrender.com/api'
        : undefined;
      const apiBase = forcedProdBase
        || env.VITE_CONTACT_API
        || (env.DEV ? 'http://localhost:5000/api/contact' : 'https://portfolio-dheerajgaur.onrender.com/api/contact');
      console.log('[Contact] Using API base:', apiBase);
      const res = await fetch(`${apiBase}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      });
      if (res.ok) {
        setStatus({ ok: true, msg: 'Thanks! Your message has been sent.' });
        setName(''); setEmail(''); setMessage('');
      } else {
        const data = await res.json().catch(() => ({}));
        setStatus({ ok: false, msg: data?.error || 'Failed to send. Please try again later.' });
      }
    } catch {
      setStatus({ ok: false, msg: 'Network error. Please try again.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            className="w-full rounded-md border border-border bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/40"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            className="w-full rounded-md border border-border bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/40"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Message</label>
        <textarea
          rows={5}
          className="w-full rounded-md border border-border bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/40"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      {status && (
        <div className={`text-sm ${status.ok ? 'text-green-500' : 'text-red-500'}`}>{status.msg}</div>
      )}
      <div className="flex justify-end">
        <Button type="submit" disabled={submitting} className="bg-primary text-primary-foreground">
          {submitting ? 'Sending...' : 'Send'}
        </Button>
      </div>
    </form>
  );
};

export default Contact;