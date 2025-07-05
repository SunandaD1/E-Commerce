import React, { useContext } from "react";
import "./Shop.css";
import {ShopContext} from "../../context/shop-context"

export const Product = (props) => {
  const {id, category, type, productName,price,image} = props.data;
  const {addToCart, cartItems} = useContext(ShopContext)

  const cartItemsAmount = cartItems[id]
  return (
    <div className="product">
      <img src={image}></img>
      <div className="ibm-plex-serif">
        <p> <br></br> <b> {productName} </b></p>
        <p>{category}</p>
        <p>${price}</p>
      </div>
      <button className="addToCartBttn" onClick={()=>addToCart(id)}>
        Add to Cart {cartItemsAmount>0 && <>({cartItemsAmount})</>}
      </button>
    </div>
  );
}; 
