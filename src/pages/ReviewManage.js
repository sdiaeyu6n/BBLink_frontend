import React from 'react';

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

const StyledButton3 = styled.button`
height: 50px;
width: 200px;
background-color: #ffef82;
border-color:#ffef82;
font-size: 20px;
font-weight: 700;
`;
function ReviewManage() {
 return (

<div>
<center>
<br/>     
<HeadButton text={'리뷰 관리'}/>
    <br/>      
    <br/>  

    <StyledButton>엽기떡볶이 동대문점</StyledButton>

&nbsp; &nbsp; &nbsp;
<StyledButton2>삭제</StyledButton2>
<br/>
<br/>

<StyledButton>봉추찜닭 서울대입구역점
</StyledButton>
&nbsp; &nbsp; &nbsp;
<StyledButton2>삭제</StyledButton2>
<br/>
<br/>
    <label>
        엽기떡볶이 동대문점
        별점 5.0
        너무 맛있어요~</label>
        &nbsp; &nbsp; &nbsp;
        <button>삭제</button>
        <br/>

    <label>
        봉추찜닭 서울대입구역점
        별점 4.8
        양이 엄청 많아요!</label>
        &nbsp; &nbsp; &nbsp;
        <button>삭제</button>
        <br/>
        <br/>
        <br/>
        <StyledButton3>리뷰 작성하기</StyledButton3>
        <br/>
        <br/>
</center>
 </div>
 );
}
export default ReviewManage;
