import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import React from "react";

const SelectPage = () => {
  const navigate = useNavigate();
  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <>
      <div
        style={{
          marginTop: "150px",

          // display: "flex",
          textAlign: "center",
          whiteSpace: "pre-wrap",
        }}
      >
        <b style={{ fontSize: 20 }}>시각장애인을 위한 배달 플랫폼</b>
        {"\n"}
        <b style={{ fontSize: 35 }}>BBlink</b>
        <p style={{ fontSize: 14 }}>
          프로보노 ICT 멘토링{"\n"}동국대학교 prICEless
        </p>
      </div>
      <div>
        <div style={style} className="AppLogo">
          <img
            src="img/블링크 로고.png"
            width="180"
            height="180"
            alt="BBlink App logo image"
          />
        </div>
        <div
          style={{
            marginTop: 20,
            padding: 20,
          }}
        >
          <div style={style}>
            <Button
              variant="warning"
              onClick={() => {
                navigate("/");
              }}
              style={{ width: 100, height: 50, fontSize: 15 }}
            >
              <b>로그인</b>
            </Button>{" "}
          </div>
          <div style={style}>
            <Button
              variant="warning"
              onClick={() => {
                navigate("/JoinPage");
              }}
              style={{ width: 100, fontSize: 15, margin: "15px" }}
            >
              <b>회원가입</b>
            </Button>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectPage;
