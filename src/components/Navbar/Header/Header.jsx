import React from "react";
import "./Header.css";
import headerLogo from "../../../image/logo.png";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
   const navigate = useNavigate();
   return (
      <div id="header">
         <div className="container">
            <div className="header">
               <div className="header__logo">
                  <img
                     onClick={() => navigate("/")}
                     src={headerLogo}
                     alt="header-logo"
                  />
               </div>
               <nav className="header__nav">
                  <NavLink to="/">Menu</NavLink>
                  <NavLink to="/orders">Orders</NavLink>
                  <NavLink to="/admin">Admin</NavLink>
               </nav>
            </div>
         </div>
      </div>
   );
};

export default Header;
