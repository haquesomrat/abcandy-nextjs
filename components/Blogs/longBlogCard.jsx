import Image from "next/image";
import robotBanner from "@/public/robot-banner.png";
import React from "react";
import ContactModal from "../Shared/contactModal";

const LongBlogCard = () => {
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
        {/*Contact Modal */}
        <ContactModal
          className={{ button: "bg-con-btn border-0 text-light" }}
          btnText=" Let's Talk"
        ></ContactModal>
      </div>
    </div>
  );
};

export default LongBlogCard;
