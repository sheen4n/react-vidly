import React, { useState, useContext } from 'react';
import Joi from '@hapi/joi';
import { Context as AuthContext } from '../context/AuthContext';
import { register } from '../services/userService';
import Form from './common/form';

const schema = {
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .min(5)
    .max(255)
    .required()

    .label('Email'),
  password: Joi.string().min(5).max(1024).required().label('Password'),
  name: Joi.string().required().label('Name'),
};

const RegisterForm = ({ history }) => {
  const [newUser, setNewUser] = useState({
    email: '',
    password: '',
    name: '',
  });

  const [errors, setErrors] = useState({});

  const { setJwt } = useContext(AuthContext);

  const submitAction = async () => {
    try {
      const response = await register(newUser);
      setJwt(response.headers['x-auth-token']);
      history.push('/');
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        setErrors({ email: ex.response.data });
      }
    }
  };

  const inputList = [
    { name: 'email', label: 'Email', autoFocus: true },
    { name: 'password', label: 'Password', type: 'password' },
    { name: 'name', label: 'Name' },
  ];

  return (
    <div>
      <h1>Register</h1>
      <Form
        inputList={inputList}
        schema={schema}
        submitAction={submitAction}
        data={newUser}
        setData={setNewUser}
        errors={errors}
        setErrors={setErrors}
        buttonLabel='Register'
      />
    </div>
  );
};

export default RegisterForm;
