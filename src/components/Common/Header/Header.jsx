import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from './../../../context/AuthProvider';
import "animate.css";
import axios from "axios";
import { Link } from "react-router-dom";

//import '../../styles/layout/header.css';

export function Header() {
  const API_IP_ADDRESS = process.env.REACT_APP_API_IP_ADDRESS;
  const [userName, setUserName] = useState("");
  const [credits, setCredits] = useState(0);
  const [userLastName, setUserLastName] = useState("");
  const [studentID, setStudentID] = useState("");
  const [term, setTerm] = useState("");
  const { logout } = useContext(AuthContext);

  const [userType] = useState(() => { //setUserType
    const storedUserType = localStorage.getItem("userType");
    return storedUserType ? storedUserType : 0;
  });

  useEffect(() => {
    localStorage.setItem("userType", userType);
  }, [userType]);

  const [userID] = useState(() => {   //setUserID
    const storedUserID = localStorage.getItem("userID");
    return storedUserID ? storedUserID : 0;
  });

  // Erase the local storage at logout
  /*const logout = () => {
    localStorage.clear();
  };*/

  useEffect(() => {
    localStorage.setItem("userID", userID);
  }, [userID]);
  useEffect(() => {
    localStorage.setItem("userName", userName);
  }, [userName]);
  useEffect(() => {
    localStorage.setItem("userLastName", userLastName);
  }, [userLastName]);
  useEffect(() => {
    localStorage.setItem("studentID", studentID);
  }, [studentID]);
  useEffect(() => {
    localStorage.setItem("credits", credits);
  }, [credits]);
  useEffect(() => {
    localStorage.setItem("term", term);
  }, [term]);

  useEffect(() => {
    const getUserName = async () => {
      try {
        const url = `${API_IP_ADDRESS}/api/user/${userID}`;
        const response = await axios.get(url);
        setStudentID(response.data.student_id);
        setUserName(response.data.name);
        setUserLastName(response.data.last_name);
        setCredits(response.data.credits);
        setTerm(response.data.term);
      } catch (error) {
        console.log(error);
      }
    };

    getUserName();
  }, [API_IP_ADDRESS, userID]);

  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top nav-color">
        <div className="col-2 col-md-2 col-lg-8">
          <a className="navbar-brand" href="#!" id="logotype">
            <div className="logotype logotype-border" id="header-logotype">
              <div>
                {/* En esta parte al precionar el boton te debolvera al dashboord del usuario correspondiente */}
                <img
                  src="/images/utmaLogotype.png"
                  width="33px"
                  height="33px"
                  alt="Logotype"
                />
              </div>
            </div>
          </a>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="links-design collapse navbar-collapse col-lg-4"
          id="navbarsExampleDefault"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/user-dashboard" className="nav-link UserDashboard">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/profile" className="nav-link UserDashboard">
                {studentID}
              </Link>
            </li>{" "}
            {/* Esta opcion solo debe estar con el usuario de alumno */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#!"
                id="dropdown01"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Opciones
              </a>
              <div
                className="dropdown-menu menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <h6 className="dropdown-header title-section-menu menu-op">
                  Seguridad y Privacidad
                </h6>
                <Link to="/change-password" className="dropdown-item menu">
                  Cambiar mi contraseña
                </Link>
                <Link to="/privacy" className="dropdown-item menu">
                  Privacidad
                </Link>
                <br />
                <h6 className="dropdown-header title-section-menu menu-op">
                  Soporte y Ayuda
                </h6>
                <Link to="/help" className="dropdown-item menu">
                  Centro de ayuda
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link UserDashboard"
                id="logout"
                onClick={logout}
              >
                Sign out
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
