import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skill from './Components/Skill';
import Education from './Components/Educations';
import Contacts from './Components/Contacts';
import Footers from './Components/Footers';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Education />
      <Projects />
      <Contacts />
      <Footers />
    </>
  );
}

export default App;
