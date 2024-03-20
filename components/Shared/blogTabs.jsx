import React from "react";

const blogTabs = ["Sports", "Sports Car", "Bike"];

const BlogTabs = () => {
  return (
    <div className="btn-group d-flex gap-3 mb-lg-0 mb-3">
      {blogTabs.map((blogTab, idx) => (
        <a key={idx} href="#" className="btn feature-btn rounded-pill">
          {blogTab}
        </a>
      ))}
    </div>
  );
};

export default BlogTabs;
