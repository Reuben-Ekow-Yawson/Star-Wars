import React from "react";
import { Carousel } from "react-bootstrap";
import "./carousel.css";
import Image from "react-bootstrap/Image";
import { images } from "./CarouselImages";

const CarouselComponent: React.FC = () => {
  return (
    <div className="images">
      <Carousel fade>
        {images.map((img) => (
          <Carousel.Item key={img.id} className="wrapper">
            <Image src={img.image} alt="A-Family-at-War" className="starWar" />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
