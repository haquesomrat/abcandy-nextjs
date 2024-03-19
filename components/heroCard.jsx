import Image from "next/image";
import React from "react";
import slide1 from "@/public/slide1.jpg";

const HeroCard = () => {
  return (
    <div className="card">
      <div className="card-img-content">
        <Image className="ab-card-img" src={slide1} alt="Image 2" />
      </div>
      <div className="card-text-content">
        <div className="card-text-top">
          <span className="card-type">Design & creative</span>
          <span className="card-date">10 June 2023</span>
        </div>
        <div className="card-mid">
          <h4 className="card-headline text-truncate">
            Lorem ipsum dolor sit amet consectetur
          </h4>
          <p className="card-text line-clamp">
            Lorem ipsum dolor sit amet consectetur. Egestas aliquet quam
            consectetur elementum aenean fringilla amet blandit duis. Neque
            habitant odio donec adipiscing etiam lobortis volutpat est...
          </p>
        </div>
        <div className="card-btn-content">
          <button className="btn card-btn">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
