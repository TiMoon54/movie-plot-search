import React, { Component } from 'react';
import propTypes from 'prop-types';
import connectorHOC from '../../services/OMDbConnector';
import MovieOverview from './MovieOverview';

class Container extends Component {
  state = {
    items: [],
    searchString: '',
    selectedMovie: null,
    totalResults: 0,
    currentPage: 1,
    resultsByPage: 0
  };

  constructor(props) {
    super(props);

    this.state.resultsByPage = props.OMDbClient.getResultsByPage();
  }

  static propTypes = {
    OMDbClient: propTypes.shape({
      getResultsByPage: propTypes.func,
      getMovieList: propTypes.func,
      getMovieInfo: propTypes.func
    })
  };

  static displayName = 'MovieOverviewContainer';

  fetchData() {
    const { searchString, currentPage } = this.state;

    this.props.OMDbClient.getMovieList(searchString, currentPage)
      .then(res => {
        const { data } = res;

        if (data.Response === 'True') {
          const { Search, totalResults } = data;

          this.setState({ items: Search, totalResults: +totalResults });
        } else {
          if (data.Error) {
            // TODO Show if something went wrong
            console.log(data.Error);
          }
        }
      })
      .catch(error => {
        // TODO Show if something went completely wrong
        console.log(error);
      });
  }

  handleSearch = value => {
    this.setState(
      {
        searchString: value,
        currentPage: 1
      },
      () => this.fetchData()
    );
  };

  handlePageChange = pageNum => {
    this.setState({ currentPage: pageNum }, () => this.fetchData());
  };

  handleItemClick = OMDbId => {
    this.props.OMDbClient.getMovieInfo(OMDbId)
      .then(res => {
        const { data } = res;

        if (data.Response === 'True') {
          this.setState({ selectedMovie: data });
        } else {
          if (data.Error) {
            // TODO Show if something went wrong
            console.log(data.Error);
          }
        }
      })
      .catch(error => {
        // TODO Show if something went completely wrong
        console.log(error);
      });
  };

  render() {
    const {
      items,
      selectedMovie,
      totalResults,
      currentPage,
      resultsByPage
    } = this.state;

    return (
      <MovieOverview
        onSearch={this.handleSearch}
        onItemClick={this.handleItemClick}
        searchResults={items}
        selectedMovie={selectedMovie}
        totalResults={totalResults}
        resultsByPage={resultsByPage}
        currentPage={currentPage}
        onPageChange={this.handlePageChange}
      />
    );
  }
}

export default connectorHOC(Container);
