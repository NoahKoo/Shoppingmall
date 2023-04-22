import React, { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Detail = (props) => {
  let { id } = useParams();
  let findId = props.shoes.find((x) => x.id == id);
  let [count, setCount] = useState(0);
  let [tab, setTab] = useState(0);
  let [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setTimeout(() => {
      return isNaN(inputValue) ? window.alert("숫자를 입력해주세요") : null;
    }, 0);
  }, [inputValue]);
  return (
    <div className="container">
      {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        버튼
      </button>
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            placeholder="수량 입력란"
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
          <h4 className="pt-5">{findId.title}</h4>
          <p>{findId.content}</p>
          <p>{findId.price}won</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            eventKey="link-0"
            onClick={() => {
              setTab(0);
            }}
          >
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-1"
            onClick={() => {
              setTab(1);
            }}
          >
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-2"
            onClick={() => {
              setTab(2);
            }}
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab} />
    </div>
  );
};

function TabContent({ tab }) {
  if (tab == 0) {
    return <div>내용0</div>;
  } else if (tab == 1) {
    return <div>내용1</div>;
  } else if (tab == 2) {
    return <div>내용2</div>;
  }
}

export default Detail;
