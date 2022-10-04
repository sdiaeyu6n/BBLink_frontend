import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Payment = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    address: "(필수) 주소를 입력해주세요",
    contact: "(필수) 연락처를 입력해주세요",
    ask: "(선택) 내용을 입력해주세요",
    method: 1,
  });

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  //   const handleSubmit = () => {
  //     console.log(state);
  //     alert("결제 성공");
  //   };
  return (
    <div className="Payment">
      <h3>결제하기</h3>
      <hr></hr>
      <h3>배달 정보</h3>

      <div>
        <label for="address">배달 주소 </label>
        <input
          name="address"
          value={state.address}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <label for="address">연락처 </label>
        <input
          name="contact"
          value={state.contact}
          onChange={handleChangeState}
        />
      </div>
      <hr></hr>
      <div>
        <h3>요청사항</h3>
        <textarea name="ask" value={state.ask} onChange={handleChangeState} />
      </div>
      <div>
        <label for="method">결제수단 선택 </label>
        <select name="method" value={state.method} onChange={handleChangeState}>
          <option value={1}>카드 결제</option>
          <option value={2}>만나서 현금 결제</option>
          <option value={3}>계좌이체</option>
          <option value={4}>간편결제</option>
          <option value={5}>기프티콘 결제</option>
        </select>
      </div>
      <div>
        <button
          onClick={() => {
            navigate("/payfin");
          }}
        >
          00,000원 결제하기
        </button>
      </div>
    </div>
  );
};

export default Payment;