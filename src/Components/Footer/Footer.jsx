import React from "react";
import Container from "../Container/Container";
import "./Footer.css";

function Footer() {
  return (
    <div className='footer'>
      <Container className='footer-cont'>
        <div className='footer-support-img-cont'>
          <img src={require("../../Assets/support.png")} alt='' />
        </div>
        <div className='footer-links'>
          <a href='#'> Home</a>
          <a href='#'> Home</a>
          <a href='#'> Home</a>
          <a href='#'> Home</a>
        </div>
        <div className='footer-links'>
          <a href='#'> Home</a>
          <a href='#'> Home</a>
          <a href='#'> Home</a>
          <a href='#'> Home</a>
        </div>
        <div className='footer-links'>
          <a href='#'> Home</a>
          <a href='#'> Home</a>
          <a href='#'> Home</a>
          <a href='#'> Home</a>
        </div>
        <div className='footer-links'>
          <a href='#'> Home</a>
          <a href='#'> Home</a>
          <a href='#'> Home</a>
          <a href='#'> Home</a>
        </div>

        <div className='footer-links'>
          <a href='#'> Home</a>
          <a href='#'> Home</a>
          <a href='#'> Home</a>
          <a href='#'> Home</a>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
