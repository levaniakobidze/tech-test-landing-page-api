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
      to={`/singleEmployee/${id}`}
      t
      className='employee-card'
      onClick={handleClick}>
      <div className='card-image-cont'>
        <img src={require(`../../uploads/${avatar.substr(9, 10)}`)} alt='' />
      </div>
      <h1 className='card-employee-name'>{name}</h1>
      <p className='card-employee-description'>{description}</p>
      <div className='card-likes'>
        {" "}
        <p>{likes}</p> LIKE
      </div>
    </Link>
  );
}

export default EmployeeCard;
