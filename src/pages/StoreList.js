import Dd_categor from "../components/Dd_categor";
import StoreMain from "../components/StoreMain";
import React, { useState } from "react";

import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";

const StoreList = () => {
  const [store, setstores] = useState([
    {
      id: 1,
      title: "끝내주는 마라탕",
    },
  ]);

  return (
    <div
      style={{
        margin: 20,
        padding: 20,
      }}
    >
      <div id="StoreList">
        <Dd_categor />
        <StoreMain id={setstores.id} />
      </div>
    </div>
  );
};

export default StoreList;
