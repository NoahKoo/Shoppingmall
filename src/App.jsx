import { useState } from "react";
import "./App.css";
import { Button, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import data from "./data.js";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Detail from "./routes/Detail";
import About from "./routes/About";
import Event from "./routes/Event";

function App() {
  let [shoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">NoahShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail");
              }}
            >
              Detail
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/about");
              }}
            >
              About
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/event");
              }}
            >
              Event
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
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
            </>
          }
        />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />

        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버임</div>} />
          <Route path="location" element={<div>위치정보임</div>} />
        </Route>
        <Route path="/event" element={<Event />}>
          <Route path="/event/one" element={<p>첫 주문시 양배추즙 서비스</p>} />
          <Route path="/event/two" element={<p>생일기념 쿠폰받기</p>} />
        </Route>

        <Route path="*" element={<div>없는 페이지입니다.</div>} />
      </Routes>
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
