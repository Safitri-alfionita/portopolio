import './App.css';

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
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
