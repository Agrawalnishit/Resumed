import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Mail, Phone, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-700' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <span className="text-xl font-bold text-white">Nishit Agrawal</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['about', 'education', 'skills', 'projects', 'certifications', 'achievements'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-slate-300 hover:text-blue-400 transition-colors duration-200 capitalize font-medium"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="mailto:nishit08agrawal@gmail.com" className="text-slate-400 hover:text-blue-400 transition-colors">
              <Mail size={20} />
            </a>
            <a href="tel:8279253678" className="text-slate-400 hover:text-blue-400 transition-colors">
              <Phone size={20} />
            </a>
            <a href="https://github.com/Agrawalnishit" className="text-slate-400 hover:text-blue-400 transition-colors">
              <Github size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-slate-300 hover:text-blue-400 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 bg-slate-800 rounded-lg shadow-lg border border-slate-700">
            {['about', 'education', 'skills', 'projects', 'certifications', 'achievements'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left px-4 py-2 text-slate-300 hover:bg-slate-700 hover:text-blue-400 transition-colors capitalize"
              >
                {item}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;