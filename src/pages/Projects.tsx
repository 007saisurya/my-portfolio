
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, Users, TrendingUp, BookOpen, Code, GraduationCap, Building } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "GE Aerospace Supply Chain Simulation",
      period: "Current - Academic Project",
      role: "Graduate Student Researcher",
      description: "Developing AI-powered turbine optimization model for GE Aerospace's supply chain operations.",
      achievements: [
        "Working on real-time supply chain optimization using AI/ML",
        "Reducing production defects using GE Digital Thread",
        "Engineering data simulation and optimization",
        "Generative AI model for optimizing turbine blade disposition processes",
        "Focus on improving manufacturing efficiency"
      ],
      technologies: ["Machine Learning", "AI/ML", "Supply Chain Analytics", "GE Digital Thread", "Data Science"],
      metrics: { focus: "Real-time", impact: "Production Optimization" },
      icon: Building
    },
    {
      title: "Mayo Clinic Scottsdale: Optimizing Emergency Room Operations",
      period: "Current - Academic Project",
      role: "Graduate Student Researcher",
      description: "Data-driven optimization of emergency room operations to enhance patient throughput and care quality.",
      achievements: [
        "Working on real-time supply chain project at Mayo Clinic",
        "Data-driven triage strategies for enhanced patient throughput",
        "Optimizing emergency room workflow processes",
        "Analyzing patient flow and resource allocation",
        "Implementing predictive analytics for better capacity planning"
      ],
      technologies: ["Data Analytics", "Healthcare Operations", "Predictive Modeling", "Process Optimization"],
      metrics: { focus: "Patient Throughput", impact: "Healthcare Efficiency" },
      icon: Users
    },
    {
      title: "Quantium Data Analytics",
      period: "Academic Project",
      role: "Data Analyst",
      description: "Comprehensive data analytics project focusing on retail and customer behavior analysis.",
      achievements: [
        "Analyzed customer purchasing patterns and behavior",
        "Developed insights for retail strategy optimization",
        "Created data visualizations and dashboards",
        "Performed statistical analysis on large datasets",
        "Generated actionable recommendations for business growth"
      ],
      technologies: ["Python", "Data Analytics", "Statistical Analysis", "Data Visualization", "Retail Analytics"],
      metrics: { scope: "Retail Analytics", impact: "Business Insights" },
      icon: TrendingUp
    },
    {
      title: "Accenture - North America Data Analytics",
      period: "Consulting Project",
      role: "Data Analytics Consultant",
      description: "Strategic data analytics consulting project for North American market analysis.",
      achievements: [
        "Conducted comprehensive market analysis for North American operations",
        "Developed data-driven recommendations for business strategy",
        "Created analytical frameworks for decision making",
        "Performed competitive analysis and market research",
        "Delivered insights to support strategic planning"
      ],
      technologies: ["Business Analytics", "Market Research", "Strategic Planning", "Consulting", "Data Strategy"],
      metrics: { scope: "North America", impact: "Strategic Insights" },
      icon: Code
    },
    {
      title: "Dialectics Educational Platform",
      period: "May 2022 - Present",
      role: "Founder & CEO",
      description: "Founded and scaled an innovative edtech venture focusing on economics education for public schools.",
      achievements: [
        "Authored and scaled the Swaminathan and Tara book series",
        "Reached over 200,000 books sold under the same brand name",
        "Built edtech venture delivering comic-based economic education",
        "Content adopted by Government of Andhra Pradesh for 2025-26 curriculum",
        "Expanded reach to 5,800+ public schools",
        "Impacted 1.3 million children through educational initiatives"
      ],
      technologies: ["Educational Technology", "Content Strategy", "Publishing", "Government Relations"],
      metrics: { schools: "5,800+", books: "200,000+", students: "1.3M+" },
      link: "https://thedialectics.co.in/",
      icon: BookOpen
    }
  ];

  return (
    <Layout>
      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">My Projects</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              A showcase of impactful projects spanning technology, healthcare analytics, education, and business strategy. 
              Each project demonstrates my ability to drive meaningful results across diverse domains.
            </p>
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-2xl text-white mb-2 flex items-center gap-3">
                        {project.title}
                        {project.link && (
                          <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 transition-colors"
                          >
                            <ExternalLink className="h-5 w-5" />
                          </a>
                        )}
                      </CardTitle>
                      <div className="flex items-center gap-4 text-white/60 mb-3">
                        <span className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {project.period}
                        </span>
                        <span className="font-medium text-blue-300">{project.role}</span>
                      </div>
                      <p className="text-white/80 text-lg leading-relaxed">{project.description}</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, i) => (
                        <li key={i} className="text-white/70 flex items-start gap-2">
                          <span className="text-blue-400 mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Technologies & Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge 
                          key={i} 
                          variant="secondary" 
                          className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-white border-blue-400/30"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-white mb-2">Impact Metrics</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {Object.entries(project.metrics).map(([key, value], i) => (
                        <div key={i} className="text-center">
                          <div className="text-xl font-bold text-white">{value}</div>
                          <div className="text-sm text-white/60 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
