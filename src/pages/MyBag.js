import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

const MyBag = () => {
  const navigate = useNavigate();
  return (
    <div
      className="MyBag"
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
              navigate("/store");
            }}
            style={{ width: 100, fontSize: 15 }}
          >
            <b>뒤로가기</b>
          </Button>{" "}
          <b style={{ fontSize: 30 }}>장바구니</b>
        </h2>
      </div>
      <hr></hr>
      <div>
        <h3>가게 명</h3>
      </div>
      <hr></hr>
      <div>
        <h3>메뉴 명</h3>
      </div>
      <div className="StoreInfoImage" style={{ float: "left", margin: 10 }}>
        <img
          className="storeImg"
          src="img/menu1.jpg"
          width="130"
          height="130"
          alt="삼겹살 음식 이미지"
        />
      </div>
      <div className="StoreInfoText" style={{ float: "left", margin: 10 }}>
        <p style={{ fontSize: 18 }}>
          가격: 14,000원{"\n"}
          고기 200g 추가(3000원){"\n"}
          배달 주문{"\n"}
        </p>

        <b style={{ fontSize: 20 }}>17,000원</b>
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
          총 주문금액 17,000원{"\n"}
          배달비 3,000원{"\n"}
          ――――――――――――――――――――{"\n"}
          <b style={{ fontSize: 20 }}>결제예정 금액 20,000원</b>
        </p>
      </div>
      <hr></hr>
      <div>
        <Button
          variant="warning"
          onClick={() => {
            navigate("/payment");
          }}
          style={{ width: 200, fontSize: 18 }}
        >
          <b>배달 주문하기</b> <b style={{ fontSize: 20 }}>20,000원</b>
        </Button>
      </div>
    </div>
  );
};

export default MyBag;
