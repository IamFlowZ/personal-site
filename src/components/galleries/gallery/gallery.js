import React, { useState, useEffect } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";

import github from "../../../assets/icons/social/github.svg";

import "./gallery.css";

export default function ({ images }) {
  const [isOpen, openModal] = useState(false);
  const [currentIndex, setIndex] = useState(0);
  const toggleModal = (i) => {
    setIndex(i);
    return openModal(!isOpen);
  };

  return (
    <>
      <ul className="ReactGridGallery">
        {images.map((image, i) => (
          <li key={i}>
            <img
              onClick={() => toggleModal(i)}
              alt={image.alt}
              src={image.src}
            />
            <p>{image.title}</p>
            {image.link ? (
              <a href={image.link}>
                <img
                  src={github}
                  alt="github logo"
                  style={{
                    margin: 0,
                    height: "2em",
                    width: "2em",
                    marginTop: "5rem",
                    backgroundColor: "none",
                  }}
                  className="linkLogo"
                ></img>
              </a>
            ) : null}
          </li>
        ))}
      </ul>
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
