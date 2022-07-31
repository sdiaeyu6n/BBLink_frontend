import React from 'react';
import CMInput from './components/CMInput';
import CMButton from './components/CMButton';
function JoinAdress() {
 return (
 <div>
    <center>
 <h1>회원가입</h1>
 <CMInput hint="배달 주소" />
 <br />
 <br />
 <CMButton text="다음" />
 </center>
 </div>
 );
}
export default JoinAdress;