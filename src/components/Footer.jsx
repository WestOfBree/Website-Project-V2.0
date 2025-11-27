import React from "react";
import Logo from "../assets/Library.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
   <footer>
    <div className="container">
      <div className="row row__column">
        <Link to="/">
        <figure className="footer__logo">
            <img src={Logo} alt="Bookstore Logo" className="footer__logo--img" />
          </figure>
        </Link>
        <div className="footer__link--list">
            <Link to="/" className="footer__link">Home</Link>
            <span className="footer__link no-cursor" onClick={() => alert("this button has no functionality yet")}>About</span>
            <Link to="/books" className="footer__link">Books</Link>
            <Link to="/cart" className="footer__link">Cart</Link>
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