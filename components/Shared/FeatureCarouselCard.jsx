"use client";
import React from "react";
import BlogCarousel from "./blogCarousel";
import CardTopText from "./cardTopText";
import CardHeadline from "./cardHeadline";

const FeatureCarouselCard = () => {
  return (
    <div className="card fc-card border-0">
      <div className="fc-img-content">
        <BlogCarousel />
      </div>
      <div className="fc-card-text-content">
        <CardTopText type="design & creative" date="10 June 2023" />
        <div className="fc-card-mid">
          <CardHeadline>Lorem ipsum dolor sit amet consectetur</CardHeadline>
          <p className="fc-card-text line-clamp">
            Lorem ipsum dolor sit amet consectetur. Egestas aliquet quam
            consectetur elementum aenean fringilla amet blandit duis. Neque
            habitant odio donec adipiscing etiam lobortis volutpat est...
          </p>
        </div>
        <div className="fc-card-bottom">
          <p className="fc-card-owner">
            by <span className="fw-semibold">John Doe</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCarouselCard;
