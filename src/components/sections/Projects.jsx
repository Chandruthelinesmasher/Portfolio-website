import React, { useState } from 'react';
import { Github, ExternalLink, Play, Code, CheckCircle, TrendingUp, Zap, Award, Eye, Star } from 'lucide-react';
import { Card } from '../ui/Card';
import { SectionTitle } from '../ui/SectionTitle';
import { projectsData } from '../../data/projectsData';
import { motion, AnimatePresence } from 'framer-motion';

export const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  // Get unique tech stacks for filtering
  const allTech = [...new Set(projectsData.flatMap(p => p.tech))];
  const techFilters = ['all', ...allTech.slice(0, 6)]; // Limit to 6 main technologies

  // Filter projects based on selected tech
  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.tech.includes(filter));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <section id="projects" className="py-20 px-6 bg-black/20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 90, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-1/4 -right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.3, 1, 1.3],
            rotate: [90, 0, 90],
            opacity: [0.2, 0.1, 0.2],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute -bottom-1/4 -left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionTitle>Featured Projects</SectionTitle>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="p-4 bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20 
                     rounded-xl backdrop-blur-sm"
          >
            <div className="flex items-center gap-2 mb-1">
              <Code className="text-blue-400" size={18} />
              <p className="text-2xl font-bold text-white">{projectsData.length}</p>
            </div>
            <p className="text-xs text-gray-400">Total Projects</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="p-4 bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20 
                     rounded-xl backdrop-blur-sm"
          >
            <div className="flex items-center gap-2 mb-1">
              <TrendingUp className="text-purple-400" size={18} />
              <p className="text-2xl font-bold text-white">{allTech.length}+</p>
            </div>
            <p className="text-xs text-gray-400">Technologies</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="p-4 bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20 
                     rounded-xl backdrop-blur-sm"
          >
            <div className="flex items-center gap-2 mb-1">
              <CheckCircle className="text-green-400" size={18} />
              <p className="text-2xl font-bold text-white">100%</p>
            </div>
            <p className="text-xs text-gray-400">Success Rate</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="p-4 bg-gradient-to-br from-yellow-500/10 to-yellow-500/5 border border-yellow-500/20 
                     rounded-xl backdrop-blur-sm"
          >
            <div className="flex items-center gap-2 mb-1">
              <Award className="text-yellow-400" size={18} />
              <p className="text-2xl font-bold text-white">3+</p>
            </div>
            <p className="text-xs text-gray-400">Years Active</p>
          </motion.div>
        </motion.div>

        {/* Technology Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <Zap className="text-blue-400" size={18} />
            <p className="text-sm text-gray-400 font-medium">Filter by Technology</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {techFilters.map((tech, index) => (
              <motion.button
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(tech)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all relative overflow-hidden ${
                  filter === tech
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-purple-500/30'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
                }`}
              >
                {filter === tech && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500"
                    style={{ zIndex: -1 }}
                  />
                )}
                {tech === 'all' ? 'All Projects' : tech}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid md:grid-cols-2 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                whileHover={{ y: -10 }}
                className="h-full"
              >
                <Card className="group h-full relative overflow-hidden">
                  {/* Animated gradient background on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 
                             opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={hoveredProject === project.id ? {
                      background: [
                        'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(168, 85, 247, 0.05) 50%, rgba(236, 72, 153, 0.05) 100%)',
                        'linear-gradient(135deg, rgba(236, 72, 153, 0.05) 0%, rgba(59, 130, 246, 0.05) 50%, rgba(168, 85, 247, 0.05) 100%)',
                        'linear-gradient(135deg, rgba(168, 85, 247, 0.05) 0%, rgba(236, 72, 153, 0.05) 50%, rgba(59, 130, 246, 0.05) 100%)',
                      ]
                    } : {}}
                    transition={{ duration: 3, repeat: Infinity }}
                  />

                  <div className="relative z-10">
                    {/* Project Header */}
                    <div className="flex items-start justify-between mb-4">
                      <motion.div
                        className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 
                                 rounded-lg border border-blue-500/30"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Code className="text-blue-400" size={24} />
                      </motion.div>
                      
                      {/* Project Badge */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                        className="px-3 py-1 bg-green-500/20 border border-green-500/40 rounded-full 
                                 flex items-center gap-1"
                      >
                        <CheckCircle size={12} className="text-green-400" />
                        <span className="text-xs font-medium text-green-400">Live</span>
                      </motion.div>
                    </div>

                    {/* Project Title */}
                    <motion.h3
                      className="text-2xl font-semibold mb-3 group-hover:text-transparent 
                               group-hover:bg-clip-text group-hover:bg-gradient-to-r 
                               group-hover:from-blue-400 group-hover:to-purple-400 transition-all"
                    >
                      {project.title}
                    </motion.h3>

                    {/* Description */}
                    <p className="text-gray-400 mb-4 line-clamp-3 group-hover:text-gray-300 transition-colors">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: techIndex * 0.05 }}
                          whileHover={{ scale: 1.1, rotate: 2 }}
                          className="px-3 py-1 bg-blue-500/20 rounded-full text-xs border border-blue-500/50
                                   hover:bg-blue-500/30 hover:border-blue-400/60 transition-all cursor-default"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* Metrics */}
                    <div className="space-y-2 mb-6 p-4 bg-white/5 rounded-lg border border-white/10">
                      <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                        <TrendingUp size={14} className="text-blue-400" />
                        <span className="font-medium">Project Impact</span>
                      </div>
                      {project.metrics.map((metric, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center gap-2 text-sm"
                        >
                          <motion.div
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0.5, 1, 0.5]
                            }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                            className="w-2 h-2 bg-green-400 rounded-full shadow-lg shadow-green-400/50"
                          />
                          <span className="text-green-400 font-medium">{metric}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 
                                 bg-gradient-to-r from-blue-500/20 to-purple-500/20 
                                 hover:from-blue-500/30 hover:to-purple-500/30
                                 border border-blue-500/40 hover:border-purple-400/60
                                 rounded-lg transition-all group/btn"
                      >
                        <Github size={16} className="group-hover/btn:rotate-12 transition-transform" />
                        <span className="text-sm font-medium">View Code</span>
                        <ExternalLink size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </motion.a>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 
                                 hover:border-white/20 rounded-lg transition-all group/demo"
                      >
                        <Play size={16} className="text-blue-400 group-hover/demo:text-blue-300 
                                                  group-hover/demo:scale-110 transition-all" />
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 
                                 hover:border-white/20 rounded-lg transition-all group/star"
                      >
                        <Star size={16} className="text-yellow-400 group-hover/star:fill-yellow-400 
                                                  group-hover/star:scale-110 transition-all" />
                      </motion.button>
                    </div>

                    {/* Hover Indicator */}
                    <AnimatePresence>
                      {hoveredProject === project.id && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 
                                   bg-blue-500/20 border border-blue-400/40 rounded-full backdrop-blur-sm"
                        >
                          <Eye size={14} className="text-blue-400" />
                          <span className="text-xs text-blue-400 font-medium">Viewing</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full 
                       bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/10 mb-4"
            >
              <Code className="text-white/40" size={32} />
            </motion.div>
            <p className="text-white/60 text-lg mb-4">No projects found with "{filter}"</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter('all')}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg 
                       text-white font-medium shadow-lg shadow-purple-500/30"
            >
              View All Projects
            </motion.button>
          </motion.div>
        )}

        {/* View More Section */}
        {filteredProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            {/* <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl 
                       text-white font-medium shadow-2xl shadow-purple-500/30 
                       hover:shadow-purple-500/50 transition-all group"
            >
              <span className="flex items-center gap-2">
                View All Projects on GitHub
                <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
            </motion.button> */}
          </motion.div>
        )}
      </div>
    </section>
  );
};