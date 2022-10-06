import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

const MO_kimchimanducider = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          margin: 20,
          padding: 20,
        }}
      >
        <div className="MenuOptionImage" style={{ float: "left", margin: 10 }}>
          <img
            className="storeImg"
            src="img/menu2_김치만두.png"
            width="200"
            height="150"
            alt="김치만두 이미지"
          />
        </div>
        <div className="MenuOptionText" style={{ float: "left", margin: 10 }}>
          {" "}
          <br></br>
          <b style={{ fontSize: 30 }}>김치만두</b>
          <p></p>
          <p style={{ fontSize: 17 }}>10개 (1인분)</p>
        </div>
      </div>

      <div style={{ clear: "both" }}></div>
      <hr></hr>

      <div
        style={{
          margin: 20,
          padding: 20,
          border: "2px solid grey",
        }}
      >
        <b style={{ fontSize: 25 }}>
          가격 &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
          &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;5,500원
        </b>
        <hr></hr>
        <b style={{ fontSize: 25 }}>음료 추가</b>
        <p></p>
        <p>
          &nbsp;
          <input type="checkbox" /> 코카콜라 &nbsp;&nbsp;<b>+2,000원</b>
        </p>
        <p>
          &nbsp;
          <input type="checkbox" checked="checked" /> 칠성사이다 &nbsp;&nbsp;
          <b>+2,000원</b>
        </p>
        <hr></hr>
        <b style={{ fontSize: 25 }}>수량</b>
        <div style={{ float: "right" }}>
          <img src="img/수량.png" width="120" height="40" />
        </div>
        <div style={{ clear: "both" }}></div>
        <hr></hr>
        <b style={{ fontSize: 25 }}>
          총 주문금액 &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;7,500원
        </b>
      </div>
      <div className="MenuOptionBar">
        <center>
          <Button
            variant="warning"
            onClick={() => {
              navigate("/store");
            }}
            style={{ width: 170, height: 70, fontSize: 25 }}
          >
            <b>장바구니</b>
          </Button>{" "}
          <Button
            variant="warning"
            onClick={() => {
              navigate("/payment");
            }}
            style={{ width: 170, height: 70, fontSize: 25 }}
          >
            <b>주문하기</b>
          </Button>{" "}
        </center>
      </div>
    </>
  );
};

export default MO_kimchimanducider;
