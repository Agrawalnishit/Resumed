import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, Users, Trophy } from 'lucide-react';

const Education = () => {
  return (
    <motion.section
      id="education"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="py-20 bg-slate-900"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Education</h2>
          <p className="text-xl text-slate-300">Building a strong foundation in technology</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* 10th School */}
          <div className="bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8 border border-slate-700 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                <GraduationCap className="text-white" size={22} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">10th - Ashish Memorial Public Sr. Sec. School</h3>
                <div className="flex flex-wrap gap-4 text-slate-300 text-sm">
                  <span>Year: 2021</span>
                  <span>Percentage: 95%</span>
                </div>
              </div>
            </div>
          </div>

          {/* 12th School */}
          <div className="bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8 border border-slate-700 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                <GraduationCap className="text-white" size={22} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">12th - Sarvodya Bal Vidhya Mandir Sr. Sec. School</h3>
                <div className="flex flex-wrap gap-4 text-slate-300 text-sm">
                  <span>Year: 2023</span>
                  <span>Percentage: 81.40%</span>
                </div>
              </div>
            </div>
          </div>

          {/* College */}
          <div className="bg-slate-800 rounded-2xl shadow-xl p-8 md:p-12 border border-slate-700 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <GraduationCap className="text-white" size={28} />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">
                  B.Tech – Artificial Intelligence and Data Science
                </h3>
                <p className="text-lg text-blue-400 font-semibold mb-4">
                  Jaipur Engineering College and Research Centre (JECRC)
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="flex items-center space-x-2">
                    <Calendar className="text-slate-400" size={20} />
                    <span className="text-slate-300">Expected Graduation: 2027</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="text-slate-400" size={20} />
                    <span className="text-slate-300">CGPA: 8.3</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Achievements</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Trophy className="text-yellow-400" size={20} />
                        <span className="text-slate-300">3rd Rank in college-level coding contest</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Award className="text-blue-400" size={20} />
                        <span className="text-slate-300">Microsoft Azure Certificate</span>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-slate-700">
                    <h4 className="text-lg font-semibold text-white mb-2">Current Project</h4>
                    <p className="text-slate-300">Website Building Platform</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Education;