import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <NavLink to="/courses" className="courses-link" />

      <NavLink to="/about" className="courses-about" />

      <NavLink to="/contacts" className="contacts-link" />
    </nav>
  );
}
