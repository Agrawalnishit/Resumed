import React from 'react';
import { MapPin, Mail, Phone, Github, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import ProfilePhoto from '../assets/NishitProfilePhoto.jpeg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row-reverse items-center md:items-start text-center md:text-left gap-10">
          {/* Profile Image */}
          <div className="flex-shrink-0 mb-8 md:mb-0 animate-fade-in">
            <div className="w-56 h-56 rounded-full overflow-hidden shadow-2xl border-4 border-blue-500 bg-white flex items-center justify-center">
              <img
                src={ProfilePhoto}
                alt="Nishit Agrawal Profile"
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 space-y-6 animate-slide-up">
            <motion.h1
              className="text-5xl md:text-6xl font-bold text-white leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <span className="block">Nishit Agrawal</span>
              <motion.span
                className="block text-3xl md:text-4xl text-blue-400 mt-2"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 1.5, duration: 1.5, ease: 'easeOut' }}
                style={{ overflow: 'hidden', whiteSpace: 'nowrap', display: 'inline-block' }}
              >
                Full Stack Developer
              </motion.span>
            </motion.h1>

            <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
              Passionate full stack developer with expertise in building scalable and user-centric web applications. 
              Always eager to explore and learn new technologies. Actively seeking a full-time opportunity to innovate and grow.
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-slate-300">
              <div className="flex items-center space-x-2">
                <MapPin size={20} className="text-blue-400" />
                <span>Jaipur, India</span>
              </div>
              <a href="mailto:nishit08agrawal@gmail.com" className="flex items-center space-x-2 hover:text-blue-400 transition-colors">
                <Mail size={20} className="text-blue-400" />
                <span>nishit08agrawal@gmail.com</span>
              </a>
              <a href="tel:8279253678" className="flex items-center space-x-2 hover:text-blue-400 transition-colors">
                <Phone size={20} className="text-blue-400" />
                <span>8279253678</span>
              </a>
              <a href="https://github.com/Agrawalnishit" className="flex items-center space-x-2 hover:text-blue-400 transition-colors">
                <Github size={20} className="text-blue-400" />
                <span>GitHub</span>
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-8">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                View My Work
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('about')}
          className="text-slate-400 hover:text-blue-400 transition-colors"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </motion.section>
  );
};

export default Hero;