import React from 'react';
import Joi from '@hapi/joi';
import Input from './input';
import Select from './select';

const Form = ({ schema, submitAction, inputList, data, setData, setErrors, errors, buttonLabel }) => {
  const handleSubmit = e => {
    e.preventDefault();
    let errObj = validateAll();
    if (errObj) return setErrors(errObj);
    setErrors({});
    submitAction();
  };

  const handleChange = ({ currentTarget: { name, value } }) => {
    const errObj = { ...errors };
    const errorMessage = validateProperty({ name, value });
    if (errorMessage) errObj[name] = errorMessage;
    else delete errObj[name];

    setData({ ...data, [name]: value });
    setErrors(errObj);
  };

  const validateProperty = ({ name, value }) => {
    const { error } = Joi.object({ [name]: schema[name] }).validate({ [name]: value });
    return error ? error.details[0].message : null;
  };

  const validateAll = () => {
    const options = { abortEarly: false };
    const { error } = Joi.object(schema).validate(data, options);
    if (!error) return null;

    let errObj = {};
    error.details.map(item => (errObj[item.path[0]] = item.message));
    return errObj;
  };

  const renderInput = ({ name, label, type = 'text', autoFocus, dataSet }) => {
    switch (type) {
      case 'number':
      case 'password':
      case 'text':
        return (
          <Input
            key={name}
            name={name}
            label={label}
            value={data[name]}
            type={type}
            onChange={handleChange}
            error={errors[name]}
            autoFocus={autoFocus}
          />
        );
      case 'select':
        return (
          <Select
            name={name}
            value={data[name]}
            key={name}
            dataSet={dataSet}
            onChange={handleChange}
            error={errors[name]}
          />
        );
      default:
        break;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {inputList.map(input => renderInput(input))}
      <button className="btn btn-primary" disabled={validateAll()}>
        {buttonLabel}
      </button>
    </form>
  );
};

export default Form;
