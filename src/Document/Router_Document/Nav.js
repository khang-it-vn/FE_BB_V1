import React from "react";
import "./Nav.css";
import {  NavLink } from "react-router-dom";
export default class Nav extends React.Component {
  render() {
    return (
      <div className="topnav">
       
        <NavLink  to="/doctor/health-confirmation" activeClassName="active">Xác nhận sức khỏe</NavLink>
        <NavLink  to="/doctor/blood-donation-confirmation" activeClassName="active">Xác nhận lấy máu</NavLink>
        <NavLink  to="/doctor/view-blood-store" activeClassName="active">Quản lý máu</NavLink>
        

      </div>
    );
  }
}
