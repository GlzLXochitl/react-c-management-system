import React, { useState, useEffect } from "react";
import axios from "axios";
//import { Link } from 'react-router-dom';

//simport '../../styles/views/user/userDashboard.css';

function Jumb() {
  // /api/user/
  const API_IP_ADDRESS = process.env.REACT_APP_API_IP_ADDRESS;

  const [userID] = useState(() => {   //setUserID
    const storedUserID = localStorage.getItem("userID");
    return storedUserID ? storedUserID : 0;
  });

  useEffect(() => {
    localStorage.setItem("userID", userID);
  }, [userID]);

  const [userName, setUserName] = useState([]);

  const getUserName = async (e) => {
    try {
      const url = API_IP_ADDRESS + "/api/user/" + userID.toString();
      const response = await axios.get(url);
      setUserName(response.data.name);
    } catch (error) {
      console.log(error);
    }
  };
  getUserName();

  return (
    <div className="main-body">
      <div className="jumbotron jumbotron-dashboard jumbotron-fluid" id="jumbotron">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h1 className="display-4">
                <span className="text-primary color-welcome">
                  Bienvenido <br />
                  <span className="color-welcome-bold">
                    {userName} <br />
                  </span>{" "}
                  al lugar de las oportunidades.
                </span>
              </h1>
              <p className="lead">Universidad Tecnológica Metropolitana</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jumb;
