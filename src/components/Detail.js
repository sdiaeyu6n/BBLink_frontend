// let TabContentTitle = styled.div`
//   font-size: 30px;
//   font-weight: bold;
//   background: #eee;
//   padding: 200px 0;
// `;
// let [tab, setTab] = useState(0);

// <Nav className="mt-5" variant="tabs" defaultActiveKey="0">
// <Nav.Item>
//   <Nav.Link eventKey="0">메뉴</Nav.Link>
// </Nav.Item>
// <Nav.Item>
//   <Nav.Link eventKey="1">정보</Nav.Link>
// </Nav.Item>
// <Nav.Item>
//   <Nav.Link eventKey="2">리뷰</Nav.Link>
// </Nav.Item>
// </Nav>

// <Nav className="mt-5" variant="tabs" defaultActiveKey="0">
// <Nav.Item>
//   <Nav.Link eventKey="link-0" onClick={() => setTab(0)}>
//     메뉴
//   </Nav.Link>
// </Nav.Item>
// <Nav.Item>
//   <Nav.Link eventKey="link-1" onClick={() => setTab(1)}>
//     정보
//   </Nav.Link>
// </Nav.Item>
// <Nav.Item>
//   <Nav.Link eventKey="link-2" onClick={() => setTab(2)}>
//     리뷰
//   </Nav.Link>
// </Nav.Item>
// </Nav>
// <TabContent tab={tab} />
// function TabContent(props) {
//     if (props.tab === 0) {
//       return <TabContentTitle className="mt-5">메뉴 내용입니다.</TabContentTitle>;
//     } else if (props.tab === 1) {
//       return <TabContentTitle className="mt-5">가게 정보입니다.</TabContentTitle>;
//     } else if (props.tab === 2) {
//       return <TabContentTitle className="mt-5">리뷰 내용입니다.</TabContentTitle>;
//     }
//   }
