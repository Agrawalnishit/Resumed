import React from 'react';
import { Award, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Certifications = () => {
  const certifications = [
    {
      title: 'MERN Stack',
      issuer: 'Linux World',
      color: 'bg-green-500'
    },
    {
      title: 'Python Programming',
      issuer: 'Internshala',
      color: 'bg-blue-500'
    },
    {
      title: 'Microsoft Azure Certificate',
      issuer: 'Microsoft',
      color: 'bg-purple-500'
    }
  ];

  return (
    <motion.section
      id="certifications"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="py-20 bg-slate-800"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Certifications</h2>
          <p className="text-xl text-slate-300">Continuous learning and growth</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={cert.title}
                className="bg-slate-900 rounded-xl shadow-xl p-6 hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-slate-700"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  <div className={`w-16 h-16 ${cert.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <Award className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                  <p className="text-slate-300 mb-4">{cert.issuer}</p>
                  <div className="flex items-center justify-center">
                    <CheckCircle className="text-green-400 mr-2" size={20} />
                    <span className="text-green-400 font-semibold">Certified</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Certifications;