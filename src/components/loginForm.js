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
    .label('Password')
};

const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  const submitAction = () => {
    console.log('submitted');
  };

  const inputList = [
    { name: 'email', label: 'Email', autoFocus: true },
    { name: 'password', label: 'Password', type: 'password' }
  ];

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
    </div>
  );
};

export default LoginForm;
