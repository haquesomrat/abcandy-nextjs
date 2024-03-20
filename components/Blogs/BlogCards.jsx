"use client";
import React, { useState } from "react";
import blog4 from "@/public/blog-4.png";
import blog5 from "@/public/blog-5.png";
import blog6 from "@/public/blog-6.png";
import BlogCard from "./blogCard";

const blogCards = [
  {
    img: blog4,
    type: "design & creative",
    date: "10 June 2023",
  },
  {
    img: blog5,
    type: "marketing",
    date: "10 June 2023",
  },
  {
    img: blog6,
    type: "tools",
    date: "10 June 2023",
  },
];

const BlogCards = () => {
  const [isBtnClicked, setisBtnClicked] = useState(false);

  const handleLoadMore = () => {
    setisBtnClicked(true);
  };

  return (
    <>
      <div className="row g-4 py-5">
        {/* visible blog cards */}
        {blogCards.map((blogCard) => (
          <div key={blogCard.type} className="col-lg-4">
            <BlogCard blogImg={blogCard.img} />
          </div>
        ))}
        {/* invisible blog cards */}
        {blogCards.map((blogCard) => (
          <div
            key={blogCard.type}
            className={`${
              isBtnClicked ? "invisible-blog" : "invisible-blog blog-loadable"
            } col-lg-4 `}
          >
            <BlogCard blogImg={blogCard.img} />
          </div>
        ))}
      </div>
      <div className="card-btn-content text-center">
        <a
          onClick={handleLoadMore}
          className={`card-btn btn ${
            isBtnClicked ? "blog-btn blog-btn-vanish" : "blog-btn"
          }`}
        >
          Load More
        </a>
      </div>
    </>
  );
};

export default BlogCards;
