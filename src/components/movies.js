import React, { useState, useEffect } from 'react';
import { getMovies } from '../services/fakeMovieService';
import Like from './common/like';
import Pagination from './common/pagination';
import { paginate } from '../utils/paginate';

const Movies = () => {
  const [allMovies, setAllMovies] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  const MAX_PAGE_SIZE = 4;

  const columns = [
    { id: 1, field: 'title', header: 'Title' },
    { id: 2, field: 'genre', header: 'Genre' },
    { id: 3, field: 'numberInStock', header: 'Stock' },
    { id: 4, field: 'dailyRentalRate', header: 'Rate' },
    { id: 5, header: '' },
    { id: 6, header: '' }
  ];

  useEffect(() => {
    const data = getMovies();
    setAllMovies(data);
  }, []);

  const handleDelete = movie => {
    const updated = allMovies.filter(m => m._id !== movie._id);
    setAllMovies(updated);
  };

  const handleLike = movie => {
    const updated = allMovies.map(m =>
      m._id === movie._id ? { ...m, isLiked: !m.isLiked } : m
    );
    setAllMovies(updated);
  };

  const handlePageChange = page => setCurrentPage(page);

  const movies = paginate(allMovies, currentPage, MAX_PAGE_SIZE);

  const { length: count } = allMovies;

  if (count === 0) return <p> There are no movies in the database.</p>;

  return (
    <>
      <p>Displaying {count} movies in the database...</p>
      <table className="table">
        <thead>
          <tr>
            {columns.map(col => (
              <th scope="col" key={col.id}>
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {movies.map(movie => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Like
                  isLiked={movie.isLiked}
                  onClick={() => handleLike(movie)}
                />
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(movie)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        itemsCount={allMovies.length}
        pageSize={MAX_PAGE_SIZE}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default Movies;
