
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Code, BookOpen, Users } from "lucide-react";

const About = () => {
  const experiences = [
    {
      icon: Code,
      title: "Technical Excellence",
      description: "Former full-stack developer at JPMorgan with expertise in Java, SAP, Tableau, and modern web technologies.",
      highlight: "7+ years in technology"
    },
    {
      icon: BookOpen,
      title: "Educational Impact",
      description: "Founded Dialectics, scaling educational content to 5,800+ public schools and selling 200,000+ books.",
      highlight: "Edtech entrepreneur"
    },
    {
      icon: GraduationCap,
      title: "Business Strategy",
      description: "Currently pursuing MBA in Business Analytics & Supply Chain Management at Arizona State University.",
      highlight: "AI & Analytics focus"
    },
    {
      icon: Users,
      title: "Program Management",
      description: "Led teams of 65+ resources, managed operations across multiple regions, and drove significant growth initiatives.",
      highlight: "Leadership proven"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            A unique blend of technical expertise and business acumen, I've successfully transitioned from 
            software development to strategic leadership, always focusing on innovation and impact.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-lg group-hover:scale-110 transition-transform">
                    <exp.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                      <span className="text-sm text-blue-300 font-medium">{exp.highlight}</span>
                    </div>
                    <p className="text-white/70 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
