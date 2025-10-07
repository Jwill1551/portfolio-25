import './App.css';
import '../node_modules/jquery/dist/jquery.slim'

/** Import Components **/
import Header from './components/layout/header/header';
import Hero from './components/sections/hero/hero';
import Projects from './components/sections/projects/projects';
import Skills from './components/sections/skills/skills';
import Contact from './components/sections/contact/contact';
import Footer from './components/layout/footer/footer';

function App() {
  return (
    <div className="App container is-fluid px-0">
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
