import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>acceuil</li>
        </NavLink>
        <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>about</li>
        </NavLink>
        <NavLink
          to="/blog"
          className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>blog</li>
        </NavLink>
      </ul>
    </div>
  );
}

export default Navigation;
