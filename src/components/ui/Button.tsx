
import React from 'react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import { cva, type VariantProps } from "class-variance-authority";

// Define buttonVariants using cva for consistent styling across components
export const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:opacity-90 focus:ring-primary",
        outline: "border border-primary text-primary hover:bg-primary/10 focus:ring-primary",
        ghost: "bg-transparent hover:bg-secondary text-foreground hover:text-foreground focus:ring-secondary",
        link: "bg-transparent underline-offset-4 hover:underline text-primary hover:text-primary/90 p-0 focus:ring-0",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 focus:ring-destructive",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 focus:ring-secondary",
        gradient: "btn-gradient hover:opacity-90 focus:ring-primary"
      },
      size: {
        sm: "text-sm h-8 px-3 py-1.5 rounded-md",
        md: "text-base h-10 px-4 py-2 rounded-md",
        lg: "text-lg h-12 px-6 py-3 rounded-md",
        default: "text-base h-10 px-4 py-2 rounded-md",
        icon: "h-10 w-10 rounded-md"
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, 
  VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  href?: string;
  className?: string;
  isLoading?: boolean;
  loadingText?: string;
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
  isLoading = false,
  loadingText,
  disabled,
  ...props
}) => {
  const isDisabled = disabled || isLoading;

  const buttonContent = (
    <>
      {isLoading && (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      )}
      {!isLoading && icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {isLoading && loadingText ? loadingText : children}
      {!isLoading && icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </>
  );

  const buttonClasses = cn(
    buttonVariants({ variant, size }),
    fullWidth && 'w-full',
    className
  );

  if (href && !isDisabled) {
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
      disabled={isDisabled}
      {...props}
    >
      {buttonContent}
    </button>
  );
};

export default Button;
