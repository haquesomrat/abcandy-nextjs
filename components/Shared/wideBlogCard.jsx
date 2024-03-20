import Image from "next/image";
import React from "react";
import CardTopText from "./cardTopText";
import BlogModal from "./blogModal";
import blog3 from "@/public/blog-3.png";

const WideBlogCard = () => {
  return (
    <div className="card fc-card border-0">
      <div className="fc-Image-content">
        <Image src={blog3} alt="blog 3" className="fc-card-img img-fluid" />
      </div>
      <div className="fc-card-text-content">
        <CardTopText type="develop" date="10 June 2023" />
        <div className="fc-card-mid">
          <h2 className="fc-card-headline text-truncate">
            Lorem ipsum dolor sit amet consectetur
          </h2>
          <p className="fc-card-text line-clamp">
            Lorem ipsum dolor sit amet consectetur. Egestas aliquet quam
            consectetur elementum aenean fringilla amet blandit duis. Neque
            habitant odio donec adipiscing etiam lobortis volutpat est...
          </p>
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

export default WideBlogCard;
