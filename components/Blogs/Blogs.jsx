import Image from "next/image";
import React from "react";
import blog1 from "@/public/blog-1.png";
import blog2 from "@/public/blog-2.png";
import blog3 from "@/public/blog-3.png";
import blog4 from "@/public/blog-4.png";
import blog5 from "@/public/blog-5.png";
import blog6 from "@/public/blog-6.png";
import CardTopText from "../Featured/cardTopText";
import BlogModal from "../Featured/blogModal";
import WideBlogCard from "./wideBlogCard";
import LongBlogCard from "./longBlogCard";

const Blogs = () => {
  return (
    <section className="blog container pt-4">
      {/* blogs first row  */}
      <div className="row g-4">
        {/* wide blog card */}
        <div className="col-md-8 col-xl-9">
          <WideBlogCard />
        </div>
        {/* long blog card */}
        <div className="col-md-4 col-xl-3">
          <LongBlogCard />
        </div>
      </div>
      {/* blogs carousel */}
      {/* <div className="row g-4 py-5">
        <div className="col-lg-4">
          <div className="card fc-card border-0">
            <div className="fc-Image-content">
              <Image
                src={blog4}
                alt="blog 4"
                className="fc-card-Image Image-fluid"
              />
            </div>
            <div className="fc-card-text-content">
              <div className="card-top-text mb-3">
                <span className="card-type">design & creatice</span>
                <span className="card-date">10 June 2023</span>
              </div>
              <div className="fc-card-mid">
                <h4 className="fc-card-headline text-truncate">
                  Lorem ipsum dolor sit amet consectetur
                </h4>
                <p className="fc-card-text line-clamp">
                  Lorem ipsum dolor sit amet consectetur. Egestas aliquet quam
                  consectetur elementum aenean fringilla amet blandit duis.
                  Neque habitant odio donec adipiscing etiam lobortis volutpat
                  est...
                </p>
              </div>
              <div className="fc-card-bottom">
                <p className="fc-card-owner">
                  by <span className="fw-semibold">John Doe</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card fc-card border-0">
            <div className="fc-Image-content">
              <Image
                src={blog5}
                alt="blog 5"
                className="fc-card-Image Image-fluid"
              />
            </div>
            <div className="fc-card-text-content">
              <div className="card-top-text mb-3">
                <span className="card-type">marketing</span>
                <span className="card-date">10 June 2023</span>
              </div>
              <div className="fc-card-mid">
                <h4 className="fc-card-headline text-truncate">
                  Lorem ipsum dolor sit amet consectetur
                </h4>
                <p className="fc-card-text line-clamp">
                  Lorem ipsum dolor sit amet consectetur. Egestas aliquet quam
                  consectetur elementum aenean fringilla amet blandit duis.
                  Neque habitant odio donec adipiscing etiam lobortis volutpat
                  est...
                </p>
              </div>
              <div className="fc-card-bottom">
                <p className="fc-card-owner">
                  by <span className="fw-semibold">John Doe</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card fc-card border-0">
            <div className="fc-Image-content">
              <Image
                src={blog6}
                alt="blog 6"
                className="fc-card-Image Image-fluid"
              />
            </div>
            <div className="fc-card-text-content">
              <div className="card-top-text mb-3">
                <span className="card-type">tools</span>
                <span className="card-date">10 June 2023</span>
              </div>
              <div className="fc-card-mid">
                <h4 className="fc-card-headline text-truncate">
                  Lorem ipsum dolor sit amet consectetur
                </h4>
                <p className="fc-card-text line-clamp">
                  Lorem ipsum dolor sit amet consectetur. Egestas aliquet quam
                  consectetur elementum aenean fringilla amet blandit duis.
                  Neque habitant odio donec adipiscing etiam lobortis volutpat
                  est...
                </p>
              </div>
              <div className="fc-card-bottom">
                <p className="fc-card-owner">
                  by <span className="fw-semibold">John Doe</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 invisible-blog blog-loadable">
          <div className="card fc-card border-0">
            <div className="fc-Image-content">
              <Image
                src={blog5}
                alt="blog 5"
                className="fc-card-Image Image-fluid"
              />
            </div>
            <div className="fc-card-text-content">
              <div className="card-top-text mb-3">
                <span className="card-type">marketing</span>
                <span className="card-date">10 June 2023</span>
              </div>
              <div className="fc-card-mid">
                <h4 className="fc-card-headline text-truncate">
                  Lorem ipsum dolor sit amet consectetur
                </h4>
                <p className="fc-card-text line-clamp">
                  Lorem ipsum dolor sit amet consectetur. Egestas aliquet quam
                  consectetur elementum aenean fringilla amet blandit duis.
                  Neque habitant odio donec adipiscing etiam lobortis volutpat
                  est...
                </p>
              </div>
              <div className="fc-card-bottom">
                <p className="fc-card-owner">
                  by <span className="fw-semibold">John Doe</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 invisible-blog blog-loadable">
          <div className="card fc-card border-0">
            <div className="fc-Image-content">
              <Image
                src={blog6}
                alt="blog 6"
                className="fc-card-Image Image-fluid"
              />
            </div>
            <div className="fc-card-text-content">
              <div className="card-top-text mb-3">
                <span className="card-type">tools</span>
                <span className="card-date">10 June 2023</span>
              </div>
              <div className="fc-card-mid">
                <h4 className="fc-card-headline text-truncate">
                  Lorem ipsum dolor sit amet consectetur
                </h4>
                <p className="fc-card-text line-clamp">
                  Lorem ipsum dolor sit amet consectetur. Egestas aliquet quam
                  consectetur elementum aenean fringilla amet blandit duis.
                  Neque habitant odio donec adipiscing etiam lobortis volutpat
                  est...
                </p>
              </div>
              <div className="fc-card-bottom">
                <p className="fc-card-owner">
                  by <span className="fw-semibold">John Doe</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 invisible-blog blog-loadable">
          <div className="card fc-card border-0">
            <div className="fc-Image-content">
              <Image
                src={blog4}
                alt="blog 4"
                className="fc-card-Image Image-fluid"
              />
            </div>
            <div className="fc-card-text-content">
              <div className="card-top-text mb-3">
                <span className="card-type">design & creatice</span>
                <span className="card-date">10 June 2023</span>
              </div>
              <div className="fc-card-mid">
                <h4 className="fc-card-headline text-truncate">
                  Lorem ipsum dolor sit amet consectetur
                </h4>
                <p className="fc-card-text line-clamp">
                  Lorem ipsum dolor sit amet consectetur. Egestas aliquet quam
                  consectetur elementum aenean fringilla amet blandit duis.
                  Neque habitant odio donec adipiscing etiam lobortis volutpat
                  est...
                </p>
              </div>
              <div className="fc-card-bottom">
                <p className="fc-card-owner">
                  by <span className="fw-semibold">John Doe</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-btn-content text-center">
        <button className="card-btn btn blog-btn">Load More</button>
      </div> */}
    </section>
  );
};

export default Blogs;
