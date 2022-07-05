import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { mainActions } from "../../Redux/Store";
import "./SingleEmployee.css";
import { useLocation } from "react-router";
import Container from "../../Components/Container/Container";

function SingleEmployee() {
  const [alfa, setAlfa] = useState(
    "https://www.easytutoriel.com/wp-content/uploads/2021/09/fond-d-ecran-anime-windows-11-10-tutoriel-facile.jpg"
  );
  const [singleEmployee, setSingleEmployee] = useState("");
  const [like, setLike] = useState(0);
  const [likeActive, setLikeActive] = useState(false);
  const dispatch = useDispatch();
  const { ID } = useParams();

  const fetchSingleEmployee = async () => {
    const URL = `https://test-task-api-optimo.herokuapp.com/employee/${ID}`;
    const response = await fetch(URL);
    const data = await response.json();
    setSingleEmployee(data);
    setLike(data.liked);
  };

  useEffect(() => {
    fetchSingleEmployee();
  }, []);

  const likeF = () => {
    setLikeActive(() => !likeActive);
    if (!likeActive) {
      setLike(() => like + 1);
    } else {
      setLike(() => like - 1);
    }
  };
  console.log(likeActive);

  const { avatar, name, location, description } = singleEmployee;
  const imageName = avatar && avatar.substr(9, 10);

  return (
    <div className='single-employee'>
      <Container className='single-employee-container'>
        {singleEmployee && (
          <div className='single-left-cont'>
            <img src={require(`../../uploads/${imageName}`)} alt='' />
          </div>
        )}
        <div className='single-center-cont'>
          <h1 className='single-employee-name'>{name}</h1>
          <p className='single-employee-position'>{description}</p>
          <div className='single-employee-text'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae iste
            quis molestiae voluptas officiis itaque nostrum voluptate mollitia.
          </div>
          <span className='single-employee-likes'>{like}</span>
          <button className='single-employee-like-btn' onClick={likeF}>
            {likeActive ? "Unlike" : "Like"}
          </button>
        </div>
      </Container>
    </div>
  );
}

export default SingleEmployee;
