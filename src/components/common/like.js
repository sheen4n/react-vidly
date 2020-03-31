import React from 'react';

const Like = ({ liked, onClick }) => {
  return (
    <i
      onClick={onClick}
      className={`fa ${liked ? 'fa-heart' : 'fa-heart-o'}`}
      style={{ fontSize: 24, cursor: 'pointer' }}
    ></i>
  );
};

export default Like;
