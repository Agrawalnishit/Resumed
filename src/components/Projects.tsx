import React from 'react';
import { ExternalLink, Github, ShoppingCart, Pill, Users, Image, Ticket, Home, Settings, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'AI Warrior Chatbot',
      description: 'A Streamlit-based AI chatbot that uses OpenAI and Gemini models to answer user questions, display chat history, and show animated typing effects. Integrates web scraping, custom system prompts, and interactive UI for a modern conversational experience.',
      icon: Users,
      color: 'bg-cyan-500',
      tech: ['Python', 'Streamlit', 'OpenAI', 'BeautifulSoup', 'Web Scraping', 'Chatbot'],
      image: 'https://images.pexels.com/photos/110854/pexels-photo-110854.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'House Pricing Determination',
      description: 'Machine Learning model to predict house prices based on various features like location, size, amenities, and market trends. Features data analysis, model training, and price prediction interface.',
      icon: Home,
      color: 'bg-emerald-500',
      tech: ['Python', 'Machine Learning', 'Pandas', 'Scikit-learn', 'Streamlit'],
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Automation Control Panel',
      description: 'A Streamlit web app for managing and monitoring scheduled automation tasks. Start/stop scheduled jobs, run manual tasks, and view real-time logs. Built with Python, Streamlit, and integrates with schedulers like APScheduler. Simplifies automation with a clean web interface.',
      icon: Settings,
      color: 'bg-indigo-500',
      tech: ['Python', 'Streamlit', 'APScheduler', 'Web UI'],
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
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
    },
    {
      title: 'Email Sender',
      description: 'A Python script to send emails programmatically using the built-in smtplib library. Automates email notifications, alerts, and reports with customizable content and recipients.',
      icon: Mail,
      color: 'bg-yellow-500',
      tech: ['Python', 'smtplib', 'Automation'],
      image: 'https://images.pexels.com/photos/261628/pexels-photo-261628.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'SMS Sender',
      description: 'A Python automation script that sends SMS messages using the Twilio API. Supports instant and scheduled SMS delivery for notifications, alerts, and reminders.',
      icon: Phone,
      color: 'bg-pink-500',
      tech: ['Python', 'Twilio', 'API', 'Automation'],
      image: 'https://images.pexels.com/photos/276514/pexels-photo-276514.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'WhatsApp Message Sender',
      description: 'A Python automation script that sends WhatsApp messages instantly using the pywhatkit library. Integrates with pyautogui for automated message sending and supports scheduling or instant delivery. Simplifies WhatsApp communication for reminders, alerts, and more.',
      icon: ExternalLink,
      color: 'bg-green-500',
      tech: ['Python', 'pywhatkit', 'pyautogui', 'Automation'],
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Phone Call Automation',
      description: 'A Python automation script that makes phone calls using the Twilio API. Enables automated voice call notifications, reminders, and alerts with customizable messages.',
      icon: Phone,
      color: 'bg-blue-500',
      tech: ['Python', 'Twilio', 'API', 'Automation'],
      image: 'https://images.pexels.com/photos/33999/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
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