// src/components/Skill.jsx

import './Skill.css';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaFigma } from 'react-icons/fa';

function Skill() {
  const skills = [
    { name: 'HTML', level: 90, icon: <FaHtml5 />, color: '#e34c26' },
    { name: 'CSS', level: 85, icon: <FaCss3Alt />, color: '#264de4' },
    { name: 'JavaScript', level: 80, icon: <FaJsSquare />, color: '#f0db4f' },
    { name: 'React', level: 75, icon: <FaReact />, color: '#61dbfb' },
    { name: 'Figma', level: 70, icon: <FaFigma />, color: '#a259ff' },
  ];

  return (
    <section id="skills" className="skills-section" data-aos="fade-up">
      <h2>Skill Saya</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index} data-aos="fade-right" data-aos-delay={index * 150}>
            <div className="skill-header">
              <span className="skill-icon" style={{ color: skill.color }}>{skill.icon}</span>
              <span className="skill-name">{skill.name}</span>
              <span className="skill-percentage">{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-fill" style={{ width: `${skill.level}%`, backgroundColor: skill.color }}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skill;
