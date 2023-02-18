import React from "react";
import { Card } from "react-bootstrap";
import "./GoGreenData.css";

const GoGreenData = ({ pd }) => {
  const { title, desc, img } = pd;
  return (
    <>
      <Card className="mx-auto" style={{ width: "25rem" }}>
        <Card.Img
          variant="top"
          src={img}
          className="mx-auto py-3"
          style={{ width: "5rem" }}
        />
        <Card.Body>
          <Card.Title className="text-center">{title}</Card.Title>
          <Card.Text className="text-center pt-3 font-normal text-base text-muted">
            {desc}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default GoGreenData;
