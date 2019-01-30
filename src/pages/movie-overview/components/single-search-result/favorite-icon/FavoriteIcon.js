import React from 'react';
import propTypes from 'prop-types';
import './favorite-icon.css';

const FavoriteIcon = ({
  isFavorite,
  onAddToFavorites,
  onRemoveFromFavorites
}) => (
  <span
    className={'favorite-icon'}
    onClick={
      isFavorite ? () => onRemoveFromFavorites() : () => onAddToFavorites()
    }
  >
    {isFavorite ? '★' : '☆'}
  </span>
);

FavoriteIcon.propTypes = {
  isFavorite: propTypes.bool,
  onAddToFavorites: propTypes.func,
  onRemoveFromFavorites: propTypes.func
};

export default FavoriteIcon;
