import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

const MenuOption = () => {
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
            src="img/menu2_김치만두.jpg"
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
      <hr style={{ width: 700 }}></hr>

      <div
        style={{
          margin: 20,
          padding: 20,
          border: "2px solid grey",
        }}
      >
        <b style={{ fontSize: 25 }}>가격 &nbsp;&nbsp;34,000원</b>
        <hr></hr>
        <b style={{ fontSize: 25 }}>고기 추가</b>
        <p></p>
        <p>
          &nbsp;
          <input type="checkbox" /> 100g &nbsp;&nbsp;<b>8,000원</b>
        </p>
        <p>
          &nbsp;
          <input type="checkbox" /> 200g&nbsp;&nbsp; <b>15,000원</b>
        </p>
        <hr></hr>
        <b style={{ fontSize: 25 }}>곁들임 메뉴 추가</b>
        <p></p>
        <p>
          &nbsp;
          <input type="checkbox" /> 참치마요밥 &nbsp;&nbsp;<b>4,000원</b>
        </p>
        <p>
          &nbsp;
          <input type="checkbox" /> 스팸김치볶음밥 &nbsp;&nbsp;<b>4,000원</b>
        </p>
        <p>
          &nbsp;
          <input type="checkbox" /> 김치찌개 추가 &nbsp;&nbsp;<b>6,000원</b>
        </p>
        <p>
          &nbsp;
          <input type="checkbox" /> 쫄면 추가 &nbsp;&nbsp;<b>5,000원</b>
        </p>
        <p>
          &nbsp;
          <input type="checkbox" /> 공기밥 추가 &nbsp;&nbsp;<b>1,000원</b>
        </p>
        <hr></hr>
        <b style={{ fontSize: 25 }}>음료 추가</b>
        <p></p>
        <p>
          &nbsp;
          <input type="checkbox" /> 콜라 &nbsp;&nbsp;<b>2,000원</b>
        </p>
        <p>
          &nbsp;
          <input type="checkbox" /> 사이다 &nbsp;&nbsp;<b>2,000원</b>
        </p>
        <hr></hr>
        <b style={{ fontSize: 25 }}>수량</b>
        <hr></hr>
        <b style={{ fontSize: 25 }}>총 주문금액</b>
      </div>
      <div className="MenuOptionBar">
        <center>
          <Button
            variant="warning"
            onClick={() => {
              navigate("/mybag");
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

export default MenuOption;
