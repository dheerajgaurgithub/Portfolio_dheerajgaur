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
  <section id="leetcode" className="py-12 sm:py-16 lg:py-20 bg-background">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
          LeetCode <span className="gradient-text">Journey</span>
        </h2>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8 px-2">
          Sharpening problem-solving skills through consistent practice
        </p>
        
        {/* Profile Links */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 w-full max-w-md mx-auto">
          <a
            href="https://leetcode.com/u/dheerajgaur_official/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link text-sm sm:text-lg flex-1 text-center py-2 sm:py-3 px-4 rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-300"
          >
            <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5 inline-block" />
            <span className="ml-2 hidden xs:inline">Visit LeetCode Profile</span>
            <span className="ml-2 xs:hidden">LeetCode</span>
          </a>
          <a
            href="https://github.com/dheerajgaurgithub/LeetCode_Problems"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link text-sm sm:text-lg flex-1 text-center py-2 sm:py-3 px-4 rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-300"
          >
            <Code className="h-4 w-4 sm:h-5 sm:w-5 inline-block" />
            <span className="ml-2 hidden xs:inline">View Solutions on GitHub</span>
            <span className="ml-2 xs:hidden">GitHub</span>
          </a>
        </div>
      </div>

      {/* LeetCode Stats Card */}
      <div className="mb-8 sm:mb-12">
        <Card className="tech-card w-full overflow-hidden">
          <CardContent className="p-2 sm:p-4">
            <img
              src={`https://leetcode-stats.vercel.app/api?username=dheerajgaur_official&theme=${theme}&t=${reloadTrigger}`}
              alt="LeetCode Stats"
              className="w-full h-auto rounded-lg"
              loading="lazy"
            />
          </CardContent>
        </Card>
      </div>

      {/* Call to Action */}
      <div className="mt-8 sm:mt-12 text-center">
        <Card className="tech-card">
          <CardContent className="p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 gradient-text">
              Coding Philosophy
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 max-w-2xl mx-auto leading-relaxed">
              "Every problem is an opportunity to learn and grow. Consistent practice and 
              analytical thinking are the keys to mastering data structures and algorithms."
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 w-full max-w-md mx-auto">
              <Button
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 flex-1 text-center text-sm sm:text-base"
                asChild
              >
                <a
                  href="https://github.com/dheerajgaurgithub/LeetCode_Problems"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Code className="mr-2 h-4 w-4" />
                  <span className="hidden xs:inline">View My Solutions</span>
                  <span className="xs:hidden">Solutions</span>
                </a>
              </Button>
              <Button
                variant="outline"
                className="border-primary/50 hover:bg-primary/10 flex-1 text-center text-sm sm:text-base"
                asChild
              >
                <a
                  href="https://leetcode.com/u/dheerajgaur_official/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  <span className="hidden xs:inline">LeetCode Profile</span>
                  <span className="xs:hidden">Profile</span>
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
