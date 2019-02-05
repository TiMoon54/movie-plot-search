import React, { Fragment } from 'react';
import propTypes from 'prop-types';

const Pagination = ({
  totalPages,
  maxPagesCount,
  currentPage,
  onChange,
  ariaLabel
}) => (
  <nav aria-label={ariaLabel}>
    <ul className="pagination">
      {[...Array(maxPagesCount)].map((el, id, arr) => {
        const exactPage = currentPage + id - Math.floor(arr.length / 2);

        return (
          <Fragment key={id}>
            {exactPage > 0 && exactPage <= totalPages && (
              <li
                className={
                  'page-item' + (currentPage === exactPage ? ' active' : '')
                }
                onClick={() => onChange(exactPage)}
              >
                <span className="page-link">{exactPage}</span>
              </li>
            )}
          </Fragment>
        );
      })}
    </ul>
  </nav>
);

Pagination.propTypes = {
  totalPages: propTypes.number,
  maxPagesCount: propTypes.number,
  currentPage: propTypes.number,
  onChange: propTypes.func,
  ariaLabel: propTypes.string
};

export default Pagination;
