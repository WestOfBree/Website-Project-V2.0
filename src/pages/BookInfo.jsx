import React from "react";
import { Link, useParams,} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Ratings from "../components/ui/Ratings";
import Price from "../components/ui/Price";

function BookInfo({ books }) {
  const { id } = useParams();
  const book = books.find((book) => +book.id === +id);
  return (
    <div className="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to={`/books`} className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
                <h2 className="book__selected--title--top">Back to Books</h2>
              </Link>
              <div className="book__selected">
                <figure className="book__selected--figure">
                  <img src={book.url} alt="" className="book__selected--img" />
                </figure>
                <div className="book__selected--description">
                  <h2 className="book__selected--title">{book.title}</h2>
                  <p className="book__selected--rating">
                    <Ratings rating={book.rating} />
                  </p>
                  <div className="book__selected--price">
                   <Price salePrice={book.salePrice} originalPrice={book.originalPrice} />
                  </div>
                  <div className="book__summary">
                    <h3 className="book__summary--title">Summary</h3>
                    <p className="book__summary--description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                      <p className="book__summary--description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </div>
                  <button className="btn btn__primary">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="book__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="book__selected--title--top">Recommended Books</h2>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default BookInfo;
