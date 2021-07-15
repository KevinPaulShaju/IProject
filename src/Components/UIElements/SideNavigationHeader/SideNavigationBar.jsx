import React from "react";
import { NavLink } from "react-router-dom";
import "./SideNavigationBar.css";

const SideNavigationBar = () => {
  return (
    <div className="wrapper">
      <div className="links-container">
        <h4 className="nav-heading">Agri Purchase Management</h4>
        <ul className="nav-links">
          <li>
            <NavLink className="NavLinks" to="/inputMaintenance">
              Agri-Input Master Maintenance
            </NavLink>
          </li>
          <li>
            <NavLink className="NavLinks" to="/supplierMaintenance">
              Supplier Master Maintenance
            </NavLink>
          </li>
          <li>
            <NavLink className="NavLinks active" exact to="/purchasereq">
              Agri-Input Purchase Requests
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNavigationBar;
