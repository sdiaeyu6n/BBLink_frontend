import LoginPage from "./pages/LoginPage";
import JoinPage from "./pages/JoinPage";
import { BrowserView, MobileView } from "react-device-detect";
import JoinAdress from "./pages/JoinAdress";
import JoinMoney from "./pages/JoinMoney";
import MyPage from "./pages/MyPage";
import CategoryPage from "./pages/CategoryPage";
import AdressManage from "./pages/AdressManage";
import ReviewManage from "./pages/ReviewManage";
import WriteReview from "./pages/WriteReview";
import Settings from "./pages/Settings";
import Notice from "./pages/Notice";
import PersonalInfo from "./pages/PersonalInfo";
import MainPage from "./pages/MainPage";
import ToggleSwitch from "./components/ToggleSwitch";
import React from "react";
import { useState } from "react";
import OrderComplete from "./pages/OrderComplete";
import DeliveryNow from "./pages/DeliveryNow";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import RouteTest from "./components/RouteTest";
import Users from "./Users";
import BottomNav from "./components/BottomNav";
import TwinkleOrder from "./pages/TwinkleOrder";
import StoreList from "./pages/StoreList";
import Store from "./pages/Store";
import MenuOption from "./pages/MenuOption";
import MyBag from "./pages/MyBag";
import SelectPage from "./pages/SelectPage";
import Payment from "./pages/Payment";
import PayFin from "./pages/PayFin";
import StoreInfo from "./pages/StoreInfo";
import StoreReview from "./pages/StoreReview";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/MainPage" element={<MainPage />} />
          <Route path="/TwinkleOrder" element={<TwinkleOrder />} />
          <Route path="/WriteReview" element={<WriteReview />} />
          <Route path="/MyPage" element={<MyPage />} />

          <Route path="/" element={<LoginPage />} />
          <Route path="/JoinPage" element={<JoinPage />} />
          <Route path="/JoinMoney" element={<JoinMoney />} />
          <Route path="/JoinAdress" element={<JoinAdress />} />

          <Route path="/PersonalInfo" element={<PersonalInfo />} />
          <Route path="/AdressManage" element={<AdressManage />} />
          <Route path="/ReviewManage" element={<ReviewManage />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/Notice" element={<Notice />} />
          <Route path="/CategoryPage" element={<CategoryPage />} />
          <Route path="/OrderComplete" element={<OrderComplete />} />
          <Route path="/DeliveryNow" element={<DeliveryNow />} />

          <Route path="/SelectPage" element={<SelectPage />} />
          <Route path="/storelist" element={<StoreList />} />
          <Route path="/storelist/:id" element={<Store />} />
          <Route path="/menuoption" element={<MenuOption />} />
          <Route path="/mybag" element={<MyBag />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/payfin" element={<PayFin />} />
          <Route path="/storeinfo" element={<StoreInfo />} />
          <Route path="/storereview" element={<StoreReview />} />
        </Routes>
        {/* <BottomNav/> */}
        {/* <RouteTest/>

  <Users />; */}
        {/* 
<hr></hr>가게 선택 페이지<hr></hr>
        <StoreList />
        <hr></hr>가게 메인 페이지<hr></hr>
        <Store />
        <hr></hr>메뉴 옵션 선택 페이지<hr></hr>
        <MenuOption />
        <hr></hr>장바구니 페이지<hr></hr>
        <MyBag />
<BottomNav/>
<hr/>
<LoginPage /> 
 <hr />
 <JoinPage />
 <hr />
 <JoinAdress/>
 <hr />
 <JoinMoney/>
 <hr/>
<MainPage/>
<hr/>
<MyPage/>
<hr/>
<CategoryPage/>
<hr/>
<PersonalInfo/>
<hr/>
<AdressManage/>
<hr/>
<ReviewManage/>
<hr/>
<WriteReview/>
<hr/>
<Settings/>
<hr/>
<Notice/>
<hr/>
<ToggleSwitch/>
 <br/><br/><br/>
<hr/>
<OrderComplete/>
<hr/>
<DeliveryNow/>

  <hr/>
  <MenuOption/>

  <hr/>
  <TwinkleOrder/> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
