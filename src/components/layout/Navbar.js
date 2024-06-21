import React from 'react'
import "./Navbar.css";
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
    <nav className="nav-bar">
      <ul className="nav-links">
        <li className="nav-link">
        <NavLink  activeClassName="active" to="/home">Home</NavLink>
        <NavLink activeClassName="active" to="/profile">Profile</NavLink>
        <NavLink activeClassName="active" to="/setting">Settings</NavLink>       
        </li>
      </ul>
    </nav>
  </header>
  )
}

export default Navbar
