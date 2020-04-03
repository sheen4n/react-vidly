import React, { useEffect, useContext, useRef } from 'react';
import { Link } from 'react-router-dom';

import _ from 'lodash';
import { toast } from 'react-toastify';

import { getGenres } from '../services/genreService';
import { getMovies, deleteMovie, saveMovie } from '../services/movieService';
import seedData from '../seedData/seedMovies';
import { paginate } from '../utils/paginate';

import { Context as MoviesContext } from '../context/MoviesContext';
import { Context as AuthContext } from '../context/AuthContext';

import SearchBox from './common/searchBox';
import Pagination from './common/pagination';
import ListGroup from './common/listGroup';
import MoviesTable from './moviesTable';

const Movies = ({ history }) => {
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
    state
  } = useContext(MoviesContext);

  const { state: authState } = useContext(AuthContext);

  const loadDataFunc = useRef(loadData);

  useEffect(() => {
    async function loadMovies() {
      const { data: genresData } = await getGenres();
      const { data: moviesData } = await getMovies();
      loadDataFunc.current(moviesData, genresData);
    }
    loadMovies();
  }, []);

  const { allMovies, genres, selectedGenre, currentPage, sortColumn, query } = state;

  if (allMovies.count === 0) return <p> There are no movies in the database.</p>;

  const handleDelete = async movie => {
    const moviesClone = _.cloneDeep(state.allMovies);
    try {
      removeMovie(movie);
      await deleteMovie(movie._id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404) toast.error('This movie has already been deleted.');

      setAllMovies(moviesClone);
    }
  };

  const handleLike = movie => {
    toggleMovieLike(movie);
  };

  const handlePageChange = page => selectPage(page);

  const handleGenreSelect = genre => selectGenre(genre);

  const handleSort = sortColumn => updateSortColumn(sortColumn);

  const handleSearch = query => updateQuery(query);

  const resetData = async () => {
    await Promise.all(allMovies.map(m => deleteMovie(m._id)));
    genres.map(g =>
      seedData.map(async genreData =>
        genreData.name === g.name
          ? await Promise.all(genreData.movies.map(m => saveMovie({ ...m, genreId: g._id })))
          : null
      )
    );
    history.push('/');
  };

  const getPagedData = () => {
    let filtered;
    if (query) {
      filtered = allMovies.filter(
        m => m.title.toLowerCase().includes(query) || m.genre.name.toLowerCase().includes(query)
      );
    } else {
      filtered =
        selectedGenre && selectedGenre._id ? allMovies.filter(m => m.genre._id === selectedGenre._id) : allMovies;
    }

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
        {authState.user && (
          <Link to="/movies/new" className="btn btn-primary" style={{ marginBottom: 20 }}>
            New Movie
          </Link>
        )}
        <button onClick={resetData} className="btn btn-success ml-3" style={{ marginBottom: 20 }}>
          Reset Data
        </button>
        <p>Displaying {totalCount} movies in the database...</p>
        <SearchBox query={query} onSearch={handleSearch} />
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
