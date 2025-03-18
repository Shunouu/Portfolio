import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/skills';
import Experience from './components/experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
      <section id="about" data-aos="fade-up">
        <About />
      </section>
      <section id="skills" data-aos="fade-up">
        <Skills />
      </section>
      <section id="experience" data-aos="fade-up">
        <Experience />
      </section>
      <section id="projects" data-aos="fade-up">
        <Projects />
      </section>
      <section id="contact" data-aos="fade-up">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;