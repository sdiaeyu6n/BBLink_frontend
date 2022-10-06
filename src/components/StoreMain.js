// import DropDown from "../components/Dropdown";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import React from "react";

const StoreMain = (id) => {
  const navigate = useNavigate();
  return (
    <>
      <hr style={{ width: 500 }}></hr>
      <div className="StoreInfoImage" style={{ float: "left", margin: 10 }}>
        <img
          onClick={() => {
            window.location.href = `/storelist/${id}`;
            // navigate(`/storelist/${id}`);
            // onClick={() => (window.location.hrf = `/storelist/${id}`)}
          }}
          className="storeImg"
          src="./img/storelogo_배떡충무로점.png"
          width="100"
          height="100"
          alt="배떡 충무로점의 로고"
        />
      </div>
      <div className="StoreMenuText" style={{ float: "left", margin: 10 }}>
        <b>배떡-충무로점</b>
        <br></br>
        <AiFillStar />
        {"     "}4.9 (514) <br></br>
        최소 주문 금액 <b>12,000원</b>
        <br></br>
        배달 소요 시간 <b>45~55분</b>
      </div>
      <div style={{ clear: "both" }}></div>
      <hr style={{ width: 500 }}></hr>
      <div className="StoreInfoImage" style={{ float: "left", margin: 10 }}>
        <img
          onClick={() => {
            window.location.href = `/storelist/${id}`;
            // navigate(`/storelist/${id}`);
            // onClick={() => (window.location.hrf = `/storelist/${id}`)}
          }}
          className="storeImg"
          src="./img/storelogo_스쿨푸드종로점.png"
          width="100"
          height="100"
          alt="스쿨푸드 종로점의 로고"
        />
      </div>
      <div className="StoreMenuText" style={{ float: "left", margin: 10 }}>
        <b>스쿨푸드-종로점</b>
        <br></br>
        <AiFillStar />
        {"     "}4.7 (2279) <br></br>
        최소 주문 금액 <b>12,000원</b>
        <br></br>
        배달 소요 시간 <b>44~54분</b>
      </div>
      <div style={{ clear: "both" }}></div>
      <hr style={{ width: 500 }}></hr>

      <div className="StoreInfoImage" style={{ float: "left", margin: 10 }}>
        <img
          onClick={() => {
            window.location.href = `/storelist/${id}`;
            // navigate(`/storelist/${id}`);
            // onClick={() => (window.location.hrf = `/storelist/${id}`)}
          }}
          className="storeImg"
          src="./img/storelogo_bnosmd.png"
          width="100"
          height="100"
          alt="백남옥손만두 신당점의 로고"
        />
      </div>
      <div className="StoreMenuText" style={{ float: "left", margin: 10 }}>
        <b>백남옥손만두-신당점</b>
        <br></br>
        <AiFillStar />
        {"     "}4.7 (59) <br></br>
        최소 주문 금액 <b>10,000원</b>
        <br></br>
        배달 소요 시간 <b>18분</b>
      </div>
      <div style={{ clear: "both" }}></div>
      <hr style={{ width: 500 }}></hr>
      <div className="StoreInfoImage" style={{ float: "left", margin: 10 }}>
        <img
          onClick={() => {
            window.location.href = `/storelist/${id}`;
            // navigate(`/storelist/${id}`);
            // onClick={() => (window.location.hrf = `/storelist/${id}`)}
          }}
          className="storeImg"
          src="./img/storelogo_돈까스퐁당떡볶이공수간-왕십리뉴타운점.png"
          width="100"
          height="100"
          alt="돈까스퐁당떡볶이공수간 왕십리뉴타운점의 로고"
        />
      </div>
      <div className="StoreMenuText" style={{ float: "left", margin: 10 }}>
        <b>돈까스퐁당떡볶이공수간-왕십리뉴타운점</b>
        <br></br>
        <AiFillStar />
        {"     "}4.9 (115) <br></br>
        최소 주문 금액 <b>15,000원</b>
        <br></br>
        배달 소요 시간 <b>40~50분</b>
      </div>
      <div style={{ clear: "both" }}></div>
      <hr style={{ width: 500 }}></hr>
      <div className="StoreInfoImage" style={{ float: "left", margin: 10 }}>
        <img
          onClick={() => {
            window.location.href = `/storelist/${id}`;
            // navigate(`/storelist/${id}`);
            // onClick={() => (window.location.hrf = `/storelist/${id}`)}
          }}
          className="storeImg"
          src="./img/storelogo_싸다김밥-신당역점.png"
          width="100"
          height="100"
          alt="싸다김밥 신당역점의 로고"
        />
      </div>
      <div className="StoreMenuText" style={{ float: "left", margin: 10 }}>
        <b>싸다김밥-신당역점</b>
        <br></br>
        <AiFillStar />
        {"     "}4.8 (246) <br></br>
        최소 주문 금액 <b>13,000원</b>
        <br></br>
        배달 소요 시간 <b>27분</b>
      </div>
      <div style={{ clear: "both" }}></div>

      <hr style={{ width: 500 }}></hr>
      <div className="StoreInfoImage" style={{ float: "left", margin: 10 }}>
        <img
          onClick={() => {
            window.location.href = `/storelist/${id}`;
            // navigate(`/storelist/${id}`);
            // onClick={() => (window.location.hrf = `/storelist/${id}`)}
          }}
          className="storeImg"
          src="./img/storelogo_혜화골목냉면.png"
          width="100"
          height="100"
          alt="혜화골목냉면의 로고"
        />
      </div>
      <div className="StoreMenuText" style={{ float: "left", margin: 10 }}>
        <b>혜화골목냉면</b>
        <br></br>
        <AiFillStar />
        {"     "}5 (5) <br></br>
        최소 주문 금액 <b>10,000원</b>
        <br></br>
        배달 소요 시간 <b>27분</b>
      </div>
      <div style={{ clear: "both" }}></div>
    </>
  );
};

export default StoreMain;
