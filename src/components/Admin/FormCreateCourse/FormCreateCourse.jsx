import React, { useState } from "react";
import axios from "axios";

/*function goBack(){ 
    window.location.href = "/adminDashboard";
}*/

function FormCreateCourse() {
  const [nameCourse, setNameCourse] = useState("");
  const [courseTypeNumber, setCourseTypeNumber] = useState("");
  const maxLength = 100;
  const API_IP_ADDRESS = process.env.REACT_APP_API_IP_ADDRESS;

  const handleChange = (e) => {
    setNameCourse(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nameCourse) {
      alert(
        "Para añadir un nuevo tipo de curso, es necesario completar el campo de nombre de la actividad."
      );
      return;
    }
    try {
      const url = API_IP_ADDRESS + "/api/course_name";
      const response = await axios.post(url, {
        name: nameCourse,
        course_type_id: courseTypeNumber,
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
                Crear un nuevo tipo de curso
              </h1>
              <h4 className="subtitle-register-style">
                Este formulario está diseñado específicamente para crear y
                catalogar tipos de cursos, evitando la duplicación de registros
                de un mismo tipo de curso.
              </h4>
              <br />
              <h6>
                En esté apartado "Crear un nuevo tipo de curso" podrás por
                ejemplo, generar tipos de cursos como "Taller de literatura",
                "Grupo de oratoria", o "Fútbol femenil". Luego, al completar el
                formulario "Abrir un nuevo curso", añadirás información como el
                nombre del instructor y los horarios, seleccionando el curso
                correspondiente de una lista preexistente. Esto permitirá abrir
                el curso para registro y mantener un historial de los diferentes
                cursos registrados y ofrecidos a lo largo del tiempo.
              </h6>
              <br />
              <br />

              <div>
                <div className="form-row">
                  <div className="form-group col-md-8">
                    <label for="inputAddress2">
                      Nombre de la actividad extracurricular
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress2"
                      placeholder="ej. Taller de lectura y escritura"
                      value={nameCourse}
                      maxLength={maxLength}
                      onChange={(e) => {
                        handleChange(e);
                        setNameCourse(e.target.value);
                      }}
                    />
                    <small>
                      {nameCourse.length}/{maxLength} caracteres
                    </small>
                  </div>
                  <div className="form-group col-md-4">
                    <label for="inputAddress2">Tipo de curso</label>
                    <select
                      className="custom-select mr-sm-2"
                      id="inlineFormCustomSelect"
                      value={courseTypeNumber}
                      onChange={(e) => setCourseTypeNumber(e.target.value)}
                    >
                      <option selected>Choose...</option>
                      <option value="1">Deportivo</option>
                      <option value="2">Cultural</option>
                      <option value="3">E-Sport</option>
                      <option value="4">Otro</option>
                    </select>
                  </div>
                </div>
              </div>

              {/*<button type="submit" className="btn btn-primary btn-style-change-password" ><Link to="/admin-dashboard" className='text-btn-style-change-password'>Registrar curso</Link></button>*/}
              <button
                type="submit"
                className="btn btn-primary btn-style-change-password"
              >
                Añadir nuevo tipo
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormCreateCourse;
