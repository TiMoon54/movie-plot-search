import React from 'react';
import propTypes from 'prop-types';
import './movie-card.css';

const MovieCard = ({ Title, Plot, Poster }) => (
  <div className={'movie-card'}>
    <div className={'card'}>
      {Poster && (
        <img
          src={Poster}
          className="card-img-top"
          alt={`${Title} movie poster`}
        />
      )}
      <div className="card-body">
        <h5 className="card-title">{Title}</h5>
        <p className="card-text">{Plot}</p>
      </div>
    </div>
  </div>
);

MovieCard.propTypes = {
  Title: propTypes.string,
  Plot: propTypes.string,
  Poster: propTypes.string
};

export default MovieCard;
