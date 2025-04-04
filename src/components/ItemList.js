import { Link } from 'react-router-dom';
import React from 'react';
const ItemList = ({ items }) => (
  <div>
    <h1 data-testid="item-list-header">Item List</h1>
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <Link to={`/items/${item.id}`} data-testid={`item-${item.id}`}>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default ItemList;

