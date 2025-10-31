import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, Code2 } from 'lucide-react';
import { Grid3DBackground } from '../components/Grid3D';
import { Typewriter } from '../components/Typewriter';
import { HERO_CONTENT, SKILLS, PROJECTS } from '../data/portfolio';

export const Home = () => {
  const stats = [
    { label: 'Years Experience', value: '1+' },
    { label: 'Cloud Platforms', value: '3' },
    { label: 'Projects Completed', value: '10+' },
    { label: 'Technologies', value: '19+' },
  ];

  const featuredSkills = SKILLS.slice(0, 6);

  return (
    <div className="min-h-screen bg-bg-page relative overflow-hidden">
      {/* 3D Grid Background */}
      <Grid3DBackground />
      
      {/* Main Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Terminal prompt */}
            <div className="font-mono text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide">
              <span className="text-accent-500 mr-3">$</span>
              <span className="text-primary-500">whoami</span>
            </div>

            {/* Typewriter heading */}
            <div className="font-mono text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight text-primary-500">
              <Typewriter text="DevOps & Cloud Engineer" delay={80} />
              <span className="terminal-cursor ml-2" />
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="text-xl md:text-2xl text-neutral-200 max-w-4xl mx-auto leading-relaxed"
            >
              {HERO_CONTENT}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
            >
              <Link
                to="/projects"
                className="group inline-flex items-center px-8 py-4 border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-bg-surface transition-all duration-200 font-semibold tracking-wide rounded-lg shadow-glow hover:shadow-card-hover"
              >
                <Code2 className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                View Projects
              </Link>
              <Link
                to="/contact"
                className="group inline-flex items-center px-8 py-4 border-2 border-neutral-600 bg-neutral-800 text-neutral-200 hover:border-primary-500 hover:text-primary-500 transition-all duration-200 font-semibold tracking-wide rounded-lg"
              >
                <ExternalLink className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Contact Me
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 relative z-10 bg-bg-surface/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-bg-elevated border border-neutral-700 p-6 rounded-lg shadow-card hover:shadow-card-hover transition-all duration-300 hover:border-primary-500/50">
                  <div className="font-mono text-3xl md:text-4xl font-bold text-primary-500 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-neutral-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Skills Section */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-mono text-3xl md:text-4xl font-bold text-primary-500 mb-4">
              Featured Technologies
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              A curated selection of the technologies I work with daily to build and deploy scalable systems
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          >
            {featuredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-bg-elevated border border-neutral-700 p-4 rounded-lg text-center hover:border-primary-500/50 transition-all duration-300 group"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-8 h-8 mx-auto mb-3 filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity"
                />
                <div className="font-mono text-sm text-neutral-200 font-medium">
                  {skill.name}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/skills"
              className="inline-flex items-center text-primary-500 hover:text-primary-400 font-mono font-semibold group"
            >
              <span className="mr-2">View all skills</span>
              <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative z-10 bg-gradient-to-b from-transparent to-bg-elevated/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-bg-elevated border border-primary-500/20 p-12 rounded-2xl shadow-glow"
          >
            <h2 className="font-mono text-3xl md:text-4xl font-bold text-primary-500 mb-6">
              Ready to Deploy Your Vision?
            </h2>
            <p className="text-xl text-neutral-200 mb-8 leading-relaxed">
              Let's build something amazing together. From infrastructure automation to full-stack development, 
              I'm here to turn your ideas into production reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-500 text-bg-surface font-semibold rounded-lg hover:bg-primary-700 transition-all duration-200 shadow-glow hover:shadow-card-hover"
              >
                Start a Project
              </Link>
              <a
                href="https://github.com/neerajnakka"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-neutral-600 text-neutral-200 hover:border-primary-500 hover:text-primary-500 font-semibold rounded-lg transition-all duration-200"
              >
                <Github className="mr-2 h-5 w-5" />
                View Code
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
