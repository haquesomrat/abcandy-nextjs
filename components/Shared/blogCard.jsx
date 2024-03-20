import Image from "next/image";
import React from "react";
import CardTopText from "./cardTopText";

const BlogCard = ({ blogImg }) => {
  return (
    <div className="card fc-card border-0">
      <div className="fc-img-content">
        <Image
          src={blogImg}
          alt="blog image"
          className="fc-card-img img-fluid"
        />
      </div>
      <div className="fc-card-text-content">
        <CardTopText type="design & creative" date="10 June 2023" />
        <div className="fc-card-mid">
          <h4 className="fc-card-headline text-truncate">
            Lorem ipsum dolor sit amet consectetur
          </h4>
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

export default BlogCard;
