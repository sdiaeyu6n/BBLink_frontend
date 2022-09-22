import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const StoreDetail = () => {
  const navigate = useNavigate();
  const handleCall = () => alert("매장 전화 연결");
  const handleHeart = () => alert("매장 찜 완료");

  return (
    <>
      <div
        style={{
          margin: 20,
          padding: 20,
          border: "1px solid grey",
        }}
      >
        <div className="StoreDetail">
          <header>
            <h2>
              &nbsp;&nbsp;끝내주는 마라탕<br></br>
            </h2>
          </header>
          <div className="StoreInfoImage">
            <img
              className="storeImg"
              src="img/storelogo.png"
              width="200"
              height="200"
              alt="끝내주는 마라탕의 로고"
              align-items="left"
            />
          </div>
          <div className="StoreInfoText">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            {"     "}4.9 (59)
            <br></br>
            최소 주문 금액 <b>12,000원</b>
            <br></br>
            배달 소요 시간 <b>52~62분</b>
            <div>
              <br></br>
              <button onClick={handleCall}>전화</button>
              <button onClick={handleHeart}>찜</button>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          margin: 20,
        }}
      >
        <br></br>
        <button
          onClick={() => {
            navigate("/store");
          }}
        >
          메뉴
        </button>
        <button
          onClick={() => {
            navigate("/storeinfo");
          }}
        >
          정보
        </button>
        <button
          onClick={() => {
            navigate("/storereview");
          }}
        >
          리뷰
        </button>
      </div>
    </>
  );
};

export default StoreDetail;