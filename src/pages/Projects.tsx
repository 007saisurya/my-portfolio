
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, Users, TrendingUp, BookOpen, Code, GraduationCap } from "lucide-react";

const Projects = () => {
  const projects = [
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
        "Expanded reach to 5,800+ public schools"
      ],
      technologies: ["Educational Technology", "Content Strategy", "Publishing", "Government Relations"],
      metrics: { schools: "5,800+", books: "200,000+", students: "600,000+" },
      link: "https://themediaelectics.co.in/",
      icon: BookOpen
    },
    {
      title: "Learning Improvement Program (LIP)",
      period: "September 2020 - August 2022",
      role: "Strategic Consultant & Project Manager",
      description: "Led consulting services with UNICEF to facilitate the implementation of educational programs across Andhra Pradesh.",
      achievements: [
        "Facilitated implementation across 10 districts benefiting 600,000 children",
        "Reintegrated 12,650 students who dropped out post-COVID",
        "Led 33-member analytics team for baseline assessment data analysis",
        "Identified learning gaps and supported data-driven decision making",
        "Coordinated with 1,500 community volunteers and 200 principals"
      ],
      technologies: ["Data Analytics", "Program Management", "UNICEF Partnership", "Educational Assessment"],
      metrics: { districts: "10", children: "600,000", reintegrated: "12,650" },
      icon: Users
    },
    {
      title: "BankBuddy.ai - Financial Credit System",
      period: "August 2017 - December 2018",
      role: "Associate Product Manager",
      description: "Developed innovative fintech solution to streamline customer verification and credit scoring processes.",
      achievements: [
        "Reduced customer verification time by 81%",
        "Built using Java, Spring Boot, and AngularJS",
        "Generated credit and finance based potential scores for customers",
        "Improved customer onboarding experience significantly",
        "Integrated with banking systems for real-time processing"
      ],
      technologies: ["Java", "Spring Boot", "AngularJS", "Banking APIs", "Credit Scoring"],
      metrics: { improvement: "81%", customers: "10,000+" },
      icon: TrendingUp
    },
    {
      title: "Gateway Connector - Payment Processing",
      period: "July 2015 - July 2017",
      role: "Technical Analyst",
      description: "Contributed to critical payment processing infrastructure at JPMorgan Chase, handling global transactions.",
      achievements: [
        "Oversaw processing of real-time payment transactions for JP Morgan Chase globally",
        "Implemented and managed SWIFT code payment transactions",
        "Developed automated regression testing tool for Gateway Connector project",
        "Testing capacity: ~500 payments per minute",
        "Promoted from Quality Analyst to Application Developer",
        "Worked on front-end (Angular JS) and back-end (Java) development"
      ],
      technologies: ["Java", "Angular JS", "SWIFT", "Payment Processing", "Automated Testing"],
      metrics: { capacity: "500/min", scope: "Global" },
      icon: Code
    },
    {
      title: "AI-Powered Turbine Optimization",
      period: "Current - Academic Project",
      role: "Graduate Student Researcher",
      description: "Developing generative AI model for optimizing turbine blade disposition processes at GE Aerospace.",
      achievements: [
        "Working on real-time supply chain project at Mayo Clinic",
        "Data-driven triage strategies for enhanced patient throughput",
        "Reducing production defects using GE Digital Thread",
        "Engineering data simulation and optimization",
        "Teaching Assistant for MS in Artificial Intelligence program"
      ],
      technologies: ["Machine Learning", "AI/ML", "Supply Chain Analytics", "GE Digital Thread", "Data Science"],
      metrics: { focus: "Real-time", impact: "Production Optimization" },
      icon: GraduationCap
    },
    {
      title: "Narayana Educational Operations",
      period: "August 2022 - August 2024",
      role: "Program Manager",
      description: "Managed large-scale educational operations and drove significant business growth initiatives.",
      achievements: [
        "Oversaw team of 65+ resources across three campuses",
        "Managed region with 1,000+ students",
        "Designed Excel-based scheduling model with workload mapping",
        "Reduced staff overtime hours by 7% under weekly hour constraints",
        "Managed operations and expansion at The Narayana Academy",
        "Doubled enrollments and increased revenues by 74% in 2024",
        "Managed $1.6M payroll using SAP FICO"
      ],
      technologies: ["SAP FICO", "Excel Optimization", "Operations Management", "Revenue Analytics"],
      metrics: { team: "65+", growth: "74%", students: "1,000+" },
      icon: Users
    }
  ];

  return (
    <Layout>
      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">My Projects</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              A showcase of impactful projects spanning technology, education, finance, and business strategy. 
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
