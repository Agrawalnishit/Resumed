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
    },
    {
      title: 'Top 3 in Inter-college Coding Contest',
      description: 'Achieved top 3 position in competitive programming contest',
      icon: Medal,
      color: 'bg-blue-500'
    }
  ];

  return (
    <motion.section
      id="achievements"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="py-20 bg-slate-900"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Achievements</h2>
          <p className="text-xl text-slate-300">Recognition for excellence</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.title}
                className="bg-slate-800 rounded-xl shadow-xl p-8 hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-slate-700"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 ${achievement.color} rounded-full flex items-center justify-center mr-6 shadow-lg`}>
                    <achievement.icon className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{achievement.title}</h3>
                  </div>
                </div>
                <p className="text-slate-300 leading-relaxed">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Achievements;