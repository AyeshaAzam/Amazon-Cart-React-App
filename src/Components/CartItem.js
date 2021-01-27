import React from "react";
import "./CartItem.css";

function CartItem() {
  return (
    <div className="CartItem">
      <div className="CartItem-image">
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/81SGb5l%2BlZL._AC_SX679_.jpg"
          alt="IPad Pro"
        />
      </div>
      <div className="CartItem-info">
        <div className="CartItem-title">
          <h3>Apple IPad Pro</h3>
        </div>
        <div className="CartItem-info-stock">
          <p>In Stock</p>
        </div>
        <div className="CartItem-actions">
          <div className="CartItem-quantity">
            <button>Quality</button>
          </div>
          <div className="CartItem-divider">|</div>
          <div className="CartItem-delete">
            <p>Delete</p>
          </div>
        </div>
      </div>
      <div className="CartItem-price"> $257: 00</div>
    </div>
  );
}

export default CartItem;
