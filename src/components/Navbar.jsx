import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-icon">🏛️</span>
          <span className="logo-text">SevaSetu <span className="logo-accent">AI</span></span>
        </NavLink>

        <button className={`navbar-toggle ${isOpen ? "active" : ""}`} onClick={toggleMenu} aria-label="Toggle Navigation">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <div className={`navbar-links ${isOpen ? "active" : ""}`}>
          <NavLink to="/" className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`} onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/assistant" className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`} onClick={closeMenu}>
            AI Assistant
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`} onClick={closeMenu}>
            Services
          </NavLink>
          <NavLink to="/scheme-finder" className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`} onClick={closeMenu}>
            Scheme Finder
          </NavLink>
          <NavLink to="/report-issue" className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`} onClick={closeMenu}>
            Report Issue
          </NavLink>
          <NavLink to="/track-complaint" className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`} onClick={closeMenu}>
            Track Complaint
          </NavLink>
          <NavLink to="/dashboard" className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`} onClick={closeMenu}>
            Dashboard
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`} onClick={closeMenu}>
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
