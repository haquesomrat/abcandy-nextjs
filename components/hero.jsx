"use client";

import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import HeroCard from "./heroCard";
import slide1 from "@/public/slide1.jpg";
import slide2 from "@/public/slide2.jpg";
import slide3 from "@/public/slide3.jpg";

const HeroImages = [slide1, slide2, slide1, slide3];
const heroCarouselOptions = {
  type: "loop",
  perMove: 1,
  speed: 800,
  updateOnMove: true,
  gap: "1.875rem",
  padding: "1rem",
  autoplay: "play",
  focus: "center",
  arrows: false,
  scroll: {
    duration: 0.3,
  },
  mediaQuery: "min",
  breakpoints: {
    576: {
      arrows: true,
      arrows: {
        prev: {
          className: "splide__arrow--prev splide__arrow--focus",
        },
        next: {
          className: "splide__arrow--next splide__arrow--focus",
        },
      },
      padding: "10%",
      gap: "1rem",
    },
    768: {
      padding: "15%",
      gap: ".5rem",
    },
    992: { padding: "20%", gap: "1.875rem" },
  },
};

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg-content">
        <div
          style={{
            backgroundImage: "url('/site-bg.svg')",
          }}
          className="hero-bg"
        />
      </div>
      <div className="carousel-container hero-carousel">
        <Splide
          hasTrack={false}
          options={heroCarouselOptions}
          aria-label="My Favorite Images"
        >
          {/* splide content */}
          <SplideTrack>
            {HeroImages.map((HeroImg) => (
              <SplideSlide key={HeroImg}>
                <HeroCard HeroImg={HeroImg} />
              </SplideSlide>
            ))}
          </SplideTrack>
          {/* splide arrows */}
          <div className="splide__arrows">
            <button className="splide__arrow splide__arrow--prev">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
              </svg>
            </button>
            <button className="splide__arrow splide__arrow--next">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
              </svg>
            </button>
          </div>
        </Splide>
      </div>
    </section>
  );
};

export default Hero;
