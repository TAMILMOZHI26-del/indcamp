// Navbar.js
import React from "react";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import './Navbar.css';


const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Assessment",
    path: "#",
  },
  {
    id: 3,
    title: "Contact Us",
    path: "#",
  },
];

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        {/* Logo section */}
        <div className="logo">
          <h1>EdueX</h1>
        </div>
        {/* Menu section */}
        <div className="menu">
          <ul>
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <a href={menu.path}>{menu.title}</a>
              </li>
            ))}
            <Link to="/Signup">
              <button className="signup-button">Sign Up</button>
            </Link>
          </ul>
        </div>
        {/* Mobile Hamburger menu section */}
        <div className="hamburger">
          <IoMdMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
