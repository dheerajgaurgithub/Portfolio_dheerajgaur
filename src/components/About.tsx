import React from 'react';
import { GraduationCap, MapPin, Phone, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const aboutInfo = [
    {
      icon: GraduationCap,
      label: 'Current Education',
      value: 'B.Tech CSE, GLA University, Mathura',
      detail: '2023 – 2026'
    },
    {
      icon: GraduationCap,
      label: 'Previous Education',
      value: 'Diploma in CS & IT',
      detail: 'Vivekananda College of Polytechnic, Aligarh'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Aligarh, UP',
      detail: '202001'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 6397684456',
      detail: 'Available for calls'
    }
  ];

  return (
  <section id="about" className="py-12 sm:py-16 lg:py-20 bg-background">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
          Passionate developer with a strong foundation in computer science and hands-on experience 
          in full-stack development.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {aboutInfo.map((info, index) => (
          <Card 
            key={index} 
            className="tech-card group"
            style={{animationDelay: `${index * 0.1}s`}}
          >
            <CardContent className="p-4 sm:p-6 text-center">
              <div className="skill-icon mx-auto mb-3 sm:mb-4">
                <info.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-base sm:text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
                {info.label}
              </h3>
              <p className="text-muted-foreground font-medium mb-1 text-sm sm:text-base">
                {info.value}
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground/80">
                {info.detail}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Bio Section */}
      <div className="mt-12 sm:mt-16 max-w-4xl mx-auto">
        <Card className="tech-card">
          <CardContent className="p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center gradient-text">
              My Journey
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-muted-foreground leading-relaxed">
              <div>
                <p className="mb-3 sm:mb-4 text-sm sm:text-base">
                  I'm a passionate computer science student currently pursuing my B.Tech at GLA University, Mathura. 
                  With a strong foundation from my diploma in Computer Science & IT, I've developed a deep love 
                  for problem-solving and creating innovative solutions.
                </p>
                <p className="mb-3 sm:mb-4 text-sm sm:text-base">
                  My journey in tech has been enriched by hands-on internships at Coding Blocks and Integraminds, 
                  where I've worked on full-stack projects using the MERN stack, Flask, and Django.
                </p>
              </div>
              <div>
                <p className="mb-3 sm:mb-4 text-sm sm:text-base">
                  I'm particularly passionate about data structures and algorithms, regularly solving problems 
                  on LeetCode to sharpen my analytical thinking. I believe in continuous learning and staying 
                  updated with the latest technologies.
                </p>
                <p className="text-sm sm:text-base">
                  When I'm not coding, you'll find me exploring new frameworks, contributing to open-source projects, 
                  or working on personal projects that challenge my creativity and technical skills.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);
};

export default About;