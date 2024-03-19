"use client";
import React from "react";
import Image from "next/image";
import blogOne from "@/public/blog-1.png";
import blogTwo from "@/public/blog-2.png";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

const Featured = () => {
  return (
    <section class="featured container mb-4 pb-3">
      <div class="row align-items-center gy-3 mb-4 pb-3">
        <div class="col-lg-6 d-flex flex-wrap align-items-center justify-content-between justify-content-lg-start">
          <h2 class="featured-title h1 me-4 pe-3 fw-bold mb-lg-0 mb-3">Blog</h2>
          <div class="btn-group d-flex gap-3 mb-lg-0 mb-3">
            <a href="#" class="btn feature-btn rounded-pill">
              Sports
            </a>
            <a href="#" class="btn feature-btn rounded-pill">
              Sports Car
            </a>
            <a href="#" class="btn feature-btn rounded-pill">
              Bike
            </a>
          </div>
        </div>
        <div class="col-lg-6">
          <form action="post ">
            <div class="input-group d-flex">
              <span class="input-icon-content">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.8936 13.0096C14.9997 11.703 15.6667 10.0127 15.6667 8.16663C15.6667 4.02449 12.3088 0.666626 8.16666 0.666626C4.02452 0.666626 0.666656 4.02449 0.666656 8.16663C0.666656 12.3088 4.02452 15.6666 8.16666 15.6666C10.0127 15.6666 11.703 14.9996 13.0097 13.8935L15.2247 16.1085C15.4688 16.3526 15.8645 16.3526 16.1086 16.1085C16.3527 15.8645 16.3527 15.4688 16.1086 15.2247L13.8936 13.0096ZM14.4167 8.16663C14.4167 11.6184 11.6184 14.4166 8.16666 14.4166C4.71487 14.4166 1.91666 11.6184 1.91666 8.16663C1.91666 4.71484 4.71487 1.91663 8.16666 1.91663C11.6184 1.91663 14.4167 4.71484 14.4167 8.16663Z" />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Search"
                class="form-control rounded-pill ps-5 border-0"
              />
            </div>
          </form>
        </div>
      </div>
      <div class="row g-4">
        <div class="col-lg-6">
          <div class="card fc-card border-0">
            <div class="fc-img-content">
              <Splide
                options={{
                  type: "loop",
                  perMove: 1,
                  speed: 800,
                  updateOnMove: true,
                  gap: "1.875rem",
                  autoplay: "play",
                  arrows: false,
                }}
                class="fc-carous"
                role="group"
                aria-label="Splide Basic HTML Example"
              >
                <SplideTrack>
                  <SplideSlide>
                    <Image
                      src={blogTwo}
                      alt="featured img"
                      class="fc-card-img img-fluid w-100"
                    />
                  </SplideSlide>
                  <SplideSlide class="splide__slide">
                    <Image
                      src={blogOne}
                      alt="featured img"
                      class="fc-card-img img-fluid"
                    />
                  </SplideSlide>
                  <SplideSlide class="splide__slide">
                    <Image
                      src={blogTwo}
                      alt="featured img"
                      class="fc-card-img img-fluid"
                    />
                  </SplideSlide>
                </SplideTrack>
              </Splide>
            </div>
            <div class="fc-card-text-content">
              <div class="card-top-text mb-3">
                <span class="card-type">design & creatice</span>
                <span class="card-date">10 June 2023</span>
              </div>
              <div class="fc-card-mid">
                <h4 class="fc-card-headline text-truncate">
                  Lorem ipsum dolor sit amet consectetur
                </h4>
                <p class="fc-card-text line-clamp">
                  Lorem ipsum dolor sit amet consectetur. Egestas aliquet quam
                  consectetur elementum aenean fringilla amet blandit duis.
                  Neque habitant odio donec adipiscing etiam lobortis volutpat
                  est...
                </p>
              </div>
              <div class="fc-card-bottom">
                <p class="fc-card-owner">
                  by <span class="fw-semibold">John Doe</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="card fc-card border-0 gray-shade">
            <div class="fc-img-content">
              <Image
                src={blogOne}
                alt="featured img"
                class="fc-card-img img-fluid w-100"
              />
              <a
                class="watch-btn d-flex align-items-center"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Watch Now<i class="fa-regular fa-circle-play ps-3"></i>
              </a>
            </div>
            <div class="fc-card-text-content">
              <div class="card-top-text mb-3">
                <span class="card-type">design & creatice</span>
                <span class="card-date">10 June 2023</span>
              </div>
              <div class="fc-card-mid">
                <h4 class="fc-card-headline line-clamp">
                  Lorem ipsum dolor sit amet consectetur bibendum nunc in amet
                  auctor enim massa
                </h4>
              </div>
              <div class="card-btn-content">
                <button
                  class="card-btn btn mt-2"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Watch Now
                </button>
                {/* Modal  */}
                <div
                  class="modal fade videoModal"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                      <div class="modal-body">
                        <div class="text-end">
                          <a
                            href="#"
                            type="button"
                            class="modal-btn-close text-decoration-none text-light"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          >
                            <i class="fa-solid fa-2xl fa-xmark"></i>
                          </a>
                        </div>
                        <div class="video-content">
                          <iframe
                            class="video"
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/r6tH55syq0o"
                            title="How programmers flex on each other"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
