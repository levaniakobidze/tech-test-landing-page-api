import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { mainActions } from "../../Redux/Store";
import "./SingleEmployee.css";
import { useLocation } from "react-router";

function SingleEmployee() {
  const location = useLocation();
  const id = useSelector((state) => state.employee_id);
  const [singleEmployee, setSingleEmployee] = useState("");
  const dispatch = useDispatch();

  const fetchSingleEmployee = async () => {
    const URL = `https://test-task-api-optimo.herokuapp.com/employee/${id}`;
    const response = await fetch(URL);
    const data = await response.json();
    setSingleEmployee(data);
  };

  useEffect(() => {
    fetchSingleEmployee();
  }, []);

  console.log(location);

  const { avatar } = singleEmployee;
  console.log(avatar);
  return <div className='single-employee'>{singleEmployee && <div></div>}</div>;
}

export default SingleEmployee;
