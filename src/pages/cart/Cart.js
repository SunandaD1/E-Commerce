import React, { useContext } from "react";
import { books } from "../../products";
import { ShopContext } from "../../context/shop-context";
import {CartItem} from "./Cart-item";
import "./cart.css";
import {useNavigate} from "react-router-dom";
import {Form, Button, Container} from "react-bootstrap";

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount()

  const navigate = useNavigate()

  const handleCheckout = () => {
  
  const confirmed = window.confirm(
      "Order Confirmed!"
    );
    if (confirmed) {
      navigate("/survey");
    }
  };


  return (
    <div className="cart">
      <div>
        <h1 className="boldonse-regular"> <br></br><br></br> Your Cart Items </h1> <br></br>
      </div>
      <div className="cartItems">
        {books.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
          return null;
        })}
      </div>
    
    {totalAmount>0 ? (
      <div className="checkout" >
        <h2> <b> Subtotal: $ {totalAmount} </b> </h2>

         <Container className="mt-4">
            <h1>Checkout Information</h1>

            <Form>
              <Form.Group className="mb-3" controlId="formFullName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter full name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Enter address" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPhone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="tel" placeholder="Enter phone number" />
              </Form.Group>

            </Form>
          </Container>



        <button onClick={() => navigate("/")}> Go Back </button>
        <button variant="success" onClick={handleCheckout}> Checkout </button> 
      </div> )

      : (
        <h3> <br></br> Your Cart is Empty</h3>
      )}
    </div>
  );
};
