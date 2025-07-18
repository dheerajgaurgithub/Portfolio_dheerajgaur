import React, { useEffect, useState } from 'react';
import { ExternalLink, Code, Loader2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const LeetCode = () => {
  const [theme, setTheme] = useState('light');
  const [reloadTrigger, setReloadTrigger] = useState(Date.now());

  // Detect dark/light theme changes
  useEffect(() => {
    const getTheme = () =>
      document.documentElement.classList.contains('dark') ? 'dark' : 'light';

    setTheme(getTheme());

    const observer = new MutationObserver(() => {
      setTheme(getTheme());
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  // Refresh image every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setReloadTrigger(Date.now());
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="leetcode" className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            LeetCode <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Sharpening problem-solving skills through consistent practice
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full max-w-xs mx-auto">
            <a
              href="https://leetcode.com/u/dheerajgaur_official/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link text-lg flex-1 text-center"
            >
              <ExternalLink className="h-5 w-5 inline-block" />
              <span className="ml-2">Visit LeetCode Profile</span>
            </a>
            <a
              href="https://github.com/dheerajgaurgithub/LeetCode_Problems"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link text-lg flex-1 text-center"
            >
              <Code className="h-5 w-5 inline-block" />
              <span className="ml-2">View Solutions on GitHub</span>
            </a>
          </div>
        </div>

        {/* Stats Card */}
        <div className="grid grid-cols-1 mb-12">
          <Card className="tech-card w-full">
            <CardContent className="p-4">
              <img
                src={`https://leetcode-stats.vercel.app/api?username=dheerajgaur_official&theme=${theme}&t=${reloadTrigger}`}
                alt="LeetCode Stats"
                className="w-full h-auto rounded-lg shadow"
              />
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <Card className="tech-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Coding Philosophy</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                "Every problem is an opportunity to learn and grow. Consistent practice and 
                analytical thinking are the keys to mastering data structures and algorithms."
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 w-full max-w-xs mx-auto mt-4">
                <Button
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 flex-1 text-center"
                  asChild
                >
                  <a
                    href="https://github.com/dheerajgaurgithub/LeetCode_Problems"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Code className="mr-2 h-4 w-4" />
                    View My Solutions
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="border-primary/50 hover:bg-primary/10 flex-1 text-center"
                  asChild
                >
                  <a
                    href="https://leetcode.com/u/dheerajgaur_official/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    LeetCode Profile
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LeetCode;
