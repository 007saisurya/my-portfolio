
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <nav className="bg-black/20 backdrop-blur-sm border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-white hover:text-blue-300 transition-colors">
              Sai Surya Kanakamedala
            </Link>
            <div className="flex space-x-6">
              <Link 
                to="/" 
                className={`text-white hover:text-blue-300 transition-colors ${isActive('/') ? 'text-blue-300' : ''}`}
              >
                Home
              </Link>
              <Link 
                to="/work-experience" 
                className={`text-white hover:text-blue-300 transition-colors ${isActive('/work-experience') ? 'text-blue-300' : ''}`}
              >
                Experience
              </Link>
              <Link 
                to="/projects" 
                className={`text-white hover:text-blue-300 transition-colors ${isActive('/projects') ? 'text-blue-300' : ''}`}
              >
                Projects
              </Link>
              <a 
                href="https://www.linkedin.com/in/sai-surya-k/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-blue-300 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </nav>
      
      <main>{children}</main>
      
      <footer className="bg-black/30 backdrop-blur-sm border-t border-white/10 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center text-white/70">
          <p>&copy; 2024 Sai Surya Kanakamedala. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
