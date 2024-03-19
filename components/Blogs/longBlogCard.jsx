"use client";
import Image from "next/image";
import robotBanner from "@/public/robot-banner.png";
import React, { useState } from "react";
import ContactModal from "../Shared/contactModal";

const LongBlogCard = () => {
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);

  //Handle Modal Close
  const handleCloseModal = () => setShowModal(false);
  //Hanle Modal Open
  const handleShowModal = () => setShowModal(true);
  //Handle Sidebar Toogle
  const handleToggle = () => setShow(!show);
  return (
    <div className="card border-0">
      <div className="blog-card-img-top h-100">
        <Image
          src={robotBanner}
          alt="robot banner"
          className="blog-card-img h-100 w-100"
        />
      </div>
      <div className="blog-card-img-overlay">
        <h2 className="blog-overlay-head">
          Do you need any creative service for your business?
        </h2>
        <button
          onClick={handleShowModal}
          className="bg-con-btn border-0 text-light"
        >
          Let&apos;s Talk
        </button>
        {/*Contact Modal */}
        <ContactModal
          showModal={showModal}
          handleCloseModal={handleCloseModal}
        />
      </div>
    </div>
  );
};

export default LongBlogCard;
