import React, { useState, useEffect } from 'react';
import Joi from '@hapi/joi';
import { getMovie, saveMovie } from '../services/movieService';
import { getGenres } from '../services/genreService';

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
    async function loadGenres() {
      const { data: genresData } = await getGenres();
      setGenres(genresData);
    }
    async function loadMovie() {
      try {
        if (movieId === 'new') return;
        const { data: movieFromDb } = await getMovie(movieId);
        setMovie(mapToViewModel(movieFromDb));
      } catch (ex) {
        if (ex.response && ex.response.status === 404) return history.replace('/not-found');
      }
    }

    loadGenres();
    loadMovie();
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
        buttonLabel="Save"
      />
    </div>
  );
};

export default MovieForm;
