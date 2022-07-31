import React from 'react';
import styled from 'styled-components';
const StyledButton = styled.button`
 height: 70px;
 width: 300px;
 border-radius: 10px solid black;
 border: 10px;
 background-color: #FFEF82;
 font-size: 30px;
 font-weight: 700;
`;
function HeadButton(props) {
 return <StyledButton>{props.text}</StyledButton>;
}
export default HeadButton;