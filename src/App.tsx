import Contact from './components/contact/Contact';
import { Cursor } from './components/Cursor';
import Education from './components/education/Education';
import Experience from './components/experience/Experience';
import Footer from './components/Footer';
import Hero from './components/hero/Hero';
import Nav from './components/Nav';
import Skills from './components/skills/Skills';

function App() {
  return (
    <>
      <Cursor />
      <Nav />
      <Hero />
      <Skills />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
