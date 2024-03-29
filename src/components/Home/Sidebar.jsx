import React from "react";
import { Link } from 'react-router-dom';

import {
  BsFillEnvelopeFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsPersonLock,
  BsGraphUpArrow,
  BsFillGearFill,
  BsHouseDoorFill,
  BsBarChartLine
} from "react-icons/bs";


function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : "" } >
      <div className="sidebar-title">
      <Link to="/">
        <div className="sidebar-brand">
          <BsGraphUpArrow className="icon_header" /> IPOs & Currency Rates
        </div>
        </Link>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Link to="/">
            <BsHouseDoorFill className="icon" /> Home
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/dashboard">
            <BsFillGrid3X3GapFill className="icon" /> IPOs & Currency Rate
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/chart">
            <BsBarChartLine className="icon" /> Charts
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/login">
            <BsPeopleFill className="icon" /> Login
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/register">
            <BsPersonLock className="icon" /> Register
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/settings">
            <BsFillGearFill className="icon" /> Settings
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/contact">
            <BsFillEnvelopeFill className="icon" /> Contact us
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
