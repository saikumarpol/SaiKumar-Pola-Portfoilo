import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education'; // ✅ Importing Education
import Skills from './components/Skills';
import Projects from './components/Projects';
import AchievementsDrawer from './components/AchievementsDrawer';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <>
      <Navbar />

      {/* Home Section */}
      <section id="home">
        <HomePage />
      </section>

      {/* Work Experience Section */}
      <section id="workexperience">
        <WorkExperience />
      </section>

      {/* Education Section */}
      <section id="education">
        <Education />
      </section>

      {/* Skills Section */}
      <section id="skills">
        <Skills />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <Projects />
      </section>

      {/* Achievements / About Section */}
      <section id="about">
        <AchievementsDrawer />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
