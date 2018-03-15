import React from 'react';
import { Link } from 'react-router-dom';

const Item = props => {
  console.log(props);
  return (
    <div>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>
      <p>Costs: ${props.item.cost}</p>
      <Link to={`/menu/edit/${props.item.id}`}>Edit Item</Link>
    </div>
  );
};

export default Item;
