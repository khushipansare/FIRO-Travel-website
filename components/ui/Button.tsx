import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-serif tracking-wide transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed rounded-sm";
  
  const variants = {
    primary: "bg-firo-gold text-white hover:bg-firo-goldHover shadow-md hover:shadow-lg",
    secondary: "bg-firo-navy text-white hover:bg-opacity-90 shadow-md",
    outline: "border-2 border-firo-navy text-firo-navy hover:bg-firo-navy hover:text-white",
    ghost: "text-firo-navy hover:bg-firo-gray/20"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg font-bold"
  };

  const width = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${width} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};
