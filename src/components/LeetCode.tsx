import React, { useState, useEffect } from 'react';
import { ExternalLink, Code, Loader2, AlertTriangle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const LeetCode = () => {
  const [leetCodeStats, setLeetCodeStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [theme, setTheme] = useState('light');
  const [reloadTrigger, setReloadTrigger] = useState(Date.now());

  // Detect dark/light theme
  useEffect(() => {
    const getTheme = () => {
      if (typeof window !== 'undefined' && window.document) {
        return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
      }
      return 'light';
    };

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

  // Fetch JSON stats with timeout
  useEffect(() => {
    const fetchLeetCodeData = async () => {
      const corsProxy = 'https://corsproxy.io/?';
      const apiUrl = `${corsProxy}https://leetcode-stats.vercel.app/api?username=dheerajgaur_official`;
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 9000); // 9 seconds timeout

      try {
        setLoading(true);
        setError(null);
        const response = await fetch(apiUrl, { signal: controller.signal });

        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();

        setLeetCodeStats({
          totalSolved: data.totalSolved || 0,
          easySolved: data.easySolved || 0,
          mediumSolved: data.mediumSolved || 0,
          hardSolved: data.hardSolved || 0,
          ranking: data.ranking || 'N/A',
        });
      } catch (err) {
        console.error('Error fetching LeetCode data:', err);
        setError('Failed to fetch LeetCode stats. Please try again later.');
        setLeetCodeStats(null);
      } finally {
        clearTimeout(timeout);
        setLoading(false);
      }
    };

    fetchLeetCodeData();
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

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <span className="ml-2 text-muted-foreground">Loading LeetCode stats...</span>
          </div>
        ) : error ? (
          <div className="flex justify-center items-center text-red-500 py-10 gap-2">
            <AlertTriangle className="h-6 w-6" />
            <span>{error}</span>
          </div>
        ) : (
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
        )}

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
