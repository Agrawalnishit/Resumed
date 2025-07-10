import React from 'react';
import { ExternalLink, Github, ShoppingCart, Pill, Users, Image, Ticket } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'Amazon Clone',
      description: 'Frontend UI of Amazon built with HTML, CSS, and JavaScript. Features responsive design with product cards, header navigation, and cart UI.',
      icon: ShoppingCart,
      color: 'bg-blue-500',
      tech: ['HTML', 'CSS', 'JavaScript'],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Medicine Detector',
      description: 'Search medicine name and location using Streamlit. Features user input for medicine search and geolocation-based store retrieval.',
      icon: Pill,
      color: 'bg-green-500',
      tech: ['Streamlit', 'Python'],
      image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Employee Management System',
      description: 'Console-based employee CRUD system built with Python. Features add, update, and delete employee entries with file-based storage.',
      icon: Users,
      color: 'bg-purple-500',
      tech: ['Python', 'File Handling'],
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Image to Sketch Converter',
      description: 'Upload image and convert to sketch using Gradio and OpenCV. Features intuitive UI for upload and view with OpenCV processing.',
      icon: Image,
      color: 'bg-orange-500',
      tech: ['Gradio', 'OpenCV', 'Python'],
      image: 'https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Movie Booking Ticket System',
      description: 'Console app with SQL backend for ticketing. Features movie listing, seat selection, and booking with login system.',
      icon: Ticket,
      color: 'bg-red-500',
      tech: ['Python', 'SQL'],
      image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="py-20 bg-slate-900"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Projects</h2>
          <p className="text-xl text-slate-300">Building solutions with code</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                whileHover={{ scale: 1.05, boxShadow: '0 8px 24px rgba(0,0,0,0.15)' }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="bg-slate-800 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-slate-700"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-48 bg-slate-700 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 ${project.color} rounded-lg flex items-center justify-center mr-4 shadow-md`}>
                      <project.icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  </div>
                  
                  <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm font-medium border border-blue-600/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <button className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors">
                      <Github size={16} />
                      <span>Code</span>
                    </button>
                    <button className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors">
                      <ExternalLink size={16} />
                      <span>Demo</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;