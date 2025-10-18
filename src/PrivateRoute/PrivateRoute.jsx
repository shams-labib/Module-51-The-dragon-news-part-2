import React, { useContext } from 'react';
import { AuthContext } from '../Firebase/AuthContext/AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from './Loading';

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <Loading />;
  }

  if (user && user.email) {
    return children;
  }

  // send the "from" path inside an object
  return <Navigate to="/auth/login" state={location.pathname} replace />;
};

export default PrivateRoute;
