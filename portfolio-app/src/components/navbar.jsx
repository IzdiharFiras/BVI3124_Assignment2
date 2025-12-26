import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <header className="header">
      <div className="logo">PORTFOLIO RESUME</div>
      <nav className="nav-menu">
        <ul>
          <li><button onClick={() => window.location.href = "#hero"}>HOME</button></li>
          <li><button onClick={() => window.location.href = "#about"}>ABOUT</button></li>
          <li><button onClick={() => window.location.href = "#education"}>EDUCATION</button></li>
          <li><button onClick={() => window.location.href = "#skills"}>SKILLS</button></li>
          <li><button onClick={() => window.location.href = "#projects"}>PROJECT</button></li>
          <li><button onClick={() => window.location.href = "#achievements"}>ACHIEVEMENT</button></li>
          <li><button onClick={() => window.location.href = "#contact"}>CONTACT</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
