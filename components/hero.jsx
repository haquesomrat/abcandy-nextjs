import React from "react";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import slide1 from "@/public/slide1.jpg";
import slide2 from "@/public/slide2.jpg";
import slide3 from "@/public/slide3.jpg";
import HeroCarousel from "./Shared/heroCarousel";

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
    duration: 0.5,
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
      {/* hero background */}
      <div className="hero-bg-content">
        <div
          style={{
            backgroundImage: "url('./site-bg.svg')",
          }}
          className="hero-bg"
        />
      </div>
      {/* hero banner carousel */}
      <div className="carousel-container hero-carousel">
        <HeroCarousel
          heroCarouselOptions={heroCarouselOptions}
          HeroImages={HeroImages}
        />
      </div>
    </section>
  );
};

export default Hero;
