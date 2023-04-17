import "./App.css";
import { Button, Col, Container, Nav, Navbar, Row } from "react-bootstrap";

function App() {
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
          <Col sm>
            <img
              src={process.env.PUBLIC_URL + "/img/shoes1.jpeg"}
              alt="상품1"
              width="80%"
            />
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
          <Col sm>
            <img
              src={process.env.PUBLIC_URL + "/img/shoes2.jpeg"}
              alt="상품1"
              width="80%"
            />
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
          <Col sm>
            <img
              src={process.env.PUBLIC_URL + "/img/shoes3.jpeg"}
              alt="상품1"
              width="80%"
            />
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
