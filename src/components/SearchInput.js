import React from 'react';
import styled from 'styled-components';
// 이름 규칙 : CM + 태그명
// 이름 규칙 : Join + CM + 태그명
// 이름 규칙 : Join + CM + 태그명 + ?
const StyledInput = styled.input`
 height: 70px;
 width: 250px;
 border-radius: 10px;
 font-size: 15px;
 border: 2px solid gray;
 alignItems: 'center'
 justifyContent: 'center',
`;
function CMInput(props) {
 return <StyledInput placeholder={`먹고 싶은 메뉴를 찾아보세요!`} type={props.hint}
/>;
}
export default CMInput;