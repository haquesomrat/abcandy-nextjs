import Image from "next/image";
import React from "react";
import BlogModal from "./blogModal";
import blogOne from "@/public/blog-1.png";
import CardTopText from "./cardTopText";
import CardHeadline from "./cardHeadline";

const FeatureCard = () => {
  return (
    <div className="card fc-card border-0 gray-shade">
      <div className="fc-img-content">
        <Image
          src={blogOne}
          alt="featured img"
          className="fc-card-img img-fluid w-100"
        />
        {/* Blog Modal  */}
        <BlogModal
          className={{
            button: "watch-btn border-0 text-light d-flex align-items-center",
          }}
          btnText="Watch Now"
        >
          <svg
            className="play-icon-circle"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9V168c0-8.7 4.7-16.7 12.3-20.9z" />
          </svg>
        </BlogModal>
      </div>
      <div className="fc-card-text-content">
        <CardTopText type="corporate" date="10 June 2023" />
        <div className="fc-card-mid">
          <CardHeadline>
            Lorem ipsum dolor sit amet consectetur bibendum nunc in amet auctor
            enim massa
          </CardHeadline>
        </div>
        <div className="card-btn-content">
          {/* Blog Modal  */}
          <BlogModal
            className={{ button: "card-btn btn mt-2" }}
            btnText="Watch Now"
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
