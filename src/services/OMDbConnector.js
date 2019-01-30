import React, { Component } from 'react';
import OMDbClient from './OMDbClient';

const connectorHOC = WrappedComponent => {
  class ConnectorHOC extends Component {
    state = {};

    constructor(props) {
      super(props);

      this.state.OMDbClient = OMDbClient;
    }

    render() {
      return <WrappedComponent {...this.props} {...this.state} />;
    }
  }

  ConnectorHOC.displayName = `WithOMDbConnection(${WrappedComponent.displayName ||
    WrappedComponent.name ||
    'Component'})`;

  return ConnectorHOC;
};

export default connectorHOC;
