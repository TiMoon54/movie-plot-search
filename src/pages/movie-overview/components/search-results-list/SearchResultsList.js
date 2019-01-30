import React from 'react';
import propTypes from 'prop-types';
import './search-results-list.css';
import List from '../../../../components/list/List';
import SingleSearchResult from '../single-search-result/SingleSearchResult';
import paginationHOC from '../../../../components/pagination/paginationHOC';

const SearchResultsList = ({ listData, itemProps }) => (
  <div className={'search-results-list'}>
    <List
      ItemTemplate={SingleSearchResult}
      data={listData}
      itemProps={itemProps}
    />
  </div>
);

SearchResultsList.propTypes = {
  listData: propTypes.arrayOf(propTypes.object),
  itemProps: propTypes.object
};

export default paginationHOC(SearchResultsList);
