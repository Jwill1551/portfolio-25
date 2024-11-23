import Image from "next/image";
import sizingStyles from "./sizing.css";
import styles from "./page.module.css";
import hero__img from "./assets/images/gray-suit.png";

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
      <Hero img={hero__img} />
      <Projects />
      <Skills />
      <Socials />
      <Footer />
    </div>
  );
}
