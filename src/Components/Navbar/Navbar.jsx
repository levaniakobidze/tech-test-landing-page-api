import React from "react";
import { Link } from "react-router-dom";
import Container from "../Container/Container";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className='main-navbar'>
      <Container className='nav-container'>
        <div className='logo'>Chloro</div>
        <ul className='nav-menu'>
          <li>
            <Link to='/'> Home </Link>
          </li>
          <li>
            <Link to='/employees'> Empolyees </Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
