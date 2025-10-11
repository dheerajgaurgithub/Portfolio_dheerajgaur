import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

const GMAIL_COMPOSE = 'https://mail.google.com/mail/?view=cm&fs=1&to=dheerajgaur.0fficial@gmail.com';

const Contact = () => {
  const openGmail = () => {
    window.open(GMAIL_COMPOSE, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="text-muted-foreground mb-6">Feel free to reach out via email.</p>
        <div className="flex justify-center">
          <Button size="lg" onClick={openGmail} className="gap-2">
            <Mail className="h-5 w-5" />
            Send Message
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
