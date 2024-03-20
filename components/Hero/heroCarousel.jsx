"use client";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import React from "react";
import HeroCard from "./heroCard";

const HeroCarousel = ({ heroCarouselOptions, HeroImages }) => {
  return (
    <Splide
      hasTrack={false}
      options={heroCarouselOptions}
      aria-label="My Favorite Images"
    >
      {/* carousel content */}
      <SplideTrack>
        {HeroImages.map((HeroImg, idx) => (
          <SplideSlide key={idx}>
            <HeroCard HeroImg={HeroImg} />
          </SplideSlide>
        ))}
      </SplideTrack>
      {/* carousel custom arrows */}
      <div className="splide__arrows">
        {/* previous arrow button */}
        <button className="splide__arrow splide__arrow--prev">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
          </svg>
        </button>
        {/* next arrow button */}
        <button className="splide__arrow splide__arrow--next">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
          </svg>
        </button>
      </div>
    </Splide>
  );
};

export default HeroCarousel;
