import React from 'react';

const Select = ({ name, value, dataSet, onChange }) => {
  console.log(dataSet);
  return (
    <div className='form-group'>
      <label htmlFor={name}>Example select</label>
      <select className='form-control' id={{ name }} name={name} value={value} onChange={onChange}>
        <option value=''>Please Select</option>
        {dataSet.map(option => (
          <option key={option._id} value={option._id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
