import "../styles/ProjectSection_new.scss";

import portfolio from "../../db/project_database";

import { Button, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BsGithub, BsChevronLeft, BsChevronRight } from "react-icons/bs";

const ProjectSection_new = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
  };
  return (
    <div className="project">
      <h2>Projects</h2>
      <Slider {...settings} className="project--slider">
        <div className="project--slider--item">
          <div className="project--slider--item--image-section">
            <img
              src={portfolio[0].images[0]}
              className="project--slider--item--image-section--image"
              alt={portfolio[0].name}
            />
          </div>
          <div className="project--slider--item--details">
            <div className="project--slider--item--details--text">
              <h2>{portfolio[0].name}</h2>
              <p>{portfolio[0].description}</p>
            </div>
            <div className="project--slider--item--details--buttons">
              <Link to={`/project/${0}`}>
                <Button size="lg">Info</Button>
              </Link>
              <Button
                className="github-link--separate"
                variant="dark"
                size="lg"
                href={portfolio[0].githubLink}
              >
                <BsGithub />
                <span id="remove-underline">Github</span>
              </Button>
            </div>
          </div>
        </div>
        <div className="project--slider--item">
          <h3>2</h3>
        </div>
        <div className="project--slider--item">
          <h3>3</h3>
        </div>
        <div className="project--slider--item">
          <h3>4</h3>
        </div>
        <div className="project--slider--item">
          <h3>5</h3>
        </div>
        <div className="project--slider--item">
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
};

export default ProjectSection_new;
