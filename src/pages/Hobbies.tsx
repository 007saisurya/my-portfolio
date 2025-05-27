
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Plane, Trophy, MapPin, Heart, Camera } from "lucide-react";

const Hobbies = () => {
  const hobbies = [
    {
      title: "Reading & Learning",
      icon: BookOpen,
      description: "I'm passionate about expanding my knowledge through books and articles.",
      interests: [
        "Economics - From behavioral economics to global market dynamics",
        "International Relations - Understanding geopolitics and global affairs", 
        "History - Exploring how past events shape our present world",
        "Business Strategy - Learning from successful entrepreneurs and leaders"
      ],
      image: "/lovable-uploads/34a6e640-05f2-4806-bd1f-7362e406c169.png",
      fun_fact: "I can spend hours discussing economic theories or debating historical events!"
    },
    {
      title: "Travel Adventures",
      icon: Plane,
      description: "Exploring new cultures, cuisines, and creating unforgettable memories around the world.",
      experiences: [
        "Mountain adventures and scenic landscapes",
        "Coastal explorations and island hopping", 
        "Historical site visits and cultural immersion",
        "Local food discoveries and culinary experiences"
      ],
      image: "/lovable-uploads/e852d9ec-9489-4b8d-aa46-c8786a8bbb10.png",
      fun_fact: "I believe every destination has a story to tell, and I love being part of that narrative!"
    },
    {
      title: "Sports & Fitness",
      icon: Trophy,
      description: "Staying active through various sports and endurance challenges.",
      activities: [
        "Tennis - Strategic gameplay and competitive matches",
        "Marathon Running - Pushing physical and mental limits",
        "Outdoor Activities - Hiking and exploring nature",
        "Fitness Training - Maintaining peak physical condition"
      ],
      image: "/lovable-uploads/ccb5b881-ea36-42b1-9849-36b58035410c.png",
      fun_fact: "Running marathons has taught me that mental strength is just as important as physical endurance!"
    }
  ];

  return (
    <Layout>
      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">My Hobbies & Interests</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Beyond work and academics, I'm passionate about learning, exploring, and staying active. 
              Here's what keeps me energized and inspired in my free time!
            </p>
          </div>

          <div className="space-y-12">
            {hobbies.map((hobby, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img 
                      src={hobby.image} 
                      alt={hobby.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2">
                    <CardHeader>
                      <CardTitle className="text-2xl text-white mb-3 flex items-center gap-3">
                        <hobby.icon className="h-6 w-6 text-blue-400" />
                        {hobby.title}
                      </CardTitle>
                      <p className="text-white/80 text-lg leading-relaxed">{hobby.description}</p>
                    </CardHeader>
                    
                    <CardContent className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">What I Love About It</h4>
                        <ul className="space-y-2">
                          {(hobby.interests || hobby.experiences || hobby.activities)?.map((item, i) => (
                            <li key={i} className="text-white/70 flex items-start gap-2">
                              <span className="text-blue-400 mt-1">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <Heart className="h-5 w-5 text-red-400 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-2">Fun Fact</h4>
                            <p className="text-white/80 italic">{hobby.fun_fact}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 backdrop-blur-sm border-white/20 max-w-4xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Life Philosophy</h3>
                <p className="text-xl text-white/80 leading-relaxed">
                  "I believe in continuous learning, meaningful connections, and pushing boundaries. 
                  Whether I'm analyzing market trends, exploring a new country, or training for my next marathon, 
                  I approach everything with curiosity, determination, and a sense of adventure!"
                </p>
                <div className="flex justify-center mt-6">
                  <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 text-lg">
                    Always Learning, Always Growing
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Hobbies;
