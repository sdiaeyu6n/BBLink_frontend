import React from "react";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

function DropDown2() {
  // const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
    // <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
    // <Dropdown.Item href="#/action-1">프랜차이즈</Dropdown.Item> - 페이지 연결
    <Nav variant="pills" activeKey="1">
      <NavDropdown title="메뉴 목록 열기" id="nav-dropdown">
        <NavDropdown.Item eventKey="6.1">주문했던 메뉴</NavDropdown.Item>
        <NavDropdown.Item eventKey="6.2">대표 메뉴</NavDropdown.Item>
        <NavDropdown.Item eventKey="6.3">세트 메뉴</NavDropdown.Item>
        <NavDropdown.Item eventKey="6.4">단품 메뉴</NavDropdown.Item>
        <NavDropdown.Item eventKey="6.5">사이드</NavDropdown.Item>
        <NavDropdown.Item eventKey="6.6">음료</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );
}

export default DropDown2;
