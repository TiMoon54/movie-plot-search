import React from 'react';
import propTypes from 'prop-types';
import './single-search-result.css';
import favoriteStateHOC from './favoriteStateHOC';

const SingleSearchResult = ({ Title, imdbID, onItemClick }) => (
  <span className={'single-search-result'} onClick={() => onItemClick(imdbID)}>
    {Title}
  </span>
);

SingleSearchResult.propTypes = {
  Title: propTypes.string,
  imdbID: propTypes.string,
  onItemClick: propTypes.func
};

export default favoriteStateHOC(SingleSearchResult);
