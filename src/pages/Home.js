import { Controller, Scene } from "scrollmagic";

import Navigation from "../components/javascripts/Navigation";
import Intro from "../components/javascripts/Intro";
import ProjectSection from "../components/javascripts/ProjectSection";
import About from "../components/javascripts/About";

import "../components/styles/Home.scss";

const Home = () => {
  const controller = new Controller();

  new Scene({
    triggerElement: "#trigger1",
    triggerHook: 0.9,
    duration: "80%",
    offset: 50,
  })
    .setClassToggle("#reveal1", "visible")
    .addTo(controller);

  return (
    <>
      <Navigation />
      <Intro />

      {/* <div className="spacer s2"></div>
      <div id="trigger1" className="spacer s0"></div>
      <div id="reveal1" className="box2 blue">
        <p>
          I will be revealed when scrolled into view and hidden when scrolled
          past.
        </p>
        <a href="#" className="viewsource">
          view source
        </a>
      </div>
      <div className="spacer s2"></div> */}

      <ProjectSection />

      <About />
      <hr />
      <a href="https://www.pexels.com/photo/white-furred-animals-on-green-grass-field-710263/">
        <p id="credit">Photo by Gabriel Peter from Pexels</p>
      </a>
    </>
  );
};

export default Home;
