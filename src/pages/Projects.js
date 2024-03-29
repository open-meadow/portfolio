import "../components/styles/Projects.scss";
import portfolio from "../db/project_database";

import Navigation from "../components/javascripts/Navigation";
import ImageCarousel from "../components/javascripts/ImageCarousel";
// import ChallengesCarousel from "../components/javascripts/ChallengesCarousel";
import toolIcons from "../db/toolIcons";

import { BsGithub } from "react-icons/bs";

import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Carousel } from "react-bootstrap";

const Projects = () => {
  const { id } = useParams();
  const currentPortfolio = portfolio[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // show tools buttons
  const tools = () => {
    const toolButtons = currentPortfolio.tools.map((tool) => {
      return (
        <div className="tools--single">
          {toolIcons[tool]}
          <span>{tool}</span>
        </div>
      );
    });

    return <div className="tools">{toolButtons}</div>;
  };

  const challenges = () => {
    const challengesDiv = currentPortfolio.challenges.map((challenge) => {
      return <Carousel.Item>{challenge}</Carousel.Item>;
    });

    return (
      <div className="working--challenges">
        <Carousel
          variant="dark"
          prevLabel="Previous"
          nextLabel="Next"
          prevIcon={<span className="carousel-control-prev-icon" />}
          nextIcon={<span className="carousel-control-next-icon" />}
          className="working--challenges--carousel"
        >
          {challengesDiv}
        </Carousel>
      </div>
    );
  };

  return (
    <>
      <Navigation />
      <main>
        <div className="main-section">
          <h1 id="project-title">{currentPortfolio.name}</h1>
          {currentPortfolio.description}
          <br />
          {tools()}
          <hr className="line--first" />

          <div className="working">
            <div className="working--intro">
              {currentPortfolio.features}
              <ImageCarousel currentPortfolio={currentPortfolio} />
            </div>
            <hr />
            <h2>Challenges</h2>
            {challenges()}
            {/* <ChallengesCarousel currentPortfolio={currentPortfolio} /> */}
          </div>

          <br />
          <br />

          <footer className="github-link">
            <hr />
            <Link to={currentPortfolio.githubLink} target="_blank">
              <Button className="github-link--separate" variant="outline-light">
                <BsGithub />
                <span id="remove-underline">Github</span>
              </Button>
            </Link>
          </footer>
        </div>
        <hr />
        <p id="disclaimer-project">This Website is best viewed on Desktop</p>
      </main>
    </>
  );
};

export default Projects;
