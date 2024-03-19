"use client";
import Image from "next/image";
import React from "react";
import brandLogo from "@/public/brand-logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [show, setShow] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(!show);

  return (
    <header className="header">
      <nav className="nav-bar container">
        <div className="row">
          <div className="col-lg-4">
            <ul className="nav-list justify-content-start d-none d-lg-flex">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  What&apos;s new?
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-12 d-flex justify-content-lg-center justify-content-between align-items-center">
            <a href="./index.html" className="logo-link">
              <Image src={brandLogo} alt="brand logo" className="logo" />
            </a>

            <button
              onClick={handleShow}
              className="btn d-lg-none toggle-btn"
              type="button"
            >
              &#9776;
            </button>
            {/* offcanvas */}
            <Offcanvas
              show={show}
              onHide={handleClose}
              placement="end"
              responsive="lg"
              scroll="false"
            >
              <Offcanvas.Body className="d-lg-none">
                <ul className="nav-list text-center">
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Services
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      What&apos;s new?
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Community
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Blog
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#"
                      className="bg-con-btn text-light py-2"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </Offcanvas.Body>
            </Offcanvas>
          </div>
          <div className="col-lg-4">
            <ul className="nav-list d-none d-lg-flex justify-content-end">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Community
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Blog
                </a>
              </li>
              <li className="nav-item bg-con-btn mx-xxl-2 d-flex align-items-center">
                <a
                  onClick={handleShowModal}
                  href="#"
                  class="nav-link btn text-light"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          {/* Modal */}
          <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <h1 className="modal-title" id="staticBackdropLabel">
                Contact Us
              </h1>
              <a
                href="#"
                type="button"
                className="modal-btn-close text-decoration-none text-light"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="fa-solid fa-xl fa-xmark"></i>
              </a>
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
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
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
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
