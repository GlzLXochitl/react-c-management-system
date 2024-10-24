import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { auth } = useContext(AuthContext);

  if (!auth.token) {
    return <Navigate to="/" />;
  }

  if (!allowedRoles.includes(auth.roles[0])) {
    return <Navigate to="/" />;
  }

  return children;
};

export const NotFoundRoute = () => {
  return <div>404 - Not Found</div>;
};

export default ProtectedRoute;