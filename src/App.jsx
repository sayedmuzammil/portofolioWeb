import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectList from './components/ProjectList';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProjectList />
    </>
  );
}

export default App;
