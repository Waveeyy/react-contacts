import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function EditContactsForm(props) {
  const [name, setName] = useState(props.userInfo.name);
  const [phone, setPhone] = useState(props.userInfo.phone);
  const [location, setLocation] = useState(props.userInfo.location);
  const handleSubmit = (e) => {
    e.preventDefault();
    props.editContact(props.userInfo.id, { name, phone, location });
    setName("");
    setPhone("");
    setLocation("");
    props.hide();
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="phone"
          value={phone}
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
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        />
      </Form.Group>

      <Button onClick={handleSubmit} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default EditContactsForm;
