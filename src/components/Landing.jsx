import React from "react";
import UndrawBooks from "../assets/undraw_reading-brown.svg";

const Landing = () => {
  return (
    <section id="landing">
      <header>
      <div className="header__container">
        <div className="header__description">
        <h1>Welcome to Bilbo's Library</h1>
        <h2>
          Your gateway to a world of <span className="yellow-text">books</span>{" "}
          and
          <span className="yellow-text"> knowledge</span>.
        </h2>
        <a href="#featured">
          <button className="btn">Browse Books</button>
        </a>
      </div>
      <figure className="header__img--wrapper">
        <img src={UndrawBooks} alt="Books Illustration" />
      </figure>
      </div>
      </header>
    </section>
  );
};

export default Landing;
