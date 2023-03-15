import "../styles/ProjectSection_new.scss";

import portfolio from "../../db/project_database";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
          <h3>1</h3>
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
