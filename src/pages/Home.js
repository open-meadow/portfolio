import Navigation from "../components/javascripts/Navigation";
import Intro from "../components/javascripts/Intro";
import ProjectSection from "../components/javascripts/ProjectSection";
import About from "../components/javascripts/About";

import "../components/styles/Home.scss";

const Home = () => {
  return (
    <>
      <Navigation />
      <Intro />
      <div className="line">{"   "}</div>
      <h1 className="project--title">Projects</h1>
      <ProjectSection />
      <About />
      <hr/>
      <p id="disclaimer">This Website is best viewed on Desktop</p>
    </>
  );
};

export default Home;
