import React from 'react';
import CMInput from './components/CMInput';
import CMButton from './components/CMButton';
import {useNavigate} from "react-router-dom";

function JoinMoney() {
   const navigate=useNavigate();
 return (
 <div>
    <center>
 <h1>회원가입</h1>
 <CMInput hint="결제 정보"/>
 <br />
 <br />
 <button onClick={()=>{
    navigate('/')
 }}>회원가입</button>
 </center>
 </div>
 );
}
export default JoinMoney;