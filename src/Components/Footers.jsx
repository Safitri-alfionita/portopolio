// src/components/Footers.jsx
import './Footers.css';
import { FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footers() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h3 className="footer-name">Safitri Alfionita</h3>

        <ul className="footer-nav">
          <li><a href="#home">Beranda</a></li>
          <li><a href="#about">Tentang</a></li>
          <li><a href="#projects">Projek</a></li>
          <li><a href="#contact">Kontak</a></li>
        </ul>

        <div className="footer-icons">
          <a href="https://wa.me/message/G6WT3ZC2WZBQO1" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
          <a href="https://www.linkedin.com/in/safitri-alfionita-264558235?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://www.instagram.com/macthanana?igsh=NDJsbHZiZTU3NG91" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </div>

        <p className="footer-copy">&copy; 2025 Safitri Alfionita. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footers;
