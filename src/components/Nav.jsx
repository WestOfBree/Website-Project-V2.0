import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LibraryLogo from "../assets/Library.svg";


const Nav = () => {
  return (
    <nav>
      <div className="nav__container">
        <a href="/">
          <img src={LibraryLogo} className="logo" alt="Logo" />
        </a>
        <ul>
          <li className="nav__list">
            <a href="/" className="nav__link">
              Home
            </a>
          </li>
          <li className="nav__list">
            <a href="/" className="nav__link">
              About
            </a>
          </li>
          <li className="nav__list">
            <a href="/" className="nav__link">
              Contact
            </a>
          </li>
          <button className="btn__menu">
            <FontAwesomeIcon icon="bars" />
          </button>
          <li className="nav__icon">
            <a href="/" className="nav__link">
              <FontAwesomeIcon icon="shopping-cart" />
              <span className="cart__length">3</span>
            </a>
          </li>
        </ul>
        <div className="menu__backdrop">
          <button className="btn__menu btn__menu--close">
            <FontAwesomeIcon icon="times" />
          </button>
          <ul className="menu__links">
            <li className="nav__list">
            <a href="/" className="nav__link">
              Home
            </a>
          </li>
          <li className="nav__list">
            <a href="/" className="nav__link">
              About
            </a>
          </li>
          <li className="nav__list">
            <a href="/" className="nav__link">
              Contact
            </a>
          </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
