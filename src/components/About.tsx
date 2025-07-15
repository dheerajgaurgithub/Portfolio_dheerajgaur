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
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with a strong foundation in computer science and hands-on experience 
            in full-stack development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aboutInfo.map((info, index) => (
            <Card 
              key={index} 
              className="tech-card group"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-6 text-center">
                <div className="skill-icon mx-auto mb-4">
                  <info.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
                  {info.label}
                </h3>
                <p className="text-muted-foreground font-medium mb-1">
                  {info.value}
                </p>
                <p className="text-sm text-muted-foreground/80">
                  {info.detail}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bio Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="tech-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center gradient-text">My Journey</h3>
              <div className="grid md:grid-cols-2 gap-8 text-muted-foreground leading-relaxed">
                <div>
                  <p className="mb-4">
                    I'm a passionate computer science student currently pursuing my B.Tech at GLA University, Mathura. 
                    With a strong foundation from my diploma in Computer Science & IT, I've developed a deep love 
                    for problem-solving and creating innovative solutions.
                  </p>
                  <p className="mb-4">
                    My journey in tech has been enriched by hands-on internships at Coding Blocks and Integraminds, 
                    where I've worked on full-stack projects using the MERN stack, Flask, and Django.
                  </p>
                </div>
                <div>
                  <p className="mb-4">
                    I'm particularly passionate about data structures and algorithms, regularly solving problems 
                    on LeetCode to sharpen my analytical thinking. I believe in continuous learning and staying 
                    updated with the latest technologies.
                  </p>
                  <p>
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