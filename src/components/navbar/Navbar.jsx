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
              <button
                onClick={() => setToggleMenu(false)}
                style={{ all: "unset", cursor: "pointer" }}
              >
                <img src={toggleBarClose} alt="Close menu" />
              </button>
            ) : (
              <button
                onClick={() => setToggleMenu(true)}
                style={{ all: "unset", cursor: "pointer" }}
              >
                <img src={toggleBar} alt="Open menu" />
              </button>
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
