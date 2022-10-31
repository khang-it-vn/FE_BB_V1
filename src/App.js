import React, { useState } from "react";
import "./App.css";
import Nav from "./Document/Router_Document/Nav";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import HealthConfirmation from "./view/Doctor/HealthConfirmation/HealthConfirmation";
import BloodDonationConfirmation from "./view/Doctor/BloodDonationConfirmation/BloodDonationConfirmation";
import ViewBloodStore from "./view/Doctor/ManageBlood/ViewBloodStore";
import AddBlood from "./view/Doctor/ManageBlood/AddBlood";
import AddEvent from "./view/Doctor/ManageEvent/AddEvent";
import ViewEvent from "./view/Doctor/ManageEvent/ViewEvent";
import AddEventDefault from "./view/Doctor/ManageEventDefault/AddEventDefault";
import ViewEventDefault from "./view/Doctor/ManageEventDefault/ViewEventDefault";
import RequestBlood from "./view/Doctor/RequestBlood/RequestBlood";
import BloodResult from "./view/Doctor/BloodResult/BloodResult";
import NavBar from "./Document/Component_siderbar_doc/NavBar";
import Home from "./Document/Pages_doc/home"
import Product from "./Document/Pages_doc/product"
import Report from "./Document/Pages_doc/report"
import Sidebar from "./Document/DropdownMenuDoc/SideBar"
import Login from "./Screen/Component/Login/Login"
import DetailEvent from "./view/Doctor/ManageEvent/DetailEvent";
function App() {
  return (

    <BrowserRouter>
       <Sidebar />
      
      <Switch>
        {/* xác nhận sức khỏe */}
        <Route path="/doctor/health-confirmation">
          <HealthConfirmation />
        </Route>
        {/* xác nhận lấy máu */}
        <Route path="/doctor/blood-donation-confirmation">
          <BloodDonationConfirmation />
        </Route>
        {/* thêm máu vào kho */}
        <Route path="/doctor/add-blood">
          <AddBlood />
        </Route>
        {/* xem thông tin máu trong kho */}
        <Route path="/doctor/view-blood-store">
          <ViewBloodStore />
        </Route>
        {/* Tạo sự kiện hiến máu */}
        <Route path="/doctor/add-event">
          <AddEvent />
        </Route>
        {/* Xem chi tiết sự kiện hiến máu */}
        <Route path="/doctor/view-event/:idsk">
          <DetailEvent />
        </Route>
        {/* Xem danh sách sự kiện hiến máu */}
        <Route path="/doctor/view-event">
          <ViewEvent />
        </Route>
        {/* Tạo điểm hiến máu cố định*/}
        <Route path="/doctor/add-event-default">
          <AddEventDefault />
        </Route>
        {/* Xem điểm hiến máu cố định*/}
        <Route path="/doctor/view-event-default">
          <ViewEventDefault />
        </Route>
        {/* Yêu cầu nhận máu*/}
        <Route path="/doctor/request-blood">
          <RequestBlood/>
        </Route>
         {/* Thông báo kết quả máu*/}
         <Route path="/doctor/blood-result">
          <BloodResult/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
