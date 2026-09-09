import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const timelineStyle = {
  background: '#ffffff',
  color: 'black',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
};

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
          contentStyle={timelineStyle}
          contentArrowStyle={{ borderRight: '7px solid #ffffff' }}
          iconStyle={{ background: '#00ffab', color: 'black' }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">
            Gestionnaire de stock
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Pharmacie du Centre, Pantin
          </h4>
          <p>
            → Rangement des médicaments<br />
            → Récupération des commandes<br />
            → Organisation des produits dans les rayons
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Septembre 2021 - Juin 2023"
          contentStyle={timelineStyle}
          contentArrowStyle={{ borderRight: '7px solid #ffffff' }}
          iconStyle={{ background: '#007bff', color: 'black' }}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">
            Baccalauréat STMG — Mercatique
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Lycée Grégor Mendel, Vincennes
          </h4>
          <p>
            Obtention du baccalauréat STMG, spécialité mercatique.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Septembre 2023 - Juin 2026"
          contentStyle={timelineStyle}
          contentArrowStyle={{ borderRight: '7px solid #ffffff' }}
          iconStyle={{ background: '#007bff', color: 'black' }}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">
            Bachelor Développement Web et Applications
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            EFREI Paris, Villejuif
          </h4>
          <p>
            Parcours de 3 ans en Bachelor Développement Web et Applications.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Mai 2024 - Juillet 2024"
          contentStyle={timelineStyle}
          contentArrowStyle={{ borderRight: '7px solid #ffffff' }}
          iconStyle={{ background: '#00ffab', color: 'black' }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">
            Chargé de Développement Web
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            City Car Lease, Levallois-Perret
          </h4>
          <p>
            Création d’un formulaire en PHP pour recueillir des données et
            interagir avec les utilisateurs.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Avril 2025 - Juin 2025"
          contentStyle={timelineStyle}
          contentArrowStyle={{ borderRight: '7px solid #ffffff' }}
          iconStyle={{ background: '#00ffab', color: 'black' }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">
            Développeur Front-End
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            City Car Lease, Levallois-Perret
          </h4>
          <p>
            Modernisation de la page d’accueil du site de l’entreprise.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Février 2026 - Juin 2026"
          contentStyle={timelineStyle}
          contentArrowStyle={{ borderRight: '7px solid #ffffff' }}
          iconStyle={{ background: '#00ffab', color: 'black' }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">
            Développeur React / Next.js
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            City Car Lease, Levallois-Perret
          </h4>
          <p>
            Développement d’une nouvelle version du site web de l’entreprise
            avec Next.js.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Septembre 2026 - Aujourd’hui"
          contentStyle={timelineStyle}
          contentArrowStyle={{ borderRight: '7px solid #ffffff' }}
          iconStyle={{ background: '#007bff', color: 'black' }}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">
            Mastère Développeur Full-Stack — M1
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            EFREI Paris, Villejuif
          </h4>
          <p>
            Première année de Mastère Développeur Full-Stack.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};

export default ExperienceTimeline;
