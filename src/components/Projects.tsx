import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  icon: string;
  tech: string[];
  features: string[];
  type: string;
  gradient: string;
  liveUrl?: string;
  githubUrl: string;
}

const Projects = () => {
  const [projectsData, setProjectsData] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load projects from config file
    fetch('/config/projects.json')
      .then(res => res.json())
      .then(data => {
        setProjectsData(data.projects || []);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading projects config:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="py-20 text-center text-gray-400">Loading projects...</div>;
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "AI/ML": return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      case "Full Stack": return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "Backend": return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Backend + DevOps": return "bg-orange-500/20 text-orange-400 border-orange-500/30";
      case "Browser Extension": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      default: return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden min-h-screen">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex items-center justify-center gap-3 mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="text-yellow-400" size={32} />
            <h2 className="text-5xl font-bold text-white">Featured Projects</h2>
          </motion.div>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            A showcase of my technical expertise across full-stack development, AI/ML, and backend systems
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className={`bg-gradient-to-br ${project.gradient} absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/50 backdrop-blur-md overflow-hidden">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-xs text-green-400">Active Project</span>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getTypeColor(project.type)}`}>
                    {project.type}
                  </span>
                </div>

                <p className="text-gray-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-bold text-cyan-400 mb-3">Key Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-bold text-purple-400 mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 5).map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded-lg text-xs border border-gray-600 hover:border-purple-500/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4 border-t border-gray-700/50">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-cyan-500 hover:to-blue-500 text-sm font-semibold flex-1 justify-center"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 border-2 border-gray-600 text-gray-300 px-4 py-2 rounded-lg hover:border-gray-500 hover:bg-gray-800/50 text-sm font-semibold flex-1 justify-center"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
