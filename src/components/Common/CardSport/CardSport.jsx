import React, { useState, useEffect } from "react";
import axios from "axios";
import { userData } from "../../../mocks/data.js";
//import { config } from 'dotenv';

function CardSport() {
  const API_IP_ADDRESS = process.env.REACT_APP_API_IP_ADDRESS;
  /*
    const { 
        cardSport
    } = userData;
*/
  console.log(userData);

  const [courses, setCourses] = useState([]); //courses

  const [buttonState, setButtonState] = useState({
    text: "Aplicar",
    backgroundColor: "btn-primary",
  });

  //integración
  useEffect(() => {
    const getCourses = async () => {
      try {
        const url = API_IP_ADDRESS + "/api/courses_names/1";
        var response = await axios.get(url);
        console.log(response);
        setCourses(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCourses();
  }, []);

  return (
    <>
      <div className="container mt-4 col-md-11">
        <div className="row">
          {courses
            .filter((crs) => crs.is_active === 1)
            .map((crs) => {
              return (
                <div className="col-md-6 custom-card" key={crs.id}>
                  <div className="card card-cardsport">
                    <div className="card-body card-body-sports">
                      <h5 className="card-title">{crs.course_catalog.name}</h5>
                      <div>
                        <p className="card-text card-text-info">{crs.description}</p>
                      </div>
                      <div className="mb-3 text-container-details">
                        <p className="card-text">
                          <small className="text-body-secondary">
                            <strong>Creditos que otorga al terminar: </strong>
                            {crs.credits_obtained}
                          </small>
                        </p>
                        <p className="card-text">
                          <small className="text-body-secondary">
                            <strong>Horario: </strong>
                            {crs.schedule}
                          </small>
                        </p>
                      </div>
                      <div className="mb-3 text-container-details">
                        <p className="card-text">
                          <small className="text-body-secondary">
                            <strong>Coordinador del taller: </strong>
                            {crs.user.name} {crs.user.last_name}
                          </small>
                        </p>
                        <p className="card-text">
                          <small className="text-body-secondary">
                            <strong>Correo electrónico: </strong>
                            {crs.user.email}
                          </small>
                        </p>
                      </div>
                    </div>
                    <div className="card-body-sports-img">
                      <div className="cardImageContainer">
                        <img src="images/eSports.png" alt="E-SPORTS" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default CardSport;