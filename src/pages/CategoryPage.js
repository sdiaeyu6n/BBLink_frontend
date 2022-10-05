import React from 'react';
import SearchInput from '../components/SearchInput';
import styled from 'styled-components';
import { useNavigate } from 'react-router';
function CategoryPage() {

    const navigate=useNavigate();
    const StyledButton2 = styled.button`
    height: 75px;
    width: 105px;
    background-color: #ffef82;
    border-color:#ffef82;
    font-size: 15px;
    font-weight: 600;
  `;

  const StyledButton3 = styled.button`
  height: 50px;
  width: 80px;
  background-color: #ffef82;
  border-color:#ffef82;
  font-size: 20px;
  font-weight: 700;
`;
  
 return (

<div>
<center>
<br/>
 <br/>
 <SearchInput/>

 &nbsp;&nbsp;
 <StyledButton3 onClick={()=>{
navigate('/SelectPage')
}
}>검색</StyledButton3>
 <br/>
 <br/>

 <StyledButton2>포장</StyledButton2>   <StyledButton2>한식</StyledButton2>  <StyledButton2>치킨</StyledButton2>
 <br/>
 <br/>
 <StyledButton2>분식</StyledButton2>   <StyledButton2>돈까스</StyledButton2>  <StyledButton2>족발/보쌈</StyledButton2>
 <br/>
 <br/>
 <StyledButton2>찜/탕</StyledButton2>   <StyledButton2>구이</StyledButton2>  <StyledButton2>피자</StyledButton2>
 <br/>
 <br/>
 <StyledButton2>중식</StyledButton2>   <StyledButton2>일식</StyledButton2>  <StyledButton2>회/해물</StyledButton2>
 <br/>
 <br/>
 <StyledButton2>양식</StyledButton2>   <StyledButton2>커피/차</StyledButton2>  <StyledButton2>디저트</StyledButton2>
 <br/>
 <br/>

 
</center>
<br/>
<br/>
 <br/>
 </div>
 );
}
export default CategoryPage;
