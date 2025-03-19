import React from 'react';
import '../styles/About.css';
import dev from '../images/profil.jpg';
import { FaFilePdf } from 'react-icons/fa';

function About() {
  // Affichez PUBLIC_URL pour le débogage
  console.log('PUBLIC_URL:', process.env.PUBLIC_URL);

  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h2 className="underline">En savoir plus sur moi</h2>
          <p>
            <span className="bonjour">Bonjour,</span><br />
            Je suis Shun Mampuya, étudiant en Développement Web & Application, passionné par les nouvelles technologies.
          </p>
          <p>
            Toujours curieux d’apprendre, j’aime découvrir de nouvelles choses, relever des défis et évoluer dans mon domaine pour grandir autant sur le plan personnel que professionnel.
          </p>
          <div className="info-grid">
            <div><strong>Prénom :</strong> <span>Shun</span></div>
            <div><strong>Nom :</strong> <span>Mampuya</span></div>
            <div><strong>Âge :</strong> <span>21 ans</span></div>
            <div><strong>Statut :</strong> <span>Étudiant</span></div>
          </div>
          <a href={`${process.env.PUBLIC_URL}/CV.pdf`} className="cv-button" target="_blank" rel="noopener noreferrer">
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