// import DropDown from "../components/Dropdown";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const StoreMain = () => {
  const navigate = useNavigate();
  return (
    <>
      <hr style={{ width: 500 }}></hr>
      <div className="StoreInfoImage" style={{ float: "left", margin: 10 }}>
        <img
          onClick={() => {
            navigate("/store");
          }}
          className="storeImg"
          src="img/storelogo.png"
          width="100"
          height="100"
          alt="끝내주는 마라탕의 로고"
        />
      </div>
      <div className="StoreMenuText" style={{ float: "left", margin: 10 }}>
        <b>끝내주는 마라탕</b>
        <br></br>
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        {"     "}4.9 (59) <br></br>
        최소 주문 금액 <b>12,000원</b>
        <br></br>
        배달 소요 시간 <b>52~62분</b>
      </div>
      <div style={{ clear: "both" }}></div>
      <hr style={{ width: 500 }}></hr>
      <div className="StoreInfoImage" style={{ float: "left", margin: 10 }}>
        <img
          onClick={() => {
            navigate("/store");
          }}
          className="storeImg"
          src="img/storelogo.png"
          width="100"
          height="100"
          alt="끝내주는 마라탕의 로고"
          align-items="left"
        />
      </div>
      <div className="StoreMenuText" style={{ float: "left", margin: 10 }}>
        <b>끝내주는 마라탕</b>
        <br></br>
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        {"     "}4.9 (59) <br></br>
        최소 주문 금액 <b>12,000원</b>
        <br></br>
        배달 소요 시간 <b>52~62분</b>
      </div>
      <div style={{ clear: "both" }}></div>
      <hr style={{ width: 500 }}></hr>
      <div className="StoreInfoImage" style={{ float: "left", margin: 10 }}>
        <img
          onClick={() => {
            navigate("/store");
          }}
          className="storeImg"
          src="img/storelogo.png"
          width="100"
          height="100"
          alt="끝내주는 마라탕의 로고"
          align-items="left"
        />
      </div>
      <div className="StoreMenuText" style={{ float: "left", margin: 10 }}>
        <b>끝내주는 마라탕</b>
        <br></br>
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        {"     "}4.9 (59) <br></br>
        최소 주문 금액 <b>12,000원</b>
        <br></br>
        배달 소요 시간 <b>52~62분</b>
      </div>
      <div style={{ clear: "both" }}></div>
      <hr style={{ width: 500 }}></hr>
    </>
  );
};

export default StoreMain;
