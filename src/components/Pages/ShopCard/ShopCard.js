import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ShopCard = ({ pd }) => {
  const { productName, description, price, _id } = pd;
  return (
    <>
      <div className="mx-auto mt-5 " style={{ width: "25rem" }}>
        <Link to= {`/orders/${_id}`}>
          <Card.Body className="style-card-body">
            <Card.Img
              variant="top"
              src={`data:image/jpeg;base64,${pd?.image?.img}`}
            />
            <Card.Title>{productName}</Card.Title>
            <Card.Text style={{ fontSize: "15px" }} className="text-muted">
              {description}
            </Card.Text>
            <Card.Text style={{ fontSize: "20px", color: "tomato" }}>
              ${price}
            </Card.Text>
          </Card.Body>
        </Link>
      </div>
    </>
  );
};

export default ShopCard;
