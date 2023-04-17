import { useState } from "react";
import "./App.css";
import { Button, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import data from "./data.js";

function App() {
  let [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">NoahShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-bg"></div>

      <Container>
        <Row>
          {shoes.map((a, i) => {
            return (
              <Col sm>
                <Card shoes={shoes[i]} i={i} />
              </Col>
            );
          })}
          {/* <Col sm>
            <Detail shoes={shoes[0]} i={1} />
          </Col>
          <Col sm>
            <Detail shoes={shoes[1]} i={2} />
          </Col>
          <Col sm>
            <Detail shoes={shoes[2]} i={3} />
          </Col> */}
        </Row>
      </Container>
    </div>
  );
}

function Card(props) {
  return (
    <div>
      <img
        src={process.env.PUBLIC_URL + "/img/shoes" + (props.i + 1) + ".jpeg"}
        alt={"상품" + (props.i + 1)}
        width="80%"
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  );
}

export default App;
