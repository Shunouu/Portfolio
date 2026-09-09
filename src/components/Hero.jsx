import React, { useState } from 'react';
import '../styles/Hero.css';

function Hero() {
  const [fadeOut, setFadeOut] = useState(false);

  const handlePageTransition = () => {
    setFadeOut(true);
    setTimeout(() => {
      setFadeOut(false);
    }, 500);
  };

  return (
    <section id="hero" className={`hero ${fadeOut ? 'fade-out' : ''}`}>
      <div className="hero-content">
        <div className="profile-picture" />
        <div className="hero-text">
          <h1>
            <span>Shun Mampuya</span>
          </h1>
          <p className="hero-description">
            Étudiant en 4<sup>e</sup> année à l&apos;EFREI Paris, en première année de Mastère Développeur Full-Stack.
            À la recherche d&apos;une alternance pour l&apos;année 2026-2027.
          </p>
          <a href="#contact" className="hire-btn" onClick={handlePageTransition}>
            Contactez-moi !
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
