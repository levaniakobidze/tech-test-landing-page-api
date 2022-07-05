import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Feedback.css";
import Container from "../../Components/Container/Container";
import { mainActions } from "../../Redux/Store";

const URL = "https://test-task-api-optimo.herokuapp.com/feedback";
function Feedback() {
  // STATES //
  const form = useSelector((state) => state.form);
  const loading = useSelector((state) => state.isFormLoading);
  const isEmailValid = useSelector((state) => state.isEmailValid);
  const isNameValid = useSelector((state) => state.isNameValid);
  const isMessageValid = useSelector((state) => state.isMessageValid);
  const [showNameError, setShowNameError] = useState(false);
  const [showEmailError, setShowEmailError] = useState(false);
  const [showMessageError, setShowMessageError] = useState(false);
  const [showSubmitError, setShowSubmitError] = useState(false);
  const dispatch = useDispatch();

  //////////////////////////////////////////////////////////////

  // ONCHANGE FUNCTION //
  const onChangeHandler = (e) => {
    // name validation
    e.target.name === "name" && setShowNameError(true);
    if (e.target.name === "name" && e.target.value.length >= 3) {
      dispatch(mainActions.setNameValid(true));
    }
    if (e.target.name === "name" && e.target.value.length < 3) {
      dispatch(mainActions.setNameValid(false));
    }
    //////////////////////////////////////////////////////////////

    // email validation
    e.target.name === "email" && setShowEmailError(true);

    if (
      e.target.name === "email" &&
      e.target.value.includes("@") &&
      e.target.value.includes(".")
    ) {
      dispatch(mainActions.setEmailValid(true));
    }
    if (
      e.target.name === "email" &&
      e.target.value.includes("@") &&
      e.target.value.includes(".") == false
    ) {
      dispatch(mainActions.setEmailValid(false));
    }
    //////////////////////////////////////////////

    //message validation
    e.target.name === "message" && setShowMessageError(true);

    if (e.target.name === "message" && e.target.value.length >= 10) {
      dispatch(mainActions.setMessageValid(true));
    }
    if (e.target.name === "message" && e.target.value.length < 10) {
      dispatch(mainActions.setMessageValid(false));
    }
    dispatch(mainActions.setForm({ ...form, [e.target.name]: e.target.value }));
  };
  console.log(loading);
  ///////////////////////////////////////////////////

  // SUBMIT FUNCTION ///
  const submitHandler = (e) => {
    setShowSubmitError(false);
    e.preventDefault();
    if (!isEmailValid || !isNameValid || !isMessageValid) {
      setShowNameError(true);
      setShowEmailError(true);
      setShowMessageError(true);
      setShowSubmitError(true);
      return;
    }
    dispatch(mainActions.setFormLoading(true));
    fetch(URL, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(form),
    }).then(() => {
      dispatch(mainActions.setFormLoading(false));
      console.log("new feedback added");
    });
  };

  const { name, email, message } = form;
  return (
    <div className='feedback'>
      <Container className='feedback-container'>
        <form action='#' className='feedback-form' onSubmit={submitHandler}>
          <h1 className='feedback-title'>Give a feedback</h1>
          <div className='name-email-cont'>
            <div className='name-cont'>
              <span className='name-not-valid'>
                {showNameError && !isNameValid && "Please use min 3 symbols"}
              </span>
              <input
                type='text'
                placeholder='name'
                className='name-input'
                value={name}
                onChange={onChangeHandler}
                name='name'
              />
            </div>
            <div className='email-cont'>
              <span className='email-not-valid'>
                {showEmailError && !isEmailValid && "Please use correct email"}
              </span>

              <input
                type='email'
                placeholder='email'
                className='email-input'
                value={email}
                name='email'
                onChange={onChangeHandler}
              />
            </div>
          </div>
          <div className='message-cont'>
            <span className='name-not-valid'>
              {showMessageError &&
                !isMessageValid &&
                "Please use min 10 symbols"}
            </span>
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
            {showSubmitError && (
              <span className='submit-error'>Please fill all fealds </span>
            )}
            <button className='submit-feedback-btn'>
              {!loading ? "Submit" : <p className='submited'> Submited </p>}
            </button>
          </div>
        </form>
      </Container>
    </div>
  );
}

export default Feedback;
