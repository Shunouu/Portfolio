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
      title: 'Site E-Commerce',
      description: "Développement d’un site e-commerce spécialisé dans la vente de CD, de films musicaux et d’accessoires. La plateforme inclut un catalogue de produits, une gestion du panier, ainsi que des options d’inscription et de connexion pour les utilisateurs. Le tout est soutenu par une base de données permettant de stocker et gérer les informations. L’interface est conçue pour offrir une expérience utilisateur fluide et intuitive.",
      image: ecommerceImg,
      tags: ['PHP', 'MySQL'],
      link: 'https://github.com/Shunouu/crepe_waou',
      reverse: true
    },
    {
      title: 'MatchFit - Application Web de Coaching',
      description: "MatchFit est une application web permettant la mise en relation entre des coachs et des élèves. Les utilisateurs peuvent créer un compte, consulter des suggestions en fonction de leur sport préféré, et lire des avis sur les coachs. Le site propose des profils détaillés pour les coachs, incluant des vidéos et des descriptions, ainsi que des profils pour les utilisateurs avec leurs informations. Il inclut également une fonctionnalité indiquant l'état d'activité des coachs.",
      image: matchfitImg,
      tags: ['PHP', 'PostgreSQL', 'Docker'],
      link: 'https://github.com/william7865/MatchFit',
      reverse: false
    },
    {
      title: 'Site Web de Cuisine',
      description: 'L’application web de l’entreprise HomeMade, spécialisée dans la vente de plats à emporter. L’application vise à élargir son public en permettant aux utilisateurs de naviguer facilement entre les cuisiniers, consulter leurs spécialités, s’inscrire, et ajouter des plats à leur panier.',
      image: cuisineImg,
      tags: ['Vue.js', 'PHP', 'CSS'],
      link: 'https://github.com/Shunouu/HomeMade',
      reverse: true
    },
    {
      title: 'Site Web de Garage',
      description: 'Le projet consiste à développer une application web vitrine pour le Garage V. Parrot, un garage automobile basé à Toulouse. Le site mettra en avant les véhicules d’occasion disponibles à la vente avec des photos, descriptions détaillées et informations techniques essentielles (prix, année de mise en circulation, kilométrage, image principale).',
      image: garageImg,
      tags: ['Symfony', 'PHP', 'CSS'],
      link: 'https://github.com/Shunouu/garage',
      reverse: false
    },
    {
      title: 'Site Web Étudiant Gouv',
      description: 'Le projet consiste à repenser le site existant étudiant gouv, afin de le rendre plus simple, attractif et fonctionnel. L’objectif est d’améliorer l’expérience utilisateur en simplifiant la navigation et en rendant le site plus visuellement attractif pour les utilisateurs. Mon groupe et moi avons choisi ce site dans le cadre d’un projet “Challenge Web” pour le rénover et le rendre plus moderne et engageant.',
      image: etudiantImg,
      tags: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://github.com/Shunouu/challengeweb',
      reverse: true
    },
    {
      title: 'Formulaire PHP - City Car Lease',
      description: "Création d'un formulaire fonctionnel en PHP pour recueillir des données et interagir avec les utilisateurs. Ce projet a été réalisé chez City Car Lease à Levallois-Perret, dans le cadre du développement web.",
      image: formulaireImg,
      tags: ['PHP', 'HTML', 'CSS'],
      link: 'https://github.com/Shunouu/formulaire',
      reverse: false
    }
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