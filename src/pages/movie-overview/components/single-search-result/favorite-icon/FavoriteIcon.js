import React from 'react';
import propTypes from 'prop-types';
import './favorite-icon.css';
import favoritesHOC from '../../../../../services/FavoritesConnector';

const FavoriteIcon = ({ isFavorite, onToggleFavorite }) => (
  <span className={'favorite-icon'} onClick={() => onToggleFavorite()}>
    {isFavorite ? '★' : '☆'}
  </span>
);

FavoriteIcon.propTypes = {
  isFavorite: propTypes.bool,
  onToggleFavorite: propTypes.func
};

export default favoritesHOC(FavoriteIcon);
