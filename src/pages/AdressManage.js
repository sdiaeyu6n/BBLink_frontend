import React from 'react';
import CMInput from '../components/CMInput';
import styled from 'styled-components';
import HeadButton from '../components/HeadButton';

const StyledButton = styled.button`
height: 60px;
width: 250px;
background-color: #ffef82;
border-color:#ffef82;
font-size: 15px;
font-weight: 700;
border-radius:50px;
`;

const StyledButton2 = styled.button`
height: 50px;
width: 80px;
background-color: #ffef82;
border-color:#ffef82;
font-size: 20px;
font-weight: 700;
`;
function AdressManage() {
 return (

<div>
<center>
<br/>     
<HeadButton text={'주소 관리'}/>
    <br/>      
    <br/>     
    
        
        <StyledButton>서울특별시 중구 필동로 1길30</StyledButton>

&nbsp; &nbsp; &nbsp;
<StyledButton2>삭제</StyledButton2>
<br/>
<br/>

    <StyledButton>
        경기도 고양시 일산동 동국로32</StyledButton>
        &nbsp; &nbsp; &nbsp;
        <StyledButton2>삭제</StyledButton2>
        <br/>
        <br/>
        <br/>
        <CMInput hint="주소" /><button>삭제</button>

</center>
 </div>
 );
}
export default AdressManage;
