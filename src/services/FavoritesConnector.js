import React, { Component } from 'react';
import FavoritesController from './FavoritesController';

const favoritesHOC = WrappedComponent => {
  class FavoritesHOC extends Component {
    state = {};

    constructor(props) {
      super(props);

      this.state.isFavorite = FavoritesController.isFavorite(this.props.imdbID);
    }

    handleToggleFavorite = () => {
      FavoritesController.toggle(this.props.imdbID);
      this.setState({
        isFavorite: FavoritesController.isFavorite(this.props.imdbID)
      });
    };

    render() {
      return (
        <WrappedComponent
          {...this.props}
          isFavorite={this.state.isFavorite}
          onToggleFavorite={this.handleToggleFavorite}
        />
      );
    }
  }

  FavoritesHOC.displayName = `WithFavoritesController(${WrappedComponent.displayName ||
    WrappedComponent.name ||
    'Component'})`;

  return FavoritesHOC;
};

export default favoritesHOC;
