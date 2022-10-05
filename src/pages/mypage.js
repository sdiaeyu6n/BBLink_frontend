import React from "react";
import HeadButton from "../components/HeadButton";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const StyledButton2 = styled.button`
  height: 60px;
  width: 130px;
  background-color: #ffef82;
  font-size: 20px;
  font-weight: 700;
  font-color: black;
`;

const StyledButton = styled.button`
  height: 60px;
  width: 200px;
  background-color: #ffef82;
  font-size: 20px;
  font-weight: 700;
  font-color: black;
`;

const StyledButton3 = styled.button`
  height: 60px;
  width: 300px;
  background-color: #ffef82;
  border-color: #ffef82;
  font-size: 25px;
  font-weight: 700;
  border-radius: 50px;
`;

export default function MyPage() {
  const navigate = useNavigate();

  return (
    <div>
      <center>
        <br />
        <HeadButton text={"마이페이지"} />
        <br />
        <br />
        <StyledButton>귀여운뽀미 님</StyledButton>
        &nbsp; &nbsp;
        <StyledButton2>로그아웃</StyledButton2>
        <br />
        <br />
        <StyledButton3
          onClick={() => {
            navigate("/PersonalInfo");
          }}
        >
          개인정보 관리
        </StyledButton3>
        <br />
        <br />
        <StyledButton3
          onClick={() => {
            navigate("/AdressManage");
          }}
        >
          주소 관리
        </StyledButton3>
        <br />
        <br />
        <StyledButton3
          onClick={() => {
            navigate("/ReviewManage");
          }}
        >
          리뷰 관리
        </StyledButton3>
        <br />
        <br />
        <StyledButton3
          onClick={() => {
            navigate("/Settings");
          }}
        >
          설정
        </StyledButton3>
        <br />
        <br />
        <StyledButton3
          onClick={() => {
            navigate("/Notice");
          }}
        >
          공지사항
        </StyledButton3>
        <br />
        <br />
        <br />
      </center>
    </div>
  );
}
