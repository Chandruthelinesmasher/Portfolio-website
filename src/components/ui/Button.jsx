import React from 'react';

export const Button = ({ 
  children, 
  variant = 'primary', 
  icon: Icon, 
  onClick,
  className = '' 
}) => {
  const baseStyles = 'px-8 py-3 rounded-lg font-semibold transition-all flex items-center gap-2';
  
  const variants = {
    primary: 'bg-gradient-to-r from-blue-500 to-purple-500 hover:shadow-lg hover:shadow-purple-500/50',
    secondary: 'bg-white/10 backdrop-blur-sm hover:bg-white/20'
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {Icon && <Icon size={20} />}
      {children}
    </button>
  );
};