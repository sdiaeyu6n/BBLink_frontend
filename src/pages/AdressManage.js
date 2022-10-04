import React from 'react';
import CMInput from '../components/CMInput';


function AdressManage() {
 return (

<div>
<center>
    <h1>
        주소 리스트
        </h1>
        
    <label>
        서울특별시 중구 필동로 1길30</label>
        &nbsp; &nbsp; &nbsp;
        <button>삭제</button>
        <br/>

    <label>
        경기도 고양시 일산동 동국로32</label>
        &nbsp; &nbsp; &nbsp;
        <button>삭제</button>
        <br/>
        <br/>
        <br/>
        <CMInput hint="주소" /><button>삭제</button>

</center>
 </div>
 );
}
export default AdressManage;
