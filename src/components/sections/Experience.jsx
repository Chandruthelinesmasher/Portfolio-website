import React, { useState } from 'react';
import { Briefcase, Award, GraduationCap, Calendar, MapPin, TrendingUp, CheckCircle, ExternalLink, Sparkles, Target, Users, Zap } from 'lucide-react';
import { Card } from '../ui/Card';
import { SectionTitle } from '../ui/SectionTitle';
import { motion, AnimatePresence } from 'framer-motion';

// ==========================
// Experience Data
// ==========================
const experienceData = [
  {
    id: 1,
    role: 'DevOps Engineer',
    company: 'HCLTech',
    location: 'Madurai, India',
    period: 'July 2022 – Present',
    duration: '2+ years',
    type: 'Full-time',
    achievements: [
      'Designed and implemented end-to-end CI/CD pipelines using Azure DevOps (YAML & Classic), Jenkins, and GitHub Actions for .NET, Java, and Node.js applications — reducing release cycles from weekly to daily.',
      'Automated infrastructure provisioning with Terraform and ARM templates for AKS, App Services, and Azure Storage, enabling consistent, version-controlled deployments.',
      'Managed Azure Kubernetes Service (AKS) clusters, implemented autoscaling (HPA), and deployed Dockerized microservices via Azure Container Registry (ACR).',
      'Developed Helm charts to standardize configuration management across Dev, QA, and Production environments, improving deployment consistency by 40%.',
      'Configured Azure Repos with branch policies and integrated SonarQube and Trivy in pipelines to enforce code quality and security standards, achieving 35% higher compliance.',
      'Set up Azure Monitor, Log Analytics, and Application Insights dashboards for proactive monitoring, improving performance visibility and reducing downtime by 40%.',
      'Containerized legacy monolithic applications into Docker-based microservices, reducing infrastructure costs and resource utilization by 25%.',
      'Collaborated cross-functionally with development and infrastructure teams to troubleshoot build and deployment issues, driving 99.9% uptime and reducing deployment failures by 60%.',
    ],
    highlights: [
      { icon: TrendingUp, text: '60% fewer deployment failures', color: 'text-green-400' },
      { icon: Zap, text: '40% improved consistency', color: 'text-blue-400' },
      { icon: Target, text: '99.9% uptime achieved', color: 'text-purple-400' },
    ],
    tags: ['Azure DevOps', 'Kubernetes', 'Terraform', 'CI/CD', 'Docker'],
  },
  {
    id: 2,
    role: 'TechBee Trainee',
    company: 'HCLTech',
    location: 'Madurai, India',
    period: 'July 2021 – July 2022',
    duration: '1 year',
    type: 'Training Program',
    achievements: [
      "Completed one-year intensive training in Cloud and DevOps fundamentals as part of HCLTech's TechBee program.",
      'Gained hands-on experience with Microsoft Azure and AWS core services including Compute, Storage, Networking, and IAM.',
      'Developed foundational skills in Linux system administration, Bash scripting, and automation workflows.',
      'Learned programming fundamentals using Python for automation and data handling.',
      'Worked with Git for version control and Docker for containerization of applications.',
      'Collaborated in lab-based projects simulating real-world DevOps environments, reinforcing CI/CD and cloud deployment concepts.',
    ],
    highlights: [
      { icon: GraduationCap, text: 'Intensive training program', color: 'text-yellow-400' },
      { icon: Users, text: 'Team collaboration', color: 'text-blue-400' },
      { icon: Sparkles, text: 'Hands-on projects', color: 'text-purple-400' },
    ],
    tags: ['Azure', 'AWS', 'Linux', 'Python', 'Docker'],
  },
];

// ==========================
// Certifications Data
// ==========================
export const certificationsData = [
  {
    name: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    icon: '☁️',
    color: 'from-orange-500 to-yellow-500',
    link: 'https://www.linkedin.com/posts/chandru-k-cloud-20-conqueror03_aws-cloudcomputing-awscertified-activity-7256139346573942785-f4Mq',
  },
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    icon: '☁️',
    color: 'from-orange-400 to-yellow-400',
    link: 'https://www.linkedin.com/posts/chandru-k-cloud-20-conqueror03_im-excited-to-announce-my-aws-cloud-practioner-activity-7129371155634782210-GQeZ',
  },
  {
    name: 'Microsoft Certified: Azure Administrator Associate',
    issuer: 'Microsoft',
    icon: '🔷',
    color: 'from-blue-500 to-cyan-500',
    link: 'https://www.linkedin.com/posts/chandru-k-cloud-20-conqueror03_cloud-microsoftcertified-activity-7076547224935043072-QF6g',
  },
  {
    name: 'Microsoft Certified: Azure Network Engineer Associate',
    issuer: 'Microsoft',
    icon: '🌐',
    color: 'from-blue-600 to-purple-500',
    link: 'https://www.linkedin.com/posts/chandru-k-cloud-20-conqueror03_hi-connections-im-glad-to-share-with-activity-7086720826141540352-6aYF',
  },
  {
    name: 'Microsoft Certified: Azure DevOps Engineer Expert',
    issuer: 'Microsoft',
    icon: '⚙️',
    color: 'from-purple-500 to-pink-500',
    link: 'https://www.linkedin.com/posts/chandru-k-cloud-20-conqueror03_hi-connections-i-am-excited-to-share-with-activity-7162070163553464320-XLao',
  },
  {
    name: 'GitHub Actions Certified',
    issuer: 'GitHub',
    icon: '🐙',
    color: 'from-gray-700 to-gray-900',
    link: 'https://www.linkedin.com/posts/chandru-k-cloud-20-conqueror03_githubactions-certification-continuousintegration-activity-7222942368377843713-3fQC',
  },
];

// ==========================
// Experience Component
// ==========================
export const Experience = () => {
  const [expandedJob, setExpandedJob] = useState(experienceData[0].id);
  const [hoveredCert, setHoveredCert] = useState(null);

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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="experience" className="py-20 px-6 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 45, 0],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [45, 0, 45],
            opacity: [0.15, 0.1, 0.15],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <SectionTitle>Work Experience</SectionTitle>

        {/* Experience Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 grid grid-cols-3 gap-4"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="p-4 bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20 
                     rounded-xl text-center backdrop-blur-sm"
          >
            <p className="text-3xl font-bold text-blue-400 mb-1">3+</p>
            <p className="text-xs text-gray-400">Years Experience</p>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="p-4 bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20 
                     rounded-xl text-center backdrop-blur-sm"
          >
            <p className="text-3xl font-bold text-purple-400 mb-1">{experienceData.length}</p>
            <p className="text-xs text-gray-400">Positions</p>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="p-4 bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20 
                     rounded-xl text-center backdrop-blur-sm"
          >
            <p className="text-3xl font-bold text-green-400 mb-1">{certificationsData.length}</p>
            <p className="text-xs text-gray-400">Certifications</p>
          </motion.div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {experienceData.map((job, index) => (
              <motion.div
                key={job.id}
                variants={itemVariants}
                className="relative"
              >
                {/* Timeline Dot */}
                <motion.div
                  animate={{
                    scale: expandedJob === job.id ? [1, 1.3, 1] : 1,
                    boxShadow: expandedJob === job.id 
                      ? ['0 0 0 0 rgba(59, 130, 246, 0.4)', '0 0 0 10px rgba(59, 130, 246, 0)', '0 0 0 0 rgba(59, 130, 246, 0)']
                      : 'none'
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="absolute left-6 top-6 w-5 h-5 bg-blue-500 rounded-full border-4 border-slate-900 z-10"
                />

                <div className="ml-20">
                  <Card className="group hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300">
                    {/* Header */}
                    <motion.button
                      onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                      className="w-full text-left"
                      whileHover={{ x: 5 }}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-start gap-4 flex-1">
                          <motion.div
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                            className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl 
                                     shadow-lg group-hover:shadow-purple-500/50 transition-all"
                          >
                            <Briefcase size={24} className="text-white" />
                          </motion.div>
                          
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold mb-1 group-hover:text-transparent 
                                         group-hover:bg-clip-text group-hover:bg-gradient-to-r 
                                         group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
                              {job.role}
                            </h3>
                            <p className="text-purple-400 font-semibold text-lg">{job.company}</p>
                            
                            <div className="flex flex-wrap gap-3 mt-2 text-sm text-gray-400">
                              <span className="flex items-center gap-1">
                                <Calendar size={14} />
                                {job.period}
                              </span>
                              <span className="flex items-center gap-1">
                                <MapPin size={14} />
                                {job.location}
                              </span>
                              <span className="px-2 py-0.5 bg-blue-500/20 border border-blue-500/40 rounded-full text-blue-400">
                                {job.type}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Expand Indicator */}
                        <motion.div
                          animate={{ rotate: expandedJob === job.id ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-gray-400"
                        >
                          ▼
                        </motion.div>
                      </div>
                    </motion.button>

                    {/* Key Highlights */}
                    <div className="flex flex-wrap gap-3 mb-4">
                      {job.highlights.map((highlight, i) => {
                        const Icon = highlight.icon;
                        return (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 + i * 0.1 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 
                                     rounded-lg hover:border-white/20 transition-all"
                          >
                            <Icon size={16} className={highlight.color} />
                            <span className="text-sm text-gray-300">{highlight.text}</span>
                          </motion.div>
                        );
                      })}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.tags.map((tag, i) => (
                        <motion.span
                          key={tag}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.05 }}
                          whileHover={{ scale: 1.1, rotate: 2 }}
                          className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 
                                   border border-blue-500/40 rounded-full text-xs font-medium text-blue-300
                                   hover:border-purple-400/60 transition-all cursor-default"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    {/* Expandable Achievements */}
                    <AnimatePresence>
                      {expandedJob === job.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 border-t border-white/10">
                            <h4 className="text-sm font-semibold text-gray-400 mb-3 flex items-center gap-2">
                              <Target size={16} className="text-green-400" />
                              Key Achievements
                            </h4>
                            <ul className="space-y-3">
                              {job.achievements.map((achievement, i) => (
                                <motion.li
                                  key={i}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.05 }}
                                  className="flex items-start gap-3 text-gray-300 group/item hover:text-white transition-colors"
                                >
                                  <CheckCircle size={16} className="text-green-400 mt-1 flex-shrink-0 
                                                                   group-hover/item:scale-110 transition-transform" />
                                  <span className="text-sm">{achievement}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Card>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16"
        >
          <Card className="relative overflow-hidden">
            {/* Animated background glow */}
            <motion.div
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 opacity-10"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(234, 179, 8, 0.3), transparent)',
                backgroundSize: '200% 100%',
              }}
            />

            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="p-3 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl shadow-lg shadow-yellow-500/50"
                  >
                    <Award size={28} className="text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 
                                 bg-clip-text text-transparent">
                      Certifications
                    </h3>
                    <p className="text-sm text-gray-400 mt-1">Industry-recognized credentials</p>
                  </div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-yellow-500/20 border border-yellow-500/40 rounded-lg"
                >
                  <p className="text-yellow-400 font-semibold">{certificationsData.length} Active</p>
                </motion.div>
              </div>

              {/* Certifications Grid */}
              <div className="grid md:grid-cols-2 gap-4">
                {certificationsData.map((cert, idx) => (
                  <motion.a
                    key={idx}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ scale: 1.03, y: -5 }}
                    onHoverStart={() => setHoveredCert(idx)}
                    onHoverEnd={() => setHoveredCert(null)}
                    className="group relative p-4 bg-white/5 hover:bg-white/10 border border-white/10 
                             hover:border-white/20 rounded-xl transition-all cursor-pointer"
                  >
                    {/* Gradient overlay on hover */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${cert.color} opacity-0 
                               group-hover:opacity-10 rounded-xl transition-opacity duration-300`}
                    />

                    <div className="relative z-10 flex items-start gap-3">
                      <motion.div
                        animate={hoveredCert === idx ? {
                          rotate: [0, -10, 10, -10, 0],
                          scale: [1, 1.2, 1]
                        } : {}}
                        transition={{ duration: 0.5 }}
                        className="text-3xl"
                      >
                        {cert.icon}
                      </motion.div>
                      
                      <div className="flex-1">
                        <p className="font-semibold text-white group-hover:text-transparent 
                                    group-hover:bg-clip-text group-hover:bg-gradient-to-r 
                                    group-hover:from-blue-400 group-hover:to-purple-400 transition-all mb-1">
                          {cert.name}
                        </p>
                        <p className="text-xs text-gray-500 mb-2">{cert.issuer}</p>
                        
                        <div className="flex items-center gap-2 text-xs text-blue-400 
                                      group-hover:text-blue-300 transition-colors">
                          <span>View Certificate</span>
                          <ExternalLink size={12} className="group-hover:translate-x-1 
                                                           group-hover:-translate-y-1 transition-transform" />
                        </div>
                      </div>

                      <motion.div
                        animate={hoveredCert === idx ? { scale: 1 } : { scale: 0 }}
                        className="absolute top-2 right-2"
                      >
                        <Sparkles size={16} className="text-yellow-400" />
                      </motion.div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};