import logo from './logo.svg';
import './App.css';
import './assets/styles/style.css';

/*** React Slick Slider CSS ***/
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/** Import Components **/
import Header from './components/layout/header/header';
import Hero from './components/sections/hero/hero';
import Projects from './components/sections/projects/projects';
import Skills from './components/sections/skills/skills';
import Contact from './components/sections/contact/contact';
import Footer from './components/layout/footer/footer';

function App() {
  return (
    <div className="App container-fluid">
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
