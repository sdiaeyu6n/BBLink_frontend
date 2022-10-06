import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import React from "react";

const Payment = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    address: "서울특별시 중구 장충동2가 193-86 현대빌라 201호",
    contact: "010-2132-2112",
    ask: "(선택) 내용을 입력해주세요",
    method: 1,
  });

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  //   const handleSubmit = () => {
  //     console.log(state);
  //     alert("결제 성공");
  //   };
  return (
    <div
      className="Payment"
      style={{
        margin: "20px",
        marginLeft: "20px",
        marginTop: "50px",
      }}
    >
      <h2>
        <Button
          variant="warning"
          onClick={() => {
            navigate("/mybag");
          }}
          style={{ width: 100, fontSize: 15 }}
        >
          <b>뒤로가기</b>
        </Button>{" "}
        <b style={{ fontSize: 30 }}>결제하기</b>
      </h2>
      <hr></hr>
      <b style={{ fontSize: 25 }}>배달 정보</b>
      <p></p>
      <div>
        <label for="address" style={{ fontSize: 20, margin: 5 }}>
          배달 주소{" "}
        </label>
        <input
          name="address"
          value={state.address}
          onChange={handleChangeState}
          style={{ width: "320px" }}
        />
      </div>
      <div>
        <label for="contact" style={{ fontSize: 20, margin: 5 }}>
          {"    "}연락처{" "}
        </label>
        <input
          name="contact"
          value={state.contact}
          onChange={handleChangeState}
          style={{ width: "320px" }}
        />
      </div>
      <hr></hr>
      <div>
        <b style={{ fontSize: 25 }}>요청사항</b>
        <p></p>
        <textarea
          name="ask"
          value={state.ask}
          onChange={handleChangeState}
          style={{ width: "320px", height: 100 }}
        />
      </div>
      <hr></hr>
      <div>
        <b style={{ fontSize: 25 }}>결제수단 선택 </b>
        <p></p>
        <select
          name="method"
          value={state.method}
          onChange={handleChangeState}
          style={{ width: 200, height: 40, fontSize: 20 }}
        >
          <option value={1}>카드 결제</option>
          <option value={2}>만나서 현금 결제</option>
          <option value={3}>계좌이체</option>
          <option value={4}>간편결제</option>
          <option value={5}>기프티콘 결제</option>
        </select>
      </div>
      <hr></hr>
      <div>
        <Button
          variant="warning"
          onClick={() => {
            navigate("/payfin");
          }}
          style={{ width: "320px", fontSize: 25 }}
        >
          <b>12,500원 결제하기</b>
        </Button>
      </div>
    </div>
  );
};

export default Payment;
