import React from 'react';
import { Trophy, Medal } from 'lucide-react';
import { motion } from 'framer-motion';

const Achievements = () => {
  const achievements = [
    {
      title: '3rd in C Programming Test',
      description: 'Secured 3rd position in college-wide C Programming test among all students',
      icon: Trophy,
      color: 'bg-yellow-500'
    }
  ];

  return (
    <motion.section
      id="achievements"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="py-20 bg-slate-900"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Achievements</h2>
          <p className="text-xl text-slate-300">Recognition for excellence</p>
        </div>

        <div className="max-w-2xl mx-auto flex flex-col items-center">
          {achievements.map((achievement) => (
            <div
              key={achievement.title}
              className="bg-slate-800 rounded-xl shadow-xl p-8 mb-8 w-full flex flex-col items-center border border-slate-700"
            >
              <div className="flex flex-col items-center mb-4">
                <div className={`w-16 h-16 ${achievement.color} rounded-full flex items-center justify-center mb-4 shadow-lg`}>
                  <achievement.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 text-center">{achievement.title}</h3>
              </div>
              <p className="text-slate-300 text-lg text-center leading-relaxed">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Achievements;