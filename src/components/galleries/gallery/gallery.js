import React, { useState } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";

import "./gallery.css";


export default function ({images}) {
  const [isOpen, openModal] = useState(false);
  const [currentIndex, setIndex] = useState(0);
  const toggleModal = (i) => {
    setIndex(i);
    return openModal(!isOpen);
  };

  return (
    <>
      <div className="ReactGridGallery">
        {images.map((image, i) => (
          <div key={i}>
            <img
              onClick={() => toggleModal(i)}
              alt={image.alt}
              src={image.src}
            />
            <p>{image.title}</p>
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
