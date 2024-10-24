import React, { useState } from "react";
import axios from "axios";

const FormRegisterStudentsBefore = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [studentNumber, setStudentNumber] = useState("");
  const [careerNumber, setCareerNumber] = useState("");
  const [email, setEmail] = useState("");

  const API_IP_ADDRESS = process.env.REACT_APP_API_IP_ADDRESS;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = API_IP_ADDRESS + "/api/...";
      const response = await axios.post(url, {
        user_type_id: 3,
        password: "12345678",
        name: name,
        last_name: lastName,
        student_id: studentNumber,
        career: careerNumber,
        email: email,
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
                Registro de usuarios anteriores al 2024. 
              </h1>
              <h4 className="subtitle-register-style">
                Este formulario fue creado espesíficamente para registrar y
                recuperara los datos anteriores al periodo Mayo - Septiembre del
                2024
              </h4>
              <br />
              <div className="card card-new-cord-dispocition">
                <label
                  htmlFor="quarterSelect"
                  style={{
                    fontWeight: "500",
                    fontSize: "1.4em",
                    marginBottom: "1rem",
                  }}
                >
                  Registrar un usuario individual. Unicamente registro de estudiantes.
                </label>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label for="inputAddress2">Nombre</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress2"
                      placeholder="ej. Alejandra Monica"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label for="inputAddress2">Apellido</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress2"
                      placeholder="ej. Corpus Flores"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label for="inputAddress2">Matrícula</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress2"
                      placeholder="ej. utm00030600"
                      value={studentNumber}
                      onChange={(e) => setStudentNumber(e.target.value)}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label for="inputAddress2">Programa de estudios</label>
                    <select
                      className="custom-select mr-sm-2"
                      id="inlineFormCustomSelect"
                    >
                      <option selected>No aplica</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
                <br />
                <label for="inputAddress2">Email</label>
                <div className="form-row">
                  <div className="input-group mb-3 col-md-12">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="@gmail.com"
                      aria-label="@gmail.com"
                      aria-describedby="basic-addon2"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-outline-secondary btn-new-coord"
                        type="button"
                      >
                        Enviar por correo cuenta auto generada
                      </button>
                    </div>
                  </div>
                </div>
                <label
                    className="password-text-recomendation"
                    for="inputAddress"
                  >
                    ¡Te recomendamos usar esta opción solo cuando registres usuarios que aún no hayan completado su periodo de liberación de créditos. Esto evitará que generen sus cuentas en 0 si ya cuentan con créditos liberados de cuatrimestres anteriores!
                  </label>
                <br/>
                <div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-style-change-password"
                  >
                    Generar registro
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/*<div className="row">
          <div className="col-md-12">
            <form>
              <br />
              <br />
              <div className="card card-new-cord-dispocition">
                <label
                  htmlFor="quarterSelect"
                  style={{
                    fontWeight: "500",
                    fontSize: "1.4em",
                    marginBottom: "1rem",
                  }}
                >
                  Registrar en masa
                </label>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label for="inputAddress2">Nombre</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress2"
                      placeholder="ej. Alejandra Monica"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label for="inputAddress2">Apellido</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress2"
                      placeholder="ej. Corpus Flores"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label for="inputAddress2">Matrícula</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress2"
                      placeholder="ej. utm00030600"
                      required
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label for="inputAddress2">Programa de estudios</label>
                    <select
                      className="custom-select mr-sm-2"
                      id="inlineFormCustomSelect"
                    >
                      <option selected>Choose...</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label for="inputAddress2">Cuatrimestre actual</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress2"
                      placeholder="ej. 6 o No aplica"
                      required
                    />
                  </div>
                </div>
                {/*<label for="inputAddress2">Email</label>
                            <div className='form-row'>
                                <div className="input-group mb-3 col-md-12">
                                    <input type="email" className="form-control" placeholder="@gmail.com" aria-label="@gmail.com" aria-describedby="basic-addon2"/>
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-secondary btn-new-coord" type="button">Enviar por correo cuenta auto generada</button>
                                    </div>
                                </div>
                            </div>

                <div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-style-change-password"
                  >
                    Generar registro
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>*/}
        <br />
        <br />
      </div>
    </>
  );
}

export default FormRegisterStudentsBefore;
