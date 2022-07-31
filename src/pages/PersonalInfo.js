import React from 'react';
import CMButton from './components/CMButton';
import CMInput from './components/CMInput';


function PersonalInfo() {
 return (

<div>
<center>
    <h1>
        개인정보 관리
        </h1>
        
    <label>
        닉네임:보통이</label>
        &nbsp; &nbsp; &nbsp;
        <CMButton text={'변경'}/>
        <br/>

    <label>
        알러지 정보: 새우 알레르기</label>
        &nbsp; &nbsp; &nbsp;
        <CMButton text={'변경'} />
        <br/>
    
    <label>
        결제 정보: 00카드 192487283740938</label>
        &nbsp; &nbsp; &nbsp;
        <CMButton text={'변경'} />
        <br/>
        <br/>
        <br/>
        <label>
            팝업창으로 만들고임
        </label>
        <br/>
        <CMInput hint="변경할 내용" /><CMButton text={'확인'} />

</center>
 </div>
 );
}
export default PersonalInfo;
