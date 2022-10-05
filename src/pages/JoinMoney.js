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
function JoinMoney() {
   const navigate=useNavigate();
 return (
 <div>
    <center>

    <br/>
  
 <HeadButton text={'회원가입'}/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
 <CMInput hint="결제 정보"/>
 <br />
 <br />
 <StyledButton2 onClick={()=>{
    navigate('/')
 }}>회원가입</StyledButton2>
 </center>
 </div>
 );
}
export default JoinMoney;