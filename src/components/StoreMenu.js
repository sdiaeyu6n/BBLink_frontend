// import DropDown from "../components/Dropdown";
import { useNavigate } from "react-router-dom";

const StoreMenu = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        style={{
          margin: 20,
          padding: 20,
          border: "2px solid grey",
        }}
      >
        <h2>대표 메뉴</h2>
      </div>
      <div
        style={{
          margin: 20,
          padding: 20,
          border: "1px solid grey",
        }}
      >
        <div className="StoreInfoImage">
          <img
            onClick={() => {
              navigate("/menuoption");
            }}
            className="storeImg"
            src="img/menu1.jpg"
            width="200"
            height="200"
            alt="삼겹살 음식 이미지"
            align-items="right"
          />
          <div className="StoreMenuText">
            {" "}
            <b>직화삼겹구이</b>
            <br></br>
            {/* <b style={color:"red"}>빨간색 글자입니다.</b> */}
            <b>34,000원</b>
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
        <h2>사이드</h2>
      </div>
      <div
        style={{
          margin: 20,
          padding: 20,
          border: "1px solid grey",
        }}
      >
        <div className="StoreInfoImage">
          <img
            className="storeImg"
            src="img/menu2.png"
            width="200"
            height="200"
            alt="야채듬뿍 쫄면 음식 이미지"
            align-items="right"
          />
          <div className="StoreMenuText">
            {" "}
            <b>야채듬뿍 쫄면</b>
            <br></br>
            {/* <b style={color:"red"}>빨간색 글자입니다.</b> */}
            <b>12,000원</b>
            <p>신선한 야채가 듬뿍 들어간 쫄면입니다.</p>
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
        <h2>음료</h2>
      </div>
      <div
        style={{
          margin: 20,
          padding: 20,
          border: "1px solid grey",
        }}
      >
        <div className="StoreInfoImage">
          <img
            className="storeImg"
            src="img/menu3.png"
            width="200"
            height="200"
            alt="오렌지주스 음료 이미지"
            align-items="right"
          />
          <div className="StoreMenuText">
            {" "}
            <b>착즙 오렌지 주스</b>
            <br></br>
            {/* <b style={color:"red"}>빨간색 글자입니다.</b> */}
            <b>6,000원</b>
            <p>오렌지를 직접 갈아 만든 건강한 오렌지 주스입니다.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StoreMenu;