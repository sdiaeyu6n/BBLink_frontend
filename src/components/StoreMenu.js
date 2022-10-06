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
        <hr></hr>
        <div className="StoreInfoImage" style={{ float: "left", margin: 10 }}>
          <img
            onClick={() => {
              navigate("/menuoption");
            }}
            className="storeImg"
            src="img/menu1_모듬세트.png"
            width="100px"
            alt="모듬세트 이미지"
          />
        </div>
        <div
          className="StoreMenuText"
          style={{ display: "absolute", float: "left", margin: 10 }}
        >
          <h4 style={{ fontSize: 20 }}>모듬세트</h4>
          {/* <b style={{ color: "red" }}>빨간색 글자입니다.</b> */}
          <b style={{ fontSize: 15 }}>11,000원</b>
        </div>{" "}
        <div style={{ clear: "both" }}></div>
        <div style={{ display: "absolute", margin: 10 }}>
          고기5＋김치5＋갈비6＋새우3 (1인분)
        </div>
        <hr></hr>
        <div className="StoreInfoImage" style={{ float: "left", margin: 10 }}>
          <img
            onClick={() => {
              navigate("/MO_kimchimandu");
            }}
            className="storeImg"
            src="img/menu2_김치만두.png"
            width="100px"
            alt="김치만두 이미지"
          />
        </div>
        <div className="StoreMenuText" style={{ float: "left", margin: 10 }}>
          <h4 style={{ fontSize: 20 }}>김치만두</h4>
          {/* <b style={{ color: "red" }}>빨간색 글자입니다.</b> */}
          <b style={{ fontSize: 15 }}>5,500원</b>
          <p>10개 (1인분)</p>
        </div>
        <div style={{ clear: "both" }}></div>
        <hr></hr>
        <div className="StoreInfoImage" style={{ float: "left", margin: 10 }}>
          <img
            onClick={() => {
              navigate("/menuoption");
            }}
            className="storeImg"
            src="img/menu3_왕만두.png"
            width="100px"
            alt="왕만두 이미지"
          />
        </div>
        <div className="StoreMenuText" style={{ float: "left", margin: 10 }}>
          {" "}
          <h4 style={{ fontSize: 20 }}>왕만두</h4>
          {/* <b style={{ color: "red" }}>빨간색 글자입니다.</b> */}
          <b style={{ fontSize: 15 }}>6,000원</b>
        </div>
        <div style={{ clear: "both" }}></div>
        <div style={{ display: "absolute", margin: 10 }}>
          고기만두, 김치만두 중 선택 가능 (5개 1인분)
        </div>
        <hr></hr>
        <div className="StoreInfoImage" style={{ float: "left", margin: 10 }}>
          <img
            onClick={() => {
              navigate("/menuoption");
            }}
            className="storeImg"
            src="img/menu4_고기만두.png"
            width="100px"
            alt="고기만두 이미지"
          />
        </div>
        <div
          className="StoreMenuText"
          style={{ float: "left", margin: 10, display: "absolute" }}
        >
          {" "}
          <h4 style={{ fontSize: 20 }}>고기만두</h4>
          {/* <b style={{ color: "red" }}>빨간색 글자입니다.</b> */}
          <b style={{ fontSize: 15 }}>5,500원</b>
          <p>10개 (1인분)</p>
        </div>
        <div style={{ clear: "both" }}></div>
        <hr></hr>
        <div className="StoreInfoImage" style={{ float: "left", margin: 10 }}>
          <img
            onClick={() => {
              navigate("/menuoption");
            }}
            className="storeImg"
            src="img/menu5_새우만두.png"
            width="100px"
            alt="새우만두 이미지"
          />
        </div>
        <div className="StoreMenuText" style={{ float: "left", margin: 10 }}>
          {" "}
          <h4 style={{ fontSize: 20 }}>새우만두</h4>
          {/* <b style={{ color: "red" }}>빨간색 글자입니다.</b> */}
          <b style={{ fontSize: 15 }}>5,500원</b>
          <p>6개 (1인분)</p>
        </div>
      </div>

      <div style={{ clear: "both" }}></div>

      <div
        style={{
          margin: 20,
          padding: 20,
        }}
      >
        <h3>메인 메뉴</h3>
        <hr></hr>
        <div className="StoreInfoImage" style={{ float: "left", margin: 10 }}>
          <img
            className="storeImg"
            src="img/신메뉴1_얇은피 고기왕만두.png"
            width="100px"
            alt="얇은피 고기왕만두 이미지"
          />
        </div>
        <div style={{ clear: "both" }}></div>
        <div className="StoreMenuText" style={{ float: "left", margin: 10 }}>
          <b style={{ color: "red" }}>신메뉴</b>
          <h4 style={{ fontSize: 20 }}>얇은피 고기왕만두</h4>
          <b style={{ fontSize: 15 }}>6,000원</b>
        </div>
        <div style={{ clear: "both" }}></div>
        <div style={{ display: "absolute", margin: 10 }}>
          얇은피에 속이 꽉찬 고기 왕만두 (5개)
        </div>
        <hr></hr>
        <div className="StoreInfoImage" style={{ float: "left", margin: 10 }}>
          <img
            className="storeImg"
            src="img/신메뉴2_얇은피 김치왕만두.png"
            width="100px"
            alt="얇은피 김치왕만두 이미지"
          />
        </div>
        <div className="StoreMenuText" style={{ float: "left", margin: 10 }}>
          {" "}
          <b style={{ color: "red" }}>신메뉴</b>
          <h4 style={{ fontSize: 20 }}>얇은피 김치왕만두</h4>
          <b style={{ fontSize: 15 }}>6,000원</b>
          <p>얇은피에 속이 꽉찬 김치 왕만두 (5개)</p>
        </div>
        <div style={{ clear: "both" }}></div>
        <hr></hr>
        <div className="StoreInfoImage" style={{ float: "left", margin: 10 }}>
          <img
            className="storeImg"
            src="img/메인메뉴3_고기김치반반.png"
            width="100px"
            alt="고기김치반반 이미지"
          />
        </div>
        <div className="StoreMenuText" style={{ float: "left", margin: 10 }}>
          {" "}
          {/* <b style={{ color: "red" }}>신메뉴</b> */}
          <h4 style={{ fontSize: 20 }}>고기김치반반</h4>
          <b style={{ fontSize: 15 }}>5,500원</b>
        </div>
        <div style={{ clear: "both" }}></div>
        <div style={{ display: "absolute", margin: 10 }}>
          고기 5개 + 김치 5개 (10개)
        </div>
        <hr></hr>
        <div className="StoreInfoImage" style={{ float: "left", margin: 10 }}>
          <img
            onClick={() => {
              navigate("/menuoption");
            }}
            className="storeImg"
            src="img/menu4_고기만두.png"
            width="100px"
            alt="고기만두 이미지"
          />
        </div>
        <div className="StoreMenuText" style={{ float: "left", margin: 10 }}>
          {" "}
          <h4 style={{ fontSize: 20 }}>고기만두</h4>
          {/* <b style={{ color: "red" }}>빨간색 글자입니다.</b> */}
          <b style={{ fontSize: 15 }}>5,500원</b>
          <p>10개 (1인분)</p>
        </div>
        <div style={{ clear: "both" }}></div>
        <hr></hr>
        <div className="StoreInfoImage" style={{ float: "left", margin: 10 }}>
          <img
            onClick={() => {
              navigate("/MO_kimchimandu");
            }}
            className="storeImg"
            src="img/menu2_김치만두.png"
            width="100px"
            alt="김치만두 이미지"
          />
        </div>
        <div className="StoreMenuText" style={{ float: "left", margin: 10 }}>
          {" "}
          <h4 style={{ fontSize: 20 }}>김치만두</h4>
          {/* <b style={{ color: "red" }}>빨간색 글자입니다.</b> */}
          <b style={{ fontSize: 15 }}>5,500원</b>
          <p>10개 (1인분)</p>
        </div>
        <div style={{ clear: "both" }}></div>
        <hr></hr>
        <div className="StoreInfoImage" style={{ float: "left", margin: 10 }}>
          <img
            onClick={() => {
              navigate("/menuoption");
            }}
            className="storeImg"
            src="img/menu5_새우만두.png"
            width="100px"
            alt="새우만두 이미지"
          />
        </div>
        <div className="StoreMenuText" style={{ float: "left", margin: 10 }}>
          {" "}
          <h4 style={{ fontSize: 20 }}>새우만두</h4>
          {/* <b style={{ color: "red" }}>빨간색 글자입니다.</b> */}
          <b style={{ fontSize: 15 }}>5,500원</b>
          <p>6개 (1인분)</p>
        </div>
        <div style={{ clear: "both" }}></div>
        <hr></hr>
        <div className="StoreInfoImage" style={{ float: "left", margin: 10 }}>
          <img
            onClick={() => {
              navigate("/menuoption");
            }}
            className="storeImg"
            src="img/메인메뉴4_갈비만두.png"
            width="100px"
            alt="갈비만두 이미지"
          />
        </div>
        <div className="StoreMenuText" style={{ float: "left", margin: 10 }}>
          {" "}
          <h4 style={{ fontSize: 20 }}>갈비만두</h4>
          {/* <b style={{ color: "red" }}>빨간색 글자입니다.</b> */}
          <b style={{ fontSize: 15 }}>5,500원</b>
          <p>10개 (1인분)</p>
        </div>
        <div style={{ clear: "both" }}></div>
        <hr></hr>
        <div className="StoreInfoImage" style={{ float: "left", margin: 10 }}>
          <img
            onClick={() => {
              navigate("/menuoption");
            }}
            className="storeImg"
            src="img/menu3_왕만두.png"
            width="100px"
            alt="왕만두 이미지"
          />
        </div>
        <div className="StoreMenuText" style={{ float: "left", margin: 10 }}>
          {" "}
          <h4 style={{ fontSize: 20 }}>왕만두</h4>
          {/* <b style={{ color: "red" }}>빨간색 글자입니다.</b> */}
          <b style={{ fontSize: 15 }}>6,000원</b>
        </div>
        <div style={{ clear: "both" }}></div>
        <div style={{ display: "absolute", margin: 10 }}>
          고기만두, 김치만두 중 선택 가능 (5개 1인분)
        </div>
      </div>
      <div style={{ clear: "both" }}></div>
      <div
        style={{
          margin: 20,
          padding: 20,
        }}
      >
        <h3>세트메뉴</h3>
        <hr></hr>
        <div className="StoreInfoImage" style={{ float: "left", margin: 10 }}>
          <img
            onClick={() => {
              navigate("/menuoption");
            }}
            className="storeImg"
            src="img/menu1_모듬세트.png"
            width="100px"
            alt="모듬세트 이미지"
          />
        </div>

        <div className="StoreMenuText" style={{ float: "left", margin: 10 }}>
          {" "}
          <h4 style={{ fontSize: 20 }}>모듬세트</h4>
          {/* <b style={{ color: "red" }}>빨간색 글자입니다.</b> */}
          <b style={{ fontSize: 15 }}>11,000원</b>
        </div>
        <div style={{ clear: "both" }}></div>
        <div style={{ display: "absolute", margin: 10 }}>
          고기5＋김치5＋갈비6＋새우3 (1인분)
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
        <hr></hr>
        <div className="StoreInfoImage" style={{ float: "left", margin: 10 }}>
          <img
            onClick={() => {
              navigate("/MO_cocacola");
            }}
            className="storeImg"
            src="img/음료1_코카콜라.png"
            width="100px"
            alt="코카콜라 이미지"
          />
        </div>
        <div className="StoreMenuText" style={{ float: "left", margin: 10 }}>
          {" "}
          <h4 style={{ fontSize: 20 }}>코카콜라</h4>
          {/* <b style={color:"red"}>빨간색 글자입니다.</b> */}
          <b style={{ fontSize: 15 }}>2,000원</b>
          {/* <p>오렌지를 직접 갈아 만든 건강한 오렌지 주스입니다.</p> */}
        </div>
        <div style={{ clear: "both" }}></div>
        <hr></hr>
        <div className="StoreInfoImage" style={{ float: "left", margin: 10 }}>
          <img
            className="storeImg"
            src="img/음료2_칠성사이다.png"
            width="100px"
            alt="칠성사이다 이미지"
          />
        </div>
        <div className="StoreMenuText" style={{ float: "left", margin: 10 }}>
          {" "}
          <h4 style={{ fontSize: 20 }}>칠성사이다</h4>
          {/* <b style={color:"red"}>빨간색 글자입니다.</b> */}
          <b style={{ fontSize: 15 }}>2,000원</b>
          {/* <p>오렌지를 직접 갈아 만든 건강한 오렌지 주스입니다.</p> */}
        </div>
        <div style={{ clear: "both" }}></div>
      </div>
      <div style={{ clear: "both" }}></div>
    </>
  );
};

export default StoreMenu;
