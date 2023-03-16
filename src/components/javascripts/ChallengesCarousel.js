import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../styles/ChallengesCarousel.scss";

const ChallengesCarousel = (props) => {
  const { currentPortfolio } = props

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const challenges = () => {
    const challengesDiv = currentPortfolio.challenges.map((challenge) => {
      return <div className="challenges--single">{challenge}</div>;
    });

    // return (
      // <div className="working--challenges">
        {/* <Carousel
          variant="light"
          prevLabel="Previous"
          nextLabel="Next"
          prevIcon={<span className="carousel-control-prev-icon" />}
          nextIcon={<span className="carousel-control-next-icon" />}
          className="working--challenges--carousel"
        >
          {challengesDiv}
        </Carousel> */}
        // {challengesDiv}
      // </div>
    // );

    return(challengesDiv);
  };

  return (
    <div className="challenges">
      <h2> Single Item</h2>
      <Slider {...settings}>
        {/* <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div> */}
        {challenges()}
      </Slider>
    </div>
  );
};

export default ChallengesCarousel;
