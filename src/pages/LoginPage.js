import React from 'react';
import CMInput from '../components/CMInput';
import HeadButton from '../components/HeadButton'
import {useNavigate} from "react-router-dom";
import styled from 'styled-components';
const StyledButton2 = styled.button`
height: 60px;
width: 200px;
background-color: #ffef82;
font-size: 20px;
font-weight: 700;
font-color:black;
`;

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

 <StyledButton2 onClick={()=>{
    navigate('/MainPage')
 }}>로그인</StyledButton2>
 <br />
 <br />

 <StyledButton2 onClick={()=>{
    navigate('/JoinPage')
 }}>회원가입하기</StyledButton2>



 </center>
 </div>
 );
}
export default LoginPage;
