import React from "react";
import "./CartItem.css";

//"https://images-na.ssl-images-amazon.com/images/I/81SGb5l%2BlZL._AC_SX679_.jpg"

//How to access the public folder: process.env.PUBLIC_URL
//https://create-react-app.dev/docs/using-the-public-folder/

function CartItem({ item, changeQuantityItem, index, onDelete }) {
  let { title, stock, image, price, quantity } = item;
  console.log(item, "what is in image");
  console.log(index, "what is the index");

  //I saw in one of the projects that if we don't need the
  //first parameter of the function, we can put something like __ , is that right?

  return (
    <div className="CartItem">
      <div className="CartItem-image">
        <img
          src={process.env.PUBLIC_URL + "/items/" + item.image}
          alt="IPad Pro"
        />
      </div>
      <div className="CartItem-info">
        <div className="CartItem-title">
          <h3>{title}</h3>
        </div>
        <div className="CartItem-info-stock">
          <p>In Stock</p>
        </div>
        <div className="CartItem-actions">
          <div className="CartItem-quantity">
            <select
              onChange={(e) => changeQuantityItem(e, index)}
              value={item.quantity}
            >
              <option value="0">Qty: 0</option>
              <option value="1">Qty: 1</option>
              <option value="2">Qty: 2</option>
              <option value="3">Qty: 3</option>
              <option value="4">Qty: 4</option>
              <option value="5">Qty: 5</option>
              <option value="6">Qty: 6</option>
            </select>
          </div>
          <div className="CartItem-divider">|</div>
          <div className="CartItem-delete" onClick={() => onDelete(index)}>
            <p>Delete</p>
          </div>
        </div>
      </div>
      <div className="CartItem-price">${price}</div>
    </div>
  );
}

export default CartItem;
