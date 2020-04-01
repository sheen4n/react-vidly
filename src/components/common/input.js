import React from 'react';

const Input = ({  autoFocus = false, type="text", name , label, error, ...rest}) => {
  return (
    <div className='form-group'>
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        {...rest}
        type={type}
        autoFocus={autoFocus}
        id={name}
        className='form-control'
      />
      {error && <div className='alert alert-danger'>{error}</div>}
    </div>
  );
};

export default Input;
