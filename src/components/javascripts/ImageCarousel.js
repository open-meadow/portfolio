import Carousel from "react-bootstrap/Carousel";

const ImageCarousel = (props) => {
  const { currentPortfolio } = props;

  const carousel_images = () => {
    const imageList = currentPortfolio.images.map((index) => {
      return (
        <Carousel.Item>
          <img
            className="image-carousel--image"
            src={currentPortfolio.images[index]}
            alt={currentPortfolio.name}
          />
        </Carousel.Item>
      );
    });

    return imageList;
  };

  return (
    <Carousel className="image-carousel" variant="dark">
      {carousel_images()}
    </Carousel>
  );
};

export default ImageCarousel;
