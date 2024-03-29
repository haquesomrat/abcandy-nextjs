import React from "react";
import WideBlogCard from "./Shared/wideBlogCard";
import LongBlogCard from "./Shared/longBlogCard";
import BlogCards from "./Shared/BlogCards";

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

      {/* blog cards */}
      <BlogCards />
    </section>
  );
};

export default Blogs;
