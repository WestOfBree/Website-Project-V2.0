import React from "react";

function Cart({ books }) {
  
  return (
   <div className="books__body">
    <main id="books__main">
      <div className="books__container">
        <div className="row">
          <div className="books__selected--top">
            <h2 className="cart__title">Your Cart</h2>
            <div className="cart">
              <div className="cart__header">
                <div className="cart__book">Item</div>
                <div className="cart__quantity">Quantity</div>
                <div className="cart__total">Total</div>
              </div>
              <div className="cart__body">
                <div className="cart__item">
                  <div className="cart__book">
                    <img src="/path/to/book/image.jpg" alt="" className="cart__book--img" />
                    <div className="cart__book--info">
                      <span className="cart__book--title">Book Title</span>
                      <span className="cart__book--price">$10.00</span>
                      <button className="cart__book--remove">Remove</button>
                    </div>
                  </div>
                  <div className="cart__quantity">
                    <input type="number" min="1" defaultValue="1" className="cart__quantity--input" />
                  </div>
                  <div className="cart__total">
                    $10.00
                  </div>
                </div>
              </div>
            </div>
            <div className="cart__summary">
              <div className="cart__summary--item cart__summary--sub-total">
                <span>Subtotal</span>
                <span>$10.00</span>
              </div>
              <div className="cart__summary--item">
                <span>Tax</span>
                <span>$0.80</span>
              </div>
              <div className="cart__summary--item cart__summary--total">
                <span>Total</span>
                <span>$10.80</span>
              </div>
              <button className="btn btn__checkout no-cursor" onClick={() => alert("this button has no functionality yet")}>Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </main>
   </div>
  );
}

export default Cart;