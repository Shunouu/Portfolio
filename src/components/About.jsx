import React from 'react';
import '../styles/About.css';
import dev from '../images/profil.jpg';
import { FaFilePdf } from 'react-icons/fa';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h2 className="underline">En savoir plus sur moi</h2>
          <p>
            <span className="bonjour">Bonjour,</span><br />
            Je suis Shun Mampuya, étudiant en développement web et applications, passionné par les nouvelles technologies.
          </p>
          <p>
            Actuellement en 3<sup>e</sup> année de Bachelor à l&apos;EFREI Paris, j&apos;ai terminé ma troisième année et suis en attente de sa validation pour intégrer la première année de Mastère.
            J&apos;aime apprendre, relever des défis et progresser sur le plan personnel comme professionnel.
          </p>
          <div className="info-grid">
            <div><strong>Prénom :</strong> <span>Shun</span></div>
            <div><strong>Nom :</strong> <span>Mampuya</span></div>
            <div><strong>Âge :</strong> <span>22 ans</span></div>
            <div><strong>Statut :</strong> <span>Étudiant</span></div>
            <div><strong>Ville :</strong> <span>Paris</span></div>
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
        <div className="about-image">
          <img src={dev} alt="Shun Mampuya" />
        </div>
      </div>
    </section>
  );
}

export default About;
