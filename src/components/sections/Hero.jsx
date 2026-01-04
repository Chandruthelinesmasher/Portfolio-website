import React from 'react';
import { Server, ChevronDown } from 'lucide-react';
import { PERSONAL_INFO } from '../../utils/constants';

export const Hero = ({ onNavigate }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl text-center">
        {/* Profile Icon */}
        <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
          <Server size={64} />
        </div>
        
        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          {PERSONAL_INFO.name}
        </h1>
        
        {/* Title & Experience */}
        <p className="text-2xl md:text-3xl text-gray-300 mb-4">
          {PERSONAL_INFO.title} • {PERSONAL_INFO.experience}
        </p>
        
        {/* Tagline */}
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          {PERSONAL_INFO.tagline}
        </p>
        
        {/* Scroll Indicator */}
        <div className="mt-16 animate-bounce">
          <ChevronDown size={32} className="mx-auto text-gray-400" />
        </div>
      </div>
    </section>
  );
};