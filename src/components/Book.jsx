import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Book = ({ book }) => {
  console.log(book);
  return (
    <div className="book">
              <figure className="book__img--wrapper">
                <img 
                src={book.url} 
                alt={`${book.title} Book Cover`}
                className="book__img" />
              </figure>
            <a href=""> <h3 className="book__title"> {book.title}</h3></a>
             <div className="book__ratings">
              <FontAwesomeIcon icon="star" />
              <FontAwesomeIcon icon="star" />
              <FontAwesomeIcon icon="star" />
              <FontAwesomeIcon icon="star" />
              <FontAwesomeIcon icon="star" />
             </div>
             <div className="book__price">
              <span className="book__price--normal">$24.99</span>
              $19.99
             </div>
              <p className="book__summary--description">
                A novel by J.R.R. Tolkien that explores the history of Middle-earth,
                including the creation of the world and the events leading up to The Lord of the Rings.
              </p>
            </div>
  );
};

export default Book;  