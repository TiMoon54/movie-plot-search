import React, { Component, Fragment } from 'react';
import propTypes from 'prop-types';
import Pagination from './Pagination';

const paginationHOC = WrappedComponent => {
  class PaginationHOC extends Component {
    state = {
      maxPagesCount: 5
    };

    static propTypes = {
      totalResults: propTypes.number,
      resultsByPage: propTypes.number,
      currentPage: propTypes.number,
      onPageChange: propTypes.func,
      ariaLabel: propTypes.string
    };

    constructor(props) {
      super(props);

      this.state.totalPages = Math.round(
        this.props.totalResults / this.props.resultsByPage
      );
    }

    componentDidUpdate(prevProps) {
      if (
        prevProps.totalResults !== this.props.totalResults ||
        prevProps.resultsByPage !== this.props.resultsByPage
      ) {
        this.setState({
          totalPages: Math.round(
            this.props.totalResults / this.props.resultsByPage
          )
        });
      }
    }

    handleChange(page) {
      this.props.onPageChange(page);
    }

    render() {
      const { totalPages, maxPagesCount } = this.state;
      const { currentPage, ariaLabel } = this.props;

      return (
        <Fragment>
          <WrappedComponent {...this.props} />
          <Pagination
            totalPages={totalPages}
            maxPagesCount={maxPagesCount}
            currentPage={currentPage}
            ariaLabel={ariaLabel}
            onChange={this.handleChange.bind(this)}
          />
        </Fragment>
      );
    }
  }

  PaginationHOC.displayName = `WithPagination(${WrappedComponent.displayName ||
    WrappedComponent.name ||
    'Component'})`;

  return PaginationHOC;
};

export default paginationHOC;
