import Dd_categor from "../components/Dd_categor";
import StoreMain from "../components/StoreMain";

import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";

const StoreList = () => {
  return (
    <div
      style={{
        margin: 20,
        padding: 20,
      }}
    >
      <div id="StoreList">
        <Dd_categor />
        <StoreMain />
      </div>
    </div>
  );
};

export default StoreList;
