import React from "react";
import BlogTabs from "./blogTabs";
import BlogSearch from "./blogSearch";
import FeatureCarouselCard from "./FeatureCarouselCard";
import FeatureCard from "./FeatureCard";

const Featured = () => {
  return (
    <section className="featured container mb-4 pb-3">
      {/* featured header */}
      <div className="row align-items-center gy-3 mb-4 pb-3">
        {/* featured title and tabs */}
        <div className="col-lg-6 d-flex flex-wrap align-items-center justify-content-between justify-content-lg-start">
          <h2 className="featured-title h1 me-4 pe-3 fw-bold mb-lg-0 mb-3">
            Blog
          </h2>
          {/* blog tabs */}
          <BlogTabs />
        </div>
        {/* featured search bar */}
        <div className="col-lg-6">
          <BlogSearch />
        </div>
      </div>

      {/* featured blogs card container */}
      <div className="row g-4">
        {/* featured blog card with carousel */}
        <div className="col-lg-6">
          <FeatureCarouselCard />
        </div>

        {/* featured blog card without carousel */}
        <div className="col-lg-6">
          <FeatureCard />
        </div>
      </div>
    </section>
  );
};

export default Featured;
