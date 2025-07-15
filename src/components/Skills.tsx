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
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={categoryIndex} 
              className="tech-card"
              style={{animationDelay: `${categoryIndex * 0.1}s`}}
            >
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-6 text-center gradient-text">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{skill.icon}</span>
                          <span className="font-medium text-sm">{skill.name}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-1000 group-hover:from-secondary group-hover:to-accent"
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
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
            Core Computer Science
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreSubjects.map((subject, index) => (
              <Card 
                key={index} 
                className="tech-card group"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">{subject.icon}</div>
                  <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                    {subject.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {subject.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tech Stack Highlight */}
        <Card className="tech-card">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 gradient-text">MERN Stack Developer</h3>
            <div className="flex justify-center items-center gap-8 text-4xl">
              <div className="hover:scale-110 transition-transform" title="MongoDB">🍃</div>
              <div className="text-2xl text-muted-foreground">+</div>
              <div className="hover:scale-110 transition-transform" title="Express.js">🚂</div>
              <div className="text-2xl text-muted-foreground">+</div>
              <div className="hover:scale-110 transition-transform" title="React.js">⚛️</div>
              <div className="text-2xl text-muted-foreground">+</div>
              <div className="hover:scale-110 transition-transform" title="Node.js">🟢</div>
            </div>
            <p className="text-muted-foreground mt-4">
              Full-stack JavaScript development with modern frameworks and tools
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;