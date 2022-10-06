// import DropDown from "../components/Dropdown";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import React from "react";

const StoreMain = (id) => {
  const navigate = useNavigate();
  return (
    <>
      <hr></hr>
      <div
        className="StoreInfoImage"
        style={{ float: "left", margin: 10, fontSize: "13px" }}
      >
        <img
          onClick={() => {
            window.location.href = `/store`;
            // navigate(`/store`);
            // onClick={() => (window.location.hrf = `/store`)}
          }}
          className="storeImg"
          src="./img/storelogo_배떡충무로점.png"
          width="80"
          alt="배떡 충무로점의 로고"
        />
      </div>
      <div
        className="StoreMenuText"
        style={{
          display: "absolute",
          float: "left",
          margin: 10,
          fontSize: "13px",
        }}
      >
        <b>배떡-충무로점</b>
        <br></br>
        <AiFillStar />
        {"     "}4.9 (514) <br></br>
        최소 주문 금액 <b>12,000원</b>
        <br></br>
        배달 소요 시간 <b>45~55분</b>
      </div>
      <div style={{ clear: "both" }}></div>
      <hr></hr>
      <div
        className="StoreInfoImage"
        style={{ float: "left", margin: 10, fontSize: "13px" }}
      >
        <img
          onClick={() => {
            window.location.href = `/store`;
            // navigate(`/store`);
            // onClick={() => (window.location.hrf = `/store`)}
          }}
          className="storeImg"
          src="./img/storelogo_스쿨푸드종로점.png"
          width="80"
          alt="스쿨푸드 종로점의 로고"
        />
      </div>
      <div
        className="StoreMenuText"
        style={{ float: "left", margin: 10, fontSize: "13px" }}
      >
        <b>스쿨푸드-종로점</b>
        <br></br>
        <AiFillStar />
        {"     "}4.7 (2279) <br></br>
        최소 주문 금액 <b>12,000원</b>
        <br></br>
        배달 소요 시간 <b>44~54분</b>
      </div>
      <div style={{ clear: "both" }}></div>
      <hr></hr>

      <div
        className="StoreInfoImage"
        style={{ float: "left", margin: 10, fontSize: "13px" }}
      >
        <img
          onClick={() => {
            window.location.href = `/store`;
            // navigate(`/store`);
            // onClick={() => (window.location.hrf = `/store`)}
          }}
          className="storeImg"
          src="./img/storelogo_bnosmd.png"
          width="80"
          alt="백남옥손만두 신당점의 로고"
        />
      </div>
      <div
        className="StoreMenuText"
        style={{
          float: "left",
          margin: 10,
          fontSize: "13px",
          fontSize: "13px",
        }}
      >
        <b>백남옥손만두-신당점</b>
        <br></br>
        <AiFillStar />
        {"     "}4.7 (59) <br></br>
        최소 주문 금액 <b>10,000원</b>
        <br></br>
        배달 소요 시간 <b>18분</b>
      </div>
      <div style={{ clear: "both" }}></div>
      <hr></hr>
      <div
        className="StoreInfoImage"
        style={{
          float: "left",
          margin: 10,
          fontSize: "13px",
          fontSize: "13px",
        }}
      >
        <img
          onClick={() => {
            window.location.href = `/store`;
            // navigate(`/store`);
            // onClick={() => (window.location.hrf = `/store`)}
          }}
          className="storeImg"
          src="./img/storelogo_돈까스퐁당떡볶이공수간-왕십리뉴타운점.png"
          width="80"
          alt="돈까스퐁당떡볶이공수간 왕십리뉴타운점의 로고"
        />
      </div>
      <div
        className="StoreMenuText"
        style={{ float: "left", margin: 10, fontSize: "13px" }}
      >
        <b>공수간-왕십리뉴타운점</b>
        <br></br>
        <AiFillStar />
        {"     "}4.9 (115) <br></br>
        최소 주문 금액 <b>15,000원</b>
        <br></br>
        배달 소요 시간 <b>40~50분</b>
      </div>
      <div style={{ clear: "both" }}></div>
      <hr></hr>
      <div
        className="StoreInfoImage"
        style={{ float: "left", margin: 10, fontSize: "13px" }}
      >
        <img
          onClick={() => {
            window.location.href = `/store`;
            // navigate(`/store`);
            // onClick={() => (window.location.hrf = `/store`)}
          }}
          className="storeImg"
          src="./img/storelogo_싸다김밥-신당역점.png"
          width="80"
          alt="싸다김밥 신당역점의 로고"
        />
      </div>
      <div
        className="StoreMenuText"
        style={{ float: "left", margin: 10, fontSize: "13px" }}
      >
        <b>싸다김밥-신당역점</b>
        <br></br>
        <AiFillStar />
        {"     "}4.8 (246) <br></br>
        최소 주문 금액 <b>13,000원</b>
        <br></br>
        배달 소요 시간 <b>27분</b>
      </div>
      <div style={{ clear: "both" }}></div>

      <hr></hr>
      <div
        className="StoreInfoImage"
        style={{ float: "left", margin: 10, fontSize: "13px" }}
      >
        <img
          onClick={() => {
            window.location.href = `/store`;
            // navigate(`/store`);
            // onClick={() => (window.location.hrf = `/store`)}
          }}
          className="storeImg"
          src="./img/storelogo_혜화골목냉면.png"
          width="80"
          alt="혜화골목냉면의 로고"
        />
      </div>
      <div
        className="StoreMenuText"
        style={{ float: "left", margin: 10, fontSize: "13px" }}
      >
        <b>혜화골목냉면</b>
        <br></br>
        <AiFillStar />
        {"     "}5 (5) <br></br>
        최소 주문 금액 <b>10,000원</b>
        <br></br>
        배달 소요 시간 <b>27분</b>
      </div>
      <div style={{ clear: "both" }}></div>

      <hr></hr>
      <div
        className="StoreInfoImage"
        style={{ float: "left", margin: 10, fontSize: "13px" }}
      >
        <img
          onClick={() => {
            window.location.href = `/store`;
            // navigate(`/store`);
            // onClick={() => (window.location.hrf = `/store`)}
          }}
          className="storeImg"
          src="./img/storelogo_신전떡볶이-대학로점.png"
          width="80"
          alt="신전떡볶이 대학로점의 로고"
        />
      </div>
      <div
        className="StoreMenuText"
        style={{ float: "left", margin: 10, fontSize: "13px" }}
      >
        <b>신전떡볶이-대학로점</b>
        <br></br>
        <AiFillStar />
        {"     "}4.9 (485) <br></br>
        최소 주문 금액 <b>13,000원</b>
        <br></br>
        배달 소요 시간 <b>30분</b>
      </div>
      <div style={{ clear: "both" }}></div>

      <hr></hr>
      <div
        className="StoreInfoImage"
        style={{ float: "left", margin: 10, fontSize: "13px" }}
      >
        <img
          onClick={() => {
            window.location.href = `/store`;
            // navigate(`/store`);
            // onClick={() => (window.location.hrf = `/store`)}
          }}
          className="storeImg"
          src="./img/storelogo_종점떡볶이.png"
          width="80"
          alt="종점떡볶이의 로고"
        />
      </div>
      <div
        className="StoreMenuText"
        style={{ float: "left", margin: 10, fontSize: "13px" }}
      >
        <b>종점떡볶이</b>
        <br></br>
        <AiFillStar />
        {"     "}4.9 (102) <br></br>
        최소 주문 금액 <b>15,000원</b>
        <br></br>
        배달 소요 시간 <b>23분</b>
      </div>
      <div style={{ clear: "both" }}></div>

      <hr></hr>
      <div
        className="StoreInfoImage"
        style={{ float: "left", margin: 10, fontSize: "13px" }}
      >
        <img
          onClick={() => {
            window.location.href = `/store`;
            // navigate(`/store`);
            // onClick={() => (window.location.hrf = `/store`)}
          }}
          className="storeImg"
          src="./img/storelogo_김밥천국-명동본점.png"
          width="80"
          alt="김밥천국 명동본점의 로고"
        />
      </div>
      <div
        className="StoreMenuText"
        style={{ float: "left", margin: 10, fontSize: "13px" }}
      >
        <b>김밥천국-명동본점</b>
        <br></br>
        <AiFillStar />
        {"     "}4.7 (957) <br></br>
        최소 주문 금액 <b>14,000원</b>
        <br></br>
        배달 소요 시간 <b>54~64분</b>
      </div>
      <div style={{ clear: "both" }}></div>
      <hr></hr>
      <div
        className="StoreInfoImage"
        style={{ float: "left", margin: 10, fontSize: "13px" }}
      >
        <img
          onClick={() => {
            window.location.href = `/store`;
            // navigate(`/store`);
            // onClick={() => (window.location.hrf = `/store`)}
          }}
          className="storeImg"
          src="./img/storelogo_마포만두-시청점.png"
          width="80"
          alt="마포만두 시청점의 로고"
        />
      </div>
      <div
        className="StoreMenuText"
        style={{ float: "left", margin: 10, fontSize: "13px" }}
      >
        <b>마포만두-시청점</b>
        <br></br>
        <AiFillStar />
        {"     "}4.7 (862) <br></br>
        최소 주문 금액 <b>15,000원</b>
        <br></br>
        배달 소요 시간 <b>35분</b>
      </div>
      <div style={{ clear: "both" }}></div>

      <hr></hr>
      <div
        className="StoreInfoImage"
        style={{ float: "left", margin: 10, fontSize: "13px" }}
      >
        <img
          onClick={() => {
            window.location.href = `/store`;
            // navigate(`/store`);
            // onClick={() => (window.location.hrf = `/store`)}
          }}
          className="storeImg"
          src="./img/storelogo_청담동마녀김밥-상왕십리점.png"
          width="80"
          alt="청담동마녀김밥 상왕십리점의 로고"
        />
      </div>
      <div
        className="StoreMenuText"
        style={{ float: "left", margin: 10, fontSize: "13px" }}
      >
        <b>청담동마녀김밥-상왕십리점</b>
        <br></br>
        <AiFillStar />
        {"     "}4.9 (307) <br></br>
        최소 주문 금액 <b>23,000원</b>
        <br></br>
        배달 소요 시간 <b>35분</b>
      </div>
      <div style={{ clear: "both" }}></div>

      <hr></hr>
      <div
        className="StoreInfoImage"
        style={{ float: "left", margin: 10, fontSize: "13px" }}
      >
        <img
          onClick={() => {
            window.location.href = `/store`;
            // navigate(`/store`);
            // onClick={() => (window.location.hrf = `/store`)}
          }}
          className="storeImg"
          src="./img/storelogo_찐핵볶이.png"
          width="80"
          alt="찐핵볶이의 로고"
        />
      </div>
      <div
        className="StoreMenuText"
        style={{ float: "left", margin: 10, fontSize: "13px" }}
      >
        <b>찐핵볶이</b>
        <br></br>
        <AiFillStar />
        {"     "}4.9 (58) <br></br>
        최소 주문 금액 <b>12,000원</b>
        <br></br>
        배달 소요 시간 <b>72~82분</b>
      </div>
      <div style={{ clear: "both" }}></div>
    </>
  );
};

export default StoreMain;
