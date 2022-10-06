// import DropDown from "../components/Dropdown";
import { useNavigate } from "react-router-dom";
import DropDown2 from "../components/Dropdown2";
import React from "react";

const StoreMenu = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        style={{
          marginTop: -45,
          marginLeft: 20,
          padding: 20,
        }}
      >
        <DropDown2 />
        <br></br>
        <h3>대표 메뉴</h3>
        <hr style={{ width: 700 }}></hr>

        <div className="StoreInfoImage" style={{ float: "left", margin: 10 }}>
          <img
            onClick={() => {
              navigate("/menuoption");
            }}
            className="storeImg"
            src="img/menu1.jpg"
            width="200"
            height="200"
            alt="삼겹살 음식 이미지"
          />
        </div>

        <div className="StoreMenuText" style={{ float: "left", margin: 10 }}>
          {" "}
          <h4 style={{ fontSize: 25 }}>직화삼겹구이</h4>
          {/* <b style={{ color: "red" }}>빨간색 글자입니다.</b> */}
          <b style={{ fontSize: 20 }}>34,000원</b>
          <p>몸에 좋고 맛도 좋은 숯불 직화 삼겹살 구이입니다.</p>
        </div>
      </div>

      <div style={{ clear: "both" }}></div>

      <div
        style={{
          margin: 20,
          padding: 20,
        }}
      >
        <h3>사이드</h3>
        <hr style={{ width: 700 }}></hr>
        <div className="StoreInfoImage" style={{ float: "left", margin: 10 }}>
          <img
            className="storeImg"
            src="img/menu2.png"
            width="200"
            height="200"
            alt="야채듬뿍 쫄면 음식 이미지"
          />
        </div>
        <div className="StoreMenuText" style={{ float: "left", margin: 10 }}>
          {" "}
          <h4 style={{ fontSize: 25 }}>야채듬뿍 쫄면</h4>
          {/* <b style={color:"red"}>빨간색 글자입니다.</b> */}
          <b style={{ fontSize: 20 }}>12,000원</b>
          <p>신선한 야채가 듬뿍 들어간 쫄면입니다.</p>
        </div>
      </div>
      <div style={{ clear: "both" }}></div>

      <div
        style={{
          margin: 20,
          padding: 20,
        }}
      >
        <h3>음료</h3>
        <hr style={{ width: 700 }}></hr>
        <div className="StoreInfoImage" style={{ float: "left", margin: 10 }}>
          <img
            className="storeImg"
            src="img/menu3.png"
            width="200"
            height="200"
            alt="오렌지주스 음료 이미지"
          />
        </div>
        <div className="StoreMenuText" style={{ float: "left", margin: 10 }}>
          {" "}
          <h4 style={{ fontSize: 25 }}>착즙 오렌지 주스</h4>
          {/* <b style={color:"red"}>빨간색 글자입니다.</b> */}
          <b style={{ fontSize: 20 }}>6,000원</b>
          <p>오렌지를 직접 갈아 만든 건강한 오렌지 주스입니다.</p>
        </div>
      </div>
      <div style={{ clear: "both" }}></div>
    </>
  );
};

export default StoreMenu;
