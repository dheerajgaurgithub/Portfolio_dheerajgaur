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
  <section id="experience" className="py-12 sm:py-16 lg:py-20 bg-background">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          Professional <span className="gradient-text">Experience</span>
        </h2>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
          Hands-on experience through internships and intensive bootcamps
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Timeline line - hidden on mobile */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary hidden md:block"></div>

          {internships.map((internship, index) => (
            <div 
              key={index} 
              className={`relative mb-8 sm:mb-12 ${index % 2 === 0 ? 'md:ml-16' : 'md:ml-16'}`}
              style={{animationDelay: `${index * 0.2}s`}}
            >
              {/* Timeline dot - repositioned for mobile */}
              <div className="absolute -left-2 sm:-left-[4.5rem] top-6 sm:top-8 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-primary to-secondary rounded-full border-2 sm:border-4 border-background shadow-lg hidden md:block animate-glow"></div>

              <Card className="project-card">
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  <div className="flex flex-col gap-4 mb-4 sm:mb-6">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-2 gradient-text">
                        {internship.position}
                      </h3>
                      <h4 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
                        {internship.company}
                      </h4>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span className="text-xs sm:text-sm">{internship.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span className="text-xs sm:text-sm">{internship.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                    {internship.description}
                  </p>

                  <div className="mb-4 sm:mb-6">
                    <h5 className="font-semibold mb-2 sm:mb-3 text-foreground text-sm sm:text-base">
                      Key Achievements:
                    </h5>
                    <ul className="space-y-1 sm:space-y-2">
                      {internship.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-2 text-muted-foreground text-sm sm:text-base">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4 sm:mb-6">
                    <h5 className="font-semibold mb-2 sm:mb-3 text-foreground text-sm sm:text-base">
                      Technologies Used:
                    </h5>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {internship.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="secondary"
                          className="bg-gradient-to-r from-primary/10 to-secondary/10 text-foreground border border-primary/20 hover:border-primary/50 transition-colors text-xs sm:text-sm px-2 py-1"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {internship.link && (
                    <div className="flex justify-start sm:justify-end">
                      <a 
                        href={internship.link}
                        className="contact-link text-xs sm:text-sm flex items-center gap-1 sm:gap-2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
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
      <div className="mt-12 sm:mt-16">
        <Card className="tech-card">
          <CardContent className="p-4 sm:p-6 lg:p-8 text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 gradient-text">
              Internship Impact
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              <div className="p-3 sm:p-0">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">2</div>
                <p className="text-sm sm:text-base text-muted-foreground">Internships Completed</p>
              </div>
              <div className="p-3 sm:p-0">
                <div className="text-2xl sm:text-3xl font-bold text-secondary mb-1 sm:mb-2">4+</div>
                <p className="text-sm sm:text-base text-muted-foreground">Projects Built</p>
              </div>
              <div className="p-3 sm:p-0">
                <div className="text-2xl sm:text-3xl font-bold text-accent mb-1 sm:mb-2">6+</div>
                <p className="text-sm sm:text-base text-muted-foreground">Technologies Mastered</p>
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