import React from 'react';
import "./navbar.scss";

export default function Navbar({menuOpen , setMenuOpen}) {
  return (
    <div className={"Navbar  "  + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo" alt="mm">DMT-DEV/</a>
          <div className="itemContainer22">
            <p className="icon"></p>
            <span></span>

          </div>

          <div className="itemContainer22">
            <p className="icon"></p>
            <span></span>

          </div>
        
        
        </div>

        <div className="right">
            <div className="hamburger" onClick={() => setMenuOpen (!menuOpen)}>
                <span className="linea1"></span>
                <span className="linea2"></span>
                <span className="linea3"></span>
            </div>
            
        </div>
      </div>
    </div>
  );
};
 



