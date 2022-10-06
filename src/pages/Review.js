import React from 'react';
import CMInput from '../components/CMInput';
import Button from "react-bootstrap/Button";
import styled from 'styled-components';


const StyledButton3 = styled.button`
height: 50px;
width: 200px;
background-color: #ffef82;
border-color:#ffef82;
font-size: 20px;
font-weight: 700;
`;
function Review() {


 return (

<div>
<center>

        <StyledButton3>리뷰 작성하기</StyledButton3>
        <br/>
        <br/>

        <p style={{ fontSize: 20 }}>
        별점 ☆☆☆☆☆
        </p>
        <br/>
        <CMInput hint="리뷰" />
        &nbsp;
        <Button
          variant="warning"
          style={{ width: 70, fontSize: 18 }}
        >
          <b>추가</b>
        </Button>
    
        <br/>
        <br/>
        <Button
          variant="warning"
          style={{ width: 150, fontSize: 18 }}
        >
          <b>사진 추가하기</b>
        </Button>
        <br/>
        <br/>

</center>
 </div>
 );
}
export default Review;
