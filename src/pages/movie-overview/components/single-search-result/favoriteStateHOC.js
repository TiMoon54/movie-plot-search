import React, { Component, Fragment } from 'react';
import FavoriteIcon from './favorite-icon/FavoriteIcon';

const favoriteStateHOC = WrappedComponent => {
  class FavoriteStateHOC extends Component {
    render() {
      return (
        <Fragment>
          <WrappedComponent {...this.props} />
          <FavoriteIcon imdbID={this.props.imdbID} />
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
