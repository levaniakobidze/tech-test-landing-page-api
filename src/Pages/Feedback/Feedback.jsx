import React, { useState } from "react";
import "./Feedback.css";
import Container from "../../Components/Container/Container";

const URL = "https://test-task-api-optimo.herokuapp.com/feedback";
function Feedback() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onChangeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    fetch(URL, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(form),
    }).then(() => {
      console.log("new json added");
    });
  };

  const { name, email, message } = form;
  return (
    <div className='feedback'>
      <Container className='feedback-container'>
        <form action='#' className='feedback-form' onSubmit={submitHandler}>
          <h1 className='feedback-title'>Give a feedback</h1>
          <div className='name-email-cont'>
            <input
              type='text'
              placeholder='name'
              className='name-input'
              value={name}
              onChange={onChangeHandler}
              name='name'
            />
            <input
              type='text'
              placeholder='email'
              className='email-input'
              value={email}
              name='email'
              onChange={onChangeHandler}
            />
          </div>
          <div className='message-cont'>
            <input
              type='text'
              placeholder='Message'
              className='message-input'
              value={message}
              name='message'
              onChange={onChangeHandler}
            />
          </div>
          <div className='submit-feedback-btn-cont'>
            <button className='submit-feedback-btn'>Submit</button>
          </div>
        </form>
      </Container>
    </div>
  );
}

export default Feedback;
