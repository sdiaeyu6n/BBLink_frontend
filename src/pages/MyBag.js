import { useNavigate } from "react-router-dom";

const MyBag = () => {
  const navigate = useNavigate();
  return (
    <div className="MyBag">
      <div>
        <h2>
          <button
            onClick={() => {
              navigate("/store");
            }}
          >
            뒤로가기
          </button>{" "}
          {""}장바구니
        </h2>
      </div>
      <div>
        <h3>가게 명</h3>
      </div>
      <hr></hr>
      <div>
        <h3>메뉴 명</h3>
      </div>
      <div>
        <img
          className="storeImg"
          src="img/menu1.jpg"
          width="100"
          height="100"
          alt="삼겹살 음식 이미지"
        />
      </div>
      <div>
        <ul>
          <li>가격: 14,000원</li>
          <li>고기 200g 추가(3000원)</li>
          <li>배달 주문</li>
        </ul>
      </div>
      <div>
        <h2>17,000원</h2>
      </div>
      <hr></hr>
      <div>
        <button
          onClick={() => {
            navigate("/store");
          }}
        >
          + 더 담으러 가기
        </button>
      </div>
      <hr></hr>
      <div>
        <p>총 주문금액 17,000원</p>
        <p>배달비 3,000원</p>
        <p>――――――――――――――――――――</p>
        <p>결제예정 금액 20,000원</p>
      </div>
      <hr></hr>
      <div>
        <button
          onClick={() => {
            navigate("/payment");
          }}
        >
          배달 주문하기 20,000원
        </button>
      </div>
    </div>
  );
};

export default MyBag;