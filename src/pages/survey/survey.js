import React from "react";
import {Form, Button, Container} from "react-bootstrap";
import "./survey.css";
import {useNavigate} from "react-router-dom";

export const Survey = () => {

  const navigate = useNavigate()

  const handleCheckout = () => {
  
  const confirmed = window.confirm(
      "Thank you! Back to Booknanda!"
    );
    if (confirmed) {
      navigate("/");
    }
  };

  return (
    <Container className="mt-5 ibm-plex-serif">
      <h1 className="boldonse-regular"><br></br>Thank you for your order!</h1>
      <p><br></br><br></br> We’d love your feedback! Please complete this quick survey:</p>

      <Form>
        <Form.Group className="mb-3" controlId="surveySatisfaction">
          <Form.Label><br></br> How satisfied are you with your shopping experience?</Form.Label>
          <Form.Select>
            <option>Very satisfied</option>
            <option>Satisfied</option>
            <option>Neutral</option>
            <option>Unsatisfied</option>
            <option>Very unsatisfied</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="surveyComments">
          <Form.Label><br></br>Additional Comments</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Share your thoughts..." />
        </Form.Group>

        <button className="checkout-button" variant="success" onClick={handleCheckout}>Submit feedback</button>
        
      </Form>
    </Container>
  );
};

export default Survey;
