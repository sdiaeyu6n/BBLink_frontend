import React from 'react';



function DeliveryNow() {
 return (

<div>
<center>
    <h1>
        배달 현황
        </h1>
        
    <label>
        현재 라이더의 위치입니다.<br/>
        5분 후에 도착할 예정입니다!</label>
        <br/>
        <br/>
        <button>배달현황 네이버맵</button>
        <br/>
        <br/>
        <img className="deliverynow" src="img/delivery.png" height='400' width='500'/>
        <br/>


</center>
 </div>
 );
}
export default DeliveryNow;
