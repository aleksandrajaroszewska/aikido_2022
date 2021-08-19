import ImageGallery from "react-image-gallery";
import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";

const Slider = ({ images, desc }) => {
  const imagesArray = [];
  console.log(images);

  for (let i = 0; i < images.length; i++) {
    if (desc) {
      imagesArray.push({
        original: images[i],
        thumbnail: images[i],
        description: desc[i],
      });
    } else {
      imagesArray.push({
        original: images[i],
        thumbnail: images[i],
      });
    }
  }

  return <ImageGallery items={imagesArray } />;
};

export default Slider;
