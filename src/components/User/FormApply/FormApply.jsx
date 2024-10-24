import React, { useEffect, useState } from "react";
//import { Link } from "react-router-dom";
import axios from "axios";

function FormApply() {
  const API_IP_ADDRESS = process.env.REACT_APP_API_IP_ADDRESS;
  const [courses, setCourses] = useState([]);
  const [courseID, setCourseID] = useState("");
  const [confirmStudentID, setConfirmStudentID] = useState("");
  const [confirmTerm, setConfirmTerm] = useState("");
  const studentID = localStorage.getItem("studentID");
  const term = localStorage.getItem("term");

  useEffect(() => {
    const getCourseNames = async () => {
      try {
        const url = API_IP_ADDRESS + "/api/courses_names/1";
        const response = await axios.get(url);

        console.log(response);
        setCourses(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCourseNames();
  }, [API_IP_ADDRESS]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (confirmStudentID !== studentID || confirmTerm !== term) {
      alert(
        "Los datos no son correctos. Por favor, verifica tu matrícula y cuatrimestre."
      );
      return;
    }
    try {
      const checkUrl = `${API_IP_ADDRESS}/api/students_enroled_in_a_course/${courseID}`;
      const checkResponse = await axios.get(checkUrl);
      const enrolledStudents = checkResponse.data;
      if (
        enrolledStudents.some((student) => student.student_id === studentID)
      ) {
        alert("Ya te has registrado en este curso.");
        return;
      }
      const url = API_IP_ADDRESS + "/api/enrolleStudent";
      const response = await axios.post(url, {
        student_id: studentID,
        course_id: courseID,
      });
      if (response.status === 200) {
        alert("Registro realizado con éxito.");
        window.location.href = "http://localhost:3000/user-dashboard";
      } else {
        alert(
          "Hubo un problema al realizar el registro. Por favor, inténtalo de nuevo."
        );
      }
    } catch (error) {
      console.log(error);
      alert(
        "Hubo un problema al realizar el registro. Por favor, inténtalo de nuevo."
      );
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <form onSubmit={handleSubmit}>
              <h1 className="title-change-password-disposition title-register-style">
                Aplicar a una actividad extracurricular
              </h1>
              <h4 className="subtitle-register-style">
                Únete a las actividades extracurriculares que ofrece la
                Universidad Tecnológica Metropolitana y desarrolla tus
                habilidades blandas mientras te diviertes.
              </h4>
              <br />
              <h6>
                Recuerda que puede aplicar a mas de una actividad
                extracurricular siempre y cuando cumplas con los requisitos de
                asistencia y llegues a un acuerdo con los coordinadores de las
                actividades.
              </h6>
              <br />
              <div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="selectCourseName">
                      Selecciona uno de los cursos disponibles{" "}
                      <span className="text-danger">*</span>
                    </label>
                    <select
                      className="custom-select mr-sm-2"
                      name="selectCourseName"
                      id="inlineFormCustomSelect"
                      value={courseID}
                      required
                      onChange={(e) => setCourseID(e.target.value)}
                    >
                      <option value="" disabled>
                        Elige un curso
                      </option>
                      {courses
    .filter((crs) => crs.is_active === 1)
    .map((crs, index) => (
      <option key={index} value={crs.id}>
        {crs.course_catalog.name} - {crs.schedule}
      </option>
    ))}
                    </select>
                  </div>
                </div>
              </div>
              <br />
              <div className="form-row">
                <div className="form-group col-md-4">
                  <label htmlFor="confirmStudentID">
                    Ingresa tu matrícula para confirmar{" "}
                    <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="confirmStudentID"
                    placeholder="ej. utm00030600"
                    value={confirmStudentID}
                    onChange={(e) => setConfirmStudentID(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group col-md-3">
                  <label htmlFor="confirmTerm">
                    Cuatrimestre actual <span className="text-danger">*</span>
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="confirmTerm"
                    placeholder="ej. 6"
                    value={confirmTerm}
                    onChange={(e) => setConfirmTerm(e.target.value)}
                    min="0"
                    step="1"
                    max="21"
                    required
                  />
                </div>
              </div>
              <br />
              <div className="form-row">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault1"
                    required
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault1"
                    style={{ textAlign: "justify" }}
                  >
                    Confirmo mi interés en registrarme al curso y me comprometo
                    a asistir al mayor número de actividades dentro de esta.{" "}
                    <span className="text-danger">*</span>
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault2"
                    required
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault2"
                    style={{ textAlign: "justify" }}
                  >
                    Estoy al tanto de que debo cumplir con al menos el 80% de
                    asistencia para recibir la totalidad de los créditos
                    otorgados por el curso, taller o deporte. Si mi asistencia
                    es menor al 80% pero mayor al 40%, acreditaré la mitad de
                    los créditos otorgados por el curso. Sin embargo, si mi
                    número de asistencias es inferior al 40%, no seré acreedor a
                    ningún crédito otorgado por el curso.{" "}
                    <span className="text-danger">*</span>
                  </label>
                </div>
              </div>
              <br />
              <div className="text-right-btn-rejister">
                <button
                  type="submit"
                  className="btn btn-primary btn-style-change-password"
                >
                  Finalizar registro
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormApply;
