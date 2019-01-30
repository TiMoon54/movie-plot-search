import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import MovieSearch from './components/movie-search/MovieSearch';
import SearchResultsList from './components/search-results-list/SearchResultsList';
import MovieCard from './components/movie-card/MovieCard';

const MovieOverview = ({
  onSearch,
  searchResults,
  onItemClick,
  selectedMovie,
  totalResults,
  resultsByPage,
  currentPage,
  onPageChange
}) => (
  <Fragment>
    <div className={'col-md-8'}>
      <MovieSearch onSearch={onSearch} />
      <SearchResultsList
        listData={searchResults}
        itemProps={{ onItemClick }}
        totalResults={totalResults}
        resultsByPage={resultsByPage}
        currentPage={currentPage}
        onPageChange={onPageChange}
        ariaLabel={'Movie list navigation'}
      />
    </div>
    {selectedMovie && (
      <div className={'col-md-4'}>
        <MovieCard {...selectedMovie} />
      </div>
    )}
  </Fragment>
);

MovieOverview.propTypes = {
  onSearch: propTypes.func,
  searchResults: propTypes.arrayOf(propTypes.object),
  onItemClick: propTypes.func,
  selectedMovie: propTypes.object,
  totalResults: propTypes.number,
  resultsByPage: propTypes.number,
  currentPage: propTypes.number,
  onPageChange: propTypes.func
};

export default MovieOverview;
