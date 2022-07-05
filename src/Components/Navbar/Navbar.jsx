import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../Container/Container";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrFormClose } from "react-icons/gr";

function Navbar() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(() => !active);
  };
  return (
    <nav className='main-navbar'>
      <Container className='nav-container'>
        <Link to={"/"} className='logo'>
          Chloro
        </Link>
        <ul className={!active ? "nav-menu" : "nav-menu nav-menu-active"}>
          <li onClick={() => setActive(false)}>
            <Link to='/'> Home </Link>
          </li>
          <li onClick={() => setActive(false)}>
            <Link to='/employees'> Empolyees </Link>
          </li>
          <li onClick={() => setActive(false)}>
            <Link to='/feedback'> Feedback </Link>
          </li>
        </ul>
        <div className='burger-menu' onClick={handleClick}>
          {!active ? <GiHamburgerMenu /> : <GrFormClose />}
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
