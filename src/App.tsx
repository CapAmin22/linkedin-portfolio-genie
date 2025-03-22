
import React, { useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProjectDetail from "./pages/ProjectDetail";
import NotFound from "./pages/NotFound";

// Initialize React Query client with better defaults
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

const App = () => {
  // Preload critical assets
  useEffect(() => {
    // This helps with performance by preloading important images or scripts
    const preloadLinks = [
      "/lovable-uploads/b3c0efc4-917f-4545-a9bc-e3ae493900f8.png",
      "/lovable-uploads/5c98dae9-ee80-48f0-8cc0-66dbd895b366.png"
    ];
    
    preloadLinks.forEach(link => {
      const preload = document.createElement('link');
      preload.rel = 'preload';
      preload.as = 'image';
      preload.href = link;
      document.head.appendChild(preload);
    });
  }, []);
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/project/:projectId" element={<ProjectDetail />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
