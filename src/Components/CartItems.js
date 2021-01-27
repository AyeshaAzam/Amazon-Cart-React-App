import React from "react";
import CartItem from "./CartItem";
import "./CartItems.css";

//BEM Convention--> Always say the component's name first then the elements name...

function CartItems() {
  return (
    <div className="CartItems">
      <h1>Shopping Cart</h1>
      <hr />
      <div className="CartItems-items">
        <CartItem />
      </div>
    </div>
  );
}

export default CartItems;
