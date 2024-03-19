import React from "react";

const BlogSearch = () => {
  return (
    <form action="post ">
      <div className="input-group d-flex">
        <span className="input-icon-content">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M13.8936 13.0096C14.9997 11.703 15.6667 10.0127 15.6667 8.16663C15.6667 4.02449 12.3088 0.666626 8.16666 0.666626C4.02452 0.666626 0.666656 4.02449 0.666656 8.16663C0.666656 12.3088 4.02452 15.6666 8.16666 15.6666C10.0127 15.6666 11.703 14.9996 13.0097 13.8935L15.2247 16.1085C15.4688 16.3526 15.8645 16.3526 16.1086 16.1085C16.3527 15.8645 16.3527 15.4688 16.1086 15.2247L13.8936 13.0096ZM14.4167 8.16663C14.4167 11.6184 11.6184 14.4166 8.16666 14.4166C4.71487 14.4166 1.91666 11.6184 1.91666 8.16663C1.91666 4.71484 4.71487 1.91663 8.16666 1.91663C11.6184 1.91663 14.4167 4.71484 14.4167 8.16663Z" />
          </svg>
        </span>
        <input
          type="text"
          placeholder="Search"
          className="form-control rounded-pill ps-5 border-0"
        />
      </div>
    </form>
  );
};

export default BlogSearch;
