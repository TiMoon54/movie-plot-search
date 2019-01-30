import React, { Component } from 'react';
import propTypes from 'prop-types';
import favoritesHOC from '../../../../../services/FavoritesConnector';
import FavoriteIcon from './FavoriteIcon';

class Container extends Component {
  state = {};

  constructor(props) {
    super(props);

    this.state.isFavorite = this.props.favoritesController.isFavorite(
      props.imdbID
    );
  }

  static propTypes = {
    favoritesController: propTypes.shape({
      add: propTypes.func,
      remove: propTypes.func,
      isFavorite: propTypes.func
    }),
    imdbID: propTypes.string
  };

  static displayName = 'FavoriteIconContainer';

  componentDidUpdate() {
    if (
      this.props.favoritesController.isFavorite(this.props.imdbID) !==
      this.state.isFavorite
    ) {
      this.setState({
        isFavorite: this.props.favoritesController.isFavorite(this.props.imdbID)
      });
    }
  }

  handleAddToFavorites() {
    this.props.favoritesController.add(this.props.imdbID);
    this.setState({
      isFavorite: this.props.favoritesController.isFavorite(this.props.imdbID)
    });
  }

  handleRemoveFromFavorites() {
    this.props.favoritesController.remove(this.props.imdbID);
    this.setState({
      isFavorite: this.props.favoritesController.isFavorite(this.props.imdbID)
    });
  }

  render() {
    return (
      <FavoriteIcon
        isFavorite={this.state.isFavorite}
        onAddToFavorites={this.handleAddToFavorites.bind(this)}
        onRemoveFromFavorites={this.handleRemoveFromFavorites.bind(this)}
      />
    );
  }
}

export default favoritesHOC(Container);
