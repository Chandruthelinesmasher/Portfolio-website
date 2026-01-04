import React from 'react';

export const Card = ({ children, className = '', hover = true }) => {
  const hoverEffect = hover ? 'hover:border-purple-500/50' : '';
  
  return (
    <div className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 transition-all ${hoverEffect} ${className}`}>
      {children}
    </div>
  );
};