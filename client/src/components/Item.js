import React from 'react';
import { Link } from 'react-router-dom';

const Item = props => {
  return (
    <div>
      <h2>{props.item}</h2>
    </div>
  );
};

export default Item;
