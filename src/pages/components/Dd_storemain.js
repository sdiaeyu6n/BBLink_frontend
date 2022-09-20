import React from "react";
import "./Dropdown.css";
import Dropdown from "./Dropdown";
import styled from "styled-components";

const Dd_storemain = (props) => {
  const [dropdownVisibility, setDropdownVisibility] = React.useState(false);
  const StyledButton = styled.button`
    margin-right: 20%
    height: 300px;
    width: 300px;
    border: 2px solid black;
    background-color: #ffef82;
    font-size: 25px;
    font-weight: 700;
  `;

  return (
    <div id="Dd_storemain">
      <StyledButton onClick={(e) => setDropdownVisibility(!dropdownVisibility)}>
        {dropdownVisibility ? "목록 닫기" : "카테고리 보기"}
      </StyledButton>
      <Dropdown visibility={dropdownVisibility}>
        <ul>
          <li>프랜차이즈</li>
          <li>치킨</li>
          <li>피자/양식</li>
          <li>중국집</li>
          <li>한식</li>
          <li>일식/돈까스</li>
          <li>족발/보쌈</li>
          <li>야식</li>
          <li>분식</li>
          <li>카페/디저트</li>
          <li>편의점/마트</li>
        </ul>
      </Dropdown>
    </div>
  );
};

export default Dd_storemain;