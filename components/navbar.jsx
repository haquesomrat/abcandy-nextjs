import Image from "next/image";
import React from "react";
import brandLogo from "@/public/brand-logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import SidebarOffcanvas from "./Shared/sidebarOffcanvas";
import ContactModal from "./Shared/contactModal";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="header">
      <nav className="nav-bar container">
        <div className="row">
          {/* Left Nav Items */}
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
          {/* Brand Logo Container & Sidebar */}
          <div className="col-lg-4 col-12 d-flex justify-content-lg-center justify-content-between align-items-center">
            {/* Brand Logo */}
            <Link href="/" className="logo-link">
              <Image src={brandLogo} alt="brand logo" className="logo" />
            </Link>

            {/*Sidebar offcanvas */}
            <SidebarOffcanvas />
          </div>
          {/* Right Nav Items */}
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
                {/*Contact Modal */}
                <ContactModal
                  className={{ button: "nav-link btn text-light" }}
                  btnText="Contact Us"
                ></ContactModal>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
