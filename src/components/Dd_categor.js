import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

function Dd_categor() {
  // const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
    // <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
    // <Dropdown.Item href="#/action-1">프랜차이즈</Dropdown.Item> - 페이지 연결
    <Nav variant="pills" activeKey="1">
      <NavDropdown title="카테고리 선택" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.2">치킨</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">피자/양식</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.4">중식</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.4">한식</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.4">족발/보쌈</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.4">일식/돈까스</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.4">아시안/멕시칸</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.4">분식</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.4">카페/디저트</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.4">편의점/마트</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="정렬" id="nav-dropdown">
        <NavDropdown.Item eventKey="5.1">가나다 순</NavDropdown.Item>
        <NavDropdown.Item eventKey="5.2">리뷰 순</NavDropdown.Item>
        <NavDropdown.Item eventKey="5.3">배달 빠른 순</NavDropdown.Item>
        <NavDropdown.Item eventKey="5.4">배달팁 낮은 순</NavDropdown.Item>
        <NavDropdown.Item eventKey="5.5">거리 가까운 순</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );
}

export default Dd_categor;
