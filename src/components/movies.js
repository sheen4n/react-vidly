import React, { useEffect } from 'react';
import _ from 'lodash';
import { getMovies } from '../services/fakeMovieService';
import Pagination from './common/pagination';
import { paginate } from '../utils/paginate';
import ListGroup from './common/listGroup';
import { getGenres } from '../services/fakeGenreService';
import { useReducer } from 'react';
import MoviesTable from './moviesTable';

const initialState = {
  allMovies: [],
  genres: [{ _id: '', name: 'All Genres' }],
  selectedGenre: null,
  currentPage: 1,
  sortColumn: { path: 'title', order: 'asc' }
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'LOAD_DATA':
      return {
        ...state,
        genres: [...state.genres, ...payload.genres],
        allMovies: payload.allMovies,
        selectedGenre: state.genres[0]
      };
    case 'UPDATE_ALL_MOVIES':
      return { ...state, allMovies: payload };

    case 'SET_PAGE':
      return { ...state, currentPage: payload };
    case 'SELECT_GENRE':
      return { ...state, selectedGenre: payload, currentPage: 1 };
    case 'SORT_COLUMN':
      return { ...state, sortColumn: payload };
    default:
      return state;
  }
};

const Movies = () => {
  const MAX_PAGE_SIZE = 4;

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({
      type: 'LOAD_DATA',
      payload: { allMovies: getMovies(), genres: getGenres() }
    });
  }, []);

  const { allMovies, genres, selectedGenre, currentPage, sortColumn } = state;

  if (allMovies.count === 0) return <p> There are no movies in the database.</p>;

  const handleDelete = movie => {
    const updated = allMovies.filter(m => m._id !== movie._id);
    dispatch({ type: 'UPDATE_ALL_MOVIES', payload: updated });
  };

  const handleLike = movie => {
    const updated = allMovies.map(m => (m._id === movie._id ? { ...m, isLiked: !m.isLiked } : m));
    dispatch({ type: 'UPDATE_ALL_MOVIES', payload: updated });
  };

  const handlePageChange = page => dispatch({ type: 'SET_PAGE', payload: page });

  const handleGenreSelect = genre => dispatch({ type: 'SELECT_GENRE', payload: genre });

  const handleSort = sortColumn => dispatch({ type: 'SORT_COLUMN', payload: sortColumn });

  const getPagedData = () => {
    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter(m => m.genre._id === selectedGenre._id)
        : allMovies;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, MAX_PAGE_SIZE);

    return { totalCount: filtered.length, movies };
  };

  const { totalCount, movies } = getPagedData();

  return (
    <div className="row">
      <div className="col-3">
        <ListGroup items={genres} selectedItem={selectedGenre} onItemSelect={handleGenreSelect} />
      </div>
      <div className="col">
        <p>Displaying {totalCount} movies in the database...</p>
        <MoviesTable
          movies={movies}
          onLike={handleLike}
          onDelete={handleDelete}
          sortColumn={sortColumn}
          onSort={handleSort}
        />
        <Pagination
          currentPage={currentPage}
          itemsCount={totalCount}
          pageSize={MAX_PAGE_SIZE}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Movies;
