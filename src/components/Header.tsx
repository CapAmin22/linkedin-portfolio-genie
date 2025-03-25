
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import Button from './ui/Button';
import { ArrowUpIcon } from 'lucide-react';

interface NavItem {
  title: string;
  href: string;
}

const navItems: NavItem[] = [
  { title: 'About', href: '#about' },
  { title: 'Experience', href: '#experience' },
  { title: 'Skills', href: '#skills' },
  { title: 'Projects', href: '#projects' },
  { title: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowScrollToTop(window.scrollY > 500);
      
      // Find active section
      const sections = navItems.map(item => item.href.substring(1));
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust these values based on your layout
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
            break;
          }
        }
      }
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'py-3 bg-[#05061f]/90 backdrop-blur-md shadow-lg' : 'py-5 bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a 
          href="#" 
          className="text-xl font-semibold text-white transition-opacity hover:opacity-80"
          onClick={(e) => handleNavClick(e, '#')}
        >
          Portfolio
        </a>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a 
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn(
                    'text-sm font-medium transition-all duration-300 hover:text-primary relative px-1 py-2',
                    activeSection === item.href.substring(1) ? 'text-primary font-bold' : 'text-white'
                  )}
                >
                  {item.title}
                  {activeSection === item.href.substring(1) && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-300" />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {}}
            aria-label="Toggle menu"
            className="text-white hover:bg-white/10"
          >
            Menu
          </Button>
        </div>
      </div>
      
      <button 
        onClick={scrollToTop}
        className={cn(
          'fixed bottom-6 right-6 p-3 rounded-full shadow-lg bg-primary text-primary-foreground transition-all duration-300 transform',
          showScrollToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        )}
        aria-label="Scroll to top"
      >
        <ArrowUpIcon size={20} />
      </button>
    </header>
  );
};

export default Header;
