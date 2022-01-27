import React from "react";
import "../styles/navbar.scss";
import Logo from "../images/react_logo.png"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar_logo">
        <img src={Logo} />
        <h1>Todo List</h1>
      </div>      
      <div className="navbar_menu">
        <ul>
          <li>
            <a>Összes</a>
          </li>
          <li>
            <a>Aktív</a>
          </li>
          <li>
            <a>Teljesített</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
