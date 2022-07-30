import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function ContactsForm({ addUser }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addUser({ name, phone, location });
    setName("");
    setPhone("");
    setLocation("");
  };
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            value={name}
            placeholder="egs. Daniel"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contact</Form.Label>
          <Form.Control
            type="contact"
            value={phone}
            placeholder="egs. 020*******"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="location"
            value={location}
            placeholder="egs. Accra"
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default ContactsForm;
