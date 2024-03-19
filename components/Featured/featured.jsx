"use client";
import React, { useState } from "react";
import Image from "next/image";
import blogOne from "@/public/blog-1.png";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import BlogCarousel from "./blogCarousel";
import BlogModal from "./blogModal";
import CardTopText from "./cardTopText";
import BlogTabs from "./blogTabs";
import CardHeadline from "./cardHeadline";
import BlogSearch from "./blogSearch";

const Featured = () => {
  const [showModal, setShowModal] = useState(false);

  //Handle Modal Close
  const handleCloseModal = () => setShowModal(false);
  //Hanle Modal Open
  const handleShowModal = () => setShowModal(true);

  return (
    <section className="featured container mb-4 pb-3">
      {/* featured header */}
      <div className="row align-items-center gy-3 mb-4 pb-3">
        {/* featured title and tabs */}
        <div className="col-lg-6 d-flex flex-wrap align-items-center justify-content-between justify-content-lg-start">
          <h2 className="featured-title h1 me-4 pe-3 fw-bold mb-lg-0 mb-3">
            Blog
          </h2>
          {/* blog tabs */}
          <BlogTabs />
        </div>

        {/* featured search bar */}
        <div className="col-lg-6">
          <BlogSearch />
        </div>
      </div>

      {/* featured blogs card container */}
      <div className="row g-4">
        {/* featured blog card with carousel */}
        <div className="col-lg-6">
          <div className="card fc-card border-0">
            <div className="fc-img-content">
              <BlogCarousel />
            </div>
            <div className="fc-card-text-content">
              <CardTopText type="design & creative" date="10 June 2023" />
              <div className="fc-card-mid">
                <CardHeadline>
                  Lorem ipsum dolor sit amet consectetur
                </CardHeadline>
                <p className="fc-card-text line-clamp">
                  Lorem ipsum dolor sit amet consectetur. Egestas aliquet quam
                  consectetur elementum aenean fringilla amet blandit duis.
                  Neque habitant odio donec adipiscing etiam lobortis volutpat
                  est...
                </p>
              </div>
              <div className="fc-card-bottom">
                <p className="fc-card-owner">
                  by <span className="fw-semibold">John Doe</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* featured blog card without carousel */}
        <div className="col-lg-6">
          <div className="card fc-card border-0 gray-shade">
            <div className="fc-img-content">
              <Image
                src={blogOne}
                alt="featured img"
                className="fc-card-img img-fluid w-100"
              />
              <a
                onClick={handleShowModal}
                className="watch-btn d-flex align-items-center"
              >
                Watch Now
                <svg
                  className="play-icon-circle"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9V168c0-8.7 4.7-16.7 12.3-20.9z" />
                </svg>
              </a>
            </div>
            <div className="fc-card-text-content">
              <CardTopText type="corporate" date="10 June 2023" />
              <div className="fc-card-mid">
                <CardHeadline>
                  Lorem ipsum dolor sit amet consectetur bibendum nunc in amet
                  auctor enim massa
                </CardHeadline>
              </div>
              <div className="card-btn-content">
                <button onClick={handleShowModal} className="card-btn btn mt-2">
                  Watch Now
                </button>
                {/* Blog Modal  */}
                <BlogModal
                  showModal={showModal}
                  handleCloseModal={handleCloseModal}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
