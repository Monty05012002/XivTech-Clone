import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className="nav">
      <div className="nav-top">
        <img src="https://www.xivtech.io./logo.svg" alt="" />
        <img src="https://www.xivtech.io./Text.svg" alt="" />
      </div>
      <div className="nav-menu">
        {["Services", "Career", "About", "Contact"].map((item, index) => (
          <div key={index} className="nav-menu-item">
            {item}
          </div>
        ))}
        <div className="nav-menu-item nav-btn">Let's Talk</div>
      </div>
    </div>
  );
}

export default Navbar;
