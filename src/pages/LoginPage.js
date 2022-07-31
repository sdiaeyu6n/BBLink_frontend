import React from 'react';
import CMButton from './components/CMButton';
import CMInput from './components/CMInput';
import HeadButton from './components/HeadButton'
function LoginPage() {
 return (
 <div>
    <center>
    <br />
<HeadButton text={'로그인'}/>
 <h1>아이디 </h1> 
 <CMInput hint="아이디"/>
 <br />
 <h1>비밀번호 </h1>
 <CMInput hint="비밀번호" type="text" />
 <br />
 <br />
 <br />
 <CMButton text={'로그인'} />
 </center>
 </div>
 );
}
export default LoginPage;
