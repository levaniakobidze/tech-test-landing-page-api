import React from "react";
import Button from "../../Components/Button/Button";
import Container from "../../Components/Container/Container";
import "./Main.css";

function Main() {
  return (
    <div className='main'>
      <Container className='main-container'>
        <h1 className='main-title'> Just Do It !</h1>
        <p className='main-text-slogan'>
          When you care enough to send the very best
        </p>
        <Button className='main-button'>Just do it</Button>
      </Container>
    </div>
  );
}

export default Main;
