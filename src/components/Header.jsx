import React, { useState } from 'react';
import { Link } from 'react-scroll';
import '../styles/Header.css';
import { FaEnvelope } from 'react-icons/fa';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <Link to="hero" className="logo-link" smooth={true} duration={500} offset={-70} onClick={closeMenu}>
            <span className="logo-text">SM</span>
          </Link>
        </div>
        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <Link to="hero" smooth={true} duration={500} offset={-70} onClick={closeMenu}>
              Accueil
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500} offset={-70} onClick={closeMenu}>
              À propos
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500} offset={-70} onClick={closeMenu}>
              Compétences
            </Link>
          </li>
          <li>
            <Link to="experience" smooth={true} duration={500} offset={-70} onClick={closeMenu}>
              Expérience
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500} offset={-70} onClick={closeMenu}>
              Projets
            </Link>
          </li>
        </ul>
        <div className="contact-icon">
          <Link to="contact" smooth={true} duration={500} offset={-70} onClick={closeMenu}>
            <FaEnvelope size={30} className="contact-icon-envelope" />
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;