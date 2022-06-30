import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { mainActions } from "../../Redux/Store";
import "./SingleEmployee.css";
import { useLocation } from "react-router";

function SingleEmployee() {
  const [alfa, setAlfa] = useState(
    "https://www.easytutoriel.com/wp-content/uploads/2021/09/fond-d-ecran-anime-windows-11-10-tutoriel-facile.jpg"
  );
  const [singleEmployee, setSingleEmployee] = useState("");
  const dispatch = useDispatch();
  const { ID } = useParams();

  const fetchSingleEmployee = async () => {
    const URL = `https://test-task-api-optimo.herokuapp.com/employee/${ID}`;
    const response = await fetch(URL);
    const data = await response.json();
    setSingleEmployee(data);
  };

  useEffect(() => {
    fetchSingleEmployee();
  }, []);

  const { avatar, name, location, liked } = singleEmployee;
  const imageName = avatar && avatar.substr(9, 10);

  return (
    <div className='single-employee'>
      {singleEmployee && (
        <div className='single-left-cont'>
          <img src={require(`../../uploads/${imageName}`)} alt='' />
        </div>
      )}
      <div className='single-center-cont'>
        <h1 className='single-employee-name'>{name}</h1>
      </div>
      <div className='single-right-cont'>
        <div className='man-icon-cont'>
          <img src={require("../../Assets/man.png")} alt='' />
        </div>
      </div>
    </div>
  );
}

export default SingleEmployee;
