import { useNavigate } from "react-router-dom";
import React from "react";
import Button from "react-bootstrap/Button";

const MyBag = () => {
  const navigate = useNavigate();
  return (
    <div
      className="MyBag"
      style={{
        margin: "20px",
        marginLeft: "20px",
        marginTop: "50px",
      }}
    >
      <div>
        <h2>
          <b style={{ fontSize: 30 }}>장바구니</b>
        </h2>
      </div>
      <hr></hr>
      <div>
        <h3>백남옥손만두-신당점</h3>
      </div>
      <hr></hr>

      {/* <div className="StoreInfoImage" style={{ float: "left", margin: 10 }}>
        <img
          className="storeImg"
          src="img/menu2_김치만두.png"
          width="150"
          height="120"
          alt="김치만두 이미지"
        />
      </div> */}
      <h3>김치만두</h3>
      <p style={{ fontSize: 18 }}>
        가격: 5,500원{"\n"}
        칠성사이다 추가 (2,000원){"\n"}
      </p>
      <b style={{ fontSize: 20, float: "left" }}>7,500원</b>

      <div style={{ float: "right" }}>
        <img src="img/수량.png" width="100" height="30" />
      </div>
      <div style={{ clear: "both" }}></div>
      <hr></hr>

      <h3>콜라</h3>
      <p style={{ fontSize: 18 }}>가격: 2,000원{"\n"}</p>
      <b style={{ fontSize: 20, float: "left" }}>2,000원</b>

      <div style={{ float: "right" }}>
        <img src="img/수량.png" width="100" height="30" />
      </div>
      <div style={{ clear: "both" }}></div>
      <p>{"\n"}</p>

      <div>
        <Button
          variant="warning"
          onClick={() => {
            navigate("/store");
          }}
          style={{ width: 250, height: 50, fontSize: 18 }}
        >
          <b>더 담으러 가기</b>
        </Button>
      </div>
      <hr></hr>
      <div>
        <p style={{ fontSize: 18 }}>
          총 주문금액 9,500원{"\n"}
          배달비 3,000원{"\n"}
          ――――――――――――――――――――{"\n"}
          <b style={{ fontSize: 20 }}>결제예정 금액 12,500원</b>
        </p>
      </div>
      <hr></hr>
      <div>
        <Button
          variant="success"
          onClick={() => {
            navigate("/payment");
          }}
          style={{
            width: "320px",
            fontSize: 20,
            float: "center",
          }}
        >
          <b>배달 주문하기</b> <b style={{ fontSize: 20 }}>12,500원</b>
        </Button>
      </div>
    </div>
  );
};

export default MyBag;
