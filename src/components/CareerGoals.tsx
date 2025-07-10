import React from 'react';
import { Target, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const CareerGoals = () => {
  return (
    <motion.section
      id="careergoals"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="py-20 bg-slate-900"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Career Goals</h2>
          <p className="text-xl text-slate-300">My vision for professional growth</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800 rounded-xl shadow-xl p-8 border border-slate-700 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-start space-x-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                <Target className="text-white" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Professional Aspirations</h3>
                <p className="text-slate-300 leading-relaxed text-lg">
                  To contribute to impactful web projects using my full-stack development skills and grow as a collaborative developer while staying aligned with modern technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default CareerGoals;