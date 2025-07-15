import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const internships = [
    {
      company: 'Coding Blocks',
      position: 'Full Stack MERN Intern',
      duration: 'June – August 2024',
      location: 'Remote',
      description: 'Completed comprehensive Full Stack MERN course with hands-on project development.',
      achievements: [
        'Developed a Test Generator project using MERN stack',
        'Learned advanced React patterns and state management',
        'Implemented RESTful APIs with Node.js and Express',
        'Gained experience with MongoDB database design'
      ],
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JavaScript'],
      link: '#'
    },
    {
      company: 'Integraminds Bootcamp',
      position: 'Full Stack Development Intern',
      duration: 'August 2024',
      location: 'Remote',
      description: '15-day intensive full stack bootcamp focusing on Python frameworks and React.',
      achievements: [
        'Built an E-Reader (Books) project using Flask and React',
        'Learned Django framework for rapid development',
        'Implemented user authentication and authorization',
        'Gained experience with Python backend development'
      ],
      technologies: ['Flask', 'Django', 'React.js', 'Python', 'SQLite'],
      link: '#'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hands-on experience through internships and intensive bootcamps
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary hidden md:block"></div>

            {internships.map((internship, index) => (
              <div 
                key={index} 
                className={`relative mb-12 ${index % 2 === 0 ? 'md:ml-16' : 'md:ml-16'}`}
                style={{animationDelay: `${index * 0.2}s`}}
              >
                {/* Timeline dot */}
                <div className="absolute -left-[4.5rem] top-8 w-4 h-4 bg-gradient-to-r from-primary to-secondary rounded-full border-4 border-background shadow-lg hidden md:block animate-glow"></div>

                <Card className="project-card">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-2 gradient-text">
                          {internship.position}
                        </h3>
                        <h4 className="text-xl font-semibold text-foreground mb-2">
                          {internship.company}
                        </h4>
                      </div>
                      <div className="flex flex-col md:items-end gap-2">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span className="text-sm">{internship.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span className="text-sm">{internship.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {internship.description}
                    </p>

                    <div className="mb-6">
                      <h5 className="font-semibold mb-3 text-foreground">Key Achievements:</h5>
                      <ul className="space-y-2">
                        {internship.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-2 text-muted-foreground">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h5 className="font-semibold mb-3 text-foreground">Technologies Used:</h5>
                      <div className="flex flex-wrap gap-2">
                        {internship.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex} 
                            variant="secondary"
                            className="bg-gradient-to-r from-primary/10 to-secondary/10 text-foreground border border-primary/20 hover:border-primary/50 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {internship.link && (
                      <div className="flex justify-end">
                        <a 
                          href={internship.link}
                          className="contact-link text-sm"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4" />
                          View Details
                        </a>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-16">
          <Card className="tech-card">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Internship Impact</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">2</div>
                  <p className="text-muted-foreground">Internships Completed</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary mb-2">4+</div>
                  <p className="text-muted-foreground">Projects Built</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">6+</div>
                  <p className="text-muted-foreground">Technologies Mastered</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;