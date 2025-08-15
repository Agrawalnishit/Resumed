import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Code } from 'lucide-react';

const Experience = () => {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="py-20 bg-slate-900"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Experience</h2>
          <p className="text-xl text-slate-300">Professional journey and hands-on learning</p>
        </div>
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Internshala Internship */}
          <div className="bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-700 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <Briefcase className="text-white" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Python Intern</h3>
                <p className="text-lg text-blue-400 font-semibold mb-2">Internshala</p>
                <div className="flex items-center space-x-2 mb-2">
                  <Calendar className="text-slate-400" size={20} />
                  <span className="text-slate-300">10th July 2024 - 10th August 2024 (1 month, after 1st year)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Code className="text-green-400" size={20} />
                  <span className="text-slate-300">Field: Python</span>
                </div>
              </div>
            </div>
          </div>

          {/* Linux World Internship */}
          <div className="bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-700 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center shadow-lg">
                <Briefcase className="text-white" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">MERN Stack Intern</h3>
                <p className="text-lg text-green-400 font-semibold mb-2">Linux World</p>
                <div className="flex items-center space-x-2 mb-2">
                  <Calendar className="text-slate-400" size={20} />
                  <span className="text-slate-300">15th June 2025 - 15th August 2025 (2 months, after 2nd year)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Code className="text-blue-400" size={20} />
                  <span className="text-slate-300">Field: MERN Stack</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
