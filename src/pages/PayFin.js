import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import React from "react";
const PayFin = () => {
  const navigate = useNavigate();
  return (
    <div
      className="Payfin"
      style={{
        marginTop: 50,
        marginBottom: 20,
        alignContent: "center",
        whiteSpace: "pre-wrap",
      }}
    >
      <b style={{ fontSize: "25px", marginLeft: 25 }}>주문이 완료되었습니다.</b>
      <p></p>
      <p style={{ fontSize: "20px" }}>주문 요청을 매장에 전달하였습니다.</p>
      <p>{"\n"}</p>
      <Button
        variant="warning"
        onClick={() => {
          navigate("/DeliveryNow");
        }}
        style={{
          width: 300,
          fontSize: 20,
          height: 90,
          margin: 5,
        }}
      >
        주문/배달 현황 확인하기
      </Button>
      <p>{"\n"}</p>
      <Button
        variant="warning"
        onClick={() => {
          navigate("/storelist");
        }}
        style={{ width: 300, fontSize: 20, height: 90, margin: 5 }}
      >
        다른 가게 둘러보기
      </Button>
    </div>
  );
};

export default PayFin;
