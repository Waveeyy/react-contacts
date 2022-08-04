import { Container, Row } from "react-bootstrap";
import Contact from "./Contact";

function Contacts(props) {
  return (
    <div>
      <Container>
        <Row>
          {props.userData.map((item, index) => {
            return (
              <Contact
                key={index}
                userInfo={item}
                deleteContact={props.deleteContact}
                editContact={props.editContact}
              />
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Contacts;
