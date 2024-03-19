import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import React from "react";
import blogOne from "@/public/blog-1.png";
import blogTwo from "@/public/blog-2.png";

const blogImages = [blogOne, blogTwo, blogOne];

const blogCarouselOptions = {
  type: "loop",
  perMove: 1,
  speed: 800,
  updateOnMove: true,
  gap: "1.875rem",
  autoplay: "play",
  arrows: false,
};

const BlogCarousel = () => {
  return (
    <Splide
      options={blogCarouselOptions}
      className="fc-carous"
      aria-label="My Blog Images"
    >
      {blogImages.map((BlogImg, idx) => (
        <SplideSlide key={idx}>
          <Image
            className="fc-card-img img-fluid"
            src={BlogImg}
            alt="Image 1"
          />
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default BlogCarousel;
