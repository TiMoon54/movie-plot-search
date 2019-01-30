import React from 'react';
import propTypes from 'prop-types';

const List = ({ ItemTemplate, data, itemProps }) => (
  <ul className={'list-group'}>
    {data.map((el, id) => (
      <li className={'list-group-item'} key={id}>
        <ItemTemplate {...el} {...itemProps} />
      </li>
    ))}
  </ul>
);

List.propTypes = {
  ItemTemplate: propTypes.oneOfType([propTypes.node, propTypes.func]),
  data: propTypes.arrayOf(propTypes.object),
  itemProps: propTypes.object
};

export default List;
