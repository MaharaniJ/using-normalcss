import React, { useState } from "react";
import "./css/navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img
            src="https://i.pinimg.com/736x/0d/cf/b5/0dcfb548989afdf22afff75e2a46a508.jpg"
            alt="logo"
          />
        </div>
        <div className="menu" onClick={() => setOpen(!open)}>
          <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
        </div>
        <div className={`nav-elements ${open && "active"}`}>
          <ul className={`ul ${open ? "left-0" : "left-[-100%]"}`}>
            <li>Home</li>
            <li>About</li>
            <li>Work</li>
            <li>Service</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
