import React from 'react';
import '../styles/Projects.css';
import cuisineImg from '../images/Cuisine.png';
import ecommerceImg from '../images/e-commerce.png';
import matchfitImg from '../images/matchfit.png';
import garageImg from '../images/garage.png'; 
import etudiantImg from '../images/etudiant.png';
import formulaireImg from '../images/formulaire.png';

function Projects() {
  const projects = [
    {
      title: 'Site e-commerce — Musique',
      description: "Création d'un site e-commerce fonctionnel sur la vente de DVD, CD et accessoires dans le domaine de la musique. Catalogue de produits, panier, inscription et connexion utilisateurs, le tout relié à une base de données.",
      image: ecommerceImg,
      tags: ['PHP', 'MySQL'],
      link: 'https://film-music-two.vercel.app/',
      reverse: true
    },
    {
      title: 'MatchFit — Coaching sportif',
      description: "Projet en groupe : site web pour les personnes qui souhaitent apprendre et pratiquer un sport avec un coach en direct. Mise en relation coachs / élèves, profils détaillés, avis et suggestions selon le sport choisi.",
      image: matchfitImg,
      tags: ['PHP', 'PostgreSQL', 'Docker'],
      link: 'https://match-fit.vercel.app/',
      reverse: false
    },
    {
      title: 'Projet nourriture — HomeMade',
      description: "Création d'un site e-commerce mettant en avant la vente de plats cuisinés par des chefs à emporter. Navigation entre cuisiniers, spécialités, inscription et panier.",
      image: cuisineImg,
      tags: ['Vue.js', 'PHP', 'CSS'],
      link: 'https://home-made-project.vercel.app',
      reverse: true
    },
    {
      title: 'Challenge Web — Étudiant.gouv',
      description: "Reprise d'un site existant pour le rendre plus attractif et plus simple pour les clients. Projet Challenge Web en HTML et CSS : navigation simplifiée et interface modernisée.",
      image: etudiantImg,
      tags: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://cw-etudiant-gouv.vercel.app',
      reverse: false
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-content">
        <h2>Voici un petit aperçu de mes projets</h2>
        <div className="projects-list">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              {project.reverse ? (
                <>
                  <div className="project-info">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="tags">
                      {project.tags.map((tag, index) => (
                        <div key={index} className="tag">{tag}</div>
                      ))}
                    </div>
                    <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                      Voir le projet
                    </a>
                  </div>
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                  </div>
                </>
              ) : (
                <>
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                  </div>
                  <div className="project-info">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="tags">
                      {project.tags.map((tag, index) => (
                        <div key={index} className="tag">{tag}</div>
                      ))}
                    </div>
                    <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                      Voir le projet
                    </a>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;