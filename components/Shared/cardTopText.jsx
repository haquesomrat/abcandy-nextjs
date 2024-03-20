import React from "react";

const CardTopText = ({ type, date }) => {
  return (
    <div className="card-top-text mb-3">
      <span className="card-type">{type}</span>
      <span className="card-date">{date}</span>
    </div>
  );
};

export default CardTopText;
