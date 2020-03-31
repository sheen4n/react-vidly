import createDataContext from './createDataContext';

const initialState = {
  allMovies: [],
  genres: [{ _id: '', name: 'All Genres' }],
  selectedGenre: null,
  currentPage: 1,
  sortColumn: { path: 'title', order: 'asc' }
};

const moviesReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'load_data':
      return {
        ...initialState,
        genres: [...initialState.genres, ...payload.genres],
        allMovies: payload.allMovies,
        selectedGenre: state.genres[0]
      };
    case 'delete_movie':
      return { ...state, allMovies: state.allMovies.filter(m => m._id !== payload._id) };

    case 'toggle_movie_like':
      return {
        ...state,
        allMovies: state.allMovies.map(m => (m._id === payload._id ? { ...m, liked: !m.liked } : m))
      };

    case 'select_page':
      return { ...state, currentPage: payload };

    case 'select_genre':
      return { ...state, selectedGenre: payload, currentPage: 1 };

    case 'update_sort_column':
      return { ...state, sortColumn: payload };
    default:
      return state;
  }
};

const loadData = dispatch => (allMovies, genres) =>
  dispatch({ type: 'load_data', payload: { allMovies, genres } });

const deleteMovie = dispatch => movie => dispatch({ type: 'delete_movie', payload: movie });

const toggleMovieLike = dispatch => movie =>
  dispatch({ type: 'toggle_movie_like', payload: movie });

const selectPage = dispatch => page => dispatch({ type: 'select_page', payload: page });

const selectGenre = dispatch => genre => dispatch({ type: 'select_genre', payload: genre });

const updateSortColumn = dispatch => sortColumn =>
  dispatch({ type: 'update_sort_column', payload: sortColumn });

export const { Context, Provider } = createDataContext(
  moviesReducer,
  { loadData, deleteMovie, toggleMovieLike, selectPage, selectGenre, updateSortColumn },
  initialState
);
