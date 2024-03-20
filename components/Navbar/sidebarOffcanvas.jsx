"use client";
import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import ContactModal from "../Shared/contactModal";

const SidebarOffcanvas = () => {
  const [showModal, setShowModal] = useState(false);
  const [show, setShow] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  const handleToggle = () => setShow(!show);
  return (
    <>
      <button
        onClick={handleToggle}
        className="btn d-lg-none toggle-btn"
        type="button"
      >
        &#9776;
      </button>
      <Offcanvas show={show} placement="end" responsive="lg" scroll="false">
        <Offcanvas.Body className="d-lg-none">
          {/* Sidebar Nav items */}
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
              {/*Contact Modal */}
              <ContactModal
                className={{ button: "bg-con-btn text-light py-2" }}
                btnText="Contact Us"
              ></ContactModal>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default SidebarOffcanvas;
