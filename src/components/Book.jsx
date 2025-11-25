import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Book = ({ book }) => {
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
            {/* {new Array(4).fill(0).map(() => <FontAwesomeIcon icon="star" />)} */}
              {Array.from({ length: Math.floor(book.rating) }, (_, index) => (
                <FontAwesomeIcon icon="star" key={index} className="book__star--icon" />
              ))}
              {book.rating % 1 !== 0 && (
                <FontAwesomeIcon icon="star-half" className="book__star--icon" />
              )}
             </div>
             <div className="book__price">
              {book.salePrice ? (<><span className="book__price--normal">${book.originalPrice.toFixed(2)}</span>
              ${book.salePrice.toFixed(2)}</>) : (<>${book.originalPrice.toFixed(2)}</>)
            }
             </div>
            </div>
  );
};

export default Book;  