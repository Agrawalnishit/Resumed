import React, { useState, useEffect } from 'react';
import { MapPin, Mail, Phone, Github, ArrowDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ProfilePhoto from '../assets/NishitProfilePhoto.jpeg';

const Hero = () => {
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Show details after 2.5 seconds
    const timer = setTimeout(() => {
      setShowDetails(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`max-w-4xl mx-auto flex flex-col md:flex-row-reverse items-center md:items-center text-center md:text-left gap-10`}>
          {/* Profile Image - Right side on desktop, above on mobile */}
          <motion.div
            initial={{ 
              scale: 0.8,
              opacity: 0,
              x: 0,
              y: 0
            }}
            animate={{ 
              scale: 1,
              opacity: 1,
              x: 0,
              y: 0
            }}
            transition={{ 
              type: "spring", 
              stiffness: 100, 
              damping: 15,
              duration: 1.5 
            }}
            className="flex-shrink-0 mb-8 md:mb-0 transition-all duration-1000 relative"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-56 h-56 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-blue-500 bg-white flex items-center justify-center relative md:ml-16"
            >
              <img
                src={ProfilePhoto}
                alt="Nishit Agrawal Profile"
                className="object-cover w-full h-full"
                loading="lazy"
              />
              {/* Glowing effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          </motion.div>

          {/* Main Content with staged reveal */}
          <AnimatePresence>
            {showDetails && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  ease: "easeOut",
                  staggerChildren: 0.1
                }}
                className="flex-1 space-y-6"
              >
                {/* Name with typewriter effect */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-5xl md:text-6xl font-bold text-white leading-tight"
                >
              <span className="block">Nishit Agrawal</span>
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 0.8, duration: 1.2, ease: 'easeOut' }}
                    className="block text-3xl md:text-4xl text-blue-400 mt-2 overflow-hidden whitespace-nowrap"
                  >
                Full Stack Developer
                  </motion.span>
                </motion.h1>

                {/* Bio */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-xl text-slate-300 max-w-2xl leading-relaxed"
                >
              Passionate full stack developer with expertise in building scalable and user-centric web applications. 
              Always eager to explore and learn new technologies. Actively seeking a full-time opportunity to innovate and grow.
                </motion.p>

            {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="flex flex-wrap justify-center md:justify-start gap-6 text-slate-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-2"
                  >
                <MapPin size={20} className="text-blue-400" />
                <span>Jaipur, India</span>
                  </motion.div>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href="mailto:nishit08agrawal@gmail.com"
                    className="flex items-center space-x-2 hover:text-blue-400 transition-colors"
                  >
                <Mail size={20} className="text-blue-400" />
                <span>nishit08agrawal@gmail.com</span>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href="tel:8279253678"
                    className="flex items-center space-x-2 hover:text-blue-400 transition-colors"
                  >
                <Phone size={20} className="text-blue-400" />
                <span>8279253678</span>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href="https://github.com/Agrawalnishit"
                    className="flex items-center space-x-2 hover:text-blue-400 transition-colors"
                  >
                <Github size={20} className="text-blue-400" />
                <span>GitHub</span>
                  </motion.a>
                </motion.div>

            {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-8"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('projects')}
                    className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 hover:shadow-lg transition-all duration-200 shadow-lg"
              >
                View My Work
                  </motion.button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Scroll indicator - only show after details are revealed */}
      <AnimatePresence>
        {showDetails && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
          onClick={() => scrollToSection('about')}
          className="text-slate-400 hover:text-blue-400 transition-colors"
        >
          <ArrowDown size={24} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Hero;