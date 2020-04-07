import createDataContext from './createDataContext';
import { toast } from 'react-toastify';
import { getMovies, deleteMovie, saveMovie } from '../services/movieService';
import { getGenres } from '../services/genreService';

import seedData from '../seedData/seedMovies';

const initialState = {
  allMovies: [],
  genres: [{ _id: '', name: 'All Genres' }],
  selectedGenre: null,
  currentPage: 1,
  sortColumn: { path: 'title', order: 'asc' },
  query: '',
};

const moviesReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'load_data':
      return {
        ...initialState,
        genres: [...initialState.genres, ...payload.genres],
        allMovies: payload.allMovies,
        selectedGenre: initialState.genres[0],
      };
    case 'remove_movie':
      return { ...state, allMovies: state.allMovies.filter((m) => m._id !== payload._id) };

    case 'toggle_movie_like':
      return {
        ...state,
        allMovies: state.allMovies.map((m) => (m._id === payload._id ? { ...m, liked: !m.liked } : m)),
      };

    case 'select_page':
      return { ...state, currentPage: payload };

    case 'select_genre':
      return { ...state, selectedGenre: payload, currentPage: 1, query: '' };

    case 'update_sort_column':
      return { ...state, sortColumn: payload };

    case 'set_all_movies':
      return { ...state, allMovies: payload };

    case 'update_query':
      return { ...state, query: payload, selectedGenre: initialState.genres[0], currentPage: 1 };
    default:
      return state;
  }
};

const loadData = (dispatch) => async () => {
  const { data: genres } = await getGenres();
  const { data: allMovies } = await getMovies();
  dispatch({ type: 'load_data', payload: { allMovies, genres } });
};

const removeMovie = (dispatch) => async (movie) => {
  try {
    await deleteMovie(movie._id);
  } catch (ex) {
    if (ex.response && ex.response.status === 404) toast.error('This movie has already been deleted.');
  }
};

const removeMovieFromUi = (dispatch) => (movie) => dispatch({ type: 'remove_movie', payload: movie });

const toggleMovieLike = (dispatch) => (movie) => dispatch({ type: 'toggle_movie_like', payload: movie });

const selectPage = (dispatch) => (page) => dispatch({ type: 'select_page', payload: page });

const selectGenre = (dispatch) => (genre) => dispatch({ type: 'select_genre', payload: genre });

const updateSortColumn = (dispatch) => (sortColumn) => dispatch({ type: 'update_sort_column', payload: sortColumn });

const updateQuery = (dispatch) => (query) => dispatch({ type: 'update_query', payload: query });

const setAllMovies = (dispatch) => (allMovies) => dispatch({ type: 'set_all_movies', payload: allMovies });

const loadStorage = () => {
  const savedData = JSON.parse(window.localStorage.getItem('movies'));
  return savedData || initialState;
};

const reset = (dispatch) => async (allMovies, genres) => {
  await Promise.all(allMovies.map((m) => deleteMovie(m._id)));
  genres.map((g) =>
    seedData.map(async (genreData) =>
      genreData.name === g.name ? await Promise.all(genreData.movies.map((m) => saveMovie({ ...m, genreId: g._id }))) : null
    )
  );
};

export const { Context, Provider } = createDataContext(
  moviesReducer,
  {
    loadData,
    removeMovie,
    toggleMovieLike,
    selectPage,
    selectGenre,
    updateSortColumn,
    updateQuery,
    setAllMovies,
    reset,
    removeMovieFromUi,
  },
  loadStorage(),
  'movies'
);
