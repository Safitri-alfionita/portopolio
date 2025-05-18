// src/components/Projects.jsx
import './Project.css';
import { FaStickyNote, FaStore } from 'react-icons/fa';

function Projects() {
  const projects = [
    {
      title: 'Aplikasi Penghitung Daya Listrik',
      icon: <FaStickyNote />,
      description: 'Aplikasi web sederhana untuk menghitung daya listrik dalam satuan Watt.',
      tech: ['JavaCript', 'CSS', 'LocalStorage'],
    },
    {
      title: 'Website Toko Online',
      icon: <FaStore />,
      description: 'Desain dan layout awal untuk toko online fashion.',
      tech: ['HTML', 'CSS', 'Responsive Design'],
    },
    {
      title: 'Website Absensi Siswa Berbasis QR Code',
      icon: <FaStore />,
      tech: ['JavaScript', 'Boostrap', 'Responsive Design'],
    },
  ];

  return (
    <section id="projects" className="section projects">
      <h2 data-aos="fade-up">Projek Saya</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index} data-aos="zoom-in" data-aos-delay={index * 200}>
            <div className="project-icon">{project.icon}</div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((t, i) => (
                <span key={i} className="tech">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
