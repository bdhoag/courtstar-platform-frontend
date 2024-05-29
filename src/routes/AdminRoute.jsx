import React from 'react';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ children }) => {
  const userRole = localStorage.getItem('role');

  if (userRole !== 'ADMIN') {
    return <Navigate to="/" />;
  }

  return children;
};

export default AdminRoute;
