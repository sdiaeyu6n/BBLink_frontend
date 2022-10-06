import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

const MO_cocacola = () => {
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
            src="img/음료1_코카콜라.png"
            width="200"
            height="150"
            alt="코카콜라 이미지"
          />
        </div>
        <div className="MenuOptionText" style={{ float: "left", margin: 10 }}>
          {" "}
          <br></br>
          <b style={{ fontSize: 30 }}>코카콜라</b>
          <p></p>
          {/* <p style={{ fontSize: 17 }}>10개 (1인분)</p> */}
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
        <b style={{ fontSize: 25 }}>가격 &nbsp;&nbsp;2,000원</b>
        <hr></hr>

        <b style={{ float: "left", fontSize: 25 }}>수량</b>
        <div style={{ float: "right" }}>
          <img src="img/수량.png" width="120" height="40" />
        </div>
        <div style={{ clear: "both" }}></div>
        <hr></hr>
        <b style={{ fontSize: 25 }}>총 주문금액</b>
      </div>
      <div className="MenuOptionBar">
        <center>
          <Button
            variant="warning"
            onClick={() => {
              navigate("/store");
            }}
            style={{ width: 200, fontSize: 30 }}
          >
            <b>장바구니</b>
          </Button>{" "}
          <Button
            variant="warning"
            onClick={() => {
              navigate("/payment");
            }}
            style={{ width: 200, fontSize: 30 }}
          >
            <b>주문하기</b>
          </Button>{" "}
        </center>
      </div>
    </>
  );
};

export default MO_cocacola;
