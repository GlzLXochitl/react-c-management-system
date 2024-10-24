import React, { useState } from "react";
import axios from "axios";

function ChangePassword() {
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const API_IP_ADDRESS = process.env.REACT_APP_API_IP_ADDRESS;

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "confirmEmail":
        setConfirmEmail(value);
        break;
      case "code":
        setCode(value);
        break;
      case "newPassword":
        setNewPassword(value);
        break;
      case "confirmNewPassword":
        setConfirmNewPassword(value);
        break;
      default:
        break;
    }
  };

  const checkStudentEmailExists = async (email) => {
    try {
      const url = `${API_IP_ADDRESS}/api/userEmail/${email}`;
      const response = await axios.get(url);
      console.log("Datos de la respuesta:", response.data); 
      return response.data; 
    } catch (error) {
      if (error.response && error.response.status === 404) {
        console.warn("Usuario no encontrado");
        return null; 
      } else {
        console.error(
          "Error al verificar el correo electrónico:",
          error.message
        );
        throw new Error(
          "Error al verificar el correo electrónico. Por favor, inténtalo de nuevo más tarde."
        );
      }
    }
  };

  const handleBtnSendCode = async (e) => {
    e.preventDefault();
    if (!email || !confirmEmail) {
      alert("Llena los campos para continuar");
      return;
    }
    if (email !== confirmEmail) {
      alert("Los correos electrónicos no son iguales");
      return;
    }
    try {
      console.log("Verificando el correo electrónico:", email);
      const user = await checkStudentEmailExists(email);
      console.log("Resultado de checkStudentEmailExists:", user); 
      if (user) {
        console.log("Nombre del usuario:", user.getUser.name); 
        alert(`Código enviado al usuario ${user.getUser.name}`);
        console.log("Código enviado");
      } else {
        alert("No se pudo encontrar un usuario con ese correo electrónico");
      }
    } catch (error) {
      console.error(error);
      alert(
        error.message ||
          "Ocurrió un error inesperado. Por favor, inténtalo de nuevo más tarde."
      );
    }
  };

  const handleBtnVerifyCode = async (e) => {
    e.preventDefault();
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

  const getUserIdByEmail = async (email) => {
    try {
      const user = await checkStudentEmailExists(email);
      return user ? user.getUser.id : null; 
    } catch (error) {
      console.error(error);
      throw new Error("Error al obtener el ID del usuario");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmNewPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }
    try {
      const userId = await getUserIdByEmail(email);
      if (!userId) {
        alert("No se pudo encontrar un usuario con ese correo electrónico");
        return;
      }
      const url = `${API_IP_ADDRESS}/api/updateUser/${userId}`;
      const response = await axios.put(url, {
        password: newPassword,
      });
      if (response.status === 200) {
        alert("Contraseña cambiada exitosamente");
        window.location.href = "http://localhost:3000/";
      } else {
        alert(
          "Error al cambiar la contraseña. Por favor, inténtalo de nuevo más tarde."
        );
      }
    } catch (error) {
      if (error.response) {
        console.error(
          "Error en la respuesta del servidor:",
          error.response.data
        );
        alert(
          `Error del servidor: ${
            error.response.data.message || "Error al cambiar la contraseña"
          }`
        );
      } else if (error.request) {
        console.error("No se recibió respuesta del servidor:", error.request);
        alert(
          "No se recibió respuesta del servidor. Por favor, verifica tu conexión a internet."
        );
      } else {
        console.error("Error al configurar la solicitud:", error.message);
        alert(`Error: ${error.message}`);
      }
    }
  };

  return (
    <>
      <img
        className="offer-img align-right-img-form"
        src="/images/utmalogoorientacion.png"
        alt=""
      />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <form onSubmit={handleSubmit}>
              <h1 className="title-change-password-disposition">
                Cambia tu contraseña
              </h1>
              <br />
              <div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="email">
                      Email <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="@utma.edu.mx"
                      value={email}
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="confirmEmail">
                      Introduce nuevamente el email{" "}
                      <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="confirmEmail"
                      name="confirmEmail"
                      placeholder="@utma.edu.mx"
                      value={confirmEmail}
                      required
                      onChange={handleChange}
                    />
                  </div>
                </div>
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
                        name="code"
                        placeholder="ej. 4H6rf7"
                        value={code}
                        required
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-auto">
                    <button
                      type="button"
                      className="btn btn-primary btn-style-change-password"
                      onClick={handleBtnVerifyCode}
                    >
                      Enviar código
                    </button>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <h5 className="subtitle-register-style">
                Actualiza tu contraseña
              </h5>
              <h6>
                Cambia tu contraseña por una nueva, recuerda que debe contener
                más de ocho dígitos y es recomendable el uso de caracteres
                especiales para mejorar su seguridad.{" "}
              </h6>
              <br />

              <div>
                <div className="form-group col-md-6">
                  <label htmlFor="newPassword">
                    Nueva contraseña <span className="text-danger">*</span>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="newPassword"
                    name="newPassword"
                    placeholder="Contraseña"
                    minLength="8"
                    value={newPassword}
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="confirmNewPassword">
                    Introduce nuevamente la contraseña{" "}
                    <span className="text-danger">*</span>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmNewPassword"
                    name="confirmNewPassword"
                    placeholder="Confirmar contraseña"
                    minLength="8"
                    value={confirmNewPassword}
                    required
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="text-right-btn-rejister">
                <button
                  type="submit"
                  className="btn btn-primary btn-style-change-password"
                >
                  Cambiar contraseña
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChangePassword;
