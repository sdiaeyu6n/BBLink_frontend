import React from 'react';
import SearchInput from '../components/SearchInput';
import HeadButton from '../components/HeadButton';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components'; 
const MainPage=()=> {
    const navigate=useNavigate();

    const StyledButton = styled.button`
    height: 60px;
    width: 300px;
    background-color: #ffef82;
    border-color:#ffef82;
    font-size: 25px;
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
height: 100px;
width: 300px;
background-color: #ffef82;
border-color:#ffef82;
font-size: 20px;
font-weight: 700;
`;

 return (

<div className="MainPage">
<center>
    <br/>
    <label>서울특별시 중구 필동로 ▼</label>
    <br/>
    <br/>
 <SearchInput/>
 &nbsp;&nbsp;
 <StyledButton2 onClick={()=>{
navigate('/SelectPage')
}
}>검색</StyledButton2>

 <br/>
 <br/>
 <StyledButton onClick={()=>{
navigate('/CategoryPage')
}
}>배달</StyledButton>

 <br/>
 <br/>
 <StyledButton onClick={()=>{
navigate('/CategoryPage')
}
}>포장</StyledButton>

 <br/>
 <br/>
 <StyledButton3 onClick={()=>{
navigate('/CategoryPage')
}
}>현재 배달현황 확인하기</StyledButton3>
</center>
<br/>
<br/>
 <br/>
 </div>
 );
}
export default MainPage;
