import React from 'react';
import propTypes from 'prop-types';

const Search = ({ onSearch, onChange, value }) => (
  <div className={'input-group'}>
    <input
      type="text"
      className={'form-control'}
      onChange={e => onChange(e.target.value)}
      value={value}
    />
    <div className="input-group-append">
      <button className={'btn btn-primary'} onClick={onSearch}>
        Search
      </button>
    </div>
  </div>
);

Search.propTypes = {
  onSearch: propTypes.func,
  onChange: propTypes.func,
  value: propTypes.string
};

export default Search;
