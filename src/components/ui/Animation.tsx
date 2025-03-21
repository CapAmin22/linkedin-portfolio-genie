
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimationProps {
  children: React.ReactNode;
  type: 'fade-in' | 'fade-in-up' | 'fade-in-down';
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
}

export const AnimateIn: React.FC<AnimationProps> = ({
  children,
  type,
  delay = 0,
  duration = 700,
  className,
  threshold = 0.1,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const animations = {
    'fade-in': 'animate-fade-in opacity-0',
    'fade-in-up': 'animate-fade-in-up opacity-0',
    'fade-in-down': 'animate-fade-in-down opacity-0',
  };

  const styles = {
    animationDelay: `${delay}ms`,
    animationDuration: `${duration}ms`,
    animationFillMode: 'forwards',
  };

  return (
    <div
      ref={ref}
      className={cn(isVisible ? animations[type] : 'opacity-0', className)}
      style={isVisible ? styles : {}}
    >
      {children}
    </div>
  );
};

export const StaggeredChildren: React.FC<{
  children: React.ReactNode[];
  baseDelay?: number;
  staggerDelay?: number;
  className?: string;
  childClassName?: string;
  type: 'fade-in' | 'fade-in-up' | 'fade-in-down';
  as?: keyof JSX.IntrinsicElements;
}> = ({
  children,
  baseDelay = 0,
  staggerDelay = 100,
  className,
  childClassName,
  type,
  as: Component = 'div',
}) => {
  return (
    <Component className={className}>
      {React.Children.map(children, (child, i) => (
        <AnimateIn
          key={i}
          type={type}
          delay={baseDelay + i * staggerDelay}
          className={childClassName}
        >
          {child}
        </AnimateIn>
      ))}
    </Component>
  );
};
