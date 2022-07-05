import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import Container from "../../Components/Container/Container";
import EmployeeCard from "../../Components/EmployeeCard/EmployeeCard";
import { mainActions } from "../../Redux/Store";
import "./Employees.css";

function Employees() {
  const fetchedData = useSelector((state) => state.fetchedData);
  const initialData = useSelector((state) => state.initialData);
  const loading = useSelector((state) => state.isEmployeesLoading);

  const dispatch = useDispatch();
  const selectRef = useRef();
  const sortRef = useRef();

  const URL = "https://test-task-api-optimo.herokuapp.com/employee";

  ///////////////////////////////////////////////////////////////
  const fetchEmployees = async () => {
    dispatch(mainActions.setEmployeesLoading(true));
    const response = await fetch(URL);
    const data = await response.json();
    dispatch(mainActions.saveFetchedData(data));
    dispatch(mainActions.filterData(data));
    dispatch(mainActions.setEmployeesLoading(false));
  };

  /////////////////
  useEffect(() => {
    fetchEmployees();
  }, []);

  ///////////////////////////////////////
  const filterJobHandler = (value) => {
    if (value === "All") {
      dispatch(mainActions.filterData(fetchedData));
      return;
    }
    const filtered = fetchedData.filter((user) => user.description === value);
    dispatch(mainActions.filterData(filtered));
  };
  /////////////////////////////////

  const sortLikes = (value) => {
    if (value === "decreasing") {
      const sorted = initialData.slice().sort((a, b) => {
        return b.liked - a.liked;
      });
      dispatch(mainActions.filterData(sorted));
    }
    if (value === "increasing") {
      const sorted = initialData.slice().sort((a, b) => {
        return a.liked - b.liked;
      });
      dispatch(mainActions.filterData(sorted));
    }
    if (value === "All") {
      dispatch(mainActions.filterData(initialData));
    }
  };

  ////////////////////////////
  return (
    <div className='employees'>
      <div className='texts-cont'>
        <h1 className='employees-title' onClick={sortLikes}>
          Our employees
        </h1>

        <p className='employees-text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          similique ab eaque numquam ratione.
        </p>
      </div>

      <Container className='employees-container'>
        <div className='filters'>
          <div className='sort'>
            <label htmlFor='likes'></label>
            <select
              name='likes'
              id='likes'
              ref={sortRef}
              onClick={() => sortLikes(sortRef.current.value)}>
              <option value='All'>All</option>
              <option value='decreasing'>Decreasing Likes</option>
              <option value='increasing'>Increasing Likes</option>
            </select>
          </div>
          <select
            name='position'
            id='porition'
            ref={selectRef}
            onClick={() => filterJobHandler(selectRef.current.value)}>
            <option value='All'>All</option>
            <option value='Backend developer'>Backend developer</option>
            <option value='Frontend developer'>Frontend developer</option>
            <option value='Architect'>Architect</option>
          </select>
        </div>
        <div className='loading'>
          {loading && (
            <span className='loading-sircle'>
              <span className='loading-stick'></span>
            </span>
          )}
        </div>

        <div className='employee-cards'>
          {fetchedData &&
            initialData.map((employee) => {
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
        </div>
      </Container>
    </div>
  );
}

export default Employees;
