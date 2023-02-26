import "../styles/ProjectSection.scss";

import portfolio from "../../db/project_database";
import { useGlobalContext } from "../../contexts/context";
import { Button, Carousel } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

const ProjectSection = () => {
  // const [activeIndex, setActiveIndex] = useState(0);
  const { activeIndex, setActiveIndex } = useGlobalContext();

  console.log("activeIndex", activeIndex);
  // console.log("activeIndex: ", activeIndex);

  const handleSelect = (selectedIndex, e) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <div className="projects">
      <div id="image">
        <Carousel activeIndex={activeIndex} onSelect={handleSelect}>
          <Carousel.Item>
            {<img src="https://via.placeholder.com/960x720" />}
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://via.placeholder.com/960x720" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://via.placeholder.com/960x720" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://via.placeholder.com/960x720" />
          </Carousel.Item>
        </Carousel>
      </div>
      <div id="details">
        <h3>{portfolio[activeIndex].name}</h3>
        <p>{portfolio[activeIndex].description}</p>
        <Link to={`/project/${activeIndex}`}>
          <Button>More</Button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectSection;
