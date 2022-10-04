import { useNavigate } from "react-router-dom";

const StoreReview = () => {
  const navigate = useNavigate();
  return (
    <div className="StoreReview">
      <button
        onClick={() => {
          navigate("/store");
        }}
      >
        뒤로가기
      </button>
      <h2>리뷰 614개</h2>
      <div className="ReviewItem">
        <p>사용자1</p>
        <p>리뷰 내용</p>
        <hr></hr>
        <p>사용자2</p>
        <p>리뷰 내용</p>
        <hr></hr>
        <p>사용자3</p>
        <p>리뷰 내용</p>
        <hr></hr>
      </div>
    </div>
  );
};

export default StoreReview;