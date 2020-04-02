import React, { useState, useEffect } from 'react';
import Joi from '@hapi/joi';
import { getMovie, saveMovie } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';

import Form from './common/form';

const schema = {
  _id: Joi.string(),
  title: Joi.string()
    .required()
    .label('Title'),
  genreId: Joi.string()
    .required()
    .label('Genre'),
  numberInStock: Joi.number()
    .integer()
    .required()
    .min(0)
    .max(100)
    .label('Number In Stock'),
  dailyRentalRate: Joi.number()
    .required()
    .min(0)
    .max(100)
    .label('Daily Dental Rate')
};

const MovieForm = ({ match, history }) => {
  const { movieId } = match.params;

  const [movie, setMovie] = useState({
    title: '',
    genreId: '',
    numberInStock: '',
    dailyRentalRate: ''
  });

  const [genres, setGenres] = useState([]);

  const [errors, setErrors] = useState({});

  const mapToViewModel = movie => ({
    _id: movie._id,
    title: movie.title,
    genreId: movie.genre._id,
    numberInStock: movie.numberInStock,
    dailyRentalRate: movie.dailyRentalRate
  });

  useEffect(() => {
    setGenres(getGenres());

    if (movieId === 'new') return;

    const movieFromDb = getMovie(movieId);

    if (!movieFromDb) return history.replace('/not-found');
    setMovie(mapToViewModel(movieFromDb));
  }, [movieId, history]);

  const submitAction = () => {
    saveMovie(movie);
    history.push('/movies');
  };

  const inputList = [
    { name: 'title', label: 'Title', autoFocus: true },
    { name: 'genreId', label: 'Genre', type: 'select', dataSet: genres },
    { name: 'numberInStock', label: 'Number In Stock', type: 'number' },
    { name: 'dailyRentalRate', label: 'Daily Rental Rate', type: 'number' }
  ];

  console.log(movie);

  return (
    <div>
      <h1>Movie Form</h1>
      <Form
        inputList={inputList}
        schema={schema}
        submitAction={submitAction}
        data={movie}
        setData={setMovie}
        errors={errors}
        setErrors={setErrors}
        buttonLabel='Save'
      />
    </div>
  );
};

export default MovieForm;
