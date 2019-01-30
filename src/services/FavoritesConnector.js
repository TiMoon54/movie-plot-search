import React, { Component } from 'react';
import FavoritesController from './FavoritesController';

const favoritesHOC = WrappedComponent => {
  class FavoritesHOC extends Component {
    state = {};

    constructor(props) {
      super(props);

      this.state.favoritesController = FavoritesController;
    }

    render() {
      return <WrappedComponent {...this.props} {...this.state} />;
    }
  }

  FavoritesHOC.displayName = `WithFavoritesController(${WrappedComponent.displayName ||
    WrappedComponent.name ||
    'Component'})`;

  return FavoritesHOC;
};

export default favoritesHOC;
