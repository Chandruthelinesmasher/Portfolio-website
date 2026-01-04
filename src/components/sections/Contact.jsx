import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, MapPin, Phone, MessageSquare, Sparkles, Zap, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Card Component
const Card = ({ children, className = '' }) => (
  <div className={`bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 ${className}`}>
    {children}
  </div>
);

// SectionTitle Component
const SectionTitle = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-center mb-12"
  >
    <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
      {children}
    </h2>
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: '100px' }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full"
    />
  </motion.div>
);

const CONTACT_INFO = {
  email: 'chandrukumaravel007@gmail.com',
  linkedin: 'https://www.linkedin.com/in/chandru-k-cloud-20-conqueror03/',
  github: 'https://github.com/Chandruthelinesmasher',
  location: 'Madurai, India',
};

const SOCIAL_LINKS = [
  {
    icon: Mail,
    href: `mailto:${CONTACT_INFO.email}`,
    label: 'Email',
    description: 'Drop me a line',
    color: 'from-red-500 to-pink-500',
    hoverColor: 'group-hover:text-red-400',
  },
  {
    icon: Github,
    href: CONTACT_INFO.github,
    label: 'GitHub',
    description: 'Check my repos',
    color: 'from-gray-600 to-gray-800',
    hoverColor: 'group-hover:text-gray-400',
  },
  {
    icon: Linkedin,
    href: CONTACT_INFO.linkedin,
    label: 'LinkedIn',
    description: 'Let\'s connect',
    color: 'from-blue-600 to-blue-800',
    hoverColor: 'group-hover:text-blue-400',
  },
];

const QUICK_CONTACT_CARDS = [
  {
    icon: MessageSquare,
    title: 'Quick Response',
    description: 'I typically respond within 24 hours',
    color: 'from-green-500/20 to-emerald-500/20',
    borderColor: 'border-green-500/40',
  },
  {
    icon: Zap,
    title: 'Open to Opportunities',
    description: 'Available for freelance & full-time roles',
    color: 'from-yellow-500/20 to-orange-500/20',
    borderColor: 'border-yellow-500/40',
  },
  {
    icon: Star,
    title: 'Collaboration Ready',
    description: 'Excited to work on innovative projects',
    color: 'from-purple-500/20 to-pink-500/20',
    borderColor: 'border-purple-500/40',
  },
];

export const Contact = () => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_INFO.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 90, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.3, 1, 1.3],
            rotate: [-90, 0, -90],
            opacity: [0.2, 0.1, 0.2],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <SectionTitle>Let's Connect</SectionTitle>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-gray-400 text-lg mb-12 max-w-2xl mx-auto"
        >
          Ready to discuss your next project or just want to say hi? I'm always open to new opportunities and collaborations.
        </motion.p>

        {/* Quick Info Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-3 gap-4 mb-12"
        >
          {QUICK_CONTACT_CARDS.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`p-4 bg-gradient-to-br ${card.color} border ${card.borderColor} 
                         rounded-xl backdrop-blur-sm text-center`}
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex p-3 bg-white/10 rounded-lg mb-3"
                >
                  <Icon size={24} />
                </motion.div>
                <h3 className="font-semibold mb-1">{card.title}</h3>
                <p className="text-xs text-gray-400">{card.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Main Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="relative overflow-hidden">
            {/* Animated gradient background */}
            <motion.div
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 opacity-5"
              style={{
                background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)',
                backgroundSize: '200% 100%',
              }}
            />

            <div className="relative z-10">
              {/* Email Section with Copy */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-8 pb-8 border-b border-white/10"
              >
                <div className="flex items-center justify-center gap-3 mb-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl shadow-lg"
                  >
                    <Mail size={24} className="text-white" />
                  </motion.div>
                  <div className="text-left">
                    <p className="text-sm text-gray-400">Email me at</p>
                    <p className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 
                               bg-clip-text text-transparent">
                      {CONTACT_INFO.email}
                    </p>
                  </div>
                </div>

                <motion.button
                  onClick={handleCopyEmail}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 
                           hover:from-blue-600 hover:to-purple-600 rounded-lg font-semibold 
                           transition-all shadow-lg hover:shadow-purple-500/50"
                >
                  <AnimatePresence mode="wait">
                    {copiedEmail ? (
                      <motion.span
                        key="copied"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-2"
                      >
                        ✓ Copied!
                      </motion.span>
                    ) : (
                      <motion.span
                        key="copy"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-2"
                      >
                        <Send size={16} />
                        Copy Email Address
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
              </motion.div>

              {/* Social Links Grid */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {SOCIAL_LINKS.map((link, idx) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={idx}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      onHoverStart={() => setHoveredLink(idx)}
                      onHoverEnd={() => setHoveredLink(null)}
                      className="group relative p-6 bg-white/5 hover:bg-white/10 border border-white/10 
                               hover:border-white/20 rounded-xl transition-all text-center"
                    >
                      {/* Hover gradient overlay */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-r ${link.color} opacity-0 
                                 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}
                      />

                      <div className="relative z-10">
                        <motion.div
                          animate={hoveredLink === idx ? {
                            rotate: [0, -10, 10, -10, 0],
                            scale: [1, 1.2, 1]
                          } : {}}
                          transition={{ duration: 0.5 }}
                          className={`inline-flex p-4 bg-gradient-to-br ${link.color} rounded-xl mb-3 
                                   shadow-lg group-hover:shadow-xl transition-all`}
                        >
                          <Icon size={28} className="text-white" />
                        </motion.div>

                        <h3 className={`font-bold text-lg mb-1 transition-colors ${link.hoverColor}`}>
                          {link.label}
                        </h3>
                        <p className="text-sm text-gray-400">{link.description}</p>

                        <motion.div
                          animate={hoveredLink === idx ? { x: 5 } : { x: 0 }}
                          className="mt-3 text-xs text-blue-400 flex items-center justify-center gap-1"
                        >
                          <span>Visit</span>
                          <span>→</span>
                        </motion.div>
                      </div>

                      {/* Sparkle effect on hover */}
                      <AnimatePresence>
                        {hoveredLink === idx && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0 }}
                            className="absolute top-2 right-2"
                          >
                            <Sparkles size={16} className="text-yellow-400" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.a>
                  );
                })}
              </div>

              {/* Location Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex items-center justify-center gap-2 text-gray-400 text-sm"
              >
                <MapPin size={16} className="text-purple-400" />
                <span>Based in {CONTACT_INFO.location}</span>
              </motion.div>
            </div>
          </Card>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-center mt-12"
        >
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 
                     border border-blue-500/40 rounded-full"
          >
            <Sparkles size={16} className="text-yellow-400" />
            <span className="text-sm text-gray-300">
              Available for new opportunities
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};