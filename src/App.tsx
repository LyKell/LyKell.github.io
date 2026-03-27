import Contact from './components/contact/Contact';
import Education from './components/education/Education';
import Experience from './components/experience/Experience';
import Hero from './components/hero/Hero';
import Nav from './components/Nav';
import Skills from './components/skills/Skills';

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </>
  );
}

export default App;
