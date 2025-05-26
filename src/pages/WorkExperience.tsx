
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, TrendingUp, BookOpen, Code, Building2, GraduationCap } from "lucide-react";

const WorkExperience = () => {
  const experiences = [
    {
      title: "Founder & CEO",
      company: "Dialectics Educational Platform",
      period: "May 2022 - Present",
      location: "India",
      description: "Founded and scaled an innovative edtech venture focusing on economics education for public schools.",
      achievements: [
        "Founded and scaled edtech venture with 200,000+ books sold",
        "Expanded reach to 5,800+ public schools impacting 1.3 million children",
        "Content adopted by Government of Andhra Pradesh for 2025-26 curriculum",
        "Authored Swaminathan and Tara book series",
        "Built comic-based economic education platform"
      ],
      technologies: ["Educational Technology", "Content Strategy", "Publishing", "Government Relations", "Business Development"],
      icon: BookOpen
    },
    {
      title: "Program Manager",
      company: "Narayana Educational Operations",
      period: "August 2022 - August 2024",
      location: "India",
      description: "Managed large-scale educational operations and drove significant business growth initiatives.",
      achievements: [
        "Oversaw team of 65+ resources across three campuses",
        "Managed region with 1,000+ students",
        "Doubled enrollments and increased revenues by 74% in 2024",
        "Designed Excel-based scheduling model with workload mapping",
        "Reduced staff overtime hours by 7% under weekly hour constraints",
        "Managed $1.6M payroll using SAP FICO"
      ],
      technologies: ["SAP FICO", "Excel Optimization", "Operations Management", "Revenue Analytics", "Team Leadership"],
      icon: Users
    },
    {
      title: "Strategic Consultant & Project Manager",
      company: "Learning Improvement Program (LIP) - UNICEF",
      period: "September 2020 - August 2022",
      location: "Andhra Pradesh, India",
      description: "Led consulting services with UNICEF to facilitate implementation of educational programs across Andhra Pradesh.",
      achievements: [
        "Facilitated implementation across 10 districts benefiting 1.3 million children",
        "Reintegrated 12,650 students who dropped out post-COVID",
        "Led 33-member analytics team for baseline assessment data analysis",
        "Identified learning gaps and supported data-driven decision making",
        "Coordinated with 1,500 community volunteers and 200 principals"
      ],
      technologies: ["Data Analytics", "Program Management", "UNICEF Partnership", "Educational Assessment", "Team Leadership"],
      icon: Users
    },
    {
      title: "Associate Product Manager",
      company: "BankBuddy.ai - Financial Credit System",
      period: "August 2017 - December 2018",
      location: "India",
      description: "Developed innovative fintech solution to streamline customer verification and credit scoring processes.",
      achievements: [
        "Reduced customer verification time by 81%",
        "Built system using Java, Spring Boot, and AngularJS",
        "Generated credit and finance based potential scores for customers",
        "Improved customer onboarding experience significantly",
        "Integrated with banking systems for real-time processing"
      ],
      technologies: ["Java", "Spring Boot", "AngularJS", "Banking APIs", "Credit Scoring", "Product Management"],
      icon: TrendingUp
    },
    {
      title: "Technical Analyst",
      company: "JPMorgan Chase - Gateway Connector",
      period: "July 2015 - July 2017",
      location: "India",
      description: "Contributed to critical payment processing infrastructure at JPMorgan Chase, handling global transactions.",
      achievements: [
        "Oversaw processing of real-time payment transactions globally",
        "Implemented and managed SWIFT code payment transactions",
        "Developed automated regression testing tool for Gateway Connector project",
        "Achieved testing capacity of ~500 payments per minute",
        "Promoted from Quality Analyst to Application Developer",
        "Worked on front-end (Angular JS) and back-end (Java) development"
      ],
      technologies: ["Java", "Angular JS", "SWIFT", "Payment Processing", "Automated Testing", "Financial Systems"],
      icon: Code
    },
    {
      title: "Graduate Student Researcher & Teaching Assistant",
      company: "Arizona State University",
      period: "August 2024 - Present",
      location: "Arizona, USA",
      description: "Pursuing MBA in Business Analytics & Supply Chain Management while working on cutting-edge research projects.",
      achievements: [
        "Working on AI-powered turbine optimization for GE Aerospace",
        "Optimizing Emergency Room operations at Mayo Clinic Scottsdale",
        "Teaching Assistant for MS in Artificial Intelligence program",
        "Focusing on supply chain analytics and data-driven decision making",
        "Combining business strategy with advanced analytics"
      ],
      technologies: ["Machine Learning", "Supply Chain Analytics", "Business Analytics", "Healthcare Operations", "Teaching"],
      icon: GraduationCap
    }
  ];

  return (
    <Layout>
      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">Work Experience</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              7+ years of professional experience spanning technology, education, finance, and business strategy. 
              A proven track record of leadership, innovation, and driving meaningful impact across diverse industries.
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-2xl text-white mb-2 flex items-center gap-3">
                        <experience.icon className="h-6 w-6 text-blue-400" />
                        {experience.title}
                      </CardTitle>
                      <h3 className="text-xl text-blue-300 font-semibold mb-3">{experience.company}</h3>
                      <div className="flex items-center gap-4 text-white/60 mb-3">
                        <span className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {experience.period}
                        </span>
                        <span className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          {experience.location}
                        </span>
                      </div>
                      <p className="text-white/80 text-lg leading-relaxed">{experience.description}</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, i) => (
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
                      {experience.technologies.map((tech, i) => (
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
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default WorkExperience;
