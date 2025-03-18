import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const ExperienceTimeline = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="section-title">
        <h2>Mon Parcours</h2>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Mars 2019"
          contentStyle={{ background: '#ffffff', color: 'black', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}
          contentArrowStyle={{ borderRight: '7px solid #ffffff' }}
          iconStyle={{ background: '#00ffab', color: 'black' }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">Gestionnaire de Stock</h3>
          <h4 className="vertical-timeline-element-subtitle">Pharmacie du Centre, Pantin</h4>
          <p>
            Expérience en mars 2019 :<br />
            → Rangement des médicaments<br />
            → Récupération des commandes<br />
            → Organisation des produits dans les rayons.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Septembre 2020 - Juin 2021"
          contentStyle={{ background: '#ffffff', color: 'black', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}
          contentArrowStyle={{ borderRight: '7px solid #ffffff' }}
          iconStyle={{ background: '#007bff', color: 'black' }}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">Lycée Général et Technologique</h3>
          <h4 className="vertical-timeline-element-subtitle">Lycée Saint Joseph LaSalle, Pantin</h4>
          <p>
            Après 14 ans passés dans le même établissement (maternelle, primaire, collège et début de lycée),<br/>
            j’ai poursuivi mon cursus avant de rejoindre le Lycée Grégor Mendel en 2021, où j’ai intégré un lycée technologique afin d’obtenir le diplôme STMG.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Septembre 2021 - Juin 2023"
          contentStyle={{ background: '#ffffff', color: 'black', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}
          contentArrowStyle={{ borderRight: '7px solid #ffffff' }}
          iconStyle={{ background: '#007bff', color: 'black' }}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">Baccalauréat STMG - Mercatique</h3>
          <h4 className="vertical-timeline-element-subtitle">Lycée Grégor Mendel, Vincennes</h4>
          <p>Obtention du diplôme STMG avec spécialisation en mercatique.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Septembre 2023 - en cours"
          contentStyle={{ background: '#ffffff', color: 'black', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}
          contentArrowStyle={{ borderRight: '7px solid #ffffff' }}
          iconStyle={{ background: '#007bff', color: 'black' }}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">Bachelor Développement Web et Application</h3>
          <h4 className="vertical-timeline-element-subtitle">EFREI, Villejuif</h4>
          <p>Début du cursus en septembre 2023, en cours jusqu'en 2026. Actuellement, je poursuis ma formation en 2025.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Mai 2024 - Juillet 2024"
          contentStyle={{ background: '#ffffff', color: 'black', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}
          contentArrowStyle={{ borderRight: '7px solid #ffffff' }}
          iconStyle={{ background: '#00ffab', color: 'black' }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">Chargé de Développement Web</h3>
          <h4 className="vertical-timeline-element-subtitle">City Car Lease, Levallois-Perret</h4>
          <p>
            De mai 2024 à juillet 2024 :<br />
            → Création d'un formulaire fonctionnel en PHP pour recueillir des données et interagir avec les utilisateurs.<br />
            → Participation à la refonte du site Internet.<br />
            → Amélioration de la page Facebook.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};

export default ExperienceTimeline;