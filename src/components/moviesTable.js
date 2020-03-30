import React from 'react';
import Like from './common/like';
import Table from './common/table';

const MoviesTable = ({ movies, onLike, onDelete, onSort, sortColumn }) => {
  const COLUMNS = [
    { path: 'title', label: 'Title' },
    { path: 'genre.name', label: 'Genre' },
    { path: 'numberInStock', label: 'Stock' },
    { path: 'dailyRentalRate', label: 'Rate' },
    {
      key: 'like',
      content: movie => <Like liked={movies.liked} onClick={() => onLike(movie)} />
    },
    {
      key: 'delete',
      content: movie => (
        <button onClick={() => onDelete(movie)} className="btn btn-danger btn-sm">
          Delete
        </button>
      )
    }
  ];
  return <Table data={movies} onSort={onSort} sortColumn={sortColumn} columns={COLUMNS} />;
};

export default MoviesTable;
