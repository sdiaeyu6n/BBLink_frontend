import React from 'react';
import { useNavigate } from 'react-router';


function OrderComplete() {
    const navigate=useNavigate();
 return (

<div>
<center>
    <h1>
        주문이 완료되었습니다 !
        </h1>
        
    <label>
        곧 주문하신 메뉴가 배달 될 예정입니다.
        잠시만 기다려주세요!</label>
        <br/>
        <br/>
        <button  onClick={()=>{
navigate('/DeliveryNow')
}
}>배달현황 보기</button>
        <br/>
        <br/>
        <br/>


</center>
 </div>
 );
}
export default OrderComplete;
