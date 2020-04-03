import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context as AuthContext } from '../context/AuthContext';
import Like from './common/like';
import Table from './common/table';

const MoviesTable = ({ movies, onLike, onDelete, onSort, sortColumn }) => {
  let columns = [
    {
      path: 'title',
      label: 'Title',
      content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
    },
    { path: 'genre.name', label: 'Genre' },
    { path: 'numberInStock', label: 'Stock' },
    { path: 'dailyRentalRate', label: 'Rate' },
    {
      key: 'like',
      content: movie => <Like liked={movie.liked} onClick={() => onLike(movie)} />
    }
  ];

  const admin_columns = [
    {
      key: 'delete',
      content: movie => (
        <button onClick={() => onDelete(movie)} className="btn btn-danger btn-sm">
          Delete
        </button>
      )
    }
  ];

  const { state: authState } = useContext(AuthContext);

  if (authState.user && authState.user.isAdmin) columns = [...columns, ...admin_columns];

  return <Table data={movies} onSort={onSort} sortColumn={sortColumn} columns={columns} />;
};

export default MoviesTable;
