import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;
const Button = styled.button`
  border: 1px solid gray;
  padding: 7px;
  border-radius: 5px;
  background-color: teal;
  color: white;
`;
const ShopCard = (props) => {
  const { productName, description, price, _id } = props.pd;
  const handleAdded=props.addEventHandler;
  return (
    <>
      <div className="mx-auto mt-5" style={{ width: "25rem" }}>
        <Card.Body className="style-card-body h-100">
          <Card.Img
            variant="top"
            src={`data:image/jpeg;base64,${props?.pd?.image?.img}`}
          />
          <Card.Title>{productName}</Card.Title>
          <Card.Text style={{ fontSize: "15px" }} className="text-muted">
            {description}
          </Card.Text>
          <Card.Text style={{ fontSize: "20px", color: "tomato" }}>
          ৳{price}
          </Card.Text>
          <ButtonContainer>
            <Link to={`/orders/${_id}`}>
              <Button>BUY NOW</Button>
            </Link>
              <Button onClick={()=>handleAdded(props.pd)}>ADD TO CART</Button>
          </ButtonContainer>
        </Card.Body>
      </div>
    </>
  );
};

export default ShopCard;
