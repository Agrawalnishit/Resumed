import React from 'react';
import { Music, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const Interests = () => {
  const interests = [
    {
      title: 'Listening to Music',
      description: 'Finding inspiration and relaxation through various genres of music',
      icon: Music,
      color: 'bg-pink-500'
    },
    {
      title: 'Learning New Technologies',
      description: 'Constantly exploring emerging technologies and working on innovative projects',
      icon: Code,
      color: 'bg-blue-500'
    }
  ];

  return (
    <motion.section
      id="interests"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="py-20 bg-slate-800"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Interests</h2>
          <p className="text-xl text-slate-300">What drives my passion</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {interests.map((interest, index) => (
              <div
                key={interest.title}
                className="bg-slate-900 rounded-xl shadow-xl p-8 hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-center border border-slate-700"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 ${interest.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                  <interest.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{interest.title}</h3>
                <p className="text-slate-300 leading-relaxed">{interest.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Interests;