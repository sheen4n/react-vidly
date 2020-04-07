import React, { useState, useContext } from 'react';
import Joi from '@hapi/joi';

import { Context as AuthContext } from '../context/AuthContext';
import Form from './common/form';
import { Redirect } from 'react-router-dom';

const schema = {
  email: Joi.string()
    .required()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .label('Email'),
  password: Joi.string().min(5).required().label('Password'),
};

const LoginForm = ({ history, location }) => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const { loginUser, state: authState } = useContext(AuthContext);

  const submitAction = async () => {
    try {
      await loginUser(credentials);
      // Redirect Back if State Exist in Location
      location.state ? history.push(location.state.from.pathname) : history.push('/');
    } catch (ex) {
      setErrors({ email: ex.message });
    }
  };

  const inputList = [
    { name: 'email', label: 'Email', autoFocus: true },
    { name: 'password', label: 'Password', type: 'password' },
  ];

  if (authState.user) return <Redirect to='/' />;

  return (
    <div>
      <h1>Login</h1>
      <Form
        inputList={inputList}
        schema={schema}
        submitAction={submitAction}
        data={credentials}
        setData={setCredentials}
        errors={errors}
        setErrors={setErrors}
        buttonLabel='Login'
      />
      <hr />
      <p>Demo mode</p>
      <p>Admin Account: admin@admin.com</p>
      <p>Admin Password: 123456</p>
      <hr />
      <p>Normal Account: user@user.com</p>
      <p>Normal Password: 123456</p>
    </div>
  );
};

export default LoginForm;
