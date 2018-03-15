import React from 'react';
import { Link } from 'react-router-dom';

const Item = props => {
  return (
    <div>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>
      <p>Costs: ${props.item.cost}</p>
    </div>
  );
};

export default Item;
