import React from 'react';
import { Card } from 'react-bootstrap';

const Service = ({ pd }) => {
    const { title, desc, img } = pd;
    return (
        <>
        <div className="mx-auto mt-5 " style={{ width: "25rem" }}>
          <Card.Img variant="top" src={img}/>
          <Card.Body className="style-card-body">
            <Card.Title>{title}</Card.Title>
            <Card.Text>{desc}</Card.Text>
          </Card.Body>
        </div>
      </>
    );
};

export default Service;