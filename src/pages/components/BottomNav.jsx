import React from "react";
import "./BottomNav.css";
// 사용할 아이콘 import
import "./FontAwesome";
import {Link} from "react-router-dom";
// FontAwesomIcon 컴포넌트를 사용하기 위해 import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const BottomNav = () => {
  return (
    <nav className="wrapper">
      {/* 하단 네비게이션 최상위 태그 */}
      <div>
        <Link to="/MainPage" className="nav-link">
        <FontAwesomeIcon icon="home" /> {/* 네비게이션을 구성하고 있는 하나의 버튼 */}
        </Link>
      </div>
      <div>
      <Link to="/TwinkleOrder" className="nav-link">
      <FontAwesomeIcon icon="fa-solid fa-star" />
      </Link>
      </div>
      <div>
      <Link to="/WriteReview" className="nav-link">
      <FontAwesomeIcon icon="fa-solid fa-list" />
      </Link>
      </div>
      <div>
      <Link to="/MyPage" className="nav-link">
        <FontAwesomeIcon icon="user" />
        </Link>
      </div>
    </nav>
  );
};

export default BottomNav;