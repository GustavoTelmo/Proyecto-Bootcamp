import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "../style/layout.css";

function Layout() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <div className={`nav-items ${isOpen && "open"}`}>
        <Link to="/">Home</Link>
        <Link to="/contact">Contacto</Link>
        <Link to="/form">Alta</Link>
        <Link to="/nosotros">Nosotros</Link>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
      <Outlet />
    </div>
  );
}

export default Layout;
