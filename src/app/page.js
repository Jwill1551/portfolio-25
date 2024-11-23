import Image from "next/image";
import styles from "./page.module.css";

/*** Components ***/
import Header from "./components/sections/Header/Header";
import Hero from "./components/sections/Hero/Hero";
import Projects from "./components/sections/Projects/Projects";
import Skills from "./components/sections/Skills/Skills";
import Socials from "./components/sections/Socials/Socials";
import Footer from "./components/sections/Footer/Footer";

export default function Home() {
  return (
    <div id="react-portfolio-page">
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <Socials />
      <Footer />
    </div>
  );
}
