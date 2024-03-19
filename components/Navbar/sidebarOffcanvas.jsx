import React from "react";
import { Offcanvas } from "react-bootstrap";

const SidebarOffcanvas = ({ show, handleShowModal }) => {
  return (
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
          <li onClick={handleShowModal} className="nav-item">
            <a href="#" className="bg-con-btn text-light py-2">
              Contact Us
            </a>
          </li>
        </ul>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default SidebarOffcanvas;
