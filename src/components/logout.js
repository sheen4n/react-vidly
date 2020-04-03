import React, { useContext, useEffect, useRef } from 'react';
import { Redirect } from 'react-router-dom';
import { Context as AuthContext } from '../context/AuthContext';

const Logout = () => {
  const { logout } = useContext(AuthContext);

  const logoutFunc = useRef(logout);

  useEffect(() => {
    logoutFunc.current();
  }, []);

  return <Redirect to="/" />;
};

export default Logout;
