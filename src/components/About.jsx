import React from 'react';
import '../styles/About.css';
import { FaFilePdf } from 'react-icons/fa';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h2 className="underline">En savoir plus sur moi</h2>
          <p>
            <span className="bonjour">Bonjour,</span>{' '}
            Je me présente Shun Mampuya étudiant en développement web applications, passionné par la création et par les nouvelles technologies
          </p>
          <p>
            Je suis actuellement en 1ère année de mastère developpeur Full-Stack au sein de l’établissement EFREI PARIS
          </p>
          <p>
            Je suis une personne sociable, organisée, à l’écoute, aime travailler en équipe, j’aime les challenges et accepte les critiques constructives pour me permettre d’évoluer.
          </p>
          <div className="info-grid">
            <div><strong>Prénom :</strong> <span>Shun</span></div>
            <div><strong>Nom :</strong> <span>Mampuya</span></div>
            <div><strong>Âge :</strong> <span>22 ans</span></div>
            <div><strong>Statut :</strong> <span>Étudiant</span></div>
          </div>
          <a
            href={`${process.env.PUBLIC_URL}/CV.pdf`}
            className="cv-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFilePdf style={{ marginRight: '10px' }} />
            Voir mon CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
