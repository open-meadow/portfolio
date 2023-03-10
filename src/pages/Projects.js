import "../components/styles/Projects.scss";
import portfolio from "../db/project_database";

import Navigation from "../components/javascripts/Navigation";
import ImageCarousel from "../components/javascripts/ImageCarousel";
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
          variant="light"
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
            <hr />
            {currentPortfolio.lessons_learnt}
          </div>
          <hr />

          <footer className="github-link">
            <Link to={currentPortfolio.githubLink}>
              <Button className="github-link--separate" variant="outline-light">
                <BsGithub />
                <span id="remove-underline">Github</span>
              </Button>
            </Link>
          </footer>
        </div>
      </main>
      <hr />
      <a href="https://www.pexels.com/photo/white-furred-animals-on-green-grass-field-710263/">
        <p id="credit">Photo by Gabriel Peter from Pexels</p>
      </a>
    </>
  );
};

export default Projects;
