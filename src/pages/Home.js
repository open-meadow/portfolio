import Navigation from "../components/javascripts/Navigation";
import Intro from "../components/javascripts/Intro";
import ProjectSection from "../components/javascripts/ProjectSection";
import About from "../components/javascripts/About";

import "../components/styles/Home.scss";
import ProjectSection_new from "../components/javascripts/ProjectSection_new";

const Home = () => {
  return (
    <>
      <Navigation />
      <Intro />
      {/* <ProjectSection /> */}
      <ProjectSection_new />
      <About />
      <hr />
      <a href="https://www.pexels.com/photo/white-furred-animals-on-green-grass-field-710263/">
        <p id="credit">Photo by Gabriel Peter from Pexels</p>
      </a>
    </>
  );
};

export default Home;
