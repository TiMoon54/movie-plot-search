import React, { Component, Fragment } from 'react';
import FavoriteIconContainer from './favorite-icon/FavoriteIconContainer';

const favoriteStateHOC = WrappedComponent => {
  class FavoriteStateHOC extends Component {
    render() {
      return (
        <Fragment>
          <WrappedComponent {...this.props} />
          <FavoriteIconContainer imdbID={this.props.imdbID} />
        </Fragment>
      );
    }
  }

  FavoriteStateHOC.displayName = `WithFavoriteState(${WrappedComponent.displayName ||
    WrappedComponent.name ||
    'Component'})`;

  return FavoriteStateHOC;
};

export default favoriteStateHOC;
