import './Home.css';

function Home() {
  return (
    <section id="home" className="home-container">
       {/* Bubble Animation Background */}
      <ul className="bubbles">
        {Array.from({ length: 10 }).map((_, i) => <li key={i}></li>)}
      </ul>

      <div className="home-text">
        <meta className='viewport' content='width=device-width, initial-scale=1.0' />
        <h1>Halo👋, Saya <span>Safitri Alfionita</span></h1>
        <p>Selamat datang di website saya. Saya seorang pengembang web yang fokus pada desain.</p>
        <a href="#projects" className="btn">Lihat Projek Saya</a>
      </div>

      <div className="home-image">
        <img src="../public/assets/portopolio.jpeg" alt="Foto Profil Safitri" />
      </div>
    </section>
  );
}

export default Home;
