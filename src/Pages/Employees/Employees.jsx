import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Container from "../../Components/Container/Container";
import EmployeeCard from "../../Components/EmployeeCard/EmployeeCard";
import { mainActions } from "../../Redux/Store";
import "./Employees.css";

function Employees() {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const URL = "https://test-task-api-optimo.herokuapp.com/employee";
  const fetchEmployees = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    dispatch(mainActions.saveData(data));
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div className='employees'>
      <div className='texts-cont'>
        <h1 className='employees-title'>Our employees</h1>

        <p className='employees-text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          similique ab eaque numquam ratione.
        </p>
      </div>
      <Container className='employees-container'>
        {data &&
          data.map((employee) => {
            return (
              <EmployeeCard
                key={employee.id}
                id={employee.id}
                name={employee.name}
                likes={employee.liked}
                avatar={employee.avatar}
                job_id={employee.job_id}
                location_id={employee.location_id}
                description={employee.description}
              />
            );
          })}
      </Container>
    </div>
  );
}

export default Employees;
