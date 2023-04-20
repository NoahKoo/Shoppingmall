import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = (props) => {
  let { id } = useParams();
  let findId = props.shoes.find((arr) => {
    return arr.id == id;
  });
  let [count, setCount] = useState(0);
  let [alert, setAlert] = useState(true);
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
    </div>
  );
};

export default Detail;
