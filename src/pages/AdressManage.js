import React from 'react';
import CMButton from './components/CMButton';
import CMInput from './components/CMInput';


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
        <CMButton text={'삭제'}/>
        <br/>

    <label>
        경기도 고양시 일산동 동국로32</label>
        &nbsp; &nbsp; &nbsp;
        <CMButton text={'삭제'} />
        <br/>
        <br/>
        <br/>
        <CMInput hint="주소" /><CMButton text={'추가'} />

</center>
 </div>
 );
}
export default AdressManage;
