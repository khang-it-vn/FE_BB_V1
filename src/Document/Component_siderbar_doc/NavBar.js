import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import { Link ,NavLink} from "react-router-dom";
import { SideBarData } from "./SideBarData";
import "./NavBar.css";
import { IconContext } from "react-icons";
import logo from "../../img/logo.png";
function NavBar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <IconContext.Provider value={{color: '#fff'}}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items">
            <li className="nav-text img-logo">
              <img src={logo}/>
            </li>

            <li className="nav-text ">
              <NavLink to="/Home"><RiIcons.RiHealthBookFill/> <span>Xác nhận sức khỏe</span></NavLink>
              <ul>
                <li>xin chao</li>
              </ul>
            </li>
            
            
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default NavBar;
