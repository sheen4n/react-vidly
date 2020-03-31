import React from 'react';

const MovieForm = ({ match }) => {
  return (
    <div>
      <h1>Movie Form</h1>
      <p>{match.params.movieId}</p>
    </div>
  );
};

export default MovieForm;
