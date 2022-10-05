import React from 'react';
import CMInput from '../components/CMInput';
import {useNavigate} from "react-router-dom";
import HeadButton from '../components/HeadButton';
import styled from 'styled-components';
const StyledButton2 = styled.button`
height: 60px;
width: 200px;
background-color: #ffef82;
font-size: 20px;
font-weight: 700;
font-color:black;
`;

function JoinPage() {
   const navigate=useNavigate();
 return (
 <div>
    <center>
    <br />
    <HeadButton text={'회원가입'}/>
    <br/>
    <br/>
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
 <StyledButton2 onClick={()=>{
    navigate('/JoinAdress')
 }}>다음</StyledButton2>
 </center>
 </div>
 );
}
export default JoinPage;