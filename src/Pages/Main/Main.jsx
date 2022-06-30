import React from "react";
import Button from "../../Components/Button/Button";
import Container from "../../Components/Container/Container";
import "./Main.css";
import Logo from "../../Assets/Logo.svg";

function Main() {
  return (
    <div className='main'>
      <Container className='main-container'>
        <div className='left-cont'>
          <h1 className='left-title'>TECHNOLOGENT </h1>
          <p className='left-text'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            nobis dignissimos, velit quis odit alias, obcaecati dicta dolorum
            repellat, quam soluta ipsa. Quaerat non maxime blanditiis possimus
            laudantium ut nesciunt.
          </p>
          <button className='left-btn'>Employees</button>
        </div>
        <div className='right-cont'>
          <img src={require("../../Assets/Logo2.png")} alt='' />
        </div>
      </Container>
    </div>
  );
}

export default Main;
