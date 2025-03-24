
import { useEffect } from 'react';

/**
 * Hook that adds smooth scrolling functionality to anchor links
 */
export const useScrollSmoothNavigation = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    const handleClick = function(this: HTMLAnchorElement, e: MouseEvent) {
      e.preventDefault();
      
      const href = this.getAttribute('href');
      if (!href) return;
      
      const target = document.querySelector(href);
      if (!target) return;
      
      window.scrollTo({
        top: (target as HTMLElement).offsetTop,
        behavior: 'smooth'
      });
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    
    anchors.forEach(anchor => {
      anchor.addEventListener('click', handleClick);
    });
    
    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', handleClick);
      });
    };
  }, []);
};

export default useScrollSmoothNavigation;
