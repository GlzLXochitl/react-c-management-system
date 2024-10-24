import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../../context/AuthProvider";  // Importa AuthContext

const Login = () => {
  const API_IP_ADDRESS = process.env.REACT_APP_API_IP_ADDRESS;
  //const { login } = useContext(AuthContext);  // Obtén la función login del contexto
  

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  /*const handleSubmit = async (e) => {
    e.preventDefault();
    
    const getUserByEmailUrl = `${API_IP_ADDRESS}/api/userEmail/${userEmail}`;
  
    try {
      alert(`Bienvenido, ${userEmail}!`);

      const getUserByEmailResponse = await axios.get(getUserByEmailUrl);
      const userType = getUserByEmailResponse.data.getUser.user_type_id;
      alert(`Tipo de usuario: ${userType}`);

      const token = getUserByEmailResponse.data.token;  // Supongamos que recibes un token del servidor
      alert(`Token: ${token}`);
      
      if (token) {
        login(token, userType);  // Almacena el token y el tipo de usuario en localStorage y actualiza el estado de autenticación
  
        // Redirige según el tipo de usuario
        switch (userType) {
          case 1:
            navigate("/admin/dashboard");
            break;
          case 2:
            navigate("/user/dashboard");
            break;
          case 3:
            navigate("/teacher/dashboard");
            break;
          default:
            alert("Rol no reconocido.");
        }
      } else {
        alert("No se ha recibido un token válido.");
      }
    } catch (error) {
      if (error.response) {
        // El servidor respondió con un código de estado fuera del rango 2xx
        alert(`Error del servidor: ${error.response.data.message || error.response.statusText}`);
      } else if (error.request) {
        // La solicitud fue hecha pero no se recibió respuesta
        alert("Error de red: No se pudo conectar con el servidor.");
      } else {
        // Algo pasó al configurar la solicitud
        alert(`Error: ${error.message}`);
      }
      console.error("Error en la solicitud:", error);
    }
  };*/

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_IP_ADDRESS}/api/login`, { email, password }, { withCredentials: true });
      setAuth({ token: response.data.token, roles: response.data.roles });
      navigate('/home'); // Redirigir a la página principal o a la ruta adecuada
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  return (
    <div id="login-background">
      <div className="col-md-4 offset-md-4">
        <form onSubmit={handleSubmit}>
          <div className="card card-login my-5">
            <div className="cardbody-color card-content-disposition-login p-lg-3">
              <div className="text-center">
                <img
                  className="offer-img"
                  src="/images/utmalogoorientacion.png"
                  alt="Logo UTM"
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-control"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-control"
                  type="password"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="text-center">
                <button className="btn btn-primary btn-login-style" id="login" type="submit">
                  Iniciar sesión
                </button>
              </div>
              <div id="emailHelp" className="form-text text-center mb-5 text-dark">
                <Link to="/user-register" className="create-account-style">Registrarte</Link>
                <br />
                <Link to="/change-password" className="password-recovery-style">¿Olvidaste tu contraseña?</Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
