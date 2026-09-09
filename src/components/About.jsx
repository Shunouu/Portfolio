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
            Actuellement en 4<sup>e</sup> année à l&apos;EFREI Paris, je poursuis ma formation en première année de Mastère Développeur Full-Stack, après avoir terminé mon Bachelor en Développement Web et Applications.
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
