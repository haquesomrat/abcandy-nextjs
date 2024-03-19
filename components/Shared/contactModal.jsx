import React from "react";
import { Modal } from "react-bootstrap";

const ContactModal = ({ showModal, handleCloseModal }) => {
  return (
    <Modal className="contact-modal" show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton closeVariant="white">
        <h1 className="modal-title" id="staticBackdropLabel">
          Contact Us
        </h1>
      </Modal.Header>
      <Modal.Body>
        <form className="row g-3">
          <div className="col-md-6">
            <label for="inputEmail4" className="form-label">
              Your Name
            </label>
            <input
              type="text"
              className="form-control"
              id="inputEmail4"
              placeholder="Enter your name"
            />
          </div>
          <div className="col-md-6">
            <label for="inputPassword4" className="form-label">
              Your Email
            </label>
            <input
              type="email"
              className="form-control"
              id="inputPassword4"
              placeholder="Enter email"
            />
          </div>
          <div className="col-12">
            <label for="inputPassword4" className="form-label">
              Select Subject
            </label>
            <select className="form-select" aria-label="Default select example">
              <option selected>Select Subject</option>
              <option value="1">Web Design</option>
              <option value="2">Web Development</option>
              <option value="3">UI/UX Design</option>
            </select>
          </div>
          <div className="col-12">
            <label for="inputAddress2" className="form-label">
              Your Message
            </label>
            <textarea
              className="form-control"
              placeholder="Your Message"
              id="floatingTextarea2"
              style={{ height: "100px" }}
            ></textarea>
          </div>
          <div className="col-12 text-md-end">
            <button type="submit" className="btn modal-btn">
              Send Message
            </button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default ContactModal;
