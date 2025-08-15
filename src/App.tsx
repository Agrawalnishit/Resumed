import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import SoftSkills from './components/SoftSkills';
import CareerGoals from './components/CareerGoals';
import Interests from './components/Interests';
import Footer from './components/Footer';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <main>
        <Hero />
        <motion.section
          id="about"
          className="py-20 bg-slate-800"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              I'm a passionate full stack developer currently pursuing B.Tech in Artificial Intelligence and Data Science. 
              With a strong foundation in web technologies and a keen interest in problem-solving, I'm dedicated to building 
              innovative solutions that make a difference. I thrive in collaborative environments and am always eager to learn 
              new technologies and take on challenging projects.
            </p>
          </div>
        </motion.section>
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Achievements />
        <SoftSkills />
        <CareerGoals />
        <Interests />
      </main>
      <Footer />
    </div>
  );
}

export default App;