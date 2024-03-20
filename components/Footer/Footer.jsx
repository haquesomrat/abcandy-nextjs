import React from "react";
import FooterSocials from "./FooterSocials";

const Footer = () => {
  return (
    <footer className="footer text-center">
      <div className="footer-content me-md-auto text-md-start container">
        <h4 className="mb-3">Connect with us</h4>
        {/* footer social links */}
        <FooterSocials />
      </div>
      <div className="footer-copyright-content container gy-md-0 mx-auto">
        <div className="row">
          <div className="col-md-6 text-md-start p-0">
            <p className="copyright-text mb-2">
              © 2023 ABCandy Bangladesh Ltd.
            </p>
          </div>
          <div className="col-md-6 text-md-end p-0">
            <a href="#" className="terms-text">
              Terms of Use
            </a>
            &nbsp;&&nbsp;
            <a href="#" className="terms-text">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
