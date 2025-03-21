
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  id?: string;
  fullHeight?: boolean;
}

const Section: React.FC<SectionProps> = ({
  children,
  className,
  id,
  fullHeight = false,
  ...props
}) => {
  return (
    <section
      id={id}
      className={cn(
        'w-full px-4 sm:px-6 md:px-8 py-16 md:py-24',
        fullHeight && 'min-h-screen flex flex-col justify-center',
        className
      )}
      {...props}
    >
      <div className="container mx-auto">
        {children}
      </div>
    </section>
  );
};

export default Section;
