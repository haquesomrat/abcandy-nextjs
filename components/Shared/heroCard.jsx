import Image from "next/image";
import React from "react";

const HeroCard = ({ HeroImg }) => {
  return (
    <div className="card">
      {/* card image content */}
      <div className="card-img-content">
        <Image className="ab-card-img" src={HeroImg} alt="Image 2" />
      </div>
      {/* card text content */}
      <div className="card-text-content">
        <div className="card-text-top">
          <span className="card-type">Graphics Design</span>
          <span className="card-date">16 July 2023</span>
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
