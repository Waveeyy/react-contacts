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
    { name: "Nana Ab", phone: "0245768594", location: "kwabenya" },
    { name: "kwabena", phone: "0245768594", location: "east legon" },
  ]);
  const newUser = (user) => {
    setUsers([
      ...users,
      { name: user.name, phone: user.phone, location: user.location },
    ]);
  };
  return (
    <div>
      <Container>
        <Row>
          <Col md={6}>
            <ContactsForm addUser={newUser} />
          </Col>
          <Col md={6}>
            <Contacts userData={users} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
