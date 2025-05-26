
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Bridging <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Technology</span> & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Business</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
            Experienced professional with 7+ years across technology, supply chain, and finance. 
            Former full-stack developer turned business strategist, pursuing MBA on a 100% scholarship from WP Carey School of Business with AI specialization.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/projects">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg group">
              View My Projects
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          
          <a href="mailto:ksurya@asu.edu">
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg">
              Get In Touch
            </Button>
          </a>
        </div>
        
        <div className="mt-12 flex justify-center space-x-8 text-white/60">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">7+</div>
            <div className="text-sm">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">5,800+</div>
            <div className="text-sm">Schools Impacted</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">1.3M+</div>
            <div className="text-sm">Children Reached</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
