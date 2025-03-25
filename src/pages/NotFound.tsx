
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#05061f] to-[#0d1033]">
      <div className="text-center p-8 rounded-lg backdrop-blur-md bg-white/5 border border-white/10 shadow-xl max-w-md">
        <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-red-500/20 text-red-400">
          <span className="text-2xl font-bold">404</span>
        </div>
        <h1 className="text-4xl font-bold mb-4 text-white">Page Not Found</h1>
        <p className="text-xl text-gray-300 mb-6">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <a 
          href="/"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors"
        >
          <ArrowLeft size={18} />
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
