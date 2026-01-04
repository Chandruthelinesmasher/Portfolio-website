import React from 'react';

export const SectionTitle = ({ children, className = '' }) => {
  return (
    <h2 className={`text-4xl font-bold mb-12 text-center ${className}`}>
      {children}
    </h2>
  );
};