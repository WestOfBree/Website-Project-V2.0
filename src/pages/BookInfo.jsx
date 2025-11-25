import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Ratings from "../components/ui/Ratings";
import Price from "../components/ui/Price";

function BookInfo({ book }) {
  return (
    <div className="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to={`/books`} className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
                <h2 className="book__selected--title-top">Back to Books</h2>
              </Link>
              <div className="book__selected">
                <figure className="book__selected--figure">
                  <img src={book.url} alt="" className="book__selected--img" />
                </figure>
                <div className="book__selected--description">
                  <h2 className="book__selected--title">{book.title}</h2>
                  <h3>by {book.author}</h3>
                  <p className="book__selected--rating">
                    <Ratings rating={book.rating} />
                  </p>
                  <div className="book__selected--price">
                   <Price salePrice={book.salePrice} originalPrice={book.originalPrice} />
                  </div>
                  <button className="btn btn__primary">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default BookInfo;
