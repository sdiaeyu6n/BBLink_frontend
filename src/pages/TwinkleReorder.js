import { useNavigate } from "react-router-dom";
import React from "react";
import Button from "react-bootstrap/Button";

const TwinkleReorder = () => {
  const navigate = useNavigate();
  return (
     
    <div
      className="TwinkleReorder"
      style={{
        marginTop: 20,
        marginLeft: 30,
        marginBottom: 20,
        alignContent: "center",
        whiteSpace: "pre-wrap",
      }}
    >
      <div>
       
        <h2>
          <Button
            variant="warning"
            onClick={() => {
              navigate("/TwinkleOrder");
            }}
            style={{ width: 100, fontSize: 15 }}
          >
            <b>뒤로가기</b>
          </Button>{" "}
      
          <b style={{ fontSize: 30 }}>반짝주문</b>
        </h2>
       
      </div>
      <hr></hr>
      <div>
        <h3>가게 명 | 봉추찜닭 서울대입구역점</h3>
      </div>
      <hr></hr>
      <div>
        <h3>메뉴 명 | 봉추찜닭 소
        </h3>
      </div>
      <div className="StoreInfoImage" style={{ float: "left", margin: 10 }}>
        <img
          className="storeImg"
          src="img/bongchu2.png"
          width="130"
          height="130"
          alt="봉추찜닭 이미지"
        />
      </div>
      <div className="StoreInfoText" style={{ float: "left", margin: 10 }}>
        <p style={{ fontSize: 18 }}>
          가격: 소(2인) 24,000원{"\n"}
          음료수(사이다) 추가(2000원){"\n"}
          맵기 조절: 덜맵게 {"\n"}
          배달 주문{"\n"}
        </p>

        <b style={{ fontSize: 20 }}>26,000원</b>
      </div>
      <div style={{ clear: "both" }}></div>

      <div style={{ margin: 10 }}>
        <Button
          variant="warning"
          onClick={() => {
            navigate("/store");
          }}
          style={{ width: 150, fontSize: 18 }}
        >
          <b>더 담으러 가기</b>
        </Button>
      </div>
      <hr></hr>
      <div>
        <p style={{ fontSize: 18 }}>
          총 주문금액 26,000원{"\n"}
          배달비 3,000원{"\n"}
          ――――――――――――――――――――{"\n"}
          <b style={{ fontSize: 20 }}>결제예정 금액 29,000원</b>
        </p>
      </div>
      <hr></hr>
      <div>
        <center>
        <Button
          variant="warning"
          onClick={() => {
            navigate("/payment");
          }}
          style={{ width: 200, fontSize: 18 }}
        >
          <b>배달 주문하기</b> <b style={{ fontSize: 20 }}>29,000원</b>
        </Button>
        </center>
      </div>

    </div>
  );
};

export default TwinkleReorder;
