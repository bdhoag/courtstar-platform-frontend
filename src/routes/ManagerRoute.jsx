import React from 'react';
import { Navigate } from 'react-router-dom';

const ManagerRoute = ({ children }) => {
  const userRole = localStorage.getItem('role');

  if (!userRole || !userRole.includes('MANAGER')) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ManagerRoute;
