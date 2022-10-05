import React from 'react';
import styled from 'styled-components';
import HeadButton from '../components/HeadButton';
function greeting(){
alert('click!');
document.location.href('/')
}

const StyledButton3 = styled.button`
height: 60px;
width: 300px;
background-color: #ffef82;
border-color:#ffef82;
font-size: 25px;
font-weight: 700;
border-radius:50px;
`;

function Settings() {
 return (
 <div>
    <center>
    <br/>
    <HeadButton text={'공지사항'}/>
    <br/>
    <br/>
 <StyledButton3 onClick={greeting}> 버전 업데이트 관련 공지 </StyledButton3>
 <br/>
 <br/> 
 <StyledButton3>배달팁 관련 공지</StyledButton3>
 <br/>
 <br/>
 <StyledButton3>환영합니다.</StyledButton3>
 <br/>
 <br/>

 </center>
 </div>
 );
}


export default Settings;
