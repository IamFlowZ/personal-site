import React, { useState, useEffect } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";

import "./gallery.css";


export default function ({title, images}) {
  const [isOpen, openModal] = useState(false);
  const [currentIndex, setIndex] = useState(0);
  const toggleModal = (i) => {
    setIndex(i);
    return openModal(!isOpen);
  };
  const gutter = 2;
  return (
    <>
      <div className="ReactGridGallery">
        {images.map((image, i) => (
          <div key={i}>
            <img
              onClick={() => toggleModal(i)}
              alt={image.caption}
              src={image.src}
            />
          </div>
        ))}
      </div>
      <ModalGateway>
        {isOpen ? (
          <Modal onClose={() => toggleModal(currentIndex)}>
            <Carousel views={images} currentIndex={currentIndex} />
          </Modal>
        ) : null}
      </ModalGateway>
    </>
  );
}
