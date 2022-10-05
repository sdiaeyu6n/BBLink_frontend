import React from 'react';
import CMInput from '../components/CMInput';

import styled from 'styled-components';
import HeadButton from '../components/HeadButton';



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

const StyledButton3 = styled.button`
height: 50px;
width: 200px;
background-color: #ffef82;
border-color:#ffef82;
font-size: 20px;
font-weight: 700;
`;
function WriteReview() {
 return (

<div>
<center>
<br/>     
<HeadButton text={'주문 내역'}/>
    <br/>      
    <br/>  

    <StyledButton>엽기떡볶이 동대문점</StyledButton>

&nbsp; &nbsp; &nbsp;
<StyledButton2>리뷰 작성</StyledButton2>
<br/>
<br/>

<StyledButton>봉추찜닭 서울대입구역점
</StyledButton>
&nbsp; &nbsp; &nbsp;
<StyledButton2>리뷰 작성</StyledButton2>

        <br/>
        <br/>
        <br/>
        <StyledButton3>리뷰 작성하기</StyledButton3>
        <br/>
        <br/>

        <label>
        별점
        <br/> </label>
        <CMInput hint="리뷰" /><button>추가</button>
        <br/>
        <label>사진 넣을 자리!</label>
        <br/>
        <br/>

</center>
 </div>
 );
}
export default WriteReview;
