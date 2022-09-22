import React from 'react';
import CMInput from '../components/CMInput';


function PersonalInfo() {
 return (

<div>
<center>
    <h1>
        개인정보 관리
        </h1>
        
        <label>
        사용자 모드: 저시력자 모드</label>
        &nbsp; &nbsp; &nbsp;
        <button>변경</button>
        <br/>

    <label>
        닉네임:보통이</label>
        &nbsp; &nbsp; &nbsp;
        <button>변경</button>
        <br/>

        <label>
        비밀번호 </label>
        &nbsp; &nbsp; &nbsp;
        <button>변경</button>
        <br/>

    <label>
        알러지 정보: 새우 알레르기</label>
        &nbsp; &nbsp; &nbsp;
        <button>변경</button>
        <br/>
    
    <label>
        결제 정보: 00카드 192487283740938</label>
        &nbsp; &nbsp; &nbsp;
        <button>변경</button>
        <br/>
        <br/>
        <br/>
        <label>
            팝업창으로 만들고임
        </label>
        <br/>
        <CMInput hint="변경할 내용" /><button>변경</button>

</center>
 </div>
 );
}
export default PersonalInfo;
