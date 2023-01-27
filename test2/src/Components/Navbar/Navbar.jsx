import React from "react";
import style from "./Navbar.module.scss";
import { FaBars } from "react-icons/fa";

function Navbar() {
  return (
    <div className={style.Navbar}>
      <h1>logo</h1>
      <i>
        <FaBars />
      </i>
    </div>
  );
}

export default Navbar;
