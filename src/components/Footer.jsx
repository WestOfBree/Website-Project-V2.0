import React from "react";
import Logo from "../assets/Library.svg";

const Footer = () => {
  return (
   <footer>
    <div className="container">
      <div className="row row__column">
        <a href="/">
        <figure className="footer__logo">
            <img src={Logo} alt="Bookstore Logo" className="footer__logo--img" />
          </figure>
          </a>
          <div className="footer__link--list">
            <a href="/" className="footer__link">Home</a>
            <span className="footer__link no-cursor" onClick={() => alert("this button has no functionality")}>About</span>
            <a href="/features" className="footer__link">Books</a>
            <a href="/highlights" className="footer__link">Cart</a>
          </div>
          <div className="footer__copyright">
            &copy; 2024 Bookstore. All rights reserved.
          </div>

      </div>
    </div>
   </footer>
  );
}

export default Footer;