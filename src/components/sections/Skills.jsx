import React, { useState, useMemo, useEffect } from 'react';
import { Card } from '../ui/Card';
import { SectionTitle } from '../ui/SectionTitle';
import { skillsData } from '../../data/skillsData';
import { motion, AnimatePresence } from "framer-motion";
import { Search, Award, Code, Layers, Zap, TrendingUp, Star, Sparkles } from "lucide-react";

export const Skills = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [viewMode, setViewMode] = useState("cards"); // "cards" or "cloud"
  const [animationKey, setAnimationKey] = useState(0);

  // Skill proficiency mapping (customize based on your expertise)
  const skillProficiency = {
    'Jenkins': 5, 'Docker': 5, 'Kubernetes': 5, 'AWS': 5, 'Terraform': 4,
    'Python': 4, 'Bash': 5, 'Azure': 4, 'Git': 5, 'Linux': 5,
    'Ansible': 4, 'Prometheus': 4, 'Grafana': 4, 'ELK': 4,
  };

  // Featured/Trending skills
  const featuredSkills = ['Kubernetes', 'AWS', 'Docker', 'Terraform', 'Jenkins'];

  // Get all categories including "All"
  const categories = useMemo(() => 
    ["All", ...Object.keys(skillsData)], 
  []);

  // Trigger re-animation when filters change
  useEffect(() => {
    setAnimationKey(prev => prev + 1);
  }, [searchQuery, activeCategory, viewMode]);

  // Filter skills based on search and category
  const getFilteredCategories = () => {
    return Object.entries(skillsData).reduce((acc, [category, data]) => {
      if (activeCategory !== "All" && category !== activeCategory) return acc;
      
      const filteredSkills = data.skills.filter(skill =>
        skill.toLowerCase().includes(searchQuery.toLowerCase())
      );
      
      if (filteredSkills.length > 0) {
        acc.push({ category, icon: data.icon, skills: filteredSkills });
      }
      return acc;
    }, []);
  };

  const filteredCategories = getFilteredCategories();

  // Get all filtered skills for cloud view
  const allFilteredSkills = useMemo(() => {
    return filteredCategories.flatMap(cat => 
      cat.skills.map(skill => ({ skill, category: cat.category, icon: cat.icon }))
    );
  }, [filteredCategories]);

  // Count total skills
  const totalSkills = useMemo(() => {
    return Object.values(skillsData).reduce((acc, data) => acc + data.skills.length, 0);
  }, []);

  // Get skill size for cloud view
  const getSkillSize = (skill) => {
    const proficiency = skillProficiency[skill] || 3;
    return proficiency * 0.2 + 0.8; // Scale between 0.8 and 1.8
  };

  // Get skill color based on proficiency
  const getSkillColor = (skill) => {
    const proficiency = skillProficiency[skill] || 3;
    if (proficiency >= 5) return 'from-yellow-400 to-orange-500';
    if (proficiency >= 4) return 'from-blue-400 to-purple-500';
    return 'from-purple-400 to-pink-500';
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const cloudItemVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  };

  return (
    <section id="skills" className="py-20 px-6 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionTitle>Technical Skills</SectionTitle>
        
        {/* Dynamic Stats Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 p-6 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 
                     border border-white/10 rounded-2xl backdrop-blur-sm relative overflow-hidden"
        >
          {/* Animated gradient overlay */}
          <motion.div
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 opacity-20"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
              backgroundSize: '200% 100%',
            }}
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center justify-center gap-2 mb-1">
                <Code className="text-blue-400" size={20} />
                <motion.p 
                  className="text-2xl font-bold text-white"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {totalSkills}+
                </motion.p>
              </div>
              <p className="text-sm text-white/60">Technical Skills</p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center justify-center gap-2 mb-1">
                <Layers className="text-purple-400" size={20} />
                <motion.p 
                  className="text-2xl font-bold text-white"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {Object.keys(skillsData).length}
                </motion.p>
              </div>
              <p className="text-sm text-white/60">Categories</p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center justify-center gap-2 mb-1">
                <Award className="text-yellow-400" size={20} />
                <motion.p 
                  className="text-2xl font-bold text-white"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  3+
                </motion.p>
              </div>
              <p className="text-sm text-white/60">Years Experience</p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center justify-center gap-2 mb-1">
                <Zap className="text-green-400" size={20} />
                <motion.p 
                  className="text-2xl font-bold text-white"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  100%
                </motion.p>
              </div>
              <p className="text-sm text-white/60">Production Ready</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Search and Controls */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          {/* Search Bar with Animation */}
          <div className="relative mb-6">
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={20} />
            </motion.div>
            <input
              type="text"
              placeholder="Search skills (e.g., Docker, AWS, Python...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl 
                       text-white placeholder-white/40 focus:outline-none focus:border-blue-500/50 
                       focus:bg-white/10 transition-all focus:shadow-lg focus:shadow-blue-500/20"
            />
          </div>

          {/* Controls Row */}
          <div className="flex flex-wrap gap-3 items-center justify-between">
            {/* Category Pills */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all relative overflow-hidden ${
                    activeCategory === category
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-purple-500/30'
                      : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
                  }`}
                >
                  {activeCategory === category && (
                    <motion.div
                      layoutId="activeCategory"
                      className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500"
                      style={{ zIndex: -1 }}
                    />
                  )}
                  {category}
                </motion.button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex gap-2 bg-white/5 rounded-lg p-1 border border-white/10">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setViewMode("cards")}
                className={`px-3 py-1.5 rounded text-sm transition-all ${
                  viewMode === "cards" 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg' 
                    : 'text-white/60'
                }`}
              >
                Cards
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setViewMode("cloud")}
                className={`px-3 py-1.5 rounded text-sm transition-all ${
                  viewMode === "cloud" 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg' 
                    : 'text-white/60'
                }`}
              >
                Cloud
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Featured Skills Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8 overflow-hidden bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 
                     border border-white/10 rounded-xl p-4"
        >
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="text-yellow-400" size={16} />
            <p className="text-sm text-white/70 font-medium">Featured Skills</p>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {featuredSkills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, rotate: 2 }}
                className="flex-shrink-0 px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 
                         border border-yellow-400/40 rounded-lg text-white font-medium text-sm
                         shadow-lg shadow-yellow-500/20 flex items-center gap-2"
              >
                <Star className="text-yellow-400" size={14} fill="currentColor" />
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Display */}
        <AnimatePresence mode="wait">
          {filteredCategories.length > 0 ? (
            viewMode === "cards" ? (
              // Card View
              <motion.div
                key={`cards-${animationKey}`}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredCategories.map(({ category, icon: Icon, skills }) => (
                  <motion.div
                    key={category}
                    variants={itemVariants}
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="h-full hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 
                                   group relative overflow-hidden">
                      {/* Card glow effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 
                                 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 
                                 transition-all duration-500"
                      />
                      
                      {/* Category Header */}
                      <div className="flex items-center gap-3 mb-4 pb-4 border-b border-white/10 relative z-10">
                        <motion.div 
                          className="p-2.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg"
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Icon size={22} className="text-white" />
                        </motion.div>
                        <div>
                          <h3 className="text-lg font-semibold text-white">{category}</h3>
                          <p className="text-xs text-white/50 flex items-center gap-1">
                            <TrendingUp size={12} />
                            {skills.length} skills
                          </p>
                        </div>
                      </div>

                      {/* Skills List */}
                      <div className="flex flex-wrap gap-2 relative z-10">
                        {skills.map((skill, skillIndex) => {
                          const proficiency = skillProficiency[skill] || 3;
                          return (
                            <motion.span
                              key={skill}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: skillIndex * 0.03 }}
                              whileHover={{ scale: 1.1, y: -2 }}
                              onHoverStart={() => setHoveredSkill(skill)}
                              onHoverEnd={() => setHoveredSkill(null)}
                              className={`px-3 py-1.5 rounded-full text-sm text-white/90
                                       border transition-all duration-200 cursor-default relative
                                       ${hoveredSkill === skill 
                                         ? 'bg-gradient-to-r from-blue-500/40 to-purple-500/40 border-purple-400/60 shadow-lg shadow-purple-500/30' 
                                         : 'bg-white/10 border-white/20 hover:border-purple-400/40'
                                       }`}
                            >
                              {skill}
                              {proficiency >= 5 && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="absolute -top-1 -right-1"
                                >
                                  <Star className="text-yellow-400" size={10} fill="currentColor" />
                                </motion.div>
                              )}
                            </motion.span>
                          );
                        })}
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              // Cloud View
              <motion.div
                key={`cloud-${animationKey}`}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="min-h-[400px] p-8 bg-white/5 border border-white/10 rounded-2xl 
                         flex flex-wrap items-center justify-center gap-4"
              >
                {allFilteredSkills.map(({ skill, category }, index) => {
                  const scale = getSkillSize(skill);
                  const colorClass = getSkillColor(skill);
                  return (
                    <motion.div
                      key={`${category}-${skill}`}
                      variants={cloudItemVariants}
                      whileHover={{ scale: scale * 1.3, rotate: 5 }}
                      onHoverStart={() => setHoveredSkill(skill)}
                      onHoverEnd={() => setHoveredSkill(null)}
                      style={{ 
                        fontSize: `${scale}rem`,
                      }}
                      className="cursor-default relative"
                    >
                      <span className={`font-semibold bg-gradient-to-r ${colorClass} bg-clip-text text-transparent
                                      ${hoveredSkill === skill ? 'drop-shadow-lg' : ''} transition-all`}>
                        {skill}
                      </span>
                      {skillProficiency[skill] >= 5 && (
                        <Star className="absolute -top-1 -right-1 text-yellow-400" size={12} fill="currentColor" />
                      )}
                    </motion.div>
                  );
                })}
              </motion.div>
            )
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-16"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-full 
                          bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/10 mb-4"
              >
                <Search className="text-white/40" size={32} />
              </motion.div>
              <p className="text-white/60 text-lg mb-4">No skills found matching "{searchQuery}"</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                }}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 
                         hover:to-purple-600 text-white rounded-lg transition-all text-sm font-medium
                         shadow-lg shadow-purple-500/30"
              >
                Clear Search
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Skills Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 p-6 bg-gradient-to-r from-white/5 to-white/10 border border-white/10 
                     rounded-2xl backdrop-blur-sm"
        >
          <div className="flex items-center gap-2 mb-4">
            <Layers className="text-purple-400" size={20} />
            <h4 className="text-sm font-semibold text-white">Technology Stack Highlights</h4>
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <motion.div
              whileHover={{ scale: 1.05, x: 5 }}
              className="flex items-start gap-3"
            >
              <div className="p-2 bg-blue-500/20 rounded-lg border border-blue-400/30">
                <Code className="text-blue-400" size={16} />
              </div>
              <div>
                <p className="text-white/60 mb-1">Cloud Platforms</p>
                <p className="text-white font-medium">AWS, Azure, Multi-Cloud</p>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, x: 5 }}
              className="flex items-start gap-3"
            >
              <div className="p-2 bg-purple-500/20 rounded-lg border border-purple-400/30">
                <Layers className="text-purple-400" size={16} />
              </div>
              <div>
                <p className="text-white/60 mb-1">Container Orchestration</p>
                <p className="text-white font-medium">Kubernetes, Docker, ECS/ACR</p>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, x: 5 }}
              className="flex items-start gap-3"
            >
              <div className="p-2 bg-pink-500/20 rounded-lg border border-pink-400/30">
                <Zap className="text-pink-400" size={16} />
              </div>
              <div>
                <p className="text-white/60 mb-1">CI/CD & Automation</p>
                <p className="text-white font-medium">Jenkins, GitLab, Terraform</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};