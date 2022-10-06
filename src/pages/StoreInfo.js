import { useNavigate } from "react-router-dom";
import React from "react";

const StoreInfo = () => {
  const navigate = useNavigate();
  return (
    <div className="StoreInfo">
      <button
        onClick={() => {
          navigate("/store");
        }}
      >
        뒤로가기
      </button>
      <h2>가게 소개</h2>
      <p>가게 소개입니다.</p>
      <p>가게 소개입니다.</p>
      <p>가게 소개입니다.</p>
      <p>가게 소개입니다.</p>
      <hr></hr>
      <h2>영업정보</h2>
      <p>상호명: 불타오르는 나의 마음</p>
      <p>운영시간: 매일 - 낮 12:00 ~ 밤 12:00</p>
      <p>휴무일: 연중무휴</p>
      <p>전화번호: 050-0000-0000</p>
      <p>배달지역: 갈현동, 원문동, 별양동, 중앙동</p>
    </div>
  );
};

export default StoreInfo;
