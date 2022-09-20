import { Link } from "react-router-dom";

const PayFin = () => {
  return (
    <div className="PayFin">
      <h1>주문이 완료되었습니다.</h1>
      <h2>주문 요청을 매장에 전달하였습니다.</h2>
      <button>주문/배달 현황 확인하기</button>
      <br></br>
      <hr></hr>
      <Link to={"/storelist"}>가게 목록으로 이동</Link>
    </div>
  );
};

export default PayFin;