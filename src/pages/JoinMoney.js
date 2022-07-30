import React from 'react';
import CMInput from './components/CMInput';
import CMButton from './components/CMButton';
function JoinMoney() {
 return (
 <div>
    <center>
 <h1>회원가입</h1>
 <CMInput hint="결제 정보"/>
 <br />
 <br />
 <CMButton text="회원가입" />
 </center>
 </div>
 );
}
export default JoinMoney;