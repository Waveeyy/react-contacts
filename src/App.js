import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ContactsForm from "./components/ContactsForm";
import Contacts from "./components/Contacts";
import React, { useState } from "react";

function App() {
  const [users, setUsers] = useState([
    {
      name: "Nana Ab",
      phone: "0245768594",
      location: "kwabenya",
      id: "shdhsds",
    },
    {
      name: "kwabena",
      phone: "0245768594",
      location: "east legon",
      id: "sdbshds",
    },
  ]);
  const newUser = (user) => {
    user.id = Math.random().toString(36);
    setUsers([
      ...users,
      {
        id: user.id,
        name: user.name,
        phone: user.phone,
        location: user.location,
      },
    ]);
  };
  const deleteContact = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  const handleEditContact = (id, newInfo) => {
    setUsers(users.map((user) => (user.id === id ? newInfo : user)));
  };
  return (
    <div>
      <Container>
        <Row>
          <Col md={6}>
            <ContactsForm addUser={newUser} />
          </Col>
          <Col md={6}>
            <Contacts
              userData={users}
              deleteContact={deleteContact}
              editContact={handleEditContact}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
