import React from 'react';

const Like = ({ isLiked, onClick }) => {
  return (
    <i
      onClick={onClick}
      className={`fa ${isLiked ? 'fa-heart' : 'fa-heart-o'}`}
      style={{ fontSize: 24, cursor: 'pointer' }}
    ></i>
  );
};

export default Like;
