import React, { useState, useEffect, useContext, useRef } from 'react';
import { Link } from 'react-router-dom';

import _ from 'lodash';

import { paginate } from '../utils/paginate';

import { Context as MoviesContext } from '../context/MoviesContext';
import { Context as AuthContext } from '../context/AuthContext';

import SearchBox from './common/searchBox';
import Pagination from './common/pagination';
import ListGroup from './common/listGroup';
import MoviesTable from './moviesTable';

const Movies = ({ history }) => {
  const [isLoading, setIsLoading] = useState(false);
  const MAX_PAGE_SIZE = 4;

  const {
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
    state,
  } = useContext(MoviesContext);

  const { state: authState } = useContext(AuthContext);

  const loadDataFunc = useRef(loadData);

  useEffect(() => {
    loadDataFunc.current();
  }, []);

  const { allMovies, genres, selectedGenre, currentPage, sortColumn, query } = state;

  if (allMovies.count === 0) return <p> There are no movies in the database.</p>;

  const handleDelete = async (movie) => {
    const moviesClone = _.cloneDeep(state.allMovies);
    try {
      // optimistic delete
      removeMovieFromUi(movie);
      await removeMovie(movie);
    } catch (error) {
      setAllMovies(moviesClone);
    }
  };

  const handleLike = (movie) => {
    toggleMovieLike(movie);
  };

  const handlePageChange = (page) => selectPage(page);

  const handleGenreSelect = (genre) => selectGenre(genre);

  const handleSort = (sortColumn) => updateSortColumn(sortColumn);

  const handleSearch = (query) => updateQuery(query);

  const resetData = async () => {
    setIsLoading(true);
    await reset(allMovies, genres);
    await loadDataFunc.current();
    setIsLoading(false);
    // history.push('/');
  };

  const getPagedData = () => {
    let filtered;
    if (query) {
      filtered = allMovies.filter((m) => m.title.toLowerCase().includes(query) || m.genre.name.toLowerCase().includes(query));
    } else {
      filtered = selectedGenre && selectedGenre._id ? allMovies.filter((m) => m.genre._id === selectedGenre._id) : allMovies;
    }

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, MAX_PAGE_SIZE);

    return { totalCount: filtered.length, movies };
  };

  const { totalCount, movies } = getPagedData();

  if (isLoading) return <h1>Reset Is Loading... Please wait!</h1>;

  return (
    <div className='row'>
      <div className='col-3'>
        <ListGroup items={genres} selectedItem={selectedGenre} onItemSelect={handleGenreSelect} />
      </div>
      <div className='col'>
        {authState.user ? (
          <>
            <Link to='/movies/new' className='btn btn-primary' style={{ marginBottom: 20 }}>
              New Movie
            </Link>
            <button onClick={resetData} className='btn btn-success ml-3' style={{ marginBottom: 20 }}>
              Reset Data
            </button>
          </>
        ) : (
          <button className='btn btn-success ml-3' style={{ marginBottom: 20 }} disabled='disabled'>
            Login to Reset Data
          </button>
        )}

        <p>Displaying {totalCount} movies in the database...</p>
        <SearchBox query={query} onSearch={handleSearch} />
        <MoviesTable movies={movies} onLike={handleLike} onDelete={handleDelete} sortColumn={sortColumn} onSort={handleSort} />
        <Pagination currentPage={currentPage} itemsCount={totalCount} pageSize={MAX_PAGE_SIZE} onPageChange={handlePageChange} />
      </div>
    </div>
  );
};

export default Movies;
