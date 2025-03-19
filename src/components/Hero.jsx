import React, { useState } from 'react';
import { Link } from 'react-scroll';
import '../styles/Hero.css';
import devImage from '../images/dev.png';

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
        <div className="profile-picture">
        </div>
        <div className="hero-text">
          <h1>
            <span>Shun Mampuya</span>
          </h1>
          <p>
            Etudiant en 2e année de Bachelor Développement Web et Application à Efrei.
          </p>
          <a href="#contact" className="hire-btn" onClick={handlePageTransition}>Contactez-moi !</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;