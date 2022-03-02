import React from "react";
import ImageCard from "./ImageCard";
import "./Images.css";

const Images = (props) => {
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });
  return <ul className="images-ul">{images}</ul>;
};
export default Images;
