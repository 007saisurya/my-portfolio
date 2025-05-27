
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen, Users, TrendingUp, Award, Heart, Target } from "lucide-react";

const Dialectics = () => {
  const achievements = [
    { label: "Books Sold", value: "200,000+", icon: BookOpen },
    { label: "Schools Reached", value: "5,800+", icon: Users },
    { label: "Children Impacted", value: "1.3 Million+", icon: Heart },
    { label: "Government Adoption", value: "AP State 2025-26", icon: Award }
  ];

  const features = [
    {
      title: "Comic-Based Learning",
      description: "Making economics accessible through engaging comic strips and visual storytelling"
    },
    {
      title: "Curriculum Integration", 
      description: "Content designed to integrate seamlessly with existing school curricula"
    },
    {
      title: "Public School Focus",
      description: "Specifically created for government and public schools to ensure broad accessibility"
    },
    {
      title: "Age-Appropriate Content",
      description: "Educational material tailored for different age groups and learning levels"
    }
  ];

  return (
    <Layout>
      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">Dialectics Educational Platform</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Revolutionizing economics education through innovative comic-based learning, 
              making complex economic concepts accessible to millions of children across India.
            </p>
            <a 
              href="https://thedialectics.co.in/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg">
                Visit Dialectics Website
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>

          {/* Impact Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-center">
                <CardContent className="p-6">
                  <achievement.icon className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white mb-1">{achievement.value}</div>
                  <div className="text-white/60 text-sm">{achievement.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-3">
                  <Target className="h-6 w-6 text-blue-400" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 text-lg leading-relaxed">
                  To democratize economics education by creating engaging, accessible content that transforms 
                  how children understand economic concepts. We believe every child deserves quality education 
                  that prepares them for the modern world.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-3">
                  <TrendingUp className="h-6 w-6 text-blue-400" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 text-lg leading-relaxed">
                  To become the leading educational platform that bridges the gap between complex economic 
                  theories and practical understanding, creating a generation of economically literate citizens.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* The Swaminathan and Tara Series */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-16">
            <CardHeader>
              <CardTitle className="text-3xl text-white text-center mb-4">
                The Swaminathan and Tara Book Series
              </CardTitle>
              <p className="text-xl text-white/80 text-center">
                Our flagship comic-based educational series that makes economics fun and accessible
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-3">Key Features</h4>
                  <div className="space-y-4">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <span className="text-blue-400 mt-1">•</span>
                        <div>
                          <h5 className="font-medium text-white">{feature.title}</h5>
                          <p className="text-white/70 text-sm">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-3">Recognition & Adoption</h4>
                  <div className="space-y-3">
                    <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-lg p-4">
                      <h5 className="font-medium text-white mb-2">Government of Andhra Pradesh</h5>
                      <p className="text-white/70 text-sm">
                        Official adoption for the 2025-26 academic year curriculum across all public schools
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg p-4">
                      <h5 className="font-medium text-white mb-2">Widespread Impact</h5>
                      <p className="text-white/70 text-sm">
                        Reached 5,800+ schools and positively impacted 1.3 million+ children's education
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Technologies & Approach */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-2xl text-white mb-4">Our Approach</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <BookOpen className="h-12 w-12 text-blue-400 mx-auto mb-3" />
                  <h4 className="text-lg font-semibold text-white mb-2">Content Strategy</h4>
                  <p className="text-white/70">Developing age-appropriate, engaging educational content</p>
                </div>
                <div className="text-center">
                  <Users className="h-12 w-12 text-blue-400 mx-auto mb-3" />
                  <h4 className="text-lg font-semibold text-white mb-2">Community Building</h4>
                  <p className="text-white/70">Creating networks of educators, students, and stakeholders</p>
                </div>
                <div className="text-center">
                  <Award className="h-12 w-12 text-blue-400 mx-auto mb-3" />
                  <h4 className="text-lg font-semibold text-white mb-2">Quality Assurance</h4>
                  <p className="text-white/70">Ensuring educational standards and learning outcomes</p>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <div className="flex flex-wrap justify-center gap-2">
                  {["Educational Technology", "Content Strategy", "Publishing", "Government Relations", "Business Development"].map((tech, i) => (
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
        </div>
      </div>
    </Layout>
  );
};

export default Dialectics;
