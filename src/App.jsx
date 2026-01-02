import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import Portfolio from "./components/portfolio/Portfolio";
import CanvasCursor from "./components/CanvasCursor";
const App = () => {
  return (
    <>
      <CanvasCursor />
      <div>
        <section id="Homepage">
          <Navbar />
          <Hero />
        </section>
        <section>
          <Parallax type="Skills" />
        </section>
        <section id="Skills">
          <Skills />
        </section>
        <section>
          <Parallax type="Portfolio" />
        </section>

        <Portfolio />
        <section id="Contact">
          <Contact />
        </section>
      </div>
    </>
  );
};

export default App;
