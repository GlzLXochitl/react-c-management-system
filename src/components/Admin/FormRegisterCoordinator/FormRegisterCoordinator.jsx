import React, { useState } from "react";
import axios from "axios";

/*function goBack(){ 
    window.location.href = "/adminDashboard";
}*/

const FormRegisterCoordinator = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const API_IP_ADDRESS = process.env.REACT_APP_API_IP_ADDRESS;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !lastName || !phoneNumber || !email) {
      alert("Por favor llena todos los campos");
      return;
    }
    try {
      const url = API_IP_ADDRESS + "/api/newUser";
      const response = await axios.post(url, {
        user_type_id: 3,
        name: name,
        last_name: lastName,
        phone_number: phoneNumber,
        email: email,
        password: "12345678",
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
                Añadir un nuevo coordinador de taller
              </h1>
              <div>
                <label
                  htmlFor="quarterSelect"
                  style={{ fontWeight: "500", fontSize: "1em" }}
                ></label>
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
                    <label for="inputAddress2">Numero de telefono</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress2"
                      placeholder="ej. 4494490000"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                </div>
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
                  <label
                    className="password-text-recomendation"
                    for="inputAddress"
                  >
                    ¡A diferencia del de un estudiante, el email del coordinador
                    puede ser de terminación @utma.edu.mx, @gmail.com o
                    cualquier otro!
                  </label>
                </div>
              </div>
              <br />

              {/*<button className="btn btn-primary btn-style-change-password" type="submit"><Link to="/admin-dashboard" className='text-btn-style-change-password'>Registrar curso</Link></button>*/}
              <button
                className="btn btn-primary btn-style-change-password"
                type="submit"
              >
                Registrar Tallerista
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormRegisterCoordinator;
