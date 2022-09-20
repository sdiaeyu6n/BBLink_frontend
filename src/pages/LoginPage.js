import React from 'react';
import CMButton from './components/CMButton';
import CMInput from './components/CMInput';
import HeadButton from './components/HeadButton'
import {useNavigate} from "react-router-dom";
function LoginPage() {
    const navigate=useNavigate();
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
 <button onClick={()=>{
    navigate('/MainPage')
 }}>로그인</button>
 <br />
 <br />

 <button onClick={()=>{
    navigate('/JoinPage')
 }}>회원가입하기</button>



 </center>
 </div>
 );
}
export default LoginPage;
