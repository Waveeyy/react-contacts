import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

function Contacts({ userData }) {
  return (
    <div>
      {userData.map((item, index) => {
        return (
          <Card key={index} style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Name: {item.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Phone: {item.phone}
              </Card.Subtitle>
              <Card.Text>Location: {item.location}</Card.Text>
              <Button href="#" size="sm" variant="primary">
                Edit
              </Button>
              <Button href="#" size="sm" variant="danger">
                Delete
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default Contacts;
