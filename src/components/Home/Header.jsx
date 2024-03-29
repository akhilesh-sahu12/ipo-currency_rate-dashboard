import React from "react";
import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsPersonCircle,
  BsSearch,
  BsJustify,
  BsGripVertical,
  BsBrightnessHighFill
} from "react-icons/bs";



function Header({ OpenSidebar }) {
  return (
    <header className="header">
      <div className="menu-icon">
        <BsJustify className="icon" onClick={OpenSidebar} />
      </div>
      <div className="header-left">
        <BsSearch className="icon" />
      </div>
      <div className="header-right">
      <BsBrightnessHighFill className="icon"/>
        <BsFillEnvelopeFill className="icon" />
        <BsFillBellFill className="icon" />
        <BsGripVertical className="icon" />
        <BsPersonCircle className="icon" />
      </div>
    </header>
  );
}

export default Header;
