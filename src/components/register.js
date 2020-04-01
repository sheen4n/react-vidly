import React, { useState } from 'react';

import Joi from '@hapi/joi';
import Form from './common/form';

const schema = {
  email: Joi.string()
    .required()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .label('Email'),
  password: Joi.string()
    .required()
    .min(5)
    .label('Password'),
  name: Joi.string()
    .required()
    .label('Name')
};

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
    email: ''
  });
  const [errors, setErrors] = useState({});

  const submitAction = () => {
    console.log('submitted');
  };

  const inputList = [
    { name: 'email', label: 'Email', autoFocus: true },
    { name: 'password', label: 'Password', type: 'password' },
    { name: 'name', label: 'Name' }
  ];

  return (
    <div>
      <h1>Register</h1>
      <Form
        inputList={inputList}
        schema={schema}
        submitAction={submitAction}
        data={credentials}
        setData={setCredentials}
        errors={errors}
        setErrors={setErrors}
        buttonLabel='Register'
      />
    </div>
  );
};

export default Register;
