import React from 'react';

const TableHeader = ({ columns, sortColumn, onSort }) => {
  const raiseSort = path => {
    const order = path === sortColumn.path && sortColumn.order === 'asc' ? 'desc' : 'asc';
    onSort({ path, order });
  };

  const renderSortIcon = column => {
    const { path, order } = sortColumn;
    if (column.path !== path) return null;
    return <i className={`fa fa-sort-${order}`}></i>;
  };

  const renderHeaderCell = column => {
    if (column.path)
      return (
        <th key={column.path} onClick={() => raiseSort(column.path)} className={'clickable'}>
          {column.label}
          {renderSortIcon(column)}
        </th>
      );
    return <th key={column.key}></th>;
  };

  return (
    <thead>
      <tr>{columns.map(column => renderHeaderCell(column))}</tr>
    </thead>
  );
};

export default TableHeader;
