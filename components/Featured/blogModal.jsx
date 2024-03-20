"use client";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";

const BlogModal = ({ className, btnText, children = "" }) => {
  const [showModal, setShowModal] = useState(false);

  //Handle Modal Close
  const handleCloseModal = () => setShowModal(false);
  //Hanle Modal Open
  const handleShowModal = () => setShowModal(true);
  return (
    <>
      <button onClick={handleShowModal} className={className?.button}>
        {btnText}
        {children}
      </button>
      <Modal className="videoModal" show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton closeVariant="white"></Modal.Header>
        <Modal.Body>
          <div className="video-content">
            <iframe
              className="video"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/NgrljB7UU34?si=SMASxRFWUBEUCjQe"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default BlogModal;
