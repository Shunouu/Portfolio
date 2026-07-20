import React from 'react'; 
import { FaHtml5, FaCss3Alt, FaPhp, FaDocker, FaGithub, FaDatabase, FaReact, FaLinux, FaJava, FaUsers, FaSitemap, FaLightbulb, FaUserCheck, FaPaintBrush, FaUniversalAccess, FaCloud } from 'react-icons/fa';
import { SiMysql, SiPostgresql, SiSymfony, SiAlpinedotjs, SiPhpmyadmin, SiC, SiJavascript, SiPython, SiVuedotjs, SiNextdotjs } from 'react-icons/si';
import '../styles/Skills.css';

const Skills = () => {
  const skills = [
    { name: 'HTML', category: 'Languages', icon: <FaHtml5 /> },
    { name: 'CSS', category: 'Languages', icon: <FaCss3Alt /> },
    { name: 'PHP', category: 'Languages', icon: <FaPhp /> },
    { name: 'JavaScript', category: 'Languages', icon: <SiJavascript /> },
    { name: 'SQL', category: 'Languages', icon: <FaDatabase /> },
    { name: 'Python', category: 'Languages', icon: <SiPython /> },
    { name: 'C', category: 'Languages', icon: <SiC /> },
    { name: 'Java', category: 'Languages', icon: <FaJava /> },
    { name: 'MySQL', category: 'Bases de données', icon: <SiMysql /> },
    { name: 'PostgreSQL', category: 'Bases de données', icon: <SiPostgresql /> },
    { name: 'Git / GitHub', category: 'Outils', icon: <FaGithub /> },
    { name: 'Docker', category: 'Outils', icon: <FaDocker /> },
    { name: 'Unix / Linux', category: 'Outils', icon: <FaLinux /> },
    { name: 'phpMyAdmin', category: 'Outils', icon: <SiPhpmyadmin /> },
    { name: 'Symfony', category: 'Frameworks', icon: <SiSymfony /> },
    { name: 'Vue.js', category: 'Frameworks', icon: <SiVuedotjs /> },
    { name: 'Alpine.js', category: 'Frameworks', icon: <SiAlpinedotjs /> },
    { name: 'React', category: 'Frameworks', icon: <FaReact /> },
    { name: 'Next.js', category: 'Frameworks', icon: <SiNextdotjs /> },
    { name: 'UX/UI', category: 'Conception', icon: <FaPaintBrush /> },
    { name: 'Méthode Merise', category: 'Conception', icon: <FaDatabase /> },
    { name: 'Design Pattern MVC', category: 'Conception', icon: <FaDatabase /> },
    { name: 'Accessibilité Web', category: 'Conception', icon: <FaUniversalAccess /> },
    { name: 'Conception de bases de données', category: 'Conception', icon: <FaDatabase /> },
    { name: 'Docker', category: 'Architecture', icon: <FaDocker /> },
    { name: 'Cloud Computing', category: 'Architecture', icon: <FaCloud /> },
  ];

  const softSkills = [
    { name: 'Esprit d’équipe', icon: <FaUsers /> },
    { name: 'Organisé', icon: <FaSitemap /> },
    { name: 'Facilité d’adaptation', icon: <FaUserCheck /> },
    { name: 'Curiosité', icon: <FaLightbulb /> },
    { name: 'Autonome', icon: <FaUserCheck /> },
  ];

  const categories = ['Languages', 'Bases de données', 'Outils', 'Frameworks', 'Conception', 'Architecture'];

  return (
    <div className="skills-section">
      <h2>Mes Compétences</h2>
      <div className="skills-container">
        {categories.map((category, index) => (
          <div key={index} className="skills-category">
            <h3>{category}</h3>
            <div className="skills-list">
              {skills.filter(skill => skill.category === category).map((skill, index) => (
                <div key={index} className="skill-card">
                  <div className="skill-name">
                    <div className="skill-icon">{skill.icon}</div>
                    <h4>{skill.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="soft-skills">
          <h3>Soft Skills</h3>
          <div className="skills-list">
            {softSkills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-name">
                  <div className="skill-icon">{skill.icon}</div>
                  <h4>{skill.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;