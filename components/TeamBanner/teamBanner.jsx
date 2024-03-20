import ContactModal from "../Shared/contactModal";

const TeamBanner = () => {
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
          {/*Contact Modal */}
          <ContactModal
            className={{ button: "team-btn border-0 btn-lg " }}
            btnText=" Let's Talk"
          ></ContactModal>
        </div>
      </div>
    </section>
  );
};

export default TeamBanner;
