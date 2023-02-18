import React from "react";
import { Card } from "react-bootstrap";
const Testimonial = ({ info }) => {
  const { name, comment, designation, _id } = info;

  return (
    <>
      <div className="mt-5" style={{ width: "27rem", borderRadius: "30px" }}>
        <Card.Body className="style-card-body p-5">
          <Card.Img
            variant="top"
            src={`data:image/jpeg;base64,${info?.image?.img}`}
            style={{ width: "50px" }}
            className="w-25 rounded-circle mx-auto "
          />
          <Card.Title>{name}</Card.Title>
          <p style={{ fontSize: "15px", color: "blueviolet" }}>{designation}</p>
          <Card.Text className="text-muted">{comment}</Card.Text>
        </Card.Body>
      </div>
    </>
  );
};

export default Testimonial;
