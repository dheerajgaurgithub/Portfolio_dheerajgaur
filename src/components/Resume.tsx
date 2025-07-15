import React, { useState } from 'react';
import { Download, Eye, FileText, X, User, GraduationCap, Briefcase, Code, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import jsPDF from "jspdf";

const Resume = () => {
  const [showFullPreview, setShowFullPreview] = useState(false);

  const handleDownloadResume = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text(fullResumeData.personalInfo.name, 10, 15);
    doc.setFontSize(12);
    doc.text(fullResumeData.personalInfo.title, 10, 25);
    doc.text(`Email: ${fullResumeData.personalInfo.email}`, 10, 35);
    doc.text(`Phone: ${fullResumeData.personalInfo.phone}`, 10, 42);
    doc.text(`Location: ${fullResumeData.personalInfo.location}`, 10, 49);
    doc.text(`LinkedIn: ${fullResumeData.personalInfo.linkedin}`, 10, 56);
    doc.text(`GitHub: ${fullResumeData.personalInfo.github}`, 10, 63);
    let y = 75;
    doc.setFontSize(14);
    doc.text("Education", 10, y);
    doc.setFontSize(12);
    y += 7;
    fullResumeData.education.forEach((edu) => {
      doc.text(`${edu.degree} - ${edu.institution} (${edu.duration}) ${edu.cgpa || edu.grade || ""}`.trim(), 12, y);
      y += 7;
    });
    y += 5;
    doc.setFontSize(14);
    doc.text("Experience", 10, y);
    doc.setFontSize(12);
    y += 7;
    fullResumeData.experience.forEach((exp) => {
      doc.text(`${exp.position} - ${exp.company} (${exp.duration})`, 12, y);
      y += 6;
      exp.achievements.forEach((ach) => {
        doc.text(`- ${ach}`, 16, y);
        y += 6;
      });
      y += 2;
    });
    y += 5;
    doc.setFontSize(14);
    doc.text("Skills", 10, y);
    doc.setFontSize(12);
    y += 7;
    Object.entries(fullResumeData.skills).forEach(([cat, skills]) => {
      doc.text(`${cat}: ${(skills as string[]).join(", ")}`, 12, y);
      y += 6;
    });
    y += 5;
    doc.setFontSize(14);
    doc.text("Achievements", 10, y);
    doc.setFontSize(12);
    y += 7;
    fullResumeData.achievements.forEach((ach) => {
      doc.text(`- ${ach}`, 12, y);
      y += 6;
    });
    doc.save("Dheeraj_Gaur_Resume.pdf");
  };

  const fullResumeData = {
    personalInfo: {
      name: 'Dheeraj Gaur',
      title: 'Full Stack Web Developer',
      email: 'dheerajgaur.0fficial@gmail.com',
      phone: '+91 6397684456',
      linkedin: 'linkedin.com/in/dheeraj-gaur-9b5410324',
      github: 'github.com/dheerajgaurgithub',
      location: 'Mathura, India'
    },
    education: [
      {
        degree: 'Bachelor of Technology in Computer Science & Engineering',
        institution: 'GLA University, Mathura',
        duration: '2023 - 2026',
        cgpa: 'Current CGPA: 7.26/10'
      },
      {
        degree: 'Diploma in Computer Science & Information Technology',
        institution: 'Vivekananda College',
        duration: 'Completed',
        grade: 'First Division'
      }
    ],
    experience: [
      {
        position: 'Full Stack MERN Intern',
        company: 'Coding Blocks',
        duration: 'Jun 2024 - Aug 2024',
        achievements: [
          'Developed responsive web applications using MERN stack',
          'Implemented RESTful APIs and database optimization',
          'Collaborated with team to deliver projects on schedule',
          'Gained hands-on experience with modern development practices'
        ]
      },
      {
        position: 'Full Stack Development Intern',
        company: 'Integraminds',
        duration: 'Mar 2024 - May 2024',
        achievements: [
          'Built dynamic user interfaces with React.js',
          'Worked on backend development using Node.js and Express',
          'Integrated third-party APIs and services',
          'Participated in code reviews and agile development'
        ]
      }
    ],
    skills: {
      programming: ['Java', 'Python', 'JavaScript', 'TypeScript', 'C++'],
      frontend: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
      backend: ['Node.js', 'Express.js', 'RESTful APIs', 'GraphQL'],
      database: ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase'],
      tools: ['Git', 'GitHub', 'VS Code', 'Postman', 'Docker'],
      cloud: ['AWS', 'Vercel', 'Netlify', 'Heroku']
    },
    achievements: [
      'Solved 197+ problems on LeetCode with global ranking 639,734',
      'Built 6+ full-stack web applications with modern technologies',
      'Active contributor to open-source projects on GitHub',
      'Strong foundation in Data Structures and Algorithms',
      'Experience with both frontend and backend development'
    ]
  };

  const resumeHighlights = [
    'Full Stack Web Developer',
    'MERN Stack Specialist',
    'Problem Solving Expert',
    'Multiple Internship Experience',
    'Open Source Contributor',
    'Continuous Learner'
  ];

  return (
    <section id="resume" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text">Resume</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my skills, experience, and achievements
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Resume Preview */}
            <Card className="tech-card">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="skill-icon">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold gradient-text">Resume Preview</h3>
                </div>

                {/* Mock Resume Preview */}
                <div className="bg-background border border-border rounded-lg p-6 shadow-inner">
                  <div className="text-center mb-4">
                    <h4 className="text-xl font-bold">Dheeraj Gaur</h4>
                    <p className="text-sm text-muted-foreground">Full Stack Web Developer</p>
                    <p className="text-xs text-muted-foreground">dheerajgaur.0fficial@gmail.com | +91 6397684456</p>
                  </div>

                  <div className="space-y-4 text-sm">
                    <div>
                      <h5 className="font-semibold text-primary mb-2">Education</h5>
                      <div className="text-xs space-y-1">
                        <p>• B.Tech CSE - GLA University, Mathura (2023-26)</p>
                        <p>• Diploma CS & IT - Vivekananda College (Completed)</p>
                      </div>
                    </div>

                    <div>
                      <h5 className="font-semibold text-primary mb-2">Experience</h5>
                      <div className="text-xs space-y-1">
                        <p>• Coding Blocks - Full Stack MERN Intern</p>
                        <p>• Integraminds - Full Stack Development Intern</p>
                      </div>
                    </div>

                    <div>
                      <h5 className="font-semibold text-primary mb-2">Skills</h5>
                      <div className="text-xs">
                        <p>Java, Python, JavaScript, React.js, Node.js, MongoDB...</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 mt-6">
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-primary/50 hover:bg-primary/10 flex-1"
                    onClick={() => setShowFullPreview(true)}
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    Preview Full
                  </Button>
                  <Button 
                    size="sm"
                    onClick={handleDownloadResume}
                    className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 flex-1"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Resume Highlights */}
            <Card className="tech-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 gradient-text">Key Highlights</h3>
                
                <div className="space-y-4 mb-8">
                  {resumeHighlights.map((highlight, index) => (
                    <div 
                      key={index} 
                      className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/10 hover:border-primary/30 transition-colors"
                      style={{animationDelay: `${index * 0.1}s`}}
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                      <span className="font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Quick Stats</h4>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="p-3 rounded-lg bg-muted/50">
                        <div className="font-bold text-primary">Problem Solver</div>
                        <div className="text-xs text-muted-foreground">LeetCode</div>
                      </div>
                      <div className="p-3 rounded-lg bg-muted/50">
                        <div className="font-bold text-secondary">6+</div>
                        <div className="text-xs text-muted-foreground">Projects Built</div>
                      </div>
                      <div className="p-3 rounded-lg bg-muted/50">
                        <div className="font-bold text-accent">195+</div>
                        <div className="text-xs text-muted-foreground">Problems Solved</div>
                      </div>
                      <div className="p-3 rounded-lg bg-muted/50">
                        <div className="font-bold text-primary">10+</div>
                        <div className="text-xs text-muted-foreground">Technologies</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Available Formats</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        <span>PDF Format (Recommended)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        <span>ATS-Friendly Version</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact for Custom Resume */}
          <Card className="tech-card mt-8">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Looking for a Custom Resume?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Need a tailored resume for a specific role? I can customize my resume to highlight 
                the most relevant skills and experiences for your opportunity.
              </p>
              <div className="flex justify-center gap-4">
                <Button 
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                  onClick={handleDownloadResume}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Standard Resume
                </Button>
                <Button 
                  variant="outline"
                  className="border-primary/50 hover:bg-primary/10"
                  asChild
                >
                  <a href="mailto:dheerajgaur.0fficial@gmail.com?subject=Custom Resume Request">
                    Request Custom Version
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Full Resume Preview Dialog */}
        <Dialog open={showFullPreview} onOpenChange={setShowFullPreview}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="flex items-center justify-between">
                <span className="gradient-text">Complete Resume Preview</span>
                <Button 
                  onClick={handleDownloadResume}
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </Button>
              </DialogTitle>
            </DialogHeader>
            
            <div className="bg-background border border-border rounded-lg p-8 shadow-inner">
              {/* Header */}
              <div className="text-center mb-8 border-b border-border pb-6">
                <h1 className="text-3xl font-bold text-foreground">{fullResumeData.personalInfo.name}</h1>
                <h2 className="text-xl text-primary mb-4">{fullResumeData.personalInfo.title}</h2>
                <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                  <span>{fullResumeData.personalInfo.email}</span>
                  <span>{fullResumeData.personalInfo.phone}</span>
                  <span>{fullResumeData.personalInfo.location}</span>
                </div>
                <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground mt-2">
                  <span>{fullResumeData.personalInfo.linkedin}</span>
                  <span>{fullResumeData.personalInfo.github}</span>
                </div>
              </div>

              {/* Education */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                  <GraduationCap className="h-5 w-5" />
                  Education
                </h3>
                {fullResumeData.education.map((edu, index) => (
                  <div key={index} className="mb-4 pb-4 border-b border-border last:border-b-0">
                    <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                    <p className="text-muted-foreground">{edu.institution}</p>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>{edu.duration}</span>
                      <span>{edu.cgpa || edu.grade}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Experience */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                  <Briefcase className="h-5 w-5" />
                  Experience
                </h3>
                {fullResumeData.experience.map((exp, index) => (
                  <div key={index} className="mb-6 pb-4 border-b border-border last:border-b-0">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold text-foreground">{exp.position}</h4>
                        <p className="text-muted-foreground">{exp.company}</p>
                      </div>
                      <span className="text-sm text-muted-foreground">{exp.duration}</span>
                    </div>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Skills */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  Technical Skills
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {Object.entries(fullResumeData.skills).map(([category, skills]) => (
                    <div key={category}>
                      <h4 className="font-semibold text-foreground capitalize mb-2">{category}:</h4>
                      <p className="text-sm text-muted-foreground">{skills.join(', ')}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Key Achievements
                </h3>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
                  {fullResumeData.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Resume;