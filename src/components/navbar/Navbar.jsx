import React, { useState } from "react";
import "./navbar.css";
import toggleBar from "../../assets/toggleBar.png";
import toggleBarClose from "../../assets/toggleBarClose.png";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const Menu = () => (
    <>
      <p>
        <a href="#home">Home</a>
      </p>
      <p>
        <a href="#about">About</a>
      </p>
      <p>
        <a href="#skills">Porfolio</a>
      </p>
      <p>
        <a href="#footer">Contact</a>
      </p>
    </>
  );
  return (
    <div>
      <div className="navbar">
        <div className="navbar-links">
          <div className="navbar-links_logo">
            <p>aswin.</p>
          </div>
          <div className="navbar-links_container">
            <Menu />
          </div>
        </div>
        <div className="navbar-menu">
          <div className="navbar-menu_toggle">
            {toggleMenu ? (
              <a onClick={() => setToggleMenu(false)}>
                <img src={toggleBarClose} alt="" />
              </a>
            ) : (
              <a onClick={() => setToggleMenu(true)}>
                <img src={toggleBar} alt="" />
              </a>
            )}
          </div>
          {toggleMenu ? (
            <div className="navbar-menu_container">
              <div className="navbar-menu_container-links">
                <Menu />
              </div>
            </div>
          ) : null}
        </div>
      </div>

      <div className="navbar-border"></div>
    </div>
  );
}

export default Navbar;
