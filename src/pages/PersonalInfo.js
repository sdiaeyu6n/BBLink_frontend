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
function PersonalInfo() {
 return (

<div>
<center>
<br/>     
<HeadButton text={'개인정보 관리'}/>
    <br/>      
    <br/>     
    
    <StyledButton>사용자모드: 저시력자</StyledButton>

        &nbsp; &nbsp; &nbsp;
        <StyledButton2>변경</StyledButton2>
        <br/>
        <br/>

        <StyledButton>닉네임 관리
        </StyledButton>
        &nbsp; &nbsp; &nbsp;
        <StyledButton2>변경</StyledButton2>
        <br/>
        <br/>

        <StyledButton>비밀번호 변경
        </StyledButton>
        &nbsp; &nbsp; &nbsp;
        <StyledButton2>변경</StyledButton2>
        <br/>
        <br/>

        <StyledButton>알러지 정보 관리
        </StyledButton>
        &nbsp; &nbsp; &nbsp;
        <StyledButton2>변경</StyledButton2>
        <br/>
        <br/>
    
        <StyledButton>결제 정보 관리
        </StyledButton>
        &nbsp; &nbsp; &nbsp;
        <StyledButton2>변경</StyledButton2>
        <br/>
        <br/>
        {/* <label>
            팝업창으로 만들고임
        </label>
        <br/>
        <CMInput hint="변경할 내용" /><button>변경</button> */}

</center>
 </div>
 );
}
export default PersonalInfo;
