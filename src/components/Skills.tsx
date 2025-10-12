import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Java', level: 90, icon: '☕' },
        { name: 'Python', level: 85, icon: '🐍' },
        { name: 'JavaScript', level: 88, icon: '🟨' },
        { name: 'TypeScript', level: 75, icon: '🔷' }
      ]
    },
    {
      title: 'Frontend Technologies',
      skills: [
        { name: 'React.js', level: 85, icon: '⚛️' },
        { name: 'HTML5', level: 95, icon: '🌐' },
        { name: 'CSS3', level: 90, icon: '🎨' },
        { name: 'Tailwind CSS', level: 80, icon: '💨' }
      ]
    },
    {
      title: 'Backend & Databases',
      skills: [
        { name: 'Node.js', level: 80, icon: '🟢' },
        { name: 'Express.js', level: 78, icon: '🚂' },
        { name: 'MongoDB', level: 75, icon: '🍃' },
        { name: 'MySQL', level: 70, icon: '🐬' }
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 85, icon: '📚' },
        { name: 'VS Code', level: 95, icon: '💻' },
        { name: 'Chrome DevTools', level: 80, icon: '🔧' },
        { name: 'Cassandra', level: 65, icon: '📊' }
      ]
    }
  ];

  const coreSubjects = [
    { name: 'Data Structures & Algorithms', icon: '🧮', description: 'Problem solving & optimization' },
    { name: 'Operating Systems', icon: '💾', description: 'System design & management' },
    { name: 'Computer Networks', icon: '🌐', description: 'Network protocols & security' },
    { name: 'Database Management', icon: '🗃️', description: 'RDBMS & NoSQL databases' }
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={categoryIndex} 
              className="tech-card"
              style={{animationDelay: `${categoryIndex * 0.1}s`}}
            >
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 text-center gradient-text">
                  {category.title}
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group">
                      <div className="flex items-center justify-between mb-1 sm:mb-2">
                        <div className="flex items-center gap-1 sm:gap-2 min-w-0 flex-1">
                          <span className="text-base sm:text-lg flex-shrink-0">{skill.icon}</span>
                          <span className="font-medium text-xs sm:text-sm truncate">{skill.name}</span>
                        </div>
                        <span className="text-xs text-muted-foreground flex-shrink-0 ml-2">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-1.5 sm:h-2">
                        <div 
                          className="bg-gradient-to-r from-primary to-secondary h-1.5 sm:h-2 rounded-full transition-all duration-1000 group-hover:from-secondary group-hover:to-accent"
                          style={{width: `${skill.level}%`}}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Core CS Subjects */}
        <div className="mb-8 sm:mb-12">
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 gradient-text">
            Core Computer Science
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {coreSubjects.map((subject, index) => (
              <Card 
                key={index} 
                className="tech-card group"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardContent className="p-3 sm:p-4 md:p-6 text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3">{subject.icon}</div>
                  <h4 className="font-semibold text-xs sm:text-sm md:text-base mb-1 sm:mb-2 group-hover:text-primary transition-colors leading-tight">
                    {subject.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-tight hidden sm:block">
                    {subject.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tech Stack Highlight */}
        <Card className="tech-card">
          <CardContent className="p-4 sm:p-6 md:p-8 text-center">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 gradient-text">MERN Stack Developer</h3>
            <div className="flex justify-center items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 text-2xl sm:text-3xl md:text-4xl flex-wrap">
              <div className="hover:scale-110 transition-transform" title="MongoDB">🍃</div>
              <div className="text-lg sm:text-xl md:text-2xl text-muted-foreground">+</div>
              <div className="hover:scale-110 transition-transform" title="Express.js">🚂</div>
              <div className="text-lg sm:text-xl md:text-2xl text-muted-foreground">+</div>
              <div className="hover:scale-110 transition-transform" title="React.js">⚛️</div>
              <div className="text-lg sm:text-xl md:text-2xl text-muted-foreground">+</div>
              <div className="hover:scale-110 transition-transform" title="Node.js">🟢</div>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground mt-3 sm:mt-4 px-2">
              Full-stack JavaScript development with modern frameworks and tools
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;