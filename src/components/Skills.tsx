import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, GitBranch, Wrench, Palette } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code,
      skills: ['Python', 'HTML', 'CSS', 'JavaScript', 'C', 'SQL'],
      color: 'bg-blue-500'
    },
    {
      title: 'Frontend',
      icon: Palette,
      skills: ['Streamlit', 'Gradio'],
      color: 'bg-purple-500'
    },
    {
      title: 'Backend',
      icon: Database,
      skills: ['JavaScript', 'Flask'],
      color: 'bg-green-500'
    },
    {
      title: 'DevOps',
      icon: Cloud,
      skills: ['Docker', 'Jenkins', 'Git', 'GitHub'],
      color: 'bg-orange-500'
    },
    {
      title: 'Tools',
      icon: Wrench,
      skills: ['LangChain', 'MERN Stack (Learning)'],
      color: 'bg-indigo-500'
    }
  ];

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="py-20 bg-slate-800"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Skills</h2>
          <p className="text-xl text-slate-300">Technologies I work with</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="bg-slate-900 rounded-xl shadow-xl p-6 hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-slate-700"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mr-4 shadow-md`}>
                    <category.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div key={skill} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      <span className="text-slate-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;