import React, { useState, useEffect } from "react";
import axios from "axios";

const UserRegister = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [career, setCareer] = useState([]);
  const [selectedCareerId, setSelectedCareerId] = useState("");
  const [term, setTerm] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const API_IP_ADDRESS = process.env.REACT_APP_API_IP_ADDRESS;

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "studentId":
        setStudentId(value);
        break;
      case "term":
        setTerm(value);
        break;
      case "phoneNumber":
        setPhoneNumber(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "confirmEmail":
        setConfirmEmail(value);
        break;
      case "code":
        setCode(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "confirmPassword":
        setConfirmPassword(value);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const getCareers = async () => {
      try {
        const url = `${API_IP_ADDRESS}/api/careers/`;
        const response = await axios.get(url);
        setCareer(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getCareers();
  }, [API_IP_ADDRESS]);

  const handleBtnSendCode = async (e) => {
    e.preventDefault();
    if (email !== confirmEmail) {
      alert("Los correos electrónicos no son iguales");
      return;
    }
    if (
      !name ||
      !lastName ||
      !studentId ||
      !selectedCareerId ||
      !term ||
      !email ||
      !confirmEmail
    ) {
      alert("Por favor llena todos los campos");
      return;
    }
    try {
      alert("Código enviado");
      console.log("Código enviado");
    } catch (error) {
      console.error(error);
    }
  };

  const handleBtnGetCode = async (e) => {
    e.preventDefault();
    if (email !== confirmEmail) {
      alert("Los correos electrónicos no son iguales");
      return;
    }
    if (!code) {
      alert("Por favor introduce el código");
      return;
    }
    try {
      alert("Código verificado");
      console.log("Código verificado");
    } catch (error) {
      console.error(error);
    }
  };

  const checkStudentIdExists = async (studentId) => {
    try {
      const url = `${API_IP_ADDRESS}/api/userStudentId/${studentId}`;
      const response = await axios.get(url);
      return response.data; // Retorna los datos del usuario si existe
    } catch (error) {
      if (error.response && error.response.status === 404) {
        return null; // Usuario no encontrado
      } else {
        console.error(error);
        throw new Error("Error al verificar la matrícula");
      }
    }
  };

  const checkStudentEmailExists = async (email) => {
    try {
      const url = `${API_IP_ADDRESS}/api/userEmail/${email}`;
      const response = await axios.get(url);
      return response.data; // Retorna los datos del usuario si existe
    } catch (error) {
      if (error.response && error.response.status === 404) {
        return null; // Usuario no encontrado
      } else {
        console.error(error);
        throw new Error("Error al verificar el correo electrónico");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !name ||
      !lastName ||
      !studentId ||
      !selectedCareerId ||
      !term ||
      !email ||
      !confirmEmail ||
      !password ||
      !confirmPassword
    ) {
      alert("Por favor llena todos los campos");
      return;
    }
    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    try {
      const existingUser = await checkStudentIdExists(studentId);
      if (existingUser) {
        alert("Ya existe una cuenta con esa matrícula");
        return;
      }

      const existingEmail = await checkStudentEmailExists(email);
      if (existingEmail) {
        alert("Ya existe una cuenta con ese correo electrónico");
        return;
      }

      const url = `${API_IP_ADDRESS}/api/newUser`;
      const response = await axios.post(url, {
        user_type_id: 2,
        name: name,
        last_name: lastName,
        student_id: studentId,
        career: selectedCareerId,
        term: term,
        phone_number: phoneNumber,
        email: email,
        password: password,
      });
      console.log(response);
      alert("Usuario registrado exitosamente");
      window.location.href = "http://localhost:3000/";
    } catch (error) {
      console.error(error);
      alert("Error al registrar el usuario");
    }
  };

  return (
    <>
      <img
        className="offer-img align-right-img-form"
        src="/images/utmalogoorientacion.png"
        alt=""
      />
      <div className="container ">
        <div className="row">
          <div className="col-md-12">
            <form onSubmit={handleSubmit}>
              <h1 className="title-change-password-disposition title-register-style">
                Registrate
              </h1>
              <h4 className="subtitle-register-style">
                Forma parte de la comunidad de estudiantes y participa en las
                actividades extracurriculares que te ofrece la Universidad
                Tecnológica Metropolitana.
              </h4>
              <br />
              <div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputAddress">
                      Nombre <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress"
                      placeholder="ej. Juan Antonio"
                      name="name"
                      value={name}
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputAddress2">
                      Apellidos <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress2"
                      placeholder="ej. Corpus Flores"
                      name="lastName"
                      value={lastName}
                      required
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-3">
                    <label htmlFor="inputAddress2">
                      Matrícula <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress2"
                      placeholder="ej. utm00030600"
                      name="studentId"
                      value={studentId}
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputAddress2">
                      Programa de estudios{" "}
                      <span className="text-danger">*</span>
                    </label>
                    <select
                      className="custom-select mr-sm-2"
                      id="inlineFormCustomSelect"
                      value={selectedCareerId}
                      required
                      onChange={(e) => setSelectedCareerId(e.target.value)}
                    >
                      <option value="" disabled>
                        Elige un curso
                      </option>
                      {Array.isArray(career) &&
                        career.map((crs) => (
                          <option key={crs.id} value={crs.id}>
                            {crs.name}
                          </option>
                        ))}
                    </select>
                  </div>
                  <div className="form-group col-md-3">
                    <label htmlFor="inputAddress2">
                      Cuatrimestre actual <span className="text-danger">*</span>
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="inputAddress2"
                      placeholder="ej. 6"
                      name="term"
                      min="0"
                      step="1"
                      max="21"
                      value={term}
                      required
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-md-4">
                    <label htmlFor="inputAddress2">Número de teléfono</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="inputAddress2"
                      placeholder="ej. 440 000 0000"
                      name="phoneNumber"
                      value={phoneNumber}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputEmail4">
                      Email <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail4"
                      placeholder="@utma.edu.mx"
                      name="email"
                      value={email}
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputEmail4">
                      Introduce nuevamente el email <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail4"
                      placeholder="Confirmar email"
                      name="confirmEmail"
                      value={confirmEmail}
                      required
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <label
                  className="password-text-recomendation"
                  htmlFor="inputAddress"
                >
                  ¡Solo los correos con terminacion @utma.edu.mx seran validos!
                </label>
                <br /> <br />
                <h5 className="subtitle-register-style">
                  Verificación de correo electrónico
                </h5>
                <h6>
                  Paso 1. Preciona el botón "Recibir código" para recibir un
                  código de verificación en tu correo electrónico.{" "}
                  <span className="text-danger">*</span>
                  <br />
                  Paso 2. Introduce el código en el campo de texto y presiona el
                  botón "Enviar código" para verificar tu correo electrónico.{" "}
                  <span className="text-danger">*</span>
                </h6>
                <div className="form-row align-items-center">
                  <div className="col-auto col-md-2">
                    <button
                      type="button"
                      className="btn btn-primary btn-style-change-password"
                      onClick={handleBtnSendCode}
                    >
                      Resibir código
                    </button>
                  </div>
                </div>
                <div className="form-row align-items-center">
                  <div className="col-auto">
                    <label className="sr-only" htmlFor="inlineFormInputGroup">
                      Código<span className="text-danger">*</span>
                    </label>
                    <div className="input-group mb-2">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          Introduce el código
                        </div>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        id="inlineFormInputGroup"
                        placeholder="ej. 4H6rf7"
                        name="code"
                        value={code}
                        required
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-auto col-md-2">
                    <button
                      type="button"
                      className="btn btn-primary btn-style-change-password"
                      onClick={handleBtnGetCode}
                    >
                      Enviar código
                    </button>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <h5 className="subtitle-register-style">
                Crea una contraseña para iniciar sesión en tu cuenta
              </h5>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="inputAddress">
                    Crea una contraseña <span className="text-danger">*</span>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputAddress"
                    placeholder="Contraseña"
                    name="password"
                    minLength="8"
                    value={password}
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputAddress2">
                    Introduce nuevamente la contraseña{" "}
                    <span className="text-danger">*</span>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputAddress2"
                    placeholder="Confirmar contraseña"
                    name="confirmPassword"
                    minLength="8"
                    value={confirmPassword}
                    required
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <label
                  className="password-text-recomendation"
                  htmlFor="inputAddress"
                >
                  ¡Debe contener más de ocho digitos y es recomendable el uso de
                  caracteres especiales para mejorar la seguridad de tu
                  contraseña!
                </label>
              </div>
              <br />
              <br />
              <div className="text-right-btn-rejister">
                <button
                  className="btn btn-primary btn-style-change-password"
                  type="submit"
                >
                  Registrarme
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserRegister;
