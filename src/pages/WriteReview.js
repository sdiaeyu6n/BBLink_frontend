import React from 'react';
import styled from 'styled-components';
import HeadButton from '../components/HeadButton';
import { useNavigate } from 'react-router-dom';

const StyledButton = styled.button`
height: 60px;
width: 200px;
background-color: #ffef82;
border-color:#ffef82;
font-size: 15px;
font-weight: 700;
border-radius:50px;
`;


const StyledButton2 = styled.button`
height: 50px;
width: 120px;
background-color: #ffef82;
border-color:#ffef82;
font-size: 20px;
font-weight: 700;
`;


function WriteReview() {
    const navigate = useNavigate();
 return (

<div>
<center>
<br/>     
<HeadButton text={'주문 내역'}/>
    <br/>      
    <br/>  

    <StyledButton>엽기떡볶이 동대문점</StyledButton>

&nbsp; &nbsp; &nbsp;
<StyledButton2  onClick={() => {
            navigate("/Review");
          }}>리뷰 작성</StyledButton2>
<br/>
<br/>

<StyledButton>봉추찜닭 서울대입구역점
</StyledButton>
&nbsp; &nbsp; &nbsp;
<StyledButton2 onClick={() => {
            navigate("/Review");
          }}>리뷰 작성</StyledButton2>

</center>
 </div>
 );
}
export default WriteReview;
