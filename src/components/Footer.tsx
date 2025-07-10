import React from 'react';
import { Heart, Github, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white py-12 border-t border-slate-700">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <span className="text-xl font-bold">Nishit Agrawal</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Full Stack Developer passionate about creating innovative solutions and building the future of web technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['Education', 'Skills', 'Projects', 'Certifications', 'Achievements'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.getElementById(item.toLowerCase());
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-slate-300 hover:text-blue-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-slate-400" />
                <span className="text-slate-300">Jaipur, India</span>
              </div>
              <a href="mailto:nishit08agrawal@gmail.com" className="flex items-center space-x-3 text-slate-300 hover:text-blue-400 transition-colors">
                <Mail size={16} />
                <span>nishit08agrawal@gmail.com</span>
              </a>
              <a href="tel:8279253678" className="flex items-center space-x-3 text-slate-300 hover:text-blue-400 transition-colors">
                <Phone size={16} />
                <span>8279253678</span>
              </a>
              <a href="https://github.com/Agrawalnishit" className="flex items-center space-x-3 text-slate-300 hover:text-blue-400 transition-colors">
                <Github size={16} />
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-300 flex items-center justify-center">
            Made with <Heart className="text-red-500 mx-2" size={16} /> by Nishit Agrawal
          </p>
          <button
            onClick={scrollToTop}
            className="mt-4 px-6 py-2 bg-blue-600 rounded-full hover:bg-blue-700 hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;