import React, { useState } from "react";

function Item({ name, category }) {
  const [addToCart, setAddToCart] = useState('false')

  const className = addToCart ? "" : "in-cart"

  function handleAddToCart() {
    setAddToCart(addToCart => !addToCart)
  }

  return (
    <li className={className}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddToCart}>{addToCart ? "Add to Cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
