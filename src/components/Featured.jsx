import React from "react";
import Book from "./Book";
import { books } from "../data";

const Featured = () => {
  return (
    <section id="featured">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Featured <span className="colored-text">Books</span>
          </h2>
          <div className="featured__wrapper">
            {books
              .filter((book) => book.rating === 5)
              .slice(0, 4)
              .map((book) => (
                <Book book={ book } />
              ))}

            <Book />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
