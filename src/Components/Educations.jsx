// src/components/Educations.jsx
import './Educations.css';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

function Educations() {
  const education = [
    {
      title: 'STMIK Mardira Indonesia',
      degree: 'S1 Teknik Informatika',
      year: '2022 - Sekarang',
    },
    {
      title: 'SMk kP 2 MARGAHAYU',
      degree: 'TEKNIK KOMPUTER',
      year: '2019 - 2022',
    },
    {
      title: 'SMP TUNAS HARAPAN',
      
      year: '2016 - 2019',
    },
    {
      title: 'SDN 2 TASIKMALAYA',
      
      year: '2010 - 2016',
    },
  ];

  const experiences = [
    {
      company: ' Magang PT Telkom Akses Bandung',
      year: '2021',
      description: 'mengakses aplikasi-aplikasi kantor Unified Inventory Management, PraBAC (Dashboard Fullfillment), Smartplanning dan Data Broadband.',
    },
    {
      company: 'Freelance Canva',
      role: 'Designer Templat',
      year: '2023',
      description: 'Mendesain antarmuka PowerPoint & Poster',
    },
  ];

  return (
    <section id="education" className="edu-container">
      <h2 data-aos="fade-up">Pendidikan & Pengalaman</h2>

      <div className="edu-content">
        <div className="edu-box" data-aos="fade-right">
          <h3><FaGraduationCap /> Pendidikan</h3>
          {education.map((edu, index) => (
            <div className="edu-item" key={index}>
              <h4>{edu.title}</h4>
              <p className="degree">{edu.degree}</p>
              <p className="year">{edu.year}</p>
            </div>
          ))}
        </div>

        <div className="edu-box" data-aos="fade-left">
          <h3><FaBriefcase /> Pengalaman</h3>
          {experiences.map((exp, index) => (
            <div className="edu-item" key={index}>
              <h4>{exp.company}</h4>
              <p className="degree">{exp.role}</p>
              <p className="year">{exp.year}</p>
              <p className="desc">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Educations;
