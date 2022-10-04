import React from 'react';
import CMInput from '../components/CMInput';
import {useNavigate} from "react-router-dom";

function JoinAdress() {
   const navigate=useNavigate();
 return (
 <div>
    <center>
 <h1>회원가입</h1>
 <CMInput hint="배달 주소" />
 <br />
 <br />
 <button onClick={()=>{
    navigate('/JoinMoney')
 }}>다음</button>
 </center>
 </div>
 );
}
export default JoinAdress;