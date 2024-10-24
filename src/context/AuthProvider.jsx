import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ token: null, roles: [] });

  useEffect(() => {
    const API_IP_ADDRESS = process.env.REACT_APP_API_IP_ADDRESS;
 
    const checkAuth = async () => {
      try {
        if (!document.cookie) {
          // para productivo este mensaje no existira
          console.log('No hay cookies presentes. La sesión no ha sido iniciada previamente.');
          return;
        }

        const response = await axios.get(`${API_IP_ADDRESS}/api/check-auth`, { withCredentials: true });
        console.log('Respuesta de autenticación:', response); // Log la respuesta exitosa
        setAuth({ token: response.data.token, roles: response.data.roles });
      } catch (error) {
        console.error('Respuesta de error:', error.response); // Log la respuesta de error
        if (error.response) {
          if (error.response.status === 401) {
            console.error('No autorizado: Verifica tus credenciales y configuración del servidor.');
          } else if (error.response.status === 404) {
            console.error('Endpoint no encontrado: Verifica si el endpoint existe en el backend.');
          }
        } else {
          console.error('Error de red o el servidor está caído.');
        }
        setAuth({ token: null, roles: [] });
      }
    };
    checkAuth();
  }, []);
  
    return (
      <AuthContext.Provider value={{ auth, setAuth }}>
        {children}
      </AuthContext.Provider>
    );
  };