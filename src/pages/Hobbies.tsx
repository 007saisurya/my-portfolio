
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Plane, Trophy, MapPin, Heart, Camera } from "lucide-react";

const Hobbies = () => {
  const hobbyImages = [
    "/lovable-uploads/34a6e640-05f2-4806-bd1f-7362e406c169.png",
    "/lovable-uploads/e852d9ec-9489-4b8d-aa46-c8786a8bbb10.png",
    "/lovable-uploads/ccb5b881-ea36-42b1-9849-36b58035410c.png"
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

          {/* Image Gallery */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {hobbyImages.map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <img 
                  src={image} 
                  alt={`Hobby ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {/* Main Content Card */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-white mb-4 flex items-center justify-center gap-3">
                <Heart className="h-8 w-8 text-red-400" />
                What I Love Doing
              </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-8">
              <div className="text-center">
                <p className="text-xl text-white/90 leading-relaxed mb-8">
                  I'm someone who believes in living life to the fullest! My interests span across intellectual pursuits, 
                  physical challenges, and cultural exploration. Here's what makes me tick:
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Intellectual Pursuits */}
                <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                    <BookOpen className="h-6 w-6 text-blue-400" />
                    Intellectual Pursuits
                  </h3>
                  <ul className="space-y-3 text-white/80">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">📚</span>
                      <span><strong>Economics:</strong> Fascinated by market dynamics, behavioral economics, and global financial systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">🌍</span>
                      <span><strong>International Relations:</strong> Understanding geopolitics, diplomacy, and how nations interact</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">🏛️</span>
                      <span><strong>History:</strong> Learning from the past to understand our present and shape the future</span>
                    </li>
                  </ul>
                </div>

                {/* Active Lifestyle */}
                <div className="bg-gradient-to-br from-green-900/30 to-teal-900/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                    <Trophy className="h-6 w-6 text-green-400" />
                    Active Lifestyle
                  </h3>
                  <ul className="space-y-3 text-white/80">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">🎾</span>
                      <span><strong>Tennis:</strong> Love the strategic gameplay and competitive spirit of the sport</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">🏃‍♂️</span>
                      <span><strong>Marathon Running:</strong> Pushing my physical and mental limits, one mile at a time</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">🏔️</span>
                      <span><strong>Outdoor Adventures:</strong> Hiking, exploring nature, and staying connected with the outdoors</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Travel & Exploration */}
              <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                  <Plane className="h-6 w-6 text-purple-400" />
                  Travel & Cultural Exploration
                </h3>
                <p className="text-white/80 leading-relaxed">
                  <strong>Traveling</strong> is my way of understanding different cultures, cuisines, and perspectives. 
                  Every destination teaches me something new about the world and myself. From mountain adventures to coastal explorations, 
                  from historical sites to local food discoveries - I believe every journey has a story to tell, 
                  and I love being part of that narrative!
                </p>
              </div>

              {/* Life Philosophy */}
              <div className="text-center bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-4">My Philosophy</h3>
                <p className="text-xl text-white/80 leading-relaxed italic">
                  "I believe in continuous learning, meaningful connections, and pushing boundaries. 
                  Whether I'm analyzing economic theories, exploring a new country, or training for my next marathon, 
                  I approach everything with curiosity, determination, and a sense of adventure!"
                </p>
                <div className="flex justify-center mt-6">
                  <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 text-lg">
                    Always Learning, Always Growing
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Hobbies;
