import React, { useState } from "react";
import { Card, Button, Col, Modal } from "react-bootstrap";
import EditContactsForm from "./EditContactsForm";

function Contact(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDeleteContact = () => {
    props.deleteContact(props.userInfo.id);
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditContactsForm
            editContact={props.editContact}
            hide={handleClose}
            userInfo={props.userInfo}
          />
        </Modal.Body>
      </Modal>
      <Col md={4}>
        <Card>
          <Card.Body>
            <Card.Title>Name: {props.userInfo.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Contact:{props.userInfo.phone}
            </Card.Subtitle>
            <Card.Text>Location :{props.userInfo.location}</Card.Text>
            <Button variant="primary" onClick={handleShow}>
              Edit
            </Button>
            <Button variant="danger" onClick={handleDeleteContact} href="#">
              Delete
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export default Contact;
