import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../styles/ImageCarousel.scss"

const ImageCarousel = (props) => {
  const { currentPortfolio } = props;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
  };

  const carousel_images = () => {
    const imageList = currentPortfolio.images.map((index) => {
      return (
        <div>
          <img
            className="image_carousel--image"
            src={index}
            alt={currentPortfolio.name}
          />
        </div>
      );
    });

    return imageList;
  };

  return (
    // <Carousel className="image-carousel" variant="dark">
    //   {carousel_images()}
    // </Carousel>
    <Slider {...settings} className="image_carousel">{carousel_images()}</Slider>
  );
};

export default ImageCarousel;
