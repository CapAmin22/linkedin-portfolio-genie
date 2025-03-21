
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  href?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'default',
  size = 'md',
  icon,
  iconPosition = 'right',
  fullWidth = false,
  href,
  className,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    default: 'bg-primary text-primary-foreground hover:opacity-90 focus:ring-primary',
    outline: 'border border-primary text-primary hover:bg-primary hover:text-primary-foreground focus:ring-primary',
    ghost: 'bg-transparent hover:bg-secondary text-foreground hover:text-foreground focus:ring-secondary',
    link: 'bg-transparent underline-offset-4 hover:underline text-primary hover:text-primary/90 p-0 focus:ring-0'
  };
  
  const sizes = {
    sm: 'text-sm px-3 py-1.5 rounded-md',
    md: 'text-base px-4 py-2 rounded-md',
    lg: 'text-lg px-6 py-3 rounded-md'
  };

  const buttonContent = (
    <>
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </>
  );

  const buttonClasses = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    fullWidth && 'w-full',
    className
  );

  if (href) {
    return (
      <a 
        href={href} 
        className={buttonClasses}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <button 
      className={buttonClasses} 
      {...props}
    >
      {buttonContent}
    </button>
  );
};

export default Button;
