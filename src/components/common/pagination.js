import React from 'react';
import _ from 'lodash';

const Pagination = ({ currentPage, itemsCount, pageSize, onPageChange }) => {
  const numOfPages = Math.ceil(itemsCount / pageSize);

  const isMultiPages = numOfPages > 1;

  const pages = _.range(1, numOfPages + 1);

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === numOfPages;

  if (!isMultiPages) return null;

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {isMultiPages && (
          <li className={`page-item ${isFirstPage && 'disabled'}`}>
            <span className="page-link" onClick={() => onPageChange(1)}>
              Previous
            </span>
          </li>
        )}

        {pages.map(page => (
          <li key={page} className={`page-item  ${page === currentPage && 'active'}`}>
            <span className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </span>
          </li>
        ))}

        {isMultiPages && (
          <li className={`page-item ${isLastPage && 'disabled'}`}>
            <span className="page-link" onClick={() => onPageChange(numOfPages)}>
              Next
            </span>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
