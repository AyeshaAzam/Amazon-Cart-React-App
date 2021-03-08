import React from "react";
import "./CartTotal.css";
import NumberFormat from "react-number-format";

//for Number formatting:
//https://www.npmjs.com/package/react-number-format
//npm install react-number-format --save

function CartTotal({ items }) {
  //create function
  //maps through items
  //calculate the total price

  const getTotalPrice = () => {
    let sum = 0;
    items.map((item, index) => {
      sum += item.price * item.quantity;
    });
    return sum;
  };

  const getTotalItems = () => {
    let totalItems = 0;
    items.map((item) => {
      totalItems += parseInt(item.quantity);
    });

    return totalItems;
  };

  return (
    <div title="Just for testing" className="CartTotal">
      <h3 title="Subtotal is">
        Subtotal ({getTotalItems()} items)
        <span>${getTotalPrice().toFixed(2)}</span>
      </h3>
      <button className="CartTotal_checkout">Proceed to checkout</button>
    </div>
  );
}

export default CartTotal;
