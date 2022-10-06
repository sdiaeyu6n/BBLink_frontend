import React from 'react';
import HeadButton from '../components/HeadButton';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';


const StyledButton2 = styled.button`
height: 60px;
width: 80px;
background-color: #ffef82;
font-size: 20px;
font-weight: 700;
font-color:black;
`;

const StyledButton = styled.button`
height: 60px;
width: 200px;
background-color: #ffef82;
font-size: 15px;
font-weight: 700;
font-color:black;
`;


   
function TwinkleOrder() {
        const navigate = useNavigate();
 return (

<div>
<center>
<br/>
<HeadButton text={'반짝주문'}/>
        <br/>
        <br/>
        
        <img className="red heart" src="img/red heart.png" height='50' width='50'/>
        &nbsp; &nbsp; 
        <StyledButton
          onClick={() => {
            navigate("/TwinkleReorder");
          }}
        >
         봉추찜닭 서울대입구역점
        </StyledButton>

        &nbsp; &nbsp; 
        <StyledButton2>삭제</StyledButton2>
        <br/>
        <br/>

        <img className="red heart" src="img/red heart.png" height='50' width='50'/>
        &nbsp; &nbsp; 
        <StyledButton>엽기떡볶이 동대문점</StyledButton>
        &nbsp; &nbsp; 
        <StyledButton2>삭제</StyledButton2>
        <br/>
        <br/>

        <img className="red heart" src="img/red heart.png" height='50' width='50'/>
        &nbsp; &nbsp; 
        <StyledButton>맥도날드 명동점</StyledButton>
        &nbsp; &nbsp; 
        <StyledButton2>삭제</StyledButton2>

</center>
 </div>
 );
}
export default TwinkleOrder;
