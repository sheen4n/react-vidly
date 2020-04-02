import React, { useEffect, useContext, useRef } from 'react';
import { Link } from 'react-router-dom';

import _ from 'lodash';

import { getGenres } from '../services/fakeGenreService';
import { getMovies } from '../services/fakeMovieService';
import { paginate } from '../utils/paginate';

import { Context as MoviesContext } from '../context/MoviesContext';

import SearchBox from './common/searchBox';
import Pagination from './common/pagination';
import ListGroup from './common/listGroup';
import MoviesTable from './moviesTable';

const Movies = () => {
  const MAX_PAGE_SIZE = 4;

  const { loadData, deleteMovie, toggleMovieLike, selectPage, selectGenre, updateSortColumn, updateQuery, state } = useContext(MoviesContext);

  const loadDataFunc = useRef(loadData);

  useEffect(() => {
    loadDataFunc.current(getMovies(), getGenres());
  }, []);

  const { allMovies, genres, selectedGenre, currentPage, sortColumn, query } = state;

  if (allMovies.count === 0) return <p> There are no movies in the database.</p>;

  const handleDelete = movie => deleteMovie(movie);

  const handleLike = movie => toggleMovieLike(movie);

  const handlePageChange = page => selectPage(page);

  const handleGenreSelect = genre => selectGenre(genre);

  const handleSort = sortColumn => updateSortColumn(sortColumn);

  const handleSearch = query => updateQuery(query);

  const getPagedData = () => {
    let filtered;
    if (query) {
      filtered = allMovies.filter(m => m.title.toLowerCase().includes(query) || m.genre.name.toLowerCase().includes(query));
    } else {
      filtered = selectedGenre && selectedGenre._id ? allMovies.filter(m => m.genre._id === selectedGenre._id) : allMovies;
    }

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, MAX_PAGE_SIZE);

    return { totalCount: filtered.length, movies };
  };

  const { totalCount, movies } = getPagedData();

  return (
    <div className='row'>
      <div className='col-3'>
        <ListGroup items={genres} selectedItem={selectedGenre} onItemSelect={handleGenreSelect} />
      </div>
      <div className='col'>
        <Link to='/movies/new' className='btn btn-primary' style={{ marginBottom: 20 }}>
          New Movie
        </Link>
        <p>Displaying {totalCount} movies in the database...</p>
        <SearchBox query={query} onSearch={handleSearch} />
        <MoviesTable movies={movies} onLike={handleLike} onDelete={handleDelete} sortColumn={sortColumn} onSort={handleSort} />
        <Pagination currentPage={currentPage} itemsCount={totalCount} pageSize={MAX_PAGE_SIZE} onPageChange={handlePageChange} />
      </div>
    </div>
  );
};

export default Movies;
