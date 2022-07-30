import React from 'react';
import CMInput from './components/CMInput';
import CMButton from './components/CMButton';
function JoinPage() {
 return (
 <div>
    <center>
 <h1>회원가입</h1>
 <CMInput hint="아이디" type="name" />
 <br />
 <br />
 <CMInput hint="비밀번호" type="password" />
 <br />
 <br />
 <CMInput hint="전화번호" />
 <br />
 <br />
 <CMInput hint="알러지 정보" />

 <br />
 <br />
 <CMButton text="다음" />
 </center>
 </div>
 );
}
export default JoinPage;