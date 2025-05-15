import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectList from './components/ProjectList';
import Skills from './components/Skills';
import Footer from './components/Footer';
import { motion } from 'motion/react';

function App() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 10 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.4 }}
      >
        <Navbar />
        <Hero />
        <Skills />
        <ProjectList />
        <Footer />
      </motion.div>
    </>
  );
}

export default App;
