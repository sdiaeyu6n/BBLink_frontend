import React from "react";
import "./Dropdown.css";
import Dropdown from "./Dropdown";
import styled from "styled-components";

const Dd_categor = (props) => {
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
    <div id="Dd_categor">
      <StyledButton onClick={(e) => setDropdownVisibility(!dropdownVisibility)}>
        {dropdownVisibility ? "목록 닫기" : "정렬"}
      </StyledButton>
      <Dropdown visibility={dropdownVisibility}>
        <ul>
          <li>가나다 순</li>
          <li>리뷰순</li>
          <li>배달 빠른 순</li>
          <li>배달 팁 낮은 순</li>
          <li>거리 순</li>
        </ul>
      </Dropdown>
    </div>
  );
};

export default Dd_categor;