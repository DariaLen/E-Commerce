import React from "react";
import "./Footer.css";
import footer_logo from "../Assets/logo_big.png";
import instagram_icon from "../Assets/instagram_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";
import pinterest_icon from "../Assets/pintester_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__logo">
        <img src={footer_logo} alt="footer logo" />
        <p>SHOPPER</p>
      </div>
      <ul className="footer__links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer__social-icons">
        <div className="footer__icons-container">
          <img src={instagram_icon} alt="instagram icon" />
        </div>
        <div className="footer__icons-container">
          <img src={pinterest_icon} alt="pinterest icon " />
        </div>
        <div className="footer__icons-container">
          <img src={whatsapp_icon} alt="whatsapp icon" />
        </div>
      </div>

      <div className="footer__copyright">
        <hr />
        <p>Copyright @ 2024 - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
