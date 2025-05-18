// src/components/Contacts.jsx
import './Contacts.css';
import { FaWhatsapp, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Contacts() {
  const contacts = [
    {
      platform: 'WhatsApp',
      icon: <FaWhatsapp />,
      link: 'https://wa.me/message/G6WT3ZC2WZBQO1',
      color: '#25D366',
    },
    {
      platform: 'Instagram',
      icon: <FaInstagram />,
      link: 'https://www.instagram.com/macthanana?igsh=NDJsbHZiZTU3NG91',
      color: '#E1306C',
    },
    {
      platform: 'LinkedIn',
      icon: <FaLinkedin />,
      link: 'https://www.linkedin.com/in/safitri-alfionita-264558235?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      color: '#0077b5',
    },
    {
      platform: 'Email',
      icon: <FaEnvelope />,
      link: 'safitrialft@gmail.com',
      color: '#EA4335',
    },
  ];

  return (
    <section id="contact" className="contact-section">
      <h2 data-aos="fade-up">Hubungi Saya</h2>
      <div className="contact-icons">
        {contacts.map((contact, index) => (
          <a
            key={index}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon"
            style={{ color: contact.color }}
            data-aos="zoom-in"
            data-aos-delay={index * 150}
          >
            {contact.icon}
            <span>{contact.platform}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Contacts;
