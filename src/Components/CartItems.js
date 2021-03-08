import React from "react";
import CartItem from "./CartItem";
import "./CartItems.css";

//BEM Convention--> Always say the component's name first then the elements name...

// const props = {
//   items: [
//     {},
//     {},
//     {}
//   ]
// }

function CartItems({ items, setCartItems }) {
  console.log("´Props", items[0].title);

  const changeQuantityItem = (e, index) => {
    console.log("Selected Quantity");
    console.log("what is the e value: ", e.target.value);
    console.log("what is the index: ", index);

    // we have the select on quantity - e.target.value
    //pass in the index
    //using the index we need to change the quantity to the selected one from the selected option.
    // when we change the state then it re-reders
    // so we update the items ( in App.js)

    const newUpdatedItems = [...items];
    newUpdatedItems[index].quantity = e.target.value;
    setCartItems(newUpdatedItems);
    //console.log("What is the Quantity", newUpdatedItems);
  };

  //  Delete Function.....
  const DeleteItem = (indexToBeDeleted) => {
    console.log(" indexToBeDeleted", indexToBeDeleted);
    //create DeleteItem() = in CartItem
    //pass the function from CartItems to CartItem
    //pass the index to know which item to delete
    //.filter() es6 to filter out the item => based on the index
    //Update the items using the setCartItems function
    const deletedItem = items.filter(
      (currentItem, index) =>
        //we want to return array with the items that were not deleted
        index !== indexToBeDeleted
    );
    console.log("deletedItem", deletedItem);
    setCartItems(deletedItem);
  };

  return (
    <div className="CartItems">
      <h1>Shopping Cart</h1>
      <hr />
      <div className="CartItems-items">
        {items.map((item, index) => {
          return (
            <CartItem
              index={index}
              item={item}
              key={index}
              changeQuantityItem={changeQuantityItem}
              onDelete={DeleteItem}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CartItems;
