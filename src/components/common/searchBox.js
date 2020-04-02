import React from 'react';

const SearchBox = ({ query, onSearch }) => {
  return <input type='text' className='form-control my-3' value={query} onChange={e => onSearch(e.currentTarget.value)} placeholder='Search...' />;
};

export default SearchBox;
