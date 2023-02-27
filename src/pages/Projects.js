import "../components/styles/Projects.scss";
import portfolio from "../db/project_database";
import Navigation from "../components/javascripts/Navigation";
import { useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useParams } from "react-router-dom";

const Projects = () => {
  const { id } = useParams();
  const currentPortfolio = portfolio[id];
  console.log("currentPortfolio: ", currentPortfolio);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tools = () => {
    const toolButtons = currentPortfolio.tools.map((tool) => {
      return (
        <div className="tools--single">
          <img src="https://via.placeholder.com/30x30" />
          <span>{tool}</span>
        </div>
      );
    });

    return <div className="tools">{toolButtons}</div>;
  };

  const how_it_works = () => {
    const image = currentPortfolio.images[0];

    return (
      <div className="working--border">
        <div className="working--details">
          <h1 id="work">How it works</h1>
          <hr className="line--second" />
          <div id="text">{currentPortfolio.how_it_works}</div>
        </div>
        <img src={image} />
      </div>
    );
  };

  const programming_notes = () => {
    const image = currentPortfolio.images[0];

    return (
      <div className="working--border">
        <div className="working--details">
          <h1 id="work">Programming Notes</h1>
          <hr className="line--second" />
          <div id="text">{currentPortfolio.programming_notes}</div>
        </div>
        <img src={image} />
      </div>
    );
  };

  const carousel_images = () => {
    const imageList = currentPortfolio.images.map((image, index) => {
      return (
        <Carousel.Item>
          <img className="--image" src={currentPortfolio.images[index]} width={960} height={640} />
        </Carousel.Item>
      );
    });

    return imageList;
  };

  return (
    <>
      <Navigation />
      <main className="main-section">
        <h1 id="project-title">{currentPortfolio.name}</h1>
        {tools()}
        <hr className="line--first" />

        <div className="working">
          {how_it_works()}
          {programming_notes()}
        </div>

        <div className="image-carousel">
          <Carousel>
            {carousel_images()}
          </Carousel>
        </div>
      </main>
      <hr />
    </>
  );
};

export default Projects;
