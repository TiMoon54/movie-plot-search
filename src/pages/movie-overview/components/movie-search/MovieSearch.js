import React, { Component } from 'react';
import propTypes from 'prop-types';
import './movie-search.css';
import Search from '../../../../components/search/Search';

class Container extends Component {
  state = {
    value: ''
  };

  static propTypes = {
    onSearch: propTypes.func
  };

  static displayName = 'MovieSearch';

  handleSearch() {
    this.props.onSearch(this.state.value);
  }

  handleChange(value) {
    this.setState({ value });
  }

  render() {
    return (
      <div className={'movie-search'}>
        <Search
          onSearch={this.handleSearch.bind(this)}
          onChange={this.handleChange.bind(this)}
          value={this.state.value}
        />
      </div>
    );
  }
}

export default Container;
