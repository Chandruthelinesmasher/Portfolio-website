import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../../utils/constants';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

export const Navbar = ({ activeSection, onNavigate }) => {
  const { isScrolled } = useScrollPosition();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Scroll progress bar
  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / scrollHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  // Close menu when navigating
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [activeSection]);

  // Disable scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => (document.body.style.overflow = 'unset');
  }, [isMobileMenuOpen]);

  const handleNavigate = (section) => {
    onNavigate(section);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-white/10'
            : 'bg-transparent'
        }`}
      >
        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="w-full px-6 py-4">
          <div className="flex items-center justify-between w-full">
            {/* Logo */}
            <motion.div
              className="flex flex-col leading-tight text-left cursor-pointer group"
              onClick={() => onNavigate('home')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-2xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Chandru K
              </span>
              <motion.span className="text-sm text-gray-400 tracking-wide">
                DevOps Engineer | AWS • Azure • Docker • Kubernetes • CI/CD
              </motion.span>
            </motion.div>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1 bg-white/5 rounded-full px-2 py-2 border border-white/10">
              {NAV_ITEMS.map((section, index) => (
                <motion.button
                  key={section}
                  onClick={() => handleNavigate(section)}
                  className="relative px-4 py-2 capitalize font-medium transition-colors rounded-full"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {activeSection === section && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    />
                  )}
                  <span
                    className={`relative z-10 ${
                      activeSection === section
                        ? 'text-white'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {section}
                  </span>
                </motion.button>
              ))}
            </div>

            {/* Mobile toggle */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}>
                    <X size={24} className="text-white" />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}>
                    <Menu size={24} className="text-white" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Slide-in Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed right-0 top-0 bottom-0 w-80 bg-slate-900/98 backdrop-blur-xl 
                         border-l border-white/10 z-50 md:hidden overflow-y-auto"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Menu
                  </span>
                  <motion.button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 bg-white/5 hover:bg-white/10 rounded-lg"
                  >
                    <X size={20} className="text-white" />
                  </motion.button>
                </div>

                {/* Nav Links */}
                <div className="space-y-2 mb-8">
                  {NAV_ITEMS.map((section, index) => (
                    <motion.button
                      key={section}
                      onClick={() => handleNavigate(section)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`w-full text-left px-4 py-3 rounded-lg capitalize font-medium 
                        ${
                          activeSection === section
                            ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-purple-500/30'
                            : 'bg-white/5 text-gray-300 hover:bg-white/10'
                        }`}
                    >
                      {section}
                    </motion.button>
                  ))}
                </div>

                {/* Quick Actions */}
                <div className="space-y-3 pb-6 border-b border-white/10 mb-6">
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-3">Quick Actions</p>

                  <motion.button className="w-full flex items-center gap-3 px-4 py-3 bg-white/5 hover:bg-white/10 rounded-lg">
                    <Download size={18} className="text-blue-400" />
                    <span className="text-sm font-medium text-white">Download Resume</span>
                  </motion.button>

                  <motion.button className="w-full flex items-center gap-3 px-4 py-3 bg-white/5 hover:bg-white/10 rounded-lg">
                    <Mail size={18} className="text-purple-400" />
                    <span className="text-sm font-medium text-white">Send Email</span>
                  </motion.button>
                </div>

                {/* Social */}
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-3">Connect</p>

                  <div className="flex gap-3">
                    <motion.a
                      href="https://github.com"
                      target="_blank"
                      className="flex-1 p-3 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center"
                    >
                      <Github size={20} className="text-gray-300" />
                    </motion.a>

                    <motion.a
                      href="https://linkedin.com"
                      target="_blank"
                      className="flex-1 p-3 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center"
                    >
                      <Linkedin size={20} className="text-blue-400" />
                    </motion.a>

                    <motion.a
                      href="#"
                      className="flex-1 p-3 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center"
                    >
                      <ExternalLink size={20} className="text-purple-400" />
                    </motion.a>
                  </div>
                </div>

                {/* CTA */}
                <motion.button
                  onClick={() => handleNavigate('contact')}
                  className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-medium text-white"
                >
                  Let's Talk
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
