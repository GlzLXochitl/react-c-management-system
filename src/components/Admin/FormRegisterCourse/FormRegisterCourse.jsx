import React, { useState, useEffect } from "react";
import axios from "axios";

/*function goBack(){ 
    window.location.href = "/adminDashboard";
}*/

const FormRegisterCourse = () => {
  const [users, setUsers] = useState([]); 
  const [courses, setCourses] = useState([]);
  const [activityName, setActivityName] = useState("");
  const [period, setPeriod] = useState("");
  const [coordinator, setCoordinator] = useState("");
  const [year, setYear] = useState("");
  const [credits, setCredits] = useState("");
  const [schedule, setSchedule] = useState("");
  //const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const maxLength = 150;

  //ip address of the backend
  const API_IP_ADDRESS = process.env.REACT_APP_API_IP_ADDRESS;

  // for counting characters in the description
  const handleChange = (e) => {
    setDescription(e.target.value);
  };

  useEffect(() => {
    const getCoordinators = async () => {
      try {
        const url = API_IP_ADDRESS + "/api/userType/3";
        var response = await axios.get(url);

        console.log(response);
        setUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    const getCourses = async () => {
        try {
          const url = API_IP_ADDRESS + "/api/courses_name/";
          var response = await axios.get(url);
  
          console.log(response);
          setCourses(response.data);
        } catch (error) {
          console.log(error);
        }
      };
  
      getCourses();
      getCoordinators();
    }, []);

    const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !coordinator ||
      !period ||
      !activityName ||
      !description ||
      !schedule ||
      !credits
    ) {
      alert("Por favor llena todos los campos");
      return;
    }
    try {
      const url = API_IP_ADDRESS + "/api/create_course";
      const response = await axios.post(url, {
        coordinator_user_id: coordinator,
        quarter_id: period,
        course_name_id: activityName,
        description: description,
        schedule: schedule,
        is_active: 1,
        credits_obtained: credits,
        course_img: "",
        is_open: 1,
      });

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="container ">
        <div className="row">
          <div className="col-md-12">
            <form onSubmit={handleSubmit}>
              <h1 className="title-change-password-disposition title-register-style">
                Abrir un curso 
              </h1>
              <br />
              <div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label for="inputAddress">Curso</label>
                    <select
                      className="custom-select mr-sm-2"
                      id="inlineFormCustomSelect"
                      value={activityName}
                      onChange={(e) => setActivityName(e.target.value)}>
                      <option selected>Choose...</option>
                      {courses.map((crs, index) => (
                        <option key={index} value={crs.id}>
                          {crs.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group col-md-6">
                    <label for="inputAddress">Coordinador</label>
                    <select
                      className="custom-select mr-sm-2"
                      id="inlineFormCustomSelect"
                      value={coordinator}
                      onChange={(e) => setCoordinator(e.target.value)}
                    >
                      <option selected>Choose...</option>
                      {users.map((usr, index) => (
                        <option key={index} value={usr.id}>
                          {usr.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label for="inputAddress">Periodo Cuatrimestral</label>
                    <select
                      className="custom-select mr-sm-2"
                      id="inlineFormCustomSelect"
                      value={period}
                      onChange={(e) => setPeriod(e.target.value)}
                    >
                      <option selected>Choose...</option>
                      <option value="1">Enero - Abril</option>
                      <option value="2">Mayo - Agosto</option>
                      <option value="3">Septiembre - Diciembre</option>
                    </select>
                  </div>
                  <div className="form-group col-md-6">
                    <label for="inputAddress">Año</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress"
                      placeholder="ej. 2020"
                      value={year}
                      onChange={(e) => setYear(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="form-row">
                  
                </div>
              </div>
              <div>
                <div className="form-row">
                  <div className="col-md-5">
                    <div className="form-group">
                      <label for="inputAddress2">Asignar horario</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputAddress2"
                        placeholder="ej. Lunes, Miercoles y Jueves de 16:00 a 18:00 hrs"
                        value={schedule}
                        onChange={(e) => setSchedule(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-group col-md-3">
                      <label for="inputAddress2">
                        Creditos liberados al finalizar
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputAddress2"
                        placeholder="ej. 20"
                        value={credits}
                        onChange={(e) => setCredits(e.target.value)}
                      />
                    
                  </div>
                  {/*<div className="col-md-4">
                    <label for="courseSelect">Imagen del curso</label>
                    <inputr
                      type="file"
                      className="form-control-file"
                      accept="image/*"
                      id="exampleFormControlFile1"
                      value={image}
                      onChange={(e) => setImage(e.target.value)}
                    />
                    {/* AQUI FALTA ALGO 
                  </div>*/}
                </div>
              </div>
              <br />
              <div className="form-row">
                <div className="form-group col-md-12">
                  <label for="inputAddress2">
                    Descripción general de la actividad
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress2"
                    placeholder="Introduce una descripción general de máximo 150 caracteres ..."
                    value={description}
                    onChange={handleChange}
                    maxLength={maxLength}
                  />
                  <small>
                    {description.length}/{maxLength} caracteres
                  </small>
                </div>
              </div>
              {/*<button type="submit" className="btn btn-primary btn-style-change-password" ><Link to="/admin-dashboard" className='text-btn-style-change-password'>Registrar curso</Link></button>*/}
              <button
                className="btn btn-primary btn-style-change-password"
                type="submit"
              >
                Registrar curso
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormRegisterCourse;