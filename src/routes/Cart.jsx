import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeName, changeAge } from "../store/userSlice";
import { plusCount } from "../store";

const Cart = () => {
  let state = useSelector((state) => {
    return state;
  });
  let dispatch = useDispatch();

  return (
    <div>
      <h6>
        {state.user.name}님 {state.user.age}세의 장바구니
      </h6>
      <button
        onClick={() => {
          dispatch(changeAge(100));
        }}
      >
        버튼
      </button>
      <h4>장바구니</h4>
      <Table bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((arr, i) => {
            return (
              <tr key={i}>
                <td>{state.cart[i].id}</td>
                <td>{state.cart[i].name}</td>
                <td>{state.cart[i].count}</td>
                <td>
                  <button
                    onClick={() => {
                      // 해당 항목의 Id를 찾아 그 객체 요소의 수량을 1 증가
                      dispatch(plusCount(state.cart[i].id));
                    }}
                  >
                    +
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Cart;
