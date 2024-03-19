"use client";
import { useState } from "react";
import ContactModal from "../Shared/contactModal";

const TeamBanner = () => {
  const [showModal, setShowModal] = useState(false);

  //Handle Modal Close
  const handleCloseModal = () => setShowModal(false);
  //Hanle Modal Open
  const handleShowModal = () => setShowModal(true);

  return (
    <section className="team mb-5 container ">
      <div
        className="team-bg"
        style={{ backgroundImage: "url('/team-bg.png')" }}
      ></div>
      <div className="team-content container">
        <div className="blur-bg">
          <h2 className="team-headline">Creative team, intuitive solution</h2>
          <p className="team-text">
            Lorem ipsum dolor sit amet consectetur. Enim vitae hendrerit
            consectetur cras in nulla. Non suspendisse at ac enim. Facilisi
            nulla tortor nec mollis faucibus odio sodales.
          </p>
          <button
            className="team-btn btn-lg border-0"
            onClick={handleShowModal}
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
    </section>
  );
};

export default TeamBanner;
