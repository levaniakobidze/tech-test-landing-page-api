import React from "react";
import { Link } from "react-router-dom";
import Container from "../Container/Container";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className='main-navbar'>
      <Container className='nav-container'>
        <Link to={"/"} className='logo'>
          Chloro
        </Link>
        <ul className='nav-menu'>
          <li>
            <Link to='/'> Home </Link>
          </li>
          <li>
            <Link to='/employees'> Empolyees </Link>
          </li>
          <li>
            <Link to='/feedback'> Feedback </Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
