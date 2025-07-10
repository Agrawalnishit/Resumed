import React from 'react';
import { Brain, Puzzle, Zap, Eye, Users, Shield, Clock, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const SoftSkills = () => {
  const skills = [
    { name: 'Problem Solving', icon: Puzzle, color: 'bg-blue-500' },
    { name: 'Team Collaboration', icon: Users, color: 'bg-green-500' },
    { name: 'Communication', icon: MessageCircle, color: 'bg-purple-500' },
    { name: 'Time Management', icon: Clock, color: 'bg-orange-500' },
    { name: 'Adaptability', icon: Zap, color: 'bg-red-500' },
    { name: 'Accountability', icon: Shield, color: 'bg-indigo-500' },
    { name: 'Analytical Thinking', icon: Brain, color: 'bg-pink-500' }
  ];

  return (
    <motion.section
      id="softskills"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="py-20 bg-slate-800"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Soft Skills</h2>
          <p className="text-xl text-slate-300">Essential qualities for success</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="bg-slate-900 rounded-xl shadow-xl p-6 hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-center border border-slate-700"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-12 h-12 ${skill.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-md`}>
                  <skill.icon className="text-white" size={24} />
                </div>
                <h3 className="text-sm font-semibold text-white">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default SoftSkills;