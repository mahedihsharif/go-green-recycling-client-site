import React from "react";
import { Card } from "react-bootstrap";
import "./GoGreenData.css";

const GoGreenData = ({ pd }) => {
  const { title, desc, img } = pd;
  return (
    <>
      <Card className="mx-auto mt-5" style={{ width: "25rem" }}>
        <Card.Img
          variant="top"
          src={img}
          className="mx-auto styleImg"
          style={{ width: "5rem" }}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{desc}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default GoGreenData;
