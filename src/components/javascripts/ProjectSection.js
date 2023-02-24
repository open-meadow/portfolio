import "../styles/ProjectSection.scss";

import { Carousel } from "react-bootstrap";

const ProjectSection = () => {
  return (
    <div className="projects">
      <div id="image">
      <Carousel>
            <Carousel.Item>
              <img src="https://via.placeholder.com/960x720" />
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
        <h3>Project Name</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
};

export default ProjectSection;
