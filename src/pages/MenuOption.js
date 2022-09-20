import React from "react";
import { useNavigate } from "react-router-dom";

const MenuOption = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          margin: 20,
          padding: 20,
          border: "1px solid grey",
        }}
      >
        <div className="MenuOptionImage">
          <img
            className="storeImg"
            src="img/menu1.jpg"
            width="200"
            height="200"
            alt="삼겹살 음식 이미지"
          />
          <div className="MenuOptionText">
            {" "}
            <br></br>
            <h2>직화삼겹구이</h2>
            <br></br>
            <p>몸에 좋고 맛도 좋은 숯불 직화 삼겹살 구이입니다.</p>
          </div>
        </div>
      </div>
      <div
        style={{
          margin: 20,
          padding: 20,
          border: "2px solid grey",
        }}
      >
        <h2>가격 &nbsp;&nbsp;34,000원</h2>
        <hr></hr>
        <h3>고기 추가</h3>
        <p>
          <input type="checkbox" /> 100g &nbsp;&nbsp;<b>8,000원</b>
        </p>
        <p>
          <input type="checkbox" /> 200g&nbsp;&nbsp; <b>15,000원</b>
        </p>
        <hr></hr>
        <h3>곁들임 메뉴 추가</h3>
        <p>
          <input type="checkbox" /> 참치마요밥 &nbsp;&nbsp;<b>4,000원</b>
        </p>
        <p>
          <input type="checkbox" /> 스팸김치볶음밥 &nbsp;&nbsp;<b>4,000원</b>
        </p>
        <p>
          <input type="checkbox" /> 김치찌개 추가 &nbsp;&nbsp;<b>6,000원</b>
        </p>
        <p>
          <input type="checkbox" /> 쫄면 추가 &nbsp;&nbsp;<b>5,000원</b>
        </p>
        <p>
          <input type="checkbox" /> 공기밥 추가 &nbsp;&nbsp;<b>1,000원</b>
        </p>
        <hr></hr>
        <h3>음료 추가</h3>
        <p>
          <input type="checkbox" /> 콜라 &nbsp;&nbsp;<b>2,000원</b>
        </p>
        <p>
          <input type="checkbox" /> 사이다 &nbsp;&nbsp;<b>2,000원</b>
        </p>
        <hr></hr>
        <h3>수량</h3>
        <hr></hr>
        <h3>총 주문금액</h3>
      </div>
      <div className="MenuOptionBar">
        <button
          onClick={() => {
            navigate("/mybag");
          }}
        >
          장바구니
        </button>
        <button
          onClick={() => {
            navigate("/mybag");
          }}
        >
          주문하기
        </button>
      </div>
    </>
  );
};

export default MenuOption;