import React from 'react'; 
import { FaHtml5, FaCss3Alt, FaJs, FaPhp, FaDocker, FaGithub, FaPython, FaDatabase, FaReact } from 'react-icons/fa'; 
import { SiMysql, SiPostgresql, SiSymfony, SiAlpinedotjs } from 'react-icons/si'; 
import { CircularProgressbar } from 'react-circular-progressbar'; 
import 'react-circular-progressbar/dist/styles.css';
import '../styles/Skills.css';

const Skills = () => {
  const skills = [
    { name: 'HTML', category: 'Languages', level: 90, icon: <FaHtml5 /> },
    { name: 'CSS', category: 'Languages', level: 80, icon: <FaCss3Alt /> },
    { name: 'PHP', category: 'Languages', level: 80, icon: <FaPhp /> },
    { name: 'JavaScript', category: 'Languages', level: 75, icon: <FaJs /> },
    { name: 'SQL', category: 'Languages', level: 70, icon: <FaDatabase /> },
    { name: 'Python', category: 'Languages', level: 60, icon: <FaPython /> },
    { name: 'C', category: 'Languages', level: 50, icon: <FaDatabase /> },
    { name: 'Java', category: 'Languages', level: 65, icon: <FaDatabase /> },
    
    { name: 'MySQL', category: 'Bases de données', level: 80, icon: <SiMysql /> },
    { name: 'PostgreSQL', category: 'Bases de données', level: 75, icon: <SiPostgresql /> },
    { name: 'phpMyAdmin', category: 'Outils', level: 85, icon: <FaGithub /> },
    { name: 'Docker', category: 'Outils', level: 70, icon: <FaDocker /> },
    { name: 'Unix avancé', category: 'Outils', level: 65, icon: <FaGithub /> },
    { name: 'Github', category: 'Outils', level: 74, icon: <FaGithub /> },
    { name: 'Alpine.js', category: 'Frameworks', level: 70, icon: <SiAlpinedotjs /> },
    { name: 'Symfony', category: 'Frameworks', level: 75, icon: <SiSymfony /> },
    { name: 'Vue.js', category: 'Frameworks', level: 59, icon: <FaReact /> },
    { name: 'React', category: 'Frameworks', level: 50, icon: <FaReact /> },
    { name: 'Méthode Merise', category: 'Conception', level: 70, icon: <FaDatabase /> },
    { name: 'Design Pattern MVC', category: 'Conception', level: 72, icon: <FaDatabase /> },
    { name: 'Conception de bases de données', category: 'Conception', level: 75, icon: <FaDatabase /> },
  ];

  const softSkills = [
    { name: 'Esprit d\'équipe', level: 90 },
    { name: 'Organisé', level: 85 },
    { name: 'Facilité d\'adaptation', level: 80 },
    { name: 'Curiosité', level: 86 },
    { name: 'Autonome', level: 79 },
  ];

  const categories = ['Languages', 'Bases de données', 'Outils', 'Frameworks', 'Conception'];

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
                  <div className="progress-bar">
                    <CircularProgressbar 
                      value={skill.level} 
                      text={`${skill.level}%`} 
                      strokeWidth={6}
                      styles={{
                        path: { stroke: '#00e5ff' },
                        text: { fill: '#fff', fontSize: '12px' },
                        trail: { stroke: '#3e3e3e' }
                      }}
                    />
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
                  <h4>{skill.name}</h4>
                </div>
                <div className="progress-bar">
                  <CircularProgressbar 
                    value={skill.level} 
                    text={`${skill.level}%`} 
                    strokeWidth={6}
                    styles={{
                      path: { stroke: '#00e5ff' },
                      text: { fill: '#fff', fontSize: '12px' },
                      trail: { stroke: '#3e3e3e' }
                    }}
                  />
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