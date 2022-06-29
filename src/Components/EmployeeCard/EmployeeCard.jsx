import React from "react";
import { Link } from "react-router-dom";
import "./EmployeeCard.css";
import { useDispatch } from "react-redux";
import { mainActions } from "../../Redux/Store";
function EmployeeCard(props) {
  const dispatch = useDispatch();
  const { id, name, likes, avatar, job_id, location_id, description } = props;

  const handleClick = () => {
    dispatch(mainActions.changeID(id));
  };
  return (
    <Link
      to={{
        pathname: `/singleEmployee/${id}`,
        state: {
          id: id,
        },
      }}
      t
      className='employee-card'
      onClick={handleClick}>
      <h1>{name}</h1> <p>{description}</p>
      <img src={`../..${avatar}`} alt='' />
    </Link>
  );
}

export default EmployeeCard;
